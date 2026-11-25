// Satu sumber kebenaran untuk identitas bisnis. Halaman, JSON-LD, llms.txt, dan pesan WhatsApp membaca dari sini.
// Nilai `null` = belum ada data asli dari Rama; komponen wajib menyembunyikan bagian itu, bukan mengarang.

/**
 * Tampilkan lini plafon (Shunda, Javafon) di situs, kalkulator, dan pricelist? (DECISIONS 052)
 * Sementara false: harga plafon belum final dan belum ada vendor rekanan resmi (Rama, 19 Nov 2026).
 * Data plafon di produk.ts & harga.ts TIDAK dihapus — ganti ke true untuk menampilkannya lagi.
 */
export const TAMPIL_PLAFON = false as boolean;
// Janji "foto tiap lapis / foto progres tiap termin / Rapor Proyek" disembunyikan (Rama 24 Nov 2026, DECISIONS 093) sampai
// benar-benar dijalankan di lapangan dan tercatat di Ops. true = tampil lagi di /garansi, /cara-kerja, /perusahaan, /tentang,
// llms.txt, dan langkah klaim "Laporan". Kalimat di artikel diubah langsung (versi lama di git, commit sebelum 093).
export const TAMPIL_FOTO_PROGRES = false as boolean;

export const bisnis = {
  // KONSEP: situs ini konsep untuk diajukan ke partner (2 Nov 2026). Termin, garansi, dan harga mengikuti
  // praktik vendor terpercaya, belum keputusan final. Selama true: noindex + robots Disallow, supaya
  // Google/AI tidak mengutip angka konsep sebagai janji Atapura. Ubah ke false saat partner setuju.
  konsep: false, // dibuka untuk Google oleh Rama 23 Nov 2026 setelah atapura.com live
  nama: 'Atapura',
  namaLegal: 'PT Atapura Karya Lestari',
  statusLegal: 'dalam proses pendirian',
  tagline: 'Atap yang masuk AKAL.',
  deskripsi:
    `Aplikator dan agen atap bitumen (genteng aspal) Maxxi, CTI, Javabitumen, Tegola, dan Victory untuk rumah, villa, kafe, dan proyek, juga ${TAMPIL_PLAFON ? 'plafon PVC dan ' : ''}rangka atap baja ringan. Berbasis di Jabodetabek, melayani proyek di luar Jabodetabek.`,
  // Format internasional tanpa "+" untuk wa.me. null = belum ada; tombol WA tetap tampil tapi diarahkan ke halaman kontak WA umum.
  whatsapp: '6289611384767' as string | null, // 0896-1138-4767, dikoreksi Rama 23 Nov 2026 (sebelumnya salah ketik 0896-1139-4867)
  // Nomor resmi = nomor WA yang sama (Rama 25 Nov 2026): satu nomor di website, Google Business Profile, marketplace, kartu nama.
  telepon: '6289611384767' as string | null,
  email: 'atapurakaryalestari@gmail.com',
  jamKerja: null as string | null,
  // Alamat sementara dari Rama (4 Nov 2026). Dipakai footer, JSON-LD, dan llms.txt — samakan persis dengan Google Business Profile.
  alamat: {
    jalan: 'Jl. Raya Puncak Kp. Cibeureum RT 01 RW 01 No. 87',
    kelurahan: 'Cisarua',
    kecamatan: 'Cisarua',
    kota: 'Kabupaten Bogor',
    provinsi: 'Jawa Barat',
    kodePos: '16750',
  },
  nib: null as string | null,
  npwp: null as string | null,
  garansiPemasanganTahun: 5 as number | null, // Bang Yusuf 2 Nov 2026: garansi kebocoran & kesalahan pasang
  garansi: {
    cakupan: [
      'Kebocoran akibat pemasangan: sambungan, flashing, paku, dan nok',
      'Kesalahan pasang yang tidak sesuai panduan pabrik',
      'Genteng terlepas atau bergeser bukan karena bencana',
      'Perbaikan atas kerusakan akibat pemasangan, tanpa biaya',
    ],
    pengecualian: [
      'Bencana alam: angin di atas batas pabrik, gempa, banjir, kebakaran',
      'Perubahan atau perbaikan atap oleh pihak lain',
      'Kerusakan rangka atau dinding yang bukan pekerjaan kami',
      'Talang tersumbat yang tidak dibersihkan',
      // Rama 22 Nov 2026: garansi material tanggung jawab pabrik, bukan Atapura (sama dengan Ops lib/penawaran/syarat.ts).
      'Cacat produk atau material dari pabrik: diklaim lewat garansi pabrik masing-masing merek',
    ],
    klaim: [
      { nama: 'Kirim foto atau video', isi: 'Lewat WhatsApp, sertakan nama pemilik dan alamat.' },
      { nama: 'Pengecekan', isi: 'Kami nilai dari foto atau video. Bila ada kebocoran atau kerusakan, tim datang ke lokasi paling lambat 3 hari kerja.' },
      { nama: 'Perbaikan', isi: 'Bila tercakup garansi, diperbaiki tanpa biaya dengan jadwal yang disepakati bersama.' },
      ...(TAMPIL_FOTO_PROGRES ? [{ nama: 'Laporan', isi: 'Foto sebelum dan sesudah dikirim, dicatat di Rapor Proyek.' }] : []),
    ],
  },
  // Revisi Bang Yusuf (2 Nov 2026): material cash before delivery; jasa pasang termin 40/30/30.
  // Momen tiap termin jasa = KONSEP (pola kontraktor umum), menunggu konfirmasi.
  pembayaran: {
    material: 'Lunas sebelum material dikirim ke lokasi (cash before delivery)',
    jasa: [
      { tahap: 'Termin 1', saat: 'Saat tim mulai bekerja di lokasi', persen: 40 },
      { tahap: 'Termin 2', saat: 'Saat genteng mulai terpasang (progres ±50%)', persen: 30 },
      { tahap: 'Pelunasan', saat: 'Setelah serah terima', persen: 30 },
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
  // Tegola & Victory ditambahkan Rama 4 Nov 2026; harga Victory dari Rama 5 Nov (harga.ts), Tegola menunggu Bang Yusuf.
  merek: ['Maxxi', 'CTI', 'Javabitumen', 'Tegola', 'Victory'],
  // Izin tampil publik dari Rama, 2 Nov 2026.
  // Hanya Rama yang tercantum publik; partner pemilik sengaja tidak ditulis (hindari konflik dengan bekas tempat kerjanya). DECISIONS 027.
  pendiri: ['Ramadan Saputra'],
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

/** Alamat satu baris untuk tampilan: "Jl. …, Kel. Cisarua, Kec. Cisarua, Kabupaten Bogor, Jawa Barat 16750". */
export const alamatLengkap = `${bisnis.alamat.jalan}, Kel. ${bisnis.alamat.kelurahan}, Kec. ${bisnis.alamat.kecamatan}, ${bisnis.alamat.kota}, ${bisnis.alamat.provinsi} ${bisnis.alamat.kodePos}`;
