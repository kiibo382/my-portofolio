import sveltePreprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		adapter: static_adapter({
			pages: 'public',
			assets: 'public',
			fallback: null,
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

	}
};

export default config;
