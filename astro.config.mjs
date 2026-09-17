// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.lyzario.fr',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      // Pages non indexées exclues du sitemap
      filter: (page) => !/\/(cgv|404)$/.test(page.replace(/\/$/, '')),
    }),
  ],
  fonts: [
    {
      name: 'Instrument Serif',
      cssVariable: '--font-instrument-serif',
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
