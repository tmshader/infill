// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'INFILL',
			customCss: [
				// Relative path to your @font-face CSS file.
				'./src/styles/custom.css',
				'@fontsource/poppins/400.css',
				'@fontsource/poppins/500.css',
			],
			social: {
				github: 'https://github.com/qcoral/sigmazero',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Printers',
					autogenerate: { directory: 'printers' },
				},
			],
		}),
	],
});
