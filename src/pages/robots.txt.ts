import type { APIRoute } from 'astro';

// Satu aturan wildcard: semua crawler (termasuk crawler AI untuk pencarian & kutipan) boleh masuk.
// Daftar nama crawler justru mengecualikan bot yang tidak tercantum.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
