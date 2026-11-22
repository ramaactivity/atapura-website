// Cek artikel sebelum dijadwalkan (DECISIONS 065, standar di docs/riset/kalender-konten-2026-12.md).
// Pakai: node tools/artikel/cek.mjs src/content/panduan/a.md [b.md …]   → keluar 1 bila ada pelanggaran.
// Yang dicek: panjang judul/ringkasan/jawaban, merek & kata terlarang, tautan internal (harus ada dan sudah tayang pada tanggal
// terbit artikel), tabel teks > 3 kolom (terpotong di HP). Fakta & sumber tetap diperiksa manusia/agen — skrip ini tidak bisa.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const akar = join(import.meta.dirname, '../..');
const TERLARANG = [
  /onduline|onduvilla|alderon|\biko\b|\bgaf\b|owens corning|malarkey|archiplus|dokter ?atap|dokteratap|atapomah|yusuf/i,
  /\btkdn\b(?!.*kemenperin)/i, // TKDN hanya boleh sebagai arahan cek ke inventaris Kemenperin
  /produk lokal|buatan dalam negeri/i,
  /multiplek 9 ?mm/i,
  /\bterbaik\b|\btermurah\b|\bpasti\b|\bdijamin\b|rekening/i,
  /selamat menikmati|sehat (?:&|dan) sukses/i,
];

const frontmatter = (teks) => {
  const m = teks.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error('frontmatter tidak ditemukan');
  const ambil = (k) => m[1].match(new RegExp(`^${k}: '((?:[^']|'')*)'`, 'm'))?.[1].replaceAll("''", "'") ?? m[1].match(new RegExp(`^${k}: (.*)$`, 'm'))?.[1];
  return { ambil, isi: m[2], fm: m[1] };
};
const terbitDari = (file) => {
  const t = readFileSync(file, 'utf8').match(/^terbit: '?(\d{4}-\d{2}-\d{2})/m);
  return t?.[1];
};

let gagal = 0;
for (const file of process.argv.slice(2)) {
  const salah = [];
  const { ambil, isi, fm } = frontmatter(readFileSync(file, 'utf8'));
  const judul = ambil('judul') ?? '', ringkasan = ambil('ringkasan') ?? '', jawaban = ambil('jawaban') ?? '';
  const terbit = terbitDari(file);
  if (judul.length > 70) salah.push(`judul ${judul.length} > 70 karakter`);
  if (ringkasan.length > 160) salah.push(`ringkasan ${ringkasan.length} > 160 karakter`);
  const kata = jawaban.split(/\s+/).filter(Boolean).length;
  if (kata < 35 || kata > 75) salah.push(`jawaban ${kata} kata (target 40–60)`);
  if (!/^sampulAlt: 'Ilustrasi/m.test(fm) && /magnific/.test(fm)) salah.push('sampulAlt gambar AI harus diawali "Ilustrasi"');
  // Pengecualian yang sudah diperiksa manusia ditulis di isi artikel: <!-- cek-izinkan: terbaik --> (mis. kata kunci pencarian
  // "merek terbaik" yang dijawab "tidak ada satu merek terbaik").
  const izin = [...isi.matchAll(/<!-- cek-izinkan: ([^>]+?) -->/g)].map((m) => m[1].toLowerCase());
  for (const pola of TERLARANG) {
    const ketemu = (fm + isi).match(pola);
    if (ketemu && !izin.includes(ketemu[0].toLowerCase())) salah.push(`kata terlarang: "${ketemu[0]}"`);
  }
  for (const baris of isi.split('\n')) {
    if (/^\|.*\|$/.test(baris) && !/^\|[-:| ]+\|$/.test(baris)) {
      const sel = baris.split('|').slice(1, -1);
      if (sel.length > 3 && sel.some((s) => s.trim().length > 12)) { salah.push(`tabel ${sel.length} kolom berisi teks: ${baris.slice(0, 60)}…`); break; }
    }
  }
  for (const [, href] of isi.matchAll(/\]\((\/[^)#\s]*)/g)) {
    const [, jenis, slug] = href.match(/^\/(panduan|area|produk)\/([^/?]+)/) ?? [];
    if (!jenis) continue;
    if (jenis === 'produk') { if (!readFileSync(join(akar, 'src/data/produk.ts'), 'utf8').includes(`'${slug}'`) && slug !== 'aksesoris') salah.push(`produk tidak dikenal: ${href}`); continue; }
    const tujuan = join(akar, 'src/content', jenis, `${slug}.md`);
    if (!existsSync(tujuan)) { salah.push(`tautan putus: ${href}`); continue; }
    const t2 = jenis === 'panduan' ? terbitDari(tujuan) : null;
    if (t2 && terbit && t2 > terbit) salah.push(`menautkan artikel yang belum tayang (${t2}): ${href}`);
  }
  const masuk = readdirSync(join(akar, 'src/content/panduan')).filter((f) => f.endsWith('.md') && readFileSync(join(akar, 'src/content/panduan', f), 'utf8').includes(`/panduan/${basename(file, '.md')}`)).length;
  console.log(`${salah.length ? '✗' : '✓'} ${basename(file)} · terbit ${terbit} · judul ${judul.length} · ringkasan ${ringkasan.length} · jawaban ${kata} kata · tautan masuk ${masuk}`);
  for (const s of salah) console.log(`    - ${s}`);
  gagal += salah.length;
}
process.exit(gagal ? 1 : 0);
