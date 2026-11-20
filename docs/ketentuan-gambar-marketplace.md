# Ketentuan gambar marketplace (Shopee, Tokopedia, Lazada, Blibli)

Berlaku untuk carousel produk Atapura. Kanvas kerja: Claude Design "Cover & thumbnail marketplace Atapura".
Log kredit tetap di `docs/magnific-log.md`; Magnific dipakai per batch setelah Rama setuju (DECISIONS 039).

## Aturan umum

- Semua gambar 1:1, diekspor 1080 × 1080, JPG di bawah 1 MB (batas Blibli).
- Produk harus sama dengan aslinya: bentuk potongan, ukuran lembar, jumlah tab, warna, tekstur butiran.
  Genteng aspal (asphalt shingle) BUKAN lembaran bergelombang; tidak ada baut, tidak ada gelombang.
- Bentuk produk dikunci dulu, baru AI menambah realisme. Jangan suruh AI menggambar lembar dari nol:
  model selalu mengarang bentuk (lihat log 20 Nov: lembar persegi, celah palsu, 4 baris tab).
- Tanpa teks, logo, watermark, harga, nomor HP, link, atau ajakan keluar platform di gambar AI.
  Teks hanya ditambahkan di desain (slide 2 dst.).
- Foto asli (proyek Atapura, katalog pabrik) selalu didahulukan. Gambar AI wajib dicek diperbesar
  (ukuran seragam, tepi, butiran) sebelum dipakai.

## Per slide

| Slide | Isi | Aturan gambar |
|---|---|---|
| 1 Cover | Produk saja | Latar putih #FFFFFF polos, produk ±70% bingkai, bayangan lembut, tanpa tulisan dan properti. Genteng: lembar lepas sesuai katalog (CT3 = 1.000 × 333 mm, 3 tab, 2 celah). Aksesoris: foto produk asli/packshot |
| 2 Deskripsi | Nama, kegunaan singkat | Gaya brand (Embun/Pinus/Tunas), foto tekstur seri, tanpa klaim tak bersumber |
| 3 Spesifikasi | Angka dari katalog | Angka hanya dari data `produk.ts`/katalog; yang belum ada ditulis [PLACEHOLDER] |
| 4–5 Warna/motif | Etalase pilihan | Contoh warna besar (ubin tekstur nyata, bukan titik kecil), maks 9 per slide |
| 6 Penerapan | Foto terpasang | Foto proyek asli dulu; bila AI: rumah/kafe/gazebo Indonesia, bangunan di tengah bingkai, warna genteng sama dengan produk |
| 7 Cara pesan (genteng) | Hitung per m² | Angka dari isi bundel resmi; tidak ada harga di gambar |
| 8 Syarat & ketentuan | Ongkir, retur, garansi | Teks saja, fakta dari profil bisnis |

## Resep cover genteng (terbukti 20 Nov 2026)

1. Rakit lembar dengan skrip: ukuran dari katalog, tekstur butiran diambil dari warna foto seri,
   celah tab, garis perekat, tebal potongan, dua lembar ditumpuk dalam perspektif, latar putih.
2. Magnific Creative Upscale 1x: FilmAndPhotography, engine sharpy, creativity 4, resemblance 5, hdr 1,
   prompt "photograph of loose asphalt roof shingle sheets, 3-tab, … pure white seamless background …
   no text, no logo, no extra objects".
3. Potong bingkai hitam 2 px yang ditambahkan Magnific, perkecil ke 1080, cek diperbesar.
