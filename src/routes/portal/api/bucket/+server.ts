import site from '$lib/stores/site';
import type { RequestHandler } from '@sveltejs/kit';
import admin from 'firebase-admin';
import { get } from 'svelte/store';

export const GET: RequestHandler = async () => {
	console.log(get(site).id);
	const bucket = admin.storage().bucket('gs://seabirdportal.appspot.com');
	const [files] = await bucket.getFiles();

	const images: { id: string; url: string }[] = [];
	console.log(files);
	for (const file of files) {
		if (file.name && file.name.startsWith(get(site).id)) {
			const filePath = file.name.split('/');
			const id = filePath[filePath.length - 1];

			if (id != '')
				images.push({
					id,
					url: (
						await file.getSignedUrl({
							action: 'read',
							expires: '03-17-2025' // this is an arbitrary date
						})
					)[0]
				});
		}
	}

	return new Response(JSON.stringify(images));
};

export const POST: RequestHandler = async () => {
	return new Response();
};
