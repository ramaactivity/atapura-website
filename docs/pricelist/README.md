# Template pricelist Atapura (PDF A4)

Pricelist ini adalah **template**: isinya tidak diketik di desain, tetapi dibaca dari data situs. Ubah datanya, lalu
cetak ulang. Halaman sumbernya `src/pages/internal/pricelist.astro`, bisa dilihat juga di `/internal/pricelist`.

## Cetak ulang

```
npm run pricelist
```

Hasilnya `docs/pricelist/pricelist-atapura.pdf`, 17 halaman, ±13 MB. File PDF tidak di-commit (lihat `.gitignore`), cukup
dicetak ulang kapan saja. Perintah ini butuh Google Chrome di Mac.

## Mengubah isi

| Mau mengubah | Ubah di | Ikut berubah juga |
|---|---|---|
| Harga genteng, terpasang, isi bundel, garansi pabrik, plafon, rangka, jasa | `src/data/harga.ts` | Kalkulator & halaman produk website |
| Seri, deskripsi, contoh warna per merek | `src/data/produk.ts` | Halaman produk website |
| Aksesoris (nama, spek, harga, foto) | `src/data/aksesoris.ts` | `/produk/aksesoris` |
| WhatsApp, alamat, termin bayar, garansi pemasangan | `src/data/bisnis.ts` | Seluruh situs |
| Urutan merek, negara asal, foto, kalimat suasana, foto suasana kedua (`hero2`), motif tambahan | `ATAP` di bagian atas `pricelist.astro` | Hanya pricelist |
| Tampilkan / sembunyikan plafon | `TAMPIL_PLAFON` di `src/data/bisnis.ts` | Seluruh situs + pricelist |

Harga di `harga.ts` wajib sama dengan Katalog Atapura Ops (database). Kalau harga diubah di Ops, ubah juga di sini.

Hal yang perlu diingat saat menambah isi:
- **Merek atap baru**: tambahkan ke `harga.merek` dan `produk`, lalu ke `ATAP` dengan foto baru. Satu merek = dua halaman (merek, lalu motif & warna).
- **Motif/warna baru**: tambahkan seri atau warna di `produk.ts`. Halaman motif & warna ikut otomatis. Close-up motif di `assets/gambar/seri/`. Foto suasana bawah (`hero2`) mengisi sisa ruang dan dibuat dengan rasio persis ruang itu supaya atap tidak terpotong. Kalau isi halaman berubah, ukur ulang ruangnya (lebar × tinggi kotak `.hero2`), lalu buat foto baru di Magnific dengan ukuran kustom yang sama. Kalau ruangnya terlalu tipis, hapus `hero2` merek itu. Teks besar di foto (`judul`, `sub`, `posisi`) ditaruh di langit atau area gelap, jangan di atas atap.
- **Aksesoris baru**: cukup tambahkan ke `aksesoris.ts`. Grid aksesoris muat 10 kartu. Kalau lebih, kartunya perlu dikecilkan.
- **Foto baru**: buat di Magnific dengan gaya yang sama (sinematik, cahaya senja atau biru, suasana Jabodetabek/Puncak,
  tanpa teks/logo). Pakai foto close-up seri sebagai acuan supaya bentuk genteng benar. Simpan sebagai
  `assets/gambar/magnific/pricelist-<nama>.jpg` (lebar 2400 px). Catat di `docs/magnific-log.md`.
- **Setelah mengubah apa pun**: cetak ulang, lalu periksa tiap halaman. Teks yang terlalu panjang bisa menabrak kaki
  halaman. Skrip pemeriksa di sesi Claude memotret tiap halaman dan mencari elemen yang keluar batas.

## Arah desain

Brand Atapura (DESIGN.md): Pinus, Embun, aksen Tunas, judul Public Sans, isi Inter, angka tabular. Tiap merek punya satu
halaman dengan foto sinematik bangunan memakai atap itu di separuh atas, dan slip harga Pinus di kanan bawah. Harga
genteng ditulis paling besar. Semua foto berlabel ilustrasi, bukan proyek Atapura.
