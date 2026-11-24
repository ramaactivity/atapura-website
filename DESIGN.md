---
name: Atapura
description: Atap yang masuk AKAL. Estimasi jujur yang diletakkan di atas material aslinya.
colors:
  pinus: "#10231e"
  pinus-2: "#183129"
  tinta: "#151a18"
  lumut: "#4c5e55"
  embun: "#f2f4f1"
  putih: "#ffffff"
  garis: "#d9ded8"
  tunas: "#c6f24e"
  tunas-hover: "#d3f76c"
  tunas-pucat: "#eaf8c4"
  senja: "#f2b66b"
  embun-redup: "rgb(242 244 241 / 0.72)"
typography:
  display:
    fontFamily: "Public Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.1rem, 1.6rem + 6.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  display-strong:
    fontFamily: "Public Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.1rem, 1.6rem + 6.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Public Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Public Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 0.8vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "Public Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 2vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.035em"
    fontFeature: "tnum, lnum"
  lead:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.4vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-desktop:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.45
  caption:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  course: "6px"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  course-overlap: "clamp(28px, 4vw, 48px)"
  section: "clamp(56px, 8vw, 112px)"
  wrap-max: "90rem"
  touch-min: "44px"
components:
  button-primary:
    backgroundColor: "{colors.tunas}"
    textColor: "{colors.pinus}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "48px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.tunas-hover}"
    textColor: "{colors.pinus}"
  button-primary-large:
    backgroundColor: "{colors.tunas}"
    textColor: "{colors.pinus}"
    rounded: "{rounded.pill}"
    height: "54px"
    width: "100%"
  button-outline:
    textColor: "{colors.embun}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "48px"
  chip-fact:
    backgroundColor: "rgb(16 35 30 / 0.72)"
    textColor: "{colors.embun}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.95rem"
  chip-contoh:
    backgroundColor: "{colors.tunas-pucat}"
    textColor: "{colors.pinus}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.65rem"
  slip:
    backgroundColor: "{colors.putih}"
    textColor: "{colors.tinta}"
    rounded: "0 0 1.25rem 1.25rem"
    padding: "2.75rem 1.25rem 1.25rem"
  stepper:
    backgroundColor: "{colors.embun}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: "3px"
  stepper-button:
    backgroundColor: "{colors.putih}"
    textColor: "{colors.pinus}"
    rounded: "{rounded.pill}"
    size: "44px"
  segmented:
    backgroundColor: "{colors.embun}"
    textColor: "{colors.lumut}"
    rounded: "{rounded.pill}"
    padding: "3px"
  segmented-selected:
    backgroundColor: "{colors.pinus}"
    textColor: "{colors.embun}"
    rounded: "{rounded.pill}"
    height: "42px"
  slider-thumb:
    backgroundColor: "{colors.tunas}"
    rounded: "{rounded.pill}"
    size: "28px"
  course-light:
    backgroundColor: "{colors.embun}"
    textColor: "{colors.tinta}"
    rounded: "0 0 6px 6px"
  course-dark:
    backgroundColor: "{colors.pinus}"
    textColor: "{colors.embun}"
    rounded: "0 0 6px 6px"
  layer-row:
    rounded: "{rounded.md}"
    padding: "1rem 1rem 1rem 0.75rem"
  layer-row-active:
    backgroundColor: "{colors.putih}"
    rounded: "{rounded.md}"
  floating-wa:
    backgroundColor: "{colors.tunas}"
    textColor: "{colors.pinus}"
    rounded: "{rounded.pill}"
    height: "52px"
---

# Design System: Atapura

## Overview

**Creative North Star: "Slip rincian di atas genteng"**

Atapura terasa seperti sore yang tenang di rumah yang atapnya bisa dipercaya: hangat, dewasa, jelas. Halaman dibangun sebagai estimasi tukang yang jujur, diletakkan langsung di atas material aslinya. Hero memakai foto makro butiran genteng aspal dengan grading cahaya sore, digelapkan Pinus di kiri. Di atasnya duduk "slip rincian" putih: kertas penawaran dengan garis titik-titik penuntun antara nama pos dan angkanya, tepi atasnya terpotong mengikuti kemiringan atap. Kalkulator adalah pahlawannya, bukan tombol "hubungi kami".

Struktur halaman meniru baris genteng: tiap section menimpa section di bawahnya, sudut bawahnya membulat sedikit, dan bayangan lembut jatuh ke baris berikutnya. Latar bergantian antara bidang baca terang (Embun, Putih) untuk harga, tabel, dan tanya-jawab, dan bidang gelap Pinus untuk bukti dan penutup. Satu garis tipis chevron Λ pada kemiringan atap menjadi supergrafis. Kepadatan sedang dan lapang: pembacanya orang dewasa 30 sampai 60 tahun di HP Android kelas menengah yang sedang menimbang pengeluaran puluhan juta rupiah, jadi kejelasan selalu menang atas efek.

Yang ditolak secara visual: pola kontraktor standar (foto rumah stok + kartu ikon "Kenapa memilih kami" + baris statistik), gelap-hitam ala UI AI, glassmorphism penuh, neubrutalism, dan bukti palsu. Slot bukti yang belum ada datanya ditulis jujur sebagai "segera ada", dengan bingkai putus-putus.

### Aturan dasar pemilik (lintas proyek, tetap berlaku)

- Rasa: bersih, modern, lembut. Hindari kaku/"jadul 2010" dan gaya template AI.
- Huruf: sans-serif, tidak pernah serif. Proyek ini memakai Public Sans (pilihan Rama, acuan askmidnight.com); Plus Jakarta Sans, Switzer, dan Uncut Sans sudah ditolak/diganti 2 Nov 2026.
- Komponen: tombol & chip berbentuk pill; kartu rounded dengan bayangan lembut; aksen warna pastel.
- Tidak memakai kontrol bawaan browser: confirm/alert, select, input color, textarea polos. Pakai komponen sendiri + toast.
- Mobile-first: cek tampilan di layar HP; target sentuh minimal 44px.
- Animasi halus satu warna (>= 0,8 dtk), tanpa kilatan warna jenuh.

**Key Characteristics:**
- Estimasi terlihat di layar pertama, termasuk di HP.
- Section bertumpuk seperti baris genteng (overlap + bayangan jatuh ke bawah).
- Hijau pinus, bukan hitam; satu aksen lime (Tunas) yang sangat hemat.
- Dua huruf: Public Sans 500 untuk judul & angka besar, Inter untuk teks; penekanan lewat satu frasa diredupkan.
- Semua angka tabular; rupiah tanpa desimal.
- Semua kontrol custom berbentuk pill, target sentuh minimal 44px.

## Colors

Palet hijau hutan yang tenang dengan latar terang sedikit kehijauan, ditusuk satu lime yang dipakai seperti stabilo.

### Primary
- **Tunas** (lime): satu-satunya aksen. Hanya untuk aksi utama (tombol "Kirim ke WhatsApp", "Hitung estimasi biaya", tombol WA melayang), jempol slider, garis chevron di hero (opasitas 55%), nomor lapis yang aktif, sorotan seleksi teks, cincin fokus, dan satu kata di atas latar gelap ("akal." di hero HP). Teks di atasnya selalu Pinus.
- **Tunas hover**: Tunas yang sedikit lebih terang, hanya untuk hover tombol utama.
- **Tunas pucat**: latar chip penanda di bidang terang (penanda "contoh" pada harga uji).

### Neutral
- **Pinus**: latar bidang gelap (hero, AKAL, footer), isi slider, segmen merek terpilih, nomor lapis aktif. Juga warna `theme-color` browser dan latar `html`.
- **Pinus 2**: bidang gelap kedua, sedikit lebih terang, untuk course penutup supaya dua bidang gelap tetap terbaca sebagai baris yang berbeda.
- **Tinta**: teks utama di bidang terang.
- **Lumut**: teks sekunder di bidang terang (isi tabel, keterangan, label hasil), bingkai putus-putus slot bukti.
- **Embun**: latar baca utama (netral kehijauan, bukan krem); juga teks di atas Pinus dan dasar stepper/segmen.
- **Embun redup** (Embun 72%): teks sekunder di atas Pinus, diturunkan dari Embun, bukan abu netral.
- **Putih**: slip rincian, tabel, course putih, tombol stepper, baris lapis aktif.
- **Garis**: semua garis 1px di bidang terang, track slider, titik penuntun rincian.

### Tertiary
- **Senja** (cahaya sore): hanya sebagai grading foto. Dipakai di gradasi radial pojok kanan atas hero (34%). Bukan warna UI.

### Named Rules
**The Satu Tunas Rule.** Tunas tidak pernah jadi teks di atas latar terang (kontrasnya gagal), dan paling banyak satu kata Tunas per layar, hanya di atas Pinus atau foto. Selebihnya Tunas hanya untuk aksi utama.

**The Pinus Bukan Hitam Rule.** Bidang gelap selalu Pinus atau Pinus 2. Hitam murni hanya boleh muncul di dalam bayangan.

**The Teks Turunan Rule.** Teks sekunder di atas gelap memakai Embun dengan opasitas (72% untuk isi, 60% untuk baris kaki, 14 sampai 16% untuk garis), tidak pernah abu netral baru.

## Typography

**Display Font:** Public Sans variable (USWDS, SIL OFL 1.1, subset Latin, self-host `/public/fonts/PublicSans-Variable-latin.woff2`, 27 KB), wght 100–900, tanpa italic. Token `--font-merek`. Dipakai untuk logo, h1–h3, dan teks besar yang bukan elemen judul (daftar selektor di `global.css`).
**Body Font:** Inter variable (rsms, SIL OFL 1.1, self-host `/public/fonts/Inter-Variable-latin.woff2`, 47 KB). Token `--font-sans` (bawaan `html`). Teks isi, lead, label, tombol, harga kecil, remah. Ritme ala Apple: baris 1,5, tracking -0,011 em (DECISIONS 046, Rama 18 Nov 2026: "font besar dan utama tetap ciri khas Atapura, teks kecil boleh font lain yang lebih enak dibaca", sama di semua perangkat).

**Larangan:** SF Pro tidak boleh dipasang sebagai font web (lisensi Apple: hanya untuk mock-up aplikasi di platform Apple, dilarang untuk "website content" dan embed). Jangan menambah font ketiga.

**Character:** Gaya askmidnight.com: judul bobot 500 dengan tracking -0.04em, isi 400, label/nama 500. Tanpa italic; penekanan bagian kalimat lewat warna diredupkan (`.miring` = opacity 0.55), atau Tunas untuk "akal." di hero HP. Angka di kolom harga tabular; angka besar kalkulator proporsional dengan "Rp" & satuan mengecil.

### Hierarchy
Diperbarui 23 Nov 2026 (DECISIONS 076) mengikuti situs yang tayang.
- **Display** (Public Sans 500, tracking -0.04em, line-height 1): judul hero beranda `clamp(2.75rem, 0.9rem + 3.6vw, 5rem)` (±59 px di 1230 px, 44 px di HP), dua baris, baris kedua diredupkan. Judul halaman dalam `clamp(2.25rem, …, 3.75rem)`. Judul penutup beranda `clamp(2.25rem, 0.9rem + 3vw, 4rem)`. Tidak ada judul bagian yang lebih besar dari judul hero (DECISIONS 085).
- **Headline** (Public Sans 500, tracking -0.035em, line-height 1.08, maks 20ch): judul bagian beranda `clamp(1.9rem, 0.8rem + 2.1vw, 3rem)` (±39 px di 1230 px; rasio ±1,5 terhadap hero, mengikuti referensi Rama). HP: `--hp-t1` (26 px). Pengantar (`.lead`, sub hero) `--fs-18`, Lumut, baris 1,55, maks 44ch.
- **Title** (Public Sans 500, 1.15–1.35rem): judul kartu, baris daftar, nama merek. HP: `--hp-t2`–`--hp-t4`.
- **Teks kecil–sedang = token** di `global.css`: `--fs-13` label & keterangan (lantai), `--fs-14` catatan/kaki, `--fs-15` isi ringkas & kartu, `--fs-16` isi, `--fs-17` isi baca & label kontrol, `--fs-18` pengantar kecil. Jangan menulis rem lepas di bawah 1.15rem; pakai token.
- **Isi**: HP 15–16 px (register ringkas, selera Rama dari Ops), laptop 16–18 px; jawaban tanya-jawab maks 62ch.
- **Angka besar** (Public Sans 500, proporsional): estimasi di slip; "Rp" dan satuan mengecil dengan `max(var(--fs-13), …em)` supaya tidak pernah di bawah 13 px.
- Pengecualian lantai 13 px yang disengaja: label bilah tab bawah HP (ukuran native iOS ±10 px) dan label di dalam peta SVG.

### Named Rules
**The Satu Frasa Rule.** Paling banyak satu frasa diredupkan per judul; tidak pernah untuk paragraf.

**The Redup Sebagai Aksen Rule.** Penekanan judul datang dari meredupkan sebagian kalimat (opacity 0.55) di judul berbobot 500 — bukan italic, bukan warna-warni, bukan mengganti font di tengah judul.

**The Dua Huruf Rule.** Besar & utama = Public Sans; kecil & dibaca = Inter. Teks besar baru (angka sorotan, judul kartu besar) yang bukan h1–h3 wajib ditambahkan ke daftar `--font-merek` di `global.css`.

**The Angka Tabular Rule.** Setiap angka yang dibandingkan atau berubah (estimasi, luas, harga di tabel, durasi) memakai `tabular-nums lining-nums`. Rupiah ditulis tanpa desimal.

**The Huruf Pilar Rule.** (Diganti DECISIONS 088.) Nilai AKAL ditulis sebagai nama besar di kartu (Public Sans 500, clamp 2.5–3.5rem): huruf depan warna penuh, sisa kata diredupkan 58% supaya A-K-A-L terbaca berurutan.

## Layout

Lebar penuh dengan gutter cair (20px sampai 72px), kontainer maks 90rem, dan konten sejajar judul; tidak ada kolom sempit di tengah. Breakpoint yang dipakai: 48rem (tabel jadi tabel, footer 3 kolom), 60rem (section dua kolom), 64rem (navigasi tampil, hero dua kolom, badan 18px).

**Tata baris genteng.** Tiap section adalah satu "course": padding atas dan bawah = overlap (28px sampai 48px) + jarak section (56px sampai 112px), margin bawah negatif sebesar overlap, sehingga course di bawahnya terselip di bawah course di atasnya. Urutan tumpukan menurun dari atas ke bawah (z-index 7 sampai 1). Urutan beranda sejak DECISIONS 086/088 (pola referensi: layanan → nilai → detail kualitas → proses → merek): hero → logo & angka (Putih) → Layanan (Embun) → AKAL (Putih) → Lima lapis (Embun) → Cara kerja (Pinus) → Pilih merek (Embun) → Kalkulator (Pinus) → Area (Putih) → Tanya jawab (Embun) → penutup Pinus 2 → footer. Terang dan gelap selalu bergantian.

**Hero.** Satu ajakan saja (Rama, 23 Nov 2026): label kecil (di dalam h1 untuk SEO; chip kaca di desktop, garis Tunas di HP) → judul dua baris → kalimat pengantar (desktop saja) → satu tombol "Hitung estimasi biaya" → tiga baris berikon tentang layanan, bukan janji (Material lengkap, Jasa pasang tuntas, Bisa sekalian rangka). Janji seperti survey gratis, garansi, dan foto per lapis tidak ditaruh di hero karena bisa berbalik (Rama, 23 Nov 2026). Kartu contoh Hitung AKAL hanya informasi, bukan tautan. Desktop (≥64rem): tinggi `calc(100svh - 5.5rem)` supaya deret logo merek mengintip di layar pertama; tabir terang dari kiri (95% → 80% di 40% → transparan 66%).

**Section dua kolom.** Mulai 60rem, judul di kiri dan isi di kanan dengan jarak kolom 4rem; di tanya-jawab judulnya menempel (sticky). Di bawah 60rem semua satu kolom `minmax(0, 1fr)`.

**Diagram lapisan di HP.** Di bawah 60rem gambar penampang menempel di atas (sticky, 38svh) dengan latar Embun, daftar lapis bergulir di bawahnya.

**Tabel di HP.** Di bawah 48rem tabel berubah jadi tumpukan kartu satu baris per merek (border Garis, radius 1rem), kepala tabel disembunyikan secara visual tetapi tetap terbaca pembaca layar.

### Named Rules
**The Jawaban Dulu Rule.** Estimasi dan tombol WhatsApp harus terlihat tanpa scroll di HP. Tombol WA melayang muncul hanya setelah hero lewat, dan hanya di bawah 64rem.

## Elevation & Depth

Hibrida: kedalaman utama datang dari tumpukan course (bidang yang menimpa bidang), dibantu bayangan lembut berwarna Pinus yang selalu jatuh ke bawah. Kertas (slip, kartu transfer) mendapat bayangan paling dalam karena ia satu-satunya benda yang "diletakkan" di atas material.

### Shadow Vocabulary
- **Jatuhan course** (`box-shadow: 0 22px 32px -22px rgb(16 35 30 / 0.55)`): tepi bawah tiap section.
- **Slip di atas genteng** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.6) inset, 0 30px 60px -24px rgb(0 0 0 / 0.55), 0 8px 18px -10px rgb(0 0 0 / 0.3)`): kalkulator hero.
- **Kertas kecil** (`box-shadow: 0 14px 30px -14px rgb(0 0 0 / 0.6)`): kartu rekening tujuan di atas Pinus.
- **Pendar Tunas** (`box-shadow: 0 6px 18px -8px rgb(198 242 78 / 0.6)`): tombol utama.
- **Tombol melayang** (`box-shadow: 0 12px 28px -10px rgb(16 35 30 / 0.6)`): tombol WA melayang.
- **Kontrol terangkat** (`0 1px 2px rgb(16 35 30 / 0.12)` tombol stepper; `0 2px 6px -2px rgb(16 35 30 / 0.5)` segmen terpilih; `0 4px 10px -3px rgb(16 35 30 / 0.45)` jempol slider).
- **Tepi sticky** (`box-shadow: 0 16px 16px -16px rgb(16 35 30 / 0.25)`): diagram lapisan yang menempel di HP.

### Named Rules
**The Bayangan Jatuh ke Bawah Rule.** Semua bayangan punya offset Y positif dan spread negatif: cahaya dari atas, seperti matahari di atap. Tidak ada bayangan keras tanpa blur, tidak ada glow ke segala arah selain pendar Tunas di tombol utama.

**The Blur Hemat Rule.** `backdrop-filter: blur(8px)` hanya untuk chip fakta di hero, dan hanya mulai 64rem. Di HP chip memakai Pinus 72% tanpa blur.

## Shapes

Tiga keluarga bentuk. **Pill (999px)** untuk semua yang bisa disentuh: tombol, chip, stepper, segmen, slider, nomor lapis. **Bulat lembut** untuk wadah: slip bawah 1.25rem, bingkai tabel 1.25rem, slot bukti 1.5rem, baris lapis dan kartu tabel HP 1rem, kartu transfer 0.75rem. **Course 6px**: sudut bawah section hanya sedikit membulat supaya terbaca sebagai lembaran genteng, bukan kartu.

Siluet khas: tepi atas slip dipotong segitiga landai (`clip-path: polygon(0 28px, 50% 0, 100% 28px, 100% 100%, 0 100%)`), dan satu garis chevron Λ 1px (Tunas 55%, `vector-effect: non-scaling-stroke`) melintang lebar di belakangnya pada kemiringan yang sama. Garis 1px dipakai untuk pemisah (Garis di terang, Embun 14% di gelap); garis putus-putus Lumut khusus untuk slot bukti yang belum ada; garis titik-titik khusus untuk penuntun rincian di slip.

### Named Rules
**The Satu Chevron Rule.** Satu chevron Λ per layar, selalu tipis 1px, selalu pada kemiringan atap yang sama dengan potongan slip.

## Lapisan desktop (gerak & interaksi)

Aktif hanya bila `(min-width: 64rem) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)` — kode di `src/styles/desktop.css` + skrip pegas di `src/pages/index.astro`. HP dan reduced-motion mendapat halaman statis yang sama tanpa aturan ini (HP tetap ringan).

- **Pembukaan hero (sekali):** judul naik dari balik garis per baris (1100 ms, jeda 120 ms), sub & chip muncul 1000 ms, slip naik 1200 ms, garis atap tergambar dari puncak 1600 ms. Kurva `--ease-film` cubic-bezier(0.16, 1, 0.3, 1).
- **Cahaya senja ikut kursor:** lingkaran radial Senja 26% + parallax foto ±8 px, digerakkan pegas (lerp 0,07 per frame), berhenti sendiri saat diam.
- **Baris tertindih (scroll-driven):** bagian yang keluar layar mengecil ke 0,94 dan diredupkan 55% (`animation-timeline: view()`, rentang exit) — bagian berikutnya tampak menindih seperti baris genteng. Tidak ada scroll-jacking/sticky.
- **Lapisan terurai:** kelima lapis mulai tertumpuk lalu terurai mengikuti scroll (`view-timeline --lapisan`, properti `translate` agar tidak bentrok dengan angkatan lapis aktif yang memakai `transform`).
- **Kata miring hidup:** `.miring` di judul section bergerak dari ital 0 ke 11 saat masuk layar.
- **Hover:** baris AKAL disapu latar (clip-path 520 ms) + huruf bergeser & jadi miring Tunas; baris tabel merek & FAQ bergeser halus; tombol Tunas terangkat 2 px.

**The Timeline Terpisah Rule.** `animation-timeline` dan `animation-range` selalu ditulis di aturan terpisah (`:where(html) …`) dari shorthand `animation`. Lightning CSS menggabungkannya menjadi `animation: … view()` yang ditolak Chrome, dan efeknya hilang diam-diam.

## Components

### Buttons
Tegas, ringan, bulat penuh.
- **Shape:** pill (999px), tinggi minimal 48px (54px untuk tombol kirim di slip, lebar penuh).
- **Primary:** Tunas dengan teks Pinus, berat 650, 1rem, padding samping 1.4rem, pendar Tunas di bawahnya.
- **Hover / Focus / Active:** hover ke Tunas hover; tekan mengecil ke 0.97 (160ms, ease-out `cubic-bezier(0.16, 1, 0.3, 1)`); fokus = cincin Tunas 2px offset 3px (cincin Pinus di dalam bidang terang).
- **Outline:** garis 1px warna teks (`currentColor`) di atas Pinus. Versi header: garis Embun 35%, tinggi 44px, hover latar Embun 10%.
- **Saat ditekan untuk WA:** label tombol kirim berganti jadi status "Membuka WhatsApp…".

### Chips
- **Chip fakta (di atas foto):** pill, Pinus 72% + garis Embun 16%, teks Embun 0.9rem berat 550; blur 8px hanya di desktop. Isinya fakta yang benar sekarang saja.
- **Chip penanda "contoh":** pill kecil Tunas pucat dengan teks Pinus 0.75rem berat 650, menempel pada angka yang belum resmi. Hilang begitu data asli masuk.

### Cards / Containers
- **Slip rincian:** Putih, teks Tinta, tepi atas terpotong chevron, sudut bawah 1.25rem, bayangan slip. Isinya berurutan: judul + chip contoh, angka hasil, kontrol luas, kontrol merek, rincian bertitik, tombol kirim, kaki kecil.
- **Course:** lihat Layout; bukan kartu.
- **Kartu transfer:** Putih di atas Pinus, radius 0.75rem, label kecil Lumut + nama PT berat 720.
- **Slot bukti kosong:** tanpa latar, garis putus-putus Lumut, radius 1.5rem, padding 1.75rem, teks Lumut menjelaskan apa yang akan datang.
- **Tabel merek:** bingkai Garis radius 1.25rem, kepala kolom Embun 0.85rem berat 650 Lumut dan menempel, kolom pertama menempel saat digeser; nama merek 720 1.15rem; sel 1.1rem × 1.25rem.

### Inputs / Fields
Semua custom, tidak ada kontrol native.
- **Stepper luas:** wadah pill Embun dengan garis Garis dan padding 3px; tombol −/+ bulat Putih 44px dengan ikon garis 1.8; angka di tengah 720 1.15rem tabular dengan satuan "m²" Lumut. Fokus: garis wadah jadi Pinus. Nonaktif: opasitas 35%.
- **Slider luas:** tinggi area sentuh 40px, track 6px Garis, isi Pinus, jempol Tunas 28px dengan cincin Pinus 3px; jempol membesar 1.12 saat ditekan.
- **Segmen merek:** tiga kolom sama dalam wadah pill Embun; opsi 42px berat 600 Lumut; terpilih = latar Pinus, teks Embun, bayangan kecil (220ms).

### Navigation
- Header transparan di atas hero, teks Embun. Wordmark "Atapura" 760 1.3rem tracking -0.035em (sementara, sampai logo resmi ada).
- Menu desktop: Beranda · Hitung biaya · Produk & layanan · Cara kerja · Garansi · Artikel · Untuk perusahaan (tautan teks, tanpa pill) + satu pill "Chat WhatsApp". Halaman aktif = teks penuh 500 + titik 4px di bawahnya (`aria-current`). 1024–1199 px: jarak 1rem, huruf 14 px. Tampil mulai 64rem; HP memakai tombol Menu + bilah tab bawah.
- Footer Pinus: tiga kolom mulai 48rem, judul kolom 650, isi Embun redup, baris kaki 0.8rem Embun 60% dengan garis atas Embun 14%.

### Rincian bertitik (signature)
Daftar `dt`/`dd`: nama pos Lumut di kiri, angka berat 600 di kanan, dihubungkan titik-titik 1px Garis berjarak 6px, persis penawaran tukang. Baris ini menghitung ulang saat luas atau merek berubah; angka total bergulir ke nilai baru (520ms, ease-out kuartik) dan langsung lompat bila pengguna meminta gerak dikurangi.

### Penampang lima lapis (signature)
Diagram SVG lapisan atap + daftar tombol bernomor. Memilih satu lapis mengangkat lapis itu 22px dan memberinya garis Tunas, lapis lain meredup ke 15%. Nomor lapis: lingkaran 2.25rem bergaris Garis; aktif = Pinus dengan angka Tunas; baris aktif berlatar Putih radius 1rem.

### Kartu nilai AKAL (bagian ke-4 beranda)
Acuan Biztop (kartu putih · lime · hijau tua, tombol di takik) + Redow (nomor 01–04) + Rent H&U (tepi atas atap). Empat kartu Embun · Tunas · Pinus · Embun, radius 1.5rem, tepi atas atap pelana landai (naik 1.1rem, sudut & puncak membulat lewat `clip-path: shape()`, cadangan `polygon`). Isi: nomor kecil kanan atas, nama nilai besar, garis tipis, satu kalimat nilai (16px, maks 30ch), tombol pill di takik kiri bawah (lengkung ke dalam selatar bagian = Putih). Laptop ≥75rem 4 kolom, 48–75rem 2×2, HP digeser ke samping. Copy = nilai/komitmen umum ("kami"), bukan studi kasus dan bukan harga (Rama, 24 Nov 2026).

**Kepala bagian `.judul-dua`.** Judul dua baris (frasa redup turun ke baris kedua, maks 32ch) + pengantar kanan menempel ke tepi kanan (maks 32ch, `text-wrap: balance`). Dipakai Layanan dan AKAL; bagian lain menyusul saat dikerjakan.

**Tanpa tombol melayang di laptop.** Pill "Berapa biaya atap Anda? Hitung estimasi" dihapus (DECISIONS 088): menutupi konten dan menonjolkan hitung sendiri. Ajakan ada di header, hero, pita perusahaan, dan penutup; HP memakai bilah tab bawah.

### Kartu layanan (bagian ke-3 beranda)
Acuan Forma Casa (kartu kategori) + Logamax (pita gelap). Empat kartu putih radius 1.25rem, padding 8px, bayangan lembut; foto 4:3 radius 0.85rem di atas, judul Public Sans 500 1.25rem, satu–dua kalimat Lumut 15px, tombol panah bulat 2.5rem bergaris di kanan bawah (hover: Pinus dengan panah Tunas, kartu terangkat 3px). Seluruh kartu menaut ke panduan yang relevan. Laptop 4 kolom, tablet 2×2, HP digeser ke samping (78%). Di bawahnya pita Pinus "Untuk perusahaan" dengan satu pill Tunas + tautan.

### Deret merek + baris angka (di bawah hero)
Menggantikan bento bukti (DECISIONS 085). Baris atas: label "Merek yang kami pasang" + lima logo satu warna Pinus (opasitas 78%, penuh saat disorot), masing-masing menaut ke `/produk/<merek>`. Tinggi logo diseimbangkan menurut rasio lebarnya (`1 / √(rasio/3)` em) supaya logo lebar tidak terlihat lebih besar. File dari `tools/logo/satu-warna.py` (bagian putih di logo berwarna dilubangi; logo putih Javabitumen dipakai bentuk aslinya). Garis 1px, lalu tiga angka fakta (13 kota, ±4–5 hari kerja untuk 120 m², harga terpasang mulai Rp…rb/m² dari data Ops) dengan garis pemisah tegak di desktop; HP 2 + 1 lebar penuh dan logo dua baris di tengah. Tidak mengulang isi hero/logo.

### Garis denah
`.denah` (global.css, ≥64rem): garis 1px Lumut 20% selebar layar di atas/bawah konten, garis tegak 1.5rem di luar tepi konten, tanda "+" 13px di keempat sudut. Hanya untuk bidang terang yang berisi data (Merek, Rapor). Lapisan punya bahasa gambar teknik sendiri.

### Kartu contoh biaya terpasang (hero desktop)
Label "Contoh biaya terpasang": jangan memakai istilah "Hitung AKAL" di hero, pengunjung baru belum tahu artinya (Rama, 23 Nov 2026). Slip putih kecil bertepi chevron di kanan bawah hero, tiga contoh dari `estimasiPublik` bergantian 12 dtk (fade + blur 4px). Bukan tautan (hero cukup satu ajakan). Diam di contoh pertama bila gerak dikurangi.

### Wordmark footer & logo klien
Footer ditutup logo resmi selebar konten (komponen Logo, Embun). Deretan "Dipercaya oleh" (LogoKlien) hanya tampil bila `src/data/klien.ts` berisi logo asli; logo abu 60%, ≥5 logo berjalan 40 dtk.

### Tombol WA melayang
Pill Tunas 52px di kanan bawah (16px + safe area), hanya di bawah 64rem, muncul setelah hero lewat dengan naik 24px + fade (400 sampai 500ms ease-out).

## Do's and Don'ts

### Do:
- **Do** letakkan estimasi (slip rincian) di layar pertama; angka harus terlihat tanpa scroll di HP.
- **Do** susun section sebagai course yang menimpa course berikutnya (overlap `clamp(28px, 4vw, 48px)`, radius bawah 6px, bayangan jatuh ke bawah) dan bergantian terang/gelap.
- **Do** taruh harga, tabel, dan tanya-jawab di bidang terang (Embun/Putih) dengan teks Tinta; Pinus untuk bukti dan penutup.
- **Do** pakai Tunas hanya untuk aksi utama dan satu kata di atas gelap, selalu dengan teks Pinus di atasnya.
- **Do** tekankan judul lewat satu frasa diredupkan (opacity 0.55) di judul berbobot 500; tanpa italic, tanpa bobot di atas 500.
- **Do** pakai `tabular-nums` untuk setiap angka; rupiah tanpa desimal.
- **Do** beri setiap kontrol target sentuh minimal 44px dan bentuk pill.
- **Do** tandai angka uji dengan chip "contoh" dan slot bukti kosong dengan bingkai putus-putus yang jujur.
- **Do** hormati `prefers-reduced-motion` (transisi 0.01ms, angka langsung lompat, scroll biasa).
- **Do** animasikan hanya `transform` dan `opacity` untuk gerak yang besar.

### Don't:
- **Don't** pakai pola kontraktor standar: foto rumah stok + kartu ikon "Kenapa memilih kami" + baris statistik.
- **Don't** pakai Tunas sebagai teks di atas Embun atau Putih.
- **Don't** pakai hitam atau abu netral untuk bidang gelap; gelapnya Pinus.
- **Don't** pakai Senja sebagai warna UI; ia hanya cahaya di foto.
- **Don't** pakai font serif atau font kedua.
- **Don't** pakai kontrol native browser (select, checkbox, range, number, date, textarea polos, alert/confirm).
- **Don't** pasang blur di HP atau glassmorphism penuh.
- **Don't** pakai lebih dari satu chevron Λ per layar.
- **Don't** pakai bayangan keras tanpa blur atau bayangan yang tidak jatuh ke bawah.
- **Don't** tampilkan foto, proyek, review, atau angka yang belum ada; jangan pernah memalsukan bukti.
- **Don't** pakai kilatan warna jenuh bergantian atau efek fade-slide di setiap section.
