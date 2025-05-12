
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
		  // Output directory for your static build
		  pages: 'build',
		  assets: 'build',
		  fallback: 'index.html',
		  precompress: false
		}),
		// If your site is going to be hosted at a subdirectory, specify it here
		paths: {
		  base: '/gb'
		}
	  }
};

export default config;
