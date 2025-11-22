import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import fonts from './src/config/astro/fonts';
console.dir(fonts, { depth: null });

export default defineConfig({

	vite: {
		plugins: [
			tailwindcss(),
		],
	},

	experimental: {
		fonts: fonts,
	},

	integrations: [
		mdx(),
	]

});
