// Satu sumber kebenaran untuk identitas bisnis. Halaman, JSON-LD, llms.txt, dan pesan WhatsApp membaca dari sini.
// Nilai `null` = belum ada data asli dari Rama; komponen wajib menyembunyikan bagian itu, bukan mengarang.

export const bisnis = {
  nama: 'Atapura',
  namaLegal: 'PT Atapura Karya Lestari',
  statusLegal: 'dalam proses pendirian',
  tagline: 'Atap yang masuk AKAL.',
  deskripsi:
    'Aplikator dan supplier atap bitumen (genteng aspal) Maxxi, CTI, dan Javabitumen untuk rumah, villa, kafe, dan proyek di Jabodetabek.',
  // Format internasional tanpa "+" untuk wa.me. null = belum ada; tombol WA tetap tampil tapi diarahkan ke halaman kontak WA umum.
  whatsapp: null as string | null,
  telepon: null as string | null,
  email: 'atapurakaryalestari@gmail.com',
  jamKerja: null as string | null,
  nib: null as string | null,
  npwp: null as string | null,
  garansiPemasanganTahun: null as number | null,
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
} as const;

export function waLink(pesan: string): string {
  const teks = encodeURIComponent(pesan);
  return bisnis.whatsapp ? `https://wa.me/${bisnis.whatsapp}?text=${teks}` : `https://wa.me/?text=${teks}`;
}
