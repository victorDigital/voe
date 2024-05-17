import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	let params: any[] = [];
	for (const [key, value] of url.searchParams.entries()) {
		console.log(`${key}, ${value}`);
		params.push({ key, value });
	}
	return { params };
}) satisfies PageServerLoad;
