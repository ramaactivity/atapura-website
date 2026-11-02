# Keputusan

## 001 · 2 November 2026 · Kerangka awal
Situs sederhana (HTML), dibuat dari Markas dengan dokumen standar (CLAUDE.md, DESIGN.md, deploy.md, HANDOVER.md).

## 002 · 2 November 2026 · Astro 7 statis + Preact hanya untuk kalkulator
Sesuai D7 di bahan/atapura/00. Astro 7.4 (output statis, `build.format: 'file'`, tanpa trailing slash), Tailwind v4, Preact 11 hanya di `src/islands/`. JS beranda ±31 KB sebelum kompresi. Alamat situs satu tempat: `SITE_URL` (default `https://atapura.vercel.app`).

## 003 · 2 November 2026 · Mulai di atapura.vercel.app (domain gratis dulu)
Keputusan Rama. Konsekuensi yang sudah disampaikan: pindah domain nanti = redirect 301 + Change of Address, sebagian nilai SEO bisa hilang. Backlink & listing ditunda sampai domain final (lihat bahan/atapura/03).

## 004 · 2 November 2026 · Vercel: akun ramaactivity98 (team_BSJVaxRgvlGYUgzntvcZZwcD)
Dipilih dari Markas → Langganan: akun pribadi yang sama dengan GitHub ramaactivity, pemakaian ±14% kuota request Hobby, tidak diblokir. workwithrama98 dilewati karena berstatus diblokir. Proyek `atapura` (prj_f6zL8H6PpoCj9nlqK2hHrM7EMo7c), Vercel Authentication dimatikan.

## 005 · 2 November 2026 · Beranda dibangun langsung dari kode, bukan mockup gambar dulu
Rama setuju ("lanjut"). Arah visual dikunci oleh 02-DESIGN-NOTES + 33 referensi (docs/desain/referensi). Kontrak arah di `.impeccable/surfaces/src-pages-index-astro.md`. Hero memakai foto makro tekstur genteng aspal (Wikimedia, CC BY-SA 4.0, kredit di footer), bukan foto rumah stok — tidak boleh mengklaim proyek yang belum ada. Diganti foto proyek asli/Magnific saat tersedia.

## 006 · 2 November 2026 · Harga di kalkulator = CONTOH sampai Rama kirim harga resmi
`src/data/harga.ts` `contoh: true` → chip "Harga contoh" di slip & tabel, catatan di bawah slip, dan pesan WhatsApp ditandai "(harga contoh, belum harga resmi)". llms.txt sengaja tidak memuat angka harga.

## 007 · 2 November 2026 · Data yang belum ada tidak ditampilkan, tidak dikarang
Nomor WA (`bisnis.whatsapp = null` → link wa.me tanpa nomor), garansi pemasangan (tanpa angka), NIB/NPWP, `legalName` di JSON-LD (ditahan sampai PT terbit), rating/review (tidak ada di schema), favicon/logo (menunggu logo resmi).

## 008 · 2 November 2026 · Skill tambahan dipasang (perintah Rama: wajib pakai skill)
Di `~/.claude/skills`: 24 skill marketing coreyhaines31 (ai-seo, cro, offers, ads, ad-creative, free-tools, schema, site-architecture, programmatic-seo, dll.), better-ui/typography/colors/layout/writing/accessibility (jakubkrehel), web-design-guidelines (vercel-labs), astro (astrolicious), local SEO garrettjsmith (service-area-seo, local-landing-pages, local-schema, local-citations, review-management, local-content-briefs). Agen impeccable-finish-reviewer & impeccable-documenter ditautkan ke `~/.claude/agents`.

## 009 · 2 November 2026 · Vercel pindah ke akun khusus Atapura (menggantikan 004)
Rama membuat akun Vercel atapurakaryalestari@gmail.com (team `atapura`) dan menaruh tokennya di `.env.local`. Proyek kosong di ramaactivity98 (0 deploy) dihapus agar `atapura.vercel.app` lepas, lalu dibuat ulang di akun baru (prj_R9OCxzPUAjRnUTZR4Uavihp5QK36). Prinsip dari Rama: Markas hanya alat bantu; setelah dibuat, proyek ini otonom (akun, token, konfigurasi sendiri). GitHub tetap ramaactivity / rama.activity98@gmail.com.

## 010 · 2 November 2026 · Font: Switzer menggantikan Plus Jakarta Sans
Rama: Plus Jakarta Sans terlalu generik; mau gaya Helvetica dengan kombinasi tipis-tebal dan italic yang bagus (referensi: poster Helvetica, Vaseline, Yensis, Sunlight). Dibandingkan dengan spesimen teks asli: Switzer, Hanken Grotesk, Host Grotesk. Dipilih Switzer (ITF/Fontshare): paling dekat Helvetica, italic asli, angka rapi; lisensi ITF FFL boleh komersial & self-host, tetapi file tidak boleh diubah (tanpa subset) — tegak 43 KB + italic 33 KB. Lisensi di docs/lisensi/Switzer-FFL.txt. Italic hanya aksen kata kunci judul.

## 011 · 2 November 2026 · Font: Uncut Sans + tata tipis-miring (menggantikan 010)
Rama: Switzer dengan bobot tebal masih "kurang profesional, generik, basic" dibanding referensi (Space, eyebot, Steply, Vaseline). Analisis: referensi memakai judul besar berbobot tipis, tracking rapat, dan tebal/miring hanya untuk satu kata. Lima font diuji dalam tata yang sama (Switzer, Satoshi, General Sans, Mona Sans, Uncut Sans); Rama memilih Uncut Sans (paling dekat Neue Montreal/Aeonik). Lisensi OFL → dipangkas ke Latin, satu file variable 46 KB (wght 300–700, ital 0–11). Bobot dibatasi 300/400/500.

## 012 · 2 November 2026 · WhatsApp bisnis sementara 0896-1139-4867
Dari Rama. Disimpan di `src/data/bisnis.ts` (`6289611394867`), dipakai semua tombol WA dan pesan Hitung AKAL. Belum dipakai sebagai `telephone` di JSON-LD sampai Rama mengonfirmasi nomor telepon resmi.
