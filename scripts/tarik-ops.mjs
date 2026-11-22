// Tarik angka katalog dari Atapura Ops → src/data/ops.json (Ops DECISIONS 123, website DECISIONS 055).
// Jalankan: npm run tarik-ops. Butuh SINKRON_SECRET (env; lokal boleh dibaca dari ../Atapura Ops/.env.local).
// Gagal keras bila kunci salah, Ops tidak menjawab, atau ada kode wajib yang hilang — ops.json lama tetap utuh.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const akar = join(dirname(fileURLToPath(import.meta.url)), '..');
const tujuan = join(akar, 'src/data/ops.json');

/** Kode varian Ops yang dibaca src/data/harga.ts. Tambah di sini bila harga.ts membaca kode baru. */
export const KODE_WAJIB = [
  'GT-JAVABITUMEN', 'GT-CTI', 'GT-MAXXI', 'GT-VICTORY', 'GT-TEGOLA',
  'GT-CTI-CT6', 'GT-VICTORY-2T', 'GT-TEGOLA-PREM-TRAD', 'GT-TEGOLA-PREM-MOSAIK', 'GT-TEGOLA-PREM-GOTHIK',
  'GT-TEGOLA-TOP', 'GT-TEGOLA-TOP-TRAD', 'GT-TEGOLA-ECO-RECT', 'GT-TEGOLA-ECO-TRAD', 'GT-TEGOLA-ECO-HEX',
  'AL-MULTIPLEK-12', 'AL-GRC-9', 'LK-UNDERLAYER', 'LK-MEMBRANE', 'FL-U', 'FL-Z',
  'PL-SHUNDA', 'PL-JAVAFON', 'RK-TASO', 'RK-HISTEEL', 'RK-KSTEEL', 'JASA-RANGKA',
  'PAKU', 'SKRUP', 'JASA-PASANG',
];

function rahasia() {
  if (process.env.SINKRON_SECRET) return process.env.SINKRON_SECRET;
  const env = join(akar, '../Atapura Ops/.env.local');
  if (existsSync(env)) {
    const baris = readFileSync(env, 'utf8').split('\n').find((l) => l.startsWith('SINKRON_SECRET='));
    if (baris) return baris.slice('SINKRON_SECRET='.length).replace(/^"|"$/g, '').trim();
  }
  throw new Error('SINKRON_SECRET belum ada (env atau ../Atapura Ops/.env.local)');
}

const angka = (x, nama) => {
  if (typeof x !== 'number' || !Number.isFinite(x) || x < 0) throw new Error(`angka ${nama} tidak sah: ${x}`);
  return x;
};

const url = `${(process.env.OPS_URL ?? 'https://atapura-ops.vercel.app').replace(/\/$/, '')}/api/publik/katalog`;
const res = await fetch(url, { headers: { 'x-atapura-secret': rahasia() } });
const d = await res.json().catch(() => null);
if (!res.ok || !d?.ok) throw new Error(`Ops menjawab ${res.status}: ${d?.galat ?? 'bukan JSON'}`);

const hilang = KODE_WAJIB.filter((k) => !d.varian?.[k]);
if (hilang.length) throw new Error(`kode wajib tidak ada di pricelist Ops ${d.versi}: ${hilang.join(', ')}`);
const varian = {};
for (const k of KODE_WAJIB) {
  const v = d.varian[k];
  varian[k] = { nama: v.nama, satuan: v.satuan, harga: angka(v.harga, `${k}.harga`), hargaMaks: v.hargaMaks === null ? null : angka(v.hargaMaks, `${k}.hargaMaks`), isiKemasan: v.isiKemasan, cakupan: angka(v.cakupan, `${k}.cakupan`) };
}
for (const [k, v] of Object.entries(d.angka)) (Array.isArray(v) ? v : [v]).forEach((x, i) => angka(x, `angka.${k}[${i}]`));
const isi = { versi: d.versi, berlakuSejak: d.berlakuSejak, varian, angka: d.angka };

const baru = `${JSON.stringify(isi, null, 2)}\n`;
const lama = existsSync(tujuan) ? readFileSync(tujuan, 'utf8') : '';
if (baru === lama) {
  console.log(`ops.json sudah sama dengan Ops (${d.versi}).`);
} else {
  const sebelum = lama ? JSON.parse(lama) : { varian: {} };
  const berubah = KODE_WAJIB.filter((k) => JSON.stringify(sebelum.varian[k]) !== JSON.stringify(varian[k]));
  writeFileSync(tujuan, baru);
  console.log(`ops.json diperbarui ke ${d.versi} (berlaku ${d.berlakuSejak}). Berubah: ${berubah.join(', ') || 'versi/angka bisnis'}`);
}
