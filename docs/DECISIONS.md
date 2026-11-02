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

## 013 · 2 November 2026 · Lapisan interaksi khusus desktop
Rama: desktop terasa "boring dan basic"; teknologi boleh dibedakan dari HP. Ditambahkan lapisan progressive enhancement yang hanya aktif di layar ≥64rem + mouse + gerak tidak dikurangi: pembukaan hero, cahaya senja ikut kursor (pegas), efek baris tertindih saat scroll, diagram lapisan terurai, kata miring hidup, hover AKAL/tabel/FAQ/tombol. Semua CSS native (scroll-driven animation) + ±1 KB JS; tanpa library, tanpa scroll-jacking. HP tidak memuat efek apa pun (terverifikasi). Scroll roda mouse 2× sepanjang halaman: 0 frame >50 ms. Detail di DESIGN.md "Lapisan desktop".

## 014 · 2 November 2026 · Berhenti iterasi di kode: foto Magnific + mockup disetujui dulu
Rama menilai beranda masih "basic, murahan, tidak terasa amanah/profesional" setelah beberapa putaran perbaikan di kode. Diagnosa: (1) belum ada foto (hero hanya tekstur genteng), (2) belum ada bukti nyata (logo, proyek, tim, ulasan, legalitas), (3) alur 09-SKILL-WAJIB ("mockup disetujui dulu") dilompati. Rama memilih: buat 4 foto di Magnific (prompt 08-ASET-MAGNIFIC.md no. 1, 4, 5, 6) → Claude membuat mockup satu halaman → disetujui → baru dibangun. Kode beranda tidak dirombak lagi sebelum mockup disetujui. Patokan kualitas: daftar situs di HANDOVER.md.

## 015 · 2 November 2026 · Beranda dibangun dari mockup yang disetujui
Rama menyetujui docs/mockup/beranda.html ("lebih profesional, trusted dan bagus"). Dibangun: hero foto Magnific (desktop teks gelap di atas langit, HP teks putih di bawah), kolom luas di hero yang mengisi Hitung AKAL, deretan bukti, bento layanan berfoto, Hitung AKAL 4 langkah (luas, merek, pekerjaan, kota; catatan jujur untuk perbaikan), bagian hujan, penutup berfoto kafe. Bagian AKAL dilepas (pesannya tercakup bukti & cara kerja). Pesan pendiri tidak dibuat: Rama menilai tidak perlu; nama pendiri (Ramadan Saputra, Yusuf Nasution) hanya akan tampil di halaman Tentang/JSON-LD bila Rama mengizinkan. Foto AI diberi keterangan "ilustrasi, bukan proyek Atapura" di hero dan footer.

## 016 · 2 November 2026 · Font: Public Sans gaya askmidnight (menggantikan 011)
Keputusan Rama (diteruskan sesi a2): Rama "suka banget" font askmidnight.com — Public Sans variable, judul 500 dengan tracking -0.04em, isi 400, tanpa italic. Self-host subset Latin 27 KB (OFL). Aksen miring diganti penekanan redup (opacity 0.55) pada bagian judul; "AKAL." di hero HP berwarna Tunas. Kolom harga tabular. Logo "Λtapura" (Arah A, Public Sans 500) dipasang setelah SVG final dari a2.

## 017 · 2 November 2026 · Situs = konsep untuk diajukan ke partner; termin & garansi mengikuti vendor terpercaya
Rama: website ini konsep untuk dipresentasikan ke partner (yang memegang detail bisnis); lengkapi dulu, direvisi nanti. Diisi: termin 30/40/30 (uang muka setelah kontrak, material tiba, serah terima — pola bayar-sesuai-progres Sejasa/Arsitag/kontraktor umum), garansi pemasangan 5 tahun dengan cakupan, pengecualian, 4 langkah klaim (cek ≤3 hari kerja), Cek Atap Gratis, dan pilihan 5 warna dari tekstur Magnific (berlabel ilustrasi). Semua angka di `src/data/bisnis.ts` bertanda KONSEP. Pengaman: `bisnis.konsep = true` → meta noindex + robots.txt Disallow, agar angka konsep tidak dikutip Google/AI sebagai janji Atapura. **Saat partner setuju: revisi angka, lalu ubah `konsep` ke false** (SEO/GEO langsung aktif).

## 018 · 2 November 2026 · Logo "Λtapura"
Rama memilih arah A dari tiga sketsa ("minimalis elegan"). Huruf A pertama tanpa palang = atap pelana berpuncak runcing, setinggi kapital, dengan jarak lega 0,015 em sebelum "tapura" — geometri persis sketsa artifact (Rama: "terasa lebih premium dan elegan"; versi puncak-rata yang lebih rapat ditolak). Huruf Public Sans Medium −0,04 em (016), sudah jadi garis vektor; Λ lebih tebal khusus favicon. Warna pinus/embun, tanpa lime. Alasan: tanpa gambar rumah/palu dan tanpa merah-biru seperti kompetitor; nama paling mudah diingat untuk pencarian "Atapura". Bentuk Λ umum, perlindungan merek ada pada nama + bentuk keseluruhan: PDKI mode Normal "atapura" kosong (2 Nov), cek Fonetik dan daftar kelas 37 atas nama PT. File & aturan pakai: `public/brand/README.md`.

## 019 · 2 November 2026 · Harga acuan Hitung AKAL dari Dokter Atap + pasar Jabodetabek
Arahan Rama: harga merujuk Dokter Atap (partner Rama mantan karyawan di sana), boleh pakai acuan lain yang lebih baik. Data diambil langsung dari toko dokteratap.co.id (WooCommerce, 2 Nov 2026): Maxxi 3-tab Rp160 rb/m² (garansi material 25 th), CTI CT3/CT5/CT6 Rp170 rb/m² (20 th), multiplek Rp179,5 rb/lbr, GRC Rp210 rb/lbr, underlayment self-adhesive Rp600 rb/roll 10 m², flashing Rp45 rb/1,2 m, paku Rp250. Jasa Rp50–70 rb/m² dari ilhamplafon.com (Apr 2026). Model: genteng [pasar–Dokter Atap], alas+underlayment Rp120–145 rb/m², aksesoris Rp15–30 rb/m², jasa Rp50–70 rb/m². Label UI "Harga acuan" (bukan "contoh"); tetap data-nosnippet + noindex selama konsep. Partner merevisi setelah menetapkan margin.

## 020 · 2 November 2026 · Mesin artikel /panduan + 3 artikel pertama
Arahan Rama: SEO/GEO butuh blog/artikel. Content collection `src/content/panduan/*.md` (Astro 7 glob loader, skema di `src/content.config.ts`): judul, ringkasan, **jawaban** (answer-first, tampil paling atas), kategori, terbit/diperbarui, penulis, sampul, FAQ, sumber. Halaman `/panduan` (daftar) dan `/panduan/[slug]` dengan JSON-LD Article + BreadcrumbList + FAQPage, CTA Hitung AKAL & WA, "Baca juga"; llms.txt mendaftar semua artikel. Artikel pertama hanya dari fakta yang dipegang (data produk Dokter Atap, riset pasar): istilah bitumen/genteng aspal/sirap/shingle, beban vs genteng beton, 5 lapis pemasangan. Artikel berbasis pengalaman lapangan menunggu partner. Penulis sementara "Tim Atapura" — ganti dengan nama orang nyata (E-E-A-T) setelah partner setuju.

## 021 · 2 November 2026 · Pola askmidnight untuk bagian teks: latar suasana, tab, pill melayang
Arahan Rama (screenshot askmidnight.com): bagian polos diberi latar suasana dari foto Magnific yang dikecilkan & diburamkan (`public/kabut/*.webp`, ±1,5 KB tiap file) — Cara kerja (hujan senja), Garansi (villa). Cara kerja jadi tab 7 tahap dengan panel "Yang Anda pegang" (fokus pelanggan). Pill "Berapa biaya atap Anda? · Hitung estimasi" melayang di desktop setelah hero, sembunyi saat kalkulator/penutup/footer terlihat.

## 022 · 2 November 2026 · Bumper pembuka "atap terangkat"
Permintaan Rama: bumper keren & profesional (bukan loading screen) yang menyambung mulus ke hero. `src/components/Bumper.astro`: Λ tergambar (lime) → logo → Andal · Kualitas · Amanah · Lestari → layar terangkat dengan tepi bawah berbentuk Λ membuka hero; foto hero mendekat dan teks naik menyambung. ±2,6 dtk, sekali per sesi (sessionStorage), lewati dengan klik/tombol/scroll roda, pengaman 4 dtk. Tidak tampil tanpa JS, reduced-motion, atau kunjungan ulang — HTML hero tetap utuh untuk Google. Catatan: nama @keyframes wajib unik (prefiks bp-); nama `muncul` sempat bentrok dengan desktop.css dan membuat teks tak terlihat.

## 023 · 2 November 2026 · Penutup + Panduan menyatu, footer gaya Andermatt
Referensi Rama (situs "Are we a match?" + "From the Journal", dan footer andermatt-swissalps): penutup kini satu bagian gelap dengan foto kafe yang memudar (mask) ke latar dan berlanjut ke "Dari panduan" (3 artikel terbaru = tautan internal untuk SEO). Footer terang: tagline besar + satu ajakan di kiri, 6 kolom tautan bertajuk (Layanan, Biaya & garansi, Panduan, Area survey, Kontak, Atapura), baris identitas (logo, legal, pendiri), baris legal.

## 024 · 2 November 2026 · Revisi Bang Yusuf: harga terpasang per m², spek pendukung, cara bayar, luar Jabodetabek
Sumber: revisi Bang Yusuf (calon partner, ex-Dokter Atap) lewat Rama. (1) Pembayaran: material lunas sebelum dikirim (cash before delivery); jasa pasang bertahap 40/30/30 (mulai kerja / genteng terpasang ±50% / serah terima) — `bisnis.pembayaran`. (2) Hitung AKAL kini punya langkah "Spek pendukung": alas Multiplek 12 mm / GRC 9 mm, lapis kedap Underlayer / Membrane, Flashing U / Z. (3) Slip menampilkan kebutuhan material (bundel, lembar, roll, batang, skrup, paku) lalu angka utama = **harga terpasang per m²**, total di bawahnya. Rasio paku 20/m² & skrup 12/m² dari contoh Bang Yusuf (100 m² → 2.000 paku, 1.200 skrup). Harga satuan material pendukung = toko dokteratap.co.id; flashing 0,4 m per m² atap = asumsi, menunggu konfirmasi. (4) Survey gratis di Jabodetabek, berbayar sesuai jarak di luar; Atapura tetap melayani luar Jabodetabek (pengalaman tim: Bandung, Sumatra, Kalimantan, Sulawesi, Papua). Kalkulator mendeteksi kota luar Jabodetabek lewat daftar kata (`dalamJabodetabek`) dan menampilkan catatan biaya survey.
