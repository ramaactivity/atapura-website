// Kabari Bing/Yandex/Seznam (IndexNow) bahwa halaman situs berubah: semua URL di sitemap produksi dikirim sekaligus.
// Indeks Bing juga dipakai ChatGPT search & Copilot, jadi halaman baru lebih cepat bisa dikutip AI (DECISIONS 102).
// Pakai setelah deploy: npm run indexnow. Kunci = nama file public/<kunci>.txt (isinya sama), boleh publik.
const KUNCI = '5af0096afb141e9949240cfc75c691fb';
const situs = 'https://atapura.com';
const peta = await (await fetch(`${situs}/sitemap-0.xml`)).text();
const urlList = [...peta.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('sitemap kosong');
const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'atapura.com', key: KUNCI, keyLocation: `${situs}/${KUNCI}.txt`, urlList }),
});
console.log(`indexnow: ${urlList.length} URL → HTTP ${r.status}`);
if (r.status >= 400) process.exit(1);
