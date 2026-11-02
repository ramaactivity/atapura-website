import type { APIRoute } from 'astro';
import { bisnis } from '../data/bisnis';

// Satu aturan wildcard: semua crawler (termasuk crawler AI untuk pencarian & kutipan) boleh masuk.
// Daftar nama crawler justru mengecualikan bot yang tidak tercantum.
export const GET: APIRoute = ({ site }) =>
  new Response(bisnis.konsep
    // Masa konsep: jangan diindeks (angka termin/garansi belum final).
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
