// Data halaman Produk & Layanan (/produk dan /produk/[slug]).
// Aturan isi (DECISIONS 038–039): fakta dari dokumen resmi pabrik bila ada; data dari katalog pihak ketiga hanya
// dipakai setelah dicocokkan dan tidak pernah disebut sebagai sumber publik. Tanpa klaim TKDN/produk lokal.
// Harga hanya dari harga.ts (Bang Yusuf); merek tanpa harga tampil "Tanya admin".
import type { ImageMetadata } from 'astro';
import { harga, rentangRangka, type Merek } from './harga';
import { TAMPIL_PLAFON, waLink } from './bisnis';
import cti1 from '../../assets/gambar/magnific/penerapan-cti-ct3-gazebo-3x2.jpg';
import maxxi1 from '../../assets/gambar/magnific/penerapan-maxxi-promaxxi-rumah-3x2.jpg';
import cti2 from '../../assets/gambar/magnific/penerapan-cti-ct3-kafe-3x2.jpg';
import maxxi2 from '../../assets/gambar/magnific/penerapan-maxxi-maxxiroof-rumah-3x2.jpg';
import tegola1 from '../../assets/gambar/magnific/penerapan-tegola-rectangular-villa-3x2.jpg';
import tegola2 from '../../assets/gambar/magnific/penerapan-tegola-rectangular-lereng-3x2.jpg';
import victory1 from '../../assets/gambar/magnific/penerapan-victory-standar-rumah-3x2.jpg';
import victory2 from '../../assets/gambar/magnific/penerapan-victory-two-tone-guesthouse-3x2.jpg';
import rangka1 from '../../assets/gambar/magnific/rangka-baja-ringan-papan-3x2.jpg';
import rangka2 from '../../assets/gambar/magnific/penerapan-rangka-rumah-baru-3x2.jpg';
import shunda1 from '../../assets/gambar/magnific/penerapan-plafon-shunda-ruang-keluarga-3x2.jpg';
import shunda2 from '../../assets/gambar/magnific/penerapan-plafon-shunda-teras-3x2.jpg';
import javafon1 from '../../assets/gambar/magnific/penerapan-plafon-javafon-kafe-3x2.jpg';
import javafon2 from '../../assets/gambar/magnific/penerapan-plafon-javafon-dapur-3x2.jpg';
import javabitumen1 from '../../assets/gambar/magnific/penerapan-javabitumen-rumah-3x2.jpg';

// Foto close-up tiap seri (Magnific, bentuk potongan dicocokkan ke katalog resmi). Nama file = kunci `foto`.
const fotoSeri = import.meta.glob<ImageMetadata>('../../assets/gambar/seri/*.jpg', { eager: true, import: 'default' });
const seriFoto = (kunci: string) => fotoSeri[`../../assets/gambar/seri/${kunci}.jpg`];
// Contoh warna: foto tekstur seri yang diwarnai ulang per warna (dibuat skrip, DECISIONS 042).
const contohWarna = import.meta.glob<ImageMetadata>('../../assets/gambar/warna/*.jpg', { eager: true, import: 'default' });
const slugNama = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const fotoWarna = (tekstur: string, nama: string) => contohWarna[`../../assets/gambar/warna/${tekstur}-${slugNama(nama)}.jpg`];

/** Lini produk Atapura. Halaman /produk dikelompokkan per lini; label & kategori schema dari LINI. */
export type Lini = 'atap' | 'plafon' | 'rangka';
// `pilihan` = sebutan baris di bagian pilihan (seri/merek), `corak` = sebutan bagian warna.
export const LINI: Record<Lini, { nama: string; kategori: string; pilihan: string; corak: string }> = {
  atap: { nama: 'Atap bitumen', kategori: 'Genteng aspal (asphalt shingle)', pilihan: 'seri', corak: 'warna' },
  plafon: { nama: 'Plafon', kategori: 'Plafon PVC', pilihan: 'seri', corak: 'motif' },
  rangka: { nama: 'Rangka baja ringan', kategori: 'Rangka atap baja ringan', pilihan: 'merek', corak: 'warna' },
};

export interface Seri {
  nama: string;
  /** Foto close-up produk terpasang (ilustrasi Magnific). Kosong = baris tanpa foto. */
  foto?: ImageMetadata;
  ringkas: string;
  spek: { label: string; nilai: string }[];
}

export interface Warna {
  nama: string;
  /** Kode warna pabrik bila ada, mis. "BK". */
  kode?: string;
  /** Perkiraan warna di layar (bukan warna resmi). Kosong = motif ditampilkan sebagai nama saja. */
  hex?: string;
  grup?: string;
}

export interface Produk {
  slug: string;
  nama: string;
  lini: Lini;
  /** Teks pendek di kartu katalog; default daftar nama seri. */
  atribut?: string;
  /** Rentang harga terpasang per m² untuk lini selain atap (atap memakai `harga`). */
  rentang?: readonly [number, number];
  /** Kunci di harga.ts bila harga Atapura sudah ada. */
  harga?: Merek;
  judul: string;
  ringkas: string;
  tentang: string[];
  fakta: { label: string; nilai: string }[];
  seri: Seri[];
  /** Warna per kelompok (mis. per seri). Kosong = menunggu data resmi. */
  /** `tekstur` = kunci foto seri yang diwarnai ulang jadi contoh warna (assets/gambar/warna/<tekstur>-<nama>.jpg). */
  warna: { tekstur: string; judul: string; catatan?: string; daftar: Warna[] }[];
  aksesori: { nama: string; isi: string }[];
  /** Ilustrasi penerapan (Magnific), selalu berlabel ilustrasi, bukan proyek Atapura. */
  penerapan: { gambar: ImageMetadata; alt: string; keterangan: string }[];
  garansi: string;
  /** Sudah ada data resmi yang cukup? false = halaman menyatakan terus terang data menunggu dokumen. */
  terverifikasi: boolean;
  sumber: { nama: string; url?: string }[];
}

/** "Rp150–230 ribu per m²" dari rentang rupiah. */
const rbPerM2 = ([a, b]: readonly [number, number]) => `Rp${a / 1000}–${b / 1000} ribu per m²`;

const hargaTerpasang = (m: Merek) => {
  const [a, b] = harga.merek[m].terpasang;
  return `Rp${a / 1000}–${b / 1000} ribu per m²`;
};

const semuaProduk: Produk[] = [
  {
    slug: 'cti',
    lini: 'atap',
    nama: 'CTI',
    harga: 'CTI',
    judul: 'Atap bitumen CTI: CT3, CT5, dan CT6',
    ringkas: 'Genteng aspal CTI dalam tiga bentuk potongan: 3-tab, potongan tidak beraturan, dan segi enam. Garansi produk 30 tahun dari pabrik.',
    tentang: [
      'CTI adalah merek genteng aspal yang diproduksi PT Bitutek. Lembarannya memakai aspal yang dimodifikasi SBS, tulangan serat kaca, permukaan butiran batu berwarna, dan perekat yang dilindungi plastik film.',
      'Tiga bentuk potongan dalam satu merek: CT3 untuk tampilan rapi yang paling umum, CT5 dengan potongan tidak beraturan, dan CT6 berbentuk segi enam.',
    ],
    fakta: [
      { label: 'Produsen', nilai: 'PT Bitutek' },
      { label: 'Jenis', nilai: '3-tab dan bentuk khusus' },
      { label: 'Garansi produk', nilai: '30 tahun dari pabrik' },
      { label: 'Kemiringan', nilai: '10–15° cara khusus, standar di atas 15°' },
      { label: 'Terpasang, Jabodetabek', nilai: hargaTerpasang('CTI') },
    ],
    seri: [
      {
        nama: 'CT3',
        foto: seriFoto('cti-ct3'),
        ringkas: 'Model 3-tab, tiga lidah rata. Tampilan paling rapi dan paling umum dipakai di rumah tinggal.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 333 mm' },
          { label: 'Isi per bundel', nilai: '21 lembar (3 m²)' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
      {
        nama: 'CT5',
        foto: seriFoto('cti-ct5'),
        ringkas: 'Potongan tidak beraturan yang membuat atap tampak berlapis dan bertekstur setelah terpasang.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 317,5 mm' },
          { label: 'Isi per bundel', nilai: '22 lembar (3 m²)' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
      {
        nama: 'CT6',
        foto: seriFoto('cti-ct6'),
        ringkas: 'Potongan segi enam untuk atap yang ingin tampil beda, sering dipilih untuk bangunan berarsitektur khusus.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 317,5 mm' },
          { label: 'Isi per bundel', nilai: '17 lembar (2,32 m²)' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
    ],
    warna: [
      // Foto contoh warna CTI = ubin dari brosur resmi CTI (diberikan Rama 22 Nov 2026), diperbesar 2x + dipertajam.
      // Nama sudah dicek ke brosur (DECISIONS 083): label benar, tapi cetakan brosur menggeser Black & Dark Brown → catatan per grup.
      { tekstur: 'cti-ct3', judul: 'CT3 · warna solid', catatan: 'Foto ubin diambil dari brosur cetak CTI. Di brosur, Black tampak kehijauan atau abu dan Dark Brown tampak abu gelap; cocokkan dengan sampel fisik yang kami bawa saat survey.', daftar: [{ nama: 'Black', kode: 'BK', hex: '#1E1F21' }, { nama: 'Dark Grey', kode: 'DG', hex: '#6B6D70' }, { nama: 'Dark Brown', kode: 'DB', hex: '#2E2A2B' }, { nama: 'Red', kode: 'RD', hex: '#9B2F2E' }, { nama: 'Green', kode: 'GN', hex: '#2F5A3C' }, { nama: 'Gold', kode: 'GD', hex: '#9C7347' }] },
      { tekstur: 'cti-ct3', judul: 'CT3 · warna gradasi', daftar: [{ nama: 'Midnight Black', kode: 'MIB', hex: '#2A2B2D' }, { nama: 'Charcoal Grey', kode: 'CHG', hex: '#45474A' }, { nama: 'Coffee Brown', kode: 'COB', hex: '#5A5552' }, { nama: 'Sunset Red', kode: 'SUR', hex: '#8E3A3E' }, { nama: 'Forest Green', kode: 'FOG', hex: '#2F4A33' }, { nama: 'Tuscany Gold', kode: 'TUG', hex: '#6E5A45' }] },
      { tekstur: 'cti-ct5', judul: 'CT5', catatan: 'Foto ubin diambil dari brosur cetak CTI. Di brosur, Black tampak kehijauan atau abu dan Dark Brown tampak abu gelap; cocokkan dengan sampel fisik yang kami bawa saat survey.', daftar: [{ nama: 'Black', kode: 'BK', hex: '#1E1F21' }, { nama: 'Dark Grey', kode: 'DG', hex: '#6B6D70' }, { nama: 'Dark Brown', kode: 'DB', hex: '#2E2A2B' }, { nama: 'Red', kode: 'RD', hex: '#9B2F2E' }, { nama: 'Green', kode: 'GN', hex: '#2F5A3C' }, { nama: 'Gold', kode: 'GD', hex: '#9C7347' }] },
      { tekstur: 'cti-ct6', judul: 'CT6', catatan: 'Foto ubin diambil dari brosur cetak CTI. Di brosur, Black tampak kehijauan atau abu dan Dark Brown tampak abu gelap; cocokkan dengan sampel fisik yang kami bawa saat survey. Warna khusus (custom) bisa dipesan; tanyakan ketersediaannya lewat WhatsApp.', daftar: [{ nama: 'Black', kode: 'BK', hex: '#1E1F21' }, { nama: 'Dark Grey', kode: 'DG', hex: '#6B6D70' }, { nama: 'Dark Brown', kode: 'DB', hex: '#2E2A2B' }, { nama: 'Red', kode: 'RD', hex: '#9B2F2E' }, { nama: 'Green', kode: 'GN', hex: '#2F5A3C' }, { nama: 'Gold', kode: 'GD', hex: '#9C7347' }] },
    ],
    aksesori: [
      { nama: 'UnderMaster', isi: 'Lapisan bawah (underlayer) di atas papan alas, sebelum genteng. Gulungan 1 × 10 m atau 1 × 20 m (16 atau 32 kg), sambungan tumpang 10 cm.' },
      // Batas 15° dari halaman resmi CTI BaseMaster; angka 25 di brosur adalah berat 25 kg per rol, bukan derajat.
      { nama: 'BaseMaster', isi: 'Membran bitumen yang dipasang dengan cara dibakar (torching) untuk dak atau atap di bawah 15°.' },
      { nama: 'GuardMaster', isi: 'Membran bitumen berbutir batu berwarna (roll shingle) gulungan 1 × 10 m, untuk atap datar maupun miring.' },
    ],
    penerapan: [
      { gambar: cti1, alt: 'Ilustrasi gazebo resort tepi kolam beratap limas genteng aspal 3-tab abu tua', keterangan: 'Potongan 3-tab, abu tua, pada gazebo resort' },
      { gambar: cti2, alt: 'Ilustrasi kafe modern beratap pelana curam genteng aspal 3-tab abu tua', keterangan: 'Potongan 3-tab, abu tua, pada kafe beratap pelana curam' },
    ],
    garansi: 'Garansi produk 30 tahun dari pabrik CTI. Garansi pemasangan dari pabrik berlaku untuk pemasangan oleh CTI; pemasangan Atapura dilindungi garansi pemasangan tertulis 5 tahun dari Atapura.',
    terverifikasi: true,
    sumber: [
      { nama: 'CTI, halaman produk CT3, CT5, CT6', url: 'https://www.ct-i.co.kr/portfolio-item/ct3-3-tab-asphalt-roofing-shingle-2/' },
      { nama: 'CTI, tanya jawab (garansi)', url: 'https://www.ct-i.co.kr/tanya-jawab/' },
      { nama: 'CTI, panduan pemasangan Rev. September 2024', url: 'https://www.ct-i.co.kr/wp-content/uploads/2024/12/CTI-Installation-Guide-Rev.-September-2024-Ind.pdf' },
    ],
  },
  {
    slug: 'maxxi',
    lini: 'atap',
    nama: 'Maxxi',
    harga: 'Maxxi',
    judul: 'Atap bitumen Maxxi: Maxxiroof dan Promaxxi',
    ringkas: 'Maxxiroof 3-tab untuk rumah tinggal yang ingin hemat, dan Promaxxi laminasi dua lapis yang lebih tebal. Garansi pabrik 25 dan 30 tahun.',
    tentang: [
      'Maxxi menawarkan dua tingkat: Maxxiroof, genteng aspal 3-tab yang ringan dan ekonomis, dan Promaxxi, genteng aspal laminasi dua lapis yang hampir dua kali lebih tebal.',
      'Pabrikan mencantumkan rentang pemasangan dari 15 sampai 90 derajat, sehingga Maxxi juga bisa dipakai sebagai pelapis dinding atau fasad.',
    ],
    fakta: [
      { label: 'Jenis', nilai: '3-tab dan laminasi' },
      { label: 'Garansi produk', nilai: '25 tahun (Maxxiroof), 30 tahun (Promaxxi)' },
      { label: 'Kemiringan', nilai: '15–90°' },
      { label: 'Terpasang, Jabodetabek', nilai: hargaTerpasang('Maxxi') },
    ],
    seri: [
      {
        nama: 'Maxxiroof',
        foto: seriFoto('maxxi-maxxiroof'),
        ringkas: 'Genteng aspal 3-tab satu lapis. Pilihan paling hemat untuk rumah tinggal dan renovasi.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 333 mm' },
          { label: 'Tebal', nilai: '2,66 mm' },
          { label: 'Berat', nilai: '±8,7 kg/m² (27 kg per bundel)' },
          { label: 'Garansi', nilai: '25 tahun' },
        ],
      },
      {
        nama: 'Promaxxi',
        foto: seriFoto('maxxi-promaxxi'),
        ringkas: 'Genteng aspal laminasi dua lapis. Lebih tebal, bayangannya lebih dalam, dan tercantum tahan angin 130 km/jam.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 333 mm' },
          { label: 'Tebal', nilai: '5,2 mm' },
          { label: 'Berat', nilai: '±11,6 kg/m² (27 kg per bundel)' },
          { label: 'Tahan angin', nilai: '130 km/jam' },
          { label: 'Garansi', nilai: '30 tahun' },
        ],
      },
    ],
    warna: [
      { tekstur: 'maxxi-maxxiroof', judul: 'Maxxiroof', daftar: [{ nama: 'Slate', hex: '#8A8F8A' }, { nama: 'Cedar', hex: '#C9A574' }, { nama: 'Ash Brown', hex: '#9A5A43' }, { nama: 'Sierra Gray 1 Tone', hex: '#8C8F8D' }, { nama: 'Sierra Gray 2 Tone', hex: '#8E928E' }, { nama: 'Bark Brown', hex: '#4E3330' }, { nama: 'Dark Black', hex: '#2B2928' }, { nama: 'Charcoal', hex: '#3A3836' }, { nama: 'Dark Brown', hex: '#4A3A36' }] },
      { tekstur: 'maxxi-promaxxi', judul: 'Promaxxi', catatan: 'Warna Promaxxi lain bisa ditanyakan lewat WhatsApp.', daftar: [{ nama: 'Charcoal', hex: '#4A4A48' }, { nama: 'Mix Spanish Red', hex: '#B0574A' }, { nama: 'Lime Gray', hex: '#9DA3AA' }] },
    ],
    aksesori: [],
    penerapan: [
      { gambar: maxxi2, alt: 'Ilustrasi rumah satu lantai di perumahan beratap pelana genteng aspal 3-tab abu', keterangan: 'Potongan 3-tab abu pada rumah satu lantai di perumahan' },
      { gambar: maxxi1, alt: 'Ilustrasi rumah dua lantai beratap limas genteng aspal laminasi coklat tua', keterangan: 'Genteng laminasi coklat tua pada rumah dua lantai' },
    ],
    garansi: 'Garansi produk dari pabrik: 25 tahun untuk Maxxiroof dan 30 tahun untuk Promaxxi, dengan syarat sesuai dokumen garansi pabrik. Pemasangan Atapura dilindungi garansi pemasangan tertulis 5 tahun.',
    terverifikasi: true,
    sumber: [
      { nama: 'Maxxiroof, halaman produk', url: 'https://maxxiroof.com/maxxiroof/' },
      { nama: 'Promaxxi, halaman produk', url: 'https://maxxiroof.com/promaxxi/' },
    ],
  },
  {
    slug: 'tegola',
    lini: 'atap',
    harga: 'Tegola',
    nama: 'Tegola',
    judul: 'Atap bitumen Tegola: Eco Roof, Top Shingles, Premium, dan Master',
    ringkas: 'Genteng aspal buatan Tegola Canadese, Italia, dalam empat seri: Eco Roof dan Top Shingles yang lebih hemat, Premium satu lapis dengan beberapa bentuk potongan, dan Master dua lapis.',
    tentang: [
      'Tegola diproduksi Tegola Canadese di Vittorio Veneto, Italia. Lembarannya memakai aspal oksidasi, tulangan serat kaca, dan butiran basal berlapis keramik.',
      'Seri Premium tersedia dalam beberapa bentuk potongan: persegi, sisik, segi enam (Mosaik), dan persegi bertingkat (Gothik). Seri Master adalah genteng dua lapis yang lebih berat dan bertekstur.',
    ],
    fakta: [
      { label: 'Pabrikan', nilai: 'Tegola Canadese, Italia' },
      { label: 'Jenis', nilai: 'Satu lapis dan dua lapis' },
      { label: 'Garansi', nilai: 'Terbatas, terdaftar, hingga 40 tahun bertahap' },
      { label: 'Kemiringan paku biasa', nilai: 'Mulai 14° (Master 19°)' },
      { label: 'Terpasang, Jabodetabek', nilai: hargaTerpasang('Tegola') },
    ],
    // Eco Roof & Top Shingles (Rama 19 Nov 2026, DECISIONS 052): spek dicocokkan dengan katalog distributor; harga
    // SEMENTARA = ±10% di bawah brosur Dokter Atap 2025 (pola yang sama dengan Premium), dikoreksi Bang Yusuf.
    seri: [
      {
        nama: 'Eco Roof',
        foto: seriFoto('tegola-eco-roof-rectangular'),
        ringkas: 'Seri paling hemat dari Tegola, satu lapis dengan tiga bentuk potongan dan warna campuran (mixed).',
        spek: [
          { label: 'Motif', nilai: 'Rectangular, Traditional, Hexagonal' },
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm (Hexagonal 337 mm)' },
          { label: 'Berat', nilai: '±8,5 kg/m²' },
          { label: 'Isi per bundel', nilai: '2,32 m² (Hexagonal 2,30 m²)' },
          { label: 'Garansi pabrik', nilai: '20 tahun' },
          { label: 'Genteng saja', nilai: '±Rp315–350 ribu per m²' },
          { label: 'Per motif', nilai: 'Rectangular ±Rp315 rb · Traditional ±Rp330 rb · Hexagonal ±Rp350 rb' },
        ],
      },
      {
        nama: 'Top Shingles',
        foto: seriFoto('tegola-top-shingles-rectangular'),
        ringkas: 'Satu lapis potongan persegi dengan lapisan aspal lebih tebal dari Eco Roof, garansi lebih panjang.',
        spek: [
          { label: 'Motif', nilai: 'Rectangular' },
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm' },
          { label: 'Berat', nilai: '±9,4 kg/m²' },
          { label: 'Isi per bundel', nilai: '3,5 m²' },
          { label: 'Garansi pabrik', nilai: '30 tahun' },
          { label: 'Genteng saja', nilai: '±Rp360 ribu per m²' },
        ],
      },
      {
        nama: 'Premium Rectangular',
        foto: seriFoto('tegola-premium-rectangular'),
        ringkas: 'Satu lapis dengan potongan persegi, tampilan rapi mirip 3-tab.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm' },
          { label: 'Berat', nilai: '±10,7 kg/m²' },
          { label: 'Isi per bundel', nilai: '21 lembar (3,05 m²)' },
          { label: 'Genteng saja', nilai: '±Rp420 ribu per m²' },
        ],
      },
      {
        nama: 'Premium Traditional',
        foto: seriFoto('tegola-premium-traditional'),
        ringkas: 'Satu lapis dengan potongan membulat seperti sisik, untuk rumah bergaya klasik.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm' },
          { label: 'Berat', nilai: '±10,7 kg/m²' },
          { label: 'Isi per bundel', nilai: '3,05 m²' },
          { label: 'Genteng saja', nilai: '±Rp420 ribu per m²' },
        ],
      },
      {
        nama: 'Premium Mosaik',
        foto: seriFoto('tegola-premium-mosaik'),
        ringkas: 'Satu lapis berpotongan segi enam dengan warna dua nada, bidang atap tampak seperti sisik besar.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 337 mm' },
          { label: 'Berat', nilai: '±9,0 kg/m²' },
          { label: 'Isi per bundel', nilai: '3,45 m²' },
          { label: 'Genteng saja', nilai: '±Rp420 ribu per m²' },
        ],
      },
      {
        nama: 'Premium Gothik',
        foto: seriFoto('tegola-premium-gothik'),
        ringkas: 'Satu lapis dengan lidah persegi berbagai lebar dan warna dua nada, sehingga atap tampak berlapis.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 337 mm' },
          { label: 'Berat', nilai: '±9,0 kg/m²' },
          { label: 'Isi per bundel', nilai: '3,45 m²' },
          { label: 'Genteng saja', nilai: '±Rp420 ribu per m²' },
        ],
      },
      {
        nama: 'Master',
        foto: seriFoto('tegola-master'),
        ringkas: 'Dua lapis, lebih berat dan bertekstur dalam. Pemasangan dengan paku biasa mulai kemiringan 19°.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '998 × 337 mm' },
          { label: 'Berat', nilai: '±12,3 kg/m²' },
          { label: 'Isi per bundel', nilai: '2 m²' },
          { label: 'Paku per lembar', nilai: '4 (6 untuk kemiringan 60–85°)' },
          { label: 'Genteng saja', nilai: '±Rp550 ribu per m²' },
        ],
      },
    ],
    warna: [
      // Nama, kode, kelompok, dan foto contoh (ubin dipotong dari brosur distributor Tegola, diberikan Rama 22 Nov 2026,
      // diperbesar 2x + dipertajam: tools/warna/ & DECISIONS 063); hex = cadangan bila foto tidak ada.
      { tekstur: 'tegola-master', judul: 'Master', daftar: [{ nama: 'Terracotta', kode: '104', hex: '#A0554A' }, { nama: 'Wood Shake', kode: '129', hex: '#6E5446' }, { nama: 'Dark Slate', kode: '151', hex: '#4A4C4F' }, { nama: 'Light Slate', kode: '153', hex: '#9AA0A4' }, { nama: 'Stone Green', kode: '156', hex: '#6E8F69' }, { nama: 'Ancient Stone', kode: '167', hex: '#5E6066' }, { nama: 'Stone Grey', kode: '174', hex: '#7E847A' }, { nama: 'Blue', kode: '180', hex: '#4F79A8' }] },
      { tekstur: 'tegola-master-j', judul: 'Master J', daftar: [{ nama: 'Red', kode: '119', hex: '#7E3434' }, { nama: 'Brown', kode: '139', hex: '#5D4A3E' }, { nama: 'Dark Slate', kode: '160', hex: '#44464A' }, { nama: 'Green', kode: '169', hex: '#567257' }] },
      { tekstur: 'tegola-master-coppo', judul: 'Master Coppo', daftar: [{ nama: 'Coppo', hex: '#B0704E' }] },
      { tekstur: 'tegola-premium-mosaik', judul: 'Premium Mosaik', daftar: [{ nama: '2-Tone Red', kode: '010', hex: '#9A4237' }, { nama: '2-Tone Brown', kode: '020', hex: '#6E5E5A' }, { nama: 'Black', kode: '060', hex: '#2B2E34' }, { nama: '2-Tone Grey', kode: '061', hex: '#7C8590' }, { nama: '2-Tone Green', kode: '070', hex: '#5F8261' }, { nama: '2-Tone Blue', kode: '081', hex: '#4F78A6' }] },
      { tekstur: 'tegola-premium-gothik', judul: 'Premium Gothik', daftar: [{ nama: '2-Tone Red', kode: '203', hex: '#9A473C' }, { nama: '2-Tone Brown', kode: '230', hex: '#5E5048' }, { nama: '2-Tone Black', kode: '251', hex: '#4A5056' }, { nama: '2-Tone Grey', kode: '254', hex: '#A3A8AD' }, { nama: '2-Tone Green', kode: '274', hex: '#4F7A50' }, { nama: '2-Tone Blue', kode: '280', hex: '#5D8FC4' }] },
      { tekstur: 'tegola-premium-liberty', judul: 'Premium Liberty', daftar: [{ nama: 'European Red', kode: '004', hex: '#B07A64' }, { nama: '2-Tone Black', kode: '051', hex: '#4A4C50' }] },
      { tekstur: 'tegola-premium-traditional', judul: 'Premium Traditional', daftar: [{ nama: 'Brick Red', kode: '006', hex: '#B5553A' }, { nama: 'Krakow', kode: '008', hex: '#8E4A52' }, { nama: '2-Tone Red', kode: '010', hex: '#8A3A33' }, { nama: '2-Tone Brown', kode: '023', hex: '#4E3A33' }, { nama: 'Slate Grey', kode: '066', hex: '#5A6366' }, { nama: '2-Tone Green', kode: '073', hex: '#5E8A4E' }, { nama: 'Blue', kode: '080', hex: '#3F7FC0' }] },
      { tekstur: 'tegola-premium-rectangular', judul: 'Premium Rectangular', daftar: [{ nama: 'Red', kode: '001', hex: '#9A3A34' }, { nama: '2-Tone Red', kode: '002', hex: '#9A4A36' }, { nama: 'Spanish Red', kode: '003', hex: '#9E4A3E' }, { nama: 'European Red', kode: '004', hex: '#B0806A' }, { nama: '2-Tone Brown', kode: '020', hex: '#6E5650' }, { nama: 'Dark Brown', kode: '021', hex: '#4A3632' }, { nama: 'Dark Grey', kode: '050', hex: '#8C8A8E' }, { nama: '2-Tone Black', kode: '051', hex: '#3E3E42' }, { nama: 'Light Grey', kode: '053', hex: '#B5B8BA' }, { nama: 'Black', kode: '060', hex: '#2B2E36' }, { nama: 'Slate Grey', kode: '061', hex: '#5A5E66' }, { nama: '2-Tone Green', kode: '070', hex: '#5E8A55' }, { nama: 'Blue', kode: '080', hex: '#4A86C0' }] },
      { tekstur: 'tegola-top-shingles-traditional', judul: 'Top Shingles Traditional', daftar: [{ nama: 'Unired', kode: '001', hex: '#8E3A33' }, { nama: '2-Tone Red', kode: '010', hex: '#8A4040' }, { nama: '2-Tone Brown', kode: '020', hex: '#6E5A4E' }, { nama: 'Black', kode: '060', hex: '#2E3236' }, { nama: 'Green', kode: '075', hex: '#3E7A55' }, { nama: '2-Tone Blue', kode: '083', hex: '#4E7FB0' }] },
      { tekstur: 'tegola-top-shingles-rectangular', judul: 'Top Shingles Rectangular', daftar: [{ nama: 'Unired', kode: '001', hex: '#8E3533' }, { nama: '2-Tone Red', kode: '002', hex: '#8A4038' }, { nama: 'Spanish Red', kode: '003', hex: '#8E3A35' }, { nama: 'Brick', kode: '006', hex: '#7E3A33' }, { nama: '2-Tone Brown', kode: '020', hex: '#6E5046' }, { nama: 'Dark Grey', kode: '050', hex: '#9EA0A3' }, { nama: 'Black', kode: '060', hex: '#2C2E32' }, { nama: 'Slate', kode: '061', hex: '#3E4448' }, { nama: '2-Tone Green', kode: '070', hex: '#4E7A50' }, { nama: '2-Tone Blue', kode: '083', hex: '#4A5260' }] },
      { tekstur: 'tegola-eco-roof-hexagonal', judul: 'Eco Roof Hexagonal', daftar: [{ nama: 'Red', kode: '209', hex: '#8E4036' }, { nama: 'Brown', kode: '239', hex: '#6A5048' }, { nama: 'Grey', kode: '269', hex: '#8A8C8E' }, { nama: 'Green', kode: '279', hex: '#4E6A50' }] },
      { tekstur: 'tegola-eco-roof-traditional', judul: 'Eco Roof Traditional', daftar: [{ nama: 'Mixed Red', kode: '013', hex: '#8A4034' }, { nama: 'Mixed Brown', kode: '032', hex: '#4E3A32' }, { nama: 'Mixed Slate', kode: '065', hex: '#4E5256' }, { nama: 'Mixed Green', kode: '078', hex: '#5A7A50' }] },
      { tekstur: 'tegola-eco-roof-rectangular', judul: 'Eco Roof Rectangular', daftar: [{ nama: 'Mixed Red', kode: '013', hex: '#8A4034' }, { nama: 'Mixed Brown', kode: '032', hex: '#4E3A32' }, { nama: 'Mixed Slate', kode: '065', hex: '#4E5256' }, { nama: 'Mixed Green', kode: '078', hex: '#5A7A50' }] },
    ],
    aksesori: [
      { nama: 'Startbar', isi: 'Membran lapisan bawah yang diwajibkan pabrik untuk pemasangan dengan paku pada kemiringan 14° ke atas.' },
    ],
    penerapan: [
      { gambar: tegola1, alt: 'Ilustrasi villa klasik beratap limas genteng aspal potongan persegi merah tua', keterangan: 'Potongan persegi (Rectangular), merah tua, pada villa bertaman' },
      { gambar: tegola2, alt: 'Ilustrasi villa di lereng berkabut beratap genteng aspal potongan persegi abu tua', keterangan: 'Potongan persegi (Rectangular), abu tua, pada villa dataran tinggi' },
    ],
    garansi: 'Garansi terbatas terdaftar hingga 40 tahun dari pabrik, berlaku bertahap: 5–10 tahun pertama penggantian lembar cacat dan bantuan biaya pasang, setelahnya potongan harga material baru. Syaratnya pemasangan sesuai manual pabrik dan aksesori asli. Pemasangan Atapura dilindungi garansi pemasangan tertulis 5 tahun.',
    terverifikasi: true,
    sumber: [
      { nama: 'Tegola Canadese, lembar data teknis (TDS) per seri', url: 'https://tegolacanadese.com/' },
      { nama: 'Tegola Canadese, halaman garansi', url: 'https://tegolacanadese.com/en/garanzia/' },
      { nama: 'Tegola Canadese, panduan pemasangan Rectangular dan Master' },
    ],
  },
  {
    slug: 'javabitumen',
    lini: 'atap',
    atribut: 'Warna solid dan gradasi',
    nama: 'Javabitumen',
    harga: 'Javabitumen',
    judul: 'Atap bitumen Javabitumen',
    ringkas: 'Genteng aspal Javabitumen di kelas ekonomis, dengan pilihan warna solid dan gradasi. Spesifikasi teknis menunggu dokumen resmi.',
    tentang: [
      'Javabitumen kami pasang di kelas harga ekonomis. Situs distributornya mencantumkan pilihan warna, tetapi belum memuat ukuran, berat, kemiringan, maupun syarat garansi, jadi angka-angka itu belum kami tulis di sini.',
      'Saat survey, kami membawa sampel fisik dan dokumen dari pemasok supaya Anda bisa menilai langsung.',
    ],
    fakta: [
      { label: 'Kelas harga', nilai: 'Ekonomis' },
      { label: 'Terpasang, Jabodetabek', nilai: hargaTerpasang('Javabitumen') },
      { label: 'Spesifikasi & garansi', nilai: 'Menunggu dokumen resmi' },
    ],
    seri: [],
    warna: [
      { tekstur: 'cti-ct3', judul: 'Warna solid', daftar: [{ nama: 'Hitam', hex: '#2E3136' }, { nama: 'Abu-abu gelap', hex: '#4A5058' }, { nama: 'Abu-abu', hex: '#6E7275' }, { nama: 'Abu-abu terang', hex: '#8C9196' }, { nama: 'Biru', hex: '#3E5378' }, { nama: 'Biru terang', hex: '#4A7BC4' }, { nama: 'Hijau', hex: '#4E6450' }, { nama: 'Hijau muda', hex: '#5E8A63' }, { nama: 'Coklat', hex: '#5E5148' }, { nama: 'Coklat gelap', hex: '#5A4A3C' }, { nama: 'Coklat terang', hex: '#B5765B' }, { nama: 'Coklat emas', hex: '#B59A72' }, { nama: 'Merah', hex: '#A9584A' }, { nama: 'Merah gelap', hex: '#8A5550' }, { nama: 'Merah terang', hex: '#C9614E' }] },
      { tekstur: 'cti-ct3', judul: 'Seri gradasi', catatan: 'Nama warna gradasi dikonfirmasi ulang ke pemasok saat survey.', daftar: [{ nama: 'Gradasi abu-abu', hex: '#55585C' }, { nama: 'Gradasi coklat', hex: '#6E4038' }, { nama: 'Gradasi hijau tua', hex: '#3E4E44' }, { nama: 'Gradasi hitam', hex: '#3A3F45' }, { nama: 'Gradasi merah', hex: '#9E4A3C' }] },
    ],
    aksesori: [],
    penerapan: [
      { gambar: javabitumen1, alt: 'Ilustrasi rumah satu lantai di perumahan beratap pelana genteng aspal 3-tab coklat gradasi', keterangan: 'Potongan 3-tab, coklat gradasi, pada rumah satu lantai di perumahan' },
    ],
    garansi: 'Syarat garansi pabrik menunggu dokumen resmi. Pemasangan Atapura dilindungi garansi pemasangan tertulis 5 tahun.',
    terverifikasi: false,
    sumber: [{ nama: 'Javabitumen, halaman produk di situs distributor (warna), dicek 4 November 2026', url: 'https://javabitumen.co.id/' }],
  },
  {
    slug: 'victory',
    lini: 'atap',
    nama: 'Victory',
    harga: 'Victory',
    judul: 'Atap bitumen Victory: Standar dan Two Tone',
    ringkas: 'Genteng aspal 3-tab Victory dalam dua seri: Standar satu warna dan Two Tone dua nada. Garansi pabrik menunggu dokumen resmi.',
    tentang: [
      'Victory adalah genteng aspal model 3-tab. Satu bundel berisi 21 lembar untuk 3 m² atap.',
      'Seri Standar berwarna rata, seri Two Tone memadukan dua nada warna di tiap lidah sehingga atap tampak berbayang. Spesifikasi teknis dan syarat garansi pabrik kami tulis setelah dokumen resmi dari pemasok masuk.',
    ],
    fakta: [
      { label: 'Jenis', nilai: '3-tab, seri Standar dan Two Tone' },
      { label: 'Isi per bundel', nilai: '21 lembar (3 m²)' },
      { label: 'Terpasang, Jabodetabek', nilai: hargaTerpasang('Victory') },
      { label: 'Garansi pabrik', nilai: 'Menunggu dokumen resmi' },
    ],
    seri: [
      {
        nama: 'Standar',
        foto: seriFoto('victory-standar'),
        ringkas: 'Model 3-tab dengan satu warna rata. Tampilan rapi dan bersih untuk rumah tinggal.',
        spek: [
          { label: 'Isi per bundel', nilai: '21 lembar (3 m²)' },
          { label: 'Genteng saja', nilai: 'Rp200 ribu per m²' },
        ],
      },
      {
        nama: 'Two Tone',
        foto: seriFoto('victory-two-tone'),
        ringkas: 'Model 3-tab dengan perpaduan dua nada warna di tiap lidah, sehingga atap tampak lebih berdimensi.',
        spek: [
          { label: 'Isi per bundel', nilai: '21 lembar (3 m²)' },
          { label: 'Genteng saja', nilai: 'Rp220 ribu per m²' },
        ],
      },
    ],
    warna: [
      { tekstur: 'victory-standar', judul: 'Standar', daftar: [{ nama: 'Cedar', hex: '#A8622E' }, { nama: 'Black', hex: '#2A2A2C' }, { nama: 'Dark Brown', hex: '#3A2E2A' }, { nama: 'Green', hex: '#2E5A3A' }, { nama: 'Grey', hex: '#555A60' }, { nama: 'Red', hex: '#B0332A' }] },
      { tekstur: 'victory-two-tone', judul: 'Two Tone', catatan: 'Ketersediaan warna kami pastikan ke pemasok saat survey.', daftar: [{ nama: 'Garnet Red', hex: '#8E2A24' }, { nama: 'Sapphire Blue', hex: '#2F7E9A' }, { nama: 'Shadow Black', hex: '#2E3034' }, { nama: 'Sienna Brown', hex: '#8A5530' }, { nama: 'Hickory Brown', hex: '#4E3A30' }, { nama: 'Antique Grey', hex: '#4E5E5A' }] },
    ],
    aksesori: [],
    penerapan: [
      { gambar: victory1, alt: 'Ilustrasi rumah dua lantai di perumahan beratap pelana genteng aspal 3-tab abu satu warna', keterangan: 'Seri Standar, abu, pada rumah dua lantai di perumahan' },
      { gambar: victory2, alt: 'Ilustrasi guesthouse di dataran tinggi beratap limas genteng aspal 3-tab dua nada coklat', keterangan: 'Seri Two Tone, coklat, pada guesthouse di dataran tinggi' },
    ],
    garansi: 'Syarat garansi pabrik menunggu dokumen resmi. Pemasangan Atapura dilindungi garansi pemasangan tertulis 5 tahun.',
    terverifikasi: false,
    sumber: [],
  },
  {
    slug: 'shunda',
    nama: 'Shunda',
    atribut: '40 motif · lebar 20, 25, 30 cm',
    lini: 'plafon',
    rentang: harga.plafon.merek.Shunda.terpasang,
    judul: 'Plafon PVC Shunda: 40 motif, terpasang dengan rangka hollow',
    ringkas: 'Plafon PVC buatan PT Shunda Sucai Indonesia, lebar 20, 25, dan 30 cm dengan 40 motif dari putih polos sampai serat kayu.',
    tentang: [
      'Shunda dibuat PT Shunda Sucai Indonesia, produsen plafon PVC sejak 2007 dengan pabrik di Tangerang dan Pekanbaru. Panelnya panjang dan sempit, disambung dengan sistem knock-down.',
      'Kami pasang di atas rangka hollow, lengkap dengan jasa pasang. Menurut petunjuk pabrik, panel cukup dibersihkan dengan kain basah dan sedikit deterjen.',
    ],
    fakta: [
      { label: 'Produsen', nilai: 'PT Shunda Sucai Indonesia' },
      { label: 'Bahan', nilai: 'PVC' },
      { label: 'Lebar panel', nilai: '20, 25, 30 cm' },
      { label: 'Motif', nilai: '40 motif' },
      { label: 'Terpasang, Jabodetabek', nilai: `Rp${harga.plafon.merek.Shunda.terpasang[0] / 1000}–${harga.plafon.merek.Shunda.terpasang[1] / 1000} ribu per m²` },
      { label: 'Barang saja', nilai: rbPerM2(harga.plafon.merek.Shunda.barang) },
    ],
    seri: [
      {
        nama: 'Lebar 20 cm',
        foto: seriFoto('plafon-shunda-20'),
        ringkas: 'Pilihan motif terbanyak, termasuk putih polos glossy dan doff serta motif kayu.',
        spek: [{ label: 'Lebar', nilai: '200 mm' }, { label: 'Tebal', nilai: '8 mm (putih polos juga 10 mm)' }, { label: 'Panjang', nilai: '3–6 m' }, { label: 'Barang saja', nilai: '±Rp150–170 ribu per m²' }],
      },
      {
        nama: 'Lebar 25 cm',
        foto: seriFoto('plafon-shunda-25'),
        ringkas: 'Panel lebih lebar sehingga sambungan di plafon lebih sedikit. Motif kayu, mozaik, keramik, dan batik.',
        spek: [{ label: 'Lebar', nilai: '250 mm' }, { label: 'Tebal', nilai: '8 mm (beberapa motif 9 mm)' }, { label: 'Panjang', nilai: '3–6 m' }],
      },
      {
        nama: 'Lebar 30 cm',
        foto: seriFoto('plafon-shunda-30'),
        ringkas: 'Satu motif paling lebar: Special Brazilian Walnut Wood.',
        spek: [{ label: 'Lebar', nilai: '300 mm' }, { label: 'Tebal', nilai: '9 mm' }, { label: 'Panjang', nilai: '3–6 m' }, { label: 'Barang saja', nilai: '±Rp225 ribu per m²' }],
      },
    ],
    warna: [
      { tekstur: 'plafon-shunda', judul: 'Putih polos', daftar: [{ nama: 'Pure White with Drain (Glossy)', kode: 'PL 08.001' }, { nama: 'Pure White with Drain', kode: 'PL 08.002' }, { nama: 'Pure White (Glossy)', kode: 'PL 08.003' }, { nama: 'Pure White (Doff)', kode: 'PL 08.004' }] },
      { tekstur: 'plafon-shunda', judul: 'Serat kayu', daftar: [{ nama: 'Brown Wood with Gold Drain', kode: 'PL 08.005' }, { nama: 'Cedar Wood', kode: 'PL 08.009' }, { nama: 'Modern White Woods', kode: 'PL 08.016' }, { nama: 'Brown Maple Wood Grain', kode: 'PL 08.019' }, { nama: 'Sienna Walnut Wood', kode: 'PL 08.029' }, { nama: 'Abstract Wood Pattern', kode: 'KK 20074' }, { nama: 'Acacia Wood', kode: 'KA 20069' }, { nama: 'Brown Mahogany', kode: 'MK 20053' }, { nama: 'White Woods', kode: 'PL 2514' }, { nama: 'Apple Tree Wood', kode: 'PL 2517' }, { nama: 'Maple Wood', kode: 'PL 2518' }, { nama: 'Natural Beech Wood', kode: 'PL 2519' }, { nama: 'Red Cedar Wood', kode: 'PL 2520' }, { nama: 'Modern Teak Wood', kode: 'PL 2522' }, { nama: 'Special Red Oak Wood', kode: 'PL 2566-1' }, { nama: 'Special Brown Oak Wood', kode: 'PL 2566-2' }, { nama: 'Adler Wood', kode: 'MK 25054' }, { nama: 'White Ash Wood', kode: 'MK 25077' }, { nama: 'Special Brazilian Walnut Wood', kode: 'PL 3077-1' }] },
      { tekstur: 'plafon-shunda', judul: 'Motif lain', catatan: 'Garis, mozaik, keramik, batik, dan motif hias.', daftar: [{ nama: 'Sky Blue with Silver Lines', kode: 'PL 08.006' }, { nama: 'Silver Wood Linears', kode: 'KK 20072' }, { nama: 'Silver and White', kode: 'PL 08.007' }, { nama: 'Fireflies in Forest', kode: 'KK 20083' }, { nama: 'Fireflies', kode: 'PL 2523' }, { nama: 'Fireworks', kode: 'PL 2509' }, { nama: 'Romantic Pink', kode: 'MK 20078' }, { nama: 'Sea Waves', kode: 'PL 2525' }, { nama: 'Glowing Starry Sky Mozaic', kode: 'PL 2506' }, { nama: 'Light Sky Blue with Silver Mozaic', kode: 'PL 2512' }, { nama: 'Silver Woven Pattern', kode: 'PL 2515' }, { nama: 'Labyrinth', kode: 'PL 2521' }, { nama: 'Brown Square Ceramic', kode: 'PL 2511' }, { nama: 'Ivory Four Spades Design', kode: 'PL 2513' }, { nama: 'Square Ceramic with Flowers Border', kode: 'PL 2528' }, { nama: 'Brown Batik with Double Silver Drain', kode: 'PL 2508' }, { nama: 'Silver Gold Flower', kode: 'PL 2516' }] },
    ],
    aksesori: [
      { nama: 'Lis plafon', isi: 'Lis PVC di pertemuan plafon dan dinding, dipotong 45° di sudut. Lis belum termasuk harga terpasang.' },
      { nama: 'Rangka hollow', isi: 'Rangka besi hollow tempat panel disekrup. Sudah termasuk harga terpasang.' },
    ],
    penerapan: [
      { gambar: shunda1, alt: 'Ilustrasi ruang keluarga dengan plafon PVC bermotif kayu jati', keterangan: 'Plafon motif kayu pada ruang keluarga' },
      { gambar: shunda2, alt: 'Ilustrasi teras rumah dengan plafon PVC putih glossy', keterangan: 'Plafon putih polos glossy pada teras' },
    ],
    // SEMENTARA: angka garansi material belum ada bukti tertulis pabrik (riset 18 Nov); dikoreksi Kamis 19 Nov.
    garansi: 'Pemasangan plafon oleh Atapura bergaransi 1 tahun. Garansi material mengikuti ketentuan pabrik; detailnya kami jelaskan saat penawaran.',
    terverifikasi: true,
    sumber: [
      { nama: 'Shunda, kategori produk Shunda Plafon (dicek 18 November 2026)', url: 'https://sd.co.id/eng/product-category/shunda-plafon/45' },
      { nama: 'Shunda, sejarah perusahaan', url: 'https://sd.co.id/eng/company-history' },
      { nama: 'Shunda, petunjuk pemasangan plafon', url: 'https://sd.co.id/eng/news-detail/shunda-plafon-installation/113' },
    ],
  },
  {
    slug: 'javafon',
    nama: 'Javafon',
    atribut: '75 motif · Ultra, Laminated, Glossy & Matte',
    lini: 'plafon',
    rentang: harga.plafon.merek.Javafon.terpasang,
    judul: 'Plafon PVC Javafon: seri Ultra, Laminated, Glossy & Matte',
    ringkas: 'Plafon PVC Javafon dalam tiga seri dengan 75 motif, lebar 20 cm dan panjang 3 sampai 6 m.',
    tentang: [
      'Javafon adalah merek plafon PVC dari grup Javaco yang beralamat di Cikande, Kabupaten Serang. Katalog resminya memuat tiga seri: Ultra, Laminated, serta Glossy & Matte.',
      'Kami pasang di atas rangka hollow, lengkap dengan jasa pasang. Panjang panel 3, 4, 5, atau 6 m dipilih sesuai ukuran ruangan supaya sambungan sesedikit mungkin.',
    ],
    fakta: [
      { label: 'Merek', nilai: 'Javafon (grup Javaco)' },
      { label: 'Bahan', nilai: 'PVC' },
      { label: 'Lebar panel', nilai: '20 cm (Ultra juga 12 cm)' },
      { label: 'Motif', nilai: '75 motif' },
      { label: 'Terpasang, Jabodetabek', nilai: `Rp${harga.plafon.merek.Javafon.terpasang[0] / 1000}–${harga.plafon.merek.Javafon.terpasang[1] / 1000} ribu per m²` },
      { label: 'Barang saja', nilai: rbPerM2(harga.plafon.merek.Javafon.barang) },
    ],
    seri: [
      {
        nama: 'Ultra',
        foto: seriFoto('plafon-javafon-ultra'),
        ringkas: 'Delapan motif serat kayu, tersedia lebar 20 cm dan versi Compact 12 cm.',
        spek: [{ label: 'Lebar', nilai: '20 cm dan 12 cm' }, { label: 'Tebal', nilai: '8 dan 9 mm' }, { label: 'Panjang', nilai: '3, 4, 5, 6 m' }, { label: 'Barang saja', nilai: '±Rp215 ribu per m²' }],
      },
      {
        nama: 'Laminated',
        foto: seriFoto('plafon-javafon-laminated'),
        ringkas: 'Dua belas motif, dari serat kayu gelap sampai putih.',
        spek: [{ label: 'Lebar', nilai: '20 cm' }, { label: 'Tebal', nilai: '8 mm' }, { label: 'Panjang', nilai: '3, 4, 5, 6 m' }, { label: 'Barang saja', nilai: '±Rp170 ribu per m²' }],
      },
      {
        nama: 'Glossy & Matte',
        foto: seriFoto('plafon-javafon-glossy-matte'),
        ringkas: 'Pilihan terbanyak: 55 motif polos, serat kayu, marmer, dan pola.',
        spek: [{ label: 'Lebar', nilai: '20 cm' }, { label: 'Tebal', nilai: '8 mm' }, { label: 'Panjang', nilai: '3, 4, 5, 6 m' }, { label: 'Barang saja', nilai: '±Rp165 ribu per m²' }],
      },
    ],
    warna: [
      { tekstur: 'plafon-javafon', judul: 'Ultra', daftar: [{ nama: 'Midnight Maple', kode: 'JVU 301' }, { nama: 'Cedar Charcoal', kode: 'JVU 302' }, { nama: 'Bourbon Basswood', kode: 'JVU 303' }, { nama: 'Tinted Truffle', kode: 'JVU 304' }, { nama: 'Rustic Rosewood', kode: 'JVU 305' }, { nama: 'Ashbrown Acacia', kode: 'JVU 306' }, { nama: 'Pitch Pine', kode: 'JVU 307' }, { nama: 'Onirique Oak', kode: 'JVU 308' }] },
      { tekstur: 'plafon-javafon', judul: 'Laminated', daftar: [{ nama: 'Rustic Chestnut', kode: 'JVL 208' }, { nama: 'Frosted Oak', kode: 'JVL 209' }, { nama: 'Golden Acacia', kode: 'JVL 210' }, { nama: 'Honey Cedar', kode: 'JVL 211' }, { nama: 'Deep Mahogany', kode: 'JVL 212' }, { nama: 'Smoked Ashwood', kode: 'JVL 223' }, { nama: 'Dark Walnut', kode: 'JVL 224' }, { nama: 'Vintage Cherry', kode: 'JVL 225' }, { nama: 'Choco Teak', kode: 'JVL 226' }, { nama: 'Black Ebony', kode: 'JVL 227' }, { nama: 'Flow White', kode: 'JVL 228' }, { nama: 'Snow White', kode: 'JVL 231' }] },
      { tekstur: 'plafon-javafon', judul: 'Glossy & Matte', daftar: [{ nama: 'Honey Beam', kode: 'JV 002 NAT' }, { nama: 'Sunwood Glow', kode: 'JV 004' }, { nama: 'Gloss Cedar', kode: 'JV 005 NAT' }, { nama: 'Silken Pine', kode: 'JV 006' }, { nama: 'Smoky Wood', kode: 'JV 007' }, { nama: 'Gilded Marble', kode: 'JV 008' }, { nama: 'Red Starlit', kode: 'JV 009' }, { nama: 'Icy Stripes', kode: 'JV 010' }, { nama: 'Dualite Gloss', kode: 'JV 011' }, { nama: 'White Starlit', kode: 'JV 012' }, { nama: 'Sleek Pattern', kode: 'JV 013' }, { nama: 'Verdant Trail', kode: 'JV 014' }, { nama: 'Cotton Streaks', kode: 'JV 015' }, { nama: 'Misty Alba', kode: 'JV 016 NAT' }, { nama: 'Milky Pearl', kode: 'JV 017 NAT' }, { nama: 'Snow White', kode: 'JV 018' }, { nama: 'Lush Oak', kode: 'JV 020 NAT' }, { nama: 'Classic Luxe', kode: 'JV 023' }, { nama: 'Ink Surge', kode: 'JV 028' }, { nama: 'Mono Checkered', kode: 'JV 029' }, { nama: 'Sugar Lines', kode: 'JV 030' }, { nama: 'Vanta Strings', kode: 'JV 031' }, { nama: 'Twilight Teak', kode: 'JV 032 NAT' }, { nama: 'Kitty Charm', kode: 'JV 033' }, { nama: 'Smoky Sheen', kode: 'JV 034 NAT' }, { nama: 'Mosaic Check', kode: 'JV 035' }, { nama: 'Pixel Grid', kode: 'JV 037' }, { nama: 'Butter Sash', kode: 'JV 039' }, { nama: 'Magma Stone', kode: 'JV 040' }, { nama: 'Sterling Stone', kode: 'JV 041' }, { nama: 'Maple Gleam', kode: 'JV 043 NAT' }, { nama: 'Burnt Grain', kode: 'JV 044' }, { nama: 'Pearly Stream', kode: 'JV 045' }, { nama: 'Moonlit Wisp', kode: 'JV 048' }, { nama: 'Silver Vein', kode: 'JV 051' }, { nama: 'Opal Timber', kode: 'JV 052' }, { nama: 'Green Stardust', kode: 'JV 053' }, { nama: 'Dusty Marble', kode: 'JV 054' }, { nama: 'Noir Glow', kode: 'JV 055' }, { nama: 'Chrome Braid', kode: 'JV 056' }, { nama: 'Winter Strokes', kode: 'JV 057' }, { nama: 'Shadow Bark', kode: 'JV 058 NAT' }, { nama: 'Golden Birch', kode: 'JV 058' }, { nama: 'Vintage Sangria', kode: 'JV 059' }, { nama: 'Glazed Strands', kode: 'JV 060' }, { nama: 'Blossom Breeze', kode: 'JV 100' }, { nama: 'Dreamy Cloud', kode: 'JV 102' }, { nama: 'Radiant Halo', kode: 'JV 104' }, { nama: 'Block Motion', kode: 'JV 105' }, { nama: 'Gilded Flow', kode: 'JV 134' }, { nama: 'Stream Wave', kode: 'JV 136' }, { nama: 'Red Heritage', kode: 'JV 153' }, { nama: 'Blue Heritage', kode: 'JV 154' }, { nama: 'Matra Weave', kode: 'JV 156 NAT' }, { nama: 'Toasted Umber', kode: 'JV 158 NAT' }] },
    ],
    aksesori: [
      { nama: 'Lis plafon', isi: 'Lis PVC panjang 4 m dalam beberapa bentuk dan warna yang serasi dengan seri plafonnya. Lis belum termasuk harga terpasang.' },
      { nama: 'Rangka hollow', isi: 'Rangka besi hollow tempat panel disekrup. Sudah termasuk harga terpasang.' },
    ],
    penerapan: [
      { gambar: javafon1, alt: 'Ilustrasi kafe di ruko dengan plafon PVC bermotif kayu gelap', keterangan: 'Plafon motif kayu gelap pada kafe di ruko' },
      { gambar: javafon2, alt: 'Ilustrasi dapur dan ruang makan dengan plafon PVC bermotif kayu oak terang', keterangan: 'Plafon motif kayu terang pada dapur' },
    ],
    // SEMENTARA: angka garansi material belum ada bukti tertulis pabrik (riset 18 Nov); dikoreksi Kamis 19 Nov.
    garansi: 'Pemasangan plafon oleh Atapura bergaransi 1 tahun. Garansi material mengikuti ketentuan pabrik; detailnya kami jelaskan saat penawaran.',
    terverifikasi: true,
    sumber: [
      { nama: 'Javafon, situs resmi dan halaman produk plafon (dicek 18 November 2026)', url: 'https://javafonupvc.com/' },
      { nama: 'Javafon, e-katalog April 2026', url: 'https://drive.google.com/file/d/1y1n6VTdIs9oHMypgp7taqN9q6cK4LoLx/view' },
    ],
  },
  {
    slug: 'rangka-baja-ringan',
    nama: 'Rangka baja ringan',
    lini: 'rangka',
    rentang: rentangRangka,
    judul: 'Jasa pasang rangka atap baja ringan per m²: Taso, Hi-Steel, K-Steel',
    ringkas: 'Rangka atap baja ringan terpasang untuk rumah baru atau pengganti rangka lama, harga per m² sudah termasuk aksesori dan jasa pasang. Ada juga jasa pasang saja.',
    tentang: [
      'Rangka baja ringan dipakai untuk rumah baru, atau saat rangka kayu lama sudah lapuk, dimakan rayap, atau melendut. Di atasnya kami pasang papan alas lalu atap bitumen.',
      'Harga per m² sudah termasuk material, aksesori (screw dan dynabolt), dan jasa pasang. Kalau materialnya sudah Anda sediakan, jasa pasang rangka saja Rp55 ribu per m².',
    ],
    fakta: [
      { label: 'Pilihan merek', nilai: 'K-Steel, Hi-Steel, Taso' },
      { label: 'Kanal C', nilai: '0,75 mm' },
      { label: 'Terpasang', nilai: `Rp${rentangRangka[0] / 1000}–${rentangRangka[1] / 1000} ribu per m²` },
      { label: 'Jasa pasang saja', nilai: `Rp${harga.rangka.jasaSaja / 1000} ribu per m²` },
      // SEMENTARA (riset 18 Nov, docs/riset/jawaban-yusuf-rangka.md; dikoreksi Bang Yusuf Kamis 19 Nov).
      { label: 'Lama pasang', nilai: '±20–30 m² per hari' },
    ],
    seri: (['K-Steel', 'Hi-Steel', 'Taso'] as const).map((m) => {
      const r = harga.rangka.merek[m];
      const [kanal, reng] = r.spek.split(', ');
      const ringkas = {
        'K-Steel': 'Pilihan dengan harga terpasang paling rendah dari tiga merek yang kami pasang.',
        'Hi-Steel': 'Baja G550 berlapis Zincalume AZ70, menurut pemilik merek.',
        Taso: 'Buatan PT Tatalogam Lestari. Baja G550, profil sesuai SNI 8399:2017, reng lebih tebal dari dua merek lainnya, dan bergaransi tahan karat 10 tahun dari pabrik.',
      }[m];
      return {
        nama: m,
        ringkas,
        spek: [
          { label: 'Kanal C', nilai: kanal.replace('C-Truss ', '') },
          { label: 'Reng', nilai: reng.replace('reng ', '') },
          { label: 'Terpasang', nilai: `Rp${r.harga / 1000} ribu per m²` },
        ],
      };
    }),
    warna: [],
    aksesori: [
      { nama: 'Screw', isi: 'Sekrup baja untuk menyambung kanal C dan reng.' },
      { nama: 'Dynabolt', isi: 'Baut angkur untuk mengikat rangka ke balok beton.' },
    ],
    penerapan: [
      { gambar: rangka2, alt: 'Ilustrasi rumah baru satu lantai dengan rangka atap baja ringan terpasang sebelum ditutup atap', keterangan: 'Rangka baja ringan terpasang di atas balok beton rumah baru' },
      { gambar: rangka1, alt: 'Ilustrasi papan multiplek disekrup ke rangka atap baja ringan', keterangan: 'Papan alas atap bitumen di atas rangka baja ringan' },
    ],
    // SEMENTARA (riset 18 Nov; dikoreksi Bang Yusuf Kamis 19 Nov): garansi pasang 5 th disamakan dengan atap.
    garansi: 'Pemasangan rangka oleh Atapura bergaransi 5 tahun untuk rangka yang melendut atau bergeser akibat kesalahan pemasangan. Taso bergaransi tahan karat 10 tahun dari Tatalogam, berlaku sesuai syarat pabrik (screw dan aksesori Taso, kanal dan reng sama-sama Taso, bukan lokasi tepi pantai atau kawasan industri). Hi-Steel dan K-Steel tidak menyertakan garansi pabrik tertulis.',
    terverifikasi: true, // spesifikasi per merek dari vendor (DECISIONS 044); garansi pabrik dijelaskan di halaman (079)
    sumber: [
      { nama: 'Tatalogam, halaman produk Taso (dicek 18 November 2026)', url: 'https://tatalogam.com/portfolio/taso/' },
      { nama: 'Tatalogam, garansi tahan karat Taso (artikel resmi, Maret 2025)', url: 'https://tatalogam.com/inovasi-material-bangunan-11-alasan-kenapa-harus-memilih-taso-kaso-metal/' },
      { nama: 'Hi-Steel, halaman kanal C dan reng baja ringan (dicek 18 November 2026)', url: 'https://histeel.co.id/baja-ringan/jual-kanal-c-baja-ringan/' },
    ],
  },
];

/** Produk yang tampil di situs; lini plafon disembunyikan selama TAMPIL_PLAFON false (datanya tetap di atas). */
export const produk = semuaProduk.filter((p) => TAMPIL_PLAFON || p.lini !== 'plafon');

/** Nama lengkap untuk kartu & judul: "Atap bitumen CTI", "Plafon Shunda"; rangka cukup namanya. */
/**
 * Grup warna milik satu seri. Judul grup tidak selalu persis nama seri ("CT3 · warna solid", "CT5 dan CT6",
 * "Top Shingles Rectangular", "Eco Roof (…)"), jadi dicocokkan sebagai kata di awal/di dalam judul. Produk tanpa seri
 * atau satu seri: semua grup. Dipakai kit listing & aset marketplace.
 */
export const warnaSeri = (p: Produk, namaSeri: string | null) => {
  if (!namaSeri || p.seri.length <= 1) return p.warna;
  const kata = new RegExp(`(^|\\s)${namaSeri.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\s|$|[·,(])`);
  return p.warna.filter((g) => g.judul === namaSeri || kata.test(g.judul));
};

export const namaLengkap = (p: Produk) => (p.lini === 'rangka' ? p.nama : `${LINI[p.lini].nama} ${p.nama}`);

/** Rentang harga terpasang per m², atau null bila belum ada (tampil "tanya admin"). */
export const rentangProduk = (p: Produk) => (p.harga ? harga.merek[p.harga].terpasang : (p.rentang ?? null));
/** Lini atap, termurah dulu, dengan harga terpasang per m² (dipakai /tentang dan kotak layanan halaman area). */
export const merekTermurah = produk
  .filter((p) => p.lini === 'atap')
  .map((p) => ({ p, r: rentangProduk(p) }))
  .sort((x, y) => (x.r?.[0] ?? Infinity) - (y.r?.[0] ?? Infinity));

/** Foto sampul kartu katalog: ilustrasi penerapan → foto seri → contoh warna pertama. */
export function sampulProduk(p: Produk): { src: ImageMetadata; alt: string } | undefined {
  if (p.penerapan[0]) return { src: p.penerapan[0].gambar, alt: p.penerapan[0].alt };
  const seri = p.seri.find((s) => s.foto);
  if (seri?.foto) return { src: seri.foto, alt: `Close-up ${namaLengkap(p).toLowerCase()} ${seri.nama} terpasang` };
  const g = p.warna[0];
  const w = g?.daftar.map((x) => ({ x, f: fotoWarna(g.tekstur, x.nama) })).find((y) => y.f);
  if (w?.f) return { src: w.f, alt: `Contoh tekstur ${namaLengkap(p).toLowerCase()} warna ${w.x.nama}` };
}

/** Layanan di /produk dan kartu beranda. Wajib sinkron dengan Ops (Rama, 23 Nov 2026): pekerjaan = PEKERJAAN di Ops
 *  src/lib/crm/lead.ts (pasang baru, ganti atap lama, rangka baja ringan, pasang plafon), cara beli = JENIS di Ops
 *  src/lib/hitung/penawaran.ts (material + pasang, material saja, jasa pasang saja). Perbaikan bocor tidak ada (Ops, 19 Nov). */
const semuaLayanan = [
  { nama: 'Pasang atap baru', ikon: 'atap-baru', isi: 'Untuk rumah yang sedang dibangun, di atas rangka baja ringan maupun kayu.', href: '/panduan/lima-lapis-pemasangan-atap-bitumen' },
  { nama: 'Ganti atap lama', ikon: 'ganti-atap', isi: 'Genteng beton, keramik, atau asbes diganti genteng aspal yang jauh lebih ringan.', href: '/panduan/ganti-atap-rumah-izin-lama-tanpa-pindah' },
  { nama: 'Rangka baja ringan', ikon: 'rangka', isi: 'Taso, Hi-Steel, atau K-Steel, sudah dengan jasa pasang.', href: '/produk/rangka-baja-ringan' },
  { nama: 'Pasang plafon', ikon: 'plafon', isi: 'Plafon PVC Shunda atau Javafon, sudah dengan pasang.', href: '/produk#judul-plafon' },
  { nama: 'Beli material saja', ikon: 'material', isi: 'Genteng aspal, alas, underlayment, dan aksesoris lengkap untuk dipasang tukang Anda.', href: '/produk#judul-atap' },
  { nama: 'Jasa pasang saja', ikon: 'jasa', isi: 'Material sudah Anda siapkan, tim kami yang memasang.', href: waLink('Halo Atapura, material atap saya sudah ada. Saya mau tanya jasa pasang saja.') },
] as const;
export const layanan = semuaLayanan.filter((l) => TAMPIL_PLAFON || l.ikon !== 'plafon');
