// Aset gambar marketplace per listing (Ops DECISIONS 125 tahap D, website DECISIONS 059 + 062): daftar slide 1:1 (1080 × 1080).
// Sistem slide 062 (acuan Dr.Shield/Dr.Sonne/guenteng, disetujui Rama 20 Nov): bingkai Pinus + kartu putih beratap, pesan
// "Chat admin sebelum checkout" di setiap slide. Urutan minimal: cover → deskripsi & spesifikasi → penerapan → syarat &
// ketentuan; tambahan bila ada datanya: etalase warna (genteng) dan hitung kebutuhan (genteng per m²). Maks 9 gambar.
// Infografis disusun dari data (angka & teks pasti benar), bukan digenerate AI. Ekspor: `npm run aset-marketplace`.
import { aksesoris } from './aksesoris';
import { type Listing, listing } from './listing';
import { fotoWarna, produk, warnaSeri } from './produk';

export type Slide = {
  no: number;
  kunci: 'cover' | 'spek' | 'warna' | 'penerapan' | 'hitung' | 'syarat';
  nama: string;
  /** Slide warna: indeks halaman di `halamanWarna(l)`. */
  bagian?: number;
};

/** Batas gambar per listing di marketplace (Shopee/Tokopedia/TikTok Shop: 9). */
const MAKS_SLIDE = 9;

/** Foto cover rakitan per listing (latar putih, sudah dipotong ke produk): assets/gambar/produk/cover-<id>-potong.jpg. */
const fotoCover = import.meta.glob<{ default: ImageMetadata }>('../../assets/gambar/produk/cover-*-potong.jpg', { eager: true });
export const coverListing = (l: Listing) => fotoCover[`../../assets/gambar/produk/cover-${l.id}-potong.jpg`]?.default;

/**
 * Foto penerapan per listing (indeks ke `produk.penerapan`). Data penerapan per MEREK, sedangkan listing per SERI: foto hanya
 * dipasang bila potongan & seri di fotonya sama (keterangan foto). Listing tanpa entri = tanpa slide penerapan (belum ada foto
 * yang cocok, mis. CT5/CT6, Tegola Master/Mosaik/Traditional) supaya pembeli tidak melihat potongan seri lain.
 */
const PENERAPAN: Record<string, number[]> = {
  'cti-ct3': [0, 1],
  'maxxi-maxxiroof': [0],
  'maxxi-promaxxi': [1],
  javabitumen: [0],
  'tegola-premium-rectangular': [0, 1],
  'tegola-eco-roof': [0, 1],
  'tegola-top-shingles': [0, 1],
  'victory-standar': [0],
  'victory-two-tone': [1],
};
export const penerapanListing = (l: Listing) => {
  const p = produkListing(l);
  return p ? (PENERAPAN[l.id] ?? []).map((i) => p.penerapan[i]).filter(Boolean) : [];
};

export const produkListing = (l: Listing) => (l.ref.jenis === 'seri' ? produk.find((x) => x.slug === (l.ref as { produk: string }).produk) : undefined);
export const aksesorisListing = (l: Listing) => (l.ref.jenis === 'aksesoris' ? aksesoris.find((x) => x.slug === (l.ref as { slug: string }).slug) : undefined);

export type HalamanWarna = {
  /** "6 warna solid" / "12 pilihan warna". */
  judul: string;
  /** Penanda halaman bila satu kelompok dipecah, mis. "1/2". */
  halaman: string | null;
  kolom: number;
  /** 2 baris (6 ubin) atau 3 baris (9 ubin, bila gambar listing hampir penuh). */
  baris: number;
  daftar: { nama: string; kode?: string; hex?: string; foto?: ImageMetadata }[];
};

/**
 * Halaman etalase warna: per kelompok warna seri, maks 6 ubin (grid 3 × 2) per gambar supaya contoh warna besar
 * (memori Rama: motif & warna wajib besar). Bila total gambar listing jadi > 9, dipadatkan ke 9 ubin (grid 3 × 3).
 */
export function halamanWarna(l: Listing, sisaSlot = MAKS_SLIDE): HalamanWarna[] {
  const p = produkListing(l);
  if (!p || l.ref.jenis !== 'seri') return [];
  // Judul kelompok di produk.ts beragam ("CT3 · warna solid", "Seri gradasi", "Maxxiroof") → label pendek seragam.
  const grup = warnaSeri(p, l.ref.seri).map((g) => ({
    label: /gradasi/i.test(g.judul) ? 'warna gradasi' : /solid/i.test(g.judul) ? 'warna solid' : 'pilihan warna',
    daftar: g.daftar.map((w) => ({ ...w, foto: fotoWarna(g.tekstur, w.nama) })),
  }));
  const pecah = (per: number) =>
    grup.flatMap((g) => {
      const n = Math.ceil(g.daftar.length / per);
      return Array.from({ length: n }, (_, i) => ({
        judul: `${g.daftar.length} ${g.label}`,
        halaman: n > 1 ? `${i + 1}/${n}` : null,
        kolom: 3,
        baris: per === 6 ? 2 : 3,
        daftar: g.daftar.slice(i * per, (i + 1) * per),
      }));
    });
  const enam = pecah(6);
  return enam.length <= sisaSlot ? enam : pecah(9);
}

export function slideListing(l: Listing): Slide[] {
  if (l.ref.jenis === 'jasa') return [];
  const a = aksesorisListing(l);
  const genteng = l.ref.jenis === 'seri';
  const adaPenerapan = genteng ? penerapanListing(l).length > 0 : Boolean(a?.foto);
  const adaHitung = genteng && l.atribut.some((x) => x.label === 'Isi per kemasan');
  const tetap = 3 + (adaPenerapan ? 1 : 0) + (adaHitung ? 1 : 0); // cover + spek + syarat (+ penerapan, hitung)
  const warna = halamanWarna(l, MAKS_SLIDE - tetap);

  const urut: Omit<Slide, 'no'>[] = [
    { kunci: 'cover', nama: 'cover' },
    { kunci: 'spek', nama: 'deskripsi-spesifikasi' },
    ...warna.map((_, i) => ({ kunci: 'warna' as const, nama: i === 0 ? 'pilihan-warna' : `pilihan-warna-${i + 1}`, bagian: i })),
    ...(adaPenerapan ? [{ kunci: 'penerapan' as const, nama: 'penerapan' }] : []),
    ...(adaHitung ? [{ kunci: 'hitung' as const, nama: 'hitung-kebutuhan' }] : []),
    { kunci: 'syarat', nama: 'syarat-ketentuan' },
  ];
  return urut.slice(0, MAKS_SLIDE).map((s, i) => ({ ...s, no: i + 1 }));
}

export const semuaSlide = listing.flatMap((l) => slideListing(l).map((s) => ({ l, s })));
export const berkasSlide = (l: Listing, s: Slide) => `/unduh/marketplace/${l.id}/${s.no}-${s.nama}.jpg`;
