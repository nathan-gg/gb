
// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const dev = process.argv.includes('dev')

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://svelte.dev/docs/kit/integrations
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		adapter: adapter({
// 			fallback: '404.html'
// 		}),
// 		paths: {
// 			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
// 		}
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
// More explicit base path handling
const basePath = '/gb';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Output to 'build' directory - make sure this aligns with the path in deploy.yml
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/gb' : '',
		},
		prerender: {
			handleHttpError: 'warn' // optional, helps ignore missing pages during prerender
		},
		
	}
};

console.log(`Using base path: "${basePath}"`);

export default config;