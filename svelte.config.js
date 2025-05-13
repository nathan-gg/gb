
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

// import adapter from '@sveltejs/adapter-vercel';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const dev = process.argv.includes('dev');
// // More explicit base path handling
// const basePath = '/gb';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://svelte.dev/docs/kit/integrations
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		adapter: adapter({
// 		  runtime: 'nodejs18.x',
// 		}),
// 	  },
// 	};
	 
// 	export default config;
	

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    prerender: {
      handleHttpError: 'warn' // optional: ignore missing assets during build
    }
  }
};

export default config;


