// Ekspor aset marketplace (website DECISIONS 059): tiap slide 1080 × 1080 dipotret Chrome headless lalu diubah ke JPG
// (sips bawaan macOS) di public/unduh/marketplace/<id>/<no>-<nama>.jpg. Pakai: npm run aset-marketplace
// (= astro build + skrip ini). Butuh Google Chrome (CHROME=... untuk path lain). Gagal keras bila ada berkas > 1 MB
// (batas Blibli) atau Chrome tidak menghasilkan gambar.
import { execFile } from 'node:child_process';
import { mkdir, readFile, rm, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve } from 'node:path';
import { promisify } from 'node:util';

const jalan = promisify(execFile);
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const dist = resolve('dist');
const publik = resolve('public');
const JENIS = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2', '.json': 'application/json' };

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
const asal = `http://127.0.0.1:${server.address().port}`;
const sementara = join(tmpdir(), `aset-marketplace-${process.pid}`);
await mkdir(sementara, { recursive: true });

try {
  const daftar = JSON.parse(await readFile(join(dist, 'internal/aset-marketplace/daftar.json'), 'utf8'));
  // Folder lama dibersihkan supaya slide yang sudah tidak ada (mis. data berubah) tidak tertinggal.
  await rm(join(publik, 'unduh/marketplace'), { recursive: true, force: true });
  let n = 0;
  for (const { halaman, berkas } of daftar) {
    const png = join(sementara, `${n}.png`);
    await jalan(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1080,1080', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=10000', `--screenshot=${png}`, `${asal}${halaman}`]);
    const jpg = join(publik, berkas);
    await mkdir(dirname(jpg), { recursive: true });
    await jalan('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '88', png, '--out', jpg]);
    const ukuran = (await stat(jpg)).size;
    if (ukuran > 1_000_000) throw new Error(`${berkas} ${Math.round(ukuran / 1024)} KB > 1 MB (batas Blibli)`);
    n++;
  }
  console.log(`Aset marketplace: ${n} gambar di public/unduh/marketplace`);
} finally {
  server.close();
  await rm(sementara, { recursive: true, force: true });
}
