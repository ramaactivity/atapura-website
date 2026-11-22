// Aksesoris atap (DECISIONS 050): bahan pelengkap yang ikut dipasang bersama genteng bitumen, bisa juga dibeli terpisah.
// Spek dicocokkan dengan halaman produk dokteratap.co.id (pesaing, dicek 19 Nov 2026), tidak disebut sebagai sumber publik.
// Harga hanya dari harga.ts (Bang Yusuf); barang tanpa harga tampil "Tanya admin".
// Foto: ilustrasi Magnific. File baru `assets/gambar/magnific/aksesoris-<slug>-3x2.jpg` langsung terpakai
// (prompt: docs/desain/prompt-magnific-aksesoris.md); sebagian memakai ilustrasi yang sudah ada.
import type { ImageMetadata } from 'astro';
import { harga } from './harga';

const semua = import.meta.glob<ImageMetadata>('../../assets/gambar/magnific/*.jpg', { eager: true, import: 'default' });
const foto = (nama: string) => semua[`../../assets/gambar/magnific/${nama}.jpg`];
// Wujud barang: foto produk latar putih 1:1 (Magnific, 20 Nov 2026, Ops DECISIONS 125 tahap D) — dipakai product knowledge
// dan sebagai sampul marketplace. File `assets/gambar/produk/aksesoris-<slug>-1x1.jpg` langsung terpakai.
const semuaWujud = import.meta.glob<ImageMetadata>('../../assets/gambar/produk/*.jpg', { eager: true, import: 'default' });

export interface Aksesoris {
  slug: string;
  nama: string;
  /** Satu kalimat: dipasang di mana, untuk apa. */
  fungsi: string;
  spek: { label: string; nilai: string }[];
  /** Harga per satuan dari harga.ts; kosong = tanya admin. */
  harga?: { nilai: number; satuan: string; catatan?: string };
  foto?: { src: ImageMetadata; alt: string };
  /** Foto produk latar putih (wujud barang), dari slug. */
  wujud?: ImageMetadata;
  /** Halaman produk sendiri bila ada (baja ringan). */
  href?: string;
}

const gambar = (nama: string, alt: string) => {
  const src = foto(nama);
  return src ? { src, alt } : undefined;
};

const daftar: Aksesoris[] = [
  {
    slug: 'multiplek',
    nama: 'Multiplek',
    fungsi: 'Papan alas (dek) yang disekrup ke rangka. Genteng bitumen dipaku di atasnya, jadi papan ini yang menentukan atap rata atau bergelombang.',
    spek: [
      { label: 'Ukuran', nilai: '122 × 244 cm per lembar' },
      { label: 'Tebal standar', nilai: '12 mm (ada 9 & 18 mm)' },
      { label: 'Bahan', nilai: 'Kayu lapis meranti campur' },
    ],
    harga: { nilai: harga.alas['Multiplek 12 mm'].harga, satuan: 'lembar', catatan: '12 mm' },
    foto: gambar('rangka-baja-ringan-papan-3x2', 'Ilustrasi papan multiplek disekrup ke rangka atap baja ringan'),
  },
  {
    slug: 'grc',
    nama: 'GRC (papan semen)',
    fungsi: 'Pengganti multiplek sebagai papan alas. Papan semen berserat, tidak lapuk seperti papan kayu, cocok untuk area lembap.',
    spek: [
      { label: 'Ukuran', nilai: '120 × 240 cm per lembar' },
      { label: 'Tebal standar', nilai: '9 mm' },
      { label: 'Bahan', nilai: 'Papan semen serat' },
    ],
    harga: { nilai: harga.alas['GRC 9 mm'].harga, satuan: 'lembar', catatan: '9 mm' },
    foto: gambar('aksesoris-grc-3x2', 'Ilustrasi papan GRC dipasang sebagai alas di atas rangka baja ringan'),
  },
  {
    slug: 'underlayer',
    nama: 'Underlayer self-adhesive',
    fungsi: 'Lapis kedap air di atas papan alas. Ditempel tanpa api, jadi air yang lolos dari sela genteng tidak sampai ke papan.',
    spek: [
      { label: 'Ukuran', nilai: '1 × 10 m per roll' },
      { label: 'Tebal', nilai: '1–1,5 mm' },
      { label: 'Bahan', nilai: 'Fiberglass + bitumen, berperekat' },
    ],
    harga: { nilai: harga.lapisKedap.Underlayer.harga, satuan: 'roll' },
    foto: gambar('aksesoris-underlayer-3x2', 'Ilustrasi underlayer hitam ditempel di atas papan alas atap'),
  },
  {
    slug: 'membrane',
    nama: 'Membrane torching',
    fungsi: 'Lapis kedap yang lebih tebal dari underlayer, dipasang dengan cara dibakar. Dipakai untuk atap landai, talang, atau dak beton.',
    spek: [
      { label: 'Ukuran', nilai: '1 × 10 m per roll' },
      { label: 'Tebal', nilai: '2–4 mm' },
      { label: 'Permukaan', nilai: 'Polos atau berpasir (sanded)' },
    ],
    harga: { nilai: harga.lapisKedap.Membrane.harga, satuan: 'roll' },
    foto: gambar('aksesoris-membrane-3x2', 'Ilustrasi membrane bitumen dipanaskan dengan obor gas saat dipasang'),
  },
  {
    slug: 'flashing-u',
    nama: 'Flashing U',
    fungsi: 'Profil logam yang menutup tepi atap di atas lisplang, supaya tepi papan alas tidak kena air dan tepi atap terlihat rapi.',
    spek: [
      { label: 'Panjang', nilai: '120 cm per batang' },
      { label: 'Tebal', nilai: '0,35 mm' },
      { label: 'Bahan', nilai: 'Zincalume' },
    ],
    harga: { nilai: harga.flashing['Flashing U'].harga, satuan: 'batang' },
    foto: gambar('aksesoris-flashing-u-3x2', 'Ilustrasi flashing U logam di tepi atap bitumen'),
  },
  {
    slug: 'flashing-z',
    nama: 'Flashing Z',
    fungsi: 'Penutup pertemuan atap dengan dinding (wall flashing). Air hujan yang turun di dinding diarahkan ke atas genteng, tidak masuk ke celah.',
    spek: [
      { label: 'Panjang', nilai: '120 cm per batang' },
      { label: 'Tebal', nilai: '0,35 mm' },
      { label: 'Bahan', nilai: 'Zincalume' },
    ],
    harga: { nilai: harga.flashing['Flashing Z'].harga, satuan: 'batang' },
    foto: gambar('flashing-dinding-3x2', 'Ilustrasi flashing logam di pertemuan atap bitumen dan dinding'),
  },
  {
    slug: 'paku',
    nama: 'Paku bitumen',
    fungsi: 'Paku pendek berkepala lebar untuk memaku genteng bitumen ke papan alas tanpa merobek lembarannya.',
    spek: [
      { label: 'Panjang', nilai: '1,5–2 cm' },
      { label: 'Jenis', nilai: 'Kepala lebar (roofing nail)' },
      { label: 'Kebutuhan', nilai: `±${harga.paku.perM2} paku per m² atap` },
    ],
    harga: { nilai: harga.paku.harga, satuan: 'pcs' },
    foto: gambar('aksesoris-paku-3x2', 'Ilustrasi paku bitumen kepala lebar di atas genteng aspal'),
  },
  {
    slug: 'skrup',
    nama: 'Skrup',
    fungsi: 'Sekrup baja untuk mengunci papan alas multiplek atau GRC ke rangka, supaya papan tidak bergeser atau melengkung.',
    spek: [
      { label: 'Panjang', nilai: '2,5–4 cm (umumnya 1 inci)' },
      { label: 'Jenis', nilai: 'Drywall, kayu, atau hex' },
      { label: 'Kebutuhan', nilai: `±${harga.skrup.perLembarAlas} skrup per lembar papan alas` },
    ],
    harga: { nilai: harga.skrup.harga, satuan: 'pcs' },
    foto: gambar('aksesoris-skrup-3x2', 'Ilustrasi sekrup dibor ke papan alas di atas reng baja ringan'),
  },
  {
    slug: 'aluminium-foil',
    nama: 'Aluminium foil',
    fungsi: 'Lembaran pemantul panas di bawah atap. Penelitian di Indonesia mencatat plafon berlapis foil menurunkan suhu ruangan 0,5–2°C.',
    spek: [
      { label: 'Ukuran', nilai: '1 × 30 m per roll' },
      { label: 'Jenis', nilai: 'Single atau double' },
      { label: 'Dipasang', nilai: 'Di bawah papan alas atau di atas plafon' },
    ],
    foto: gambar('loteng-ventilasi-3x2', 'Ilustrasi ruang bawah atap berlapis aluminium foil'),
  },
  {
    slug: 'baja-ringan',
    nama: 'Rangka baja ringan',
    fungsi: 'Rangka atap pengganti kayu untuk rumah baru atau rangka lama yang lapuk. Kami jual sudah dengan pasang.',
    spek: [
      { label: 'Kanal C', nilai: '0,75 mm' },
      { label: 'Reng', nilai: '0,40–0,45 mm' },
      { label: 'Merek', nilai: 'Taso, Hi-Steel, K-Steel' },
    ],
    harga: { nilai: Math.min(...Object.values(harga.rangka.merek).map((m) => m.harga)), satuan: 'm²', catatan: 'mulai' },
    href: '/produk/rangka-baja-ringan',
    foto: gambar('penerapan-rangka-rumah-baru-3x2', 'Ilustrasi rangka atap baja ringan terpasang di rumah baru'),
  },
];

export const aksesoris: Aksesoris[] = daftar.map((a) => ({ ...a, wujud: semuaWujud[`../../assets/gambar/produk/aksesoris-${a.slug}-1x1.jpg`] }));

/** "Rp179.500" */
export const rupiah = (n: number) => `Rp${n.toLocaleString('id-ID')}`;
