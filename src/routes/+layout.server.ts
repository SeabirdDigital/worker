import type { Site } from '$lib/stores/site';
import { getPageImages } from '$lib/tools/Images';
import { getFirestore } from 'firebase-admin/firestore';
import type { LayoutServerLoad } from './$types';

import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (data) => {
	const host = new URL(data.request.url).host;

	const firestore = getFirestore();

	const sites = await firestore.collection('sites').listDocuments();

	let currentSite: Site | undefined = undefined;
	for (const s of sites) {
		const site = await s.get();
		const hosts = site.get('siteData.hosts') as string[] | undefined;

		if (hosts)
			for (const h of hosts) {
				if (h == (import.meta.env.VITE_HOST ?? host)) {
					currentSite = { ...(site.data() as Site), id: s.id };
					break;
				}
			}

		if (currentSite) break;
	}

	const pageId = data.url.pathname == '/' ? 'home' : data.url.pathname;

	if (currentSite?.pages[pageId]) {
		currentSite.data = {
			...currentSite.data,
			images: await getPageImages(currentSite)
		};
		currentSite.pages[pageId].images = await getPageImages(
			currentSite,
			data.url.pathname == '/' ? 'home' : data.url.pathname
		);

		return {
			currentSite
		};
	}

	throw error(404, 'Not found');
};
