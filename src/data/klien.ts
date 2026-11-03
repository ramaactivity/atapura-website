// Logo klien/portofolio untuk deretan "Dipercaya oleh" di beranda (komponen LogoKlien).
// Selama daftar ini kosong, bagiannya tidak tampil sama sekali — jangan isi dengan logo contoh/palsu.
// Cara menambah: simpan logo (SVG atau PNG transparan) di public/klien/, lalu tambahkan satu baris,
// mis. { nama: 'Kafe Senja', logo: '/klien/kafe-senja.svg' }. Wajib seizin klien.
export interface Klien {
  nama: string;
  /** Path di folder public, mis. '/klien/nama.svg'. */
  logo: string;
}

export const klien: Klien[] = [];
