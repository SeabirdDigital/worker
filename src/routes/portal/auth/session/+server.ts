import type { RequestHandler } from '@sveltejs/kit';
import { auth } from 'firebase-admin';

export const POST: RequestHandler = async ({ request }) => {
	const data: { idToken: string } = await request.json();

	const expiresIn = 60 * 60 * 24 * 1 * 1000;
	try {
		const sessionCookie = await auth().createSessionCookie(data.idToken, { expiresIn });

		const res = new Response();
		res.headers.append(
			'Set-Cookie',
			`session=${sessionCookie};Max-Age=${expiresIn};httpOnly;secure;path=/portal`
		);

		return res;
	} catch (error) {
		return new Response('UNAUTHORIZED REQUEST', { status: 401 });
	}
};
