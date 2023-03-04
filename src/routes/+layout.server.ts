import type { Site } from '$lib/stores/site';
import { getImage, getImages } from '$lib/tools/Images';
import { getFirestore } from 'firebase-admin/firestore';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (data) => {
	const url = new URL(data.request.url);
	const host = url.searchParams.get('host') ?? import.meta.env.VITE_HOST ?? url.host;

	const firestore = getFirestore();

	const sites = await firestore.collection('sites').listDocuments();

	let currentSite: Site | undefined = undefined;
	for (const s of sites) {
		const site = await s.get();
		const hosts = site.get('siteData.hosts') as string[] | undefined;

		if (hosts)
			for (const h of hosts) {
				if (h == host) {
					currentSite = { ...(site.data() as Site), id: s.id };
					break;
				}
			}

		if (currentSite) break;
	}
	console.log(!!currentSite);

	const pathname = data.url.pathname;
	const pageId = pathname == '/' ? 'home' : pathname.substring(1).replace('portal/edit/', '');

	if (currentSite && (pageId == 'home' ? currentSite.pages.home : currentSite.pages[pageId])) {
		console.log(currentSite?.pages);
		currentSite.data = {
			...currentSite.data,
			images: await getImages(currentSite)
		};
		currentSite.pages[pageId].images = await getImages(currentSite, pageId);

		currentSite.siteData.ico = await getImage(currentSite, currentSite.siteData.ico);

		console.log('returning');
		return {
			currentSite,
			pageId
		};
	}
	if (pathname.startsWith('/portal')) {
		return { currentSite };
	}

	throw Error('Page not found ig ' + pageId);
};
