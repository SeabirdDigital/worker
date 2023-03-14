import { page } from '$app/stores';
import site from '$lib/stores/site';
import { redirect, type ServerLoad } from '@sveltejs/kit';
import { auth } from 'firebase-admin';
import { get } from 'svelte/store';

export const load: ServerLoad = async ({ cookies, url }) => {
	const sessionCookie = cookies.get('session') ?? '';

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

	return {};
};
