// Kit listing marketplace (Ops DECISIONS 125 tahap C, website DECISIONS 058): judul, deskripsi, varian, atribut, berat &
// dimensi kirim, dan keyword per produk — semua DITURUNKAN dari produk.ts, aksesoris.ts, harga.ts (angka dari Atapura Ops),
// bisnis.ts. Jangan ketik spesifikasi di sini. Harga tayang tidak di sini: ada di Ops → Harga marketplace (satu sumber).
// Aturan isi: tanpa klaim tak bersumber, tanpa batas wilayah, tanpa nomor/link luar platform (dilarang di deskripsi
// marketplace). Angka yang belum pasti masuk `cek` (ditampilkan "Perlu dicek"), tidak ditebak.
import { aksesoris } from './aksesoris';
import { bisnis } from './bisnis';
import { harga } from './harga';
import { asalMerek } from './mitra';
import { type Produk, produk } from './produk';

/**
 * Batas yang dipegang kit: judul ≤ 100 & deskripsi ≤ 3.000 karakter lolos di keempat marketplace.
 * Sumber (dicek 20 Nov 2026): Shopee mass upload resmi (judul 5–100, deskripsi 20–3.000); Tokopedia & TikTok Shop Seller
 * Center resmi (judul ≥ 25; batas atas belum terverifikasi); Lazada dokumen developer (judul ≤ 255, deskripsi ≤ 25.000);
 * Blibli panduan seller 2021 (deskripsi ≤ 4.000; batas judul belum terverifikasi).
 */
export const BATAS = { judulMin: 25, judulMaks: 100, deskripsiMaks: 3000 } as const;
export const MARKETPLACE_BATAS = [
  { nama: 'Shopee', judul: '5–100 karakter', deskripsi: '20–3.000 karakter', sumber: 'Template mass upload Shopee (resmi)' },
  { nama: 'Tokopedia & TikTok Shop', judul: 'minimal 25 karakter', deskripsi: 'belum terverifikasi', sumber: 'Seller Center (resmi, 27 Agu 2026)' },
  { nama: 'Lazada', judul: 'maksimal 255 karakter', deskripsi: 'maksimal 25.000 karakter', sumber: 'Dokumen API Lazada Open Platform' },
  { nama: 'Blibli', judul: 'belum terverifikasi', deskripsi: 'maksimal 4.000 karakter', sumber: 'Panduan Blibli Seller Center 2021' },
] as const;

export type Listing = {
  id: string;
  kelompok: 'genteng' | 'aksesoris' | 'jasa';
  nama: string;
  /** Satuan yang dijual di marketplace. */
  satuan: string;
  judul: string;
  /** Cadangan ≤ 70 karakter (judul lama Tokopedia / tampilan sempit). */
  judulPendek: string;
  deskripsi: string;
  varian: { judul: string; pilihan: string[] } | null;
  atribut: { label: string; nilai: string }[];
  kirim: { berat: string | null; dimensi: string | null };
  keyword: string[];
  /** Hal yang wajib dicek sebelum upload. */
  cek: string[];
};

const angka = (n: number) => n.toLocaleString('id-ID', { maximumFractionDigits: 2 });
const nilai = (daftar: { label: string; nilai: string }[], ...label: string[]) => daftar.find((x) => label.includes(x.label))?.nilai;
const bersih = (t: string) => t.replace(/\s*Spesifikasi teknis menunggu dokumen resmi\.?/g, '').replace(/\s*Syarat garansi pabrik menunggu dokumen resmi\.?/g, '').trim();
const pasJudul = (...calon: string[]) => calon.find((c) => c.length <= BATAS.judulMaks) ?? calon[calon.length - 1].slice(0, BATAS.judulMaks);
const garansiPasang = bisnis.garansiPemasanganTahun;
const susutPct = Math.round(harga.susut * 100);

const penutupPasang = () =>
  [
    'BUTUH PEMASANGAN?',
    `Atapura juga aplikator atap bitumen: survey dan ukur dulu, lalu penawaran tertulis.${garansiPasang ? ` Pemasangan oleh tim Atapura bergaransi tertulis ${garansiPasang} tahun.` : ''} Chat kami untuk jadwal survey.`,
  ].join('\n');

const rapikan = (baris: (string | false | null | undefined)[]) =>
  baris
    .filter((x): x is string => typeof x === 'string')
    .filter((x, i, a) => !(x === '' && a[i - 1] === ''))
    .join('\n')
    .trim();

// ── Genteng: satu listing per seri, warna = varian ──────────────────────────────────────────────────────────────
function listingGenteng(p: Produk, s: Produk['seri'][number]): Listing {
  const nm = s.nama.toLowerCase().includes(p.nama.toLowerCase().slice(0, 4)) ? s.nama : `${p.nama} ${s.nama}`;
  const asal = asalMerek[p.nama];
  const cek: string[] = [];
  const isi = nilai(s.spek, 'Isi per bundel');
  const m2Spek = isi?.match(/([\d.,]+)\s*m²/);
  // Isi m² dari Ops hanya berlaku untuk seri yang memang tercatat di Ops (CTI "semua seri" = CT3; Tegola = Premium Rectangular).
  const fallbackSah = !(p.slug === 'cti' && s.nama !== 'CT3') && !(p.slug === 'tegola' && s.nama !== 'Premium Rectangular');
  const m2 = m2Spek ? Number(m2Spek[1].replace(',', '.')) : p.harga && fallbackSah ? harga.merek[p.harga].m2PerBundel : null;
  if (!m2) cek.push('Isi m² per bundel belum pasti untuk seri ini — minta brosur/isi pak ke vendor.');
  const beratSpek = nilai(s.spek, 'Berat');
  const kgBundel = beratSpek?.match(/\(([\d.,]+)\s*kg per bundel\)/);
  const kgM2 = beratSpek?.match(/±?([\d.,]+)\s*kg\/m²/);
  const berat = kgBundel ? `${kgBundel[1]} kg per bundel` : kgM2 && m2 ? `±${angka(Number(kgM2[1].replace(',', '.')) * m2)} kg per bundel (dihitung dari berat per m²)` : null;
  if (!berat) cek.push('Berat paket belum ada — timbang satu bundel.');
  const ukuran = nilai(s.spek, 'Ukuran per lembar');
  cek.push('Tinggi tumpukan bundel belum tercatat — ukur untuk kolom dimensi paket.');
  const garansi = p.terverifikasi ? nilai(s.spek, 'Garansi', 'Garansi pabrik') ?? nilai(p.fakta, 'Garansi produk') : undefined;
  const thGaransi = garansi?.match(/(\d+)\s*tahun/)?.[1];
  const kemiringan = nilai(p.fakta, 'Kemiringan');
  const warna = p.warna.filter((g) => g.judul === s.nama || p.warna.length === 1).flatMap((g) => g.daftar.map((w) => (w.kode ? `${w.nama} (${w.kode})` : w.nama)));
  const contohBundel = m2 ? Math.ceil((100 * (1 + harga.susut)) / m2) : null;

  const judul = pasJudul(
    `Genteng Aspal Bitumen ${nm}${m2 ? ` Isi ${angka(m2)} m²/Bundel` : ''}${thGaransi ? ` Garansi ${thGaransi} Tahun` : ''} Atap Shingle`,
    `Genteng Aspal Bitumen ${nm}${m2 ? ` Isi ${angka(m2)} m²/Bundel` : ''}${thGaransi ? ` Garansi ${thGaransi} Tahun` : ''}`,
    `Genteng Aspal ${nm}${m2 ? ` ${angka(m2)} m²/Bundel` : ''}`,
  );
  const judulPendek = `Genteng Aspal ${nm}${m2 ? ` ${angka(m2)} m²/Bundel` : ''}`.slice(0, 70);

  const deskripsi = rapikan([
    `${nm}, genteng aspal (asphalt shingle)${asal ? ` buatan ${asal}` : ''}. ${bersih(s.ringkas)}`,
    '',
    'SPESIFIKASI',
    m2 ? `• Isi per bundel: ${angka(m2)} m²${isi && !m2Spek ? ` (${isi})` : ''}` : isi ? `• Isi per bundel: ${isi}` : null,
    ...s.spek.filter((k) => k.label !== 'Isi per bundel').map((k) => `• ${k.label}: ${k.nilai}`),
    kemiringan ? `• Kemiringan atap: ${kemiringan}` : null,
    '',
    warna.length ? 'PILIHAN WARNA' : null,
    warna.length ? `${warna.join(', ')}. Pilih di varian. Warna di layar bisa sedikit berbeda dari aslinya.` : null,
    '',
    'CARA PASANG',
    'Genteng aspal dipaku di atas papan alas (multiplek atau GRC) yang sudah dilapisi underlayer. Papan alas, underlayer, paku bitumen, dan flashing tersedia terpisah di toko kami.',
    '',
    m2 ? 'HITUNG KEBUTUHAN' : null,
    m2 ? `Jumlah bundel = luas atap (m²) ÷ ${angka(m2)}, lalu tambah sekitar ${susutPct}% untuk potongan dan sambungan. Contoh: atap 100 m² butuh ±${contohBundel} bundel.` : null,
    '',
    garansi ? 'GARANSI' : null,
    garansi ? `Garansi pabrik ${garansi}, mengikuti syarat dokumen garansi pabrik.` : null,
    '',
    penutupPasang(),
  ]);

  const merek = p.nama;
  return {
    id: `${p.slug}-${s.nama.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    kelompok: 'genteng',
    nama: nm,
    satuan: 'bundel',
    judul,
    judulPendek,
    deskripsi,
    varian: warna.length ? { judul: 'Warna', pilihan: warna } : null,
    atribut: [
      { label: 'Merek', nilai: merek },
      { label: 'Seri', nilai: s.nama },
      asal ? { label: 'Negara asal', nilai: asal } : null,
      { label: 'Jenis', nilai: 'Genteng aspal (asphalt shingle)' },
      ukuran ? { label: 'Ukuran per lembar', nilai: ukuran } : null,
      m2 ? { label: 'Isi per kemasan', nilai: `${angka(m2)} m² per bundel` } : null,
      garansi ? { label: 'Garansi', nilai: `${garansi} (pabrik)` } : null,
      { label: 'Kondisi', nilai: 'Baru' },
    ].filter((x): x is { label: string; nilai: string } => x !== null),
    kirim: { berat, dimensi: ukuran ? `${ukuran.replace(/\s*mm$/, '')} mm (ukuran lembar) × tinggi bundel` : null },
    keyword: [`genteng aspal ${merek.toLowerCase()}`, `genteng bitumen ${merek.toLowerCase()}`, nm.toLowerCase(), 'genteng aspal', 'atap bitumen', 'asphalt shingle', 'atap shingle', 'genteng bitumen'],
    cek: p.slug === 'cti' && s.nama !== 'CT3' ? ['Isi bundel CT5/CT6 bentrok antarsumber (22 lembar di data website vs 17 lembar 2,32 m² di daftar pesaing) — pastikan ke vendor CTI.', ...cek] : cek,
  };
}

// ── Aksesoris: judul disusun per barang (spesifikasi utama di depan) ───────────────────────────────────────────
const JUDUL_AKSESORIS: Record<string, (s: { label: string; nilai: string }[]) => string[]> = {
  multiplek: () => ['Multiplek 12 mm 122 x 244 cm Papan Alas Atap Genteng Aspal Bitumen', 'Multiplek 12 mm 122 x 244 cm Alas Atap Bitumen'],
  grc: () => ['GRC Board 9 mm 120 x 240 cm Papan Semen Alas Atap Genteng Aspal Bitumen', 'GRC Board 9 mm Alas Atap Bitumen'],
  underlayer: () => ['Underlayer Self Adhesive 1 x 10 m Lapisan Kedap Bawah Genteng Aspal Bitumen', 'Underlayer Self Adhesive 1 x 10 m Atap Bitumen'],
  membrane: () => ['Membrane Torching Bitumen 1 x 10 m Waterproofing Dak Beton Atap Landai Talang', 'Membrane Torching Bitumen 1 x 10 m'],
  'flashing-u': () => ['Flashing U Zincalume 0,35 mm 120 cm Penutup Tepi Atap Genteng Aspal Bitumen', 'Flashing U Zincalume 120 cm Atap Bitumen'],
  'flashing-z': () => ['Flashing Z Zincalume 0,35 mm 120 cm Wall Flashing Atap ke Dinding Genteng Aspal', 'Flashing Z Zincalume 120 cm Wall Flashing'],
  paku: () => ['Paku Bitumen Kepala Lebar Roofing Nail untuk Genteng Aspal Shingle Isi [ISI] pcs', 'Paku Bitumen Roofing Nail Isi [ISI] pcs'],
  skrup: () => ['Skrup Multiplek GRC 1 Inci untuk Papan Alas Atap Bitumen Isi [ISI] pcs', 'Skrup Papan Alas Atap Isi [ISI] pcs'],
  'aluminium-foil': () => ['Aluminium Foil 1 x 30 m Insulasi Peredam Panas Atap Single Double', 'Aluminium Foil 1 x 30 m Insulasi Panas Atap'],
};
const KEYWORD_AKSESORIS: Record<string, string[]> = {
  multiplek: ['multiplek 12 mm', 'triplek atap', 'alas genteng aspal', 'papan alas atap bitumen'],
  grc: ['grc board 9 mm', 'papan semen', 'alas atap bitumen', 'grc atap'],
  underlayer: ['underlayer atap', 'underlayment bitumen', 'lapisan bawah genteng aspal', 'waterproofing atap'],
  membrane: ['membrane torching', 'waterproofing dak', 'membran bakar', 'anti bocor dak beton'],
  'flashing-u': ['flashing u', 'list atap', 'penutup tepi atap', 'flashing genteng aspal'],
  'flashing-z': ['flashing z', 'wall flashing', 'talang dinding', 'flashing genteng aspal'],
  paku: ['paku bitumen', 'roofing nail', 'paku genteng aspal', 'paku shingle'],
  skrup: ['skrup multiplek', 'sekrup grc', 'skrup alas atap', 'skrup baja ringan'],
  'aluminium-foil': ['aluminium foil atap', 'peredam panas atap', 'insulasi atap', 'alumunium foil'],
};

function listingAksesoris(a: (typeof aksesoris)[number]): Listing {
  const perPak = a.slug === 'paku' || a.slug === 'skrup';
  const cek: string[] = [];
  if (perPak) cek.push('Tentukan isi per pak (mis. 100 pcs) lalu ganti [ISI] di judul. Dijual per pcs, harga tayang tidak wajar karena biaya per pesanan.');
  if (!a.harga) cek.push('Harga belum ada di Atapura Ops — isi daftar harga dulu.');
  cek.push('Berat & dimensi paket belum tercatat — timbang dan ukur satu kemasan.');
  const [utama, cadangan] = JUDUL_AKSESORIS[a.slug](a.spek);
  const deskripsi = rapikan([
    `${a.nama}. ${a.fungsi}`,
    '',
    'SPESIFIKASI',
    ...a.spek.map((k) => `• ${k.label}: ${k.nilai}`),
    perPak ? '• Isi per pak: [ISI] pcs' : null,
    '',
    'DIPAKAI UNTUK',
    'Bagian dari sistem atap genteng aspal (bitumen): papan alas, lapis kedap, paku, dan flashing yang dipasang bersama genteng. Genteng aspal dan aksesoris lain tersedia di toko kami.',
    '',
    penutupPasang(),
  ]);
  return {
    id: `aksesoris-${a.slug}`,
    kelompok: 'aksesoris',
    nama: a.nama,
    satuan: perPak ? 'pak' : (a.harga?.satuan ?? 'pcs'),
    judul: pasJudul(utama, cadangan),
    judulPendek: cadangan.slice(0, 70),
    deskripsi,
    varian: a.slug === 'aluminium-foil' ? { judul: 'Jenis', pilihan: ['Single', 'Double'] } : a.slug === 'membrane' ? { judul: 'Permukaan', pilihan: ['Polos', 'Berpasir (sanded)'] } : null,
    atribut: [...a.spek.filter((k) => k.label !== 'Kebutuhan'), { label: 'Kondisi', nilai: 'Baru' }],
    kirim: { berat: null, dimensi: nilai(a.spek, 'Ukuran', 'Panjang') ?? null },
    keyword: KEYWORD_AKSESORIS[a.slug] ?? [],
    cek,
  };
}

// ── Jasa pasang (opsional): listing layanan per m² ───────────────────────────────────────────────────────────────
function listingJasa(): Listing {
  const [a, b] = [harga.merek.Maxxi.terpasang[0], harga.merek.Tegola.terpasang[1]];
  return {
    id: 'jasa-pasang-atap-bitumen',
    kelompok: 'jasa',
    nama: 'Jasa pasang atap bitumen',
    satuan: 'm²',
    judul: 'Jasa Pasang Atap Genteng Aspal Bitumen per m² Survey Ukur dan Penawaran Tertulis',
    judulPendek: 'Jasa Pasang Atap Genteng Aspal Bitumen per m²',
    deskripsi: rapikan([
      'Jasa pemasangan atap genteng aspal (bitumen) oleh tim Atapura, untuk rumah baru maupun ganti atap lama.',
      '',
      'ALUR',
      '1. Survey dan ukur atap di lokasi.',
      '2. Penawaran tertulis: pilihan merek genteng, papan alas, lapis kedap, dan biaya pasang.',
      '3. Pemasangan dan foto per tahap.',
      `4. Serah terima${garansiPasang ? ` dengan garansi pemasangan tertulis ${garansiPasang} tahun` : ''}.`,
      '',
      'HARGA',
      `Harga di listing ini per m² jasa pasang. Biaya total tergantung luas, bentuk atap, dan merek yang dipilih; sebagai gambaran, atap terpasang lengkap mulai sekitar Rp${a / 1000} ribu sampai Rp${b / 1000} ribu per m².`,
      '',
      'Chat kami dulu sebelum checkout supaya jadwal survey bisa diatur.',
    ]),
    varian: null,
    atribut: [{ label: 'Jenis layanan', nilai: 'Pemasangan atap genteng aspal' }, garansiPasang ? { label: 'Garansi pemasangan', nilai: `${garansiPasang} tahun, tertulis` } : null].filter((x): x is { label: string; nilai: string } => x !== null),
    kirim: { berat: null, dimensi: null },
    keyword: ['jasa pasang atap bitumen', 'jasa pasang genteng aspal', 'tukang atap bitumen', 'ganti atap'],
    cek: ['Cek kebijakan kategori jasa di tiap marketplace sebelum upload; sebagian marketplace membatasi listing jasa pasang.'],
  };
}

export const listing: Listing[] = [
  ...produk.filter((p) => p.lini === 'atap').flatMap((p) => p.seri.map((s) => listingGenteng(p, s))),
  ...aksesoris.filter((a) => JUDUL_AKSESORIS[a.slug]).map(listingAksesoris),
  listingJasa(),
];
