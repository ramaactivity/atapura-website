import { bisnis, TAMPIL_FOTO_PROGRES } from './bisnis';

// Enam tahap kerja dari survey sampai pelunasan (bahan/atapura/01-PRODUCT-SPEC.md). Satu sumber untuk komponen
// CaraKerja (halaman /cara-kerja) dan ringkasan tahap di beranda. Tiap tahap menjawab: apa yang Anda pegang.
const dp = bisnis.pembayaran.jasa[0]?.persen;
export const tahap = [
  { nama: 'Survey', judul: 'Atap Anda diukur, bukan ditebak', pegang: 'Ukuran atap, foto kondisi rangka, dan saran merek & warna.', isi: 'Tim datang tanpa biaya, mengukur atap, memeriksa rangka, dan membawa sampel genteng untuk dicocokkan dengan cahaya rumah Anda.' },
  { nama: 'Penawaran', judul: 'Semua biaya jelas sebelum Anda setuju', pegang: 'Rincian biaya per item dan jadwal.', isi: 'Material, aksesoris, jasa, dan perkiraan hari kerja dirinci. Tidak ada biaya yang muncul belakangan.' },
  { nama: 'Pembayaran', judul: 'Uang baru berpindah di tahap ini', pegang: `Kuitansi pelunasan material dan termin jasa ${dp}%.`, isi: 'Material dibayar lunas sebelum dikirim, jasa pasang bertahap mengikuti progres.' },
  { nama: 'Pengerjaan', judul: TAMPIL_FOTO_PROGRES ? 'Lapis yang tertutup tetap bisa Anda lihat' : 'Dipasang berurutan, lapis demi lapis', pegang: TAMPIL_FOTO_PROGRES ? 'Foto setiap lapis sebelum ditutup lapis berikutnya.' : 'Kabar progres lewat chat.', isi: 'Alas, underlayment, flashing, genteng, dan nok dipasang berurutan. Kabar progres dikirim lewat chat.' },
  { nama: 'Serah terima', judul: 'Diperiksa bersama sebelum dinyatakan selesai', pegang: TAMPIL_FOTO_PROGRES ? 'Hasil uji semprot, opname luas, Rapor Proyek, dan kartu garansi.' : 'Hasil uji semprot, opname luas, dan kartu garansi.', isi: 'Atap diuji semprot air untuk memastikan tidak bocor, luas terpasang diukur ulang bersama, lalu diperiksa bersama. Catatan perbaikan diselesaikan sebelum serah terima.' },
  { nama: 'Pelunasan', judul: 'Lunas setelah atapnya Anda terima', pegang: `Invoice lunas; garansi ${bisnis.garansiPemasanganTahun} tahun mulai berjalan.`, isi: 'Sisa pembayaran dilakukan setelah serah terima, dan masa garansi pemasangan dimulai.' },
];

