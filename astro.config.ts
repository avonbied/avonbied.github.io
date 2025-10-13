import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pwa from '@vite-pwa/astro';

import getConfig from './project.config.ts';

const defaultConfig = getConfig();

// https://astro.build/config
export default defineConfig({
	site: `${defaultConfig.site}:${defaultConfig.port}`,
	base: defaultConfig.base,
	integrations: [sitemap(), pwa()],
	server: {
		port: defaultConfig.port,
		host: true,
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 10000
			}
		}
	}
});
