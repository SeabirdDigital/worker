import type { Site } from '$lib/stores/site';
import site from '$lib/stores/site';
import { getImage, getImages } from '$lib/tools/Images';
import { redirect } from '@sveltejs/kit';
import { auth } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { get } from 'svelte/store';
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

	const sessionCookie = data.cookies.get('session') ?? '';

	let hasAccess = false;
	let errorWithCookie = false;
	await auth()
		.verifySessionCookie(sessionCookie, true)
		.then((claims) => {
			const id = claims.uid;
			console.log(id);
			const users = get(site).siteData.users;

			if (users)
				for (const userId in users) {
					if (Object.prototype.hasOwnProperty.call(users, userId)) {
						if (userId == id) {
							hasAccess = true;
							break;
						}
					}
				}
		})
		.catch(() => {
			errorWithCookie = true;
		});

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

		return {
			currentSite,
			pageId,
			isAdmin: !errorWithCookie && hasAccess
		};
	}
	if (pathname.startsWith('/portal')) {
		if (!url.pathname.startsWith('/portal/auth')) {
			if (errorWithCookie) {
				throw redirect(302, '/portal/auth/login');
			} else if (!hasAccess) {
				throw redirect(302, '/portal/auth/noAccess');
			}
		}
		if (url.pathname == '/portal/auth/login' && !errorWithCookie) {
			throw redirect(302, '/portal');
		}
		return { currentSite };
	}

	throw Error('Page not found ig ' + pageId);
};
