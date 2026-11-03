// Harga acuan per satuan (bukan HPP/margin — rahasia bisnis tidak pernah masuk file ini).
// Harga Atapura dari Bang Yusuf (DECISIONS 025, 2 Nov 2026), berlaku Jabodetabek:
//   genteng per m² (genteng saja): CTI 155 rb, Maxxi 145 rb, Javabitumen 145 rb.
//   estimasi kasar terpasang per m²: CTI 400–450 rb, Maxxi & Javabitumen 380–430 rb (spek standar).
//   rangka baja ringan 220 rb/m² (kanal C 0,75, reng 0,40).
// Material pendukung = harga satuan toko dokteratap.co.id. Jasa dikalibrasi supaya spek standar
// (multiplek, underlayer, flashing U) jatuh di rentang terpasang Bang Yusuf — dijaga harga.test.ts.
// Kebutuhan paku & skrup per m² dari contoh Bang Yusuf (100 m² → skrup 1.200, paku 2.000).
// Luar Jabodetabek: tidak dihitung di sini (akomodasi tukang & pengiriman material), langsung ke admin.
// `contoh: true` = angka acuan, belum harga Atapura; UI menandai "Harga acuan".
export const harga = {
  contoh: false,
  berlakuSejak: '2026-11-02',
  // Tambahan material untuk potongan & sambungan.
  susut: 0.1,
  merek: {
    Javabitumen: { kelas: 'Ekonomis', genteng: 145_000, terpasang: [380_000, 430_000], m2PerBundel: 3.0, garansiPabrik: 'Menunggu dokumen resmi' },
    CTI: { kelas: 'Menengah', genteng: 155_000, terpasang: [400_000, 450_000], m2PerBundel: 3.0, garansiPabrik: '30 tahun (produk)' },
    Maxxi: { kelas: 'Ekonomis', genteng: 145_000, terpasang: [380_000, 430_000], m2PerBundel: 3.1, garansiPabrik: '25 tahun (material)' },
  },
  alas: {
    'Multiplek 12 mm': { harga: 179_500, m2: 1.22 * 2.44, satuan: 'lembar' },
    'GRC 9 mm': { harga: 210_000, m2: 1.2 * 2.4, satuan: 'lembar' },
  },
  lapisKedap: {
    Underlayer: { harga: 600_000, m2: 10, satuan: 'roll', nama: 'Underlayer self-adhesive' },
    Membrane: { harga: 700_000, m2: 10, satuan: 'roll', nama: 'Membrane torching' },
  },
  flashing: {
    'Flashing U': { harga: 45_000, panjang: 1.2, satuan: 'batang' },
    'Flashing Z': { harga: 45_000, panjang: 1.2, satuan: 'batang' },
  },
  // Asumsi: panjang flashing ±0,4 m per m² atap (tepi, talang, pertemuan dinding) — final setelah survey.
  flashingMPerM2: 0.4,
  // Rangka baja ringan baru (opsional, untuk rumah baru atau rangka lama yang tidak layak).
  rangka: { harga: 220_000, spek: 'Kanal C 0,75 mm, reng 0,40 mm' },
  paku: { harga: 250, perM2: 20 },
  skrup: { harga: 150, perM2: 12 },
  jasa: [70_000, 120_000],
  // Produktivitas tim per hari (m²), untuk perkiraan durasi.
  m2PerHari: [30, 45],
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
export type Rentang = [number, number];

export interface Pilihan {
  merek: Merek;
  alas: Alas;
  lapis: LapisKedap;
  flashing: Flashing;
  /** Pasang rangka baja ringan baru. */
  rangka?: boolean;
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
  const batang = ceil((luas * harga.flashingMPerM2) / fl.panjang);
  const paku = bulat(luas * harga.paku.perM2, 100);
  const skrup = bulat(luas * harga.skrup.perM2, 100);

  const tetap = (n: number): Rentang => [n, n];
  const baris: Estimasi['baris'] = [
    { label: `Genteng ${p.merek}`, rentang: tetap(bundel * m.m2PerBundel * m.genteng) },
    { label: p.alas, rentang: tetap(lembar * alas.harga) },
    { label: lapis.nama, rentang: tetap(roll * lapis.harga) },
    { label: p.flashing, rentang: tetap(batang * fl.harga) },
    { label: 'Paku & skrup', rentang: tetap(paku * harga.paku.harga + skrup * harga.skrup.harga) },
    ...(p.rangka ? [{ label: 'Rangka baja ringan', rentang: tetap(luas * harga.rangka.harga) as Rentang }] : []),
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
