// Rentang harga jual per m² (bukan HPP/margin — rahasia bisnis tidak pernah masuk file ini).
// CONTOH: angka di bawah disusun dari harga material publik (bahan/atapura/05) + perkiraan kasar
// jasa & alas. BELUM VALID sampai Rama mengisi harga resmi. Selama `contoh: true`, UI wajib menampilkan tanda contoh.

export const harga = {
  contoh: true,
  berlakuSejak: '2026-11-02',
  // Tambahan material untuk potongan & sambungan.
  susut: 0.1,
  merek: {
    Maxxi: { kelas: 'Ekonomis', genteng: [135_000, 160_000] },
    CTI: { kelas: 'Menengah', genteng: [145_000, 170_000] },
    Javabitumen: { kelas: 'Menunggu data', genteng: [130_000, 165_000] },
  },
  // Per m² luas atap, sama untuk semua merek.
  alasUnderlayment: [95_000, 125_000],
  aksesoris: [25_000, 40_000], // paku, nok, flashing, starter
  jasa: [65_000, 90_000],
  // Produktivitas tim per hari (m²), untuk perkiraan durasi.
  m2PerHari: [30, 45],
} as const;

export type Merek = keyof typeof harga.merek;
export type Rentang = [number, number];

export interface Estimasi {
  baris: { label: string; rentang: Rentang }[];
  total: Rentang;
  hari: Rentang;
}

const bulatkan = (n: number) => Math.round(n / 50_000) * 50_000;

export function hitungEstimasi(luas: number, merek: Merek): Estimasi {
  const m = harga.merek[merek];
  const kali = (r: readonly [number, number], f = 1): Rentang => [bulatkan(r[0] * luas * f), bulatkan(r[1] * luas * f)];
  const baris = [
    { label: 'Genteng + 10% potongan', rentang: kali(m.genteng, 1 + harga.susut) },
    { label: 'Alas & underlayment', rentang: kali(harga.alasUnderlayment) },
    { label: 'Nok, flashing & paku', rentang: kali(harga.aksesoris) },
    { label: 'Jasa pasang', rentang: kali(harga.jasa) },
  ];
  const total: Rentang = [
    baris.reduce((s, b) => s + b.rentang[0], 0),
    baris.reduce((s, b) => s + b.rentang[1], 0),
  ];
  const hari: Rentang = [
    Math.ceil(luas / harga.m2PerHari[1]) + 1,
    Math.ceil(luas / harga.m2PerHari[0]) + 1,
  ];
  return { baris, total, hari };
}

export function rupiahRingkas(n: number): string {
  if (n >= 1_000_000) {
    const jt = n / 1_000_000;
    return `Rp${jt.toLocaleString('id-ID', { maximumFractionDigits: 1 })} jt`;
  }
  return `Rp${Math.round(n / 1000).toLocaleString('id-ID')} rb`;
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
