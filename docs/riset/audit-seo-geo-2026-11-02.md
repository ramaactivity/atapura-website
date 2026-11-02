# Audit SEO + GEO — atapura.vercel.app (2 November 2026)

Dicek langsung dari situs live dan kode (`src/layouts/Base.astro`, `src/pages/index.astro`, `src/data/bisnis.ts`, `src/data/harga.ts`, `src/pages/llms.txt.ts`, `src/pages/robots.txt.ts`, `astro.config.mjs`). PageSpeed Insights belum bisa diukur (kuota API habis hari itu); performa dinilai dari ukuran aset saja. Catatan: audit berjalan saat beranda baru dari mockup baru saja di-deploy; nomor baris bisa bergeser.

## 1. Kesimpulan: fondasi bagus, belum cukup kuat untuk ranking
| Area | Skor | Alasan singkat |
|---|---|---|
| SEO teknis | 7/10 | Statis, HTTPS, canonical benar, sitemap, robots, llms.txt. Kurang: og:image, favicon, 404, verifikasi Search Console |
| On-page/konten | 4/10 | Hanya 1 halaman (~1.400 kata). H1 tanpa kata kunci, "genteng aspal" 0 kali di teks terlihat, belum ada jawaban berangka |
| SEO lokal | 1,5/10 | Belum ada Google Business Profile, telepon di schema, review, proyek, halaman kota |
| GEO / dikutip AI | 2,5/10 | Belum ada sumber luar yang menyebut Atapura (`sameAs` kosong), domain *.vercel.app, satu-satunya harga berlabel "contoh" |

## 2. Yang sudah bagus
- `lang="id"`, `og:locale id_ID`; title 55 karakter, description 153 karakter, manusiawi.
- Canonical selalu `https://atapura.vercel.app/` (`Base.astro:14-15`), http → https 308.
- JSON-LD `RoofingContractor` lengkap (13 `areaServed`, `founder`, `knowsAbout`), tanpa rating palsu; FAQPage 5 tanya.
- Robots `User-agent: * Allow: /` (crawler AI boleh); llms.txt dari `src/data`.
- Gambar AVIF/WebP responsif, hanya hero eager; JS hanya island kalkulator; kalkulator, tabel harga, dan isi FAQ (`<details>`) ter-render di HTML.
- Alt jujur ("Ilustrasi …"); aturan anti doorway kota & anti review palsu tertulis di 06.

## 3. Daftar gap (urut prioritas)

### A. Bisa dibenahi di kode sekarang
| # | Masalah → bukti | Perbaikan | Dampak | Usaha |
|---|---|---|---|---|
| 1 | Hanya 1 URL terindeks (sitemap-0.xml = `/`) | Milestone 5: `/harga-atap-bitumen`, `/atap-bitumen`, `/tentang`, `/cara-kerja`, `/garansi` | H | L |
| 2 | H1 tanpa kata kunci | Baris kecil berkata kunci di/atas H1 ("Pasang atap bitumen (genteng aspal) Jabodetabek"), slogan tetap | H | S |
| 3 | "Genteng aspal", "sirap aspal", "shingle" 0 kali di teks terlihat (hanya alt/JSON-LD) | Sinonim alami di sub-hero, FAQ, tabel merek | H | S |
| 4 | Tanpa og:image & twitter:card (`Base.astro:52-57`) | OG 1200×630 (foto hero + nama) | M | S |
| 5 | Tanpa favicon (`/favicon.ico`, `/favicon.svg` 404) | Ikon dari logo (sedang dibuat sesi a2) | M | S |
| 6 | Jawaban FAQ harga tanpa angka | Setelah harga resmi: buka dengan rentang Rp/m² + tanggal; selama contoh jangan diisi | H (GEO) | S |
| 7 | Harga contoh tampil di HTML (Rp135 rb/m², Rp41,4–53,1 jt) — AI bisa mengutip sebagai harga Atapura | Ganti harga resmi secepatnya, atau label "contoh" menempel di kalimat yang sama | M | S |
| 8 | Kartu bukti "PT Atapura Karya Lestari, kontrak & faktur resmi" vs `statusLegal` "dalam proses pendirian" (`bisnis.ts:7`) | Samakan kalimat sampai PT terbit (risiko kepercayaan/E-E-A-T) | M | S |
| 9 | Schema minim: tanpa `logo`/`image`, tanpa `WebSite`; `inLanguage` tidak sah untuk RoofingContractor | Tambah `image`, `logo`, `WebSite`; buang `inLanguage`; nanti `Service` + `BreadcrumbList` | L–M | S |
| 10 | Tanpa 404 sendiri | `src/pages/404.astro` | L | S |
| 11 | Tanpa analytics | Event klik WA & kalkulator (rencana 06-E) | M | S |

### B. Perlu tindakan Rama
| # | Tindakan | Dampak | Usaha |
|---|---|---|---|
| 12 | Domain sendiri sekarang, sebelum konten & backlink menumpuk (DECISIONS 003) | H | S |
| 13 | Google Business Profile: kategori Roofing contractor, area layanan tanpa alamat palsu | H | M |
| 14 | Search Console + Bing Webmaster + IndexNow (di *.vercel.app verifikasi via meta/file) | H | S |
| 15 | Nomor telepon resmi → `telephone` di schema + NAP identik di semua tempat | M | S |
| 16 | Foto proyek asli + Rapor Proyek pertama | H | M |
| 17 | Review (1 per proyek), sosmed/YouTube untuk `sameAs`, listing (Bing Places, Apple, Indotrading, Archify), halaman agen pabrik CTI/Maxxi | H (GEO) | M–L |
| 18 | Harga resmi, garansi dalam tahun, NIB setelah PT terbit | H | S |

## 4. Konten berikutnya (sesuai aturan 06)
1. `/harga-atap-bitumen` — jawaban dulu: tabel per merek, contoh total 3 ukuran rumah, "Diperbarui + penulis". Hanya terbit dengan harga resmi.
2. `/atap-bitumen` (pilar) — definisi, sinonim, kelebihan-kekurangan, siapa yang tidak cocok, kemiringan minimal dari TDS pabrik.
3. `/tentang` + `/cara-kerja` — 2 pendiri dengan foto & LinkedIn, status PT jujur, alur bayar ke rekening PT.
4. Perbandingan: "atap bitumen vs metal", lalu "CTI vs Maxxi vs Javabitumen".
5. `/layanan/ganti-atap-lama` ("ganti genteng beton ke bitumen"); angka 8,5–13 vs 40–60 kg/m² perlu sumber.
6. `/panduan/kenapa-atap-bitumen-bocor` — kuat dengan foto survey asli.
7. Halaman kota: tahan sampai ada proyek nyata di kota itu; kueri lokal dikejar lewat GBP.
8. `/produk/maxxi|cti|javabitumen` setelah brosur resmi (Javabitumen nyaris tanpa jejak online → peluang hasil pertama).

Catatan: kolom volume di `data/keyword-validasi.csv` masih kosong, jadi urutan prioritas masih hipotesis.
