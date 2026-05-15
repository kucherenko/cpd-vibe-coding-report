import { getDetail, allSlugs } from '$lib/data/detail-index.js';

export function entries() {
	return allSlugs.map(slug => ({ slug }));
}

export function load({ params }) {
	return { detail: getDetail(params.slug) };
}
