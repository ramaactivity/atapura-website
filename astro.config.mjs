// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Satu-satunya tempat alamat situs. Ganti lewat env SITE_URL saat domain sendiri dipasang.
const site = process.env.SITE_URL ?? 'https://atapura.com';

// lastmod sitemap (DECISIONS 078): tanggal `diperbarui` artikel & halaman area dari frontmatter. Halaman lain tanpa lastmod
// (lebih jujur daripada tanggal build). Artikel terjadwal tetap disaring oleh filter halaman yang memang tidak dibangun.
const lastmod = new Map();
for (const [folder, awalan] of [['panduan', '/panduan/'], ['area', '/area/'], ['guides', '/en/guides/']]) {
  for (const f of readdirSync(`src/content/${folder}`).filter((x) => x.endsWith('.md'))) {
    const t = readFileSync(`src/content/${folder}/${f}`, 'utf8').match(/^diperbarui: '?(\d{4}-\d{2}-\d{2})/m)?.[1];
    if (t) lastmod.set(new URL(awalan + f.replace(/\.md$/, ''), site).href, t);
  }
}

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact(), sitemap({
    filter: (url) => !url.includes('/internal') && !url.includes('/branding'),
    serialize: (item) => (lastmod.has(item.url) ? { ...item, lastmod: lastmod.get(item.url) } : item),
  })]
});
