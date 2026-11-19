// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// Satu-satunya tempat alamat situs. Ganti lewat env SITE_URL saat domain sendiri dipasang.
const site = process.env.SITE_URL ?? 'https://atapura.com';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact(), sitemap({ filter: (url) => !url.includes('/internal') })]
});
