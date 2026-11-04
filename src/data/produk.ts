// Data halaman Produk & Layanan (/produk dan /produk/[slug]).
// Aturan isi (DECISIONS 038–039): fakta dari dokumen resmi pabrik bila ada; data dari katalog pihak ketiga hanya
// dipakai setelah dicocokkan dan tidak pernah disebut sebagai sumber publik. Tanpa klaim TKDN/produk lokal.
// Harga hanya dari harga.ts (Bang Yusuf); merek tanpa harga tampil "Tanya admin".
import type { ImageMetadata } from 'astro';
import { harga, type Merek } from './harga';
import cti1 from '../../assets/gambar/magnific/penerapan-cti-ct3-gazebo-3x2.jpg';
import maxxi1 from '../../assets/gambar/magnific/penerapan-maxxi-promaxxi-rumah-3x2.jpg';
import cti2 from '../../assets/gambar/magnific/penerapan-cti-ct3-kafe-3x2.jpg';
import maxxi2 from '../../assets/gambar/magnific/penerapan-maxxi-maxxiroof-rumah-3x2.jpg';
import tegola1 from '../../assets/gambar/magnific/penerapan-tegola-rectangular-villa-3x2.jpg';
import tegola2 from '../../assets/gambar/magnific/penerapan-tegola-rectangular-lereng-3x2.jpg';
import victory1 from '../../assets/gambar/magnific/penerapan-victory-standar-rumah-3x2.jpg';
import victory2 from '../../assets/gambar/magnific/penerapan-victory-two-tone-guesthouse-3x2.jpg';

// Foto close-up tiap seri (Magnific, bentuk potongan dicocokkan ke katalog resmi). Nama file = kunci `foto`.
const fotoSeri = import.meta.glob<ImageMetadata>('../../assets/gambar/seri/*.jpg', { eager: true, import: 'default' });
const seriFoto = (kunci: string) => fotoSeri[`../../assets/gambar/seri/${kunci}.jpg`];

export interface Seri {
  nama: string;
  /** Foto close-up genteng terpasang (ilustrasi Magnific). */
  foto: ImageMetadata;
  ringkas: string;
  spek: { label: string; nilai: string }[];
}

export interface Warna {
  nama: string;
  /** Kode warna pabrik bila ada, mis. "BK". */
  kode?: string;
  /** Perkiraan warna di layar (bukan warna resmi). */
  hex: string;
  grup?: string;
}

export interface Produk {
  slug: string;
  nama: string;
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

const hargaTerpasang = (m: Merek) => {
  const [a, b] = harga.merek[m].terpasang;
  return `Rp${a / 1000}–${b / 1000} ribu per m²`;
};

export const produk: Produk[] = [
  {
    slug: 'cti',
    nama: 'CTI',
    harga: 'CTI',
    judul: 'Atap bitumen CTI: CT3, CT5, dan CT6',
    ringkas: 'Genteng aspal CTI dalam tiga bentuk potongan: 3-tab, potongan tidak beraturan, dan segi enam. Garansi produk 30 tahun dari pabrik.',
    tentang: [
      'CTI adalah merek genteng aspal yang diproduksi PT Bitutek. Lembarannya memakai aspal yang dimodifikasi SBS, tulangan serat kaca, permukaan butiran batu berwarna, dan perekat yang dilindungi plastik film.',
      'Pilihan bentuknya paling beragam di antara merek yang kami pasang: CT3 untuk tampilan rapi yang paling umum, CT5 dengan potongan tidak beraturan, dan CT6 berbentuk segi enam.',
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
          { label: 'Isi per bundel', nilai: '21 lembar' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
      {
        nama: 'CT5',
        foto: seriFoto('cti-ct5'),
        ringkas: 'Potongan tidak beraturan yang membuat atap tampak berlapis dan bertekstur setelah terpasang.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 317,5 mm' },
          { label: 'Isi per bundel', nilai: '22 lembar' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
      {
        nama: 'CT6',
        foto: seriFoto('cti-ct6'),
        ringkas: 'Potongan segi enam untuk atap yang ingin tampil beda, sering dipilih untuk bangunan berarsitektur khusus.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 317,5 mm' },
          { label: 'Isi per bundel', nilai: '22 lembar' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
    ],
    warna: [
      { tekstur: 'cti-ct3', judul: 'CT3 · warna solid', daftar: [{ nama: 'Black', kode: 'BK', hex: '#1E1F21' }, { nama: 'Dark Grey', kode: 'DG', hex: '#6B6D70' }, { nama: 'Dark Brown', kode: 'DB', hex: '#2E2A2B' }, { nama: 'Red', kode: 'RD', hex: '#9B2F2E' }, { nama: 'Green', kode: 'GN', hex: '#2F5A3C' }, { nama: 'Gold', kode: 'GD', hex: '#9C7347' }] },
      { tekstur: 'cti-ct3', judul: 'CT3 · warna gradasi', daftar: [{ nama: 'Midnight Black', kode: 'MIB', hex: '#2A2B2D' }, { nama: 'Charcoal Grey', kode: 'CHG', hex: '#45474A' }, { nama: 'Coffee Brown', kode: 'COB', hex: '#5A5552' }, { nama: 'Sunset Red', kode: 'SUR', hex: '#8E3A3E' }, { nama: 'Forest Green', kode: 'FOG', hex: '#2F4A33' }, { nama: 'Tuscany Gold', kode: 'TUG', hex: '#6E5A45' }] },
      { tekstur: 'cti-ct6', judul: 'CT5 dan CT6', catatan: 'Warna khusus (custom) bisa dipesan; tanyakan ketersediaannya lewat WhatsApp.', daftar: [{ nama: 'Black', kode: 'BK', hex: '#1E1F21' }, { nama: 'Dark Grey', kode: 'DG', hex: '#6B6D70' }, { nama: 'Dark Brown', kode: 'DB', hex: '#2E2A2B' }, { nama: 'Red', kode: 'RD', hex: '#9B2F2E' }, { nama: 'Green', kode: 'GN', hex: '#2F5A3C' }, { nama: 'Gold', kode: 'GD', hex: '#9C7347' }] },
    ],
    aksesori: [
      { nama: 'UnderMaster', isi: 'Lapisan bawah (underlayer) gulungan 1 × 10 m yang dipasang di atas papan alas, sebelum genteng.' },
      { nama: 'BaseMaster', isi: 'Membran bitumen yang dipasang dengan cara dibakar (torching) untuk dak atau atap di bawah 15°.' },
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
    nama: 'Tegola',
    judul: 'Atap bitumen Tegola: Premium dan Master',
    ringkas: 'Genteng aspal buatan Tegola Canadese, Italia. Seri satu lapis Premium dengan beberapa bentuk potongan, dan seri dua lapis Master.',
    tentang: [
      'Tegola diproduksi Tegola Canadese di Vittorio Veneto, Italia. Lembarannya memakai aspal oksidasi, tulangan serat kaca, dan butiran basal berlapis keramik.',
      'Seri Premium tersedia dalam beberapa bentuk potongan, dari persegi sampai sisik dan mosaik. Seri Master adalah genteng dua lapis yang lebih berat dan bertekstur.',
    ],
    fakta: [
      { label: 'Pabrikan', nilai: 'Tegola Canadese, Italia' },
      { label: 'Jenis', nilai: 'Satu lapis dan dua lapis' },
      { label: 'Garansi', nilai: 'Terbatas, terdaftar, hingga 40 tahun bertahap' },
      { label: 'Kemiringan paku biasa', nilai: 'Mulai 14° (Master 19°)' },
      { label: 'Terpasang, Jabodetabek', nilai: 'Tanya admin' },
    ],
    seri: [
      {
        nama: 'Premium Rectangular',
        foto: seriFoto('tegola-premium-rectangular'),
        ringkas: 'Satu lapis dengan potongan persegi, tampilan rapi mirip 3-tab.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm' },
          { label: 'Berat', nilai: '±10,7 kg/m²' },
          { label: 'Isi per bundel', nilai: '21 lembar' },
        ],
      },
      {
        nama: 'Premium Traditional',
        foto: seriFoto('tegola-premium-traditional'),
        ringkas: 'Satu lapis dengan potongan membulat seperti sisik, untuk rumah bergaya klasik.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm' },
          { label: 'Berat', nilai: '±10,7 kg/m²' },
        ],
      },
      {
        nama: 'Premium Mosaik',
        foto: seriFoto('tegola-premium-mosaik'),
        ringkas: 'Satu lapis dengan potongan mosaik yang memberi pola acak di bidang atap.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 337 mm' },
          { label: 'Berat', nilai: '±9,0 kg/m²' },
        ],
      },
      {
        nama: 'Master',
        foto: seriFoto('tegola-master'),
        ringkas: 'Dua lapis, lebih berat dan bertekstur dalam. Pemasangan dengan paku biasa mulai kemiringan 19°.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '998 × 337 mm' },
          { label: 'Berat', nilai: '±12,3 kg/m²' },
          { label: 'Paku per lembar', nilai: '4 (6 untuk kemiringan 60–85°)' },
        ],
      },
    ],
    warna: [
      { tekstur: 'tegola-premium-rectangular', judul: 'Premium Rectangular', catatan: 'Warna seri Tegola lain (Traditional, Mosaik, Master) bisa ditanyakan lewat WhatsApp.', daftar: [{ nama: 'Black', kode: '060', hex: '#2B2C2E' }, { nama: 'Slate Grey', kode: '061', hex: '#6A6E73' }, { nama: 'Light Grey', kode: '053', hex: '#A3A5A6' }, { nama: 'Dark Grey', kode: '550', hex: '#8A8A8C' }, { nama: 'Tone Green', kode: '070', hex: '#5A7A55' }, { nama: 'Coppery Red', kode: '503', hex: '#8E3B33' }, { nama: 'Tone Red', kode: '002', hex: '#8A3E35' }, { nama: 'Autumn Red', kode: '506', hex: '#8E5040' }, { nama: 'Dark Brown', kode: '521', hex: '#4A3530' }, { nama: 'Wood', kode: '547', hex: '#5A3E36' }] },
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
    penerapan: [],
    garansi: 'Syarat garansi pabrik menunggu dokumen resmi. Pemasangan Atapura dilindungi garansi pemasangan tertulis 5 tahun.',
    terverifikasi: false,
    sumber: [{ nama: 'Javabitumen, halaman produk di situs distributor (warna), dicek 4 November 2026', url: 'https://javabitumen.co.id/' }],
  },
  {
    slug: 'victory',
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
          { label: 'Genteng saja', nilai: 'Rp220 ribu per m²' },
        ],
      },
      {
        nama: 'Two Tone',
        foto: seriFoto('victory-two-tone'),
        ringkas: 'Model 3-tab dengan perpaduan dua nada warna di tiap lidah, sehingga atap tampak lebih berdimensi.',
        spek: [
          { label: 'Isi per bundel', nilai: '21 lembar (3 m²)' },
          { label: 'Genteng saja', nilai: 'Rp260 ribu per m²' },
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
];

/** Layanan yang ditampilkan di /produk (isi singkat, tanpa janji prosedural baru). */
export const layanan = [
  { nama: 'Pasang atap baru', isi: 'Untuk rumah baru atau rangka baru: alas, lapis kedap, flashing, genteng, dan nok dipasang berurutan.', href: '/panduan/lima-lapis-pemasangan-atap-bitumen' },
  { nama: 'Ganti atap lama', isi: 'Mengganti genteng berat atau asbes dengan genteng aspal, dikerjakan per bagian supaya rumah tetap bisa ditinggali.', href: '/panduan/ganti-atap-rumah-izin-lama-tanpa-pindah' },
  { nama: 'Perbaikan atap bocor', isi: 'Kirim foto atau video lewat WhatsApp; bila ada kebocoran atau kerusakan, tim datang memeriksa.', href: '/panduan/atap-bocor-penyebab-dan-cara-mengatasi' },
  { nama: 'Villa, kafe, dan proyek', isi: 'Atap untuk tempat usaha dan proyek, dengan jadwal kerja per bagian.', href: '/panduan/atap-ruko-kafe-kos' },
];
