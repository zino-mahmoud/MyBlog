import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { HstSvelte } from '@histoire/plugin-svelte';
import { fileURLToPath, URL } from 'url';

const config: UserConfig = {
	plugins: [sveltekit()],
	histoire: {
		plugins: [HstSvelte()],
		setupFile: './src/histoire-setup.ts',
		vite: {
			resolve: {
				alias: {
					$lib: fileURLToPath(new URL('./src/lib', import.meta.url)),
				}
			}
		}
	}
};

export default config;
