import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://dhpmcc.org',
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
});
