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
    'Aplikator dan supplier atap bitumen (genteng aspal) Maxxi, CTI, dan Javabitumen untuk rumah, villa, kafe, dan proyek di Jabodetabek.',
  // Format internasional tanpa "+" untuk wa.me. null = belum ada; tombol WA tetap tampil tapi diarahkan ke halaman kontak WA umum.
  whatsapp: '6289611394867' as string | null, // sementara, dari Rama 2 Nov 2026
  telepon: null as string | null,
  email: 'atapurakaryalestari@gmail.com',
  jamKerja: null as string | null,
  nib: null as string | null,
  npwp: null as string | null,
  garansiPemasanganTahun: 5 as number | null, // KONSEP — pola aplikator: garansi pengerjaan tertulis terpisah dari pabrik
  garansi: {
    cakupan: [
      'Kebocoran akibat pemasangan: sambungan, flashing, paku, dan nok',
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
  // KONSEP — termin bertahap sesuai progres (pola Sejasa/Arsitag/kontraktor umum).
  termin: [
    { tahap: 'Uang muka', saat: 'Setelah kontrak ditandatangani', persen: 30 },
    { tahap: 'Termin kedua', saat: 'Material tiba di lokasi dan alas terpasang', persen: 40 },
    { tahap: 'Pelunasan', saat: 'Setelah serah terima dan berita acara', persen: 30 },
  ],
  sosmed: [] as string[],
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
