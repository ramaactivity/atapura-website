// Data halaman Produk & Layanan (/produk dan /produk/[slug]).
// Aturan isi (DECISIONS 038–039): fakta dari dokumen resmi pabrik bila ada; data dari katalog pihak ketiga hanya
// dipakai setelah dicocokkan dan tidak pernah disebut sebagai sumber publik. Tanpa klaim TKDN/produk lokal.
// Harga hanya dari harga.ts (Bang Yusuf); merek tanpa harga tampil "Tanya admin".
import type { ImageMetadata } from 'astro';
import { harga, type Merek } from './harga';
import cti1 from '../../assets/gambar/magnific/penerapan-cti-ct3-gazebo-3x2.jpg';
import maxxi1 from '../../assets/gambar/magnific/penerapan-maxxi-promaxxi-rumah-3x2.jpg';
import tegola1 from '../../assets/gambar/magnific/penerapan-tegola-traditional-villa-3x2.jpg';
import tegola2 from '../../assets/gambar/magnific/penerapan-tegola-master-lereng-3x2.jpg';

/** Bentuk potongan lembar, untuk gambar SVG di halaman seri. */
export type Bentuk = 'tab3' | 'zigzag' | 'heksagonal' | 'laminasi' | 'persegi' | 'sisik' | 'mosaik';

export interface Seri {
  nama: string;
  bentuk: Bentuk;
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
  warna: { judul: string; catatan?: string; daftar: Warna[] }[];
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
        bentuk: 'tab3',
        ringkas: 'Model 3-tab, tiga lidah rata. Tampilan paling rapi dan paling umum dipakai di rumah tinggal.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 333 mm' },
          { label: 'Isi per bundel', nilai: '21 lembar' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
      {
        nama: 'CT5',
        bentuk: 'zigzag',
        ringkas: 'Potongan tidak beraturan yang membuat atap tampak berlapis dan bertekstur setelah terpasang.',
        spek: [{ label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' }],
      },
      {
        nama: 'CT6',
        bentuk: 'heksagonal',
        ringkas: 'Potongan segi enam untuk atap yang ingin tampil beda, sering dipilih untuk bangunan berarsitektur khusus.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 317,5 mm' },
          { label: 'Isi per bundel', nilai: '22 lembar' },
          { label: 'Bahan', nilai: 'Aspal modifikasi SBS, serat kaca' },
        ],
      },
    ],
    warna: [],
    aksesori: [
      { nama: 'UnderMaster', isi: 'Lapisan bawah (underlayer) gulungan 1 × 10 m yang dipasang di atas papan alas, sebelum genteng.' },
      { nama: 'BaseMaster', isi: 'Membran bitumen yang dipasang dengan cara dibakar (torching) untuk dak atau atap di bawah 15°.' },
    ],
    penerapan: [{ gambar: cti1, alt: 'Ilustrasi gazebo resort tepi kolam beratap limas genteng aspal 3-tab abu tua', keterangan: 'Seri 3-tab, warna abu tua, pada gazebo resort' }],
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
        bentuk: 'tab3',
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
        bentuk: 'laminasi',
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
    warna: [],
    aksesori: [],
    penerapan: [{ gambar: maxxi1, alt: 'Ilustrasi rumah dua lantai beratap limas genteng aspal laminasi coklat tua', keterangan: 'Genteng laminasi coklat tua pada rumah dua lantai' }],
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
        bentuk: 'persegi',
        ringkas: 'Satu lapis dengan potongan persegi, tampilan rapi mirip 3-tab.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm' },
          { label: 'Berat', nilai: '±10,7 kg/m²' },
          { label: 'Isi per bundel', nilai: '21 lembar' },
        ],
      },
      {
        nama: 'Premium Traditional',
        bentuk: 'sisik',
        ringkas: 'Satu lapis dengan potongan membulat seperti sisik, untuk rumah bergaya klasik.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 340 mm' },
          { label: 'Berat', nilai: '±10,7 kg/m²' },
        ],
      },
      {
        nama: 'Premium Mosaik',
        bentuk: 'mosaik',
        ringkas: 'Satu lapis dengan potongan mosaik yang memberi pola acak di bidang atap.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '1.000 × 337 mm' },
          { label: 'Berat', nilai: '±9,0 kg/m²' },
        ],
      },
      {
        nama: 'Master',
        bentuk: 'laminasi',
        ringkas: 'Dua lapis, lebih berat dan bertekstur dalam. Pemasangan dengan paku biasa mulai kemiringan 19°.',
        spek: [
          { label: 'Ukuran per lembar', nilai: '998 × 337 mm' },
          { label: 'Berat', nilai: '±12,3 kg/m²' },
          { label: 'Paku per lembar', nilai: '4 (6 untuk kemiringan 60–85°)' },
        ],
      },
    ],
    warna: [],
    aksesori: [
      { nama: 'Startbar', isi: 'Membran lapisan bawah yang diwajibkan pabrik untuk pemasangan dengan paku pada kemiringan 14° ke atas.' },
    ],
    penerapan: [
      { gambar: tegola1, alt: 'Ilustrasi villa klasik beratap limas genteng aspal potongan sisik merah antik', keterangan: 'Potongan sisik, merah antik, pada villa bertaman' },
      { gambar: tegola2, alt: 'Ilustrasi villa di lereng berkabut beratap genteng aspal dua lapis abu batu', keterangan: 'Genteng dua lapis abu batu pada villa dataran tinggi' },
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
    ringkas: 'Genteng aspal Javabitumen di kelas ekonomis. Spesifikasi lengkap menunggu dokumen resmi dari produsen.',
    tentang: [
      'Javabitumen kami pasang di kelas harga ekonomis. Situs resmi produsennya belum bisa diakses saat kami cek, jadi spesifikasi teknis, daftar warna, dan syarat garansinya belum kami tulis di sini.',
      'Saat survey, kami membawa sampel fisik dan dokumen dari pemasok supaya Anda bisa menilai langsung.',
    ],
    fakta: [
      { label: 'Kelas harga', nilai: 'Ekonomis' },
      { label: 'Terpasang, Jabodetabek', nilai: hargaTerpasang('Javabitumen') },
      { label: 'Spesifikasi & garansi', nilai: 'Menunggu dokumen resmi' },
    ],
    seri: [],
    warna: [],
    aksesori: [],
    penerapan: [],
    garansi: 'Syarat garansi pabrik menunggu dokumen resmi. Pemasangan Atapura dilindungi garansi pemasangan tertulis 5 tahun.',
    terverifikasi: false,
    sumber: [],
  },
  {
    slug: 'victory',
    nama: 'Victory',
    judul: 'Atap bitumen Victory',
    ringkas: 'Genteng aspal Victory. Spesifikasi, warna, dan garansi menunggu dokumen resmi dari pemasok.',
    tentang: [
      'Victory baru masuk daftar merek yang kami pasang. Kami belum menemukan dokumen resmi pabrikannya, jadi spesifikasi, daftar warna, dan garansinya belum kami tulis di sini.',
      'Harga dan sampel fisik bisa Anda tanyakan langsung lewat WhatsApp.',
    ],
    fakta: [
      { label: 'Terpasang, Jabodetabek', nilai: 'Tanya admin' },
      { label: 'Spesifikasi & garansi', nilai: 'Menunggu dokumen resmi' },
    ],
    seri: [],
    warna: [],
    aksesori: [],
    penerapan: [],
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
