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
Rama memilih arah A dari tiga sketsa ("minimalis elegan"). Huruf A pertama tanpa palang = atap pelana; puncak rata = nok. Huruf Public Sans Medium −0,04 em (sama dengan website, 016), sudah jadi garis vektor; Λ diturunkan dari "A" Public Sans dengan kaki dipertebal, plus versi Λ lebih tebal khusus favicon. Warna pinus/embun, tanpa lime. Alasan: tanpa gambar rumah/palu dan tanpa merah-biru seperti kompetitor; nama paling mudah diingat untuk pencarian "Atapura". Bentuk Λ umum, perlindungan merek ada pada nama + bentuk keseluruhan: PDKI mode Normal "atapura" kosong (2 Nov), cek Fonetik dan daftar kelas 37 atas nama PT. File & aturan pakai: `assets/logo/README.md`.
