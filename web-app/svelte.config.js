import adapter from '@sveltejs/adapter-static';
import { readFileSync } from 'fs';

const slugs = JSON.parse(readFileSync('./static/data/slugs.json', 'utf-8'));
const entries = ['/', ...slugs.map(s => `/detail/${s}`)];

console.log(`Prerendering ${entries.length} routes`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			pages: '../build',
			assets: '../build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: entries,
			crawl: true,
			handleHttpError: ({ path, message }) => {
				console.warn(`Warning: ${path}: ${message}`);
			}
		}
	}
};

export default config;
