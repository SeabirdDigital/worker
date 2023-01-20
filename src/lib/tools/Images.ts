import type { Site } from '$lib/stores/site';
import admin from 'firebase-admin';

export const getPageImages = async (site: Site, pageId: string | undefined = undefined) => {
	const bucket = admin.storage().bucket('gs://seabirdportal.appspot.com');
	const imageFiles = pageId ? site.pages[pageId]?.images : site.data?.images;

	const images: { [filename: string]: string } = {};
	for (const imageId in imageFiles) {
		images[imageId] = (
			await bucket
				.file(site.id + '/' + (pageId ? pageId + '/' : '') + imageFiles[imageId])
				.getSignedUrl({
					action: 'read',
					expires: '03-17-2025' // this is an arbitrary date
				})
		)[0];
	}

	return images;
};
