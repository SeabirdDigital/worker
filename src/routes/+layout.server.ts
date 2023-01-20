import { getFirestore } from 'firebase-admin/firestore';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (data) => {
	const host = new URL(data.request.url).host;

	const firestore = getFirestore();

	const sites = await firestore.collection('sites').listDocuments();

	let currentSite: FirebaseFirestore.DocumentData | undefined = undefined;
	for (const s of sites) {
		const site = await s.get();
		const hosts = site.get('siteData.hosts') as string[] | undefined;

		if (hosts)
			for (const h of hosts) {
				if (h == (import.meta.env.VITE_HOST ?? host)) {
					currentSite = site.data();
					break;
				}
			}

		if (currentSite) break;
	}

	return {
		currentSite
	};
};
