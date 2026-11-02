// Rentang harga jual per m² (bukan HPP/margin — rahasia bisnis tidak pernah masuk file ini).
// KONSEP (DECISIONS 019): acuan harga pasar Jabodetabek, 2 Nov 2026 —
//   genteng: batas atas = harga Dokter Atap (dokteratap.co.id, Maxxi 160 rb, CTI 170 rb /m²), batas bawah = pasar (riset 05);
//   alas: multiplek Rp179,5 rb/lbr ≈3 m², GRC Rp210 rb/lbr ≈2,9 m²; underlayment self-adhesive Rp600 rb/roll 10 m² (Dokter Atap);
//   aksesoris: flashing Rp45 rb/1,2 m, paku Rp250/bh (Dokter Atap); jasa: Rp50–70 rb/m² (ilhamplafon.com, Apr 2026).
// `contoh: true` = angka acuan, belum harga Atapura; UI menandai "Harga acuan".
export const harga = {
  contoh: true,
  berlakuSejak: '2026-11-02',
  // Tambahan material untuk potongan & sambungan.
  susut: 0.1,
  merek: {
    Maxxi: { kelas: 'Ekonomis', genteng: [135_000, 160_000], garansiPabrik: '25 tahun (material)' },
    CTI: { kelas: 'Menengah', genteng: [145_000, 170_000], garansiPabrik: '20 tahun (material)' },
    Javabitumen: { kelas: 'Menunggu data', genteng: [130_000, 165_000], garansiPabrik: 'Menunggu dokumen resmi' },
  },
  // Per m² luas atap, sama untuk semua merek.
  alasUnderlayment: [120_000, 145_000],
  aksesoris: [15_000, 30_000], // paku, nok, flashing, starter
  jasa: [50_000, 70_000],
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
