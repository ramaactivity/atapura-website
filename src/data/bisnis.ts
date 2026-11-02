// Satu sumber kebenaran untuk identitas bisnis. Halaman, JSON-LD, llms.txt, dan pesan WhatsApp membaca dari sini.
// Nilai `null` = belum ada data asli dari Rama; komponen wajib menyembunyikan bagian itu, bukan mengarang.

export const bisnis = {
  // KONSEP: situs ini konsep untuk diajukan ke partner (2 Nov 2026). Termin, garansi, dan harga mengikuti
  // praktik vendor terpercaya, belum keputusan final. Selama true: noindex + robots Disallow, supaya
  // Google/AI tidak mengutip angka konsep sebagai janji Atapura. Ubah ke false saat partner setuju.
  konsep: true,
  nama: 'Atapura',
  namaLegal: 'PT Atapura Karya Lestari',
  statusLegal: 'dalam proses pendirian',
  tagline: 'Atap yang masuk AKAL.',
  deskripsi:
    'Aplikator dan supplier atap bitumen (genteng aspal) Maxxi, CTI, dan Javabitumen untuk rumah, villa, kafe, dan proyek. Berbasis di Jabodetabek, melayani proyek di luar Jabodetabek.',
  // Format internasional tanpa "+" untuk wa.me. null = belum ada; tombol WA tetap tampil tapi diarahkan ke halaman kontak WA umum.
  whatsapp: '6289611394867' as string | null, // sementara, dari Rama 2 Nov 2026
  telepon: null as string | null,
  email: 'atapurakaryalestari@gmail.com',
  jamKerja: null as string | null,
  nib: null as string | null,
  npwp: null as string | null,
  garansiPemasanganTahun: 5 as number | null, // Bang Yusuf 2 Nov 2026: garansi kebocoran & kesalahan pasang
  garansi: {
    cakupan: [
      'Kebocoran akibat pemasangan: sambungan, flashing, paku, dan nok',
      'Kesalahan pasang yang tidak sesuai panduan pabrik',
      'Genteng terlepas atau bergeser bukan karena bencana',
      'Perbaikan termasuk material dan jasa, tanpa biaya',
    ],
    pengecualian: [
      'Bencana alam: angin di atas batas pabrik, gempa, banjir, kebakaran',
      'Perubahan atau perbaikan atap oleh pihak lain',
      'Kerusakan rangka atau dinding yang bukan pekerjaan kami',
      'Talang tersumbat yang tidak dibersihkan',
    ],
    klaim: [
      { nama: 'Kirim foto atau video', isi: 'Lewat WhatsApp, sertakan nomor kontrak atau nama pemilik.' },
      { nama: 'Pengecekan', isi: 'Tim datang memeriksa paling lambat 3 hari kerja.' },
      { nama: 'Perbaikan', isi: 'Bila tercakup garansi, diperbaiki tanpa biaya dan dijadwalkan tertulis.' },
      { nama: 'Laporan', isi: 'Foto sebelum dan sesudah dikirim, dicatat di Rapor Proyek.' },
    ],
  },
  // Revisi Bang Yusuf (2 Nov 2026): material cash before delivery; jasa pasang termin 40/30/30.
  // Momen tiap termin jasa = KONSEP (pola kontraktor umum), menunggu konfirmasi.
  pembayaran: {
    material: 'Lunas sebelum material dikirim ke lokasi (cash before delivery)',
    jasa: [
      { tahap: 'Termin 1', saat: 'Saat tim mulai bekerja di lokasi', persen: 40 },
      { tahap: 'Termin 2', saat: 'Saat genteng mulai terpasang (progres ±50%)', persen: 30 },
      { tahap: 'Pelunasan', saat: 'Setelah serah terima dan berita acara', persen: 30 },
    ],
  },
  // Revisi Bang Yusuf: survey gratis di Jabodetabek; di luar itu ada biaya survey (besaran menunggu ketetapan).
  survey: {
    jabodetabek: 'Gratis',
    luar: 'Harga dihitung bersama admin: ada akomodasi tukang dan pengiriman material sesuai lokasi',
    // Pengalaman tim pemasang (Bang Yusuf), bukan portofolio Atapura sebagai perusahaan baru.
    pengalamanLuar: ['Bandung', 'Sumatra', 'Kalimantan', 'Sulawesi', 'Papua'],
  },
  // Kata kunci kota untuk mengenali lokasi di dalam Jabodetabek (kolom Kota di Hitung AKAL).
  kataJabodetabek: ['jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'tangsel', 'cibubur', 'bintaro', 'serpong', 'cikarang', 'cibinong', 'ciputat', 'pamulang', 'cileungsi', 'jaksel', 'jaktim', 'jakbar', 'jakut', 'jakpus', 'bsd'],
  sosmed: [] as string[], // URL profil resmi untuk JSON-LD sameAs — isi saat akun sudah dibuat
  // Ikon sosial di footer. url null = akun belum ada: ikon tampil redup tanpa tautan ("segera").
  sosial: [
    { id: 'instagram', nama: 'Instagram', url: null },
    { id: 'tiktok', nama: 'TikTok', url: null },
    { id: 'threads', nama: 'Threads', url: null },
    { id: 'x', nama: 'X (Twitter)', url: null },
    { id: 'shopee', nama: 'Shopee', url: null },
    { id: 'tokopedia', nama: 'Tokopedia', url: null },
  ] as { id: string; nama: string; url: string | null }[],
  area: [
    'Jakarta Selatan',
    'Jakarta Timur',
    'Jakarta Barat',
    'Jakarta Utara',
    'Jakarta Pusat',
    'Kota Bogor',
    'Kabupaten Bogor',
    'Depok',
    'Kota Tangerang',
    'Kabupaten Tangerang',
    'Tangerang Selatan',
    'Kota Bekasi',
    'Kabupaten Bekasi',
  ],
  merek: ['Maxxi', 'CTI', 'Javabitumen'],
  // Izin tampil publik dari Rama, 2 Nov 2026.
  pendiri: ['Ramadan Saputra', 'Yusuf Nasution'],
} as const;

export function waLink(pesan: string): string {
  const teks = encodeURIComponent(pesan);
  return bisnis.whatsapp ? `https://wa.me/${bisnis.whatsapp}?text=${teks}` : `https://wa.me/?text=${teks}`;
}

/** true kalau teks kota mengandung nama wilayah Jabodetabek; kosong = belum diketahui (null). */
export function dalamJabodetabek(kota: string): boolean | null {
  const k = kota.trim().toLowerCase();
  if (!k) return null;
  return bisnis.kataJabodetabek.some((w) => k.includes(w));
}
