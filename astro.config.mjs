// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// import vercel from '@astrojs/vercel';
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [
    mdx(), 
    icon({
      iconDir: "src/icons"
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  adapter: vercelStatic({})
});