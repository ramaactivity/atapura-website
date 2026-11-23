# Audit menyeluruh website Atapura — 23 November 2026

Sumber: situs live https://atapura.vercel.app (HP 390 px, tablet 768 px, laptop 1230 px), PageSpeed Insights resmi,
simulasi HP lambat (Playwright + CDP throttling), crawl 88 URL internal, baca kode `src/`. Skill: design-review.
Tidak ada file situs yang diubah dalam audit ini.

POV yang dipakai: ahli web & digital marketing, calon customer (pemilik rumah, villa/kafe, procurement perusahaan,
pengunjung skeptis), owner, mesin pencari & AI (SEO/GEO), desainer (UI/UX, layout, tipografi), web developer,
pengguna desktop vs HP (HP menengah & HP murah sinyal lemot).

---

## 0. Ringkasan satu paragraf

Fondasinya kuat: cepat (HP 93–100, desktop 100), identitas visual khas dan tidak terasa template, harga terbuka,
kalkulator jalan, artikel lebih rapi dari pesaing teratas (dokteratap). Masalah terbesar **bukan di desain**, tapi:
(1) situs belum bisa ditemukan sama sekali — domain atapura.com belum terdaftar dan situs masih dikunci noindex;
(2) beranda terlalu panjang (±25 layar HP, ±1.900 kata, 15 bagian) dan menjelaskan hal yang sama 3–4 kali,
sementara halaman khusus (garansi, cara kerja, tentang, kontak, perusahaan) belum ada; (3) bukti kepercayaan
masih tipis (belum ada proyek, ulasan, Google Business Profile, alamat, identitas PT); (4) ada data yang saling
bertentangan dan ikut terbaca Google/AI.

---

## 1. Yang sudah bagus (pertahankan)

- **Kecepatan.** PageSpeed HP: beranda 93, /produk/maxxi 100, /panduan 97; desktop 100 semua. LCP HP 1,7–2,6 dtk,
  CLS ±0, TBT 0. Muatan awal beranda tanpa intro 199 KB, JS 0 KB. HP menengah 4G: terbaca dalam 0,7 dtk;
  HP murah 3G lemot: 1,9 dtk.
- **Harga terbuka + kalkulator** dengan rincian "sudah termasuk / belum termasuk" dan tanggal berlaku. Ini pembeda
  nyata dari pesaing yang menyembunyikan harga.
- **Satu sumber data** (bisnis.ts/harga.ts/ops.json) → harga & garansi konsisten di produk, artikel, area.
- **Identitas visual khas**: hijau Pinus + aksen lime Tunas, judul Public Sans dengan potongan kalimat diredupkan,
  tombol pill, kartu membulat. Hero desktop komposisinya kuat (teks di langit kiri, kartu contoh hitungan kanan bawah).
  HP terasa aplikasi (bilah tab bawah, header kaca).
- **Jujur**: foto AI diberi label "Ilustrasi", Rapor Proyek tidak dikarang, "kapan kami menyarankan pilihan lain".
- **SEO/GEO di level halaman**: jawaban singkat di atas, tabel harga bertanggal, sumber dicantumkan, JSON-LD bersih
  (Article, FAQPage, Breadcrumb, Service), llms.txt 13,8 KB dari data, 22 artikel + 15 area + 3 artikel Inggris,
  tidak ada halaman yatim, 404 asli, HTTPS + HSTS. Artikel harga Atapura lebih baik dari halaman dokteratap yang
  ranking (608 kata, tanpa tabel, penulis "administrator", terbit 2020).
- **Lead ke Ops** (nama & WA opsional) dan penghitung kunjungan tanpa cookie sudah jalan.
- Fokus keyboard terlihat (cincin lime), `prefers-reduced-motion` dihormati, tidak ada luberan horizontal, 0 error JS,
  88 URL internal semua 200.

---

## 2. P0 — wajib dibereskan dulu (memblokir hasil)

| # | Temuan | Bukti | Perbaikan |
|---|---|---|---|
| 1 | **atapura.com belum terdaftar.** Canonical, sitemap, og:image, JSON-LD, llms.txt semua menunjuk ke domain mati. Preview link di WA/sosmed rusak hari ini. Domain bisa diambil orang. | `whois atapura.com` → "No match" (23 Nov); `astro.config.mjs:9` | Rama cek ulang pembelian di registrar (catatan 21 Nov bilang sudah beli, tapi belum tercatat). Lalu sambung ke Vercel + alihkan atapura.vercel.app → atapura.com. |
| 2 | **Situs dikunci dari Google** (mode konsep: robots Disallow + noindex di 52 halaman). Skor SEO Lighthouse 69 karena ini. Setiap hari terkunci = umur domain & data ranking hilang. | `bisnis.ts:15`, `robots.txt.ts` | Checklist hari-H: `konsep: false` → robots `Allow` + baris Sitemap → `/internal` & `/branding` keluar sitemap + `Disallow: /internal` → Search Console (properti domain via DNS) + kirim sitemap → Bing Webmaster (impor dari GSC) + IndexNow → minta index beranda, artikel harga, 5 halaman merek → uji Rich Results 3 URL → cek preview og:image. |
| 3 | **Data bertentangan yang dibaca Google & AI.** FAQ beranda: "kemiringan minimal yang kami pasang 5 derajat" vs bagian merek & artikel: Maxxi 15°, Tegola 14°, CTI 10°. FAQ yang sama: "Atapura memasang tiga merek" padahal 5. Keduanya ikut masuk JSON-LD FAQPage → AI bisa mengutip angka yang salah. | `src/pages/index.astro:49`, `:57` | Ganti teks FAQ; ambil angka kemiringan & daftar merek dari data (bukan diketik manual) supaya tidak melenceng lagi. Samakan juga lama kerja: FAQ "100–120 m² ±4 hari" vs kalkulator "120 m² 4–5 hari". |
| 4 | **Belum ada Google Business Profile.** Untuk "jasa pasang atap bitumen [kota]" peta lokal muncul di atas hasil biasa. | — | Profil usaha area layanan (kategori Roofing contractor, 13 area, alamat disembunyikan). Nama/telepon persis sama dengan `bisnis.ts`. |
| 5 | **Tidak ada halaman "siapa Atapura".** /tentang, /kontak, /garansi, /cara-kerja semua 404. Artikel ditulis "Tim Atapura" tanpa orang. AI & Google butuh entitas yang jelas (E-E-A-T). | crawl | Buat /tentang (nama PT + status "dalam proses pendirian" apa adanya, Ramadan Saputra sesuai DECISIONS 027, pengalaman tim pemasang, area, kontak). Penulis artikel → `Person` dengan halaman penulis. |
| 6 | **Animasi pembuka ±3,3 detik** menutup layar di kunjungan pertama — persis kunjungan dari Google/iklan. HP menengah: konten baru terbaca 4,4 dtk (tanpa intro 0,7 dtk). Bertentangan dengan janji "super ringan di HP" dan berisiko pengunjung balik ke Google. | `src/components/Bumper.astro`; uji throttling | Hapus dari beranda, atau tampilkan hanya untuk pengunjung yang datang langsung (bukan dari Google/iklan) dan maksimal ±1 dtk. Rekomendasi: hapus. |

---

## 3. Beranda — terlalu panjang? Perlu dipecah?

**Jawaban: ya, terlalu panjang, dan perlu dipecah.**

Ukuran sekarang: **±25 layar HP (20.758 px), ±27 layar laptop, ±1.900 kata, 15 bagian.** Untuk halaman jasa lokal
yang tujuannya "hitung → chat WA", patokan sehat ±10–14 layar HP dan ±900–1.100 kata. Kalkulator (inti bisnis) baru
muncul di layar ke-3,5 HP.

### Pengulangan yang ditemukan
- **Cara bayar dijelaskan 4×**: kalkulator, Cara kerja ("uang baru berpindah di tahap tiga"), Garansi ("Cara pembayaran"), FAQ.
- **"Difoto tiap lapis" 4×**: AKAL "Kualitas", Hujan, Lapisan (5 lapis), Cara kerja tahap 4.
- **Garansi 5 tahun 4×**: bukti, AKAL, bagian Garansi, FAQ.
- **Luar Jabodetabek 4×**: "Kapan kami menyarankan pilihan lain", Area, FAQ, kalkulator.
- **13 kota 2×**: bukti + Area.

### Bagian yang buntu / lemah
- Isi beranda **tidak menautkan sekali pun ke /produk atau halaman merek** (cek otomatis: 0 tautan). Lima merek dibahas,
  tapi pengunjung dan Google tidak diarahkan ke halamannya. Kartu "Pasang atap baru", "Villa", "Kafe" terlihat seperti
  kartu yang bisa diklik tapi tidak ke mana-mana.
- **Rapor Proyek** = template kosong (strip "—", kotak arsir) setinggi 1,3 layar. Jujur, tapi di beranda justru
  memamerkan "belum ada bukti".
- **Warna** di beranda pakai tekstur umum ("Hitam arang", "Cokelat kayu"), padahal halaman merek sudah punya contoh
  warna asli dari brosur. Beranda lebih lemah dari halaman dalam.
- **Hujan** = foto besar + 3 poin yang sama dengan bagian Lapisan.
- **Peta area skematik** di HP: label 9–11 px, dekoratif, tidak membantu.
- **AKAL di laptop** dibuat "nempel sambil digulir" sepanjang 4,4 layar untuk 4 kartu; pill "Hitung estimasi" melayang
  menimpa garis progresnya.

### Usulan susunan beranda baru (15 → 10 bagian, target ±12 layar HP, ±1.000 kata)

| Urut | Bagian | Nasib | Keterangan |
|---|---|---|---|
| 1 | Hero | Tetap | Tanpa animasi pembuka. |
| 2 | 4 fakta (merek, kota, survey, garansi) | Tetap | Tiap fakta jadi tautan ke halamannya. |
| 3 | **Hitung AKAL** | **Naik** dari urutan 6 | Inti konversi; tepat setelah fakta. |
| 4 | Layanan (bento) | Tetap, diringkas | Tiap kartu menaut: rumah baru/ganti atap → /produk, bocor → /layanan/perbaikan-atap-bocor, kafe & villa → artikel persona, perusahaan → /perusahaan. |
| 5 | AKAL 4 janji | Tetap, dipadatkan | Kartu biasa (bukan nempel-gulir di laptop), tiap janji menaut ke halaman buktinya. |
| 6 | Pilih merek (kuis 3 tombol) | Tetap | Tambah tombol "Lihat detail Maxxi" → /produk/maxxi. Tabel spesifikasi lengkap & "kapan pilihan lain" pindah ke /produk (atau /bandingkan-merek). |
| 7 | Cara kerja | **Diringkas** jadi 1 strip 6 langkah (satu baris per langkah) | Versi lengkap + 5 lapis + Rapor → halaman /cara-kerja. |
| 8 | Bayar & garansi | **Diringkas** jadi 1 kartu: "Material lunas sebelum kirim · jasa 40/30/30 · garansi 5 tahun" | Versi lengkap + cara klaim → /garansi. |
| 9 | Area | Diringkas | Chip 13 kota yang menaut ke /area/*, peta dibuang di HP. |
| 10 | FAQ 5–6 pertanyaan + penutup + 3 artikel | Tetap | FAQ dibersihkan dari kontradiksi & pengulangan. |
| — | Hujan | **Hapus** | Duplikat Lapisan. |
| — | Lapisan 5 lapis | **Pindah** ke /cara-kerja (Standar Pasang AKAL) | |
| — | Warna | **Pindah** ke halaman merek (sudah ada versi asli) | |
| — | Rapor Proyek | **Pindah** ke /cara-kerja; kembali ke beranda setelah ada proyek nyata (jadi bukti terkuat) | |

Catatan: beranda saat ini dibangun dari mockup yang Rama setujui (DECISIONS 015). Perubahan susunan ini perlu
persetujuan Rama dan sebaiknya dimockup dulu.

---

## 4. Halaman / topik baru yang diperlukan

**Halaman pokok (belum ada, dicari pembeli & dibutuhkan Google/AI):**
1. **/tentang** — entitas, PT, pendiri, pengalaman tim, alamat/area. (P0)
2. **/kontak** — WA, jam layanan, email, area, peta (kalau alamat boleh tampil).
3. **/garansi** — syarat lengkap, yang ditanggung/tidak, cara klaim, contoh kartu garansi (anonim). Kata kunci: "garansi atap bitumen".
4. **/cara-kerja** — 6 tahap, Standar Pasang 5 lapis, format Rapor Proyek, cara bayar. Kata kunci: "cara pasang atap bitumen".
5. **/perusahaan** (untuk perusahaan & proyek) — dokumen yang tersedia sekarang vs menyusul, penawaran resmi via email, TDS/brosur, termin. Sekarang procurement cuma dapat satu kartu di beranda.
6. **/layanan/perbaikan-atap-bocor** dan **/layanan/ganti-atap** — kata kunci lokal dengan niat beli tinggi ("tukang atap bocor jakarta barat" dsb. terbukti ada di autocomplete).
7. **/bandingkan/maxxi-vs-cti** — perbandingan merek (bitumen vs metal/beton sudah ada sebagai artikel).
8. **Pusat unduhan** — brosur, pricelist PDF, product knowledge (yang boleh publik).
9. **/proyek** — tunggu proyek pertama; jangan dikarang.

**Topik artikel yang belum ada di kalender:** /tentang & halaman layanan di atas lebih penting dari artikel baru.
Kalender 36 topik sudah menutup celah utama dokteratap (luas atap, kesalahan pasang, 3-tab vs laminated).

---

## 5. POV per jenis pembaca

### Calon customer — pemilik rumah (HP, bandingkan harga)
- ✅ Harga per m² + total langsung terlihat, rincian termasuk/tidak, survey gratis.
- ❌ Harus menggulir ±3,5 layar sebelum kalkulator; sebelum itu disuguhi intro 3 detik.
- ❌ "Material lunas sebelum dikirim" bikin ragu karena belum ada alamat kantor, PT masih proses, email gmail,
  ikon sosmed abu-abu "segera hadir", belum ada ulasan. Ini titik paling rawan batal.
- ⏳ Kalkulator: tambahkan bantuan "luas lantai → luas atap" sebagai tombol (sekarang hanya teks petunjuk ×1,3).

### Pemilik villa / kafe
- ✅ Kartu villa & kafe dengan foto suasana.
- ❌ Pertanyaan utama "berapa hari usaha saya terganggu?" tidak ada di halaman merek (rangka punya "m² per hari",
  atap tidak). Tambah "Lama pasang" di kartu spesifikasi merek.
- ❌ Kartu villa/kafe di beranda tidak menaut ke artikel persona yang sudah ada.

### Procurement / perusahaan / arsitek
- ❌ Semua jalur berakhir di `/#layanan-proyek` (satu kartu). Tidak ada TDS/brosur unduhan, tidak ada jalur email
  penawaran resmi, tidak ada info dokumen legal yang tersedia. Butuh /perusahaan.

### Pengunjung skeptis ("perusahaan ini beneran ada?")
- ❌ Tidak ada /tentang, alamat, wajah/nama, proyek, ulasan; footer "PT … (dalam proses pendirian)"; 6 ikon sosmed
  "segera hadir". Saran: sembunyikan ikon sosmed sampai aktif; tampilkan apa yang ADA (nama pendiri, area, pengalaman
  tim pemasang hingga Bandung/Sumatra/Kalimantan/Sulawesi/Papua, garansi tertulis).

### Desktop vs HP
- HP terasa aplikasi; desktop terasa situs premium. Keduanya rapi.
- **Tablet 768 px** = tampilan HP yang direntangkan: kartu layanan jadi satu kolom foto selebar layar (±350 px tiap
  kartu). Perlu tata letak 2 kolom di tablet.
- HP murah sinyal lemot tetap cepat (1,9 dtk tanpa intro). Yang memperlambat hanya intro.

---

## 6. POV desainer (UI/UX, layout, komposisi)

**Bagus:** palet disiplin (satu aksen), gaya judul khas, pill & kartu konsisten, foto berwarna senada, hero kuat,
HP native, kalkulator bersih, fokus keyboard terlihat.

**Perlu diperbaiki:**
1. **Ritme monoton.** Hampir semua bagian memakai rumus yang sama: judul besar + potongan kedua diredupkan + paragraf
   pengantar di kanan. Setelah ±5 kali mata berhenti menangkapnya. Polanya juga terasa di copy ("Hitung dulu, baru
   bicara" / "Hitung dulu, baru pasang"). Variasikan: sebagian bagian tanpa judul raksasa, sebagian dibuka angka/foto.
2. **Tengah halaman terlalu gelap.** AKAL (gelap) → Hujan (foto gelap) → Cara kerja (gelap) → Garansi (gradasi coklat
   kabut) berturut-turut. Latar coklat-zaitun di bagian Garansi keluar dari palet dan terlihat kusam di HP.
3. **Affordance palsu.** Kartu layanan berfoto terlihat bisa diklik tapi tidak menaut.
4. **AKAL nempel-gulir 4,4 layar di laptop** — berat untuk 4 kartu; pill melayang menimpa garis progres.
5. **Tablet** belum punya tata letak sendiri (lihat §5).
6. **Bagian kosong** (Rapor) dan **dekoratif** (peta skematik, Hujan) memakan ±3,5 layar HP tanpa menambah keputusan.
7. **Navigasi**: menu atas desktop memuat "Warna" tapi tidak "Area" atau "Tentang". Tab bawah HP "Merek" & "Garansi"
   melompat ke tengah beranda, bahkan saat sedang di /produk/maxxi (tab "Merek" menyala tapi membuang pengunjung ke
   beranda). Setelah halaman baru ada, arahkan tab ke halamannya.

---

## 7. POV tipografi

Font: Public Sans 500 (judul & teks besar) + Inter 400/500 (teks), sesuai keputusan Rama. Terbaca jelas, tracking
judul −0,04em rapi di ukuran besar, angka tabular dipakai di harga.

**Masalah:**
1. **Tidak ada skala ukuran yang nyata.** Di laptop terpakai **30 ukuran huruf berbeda** (12–109 px), di HP 17.
   Idealnya 8–10 langkah. (HANDOVER sudah mencatat 21 catatan detektor; makin bertambah.)
2. **Teks isi lebih kecil dari janji sendiri.** PRODUCT.md: isi ≥17 px di HP / 18 px desktop untuk pembaca 40–60 th.
   Kenyataan: sebagian besar paragraf HP 15–16 px (±96 elemen 15 px), laptop 14–15 px (±157 elemen);
   63–77 elemen teks di bawah 14 px.
3. **Label satuan 6,5 px** ("rb / m² terpasang") dan "Rp" 7 px di daftar perbandingan merek HP (setelah "Bandingkan
   spesifikasi lengkap" dibuka) — praktis tak terbaca. "ribu / m²" di hasil kalkulator juga terlalu kecil.
4. **Kontras.** Potongan judul yang diredupkan (abu di atas terang) dan kalimat "menebal ikut gulir" (mulai dari
   opasitas 22%) gagal kontras WCAG menurut Lighthouse. Redupkan secukupnya sampai ≥4,5:1 (judul besar ≥3:1).
5. **Baris terlalu panjang di laptop**: catatan bawah kalkulator (±164 karakter/baris) dan catatan tabel merek (±155).
   Batasi ±70–75 karakter.
6. **DESIGN.md tidak sesuai kenyataan**: dokumen menulis Display bobot 300 + kata kunci miring 400, situs memakai
   Public Sans 500 tanpa miring (kelasnya masih bernama `miring`). Perbarui DESIGN.md supaya sesi berikutnya tidak
   "memperbaiki" ke arah yang salah.

---

## 8. POV web developer

**Bagus:** Astro statis, nyaris tanpa JS, gambar responsif (`<picture>` HP/desktop), data satu sumber, lead & beacon
ke Ops lewat Vercel Function, sinkron harga otomatis, workflow terjadwal untuk artikel.

**Perlu diperbaiki:**
1. `src/pages/index.astro` 1.136 baris: 16 bagian + ±520 baris CSS + 7 perilaku JS dalam satu file. Pecah tiap bagian
   jadi komponen (sebagian sudah) supaya halaman baru (/garansi, /cara-kerja) bisa memakai ulang bagian yang sama
   tanpa salin-tempel.
2. **Teks FAQ diketik manual** sehingga melenceng dari data (5 derajat, tiga merek). Ambil dari `bisnis.ts`/`produk.ts`.
3. **Klik WhatsApp tidak tercatat.** Tombol sudah punya `data-wa="hero|penutup|bocor|…"` tapi tidak ada kode yang
   membacanya. Kirim lewat beacon yang sama (`api/kunjungan.mjs`) → Ops bisa menunjukkan bagian mana yang menghasilkan chat.
4. **Aksesibilitas:** tidak ada skip link; `aria-label` di `<span>` ikon sosmed (dilarang); kontras (§7).
5. **Schema:** RoofingContractor tanpa `telephone`, `priceRange`, `legalName`, `sameAs`; Product Maxxi memakai harga
   terpasang (380–430 rb) sebagai harga produk — harusnya harga material (145 rb, `unitCode MTK`) atau dipindah ke
   `Service` + `Offer`.
6. **hreflang setengah rusak**: /en/guides menunjuk /panduan tapi /panduan tidak menunjuk balik; tanpa `x-default`.
7. Sitemap tanpa `lastmod`; 18 judul halaman 71–80 karakter (terpotong di Google); meta deskripsi beranda 170 kar.
8. `/produk/maxxi/` (garis miring di akhir) 200, sebaiknya 308 ke versi tanpa garis miring.
9. /branding ditaut dari footer 48 halaman & masuk sitemap → keluarkan.
10. Efek gulir (animation-timeline) belum diuji di Safari & Firefox (sudah dicatat di HANDOVER).

---

## 9. Temuan halaman dalam (diverifikasi)

- **/produk/rangka-baja-ringan**: kalimat placeholder "Spesifikasi dan garansi pabrik akan kami tulis setelah dokumen
  resmi masuk" (`src/pages/produk/[slug].astro:99`) padahal di bawahnya spesifikasi lengkap. Tidak ada tombol Hitung.
- **/produk/aksesoris**: "Tebal standar 12 mm (ada 9 & 18 mm)" (`src/data/aksesoris.ts:42`) — melanggar aturan
  "jangan tulis multiplek 9 mm".
- **Tautan sumber rusak**: `doi.org/10.14710/rotasi.8.4.34-40` → 404, dipakai di artikel atap-rumah-yang-bagus-dan-tidak-panas
  & guide best-roof-tropical-climate.
- **/area** buntu: 15 kartu data lalu footer, tanpa ajakan Hitung/WA.
- **Halaman area** dibuka dengan statistik (puting beliung, asbes), bukan layanan + harga + survey; harga hanya
  menyebut 3 merek.
- **"13 kota"** vs /area yang menampilkan 9 kartu Jabodetabek (5 kota Jakarta digabung).
- Tanggal berlaku harga hanya ada di artikel harga, tidak di /produk & halaman merek.
- Foto AI di sampul artikel/area tanpa keterangan "Ilustrasi" yang terlihat (hanya alt).
- /panduan satu daftar panjang (±12.000 px HP) — tambah chip kategori seperti /produk.
- Kemungkinan salah label warna CTI (CT3 "Black" tampil hijau tua, "Dark Brown" tampil abu) — cek ke brosur.
- 36/48 foto galeri Maxxi & 49/63 CTI ber-alt kosong → tidak ikut pencarian gambar.
- /404 tanpa header/footer.

---

## 10. POV owner

- **Tujuan = chat WA berisi estimasi.** Jalurnya sudah ada; yang belum: situs bisa ditemukan (P0 1–2) dan bisa dipercaya
  (P0 4–5, bukti).
- **Pengungkit terbesar setelah domain & index:** proyek pertama yang didokumentasikan penuh (foto tiap lapis → Rapor
  Proyek asli → ulasan Google). Satu proyek nyata mengalahkan sepuluh bagian penjelasan.
- **Janji di situs harus sanggup dijalankan tim**: foto tiap lapis dikirim, pengecekan klaim ≤3 hari kerja, uji semprot,
  Rapor Proyek ditandatangani kepala aplikator. Pastikan Bang Yusuf & tim sepakat sebelum situs dibuka.
- **Ukur**: catat klik WA per bagian (§8.3), lalu putuskan pemangkasan beranda berdasarkan data, bukan selera.
- Biaya tetap gratis (Vercel, Search Console, GBP, Bing semua gratis). Satu-satunya biaya: domain.

---

## 11. Urutan kerja yang disarankan

1. Domain atapura.com (Rama) → sambung Vercel.
2. Perbaikan cepat tanpa keputusan: FAQ kontradiksi, multiplek 9 mm, placeholder rangka, DOI rusak, label 6,5 px,
   sembunyikan ikon sosmed "segera hadir", keluarkan /branding dari footer & sitemap, CTA di /area, catat klik WA.
3. Hapus/atur ulang intro (butuh ok Rama — DECISIONS 022).
4. Halaman /tentang, /garansi, /cara-kerja, /kontak, /perusahaan.
5. Mockup beranda ringkas (§3) → persetujuan Rama → bangun.
6. Hari-H buka situs: checklist P0 #2 + Google Business Profile.
7. Skala tipografi & ukuran teks isi, kontras, tablet 2 kolom.
8. Proyek pertama → Rapor asli → ulasan → bagian bukti kembali ke beranda.
