// import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [
//     sveltekit(),
//     tailwindcss()
//   ],
// });


import { defineConfig } from 'vite';
// import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [sveltekit(),
  tailwindcss()
  ],
  optimizeDeps: {
    exclude: ['fsevents', 'lightningcss']
  },
  build: {
    commonjsOptions: {
      ignore: ['fsevents', 'lightningcss']
    }
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**']
    }
  }
});