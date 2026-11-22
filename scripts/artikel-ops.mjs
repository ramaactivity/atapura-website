// Jembatan artikel website ↔ Atapura Ops (website DECISIONS 067, Ops DECISIONS 145).
// 1) KIRIM: semua artikel yang sudah ditulis (src/content/panduan, src/content/guides) + topik kalender yang belum ditulis
//    (data/kalender-artikel.csv) → POST /api/publik/artikel. Ops menampilkannya di Lainnya → Artikel website.
// 2) TARIK: slug yang ditahan pemilik di Ops → src/data/artikel-ditahan.json, dibuang dari build oleh src/content.config.ts.
// Pakai: npm run artikel-ops. Butuh SINKRON_SECRET (env; lokal dibaca dari ../Atapura Ops/.env.local), OPS_URL opsional.
// Gagal (Ops mati, kunci salah) = keluar 1 dan artikel-ditahan.json lama tetap utuh (jangan diam-diam menayangkan yang ditahan).
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const akar = join(import.meta.dirname, '..');
const tujuan = join(akar, 'src/data/artikel-ditahan.json');
const OPS = (process.env.OPS_URL ?? 'https://atapura-ops.vercel.app').replace(/\/$/, '');

function rahasia() {
  if (process.env.SINKRON_SECRET) return process.env.SINKRON_SECRET;
  const env = join(akar, '../Atapura Ops/.env.local');
  const baris = existsSync(env) && readFileSync(env, 'utf8').split('\n').find((l) => l.startsWith('SINKRON_SECRET='));
  if (baris) return baris.slice('SINKRON_SECRET='.length).replace(/^"|"$/g, '').trim();
  throw new Error('SINKRON_SECRET belum ada (env atau ../Atapura Ops/.env.local)');
}

/** Nilai satu kunci frontmatter: 'teks' (petik tunggal, '' = ') atau nilai polos. */
function ambil(fm, kunci) {
  const m = fm.match(new RegExp(`^${kunci}: (?:'((?:[^']|'')*)'|(.*))$`, 'm'));
  return m ? (m[1] !== undefined ? m[1].replaceAll("''", "'") : m[2].trim()) : null;
}

/** CSV sederhana (koma, kutip ganda) → array objek per header. */
function bacaCsv(teks) {
  const baris = [];
  let sel = '', kolom = [], kutip = false;
  for (let i = 0; i < teks.length; i++) {
    const c = teks[i];
    if (kutip) {
      if (c === '"' && teks[i + 1] === '"') { sel += '"'; i++; } else if (c === '"') kutip = false; else sel += c;
    } else if (c === '"') kutip = true;
    else if (c === ',') { kolom.push(sel); sel = ''; }
    else if (c === '\n') { kolom.push(sel); baris.push(kolom); kolom = []; sel = ''; }
    else if (c !== '\r') sel += c;
  }
  if (sel || kolom.length) { kolom.push(sel); baris.push(kolom); }
  const [kepala, ...isi] = baris;
  return isi.filter((b) => b.length > 1).map((b) => Object.fromEntries(kepala.map((k, i) => [k, b[i] ?? ''])));
}

const kalender = new Map(bacaCsv(readFileSync(join(akar, 'data/kalender-artikel.csv'), 'utf8')).map((r) => [r.slug, r]));
const dariKalender = (r) => ({
  keyword: r?.keyword_utama || null,
  pilar: r?.pilar || null,
  lokal: r?.lokal === 'ya',
  skor: r?.skor_total ? Number(r.skor_total) : null,
});

const artikel = [];
for (const [folder, awalan] of [['panduan', '/panduan/'], ['guides', '/en/guides/']]) {
  for (const f of readdirSync(join(akar, 'src/content', folder)).filter((f) => f.endsWith('.md')).sort()) {
    const slug = f.slice(0, -3);
    const fm = readFileSync(join(akar, 'src/content', folder, f), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1];
    if (!fm) throw new Error(`frontmatter ${folder}/${f} tidak terbaca`);
    const jadwal = ambil(fm, 'terbit')?.replace(/'/g, '').slice(0, 10) ?? null;
    artikel.push({ slug, path: awalan + slug, judul: ambil(fm, 'judul') ?? slug, kategori: ambil(fm, 'kategori'), jadwal, status: 'terjadwal', ...dariKalender(kalender.get(slug)) });
  }
}
const sudah = new Set(artikel.map((a) => a.slug));
for (const [slug, r] of kalender) {
  if (sudah.has(slug)) continue;
  artikel.push({ slug, path: `/panduan/${slug}`, judul: r.judul_kerja, kategori: null, jadwal: /^\d{4}-\d{2}-\d{2}$/.test(r.jadwal) ? r.jadwal : null, status: 'rencana', ...dariKalender(r) });
}

const kepala = { 'x-atapura-secret': rahasia(), 'content-type': 'application/json' };
const kirim = await fetch(`${OPS}/api/publik/artikel`, { method: 'POST', headers: kepala, body: JSON.stringify({ artikel }) });
const hasilKirim = await kirim.json().catch(() => null);
if (!kirim.ok || !hasilKirim?.ok) throw new Error(`Ops menolak daftar artikel (${kirim.status}): ${hasilKirim?.galat ?? 'bukan JSON'}`);

const tarik = await fetch(`${OPS}/api/publik/artikel`, { headers: kepala });
const hasilTarik = await tarik.json().catch(() => null);
if (!tarik.ok || !hasilTarik?.ok || !Array.isArray(hasilTarik.ditahan)) throw new Error(`gagal menarik daftar tahanan (${tarik.status}): ${hasilTarik?.galat ?? 'bukan JSON'}`);
const baru = `${JSON.stringify([...hasilTarik.ditahan].sort(), null, 2)}\n`;
const lama = existsSync(tujuan) ? readFileSync(tujuan, 'utf8') : '';
if (baru !== lama) writeFileSync(tujuan, baru);
console.log(`artikel-ops: ${hasilKirim.diterima} artikel dikirim (${artikel.filter((a) => a.status === 'rencana').length} rencana); ditahan: ${hasilTarik.ditahan.length ? hasilTarik.ditahan.join(', ') : 'tidak ada'}${baru !== lama ? ' (berubah)' : ''}`);
