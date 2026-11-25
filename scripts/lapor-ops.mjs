// Laporkan hasil workflow sinkron ke Atapura Ops (Ops DECISIONS 234, website DECISIONS 100). Dipanggil di akhir sinkron-ops.yml
// dengan status job ("success"/"failure"). Gagal → Hari ini pemilik di Ops menampilkan pengingat merah berisi pesan galat.
// Tidak pernah menggagalkan workflow (laporan hanya pemberitahuan).
import { existsSync, readFileSync } from 'node:fs';

const ok = process.argv[2] === 'success';
const galat = existsSync('sinkron-galat.txt')
  ? readFileSync('sinkron-galat.txt', 'utf8').split('\n').map((l) => l.trim()).filter((l) => /Error|galat|gagal|Assertion/i.test(l)).at(-1) ?? ''
  : '';
const versi = existsSync('src/data/ops.json') ? JSON.parse(readFileSync('src/data/ops.json', 'utf8')).versi ?? null : null;
const run = process.env.GITHUB_RUN_ID ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null;
const pesan = ok ? '' : (galat.replace(/^.*?(Error|AssertionError)[^:]*:\s*/, '') || 'langkah sinkron gagal, lihat log workflow website').slice(0, 480);
const url = `${(process.env.OPS_URL ?? 'https://atapura-ops.vercel.app').replace(/\/$/, '')}/api/publik/sinkron-status`;
try {
  if (!process.env.SINKRON_SECRET) throw new Error('SINKRON_SECRET kosong');
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-atapura-secret': process.env.SINKRON_SECRET },
    body: JSON.stringify({ ok, pesan, versi, run }),
    signal: AbortSignal.timeout(20_000),
  });
  console.log(`Lapor ke Ops: ${ok ? 'berhasil' : 'gagal'} → ${r.status}`);
} catch (e) {
  console.log(`::warning::Tidak bisa melapor status sinkron ke Ops: ${e.message}`);
}
