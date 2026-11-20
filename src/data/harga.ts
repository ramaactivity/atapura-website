import ops from './ops.json' with { type: 'json' };

// SUMBER ANGKA = Atapura Ops (Ops DECISIONS 123): harga jual per satuan, isi per bundel, dan angka kalkulator (waste, paku, skrup,
// produktivitas) dibaca dari src/data/ops.json, salinan GET /api/publik/katalog yang ditarik `npm run tarik-ops` (workflow
// sinkron-ops.yml tiap jam). Ubah harga di Ops (Daftar harga / Angka bisnis), JANGAN di file ini. Yang tetap di sini: teks
// pemasaran (kelas, garansi, spek, termasuk) dan kisaran terpasang per m² dari Bang Yusuf.
type VarianOps = { nama: string; satuan: string; harga: number; hargaMaks: number | null; isiKemasan: number | null; cakupan: number };
const v = (kode: string): VarianOps => {
  const x = (ops.varian as Record<string, VarianOps>)[kode];
  if (!x) throw new Error(`src/data/ops.json tidak memuat ${kode} — jalankan npm run tarik-ops`);
  return x;
};
const rentang = (kode: string): Rentang => {
  const x = v(kode);
  if (x.hargaMaks === null) throw new Error(`${kode} di Ops tidak punya harga tertinggi (rentang)`);
  return [x.harga, x.hargaMaks];
};
const genteng = (kode: string) => {
  const x = v(kode);
  if (!x.isiKemasan) throw new Error(`${kode} di Ops tidak punya isi per bundel`);
  return { genteng: x.harga, m2PerBundel: x.isiKemasan };
};

// Riwayat angka (sebelum dipindah ke Ops):
// Harga acuan per satuan (bukan HPP/margin — rahasia bisnis tidak pernah masuk file ini).
// Harga Atapura dari Bang Yusuf (DECISIONS 025, 2 Nov 2026), berlaku Jabodetabek:
//   genteng per m² (genteng saja): CTI 155 rb, Maxxi 145 rb, Javabitumen 145 rb.
//   estimasi kasar terpasang per m²: CTI 400–450 rb, Maxxi & Javabitumen 380–430 rb (spek standar).
//   rangka baja ringan: sejak 18 Nov 2026 per merek (Bang Yusuf via Rama), lihat `rangka` di bawah.
// Victory (sheet Vendor, 20 Nov 2026; sebelumnya Rama 5 Nov: 220/260 rb): genteng Standar 200 rb, Two Tone 220 rb,
//   Legend 270 rb per m² (Legend baru di Ops); terpasang 500–550 rb per m²
//   (spek pendukung sama dengan merek lain). Kalkulator memakai harga Standar; Two Tone ditulis di halaman produk.
// Material pendukung = harga satuan toko dokteratap.co.id. Jasa dikalibrasi supaya spek standar
// (multiplek, underlayer, flashing U) jatuh di rentang terpasang Bang Yusuf — dijaga harga.test.ts.
// Kebutuhan paku & skrup (Rama, 19 Nov 2026; menggantikan contoh awal 20 paku & 12 skrup per m²):
//   paku bitumen 35 per m²; skrup alas 15 per lembar multiplek/GRC 122×244 cm. Sama dengan Resep Pasang Atapura Ops.
// Luar Jabodetabek: tidak dihitung di sini (akomodasi tukang & pengiriman material), langsung ke admin.
// `contoh: true` = angka acuan, belum harga Atapura; UI menandai "Harga acuan".
export const harga = {
  contoh: false,
  berlakuSejak: ops.berlakuSejak,
  // Tambahan material untuk potongan & sambungan (waste limasan/banyak jurai di Angka bisnis Ops).
  susut: ops.angka.wastePct / 100,
  merek: {
    Javabitumen: { kelas: 'Ekonomis', ...genteng('GT-JAVABITUMEN'), terpasang: [380_000, 430_000], garansiPabrik: 'Menunggu dokumen resmi' },
    CTI: { kelas: 'Menengah', ...genteng('GT-CTI'), terpasang: [400_000, 450_000], garansiPabrik: '30 tahun (produk)' },
    Maxxi: { kelas: 'Ekonomis', ...genteng('GT-MAXXI'), terpasang: [380_000, 430_000], garansiPabrik: '25 tahun (material)' },
    Victory: { kelas: 'Atas', ...genteng('GT-VICTORY'), terpasang: [500_000, 550_000], garansiPabrik: 'Menunggu dokumen resmi' },
    // SEMENTARA (riset pasar 18 Nov, docs/riset/harga-tegola.md; dikoreksi Bang Yusuf Kamis 19 Nov): genteng = median 5 toko
    // Premium Rectangular (3,05 m²/bundel TDS); terpasang dari rumus hitungEstimasi spek standar, dibulatkan 10 rb.
    Tegola: { kelas: 'Premium', ...genteng('GT-TEGOLA'), terpasang: [700_000, 750_000], garansiPabrik: 'Terbatas terdaftar hingga 40 tahun, bertahap' },
  },
  alas: {
    'Multiplek 12 mm': { harga: v('AL-MULTIPLEK-12').harga, m2: v('AL-MULTIPLEK-12').cakupan, satuan: 'lembar' },
    'GRC 9 mm': { harga: v('AL-GRC-9').harga, m2: v('AL-GRC-9').cakupan, satuan: 'lembar' },
  },
  lapisKedap: {
    Underlayer: { harga: v('LK-UNDERLAYER').harga, m2: v('LK-UNDERLAYER').cakupan, satuan: 'roll', nama: 'Underlayer self-adhesive' },
    Membrane: { harga: v('LK-MEMBRANE').harga, m2: v('LK-MEMBRANE').cakupan, satuan: 'roll', nama: 'Membrane torching' },
  },
  flashing: {
    'Flashing U': { harga: v('FL-U').harga, panjang: v('FL-U').cakupan, satuan: 'batang' },
    'Flashing Z': { harga: v('FL-Z').harga, panjang: v('FL-Z').cakupan, satuan: 'batang' },
  },
  // Plafon terpasang per m² (Bang Yusuf 18 Nov 2026): plafon + rangka hollow + jasa pasang.
  // "Java Plafon" dari Bang Yusuf = JAVAFON (dikonfirmasi Rama 18 Nov). Garansi pasang 1 th (Bang Yusuf).
  // SEMENTARA (riset pasar 18 Nov, docs/riset/jawaban-yusuf-plafon.md; dikoreksi Bang Yusuf Kamis 19 Nov):
  //   `barang` = harga barang saja per m² (median pasar per seri, dibulatkan), `m2PerHari` = tim 2 orang,
  //   plafon datar termasuk rangka & lis (pasar 15–30, usulan 20). Garansi material "10 th" belum ada bukti
  //   tertulis pabrik → situs menulis "sesuai ketentuan pabrik".
  plafon: {
    merek: {
      // `barang` masih riset (Ops: varian draf tanpa harga) — pindah ke Ops setelah ditetapkan di Daftar harga.
      Shunda: { terpasang: rentang('PL-SHUNDA'), barang: [150_000, 230_000] },
      Javafon: { terpasang: rentang('PL-JAVAFON'), barang: [165_000, 215_000] },
    },
    m2PerHari: ops.angka.m2PerHariPlafon as Rentang,
    termasuk: ['Rangka hollow', 'Jasa pemasangan'],
    tidakTermasuk: ['Lis plafon', 'Variasi drop ceiling', 'Instalasi listrik dan lampu', 'Bongkar plafon lama'],
  },
  // Rangka baja ringan baru (opsional, untuk rumah baru atau rangka lama yang tidak layak).
  // Harga TERPASANG per m²: material + aksesori (screw + dynabolt) + jasa pasang — Bang Yusuf 18 Nov 2026.
  // Merek boleh tampil sejak 18 Nov (Rama), menggantikan aturan lama DECISIONS 028 untuk baja.
  rangka: {
    merek: {
      Taso: { harga: v('RK-TASO').harga, spek: 'C-Truss 0,75 mm, reng 0,45 mm' },
      'Hi-Steel': { harga: v('RK-HISTEEL').harga, spek: 'C-Truss 0,75 mm, reng 0,40 mm' },
      'K-Steel': { harga: v('RK-KSTEEL').harga, spek: 'C-Truss 0,75 mm, reng 0,40 mm' },
    },
    termasuk: 'Material, aksesori screw dan dynabolt, serta jasa pasang',
    // Jasa pasang rangka saja, material dari pemilik rumah.
    jasaSaja: v('JASA-RANGKA').harga,
  },
  paku: { harga: v('PAKU').harga, perM2: ops.angka.pakuPerM2 },
  skrup: { harga: v('SKRUP').harga, perLembarAlas: ops.angka.skrupPerLembar },
  jasa: rentang('JASA-PASANG'),
  // Produktivitas tim per hari (m²), untuk perkiraan durasi.
  m2PerHari: ops.angka.m2PerHari as Rentang,
  // Kalkulator publik (revisi 3 Nov): pelanggan hanya isi luas + merek; spek pendukung jadi keterangan, tanpa nominal ongkir.
  termasuk: ['Multiplek 12\u00a0mm / GRC 9\u00a0mm', 'Underlayment / membrane torching', 'Flashing U', 'Skrup & paku bitumen', 'Jasa pemasangan', 'Ongkos kirim material Jabodetabek'],
  tidakTermasuk: [
    'Transport tukang (bila di luar Jabodetabek)',
    'Tempat tinggal tukang (bila tidak bisa menginap di proyek atau tidak ada mess)',
    'Ongkos kirim material di luar Jabodetabek',
    'Scaffolding',
  ],
} as const;

export type Merek = keyof typeof harga.merek;
export type Alas = keyof typeof harga.alas;
export type LapisKedap = keyof typeof harga.lapisKedap;
export type Flashing = keyof typeof harga.flashing;
export type MerekRangka = keyof typeof harga.rangka.merek;
export type MerekPlafon = keyof typeof harga.plafon.merek;

/** Estimasi plafon: harga terpasang per m² × luas; hari kerja dari produktivitas plafon (tanpa +1 seperti atap). */
export function estimasiPlafon(luas: number, merek: MerekPlafon): Pick<Estimasi, 'perM2' | 'total' | 'hari'> {
  const [a, b] = harga.plafon.merek[merek].terpasang;
  const [lambat, cepat] = harga.plafon.m2PerHari;
  return {
    perM2: [a, b],
    total: [bulat(luas * a, 50_000), bulat(luas * b, 50_000)],
    hari: [Math.max(1, ceil(luas / cepat)), Math.max(1, ceil(luas / lambat))],
  };
}
/** Rentang harga rangka terpasang semua merek, untuk teks "bila perlu: Rp… per m²". */
export const rentangRangka = ((h) => [Math.min(...h), Math.max(...h)] as const)(Object.values(harga.rangka.merek).map((m) => m.harga));
export type Rentang = [number, number];

export interface Pilihan {
  merek: Merek;
  alas: Alas;
  lapis: LapisKedap;
  flashing: Flashing;
  /** Pasang rangka baja ringan baru dengan merek ini. */
  rangka?: MerekRangka;
}

export interface Estimasi {
  kebutuhan: { nama: string; jumlah: number; satuan: string }[];
  baris: { label: string; rentang: Rentang }[];
  material: Rentang;
  jasa: Rentang;
  total: Rentang;
  perM2: Rentang;
  hari: Rentang;
}

export const PILIHAN_AWAL: Pilihan = { merek: 'CTI', alas: 'Multiplek 12 mm', lapis: 'Underlayer', flashing: 'Flashing U' };

const bulat = (n: number, ke: number) => Math.round(n / ke) * ke;
// Toleransi galat desimal: 100 × 1,1 / 10 = 11,000…02 tidak boleh jadi 12 roll.
const ceil = (n: number) => Math.ceil(n - 1e-9);

export function hitungEstimasi(luas: number, p: Pilihan = PILIHAN_AWAL): Estimasi {
  const m = harga.merek[p.merek];
  const alas = harga.alas[p.alas];
  const lapis = harga.lapisKedap[p.lapis];
  const fl = harga.flashing[p.flashing];

  const bundel = ceil((luas * (1 + harga.susut)) / m.m2PerBundel);
  const lembar = ceil((luas * 1.05) / alas.m2);
  const roll = ceil((luas * (1 + harga.susut)) / lapis.m2);
  // Flashing per meter lari di semua tepi keliling atap (10×10 m → 40 m); dari luas saja = keliling persegi 4 × √luas
  // (Rama 19 Nov 2026; sama dengan Resep Pasang Atapura Ops). Survey mengganti perkiraan ini dengan hasil ukur.
  const batang = ceil((4 * Math.sqrt(luas)) / fl.panjang);
  // Starter bitumen (Rama 19 Nov 2026): strip lembar genteng tanpa daun selebar 12,5 cm di keliling atap → m² = keliling × 0,125,
  // dihargai genteng per m² merek terpilih (cocok invoice Olen & penawaran Naryo). Sama dengan Atapura Ops (DECISIONS 096).
  const starter = Math.round(4 * Math.sqrt(luas) * 0.125 * 100) / 100;
  const paku = bulat(luas * harga.paku.perM2, 100);
  const skrup = lembar * harga.skrup.perLembarAlas;

  const tetap = (n: number): Rentang => [n, n];
  const baris: Estimasi['baris'] = [
    { label: `Genteng ${p.merek}`, rentang: tetap(bundel * m.m2PerBundel * m.genteng) },
    { label: p.alas, rentang: tetap(lembar * alas.harga) },
    { label: lapis.nama, rentang: tetap(roll * lapis.harga) },
    { label: p.flashing, rentang: tetap(batang * fl.harga) },
    { label: 'Starter bitumen', rentang: tetap(Math.round(starter * m.genteng)) },
    { label: 'Paku & skrup', rentang: tetap(paku * harga.paku.harga + skrup * harga.skrup.harga) },
    ...(p.rangka ? [{ label: `Rangka baja ringan ${p.rangka}`, rentang: tetap(luas * harga.rangka.merek[p.rangka].harga) as Rentang }] : []),
    { label: 'Jasa pasang', rentang: [luas * harga.jasa[0], luas * harga.jasa[1]] },
  ];
  const jumlah = (b: Estimasi['baris'], i: 0 | 1) => b.reduce((s, x) => s + x.rentang[i], 0);
  const bahan = baris.slice(0, -1);
  const material: Rentang = [jumlah(bahan, 0), jumlah(bahan, 1)];
  const jasa = baris[baris.length - 1].rentang;
  const total: Rentang = [bulat(material[0] + jasa[0], 50_000), bulat(material[1] + jasa[1], 50_000)];
  const perM2: Rentang = [bulat(total[0] / luas, 1000), bulat(total[1] / luas, 1000)];
  const hari: Rentang = [ceil(luas / harga.m2PerHari[1]) + 1, ceil(luas / harga.m2PerHari[0]) + 1];

  return {
    kebutuhan: [
      { nama: `Genteng ${p.merek}`, jumlah: bundel, satuan: 'bundel' },
      { nama: p.alas, jumlah: lembar, satuan: alas.satuan },
      { nama: lapis.nama, jumlah: roll, satuan: lapis.satuan },
      { nama: p.flashing, jumlah: batang, satuan: fl.satuan },
      { nama: 'Starter bitumen', jumlah: starter, satuan: 'm²' },
      { nama: 'Skrup', jumlah: skrup, satuan: 'pcs' },
      { nama: 'Paku bitumen', jumlah: paku, satuan: 'pcs' },
    ],
    baris,
    material,
    jasa,
    total,
    perM2,
    hari,
  };
}

/** Estimasi publik: harga terpasang per m² merek × luas (spek standar, termasuk ongkir Jabodetabek). */
export function estimasiPublik(luas: number, merek: Merek): Pick<Estimasi, 'perM2' | 'total' | 'hari'> {
  const perM2 = harga.merek[merek].terpasang;
  return {
    perM2: [perM2[0], perM2[1]],
    total: [bulat(luas * perM2[0], 50_000), bulat(luas * perM2[1], 50_000)],
    hari: [ceil(luas / harga.m2PerHari[1]) + 1, ceil(luas / harga.m2PerHari[0]) + 1],
  };
}

/** desimal: angka di belakang koma untuk juta (publik 0 supaya mudah dibaca, internal 1). */
export function rupiahRingkas(n: number, desimal = 1): string {
  if (n >= 1_000_000) {
    const jt = n / 1_000_000;
    return `Rp${jt.toLocaleString('id-ID', { maximumFractionDigits: desimal })} jt`;
  }
  return `Rp${Math.round(n / 1000).toLocaleString('id-ID')} rb`;
}

/** Rentang rupiah untuk tampilan besar: satu "Rp" dan satu satuan, misal { min: '41,4', max: '53,1', satuan: 'jt' }. */
export function bagianRentang(min: number, max: number): { min: string; max: string; satuan: 'jt' | 'rb' } {
  const satuan = min >= 1_000_000 ? 'jt' : 'rb';
  const bagi = satuan === 'jt' ? 1_000_000 : 1000;
  const f = (n: number) => (n / bagi).toLocaleString('id-ID', { maximumFractionDigits: satuan === 'jt' ? 1 : 0 });
  return { min: f(min), max: f(max), satuan };
}

export function tanggalPanjang(iso: string): string {
  return new Date(`${iso}T00:00:00+07:00`).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  });
}
