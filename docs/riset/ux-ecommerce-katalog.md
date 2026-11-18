# Riset UX: halaman produk bergaya katalog toko online

Dicek: **18 November 2026**. Tujuan: `/produk` dan `/produk/[merek]` terasa seperti katalog toko online (foto, harga, jelas bisa diklik), padahal "checkout"-nya tombol WhatsApp dan kalkulator Hitung AKAL. Dokumen ini untuk acuan internal. Nama toko/pabrikan di bagian 2 tidak boleh muncul di situs.

## Cara riset dan batasannya (baca dulu)

- **Baymard Institute**: artikel blog gratis dibaca langsung. Panduan lengkap (Premium) terkunci. Untuk panduan yang terkunci, yang dikutip hanya judul atau bagian yang terbuka. Angka "xx% situs tidak melakukannya" berasal dari benchmark situs besar AS/Eropa. Angka antar-halaman Baymard kadang beda (mis. *price per unit* 86% / 81% / 67%) karena putaran benchmark berbeda. Yang ditulis di sini mengikuti halaman yang dikutip.
- **Nielsen Norman Group (NN/g)**: situsnya menolak dibuka langsung (HTTP 530). Isinya diambil dari cuplikan mesin pencari ke artikel aslinya, dan URL artikel asli dicantumkan. Status: **dikutip lewat cuplikan, belum dibaca utuh**. Bisa dicek ulang manual di browser.
- **Toko Indonesia**: Depo Bangunan, Mitra10, Maxxiroof, dan Kanmuri berhasil dibuka. Tokopedia selalu timeout. Blibli, Indotrading, dan Archify menolak (403). Ralali dan sd.co.id terbuka, tetapi isi produknya tidak terbaca (dirender JavaScript). Tokopedia hanya dicatat dari cuplikan pencarian.
- Rekomendasi yang **tidak** punya dasar riset langsung ditandai *(inferensi)*.

## Kondisi halaman saat ini (patokan rekomendasi)

| Bagian | Live di atapura.vercel.app | Working tree 18 Nov (belum di-push, sesi lain) |
|---|---|---|
| Kartu `/produk` | Kartu teks: nama, deskripsi, seri, harga/m², panah "→". Tanpa foto | `KartuProduk.astro` baru: foto 4:3, nama, seri satu baris, harga rentang/m² atau "Harga tanya admin", panah bulat. Seluruh kartu satu tautan. 2 kolom di HP |
| Pengelompokan | Atap bitumen (5), Rangka (1), Layanan (4) | Ditambah lini Plafon |
| Hero `/produk/[merek]` | Tanpa foto. Harga "Rp400–450 ribu per m², Terpasang, Jabodetabek" di slip ringkasan + 2 tombol | Sama |
| Tombol "Hitung biaya dengan {merek}" | Ke `/#hitung`. Kalkulator **selalu mulai di CTI** (`useState<Merek>('CTI')`), apa pun merek halamannya | Sama |
| Seri | Kartu foto close-up, ukuran, isi per bundel. Tanpa harga per seri | Sama |
| Warna | Foto contoh + nama + kode | Sama |
| "Produk lain" | Kartu teks tanpa foto/harga | Pakai `KartuProduk` (foto + harga) |
| Bilah tab bawah HP | Beranda · Hitung · **Chat** (pesan umum "soal atap bitumen") · Merek · Garansi. Tetap di layar | Sama |
| Data terstruktur | `Product` tanpa `image`, tanpa `offers` | Sama |

---

## 1. Panduan berbasis riset

### A. Kartu produk di daftar (product list item)

**A1. Seluruh kartu jadi satu area klik, dan efek hover/tekan-nya serempak.**
- Alasan: Baymard membenchmark 50 situs e-commerce besar AS. Di **76%** situs, pengguna tidak bisa menebak bagian mana yang bisa diklik dan ke mana. Solusi Baymard untuk kartu yang semua elemennya menuju halaman produk: jadikan seluruh kartu satu area klik besar, dengan efek hover untuk seluruh kartu (border, bayangan, atau latar). Ini juga mengurangi klik sia-sia di teks yang tidak bisa diklik.
- NN/g (Cards): biasanya mengetuk di mana saja pada kartu membuka halaman detail. Area sentuh besar ini "substantially improves usability" di layar sentuh maupun mouse (Hukum Fitts).
- Material 3: kartu boleh menjadi satu target sentuh besar menuju layar detail. Aksi tambahan (ikon, chip) ditaruh terpisah dari area utama.
- Sumber: https://baymard.com/blog/list-items-hover-and-hit-area (Christian Holst, 16 Agu 2016) · https://www.nngroup.com/articles/cards-component/ · https://m3.material.io/components/cards/guidelines

**A2. Penanda "bisa diklik" harus terlihat tanpa hover (HP tidak punya hover).**
- Alasan: NN/g menilai perubahan saat hover dan perubahan kursor sebagai penanda lemah yang menurunkan keterlihatan target. Contoh penanda yang baik: kartu berbatas jelas di atas latar kontras, dengan bayangan tipis sebagai tanda seluruh kartu bisa diklik. Gaya flat cenderung membuang isyarat kedalaman ini.
- NN/g (Beyond Blue Links): gambar, ikon, dan teks yang saling terkait semuanya dibuat bisa diklik supaya targetnya membesar.
- Sumber: https://www.nngroup.com/articles/clickable-elements/ · https://www.nngroup.com/articles/cards-component/ · https://www.nngroup.com/articles/flat-design-best-practices/

**A3. Foto kartu besar, konsisten, spesifik, dan kontekstual.**
- NN/g, "6 Tips for Product Photos on Listing Pages" (27 Feb 2022): foto **besar** supaya fitur antar-produk bisa dibedakan. Foto **konsisten** gayanya (tidak harus identik). Foto **spesifik**, yaitu sesuai varian yang dicari atau difilter. Foto **dinamis**: tampilan alternatif saat hover/karusel, dengan jeda sebelum berganti. Foto **kontekstual**: produk sedang dipakai, supaya skala dan tampilannya terbayang.
- NN/g (Image Grids or Text Lists, 30 Mar 2014): gambar dalam **grid 2 kolom bekerja baik di HP**, sedangkan thumbnail mungil di samping teks dalam daftar tidak. NN/g (List Thumbnails on Mobile, Des 2015): thumbnail yang terlalu kecil tidak lagi dikenali. Lebih baik di-crop daripada diperkecil utuh.
- NN/g (product pages): foto stok lebih banyak merugikan daripada membantu.
- Sumber: https://www.nngroup.com/articles/product-photos-listing-pages/ · https://www.nngroup.com/articles/image-vs-list-mobile-navigation/ · https://www.nngroup.com/articles/mobile-list-thumbnail/ · https://www.nngroup.com/articles/ecommerce-product-pages/

**A4. Satu foto di kartu sering tidak cukup untuk produk yang dinilai dari tampilan.**
- Baymard, Product List UX 2025: **80%** situs tidak menyediakan 3 thumbnail atau lebih di daftar produk. Minimum yang disarankan 2 thumbnail tambahan, idealnya 3+. Fashion bisa butuh 5–15.
- Catatan untuk Atapura *(inferensi)*: angka ini dari toko dengan ratusan produk mirip. Katalog kita hanya ±8 produk dan foto lain ada di halaman detail. Satu foto kuat di kartu lebih hemat kuota HP. Tambahan foto cukup di halaman detail (lihat C1).
- Sumber: https://baymard.com/blog/current-state-product-list-and-filtering (Mark Crowley, diperbarui 9 Sep 2025)

**A5. Info minimum di kartu: nama, harga, atribut kunci yang sama untuk produk sejenis, dan tanda varian.**
- Baymard (22 Agu 2023): **64%** situs tidak menampilkan atribut yang sama secara konsisten untuk produk sejenis dalam satu daftar. Kalau suatu info tidak diketahui, pilih salah satu: buang atribut itu dari semua kartu, atau tulis terang "belum tersedia". **40%** situs tidak membedakan tiap elemen info secara visual. Pembeda bisa lewat ukuran, tebal, atau warna huruf, dan satu baris pun boleh di grid sempit.
- Baymard (atribut kartu rekomendasi, 23 Mar 2021, berlaku juga untuk kartu daftar): thumbnail berkualitas (tanpa thumbnail, kartu sering diabaikan), **judul utuh** (55% situs memotongnya), **harga** (15% tidak mencantumkan, sehingga pengguna harus membuka tiap produk untuk cek anggaran), varian (54% tidak menunjukkan), merek (untuk situs multi-merek).
- NN/g (listing pages): harga termasuk info wajib di halaman daftar. Riset NN/g sebelumnya menyebut tidak adanya harga sebagai masalah kegunaan besar di situs B2B.
- Sumber: https://baymard.com/blog/list-item-design-ecommerce · https://baymard.com/blog/product-page-suggestions-information · https://www.nngroup.com/articles/ecommerce-homepages-listing-pages/

**A6. Varian warna digabung dalam satu kartu dan ditunjukkan dengan swatch, bukan teks.**
- Baymard Product List UX 2025: **42%** situs tidak menggabungkan varian (mis. warna) ke satu kartu.
- Baymard (8 Agu 2023): **57%** situs tidak menampilkan semua swatch warna di daftar produk HP. Pengguna yang bergerak cepat melewatkan penanda kecil seperti "+7" dan mengira warnanya hanya yang tampak. Pola terbaik dalam uji: baris swatch yang bisa digeser, target sentuh besar, swatch paling kanan terpotong sebagai tanda masih ada. Gunakan swatch, bukan teks "tersedia dalam beberapa warna".
- NN/g (Products with Multiple Variants): swatch di bawah produk di halaman daftar. Penanda "+ MORE" yang kecil dan pudar mudah terlewat, jadi penanda varian harus kontras dan menonjol.
- Sumber: https://baymard.com/blog/mobile-interactive-color-swatches (Edward Scott) · https://baymard.com/blog/current-state-product-list-and-filtering · https://www.nngroup.com/articles/products-with-multiple-variants/

**A7. Harga rentang/"mulai dari" boleh, asal satuannya jelas. Harga per satuan jangan sampai bersaing dengan harga utama.**
- Baymard (Price per Unit): **86%** situs tidak menampilkan harga per satuan untuk produk yang dijual dalam ukuran/jumlah berbeda, sehingga pengguna meninggalkan produk yang sebenarnya cocok. Dalam uji, pengguna hanya mau menghitung manual untuk segelintir produk. Contoh baik: harga per satuan tampil tanpa mengganggu harga utama.
- Untuk Atapura, harga per m² terpasang **adalah** harga utama, karena kita tidak menjual per bundel. Ini justru keunggulan dibanding toko yang menjual per lembar/bundel (lihat bagian 2).
- NN/g (B2B, Show Prices for Common Scenarios): kalau harga tergantung kebutuhan, tampilkan **harga contoh untuk skenario umum**, rentang harga, atau kalkulator sederhana. Pembeli tahap awal butuh rentang untuk minta persetujuan anggaran.
- Sumber: https://baymard.com/blog/price-per-unit · https://www.nngroup.com/articles/show-prices-for-common-scenarios/

**A8. "Harga tanya admin" merugikan kepercayaan. Kalau terpaksa, beri rentang atau alasannya.**
- NN/g: orang menilai perusahaan yang menyembunyikan harga sebagai mengelak dan tidak bisa dipercaya. Dalam studi NN/g, peserta pergi ke situs pesaing kalau harga tidak ditampilkan. Dalam satu latihan pemeringkatan, harga mendapat skor tertinggi, **29% di atas** ketersediaan produk di peringkat kedua. Data B2B NN/g tergolong lama (studi 2006, artikel harga ±2013), tetapi tetap jadi posisi resmi mereka.
- Sumber: https://www.nngroup.com/articles/show-price/ · https://www.nngroup.com/articles/b2b-usability/ · https://www.nngroup.com/articles/show-prices-for-common-scenarios/

**A9. Badge hanya untuk fakta, hemat.** *(inferensi)*
- Riset ini tidak menemukan panduan Baymard/NN/g yang terbuka soal badge di kartu. Prinsip yang dipakai: A5 (info harus konsisten antar kartu) dan memori proyek (klaim wajib bersumber, jangan over promise). Badge yang aman: fakta yang sama jenisnya untuk semua kartu, mis. "Garansi pabrik 30 th". Hindari "Terlaris" atau "Promo" tanpa data.

**A10. Grid HP: 2 kolom untuk produk yang dinilai dari tampilan, asal fotonya tetap cukup besar dan teks harga tidak patah berantakan.**
- NN/g: grid 2 kolom bekerja di HP kalau gambarnya cukup detail dan besar. Grid juga memperlihatkan lebih banyak produk per layar.
- Baymard punya panduan "Grid Layout for Visually Driven Products" (#2272, isinya terkunci) dan menyebut keseimbangan kartu di HP sulit: info cukup dan thumbnail besar melawan kartu yang ringkas.
- Target sentuh: WCAG 2.2 SC 2.5.8 (AA) minimal 24×24 px CSS. SC 2.5.5 (AAA) 44×44 px.
- Sumber: https://www.nngroup.com/articles/image-vs-list-mobile-navigation/ · https://baymard.com/guidelines/2272-grid-layout-for-visually-driven-products · https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

### B. Halaman daftar

**B1. Katalog kecil (±8 produk) tidak perlu filter dan sort. Kelompokkan per kategori dengan judul jelas, ditambah lompatan cepat.** *(sebagian inferensi)*
- Daftar filter dan sort "wajib" Baymard (harga, rating, warna, ukuran, merek; urut harga, rating, terlaris, terbaru; 51% dan 69% situs belum lengkap) dibuat untuk daftar ratusan produk. Untuk 5 produk per lini, kontrol itu menambah beban tanpa hasil. Toko bangunan lokal yang memasang 9 opsi urut untuk 5 produk terlihat janggal (bagian 2).
- NN/g: banyak situs melewati halaman kategori dan langsung ke daftar produk. Pola "hybrid" (menu subkategori singkat atau deskripsi pendek di atas daftar) lebih disukai daripada halaman kategori penuh.
- Sumber: https://baymard.com/blog/current-state-product-list-and-filtering · https://www.nngroup.com/articles/category-pages/ · https://www.nngroup.com/articles/ecommerce-homepages-listing-pages/

**B2. Kartu yang tujuannya beda harus terlihat beda.**
- Baymard: elemen dengan fungsi atau tujuan lain harus dibedakan secara visual dan dikelompokkan per tujuan. Untuk Atapura, kartu "Layanan" (menuju panduan) jangan mirip kartu produk berharga.
- Sumber: https://baymard.com/blog/list-items-hover-and-hit-area

**B3. Breadcrumb hierarki selalu ada. Di HP, boleh buang "Beranda" dan nama halaman saat ini.**
- Baymard (benchmark 2013, 50 situs): **68%** implementasi breadcrumb di bawah standar. Pendekatan terburuk dalam uji adalah tanpa breadcrumb sama sekali. Benchmark HP: dari situs yang punya breadcrumb, **36%** tidak memuat hierarki kategori lengkap di halaman produk HP. Pengguna tidak terganggu kalau remah "Beranda" dan "halaman produk saat ini" dibuang di HP.
- Sumber: https://baymard.com/blog/ecommerce-breadcrumbs · https://baymard.com/blog/implementing-mobile-hierarchy-breadcrumbs

### C. Halaman detail produk

**C1. Galeri foto di paling atas, beberapa jenis foto: close-up, terpasang di bangunan (kontekstual), dan "in scale".**
- NN/g: satu sudut pandang jarang cukup menjawab pertanyaan pembeli. Butuh beberapa tampilan dan foto produk sedang dipakai. Foto stok merugikan.
- Baymard: **42%** pengguna mencoba menilai ukuran produk dari fotonya. Tanpa foto "in scale" (ada pembanding berukuran dikenal), mereka menarik kesimpulan ukuran yang salah. Benchmark 2026: **37%** situs tidak punya foto in-scale.
- Baymard (thumbnail galeri): di desktop pakai thumbnail (94% situs). Di HP, titik/teks/tanpa penanda masih bisa karena pengguna paham geser, tetapi tetap tunjukkan bahwa ada foto lain. Thumbnail yang dipotong (sebagian disembunyikan) membuat **50–80%** peserta tidak sadar ada foto tambahan.
- Sumber: https://www.nngroup.com/articles/ecommerce-product-pages/ · https://baymard.com/blog/in-scale-product-images · https://baymard.com/guidelines/741-visually-indicating-product-scale · https://baymard.com/blog/current-state-ecommerce-product-page-ux · https://baymard.com/blog/always-use-thumbnails-additional-images · https://baymard.com/blog/truncating-product-gallery-thumbnails

**C2. Harga (beserta komponennya) dan CTA utama terlihat tanpa scroll. Tampilkan juga perkiraan total di dekatnya.**
- NN/g: elemen inti halaman produk mencakup harga **termasuk biaya tambahan khusus produk**, pilihan varian yang jelas, dan kontrol aksi utama.
- Daftar audit Baymard menanyakan apakah CTA utama terlihat tanpa scroll di langkah kunci.
- Baymard Product Page UX 2026: **67%** situs tidak memberi perkiraan total biaya di dekat area beli. Padanan untuk Atapura: contoh total untuk luas umum, plus kalkulator dengan merek yang sudah terpilih.
- Sumber: https://www.nngroup.com/articles/ecommerce-product-pages/ · https://baymard.com/blog/ux-audit-checklist-template · https://baymard.com/blog/current-state-ecommerce-product-page-ux

**C3. Pemilih varian (seri, warna) berupa tombol/swatch berfoto yang langsung terlihat, bukan dropdown. Satu halaman per produk.**
- Baymard 2026: **57%** situs tidak memakai tombol untuk pilihan ukuran. Dropdown menyembunyikan pilihan.
- NN/g: varian ditampilkan dalam satu halaman sebagai atribut yang bisa dipilih. Pecah jadi halaman terpisah hanya kalau varian mengubah fitur produk secara mendasar, dan tetap sediakan pindah antar-varian. Foto sebaiknya sesuai varian yang dipilih (prinsip "spesifik").
- Baymard: **54%** situs tidak mengganti thumbnail sesuai warna yang dicari.
- Sumber: https://baymard.com/blog/current-state-ecommerce-product-page-ux · https://www.nngroup.com/articles/products-with-multiple-variants/ · https://baymard.com/blog/color-and-variation-searches

**C4. Spesifikasi: satu kolom, label kiri dan nilai kanan dengan garis atau warna selang-seling, spek terpenting di atas, struktur sama untuk semua merek.**
- Baymard (27 Mar 2018): **50%** situs punya lembar spek yang sulit dipindai. Pakai **satu kolom**, karena multi-kolom (20% situs) disangka tabel perbandingan. Pakai bantuan visual (garis, latar selang-seling, ikon). 23% situs tidak memakainya. Kelompokkan spek kalau lebih dari 20 baris. Urutkan kelompok yang paling dicari di atas. Samakan struktur antar-produk: 52% situs tidak merapikan data dari vendor.
- Baymard (24 Apr 2018): "highlight" fitur, yaitu 2–6 fitur inti dengan gambar, judul pendek, dan satu paragraf, meningkatkan keterlibatan. Hanya **22%** situs memakainya.
- Sumber: https://baymard.com/blog/spec-sheet-scannability · https://baymard.com/blog/structure-descriptions-by-highlights

**C5. Konten panjang disusun vertikal (boleh dilipat), bukan tab horizontal.**
- Baymard: dengan tab horizontal, **27%** pengguna melewatkan konten yang tersembunyi. Dengan bagian vertikal yang dilipat, 8% (angka 8% dari ringkasan sekunder Baymard). Judul tiap bagian di barisnya sendiri memberi gambaran isi.
- Sumber: https://baymard.com/blog/avoid-horizontal-tabs

**C6. CTA lengket di HP: hati-hati makan layar. Jangan menumpuk bilah tetap.** *(sebagian inferensi)*
- Riset ini tidak menemukan studi Baymard/NN/g terbuka yang membandingkan tombol lengket dan tidak lengket di HP. Uji A/B pihak ketiga hasilnya campur, dan ada yang menemukan lebih banyak masuk keranjang tetapi lebih sedikit pembelian.
- Daftar audit Baymard menanyakan apakah header atau banner lengket masih menyisakan cukup layar untuk konten. Cuplikan pencarian dari artikel Baymard juga menyebut tombol lengket sebaiknya tidak selebar layar dan bergaya unik (belum dibaca utuh).
- Atapura **sudah** punya bilah tab bawah tetap dengan Chat di tengah. Menambah bilah CTA kedua berarti dua bilah tetap di layar HP.
- Sumber: https://baymard.com/blog/ux-audit-checklist-template · https://baymard.com/blog/ecommerce-ux-best-practices · https://cleancommit.io/ab-tests/mobile-bottom-sticky-add-to-cart-button/

**C7. Sinyal kepercayaan (garansi, survey gratis, apa yang termasuk harga) diletakkan di konten utama dekat harga/CTA.**
- Baymard 2026 (padanan dari kebijakan retur): **44%** situs tidak menampilkan atau menautkan kebijakan retur dari konten utama produk. **60%** pembeli mencarinya di halaman produk. **15%** pernah batal pesan dalam satu kuartal karena kebijakan retur tidak memuaskan. Padanan Atapura: garansi pemasangan 5 th dan garansi pabrik, survey gratis Jabodetabek (`src/data/bisnis.ts`), dan rincian isi harga terpasang.
- Sumber: https://baymard.com/blog/current-state-ecommerce-product-page-ux

**C8. "Produk lain" berupa kartu berfoto besar dengan nama utuh dan harga.**
- Baymard (23 Mar 2021): **68%** situs desktop kurang memberi info di kartu rekomendasi. Kartu tanpa thumbnail sering diabaikan sama sekali karena dianggap "belum lengkap". Thumbnail mungil sama tidak efektifnya. Judul utuh (55% memotong), harga (15% tidak ada). Di HP, info yang ditampilkan harus sama dengan desktop.
- Sumber: https://baymard.com/blog/product-page-suggestions-information · https://baymard.com/blog/product-page-suggestions

**C9. Harga per m² ditulis lengkap: angka, satuan, kata "terpasang", wilayah, dan apa saja yang termasuk. "Tanya admin" disertai alasan atau rentang.**
- Gabungan A7, A8, C2. NN/g: kalau harga tidak bisa pasti, rentang saja tidak apa-apa *asal semua komponen biayanya terlihat*.
- Sumber: https://www.nngroup.com/articles/show-prices-for-common-scenarios/ · https://www.nngroup.com/articles/ecommerce-product-pages/

**C10. Data terstruktur: halaman tanpa pembelian langsung memakai "product snippet". Wajib punya salah satu dari `offers`, `review`, atau `aggregateRating`.**
- Google: product snippet untuk halaman produk yang tidak bisa dibeli langsung. Merchant listing untuk halaman yang bisa dibeli. Snippet menerima `Offer` atau `AggregateOffer` (dengan `lowPrice`/`highPrice`). `priceCurrency` disarankan. Halaman merek Atapura saat ini tidak punya `offers`, `review`, `aggregateRating`, maupun `image`, jadi tidak memenuhi syarat cuplikan produk.
- Sumber: https://developers.google.com/search/docs/appearance/structured-data/product-snippet · https://developers.google.com/search/docs/appearance/structured-data/product

### D. Khusus katalog tanpa keranjang / B2B / bahan bangunan

**D1. Tampilkan harga meski penjualan lewat chat atau penawaran.** NN/g: "request a quote" menambah langkah, mendorong orang ke pesaing, dan menurunkan kepercayaan. Gantinya: harga contoh per skenario, rentang, atau kalkulator, sambil tetap menyediakan tombol "ngobrol" untuk kebutuhan khusus. Formulir penawaran yang rinci menambah beban. Lebih baik rentang dengan komponen biaya yang terlihat. Sumber: https://www.nngroup.com/articles/show-price/ · https://www.nngroup.com/articles/show-prices-for-common-scenarios/

**D2. Bahan bangunan dibeli berdasarkan ukuran, bahan, atau syarat teknis yang sulit dijelaskan pembeli.** Baymard (riset Home & Hardware) menyoroti info teknis, perbandingan, dan kebutuhan teknis yang sulit dirumuskan pembeli. Padanannya untuk Atapura: kalkulator luas + "kirim foto atap lewat WA" sebagai jalan pintas. Sumber: https://baymard.com/industries/home-and-hardware-ux · https://baymard.com/research/home-and-hardware

**D3. Kecilkan biaya interaksi jalur WA.** *(inferensi dari NN/g soal beban formulir)* Pesan WA terisi otomatis dengan merek, seri, dan warna yang sedang dilihat. Pembeli tidak perlu mengetik ulang, dan admin langsung tahu konteksnya.

---

## 2. Pengamatan toko & katalog yang dipakai orang Indonesia (internal)

### Depo Bangunan (toko bangunan online milik jaringan gerai)
Dibuka: kategori "Genteng & Atap" + 2 halaman produk (genteng keramik, atap bitumen gelombang).
- **Kartu**: foto, nama HURUF KAPITAL, "Terjual: 0", Special Price + Regular Price (coret), tombol "Keranjang", "Favoritkan". Tanpa satuan harga dan tanpa ukuran di kartu.
- **Daftar**: hanya 5 produk, tetapi filter Warna/Merek/Ukuran + 9 opsi urut + toggle grid/daftar + pilihan 12/24/36 per halaman.
- **Detail**: 1 foto. Harga Rp11.350 **tanpa satuan** (per buah? tidak ditulis). Produk bitumen: "Luas efektif 1,27–1,53 m²" tanpa jelas per lembar, tetapi berat ditulis "6,5 kg/lembar". Tabel spek 2 kolom (SKU, tipe, ukuran, warna, merek, bahan). Catatan "harga berlaku untuk gerai Jabodetabek/Jakarta". Tanpa info garansi atau retur. Breadcrumb hanya "Kembali / Beranda / nama produk". Di beranda sebagian harga disembunyikan ("Sentuh icon (+) pada produk untuk cek harga").
- **Tiru**: harga langsung terlihat. Catatan wilayah berlakunya harga. Tabel spek label–nilai.
- **Jangan**: harga tanpa satuan. Satu foto. "Terjual: 0" (bukti sosial kosong malah merusak). Filter/sort berlebihan untuk 5 produk. Nama huruf kapital. Breadcrumb tanpa kategori. Harga disembunyikan di balik ketukan.

### Mitra10 (toko bangunan online milik jaringan gerai)
Dibuka: halaman pencarian. Daftar hasilnya dirender JavaScript ("0 Produk" untuk plafon PVC), yang terbaca hanya kartu "rekomendasi".
- **Kartu**: foto, nama yang **memuat ukuran/isi** ("Granit 60x60 Cm 1.44M2", "60x120CM/DUS=2.16M2"), harga coret + harga diskon + badge % diskon, rating "5.0" dengan bintang, "N terjual", lapisan "Stok Habis". Sort 7 opsi.
- **Tiru**: isi kemasan atau luas ditulis eksplisit. Status ketersediaan jelas.
- **Jangan**: harga per dus sementara pembeli berpikir per m² (harus menghitung sendiri). Rating "5.0" di semua kartu, termasuk yang "0 terjual", tidak bermakna. Badge diskon di semua kartu jadi bising.

### Tokopedia (marketplace) — halaman tidak bisa dibuka otomatis (timeout)
Hanya dari cuplikan pencarian, jadi pola tampilan kartu tidak diverifikasi.
- Listing atap bitumen/shingle dijual **per pack, roll, atau lembar**, mis. "1 pack 21 lembar" dengan cakupan 3,05 m²/pack, atau roll 10 m × 1 m seharga Rp999.000. Pembeli harus menghitung per m² sendiri. Underlayment dijual terpisah.
- **Pelajaran**: harga "per m² terpasang, sudah termasuk alas, underlayment, aksesori, jasa" milik Atapura adalah pembeda yang perlu ditonjolkan dan dirinci isinya, bukan disembunyikan di teks kecil.

### Maxxiroof (situs merek/distributor atap bitumen)
Dibuka: beranda + halaman produk Maxxiroof.
- **Kartu**: 2 kartu berfoto + nama + tagline + atribut lengkap (panjang, lebar, tebal, tahan angin, isi per bundel, garansi), tombol "PESAN SEKARANG" ke halaman kontak umum. **Tanpa harga.** FAQ menyebut harga biasanya material saja, paket terpasang dan RAB gratis lewat sales.
- **Detail**: 4 foto di atas judul. Spek sebagai daftar label–nilai, termasuk "Luas (m²) per Bundle 3,10" dan ketahanan angin. 9 foto tanpa keterangan. Bagian "komponen sistem" berfoto (flashing, underlayer, starter, nok). WA hanya berupa banner di bagian bawah. Tanpa pemilih warna, tanpa harga.
- **Tiru**: spek kunci yang relevan untuk pemasangan (luas per bundel, berat, tahan angin, kemiringan). Penjelasan komponen sistem dengan gambar.
- **Jangan**: tanpa harga. CTA ke halaman kontak generik. Foto tanpa keterangan. WA hanya di dasar halaman.

### Kanmuri (situs pabrikan genteng keramik)
Dibuka: beranda + halaman produk Espanica.
- **Kartu**: foto + nama, tanpa harga atau atribut. Pembelian diarahkan ke tombol Tokopedia/Shopee di beranda.
- **Detail**: warna **dikelompokkan per kelas** (Natural, Medi, Standard, Exclusive, Unglazed), masing-masing gambar + nama. **Spesifikasi teknis hanya berupa gambar** lembar spek: tidak terbaca Google/AI, sulit dibaca di HP. Galeri "Inspirasi" berisi foto proyek nyata **berlabel produk + warna** (mis. "ESPANICA Natural").
- **Tiru**: label foto penerapan dengan merek + seri + warna. Warna dikelompokkan.
- **Jangan**: spek sebagai gambar. Tanpa harga. CTA beli dilempar ke marketplace.

### Ringkasan pola
| Pola | Siapa | Untuk Atapura |
|---|---|---|
| Harga tampil langsung di kartu | Depo Bangunan, Mitra10 | Pertahankan, ini standar toko online |
| Harga tanpa satuan / per kemasan | Depo Bangunan, Mitra10, Tokopedia | Hindari. Selalu "per m² terpasang" |
| Tanpa harga, CTA "pesan/penawaran" | Maxxiroof, Kanmuri | Hindari (NN/g D1) |
| Bukti sosial palsu/kosong (5.0, terjual 0) | Mitra10, Depo Bangunan | Jangan tampilkan angka sebelum ada data asli |
| Filter/sort berlebihan untuk sedikit produk | Depo Bangunan | Tanpa filter, cukup kelompok lini |
| Spek label–nilai | Depo Bangunan, Maxxiroof | Tiru, satu kolom, bersumber |
| Spek sebagai gambar | Kanmuri | Hindari |
| Foto proyek berlabel produk + warna | Kanmuri | Tiru setelah ada proyek asli |

---

## 3. Rekomendasi untuk Atapura (urut dampak)

1. **Tombol "Hitung biaya dengan {merek}" harus membuka kalkulator dengan merek itu sudah terpilih.** Sekarang selalu mulai di CTI, jadi pengunjung halaman Maxxi melihat hitungan CTI. Ubah: tautan `/?merek=maxxi#hitung` di `src/pages/produk/[slug].astro` (slip ringkasan), dan `src/islands/HitungAkal.tsx` membaca parameter itu untuk nilai awal `merek`/`lini`. Dasar: C2 (perkiraan total dekat CTA, 67%).
2. **Hero halaman merek dibuka dengan foto, bukan teks.** Di HP urutannya: galeri geser (close-up seri → contoh warna terpasang → foto in-scale/penerapan, dengan penanda jumlah foto) → nama → harga/m² terpasang → 2 CTA, semuanya sebelum scroll pertama. `[slug].astro` bagian `.pr-buka` (foto dari aset seri/warna yang sudah ada). Dasar: C1, C2, NN/g A3.
3. **Contoh total biaya + rincian isi harga di bawah angka harga.** Contoh: "Contoh atap 100 m²: ±Rp40–45 juta terpasang", dihitung dari `harga.ts`, bukan angka karangan, dan diberi label estimasi. Ditambah satu baris "Sudah termasuk genteng, alas, underlayment, aksesori, jasa pasang" (rincian sama dengan FAQ beranda). Taruh di slip ringkasan `[slug].astro` dan catatan lini di `produk/index.astro`. Dasar: A7, C2, C9, NN/g D1.
4. **Bilah tab bawah HP mengikuti konteks halaman, tanpa bilah lengket kedua.** Di `/produk/[merek]`, tab "Chat" membawa pesan "Halo Atapura, saya mau tanya {merek}" dan tab "Hitung" menuju kalkulator merek itu (lihat no. 1). `src/components/Header.astro` (prop pesan/merek dari halaman). Dasar: C6, D3.
5. **"Harga tanya admin" (Tegola) diberi alasan dan jalan keluar.** Minimal: "Harga menyesuaikan seri & stok impor, kami hitungkan lewat WhatsApp" + tombol WA terisi otomatis. Lebih baik: minta rentang ke Bang Yusuf, lalu tampilkan rentang. `KartuProduk.astro` (`.kp-tanya`) dan slip `[slug].astro`. Dasar: A8, D1.
6. **Swatch warna mini di kartu** (atap & plafon): 4–5 foto warna bulat kecil + teks kontras "12 warna". Bukan teks pudar "+7". `KartuProduk.astro`, sumber dari `warna` di `produk.ts`. Dasar: A6.
7. **Kirim (push) dan rapikan kartu katalog berfoto yang sudah ada di working tree.** Pastikan: semua kartu satu lini punya foto bergaya sama (sudut, crop, latar seragam 4:3), atribut sejenis di posisi sama (atap: seri · garansi pabrik; plafon: tebal/lebar; rangka: merek profil), nama tidak terpotong, dan teks harga tidak patah aneh di HP 360 px. `KartuProduk.astro`, `produk.ts` (`sampulProduk`). Dasar: A1–A5, A10.
8. **"Produk lain" di halaman merek memakai kartu katalog berfoto + harga** (sudah di working tree, belum live). Cek di HP bahwa kartu tidak mengecil jadi thumbnail mungil. `[slug].astro` bagian `judul-lain`. Dasar: C8 (68%; tanpa foto = diabaikan).
9. **Sinyal kepercayaan di bawah CTA, bukan hanya di bagian Garansi bawah.** Tiga baris pendek: "Garansi pemasangan 5 th", "Garansi pabrik {x} th" (hanya kalau bersumber), "Survey gratis Jabodetabek". Slip `[slug].astro`. Dasar: C7. Patuhi memori "jangan over promise".
10. **Data terstruktur `Product`: tambah `image` dan `offers` (`AggregateOffer`, `lowPrice`/`highPrice`, `priceCurrency: IDR`)** untuk merek yang punya harga. Uji di Rich Results Test. Catatan: harga kita per m² terpasang, jadi tulis deskripsi offer apa adanya dan jangan memaksa format merchant listing. `[slug].astro` (`schema`). Dasar: C10.
11. **Pemilih warna di halaman merek:** swatch berfoto bisa diketuk untuk memperbesar + nama/kode, ada tanda terpilih yang jelas, dan pesan WA ikut membawa warna terpilih. Kalau murah, foto hero ikut berganti. `src/components/Warna.astro` / bagian `judul-warna` di `[slug].astro`. Dasar: C3, D3.
12. **Spesifikasi jadi tabel satu kolom yang seragam untuk semua merek**: label kiri, nilai kanan, garis tipis/selang-seling. Urutan tetap: kemiringan minimal → luas per bundel → berat → tahan angin → garansi pabrik. Baris yang belum bersumber tulis "menunggu dokumen resmi", jangan dikosongkan diam-diam. Jangan pernah sebagai gambar. Slip + kartu seri di `[slug].astro`, data `fakta` di `produk.ts`. Dasar: C4, A5.
13. **Kartu seri menjelaskan harga.** Tulis "rentang harga berlaku untuk semua seri" atau pecah per seri kalau datanya ada. Konfirmasi dulu ke Rama/Bang Yusuf; data sekarang per merek. `[slug].astro` bagian `judul-seri`. Dasar: A5, A7.
14. **`/produk`: chip lompat "Atap bitumen · Plafon · Rangka" di atas, tanpa filter/sort. Kartu Layanan dibedakan gayanya** (ikon/teks, tanpa foto produk dan tanpa harga) supaya tidak dikira produk. `src/pages/produk/index.astro`. Dasar: B1, B2.
15. **Breadcrumb detail memuat level lini** ("Produk & layanan / Atap bitumen / CTI"), dan di HP cukup tampil "‹ Atap bitumen". Ikut sesuaikan `BreadcrumbList` di `schema`. `[slug].astro`. Dasar: B3.

Yang sengaja tidak direkomendasikan: filter/sort (katalog terlalu kecil), badge "Terlaris"/rating (belum ada data asli), bilah CTA lengket kedua (sudah ada tab bar), banyak foto per kartu (beban kuota HP; foto tambahan cukup di detail).
