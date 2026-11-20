// Aset gambar marketplace per listing (Ops DECISIONS 125 tahap D, website DECISIONS 059): daftar slide 1:1 (1080 × 1080).
// Infografis disusun dari data (angka & teks pasti benar), bukan digenerate AI. Cover genteng (latar putih, tanpa teks)
// menyusul lewat Magnific setelah Rama setuju per batch (DECISIONS 039). Ekspor: `npm run aset-marketplace`.
import { aksesoris } from './aksesoris';
import { type Listing, listing } from './listing';

export type Slide = { no: number; kunci: 'cover' | 'spek' | 'warna' | 'hitung' | 'lapisan' | 'pasang' | 'dipasang'; nama: string; /** Halaman warna ke-n (maks 9 ubin per gambar). */ bagian?: number };

/** Maksimal ubin warna per gambar — motif & warna wajib besar (memori Rama), 3 × 3 = ubin ±165 px. */
export const UBIN_PER_SLIDE = 9;

/** Lapis yang disorot di diagram untuk tiap aksesoris (LapisanGambar: alas | underlayment | flashing | genteng | nok). */
export const LAPIS_AKSESORIS: Record<string, string> = {
  multiplek: 'alas', grc: 'alas', 'aluminium-foil': 'alas', skrup: 'alas',
  underlayer: 'underlayment', membrane: 'underlayment',
  'flashing-u': 'flashing', 'flashing-z': 'flashing',
  paku: 'genteng',
};

export function slideListing(l: Listing): Slide[] {
  if (l.ref.jenis === 'seri')
    return [
      // Spesifikasi hanya bila ada ≥ 2 angka resmi (Javabitumen belum punya dokumen → tanpa slide spesifikasi).
      ...(l.atribut.filter((x) => ['Ukuran per lembar', 'Isi per kemasan', 'Garansi'].includes(x.label)).length >= 2 ? [{ no: 2, kunci: 'spek' as const, nama: 'spesifikasi' }] : []),
      // Warna dipecah per 9 ubin: halaman pertama = gambar 3, sisanya gambar 7, 8, … (urutan upload tetap rapi).
      ...Array.from({ length: l.varian ? Math.ceil(l.varian.pilihan.length / UBIN_PER_SLIDE) : 0 }, (_, i) => ({ no: i === 0 ? 3 : 6 + i, kunci: 'warna' as const, nama: i === 0 ? 'pilihan-warna' : `pilihan-warna-${i + 1}`, bagian: i })),
      // Hanya bila isi m² per bundel pasti (CT5/CT6 & Tegola selain Premium Rectangular belum) — gambar tidak mengarang angka.
      ...(l.atribut.some((x) => x.label === 'Isi per kemasan') ? [{ no: 4, kunci: 'hitung' as const, nama: 'hitung-kebutuhan' }] : []),
      { no: 5, kunci: 'lapisan', nama: 'lapisan-pasang' },
      { no: 6, kunci: 'pasang', nama: 'dipasang-atapura' },
    ];
  if (l.ref.jenis === 'aksesoris') {
    const slug = l.ref.slug;
    const a = aksesoris.find((x) => x.slug === slug);
    return [
      ...(a?.wujud ? [{ no: 1, kunci: 'cover' as const, nama: 'cover' }] : []),
      { no: 2, kunci: 'spek', nama: 'spesifikasi' },
      ...(a?.foto ? [{ no: 3, kunci: 'dipasang' as const, nama: 'saat-dipasang' }] : []),
      ...(LAPIS_AKSESORIS[slug] ? [{ no: 4, kunci: 'lapisan' as const, nama: 'posisi-di-atap' }] : []),
    ];
  }
  return [];
}

export const semuaSlide = listing.flatMap((l) => slideListing(l).map((s) => ({ l, s })));
export const berkasSlide = (l: Listing, s: Slide) => `/unduh/marketplace/${l.id}/${s.no}-${s.nama}.jpg`;
