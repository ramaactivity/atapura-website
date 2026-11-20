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
  Teks hanya ditambahkan di desain (bingkai slide, termasuk cover).
- Foto asli (proyek Atapura, katalog pabrik) selalu didahulukan. Gambar AI wajib dicek diperbesar
  (ukuran seragam, tepi, butiran) sebelum dipakai.

## Per slide (sistem slide DECISIONS 062)

Semua slide memakai bingkai yang sama (Pinus, kartu putih beratap, pil "Chat admin sebelum checkout"), termasuk cover.
Gambar AI hanya mengisi foto di dalam bingkai; foto itu sendiri tetap latar putih polos tanpa tulisan.

| Slide | Isi | Aturan gambar |
|---|---|---|
| 1 Cover | Nama, foto produk besar, strip pil angka + satuan jual | Foto latar putih #FFFFFF, tanpa tulisan. Genteng: lembar lepas sesuai katalog (CT3 = 1.000 × 333 mm, 3 tab, 2 celah), simpan `assets/gambar/produk/cover-<id>-1x1.jpg` (polos, cadangan) + `cover-<id>-potong.jpg` (dipotong ke produk, dipakai generator). Aksesoris: foto wujud asli |
| 2 Deskripsi & spesifikasi | Satu kalimat fungsi, gambar ukur, tabel | Tidak generate. Gambar ukur digambar dari ukuran data; angka hanya dari `produk.ts`/`aksesoris.ts` |
| Warna/motif (bila ada) | Etalase, maks 6 per gambar, grid 3 kolom rata | Tidak generate baru: contoh warna = foto seri diwarnai ulang (DECISIONS 042), selalu dengan catatan warna layar |
| 3 Penerapan | Foto terpasang + keterangan | Foto proyek asli dulu; bila AI: bangunan Indonesia, bangunan di tengah bingkai, potongan & warna sama dengan foto seri (acuan) |
| Hitung kebutuhan (genteng) | Contoh atap 100 m² | Tidak ada gambar; angka dari isi bundel resmi; tidak ada harga di gambar |
| 4 Syarat & ketentuan | Teks bernomor | Tidak ada gambar; hanya fakta dari data. Ongkir & retur menunggu keputusan |

## Resep cover genteng (terbukti 20 Nov 2026)

1. Rakit lembar dengan skrip: ukuran dari katalog, tekstur butiran diambil dari warna foto seri,
   celah tab, garis perekat, tebal potongan, dua lembar ditumpuk dalam perspektif, latar putih.
2. Magnific Creative Upscale 1x: FilmAndPhotography, engine sharpy, creativity 4, resemblance 5, hdr 1,
   prompt "photograph of loose asphalt roof shingle sheets, 3-tab, … pure white seamless background …
   no text, no logo, no extra objects".
3. Potong bingkai hitam 2 px yang ditambahkan Magnific, perkecil ke 1080, cek diperbesar.

Alternatif yang dipakai generator (cover CT3 versi B, DECISIONS 062): rakitan 2 lembar dari foto seri dijadikan gambar
acuan untuk Nano Banana 2 flash (2K, 1:1, 75 kredit/variasi, maks 2) dengan prompt yang mengunci bentuk ("Keep the exact
shapes, count, size ratio, angle and placement from the reference … Do not add rows, extra slots, curves or waves"), lalu latar
diratakan ke #FFFFFF dan versi `-potong` dipotong ke batas lembar.
