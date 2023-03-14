import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = () => {
	const res = new Response();
	res.headers.append(
		'Set-Cookie',
		`session=deleted;path=/portal;expires=Thu, Jan 01 1970 00:00:00 UTC`
	);

	return res;
};
