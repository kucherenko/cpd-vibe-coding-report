import { details } from './details.js';

export function getDetail(slug) {
	return details[slug] || null;
}

export const allSlugs = Object.keys(details);
