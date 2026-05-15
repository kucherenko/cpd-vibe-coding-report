import { readFileSync } from 'fs';
import { resolve } from 'path';

export function load({ params }) {
	try {
		const filePath = resolve('web-app/static/data', `detail-${params.slug}.json`);
		const detail = JSON.parse(readFileSync(filePath, 'utf-8'));
		return { detail };
	} catch (e) {
		// Fallback to direct filesystem path relative to build
		const filePath2 = resolve('static/data', `detail-${params.slug}.json`);
		const detail2 = JSON.parse(readFileSync(filePath2, 'utf-8'));
		return { detail: detail2 };
	}
}
