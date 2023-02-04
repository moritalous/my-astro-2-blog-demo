import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://moritalous.github.io',
    base: '/my-astro-2-blog-demo',
	integrations: [mdx(), sitemap()],
});
