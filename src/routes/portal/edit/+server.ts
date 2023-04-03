import type { Site } from '$lib/stores/site';
import type { RequestHandler } from '@sveltejs/kit';
import admin from 'firebase-admin';

export const POST: RequestHandler = async ({ request }) => {
	const data: { id: string; site: Site } = await request.json();

	console.log('hi');
	admin
		.firestore()
		.doc('sites/' + data.id)
		.update(data.site);

	return new Response();
};
