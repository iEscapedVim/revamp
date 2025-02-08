// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import customToc from 'astro-custom-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://iescapedvim.com',
  integrations: [react(), icon(), tailwind(), customToc(), mdx()]
});