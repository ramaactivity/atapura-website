// Cetak /internal/pricelist ke PDF A4 (DECISIONS 051). Pakai: npm run pricelist  (= astro build + skrip ini)
// Butuh Google Chrome terpasang (CHROME=... untuk path lain). Harga dibaca dari src/data saat build, jadi
// setelah harga/katalog berubah cukup jalankan ulang. Server file kecil di bawah melayani dist/ (tanpa astro preview,
// yang hanya boleh satu per mesin).
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const keluar = resolve(process.argv[2] ?? 'docs/pricelist/pricelist-atapura.pdf');
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const dist = resolve('dist');
const JENIS = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2' };

const server = createServer(async (req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  for (const f of [p, `${p}.html`, join(p, 'index.html')]) {
    try {
      const isi = await readFile(join(dist, f));
      res.writeHead(200, { 'content-type': JENIS[extname(f)] ?? 'application/octet-stream' });
      return res.end(isi);
    } catch {}
  }
  res.writeHead(404).end();
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
try {
  const url = `http://127.0.0.1:${server.address().port}/internal/pricelist`;
  // Async: Chrome harus jalan terpisah supaya server di proses ini tetap bisa menjawab permintaannya.
  await promisify(execFile)(chrome, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=20000', `--print-to-pdf=${keluar}`, url]);
  console.log(`PDF: ${keluar}`);
} finally {
  server.close();
}
