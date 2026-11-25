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

## 025 · 2 November 2026 · Harga & fakta resmi dari Bang Yusuf
Jawaban Bang Yusuf (via Rama): genteng saja per m² CTI Rp155 rb, Maxxi Rp145 rb, Javabitumen Rp145 rb; estimasi kasar terpasang Jabodetabek CTI Rp400–450 rb, Maxxi & Javabitumen Rp380–430 rb; rangka baja ringan Rp220 rb/m² (kanal C Taso 0,75, reng Taso 0,40); garansi pemasangan 5 tahun untuk kebocoran dan kesalahan pasang; genteng diambil langsung dari pabrikan (logo menyusul); kemiringan minimal 5°; sampel bisa diminta; 100–120 m² sekitar 4 hari tergantung cuaca; serah terima dengan uji semprot kebocoran dan opname luas. Luar Jabodetabek: harga tentatif, dihitung bersama admin (akomodasi tukang, tiket, ekspedisi); tiket/ekspedisi bisa dicarikan atau diatur pemilik, Atapura tidak mengambil untung dari akomodasi.
Penerapan: `harga.contoh` = false (label "acuan" hilang). Genteng jadi satu angka, `terpasang` per merek ditambahkan; jasa dikalibrasi ke Rp70–120 rb/m² supaya spek standar jatuh di rentang Bang Yusuf (dijaga `harga.test.ts` untuk 60–200 m²). Kalkulator: pilihan rangka baja ringan; kota di luar Jabodetabek menyembunyikan angka dan mengarahkan ke admin. Belum dijawab: telepon/jam kerja, PT/NIB, brosur Javabitumen, Cek Atap Gratis, foto pendiri, domain, cicilan.

## 026 · 3 November 2026 · Qty material disembunyikan dari publik, kalkulator lengkap pindah ke /internal
Sumber: revisi Bang Yusuf via Rama — jumlah material (bundel, lembar, roll, batang, skrup, paku) dijadikan patokan pelanggan/mandor untuk beli di tempat lain. Hitung AKAL publik kini hanya menampilkan harga terpasang per m², total, hari kerja, dan cara bayar (material/jasa). Daftar qty dan "Rincian biaya per item" (rupiah per item bisa dihitung balik jadi qty) hanya muncul dengan prop `internal`; qty juga tidak ikut pesan WhatsApp dari beranda. Permintaan Rama: versi lengkap tetap ada untuk tim di `/internal/kalkulator`, dengan hub `/internal` (berisi kalkulator lengkap + /branding). Halaman internal: `noindex` via `Base` prop + dikecualikan dari sitemap. Bukan pengaman — siapa pun yang tahu link bisa membuka; kalau perlu dikunci, tambah password (Vercel Password Protection berbayar, atau middleware sederhana).
Lanjutan (3 Nov): angka juta di kalkulator publik dibulatkan tanpa koma (Rp48 jt, bukan Rp47,6 jt) — permintaan Rama supaya enak dibaca; versi internal tetap 1 desimal. `rupiahRingkas(n, desimal)`.

## 027 · 3 November 2026 · Partner pemilik tidak dicantumkan di situs
Permintaan Rama: situs hanya menyebut Ramadan Saputra sebagai pendiri. Partner (Bang Yusuf) tetap pemilik tapi tidak tercantum di mana pun yang publik — footer, JSON-LD `founder`, halaman /tentang nanti, panduan, maupun llms.txt — karena khawatir konflik dengan bekas tempat kerjanya. `bisnis.pendiri` = ['Ramadan Saputra']. Nama partner hanya boleh ada di dokumen internal repo (komentar kode, DECISIONS, HANDOVER), bukan di HTML/JS yang terbit.

## 028 · 3 November 2026 · Situs tidak menyebut brand lain
Perintah Rama: jangan sebut brand/toko/kontraktor lain di situs (contoh: Dokter Atap). Merek yang boleh tampil hanya yang dipasang Atapura: Maxxi, CTI, Javabitumen. Dihapus: sumber "toko Dokter Atap" + link dokteratap.co.id di dua panduan; Onduline/Onduvilla/CertainTeed diganti sebutan umum ("atap bitumen gelombang", "bukan jenis yang dipasang Atapura"). Harga satuan material pendukung tetap mengacu ke toko itu secara internal (komentar `harga.ts`), tidak ditulis publik. Cek sebelum terbit: `grep -rli "dokter\|onduline\|certainteed" dist` harus kosong.

## 029 · 3 November 2026 · 10 artikel panduan baru dari riset keyword, semua klaim bersumber
Permintaan Rama: tambah 10 artikel berdasarkan data Google (autocomplete + Trends; Keyword Planner tidak bisa diakses), lalu "perdalam product knowledge supaya tidak halu". Riset di `docs/riset/keyword-artikel-2026-11-03.md`; verifikasi 17 klaim teknis di `docs/riset/product-knowledge-atap-bitumen.md` (sumber: dokumen Maxxi/CTI, ARMA, NRCA, FSEC, LBNL). Aturan: klaim tanpa sumber primer dihapus atau diperhalus; tidak ada peringkat biaya bahan lain; tidak ada angka umur atap tropis; brand lain tidak disebut (sumber pabrikan lain ditulis generik). Koreksi ikut ke artikel lama: berat genteng aspal 8,5–13 → data Maxxi ±8,7–11,6 kg/m²; genteng beton 40–60 → PPURG 50 kg/m² termasuk reng & usuk; CT5/CT6 bukan laminasi (laminasi = Promaxxi); paku 1,5–2 cm → CTI 2,5 cm; kemiringan "umumnya 15°" → Maxxi 15°, CTI 10–15° dengan overlap underlayment 150 mm; 130 km/jam hanya Promaxxi (Maxxiroof 60 mph). Javabitumen tidak punya dokumen resmi yang bisa diakses (domain suspended) → spesifikasinya tidak ditulis. Artikel memakai layout bersama `src/layouts/Artikel.astro` (juga untuk /area nanti); sumber artikel ikut ke JSON-LD `citation` (GEO). Topik "ukuran/isi per bundel" sengaja tidak dibuat (DECISIONS 026).

## 030 · 3 November 2026 · Kalkulator publik cukup luas + merek, spek pendukung jadi daftar cakupan
Revisi Bang Yusuf lewat Rama: pelanggan tidak diberi pilihan spek. Publik hanya isi luas dan merek; harga = patokan terpasang per m² (`harga.merek.X.terpasang`) × luas lewat `estimasiPublik`. Spek pendukung tampil sebagai "Sudah termasuk" (multiplek 12 mm / GRC 9 mm, underlayment / membrane torching, flashing U, skrup & paku, jasa pasang, ongkir material Jabodetabek — nominal ongkir tidak ditampilkan) dan "Belum termasuk" (transport & tempat tinggal tukang di luar Jabodetabek, ongkir material luar Jabodetabek, scaffolding); daftarnya di `harga.termasuk` / `harga.tidakTermasuk`. Kalkulator /internal tetap lengkap (semua pilihan, qty, rincian, kota). Aturan Rama: multiplek 9 mm tidak pernah disebut — standar pemasangan atap bitumen 12 mm.

## 031 · 3 November 2026 · Halaman per daerah (/area) berbasis data iklim resmi, bukan tukar nama kota
Permintaan Rama: halaman khusus per daerah untuk SEO (termasuk luar Jabodetabek) dan perkuat GEO. Permintaan per kota terbukti ada di autocomplete ("tukang atap bocor jakarta barat/depok/tangerang/bogor", "atap bitumen jakarta/bogor/tangerang", "atap bitumen bandung/bali/batam/balikpapan"). Supaya tidak dianggap doorway page, setiap halaman wajib berisi data lokal bersumber (BPS, sumber data BMKG: curah hujan, bulan terbasah/terkering, hari hujan, ketinggian) dan saran atap yang mengikuti data itu; riset di `docs/riset/data-lokal-area.md`. Terbit 11 halaman: Jakarta (satu halaman untuk 5 kota administrasi karena hanya ada satu stasiun utama, Kemayoran), Kota Bogor, Kabupaten Bogor, Kota Tangerang, Kabupaten Tangerang, Tangerang Selatan, Bandung, Bali, Batam, Palembang, Balikpapan. Ditunda sampai data curah hujan resmi ditemukan: Depok, Kota/Kabupaten Bekasi, Surabaya. Pembaruan 3 Nov: Kota Bekasi (pos hujan Perum Jasa Tirta II di buku BPS) dan Surabaya (Stasiun Perak I & Maritim Tanjung Perak) terbit; Depok dan Kabupaten Bekasi terbit atas permintaan Rama dengan data resmi lain (puting beliung Podes 2024, jenis atap BPS Jabar 2019, ketinggian, desa tepi laut) dan menyatakan terus terang bahwa data hujan lokalnya belum ada. Total 15 halaman area. Nama kecamatan tidak ditulis (belum dicocokkan ke daftar resmi Kemendagri). Luar Jabodetabek tanpa harga per m² (dihitung bersama admin); pengalaman tim hanya disebut untuk Bandung, Sumatra, Kalimantan sesuai `bisnis.survey.pengalamanLuar`. Teknis: koleksi `area` (field `cakupan` = nama di `bisnis.area`), halaman `/area/[slug]` memakai layout `Artikel.astro` + JSON-LD `Service` (areaServed, provider) + FAQPage + daftar sumber; hub `/area` (ItemList); kota di bagian Area beranda otomatis jadi tautan; footer grup "Area layanan"; `llms.txt` memuat daftar area.

## 032 · 3 November 2026 · Tampilan HP = aplikasi native (desktop tetap situs)
Permintaan Rama: di HP situs harus terasa 100% aplikasi native (UI, rasio, pengalaman). Acuan: skill ios-hig-design (Apple HIG) + referensi mockup aplikasi dari Rama. Dikerjakan bertahap: (1) kerangka — bilah tab bawah 49 pt (Beranda, Hitung, Chat di tengah, Merek, Garansi; aktif mengikuti bagian yang dibaca) dan bilah atas 52 pt yang jadi kaca buram saat digulir, keduanya di Header.astro supaya ikut tampil di semua halaman; tombol Chat melayang dihapus di HP. (2) halaman dipendekkan — layanan & empat kartu AKAL jadi kartu geser ke samping (scroll-snap, kartu berikut mengintip), panduan jadi daftar bergambar kecil; tinggi beranda HP 23.400 → 19.300 px. (3) berikutnya: bagian sebagai "layar" kartu membulat. Skala ukuran HP lewat token --hp-* di global.css (judul bagian 26, isi 16, tombol 44). Desktop (≥48rem) tidak berubah.

## 033 · 3 November 2026 · Artikel per persona berbasis jurnal + artikel bahasa Inggris untuk ekspat
Permintaan Rama: artikel untuk pemilik usaha, mahasiswa, instansi, orang yang mau bangun rumah, dan ekspat (bahasa Inggris), dilengkapi data jurnal. Riset keyword per persona di `docs/riset/keyword-persona-2026-11-03.md` (autocomplete + Trends); jurnal di `docs/riset/jurnal-atap.md` (±35 sumber lewat OpenAlex; Google Scholar memblokir akses otomatis dan tidak diakali). Terbit 8 artikel Indonesia (biaya per ukuran rumah, ganti atap + PBG, spesifikasi teknis/RKS, atap ruko-kafe-kos, atap rumah tidak panas, ganti atap asbes, beban atap & baja ringan, atap sekolah-masjid-gereja) dan 3 artikel Inggris (asphalt shingles Indonesia, best roof tropical climate, Bali villa roof). Aturan tambahan: klaim hukum dikutip dari naskah resmi (PP 16/2021 Pasal 1 angka 39 dan Pasal 262 ayat 2–3, dibaca dari PDF JDIH BPK); tidak ada klaim "penelitian membuktikan bitumen paling sejuk/senyap/awet" karena studi bitumen di Indonesia tidak ditemukan; artikel asbes mengikuti WHO tanpa menakut-nakuti; nilai TKDN tidak ditulis (arahkan ke inventaris Kemenperin). Teknis: kategori panduan bertambah Usaha/Proyek/Teknis; koleksi `guides` (Inggris) di `/en/guides`, layout `Artikel.astro` dua bahasa, `Base.astro` punya prop `lang` dan `alternates` (hreflang timbal balik lewat field `padanan`). Header (menu desktop, lembar menu HP, tombol WA) dan Footer ikut prop `lang`, jadi halaman /en utuh berbahasa Inggris; tautan ke kalkulator tetap ke beranda Indonesia.

## 034 · 3 November 2026 · Variasi dari tiga situs acuan (Lupitor, Lockeroom, Harper Ave.), tanpa rombak
Permintaan Rama: halaman sudah bagus tapi terasa monoton; ambil bagian menarik dari lupitor.com, lockeroomgym.com, harper-ave.com tanpa merombak total, termasuk section yang belum ada datanya. Dari 17 kandidat, Rama setuju 5 rekomendasi:
1. **Bento bukti (Lockeroom, desktop ≥64rem):** strip 6 fakta jadi kotak beda ukuran, tiap kotak membawa gambaran kecil isinya (kertas kontrak bertanda tangan, pill merek, nama 13 kota, pita meteran, 5 ruas tahun garansi, kartu rekening PT + "rekening pribadi" dicoret). HP tetap 2×2 yang sudah disetujui (markup sama, gambaran disembunyikan).
2. **Garis denah (Lupitor, desktop):** utilitas `.denah` di global.css — garis datar selebar layar + garis tegak di luar tepi konten + tanda "+" di sudut. Dipasang di Pilih merek dan Rapor. Lapisan tidak diberi karena sudah bergaya gambar teknik dan sudah terurai saat digulir (usulan "lapis tersusun" tidak dibangun ulang).
3. **Kartu contoh Hitung AKAL di hero desktop (Lupitor):** tiga contoh bergantian (90 m² Maxxi, 120 m² CTI, 180 m² Javabitumen), angka dari `estimasiPublik` yang sama dengan kalkulator, menaut ke #hitung. HP tidak diberi (hero HP sengaja ringkas, permintaan Rama sebelumnya).
4. **Wordmark raksasa di footer (Harper):** logo resmi lewat komponen Logo selebar konten; logo kecil di baris identitas dihapus supaya tidak dobel.
5. **Deretan logo klien (Lockeroom):** `src/components/LogoKlien.astro` + `src/data/klien.ts`. Tidak tampil selama daftar kosong; ≥5 logo berjalan pelan (berhenti saat disorot, diam bila gerak dikurangi). Diuji dengan data uji sementara lalu dikosongkan lagi — tidak ada logo contoh/palsu.
Yang sengaja tidak diambil: huruf serif miring (aturan font), popup (Lockeroom), scroll halus Lenis/WebGL (berat di HP), testimoni/logo contoh.
Sekalian diperbaiki: parallax hero memakai view-timeline yang ikut `scroll-padding-top` header, sehingga foto hero HP sudah turun ±14px sebelum digulir (celah abu di atas foto, dilaporkan Rama). Diganti `scroll(root)` dengan rentang 0–100vh; teks hero desktop juga tidak lagi setengah pudar di posisi awal.

## 035 · 4 November 2026 · Tanpa "Cek Atap Gratis"; perawatan lewat laporan WhatsApp; bento tanpa Kontrak & Rekening
Permintaan Rama: (1) kotak "Kontrak" dan "Rekening resmi" di bento bukti beranda dihapus (bento desktop 3 kolom: garansi | merek + survey | kota; HP 2×2). (2) Bagian "Cek Atap Gratis" (tim datang memeriksa setelah musim hujan) dihapus karena tidak ditawarkan: perawatan dilayani lewat laporan foto/video WhatsApp; tim datang ke lokasi hanya bila ada kebocoran atau kerusakan. Langkah klaim garansi "Pengecekan" diubah sesuai itu (batas 3 hari kerja tetap). Label kecil "Kontrak tertulis" di hero belum diubah, menunggu keputusan Rama.

## 036 · 4 November 2026 · Tambah merek Tegola & Victory; tanpa klaim TKDN/produk lokal; batas kemiringan dari pabrik
Permintaan Rama: (1) Tegola dan Victory masuk daftar merek (`bisnis.merek`, bento "5 merek", hero, deskripsi, tabel perbandingan, FAQ). Harga belum ada (menunggu Bang Yusuf), jadi tabel menampilkan "Tanya admin" dan kalkulator tetap 3 merek berharga; spesifikasi menunggu riset dokumen resmi (`docs/riset/brand-tegola-victory.md`). (2) Klaim TKDN dan "produk lokal/diproduksi di Indonesia" tidak dicantumkan untuk merek mana pun ("jangan self proclaim"): pilihan pemandu merek "Proyek perlu TKDN atau produk lokal" diganti "Ingin pola atap yang berbeda" (CTI CT5/CT6, sumber situs CTI); TKDN dihapus dari kartu proyek, tabel merek, artikel, dan panduan Inggris. Artikel pengadaan hanya mengarahkan cek ke inventaris Kemenperin. (3) Teks "kemiringan minimal yang kami pasang 5 derajat" di beranda diganti batas pabrik (Maxxi 15°, CTI 10° dengan cara khusus) — 5° tidak bersumber.

## 037 · 4 November 2026 · Tidak menjanjikan kontrak di situs
Permintaan Rama: "Kontrak tertulis" dihapus; kesepakatan dibicarakan setelah calon klien menghubungi lewat WhatsApp; situs tidak boleh terlalu menjanjikan. Dihapus: label hero "Kontrak tertulis", tahap "Kontrak" di Cara kerja (kini 6 tahap; pembayaran di tahap tiga), kata kontrak di FAQ cara bayar, langkah klaim garansi ("nomor kontrak" → nama pemilik dan alamat), dan catatan tabel merek ("sebelum kontrak" → "sebelum pemesanan").

## 038 · 4 November 2026 · Spesifikasi Tegola dari dokumen pabrik; Victory belum terverifikasi
Riset `docs/riset/brand-tegola-victory.md`: Tegola diverifikasi dari TDS, DoP, panduan pasang, dan halaman garansi Tegola Canadese (Italia). Tabel beranda memuat seri Premium (satu lapis, 1000 × 340 mm, ±10,7 kg/m²) dan Master (dua lapis, ±12,3 kg/m²), batas paku biasa 14° (Master 19°; 5–14° hanya dengan membran/torch khusus), dan garansi ditulis "terbatas terdaftar hingga 40 tahun, bertahap" karena ganti penuh hanya 5–10 tahun pertama. Klaim yang tidak dipakai: tahan angin 240 km/jam (hanya UNICA/Ultimetal HD), Broof UNICA (masih uji internal), suhu -70/+90°C, asal produksi/TKDN. Victory: pabrikan dan negara asal tidak ditemukan di sumber resmi (hanya reseller) → tabel tetap "menunggu dokumen resmi"; minta label kemasan, brosur/TDS, kartu garansi, dan nama perusahaan pemasok.

## 039 · 4 November 2026 · Magnific lewat MCP (scope proyek) dengan aturan hemat kredit
Permintaan Rama: pakai MCP Magnific seperti di repo Studio Konten. `.mcp.json` mendaftarkan server HTTP `https://mcp.magnific.com` (tanpa token di repo; login OAuth oleh Rama lewat `/mcp`). Kredit dipakai bersama semua proyek Rama (Premium+ 45.000/bulan, reset tanggal 19). Aturan (meniru DECISIONS 009 Studio Konten): (1) sebelum generate cek `account_balance` + `simulate_cost`, lapor "biaya ±X, sisa Y", tunggu "ok" Rama per item; (2) eksplorasi dengan model murah, versi final dengan model bagus, maks 2 variasi, upscale hanya final; (3) tiap generate dicatat (tujuan, model, kredit, prompt) di `docs/magnific-log.md`; (4) hasil AI selalu berlabel ilustrasi, tidak pernah diklaim proyek Atapura; logo & teks tidak digenerate; foto proyek dari situs pabrik tidak dipakai/diedit — penerapan dibuat ulang sebagai ilustrasi (keputusan Rama 4 Nov).

## 040 · 4 November 2026 · Halaman Produk & layanan dan halaman per merek
Permintaan Rama (acuan struktur: situs katalog atap pesaing yang tidak disebut di situs): menu navigasi "Produk & layanan" → `/produk` (daftar 5 merek + layanan) dan `/produk/[slug]` per merek (tentang, slip ringkasan bertitik, seri + spek + diagram bentuk potongan SVG, warna, penerapan, garansi, aksesori, merek lain, sumber). Keputusan Rama: data digabung dari katalog pihak ketiga dan dokumen resmi (pihak ketiga hanya bahan internal, dicocokkan, tidak disebut, teks ditulis ulang, tanpa TKDN); foto penerapan dibuat ulang lewat Magnific sebagai ilustrasi berlabel (foto proyek situs pabrik tidak dipakai/diedit karena hak cipta); kelima merek sekaligus — Javabitumen & Victory menyatakan terus terang bahwa spesifikasi menunggu dokumen resmi. Data di `src/data/produk.ts`; harga tetap dari `harga.ts`. Warna tampil sebagai contoh bertekstur (perkiraan, ajakan cek sampel fisik).

## 041 · 4 November 2026 · Warna merek hanya dari daftar resmi; ilustrasi penerapan pertama
Riset `docs/riset/produk-per-merek.md`. Halaman merek menampilkan warna yang ada di daftar resmi pabrik/distributor saja (CTI CT3 6 solid + 6 gradasi, CT5/CT6 6; Maxxiroof 9, Promaxxi 3; Tegola Premium Rectangular 10 dengan kode pabrik; Javabitumen 15 solid + 5 gradasi dari situs distributor). Warna yang hanya ada di katalog pihak ketiga (mis. CTI SG, BR, BU, URG, CBB, PEG) tidak ditampilkan sampai stoknya dikonfirmasi. Hex adalah perkiraan layar, ditandai di halaman dengan ajakan cek sampel fisik. Ukuran resmi CT5 = 1.000 × 317,5 mm, 22 lembar. Ilustrasi penerapan Magnific: 4 dipakai (CT3, Promaxxi, Tegola Traditional, Tegola Master), 2 ditolak (lihat `docs/magnific-log.md`).

## 042 · 5 November 2026 · Foto seri, contoh warna foto, dan penerapan beratap rectangular
Permintaan Rama: diagram SVG bentuk potongan diganti foto yang terlihat asli, contoh warna juga harus real, dan semua ilustrasi penerapan memakai atap rectangular.
- Foto seri: 9 close-up genteng terpasang dibuat di Magnific (Nano Banana 2.1, 1K) dengan potongan katalog resmi sebagai acuan bentuk (CT3, CT5, CT6, Maxxiroof, Promaxxi, Tegola Rectangular). File di `assets/gambar/seri/<merek>-<seri>.jpg`; komponen `BentukGenteng` dihapus. CT5 ternyata bukan zigzag melainkan lidah persegi acak dengan celah bayangan; fotonya sekarang mengikuti katalog.
- Contoh warna: foto seri diubah ke luminans lalu diwarnai ulang sesuai hex tiap warna (variasi bercak lebih kuat untuk warna gradasi/2 tone), satu foto per warna di `assets/gambar/warna/<tekstur>-<nama>.jpg`. Kunci `tekstur` per kelompok warna di `produk.ts`. Alasannya: tekstur dan bentuk tetap foto, biaya 0 kredit, dibanding ±60 gambar × 50 kredit. Javabitumen memakai tekstur 3-tab karena contoh resminya 3-tab. Warna di layar tetap disebut perkiraan.
- Penerapan: 6 ilustrasi diedit di Magnific dengan foto lama sebagai acuan (adegan sama, atap diganti potongan rectangular/3-tab; Promaxxi laminasi bertab persegi). Keterangan dan alt disesuaikan, label "bukan proyek Atapura" tetap.

## 043 · 5 November 2026 · Victory: harga, seri Standar & Two Tone, warna
Data dari Rama: satu bundel 21 lembar untuk 3 m²; dua seri, Standar Rp220 ribu dan Two Tone Rp260 ribu per m² (genteng saja); terpasang Rp500–550 ribu per m² di Jabodetabek dengan spek pendukung sama dengan merek lain (multiplek 12 mm, underlayer, flashing U).
- `harga.ts`: merek `Victory` (kelas "Atas", genteng 220 rb, terpasang 500–550 rb). Kalkulator publik memakai angka terpasang Rama. Rumus kalkulator internal dengan genteng Standar menghasilkan ±467–517 rb/m², lebih rendah dari angka Rama, jadi Victory tidak ikut uji kalibrasi; harga Two Tone hanya tampil di halaman produk.
- Warna: Rama mengonfirmasi seri Two Tone = seri kedua yang ia maksud. 6 warna Standar + 6 Two Tone diambil dari katalog pihak ketiga (tidak disebut di situs), dengan catatan ketersediaan dipastikan saat survey. Contoh warna dibuat dari foto seri, cara yang sama dengan DECISIONS 042.
- Pabrikan, ukuran lembar, dan garansi pabrik Victory tetap ditulis "menunggu dokumen resmi" (`terverifikasi: false`).

## 044 · 18 November 2026 · Rangka baja ringan per merek (Taso, Hi-Steel, K-Steel) + lini produk
Data Bang Yusuf (via Rama, 18 Nov): paket rangka terpasang termasuk material, aksesori (screw + dynabolt), dan jasa pasang — Taso C-Truss 0,75 / reng 0,45 Rp230 rb/m², Hi-Steel C-Truss 0,75 / reng 0,40 Rp200 rb/m², K-Steel C-Truss 0,75 / reng 0,40 Rp195 rb/m²; jasa pasang rangka saja Rp55 rb/m². Rama memilih **merek + harga ditulis di situs**; ini menggantikan bagian DECISIONS 028 yang melarang menulis merek baja.
- `harga.ts`: `rangka.merek` per merek + `jasaSaja`, `rentangRangka` (195–230 rb). Angka lama 220 rb diganti di kalkulator (internal: pilih merek; publik: "Rp195–230 rb per m², tergantung merek"), tabel & FAQ beranda, dan 3 panduan.
- `produk.ts` punya `lini` (`atap` | `plafon` | `rangka`) + `LINI` (label, kategori schema, sebutan "seri/merek" dan "warna/motif"). Halaman `/produk` dikelompokkan per lini; `/produk/[slug]` memakai label lini. Rangka satu halaman `/produk/rangka-baja-ringan` dengan tiga merek sebagai baris pilihan (tanpa foto per merek, karena profil baja ketiganya sama).
- Fakta publik hanya yang bersumber (`docs/riset/rangka-baja-ringan.md`): Taso buatan PT Tatalogam Lestari, baja G550, profil SNI 8399:2017; Hi-Steel G550 Zincalume AZ70 menurut pemilik merek. Garansi rangka tidak dijanjikan ("dijelaskan saat penawaran") sampai ketentuannya jelas.
- Perlu dicek ke Bang Yusuf: reng K-Steel 0,40 mm tidak ada di spesifikasi resmi CBM K-Steel (0,45–0,50 mm TCT) dan K-Steel yang dipakai buatan siapa; durasi garansi Taso (garansi gugur bila screw bukan buatan Tatalogam); garansi pemasangan rangka.
- Atapura Ops memakai rumus yang sama (Ops DECISIONS 018/052, rangka 220 rb di resepnya) — perlu disalin ke Ops oleh sesi Ops.

## 045 · 18 November 2026 · Lini plafon (Shunda, Javafon), katalog bergaya toko online, posisi beranda
- **Plafon** (Bang Yusuf via Rama, 18 Nov): terpasang per m² Shunda Rp300–370 rb, "Java Plafon" Rp200–260 rb, termasuk plafon + rangka hollow + jasa; tidak termasuk lis, drop ceiling, listrik & lampu, bongkar plafon lama. "Java Plafon" tidak ada sebagai merek; Rama mengonfirmasi = **Javafon** (grup Javaco). Garansi: material 10 tahun sesuai produsen, pemasangan plafon 1 tahun dari Atapura. Harga barang saja belum ada → "Tanya admin". Durasi kerja plafon belum ada → kalkulator tidak menampilkan hari kerja untuk plafon.
- Halaman `/produk/shunda` dan `/produk/javafon` memakai template merek yang sama (lini `plafon`, sebutan "motif"). Fakta hanya dari sumber resmi (`docs/riset/plafon-merek-kompetitor.md`): pemilik merek, bahan PVC, lebar/tebal/panjang, 40 & 75 motif berkode, cara pasang & perawatan Shunda. Klaim tahan air/rayap/api dan TKDN Javafon **tidak ditulis** (tanpa uji / aturan proyek). Motif ditampilkan sebagai nama + kode (dilipat per kelompok), karena 115 foto motif tidak realistis dibuat dan foto pabrik tidak dipakai; foto motif asli dikirim lewat WhatsApp.
- **Kalkulator**: langkah pertama "Atap / Plafon"; plafon = harga terpasang × luas, cakupan termasuk/tidak termasuk dari Bang Yusuf, tanpa baris "material dibayar sebelum dikirim". Luas minimum turun ke 10 m². Tautan `/?merek=<nama>#hitung` dari halaman produk langsung memilih merek (atap atau plafon). `harga.berlakuSejak` → 18 Nov 2026.
- **Katalog** (permintaan Rama: "seperti e-commerce, ada foto produk, ikon bisa diklik"): komponen `KartuProduk` (foto sampul = ilustrasi penerapan → foto seri → contoh warna, nama, atribut singkat, harga per m² dengan "Rp" kecil, tombol panah bulat; seluruh kartu satu tautan; HP 2 kolom). Dipakai di `/produk` dan "Merek lain". Kartu layanan = baris ala aplikasi dengan ikon garis buatan sendiri (`IkonLayanan`), teks satu kalimat, tanda ">"; ditambah layanan "Pasang plafon" dan "Rangka baja ringan".
- **Posisi** (Rama: "pelajari dulu baiknya gimana"): beranda tetap fokus atap bitumen (seluruh konten SEO, kalkulator, dan nama AKAL dibangun untuk atap; mengubah judul utama memecah fokus kata kunci yang sedang dikejar). Plafon & rangka jadi lini kedua yang jelas: halaman katalog `/produk` dikelompokkan per lini dengan judul "Dari rangka sampai plafon, satu tim yang pasang", kalkulator bisa plafon, deskripsi bisnis/JSON-LD `knowsAbout`/`llms.txt` menyebut plafon PVC & rangka. Kompetitor plafon yang diriset semuanya menjual atap + plafon + baja ringan sekaligus, jadi menawarkan ketiganya wajar; artikel plafon menyusul bila diminta.
- Javabitumen kini punya ilustrasi penerapan (3-tab coklat gradasi, bentuk mengikuti contoh resmi distributor) supaya kartunya berfoto seperti merek lain.

## 046 · 18 November 2026 · Tipografi hibrida: Public Sans untuk yang besar, Inter untuk teks
Rama minta belajar tipografi dari Atapura Ops (Ops memakai huruf sistem SF Pro/Roboto untuk antarmuka karena Public Sans terlihat lebar di HP; Public Sans tetap untuk logo/PDF). Pilihan Rama: **hibrida di HP maupun desktop** — "font besar dan utama tetap ciri khas Atapura, teks kecil boleh font lain yang lebih enak dibaca" — lalu "disamakan saja, jangan dibedakan di dua device".
- SF Pro **tidak boleh** dipakai: lisensi Apple (developer.apple.com/fonts) hanya untuk mock-up antarmuka aplikasi di platform Apple; melarang embed, "website content", dan pemakaian di OS non-Apple. File SF Pro di Downloads Rama tidak dipakai.
- Teks kecil = **Inter** (dipilih Rama dari spesimen Inter vs Roboto; paling mirip SF Pro, dipakai Linear & Notion), self-host `public/fonts/Inter-Variable-latin.woff2` + lisensi `docs/lisensi/Inter-OFL.txt`, preload di `Base.astro`. `--font-sans` = Inter (bawaan halaman), `--font-merek` = Public Sans untuk logo (SVG), h1–h3, dan daftar teks besar non-judul di `global.css` (angka kalkulator, angka garansi, judul hero, dst.).
- Ritme teks mengikuti ukuran Apple (diukur langsung dari apple.com: isi 17/25, tracking dirapatkan) yang disesuaikan untuk Inter: baris 1,5, tracking -0,011 em.
- Pengukuran situs acuan (18 Nov, Chrome headless): Apple SF Pro (judul 600, 56/60), Stripe Söhne, Linear Inter Variable (judul 510), Notion NotionInter, Airbnb Cereal. Mereka memakai satu keluarga huruf (Apple memisah Display/Text dalam satu keluarga); hibrida dua keluarga di Atapura dipilih Rama untuk menjaga ciri Public Sans.
- `DESIGN.md` §Typography dan halaman `/branding` bagian Huruf diperbarui (dua spesimen, skala menyebut font per tingkat).

## 047 · 18 November 2026 · Nilai SEMENTARA dari riset pasar, dikoreksi Bang Yusuf Kamis 19 Nov
Rama: "gausah tanya Bang Yusuf, gas aja dulu pasang, nanti Kamis gua ketemu dia baru dikoreksi". Nilai di bawah berasal dari riset (situs resmi, distributor, kompetitor), bukan dari partner; di kode ditandai komentar `SEMENTARA`.
- **Rangka** (`docs/riset/jawaban-yusuf-rangka.md`): garansi pemasangan rangka 5 tahun (melendut/bergeser akibat kesalahan pasang; disamakan dengan atap, pasar mengiklankan 10 tahun tanpa rincian cakupan); Taso garansi tahan karat 10 tahun dari Tatalogam dengan syarat pabrik; Hi-Steel & K-Steel tanpa garansi pabrik tertulis (tidak diklaim); survey gratis Jabodetabek juga untuk rangka (9 dari 15 penyedia menawarkan); lama pasang ±20–30 m² per hari per tim (studi 63 proyek + kontraktor). Reng K-Steel tetap ditulis "0,40 mm" tanpa klaim lapisan/SNI.
- **Plafon** (`docs/riset/jawaban-yusuf-plafon.md`): harga barang saja per m² dari median pasar — Shunda Rp150–230 rb (20 cm ±150–170, 30 cm laminated ±225), Javafon Rp165–215 rb (Glossy & Matte ±165, Laminated ±170, Ultra ±215); lama pasang 15–25 m² per hari per tim 2 orang (kalkulator: hari = ⌈luas/25⌉–⌈luas/15⌉, tanpa +1); survey gratis Jabodetabek juga untuk plafon (11 dari 12 pemain menawarkannya). **Garansi material "10 tahun" dari Bang Yusuf dicabut sementara**: tidak ada bukti tertulis di sumber resmi Shunda/Javafon (agen Shunda pernah menyebut 5 tahun) → ditulis "mengikuti ketentuan pabrik" sampai ada dokumen; garansi pasang 1 tahun tetap.
- **Tegola** (`docs/riset/harga-tegola.md`): genteng saja Premium ±Rp420 rb/m² (median 5 toko, Premium Rectangular 3,05 m²/bundel), Master ±Rp550 rb/m² (turunan rasio blog, keyakinan rendah); terpasang Rp700–750 rb/m² dari rumus `hitungEstimasi` spek standar (kelas "Premium", ikut uji kalibrasi). Tegola kini ada di kalkulator, tabel merek, FAQ, dan katalog. Belum termasuk Startbar (wajib untuk garansi pabrik di kemiringan 14–60°; harganya tidak ditemukan).
- Catatan untuk Kamis (plafon): material Javafon Ultra saja ±Rp194–230 rb/m², jadi harga terpasang Javafon Rp200–260 rb kemungkinan tidak menutup seri Ultra (perkiraan ±Rp263–299 rb); bukti garansi 10 tahun; isi per dus Javafon (12 atau 15).
- Pertanyaan untuk Kamis: screw yang dipakai merek apa (garansi Taso gugur bila bukan Tatalogam), beli Taso di reseller resmi mana, foto label/emboss reng K-Steel, garansi pasang rangka yang biasa diberikan, ukuran tim.

## 048 · 19 November 2026 · Paku 35/m², skrup 15 per lembar alas, flashing dari keliling atap
Koreksi lapangan Rama, sama persis dengan Resep Pasang Atapura Ops (DECISIONS 092 di sana; kalkulator website & aplikasi wajib identik):
paku bitumen 35 per m² (dibulatkan ke 100), skrup 15 per lembar alas 122×244 cm (lembar × 15), flashing per meter lari di
semua tepi keliling atap (10×10 m → 40 m ÷ 1,2 = 34 batang); dari luas saja = keliling persegi 4 × √luas. 100 m² CTI spek
standar jadi Rp39,75–44,75 jt. Atap kecil sedikit lebih mahal per m² (keliling relatif panjang) → toleransi uji kalibrasi
terhadap kisaran terpasang Bang Yusuf dilebarkan ±15 → ±20 rb; kisaran terpasang per merek perlu dicek ulang Bang Yusuf.

## 049 · 19 November 2026 · Starter bitumen = keliling × 12,5 cm, dihargai genteng per m²
Sama dengan Atapura Ops DECISIONS 095–096: starter (strip lembar genteng tanpa daun, lebar 12,5 cm — Rama) di keliling atap,
m² = keliling × 0,125 (dari luas saja: 4 × √luas), harga = genteng per m² merek terpilih. Cocok dokumen Bang Yusuf (Olen
77,44 m → 9,68 m²; Naryo 58,96 m → 7,37 m²). Hanya kalkulator internal & daftar kebutuhan berubah; harga publik tetap kisaran
terpasang Bang Yusuf. Atap kecil kini di atas batas atas kisaran (60 m² +15…+32 rb/m²) → toleransi uji ±35 rb sampai kisaran baru.

## 050 · 19 November 2026 · Halaman aksesoris + menu "Artikel"
Rama: "lengkapi produk kita (acuan dokteratap.co.id)" untuk underlayer, multiplek, flashing U, GRC, paku, skrup, membrane, baja ringan, dan aluminium foil, plus "tambahin halaman artikel / blog di top bar". Pasangannya di Atapura Ops: DECISIONS 102.
- **/produk/aksesoris**: satu halaman berisi 10 barang. Polanya sama dengan baris "Pilihan seri": foto bila ada, nama + fungsi, lalu rincian spek dan harga. Data di `src/data/aksesoris.ts`. Harga hanya dari `harga.ts`: barang tanpa harga (aluminium foil) tampil "Tanya admin", dan rangka tampil "mulai Rp195.000 / m²" dengan tautan ke halamannya. Spek dicocokkan dengan halaman produk dokteratap.co.id (usaha Bang Yusuf) tanpa disebut sebagai sumber publik, sesuai aturan DECISIONS 038–039. Ukuran tambahan (GRC 8/10/12 mm dan lain-lain) belum ditampilkan sampai ada harga dari Bang Yusuf. Schema: BreadcrumbList + ItemList Product (Offer hanya untuk yang berharga tunggal).
- **/produk** dapat kelompok **Aksesoris** berupa baris ringkas tanpa foto (nama, ukuran, harga per satuan), supaya tidak ada kotak foto kosong di halaman publik. Catatannya menyebut terus terang: rangka dan aluminium foil **tidak** termasuk harga terpasang atap.
- **Foto**: foto dokteratap tidak dipakai (ber-watermark Dokter Atap). Yang sudah ada dipakai ulang: multiplek, flashing Z, aluminium foil, rangka. Enam gambar baru (underlayer, membrane, flashing U, GRC, paku, skrup) dibuat Claude lewat MCP Magnific dengan izin Rama, 19 Nov, 520 kredit termasuk 2 ulangan (`docs/magnific-log.md`, prompt `docs/desain/prompt-magnific-aksesoris.md`). File `aksesoris-<slug>-3x2.jpg` langsung terpakai tanpa ubah kode.
- **Menu "Artikel"**: halaman artikel sudah ada sejak awal di `/panduan` (21 artikel). Label menu atas (laptop & HP) diganti dari "Panduan" menjadi "Artikel". URL tetap `/panduan` supaya peringkat Google tidak hilang, dan `/artikel` serta `/blog` dialihkan ke sana (`vercel.json`). Judul halamannya tetap "Panduan atap bitumen".

## 051 · 19 November 2026 · Pricelist PDF sebagai template dari data situs
Rama: "bikinin pdf pricelist atapura … harga harus jelas … bagus dan elegan … generate gambar dari Magnific, cinematic, keliatan setiap produk menempel di bangunan", dan "disimpan sebagai template, nanti pasti banyak yang direvisi dan ditambahkan".
- **Halaman sumber** `src/pages/internal/pricelist.astro` (noindex, tidak masuk sitemap). Ada 12 halaman A4: sampul, ringkasan semua harga, satu halaman per merek atap (Javabitumen → Tegola, urut harga), plafon, rangka, aksesoris, ketentuan (termasuk/tidak, termin bayar, garansi, survey), dan sampul belakang dengan QR WhatsApp. Semua angka dibaca dari `harga.ts`, `produk.ts`, `aksesoris.ts`, dan `bisnis.ts`, tidak ada harga yang diketik di desain. Dengan begitu revisi cukup di data, lalu `npm run pricelist`.
- **Cetak** `tools/pricelist/render.mjs`: server file kecil untuk `dist/` + Chrome headless `--print-to-pdf`. `astro preview` sengaja tidak dipakai karena hanya boleh satu per mesin. Chrome dipanggil async, karena kalau sync servernya macet. Gambar dipaksa JPEG + eager supaya PDF ±9 MB (webp membuat PDF 35 MB) dan tidak ada gambar kosong. PDF tidak di-commit; cara revisi ada di `docs/pricelist/README.md`.
- **Foto**: 9 ilustrasi sinematik baru (`pricelist-*.jpg`) dibuat lewat MCP Magnific dengan close-up seri sebagai acuan bentuk genteng, 650 kredit (`docs/magnific-log.md`). Semuanya berlabel "Ilustrasi, bukan proyek Atapura".
- **Catatan harga**: Tegola dan harga barang-saja plafon masih SEMENTARA (riset pasar, menunggu koreksi Bang Yusuf). Angkanya sama dengan yang sudah tampil di website.

## 052 · 19 November 2026 · Plafon disembunyikan (sakelar), Tegola Eco Roof & Top Shingles, pricelist per merek dengan motif & warna lengkap
Masukan Rama pada pricelist (DECISIONS 051), 19 Nov malam:
- **Plafon disembunyikan, tidak dihapus**: "harga belum fix dan belum ada vendor rekanan resmi … di hide dulu, nanti bisa ditampilkan lagi". Satu sakelar `TAMPIL_PLAFON` (sekarang false) ada di `src/data/bisnis.ts`. Yang ikut sakelar: daftar produk (`produk` difilter, sehingga halaman /produk/shunda dan /produk/javafon tidak dibangun), layanan "Pasang plafon", pilihan Atap/Plafon di kalkulator Hitung AKAL, kalimat beranda dan halaman Produk, deskripsi usaha, llms.txt, schema `knowsAbout`, serta halaman & tabel plafon di pricelist. Data plafon di `produk.ts`/`harga.ts` utuh. Untuk menampilkannya lagi cukup ganti ke `true`.
- **Tegola Eco Roof & Top Shingles** masuk sebagai seri: motif, ukuran, berat, isi bundel, dan garansi dicocokkan dengan katalog distributor. Harga SEMENTARA ±10% di bawah brosur Dokter Atap 2025, sama dengan pola Premium; pilihan Rama: Eco Roof Rectangular ±315 rb, Traditional ±330 rb, Hexagonal ±350 rb, Top Shingles ±360 rb per m². Warna Eco Roof (4 mixed) dan Top Shingles (6, kode dari brosur 2025) masih berupa perkiraan warna layar. Ada 4 close-up motif baru dari Magnific di `assets/gambar/seri/tegola-eco-roof-*.jpg` dan `tegola-top-shingles-rectangular.jpg`.
- **Pricelist**: label kelas diganti negara asal (Rama: Javabitumen & Maxxi Tiongkok, CTI Indonesia, Victory USA, Tegola Italia). Kalimat Javabitumen dibuat khusus pricelist tanpa narasi kelas. Tiap merek kini dua halaman: halaman merek (semua seri dengan harga per seri; kotak harga "mulai" bila ada seri lebih murah; terpasang & isi bundel Tegola diberi label acuan Premium Rectangular), lalu halaman **Motif & warna** (Rama: "jangan dipisah dari produknya"). Halaman itu memuat close-up tiap motif, semua warna sebagai ubin besar ±27 × 22 mm (diperbesar dua kali atas permintaan Rama supaya motif terlihat), dan foto suasana yang mengisi sisa ruang (ilustrasi penerapan website yang sudah ada; Tegola tanpa foto karena halamannya penuh). Pricelist kini 16 halaman, ±13 MB.
- **Lanjutan (Rama)**: foto suasana di halaman motif & warna jangan memotong genteng → dibuat ulang di Magnific dengan ukuran persis ruang kosong (dari pengukuran halaman: 2,5:1 · 3,5:1 · 5:1 · 2,2:1), bangunan di tengah, dan diberi teks besar ala Apple di area langit atau area gelap supaya tidak menutupi atap ("20 warna.", "Sampai 30 tahun.", "Buatan Indonesia.", "Dua nada."). Halaman baru **"Satu kawasan, satu atap."** berisi foto drone cluster berbukit dengan atap seragam, untuk developer dan proyek, diletakkan setelah halaman merek. Pricelist kini 17 halaman, ±13 MB. Kalau isi halaman motif & warna berubah, rasio ruang kosongnya ikut berubah: ukur ulang, lalu buat foto baru dengan ukuran itu (cara di `docs/pricelist/README.md`).
- **Perbaikan tampilan di Preview Mac** (Rama melihat kotak abu-abu): Chrome mengubah `text-shadow`/`box-shadow` menjadi gambar buram yang di Preview tampil sebagai kotak. Semua bayangan di pricelist dihapus: teks di atas foto memakai gradasi, ubin memakai garis tepi. Logo diganti file SVG resmi karena logo ber-CSS-mask rusak di PDF. Halaman kosong ke-18 dihilangkan: pemisah halaman dipasang sebelum tiap halaman, dan halaman terakhir dibuat 280 mm berlatar Pinus. Hasil diperiksa dengan render PDFKit (mesin Preview); aturannya dicatat di `docs/pricelist/README.md`.

## 053 · 20 November 2026 · Pricelist v4 meniru referensi Rama, harga sheet Vendor, domain atapura.com
- **Desain pricelist v4** (`src/pages/internal/pricelist.astro`): v3 huruf raksasa dinilai Rama 1/10. v4 meniru 62 referensi Rama
  (disimpan di Atapura Ops `docs/desain/referensi-dokumen`, bedahnya di `REFERENSI-DOKUMEN.md`): sampul satu foto bertakik dengan
  pil "Supplier & aplikator" di takik (lengkung takik sepusat dengan ujung pil, jarak 5 mm), katalog ringkas ala katalog furnitur
  (kepala Pinus, baris merek + titik warna + pil harga, satu merek sorotan), halaman merek berbentuk krem bersudut potong dengan
  foto, panel "Genteng saja" yang rata bawah dengan foto, harga terpasang besar, tiga ikon bulat; motif & warna langsung sesudah
  mereknya; perumahan; rangka; aksesoris grid 3×3; ketentuan; sampul belakang. Judul Public Sans 500 + satu frasa diredupkan, teks
  kecil Inter (riset tipografi situs). Persetujuan bertahap dari Rama lewat mock 3 halaman (20 Nov).
- **Narasi umum** (Rama): tanpa jumlah merek ("lima merek"), tanpa klaim wilayah/"survey gratis", tanpa keterangan "foto ilustrasi"
  dan catatan warna yang berupa disclaimer. Angka yang memang perlu (jumlah warna) dihitung dari data, bukan diketik.
- Paginasi motif & warna memakai tinggi baris yang diukur di Chrome; kelompok warna yang hanya menyisakan 1–2 ubin di halaman
  berikutnya dipindah utuh; motif > 6 jadi 4 kolom. Foto suasana kedua tampil pada rasio aslinya bila sisa halaman cukup.
- **Harga dari sheet Vendor** (Atapura Ops DECISIONS 110, berlaku 20 Nov): Victory Standar 200 rb, Two Tone 220 rb, Multiplek 12 mm
  179 rb, Flashing U 40 rb. Legend 270 rb baru ada di Ops (belum ada foto/warna untuk situs).
- **Domain atapura.com** (Rama: "langsung dipasang saja", dibeli 21 Nov): ditempel ke proyek Vercel + `www` 308 ke apex; `site`
  default di astro.config jadi atapura.com. Sampai DNS diisi di registrar, situs tetap terbuka di atapura.vercel.app.
- **Lanjutan 20 Nov (Rama)**: (1) motif & warna dikelompokkan per seri ("jangan bercampur") — kunci = kata pertama nama
  motif, grup warna ikut seri yang disebut di judulnya; seri bermotif satu dengan ≤ 9 warna tampil motif kiri, warna kanan.
  (2) Tiap halaman motif & warna, termasuk lanjutan, diberi foto suasana (rasio asli, tidak dipotong): halaman menyisakan
  ±62 mm selama stok foto merek masih ada; foto dicocokkan ke seri yang disebut teksnya. Dua foto Tegola baru dari Magnific.
  (3) Halaman 2 **"Satu pintu, dari genteng sampai rangka"**: foto material lengkap (Magnific, tanpa logo) + daftar merek per
  kelompok material. Logo hanya file resmi (`assets/mitra`: Maxxi, CTI, Tegola, Hi-Steel, Tatalogam untuk Taso); merek tanpa
  file resmi (Javabitumen, Victory, K-Steel, Alphaproof, Bitumax) ditulis namanya, logo tidak dibuat ulang.

## 054 · 20 November 2026 · Product knowledge untuk sales & konten
Rama: "halaman cheatsheet buat para sales … bisa didownload pdfnya … product knowledge tentang atapura, produk dan jasanya,
spesifikasi … buat konten atau masukin produk ke e-commerce tinggal copy paste … terpusat di satu sumber."
`/internal/product-knowledge` (noindex, tautan dari /internal): profil Atapura, layanan & ketentuan (termasuk/belum termasuk, cara
bayar, garansi, klaim), lalu per merek: harga genteng & terpasang, fakta, seri + spesifikasi, warna + kode, garansi, aksesori, dan
**teks siap pakai** per seri (judul + deskripsi + spesifikasi + warna + penjual) dengan tombol Salin; aksesoris dengan harga.
Semua dibaca dari src/data (satu sumber dengan website & pricelist); tanpa harga modal. Negara asal merek pindah ke
`data/mitra.ts` (`asalMerek`). PDF A4: `npm run cheatsheet` → `public/unduh/product-knowledge-atapura.pdf` (tombol "Unduh PDF";
"Cetak versi terbaru" mencetak halaman langsung). Buat ulang PDF setiap data produk/harga berubah.

## 055 · 20 November 2026 · Satu kesatuan dengan Atapura Ops
Rama: repo website & Atapura Ops wajib saling sinkron; satu sesi boleh mengedit, commit, push, dan deploy keduanya (aturan
di CLAUDE.md). Mekanisme sinkron data (Ops = sumber harga/katalog/resep, website menarik salinan `src/data/ops.json`)
dirinci di Ops `docs/DECISIONS.md` 123 — **disetujui & berjalan 20 Nov**:
- `src/data/harga.ts` membaca harga jual per satuan, isi per bundel, dan angka kalkulator (waste, paku, skrup, produktivitas)
  dari `src/data/ops.json` (salinan `GET /api/publik/katalog` Ops, dikunci `SINKRON_SECRET`). Bentuk objek `harga` tetap, jadi
  halaman lain tidak berubah; ±5.000 kombinasi kalkulator dibandingkan sebelum/sesudah = 0 beda nilai.
- Tetap di website: teks pemasaran (kelas, garansi, spek, termasuk), kisaran terpasang per m² dari Bang Yusuf, harga plafon
  "barang saja" (masih draf tanpa harga di Ops).
- `npm run tarik-ops` (lokal: kunci dibaca dari `../Atapura Ops/.env.local`); workflow `sinkron-ops.yml` tiap jam (+ tombol
  manual): berubah → tes kalkulator → PDF product knowledge dibuat ulang → commit → deploy. Kode wajib hilang/kunci salah =
  gagal keras, ops.json lama tetap.
- **Harga diubah di Ops** (Daftar harga, Angka bisnis), bukan di file website.

## 056 · 20 November 2026 · Product knowledge: motif & warna besar dari foto tekstur asli
Rama: "warna dan motifnya masih mengulangi kesalahan yang sama, terlalu kecil; motif penting untuk dilihat mata". Sebelumnya
warna = titik 12–16 px dan kartu seri tanpa foto.
- Kartu seri menampilkan foto close-up motif selebar kartu (16:10). Warna = ubin foto tekstur seri yang diwarnai ulang
  (`fotoWarna` + `BulatWarna besar`, sama dengan pricelist), 5:4, ±6 per baris laptop, 2 di HP, 4 per baris di PDF A4; kartu
  warna & judul bagian tidak terpotong antarhalaman PDF.
- Contoh warna Tegola Eco Roof (4) & Top Shingles (6) dibuat dengan metode DECISIONS 042 (luminans foto seri × hex, rata-rata =
  hex, bercak untuk Mixed/Shaded, 480×360) — sebelumnya blok warna polos. Ikut terpakai di pricelist.
- Teks fakta panjang (email) membungkus, tidak menabrak kolom sebelah. PDF dibuat ulang (27 halaman).
- Belum: foto motif plafon Shunda/Javafon (tahap aset kit marketplace, Ops DECISIONS 125).

## 057 · 20 November 2026 · Foto wujud barang aksesoris (latar putih 1:1), mengikuti produk asli
Rama: "banyak aksesoris yang belum ada gambarnya; sales butuh lihat wujud barangnya", "harus sama persis dengan produk asli
di lapangan, cek dulu produk asli di pasaran". Kartu aksesoris product knowledge sebelumnya tanpa gambar sama sekali.
- 10 foto produk latar putih 1:1 2048 px di `assets/gambar/produk/aksesoris-<slug>-1x1.jpg` (Magnific Nano Banana 2): multiplek,
  GRC, underlayer, membrane, flashing U, flashing Z, paku, skrup, aluminium foil, baja ringan. Bentuk diacu dari foto produk asli
  pemasok (toko daring pemasok Bang Yusuf, dipakai HANYA sebagai panduan bentuk; foto baru orisinal tanpa teks/logo): flashing U
  = pelat datar berlipatan tepi (bukan kanal), flashing Z = kaki dinding tegak + kaki atap, paku bitumen batang bercincin kepala
  datar lebar ujung runcing, underlayer permukaan pasir abu muda, membrane roll hitam berfilm, GRC putih keabuan, baja ringan
  kanal C berbibir + reng topi. Setiap item satu produk identik ukurannya (diperiksa diperbesar). Latar diratakan ke #FFFFFF
  (levels / perataan cahaya lokal) supaya langsung layak jadi sampul marketplace.
- `aksesoris.ts` field `wujud` (dari slug). Kartu product knowledge: wujud barang besar + foto "saat dipasang"; PDF: kartu
  mendatar 3 per halaman, tidak terpotong.

## 058 · 20 November 2026 · Kit listing marketplace (tahap C kit marketplace, Ops DECISIONS 125)
`/internal/kit-marketplace`: per produk judul SEO (pola resmi Shopee: Merek + Model + Spesifikasi + Ukuran, kata kunci di
depan), judul pendek ≤ 70, deskripsi teks polos terstruktur (spesifikasi, warna, cara pasang, hitung kebutuhan, garansi,
ajakan survey), varian, atribut, berat & dimensi kirim, keyword; tombol salin & unduh CSV. Isi diturunkan dari
`src/data/listing.ts` ← produk.ts/aksesoris.ts/harga.ts (angka Ops)/bisnis.ts; tidak ada spesifikasi yang diketik ulang.
Satu listing genteng per seri (warna = varian, per bundel); aksesoris per barang (paku & skrup per pak, isi pak ditentukan
pemilik); jasa pasang opsional. Plafon ditunda: harga material per batang belum ada di Ops. Batas yang dipegang: judul
25–100, deskripsi ≤ 3.000 (lolos di keempat marketplace; sumber & tingkat keyakinan per marketplace tampil di halaman).
Deskripsi tanpa nomor WA/link luar (dilarang marketplace), tanpa klaim tak bersumber, tanpa batas wilayah. Yang belum pasti
masuk "Perlu dicek" (mis. isi bundel CT5/CT6 bentrok 22 lembar vs 17 lembar 2,32 m²; tinggi bundel; berat aksesoris).
Harga tayang tetap di Ops → Harga marketplace (harga modal tidak pernah di website).

## 059 · 20 November 2026 · Aset gambar marketplace dari data (tahap D kit marketplace, bagian 1)
`npm run aset-marketplace` (astro build + `tools/aset/render.mjs`): tiap slide 1080 × 1080 di
`/internal/aset-marketplace/<id>/<no>` dipotret Chrome headless → JPG (sips, ≤ 1 MB, batas Blibli) di
`public/unduh/marketplace/<id>/<no>-<nama>.jpg`; manifest `daftar.json`. 96 gambar untuk 23 listing, tampil + unduh di
kit listing. Genteng: 2 spesifikasi · 3/7/8 warna (maks 9 ubin per gambar — motif wajib besar) · 4 hitung kebutuhan (hanya
bila isi m² pasti) · 5 lapisan pasang · 6 dipasang Atapura (foto ilustrasi berlabel). Aksesoris: 1 cover (foto produk latar
putih) · 2 spesifikasi · 3 saat dipasang · 4 posisi di lapisan. Gaya = templat carousel brand (§06) tanpa kontak (dilarang
di gambar marketplace). Infografis disusun dari data, bukan AI, supaya angka & teks pasti benar. Diagram lapisan dipisah jadi
`LapisanGambar.astro` (dipakai beranda & aset; beranda dicek identik piksel sebelum/sesudah). Perbaikan data ikut: warna per
seri lewat `warnaSeri` (judul grup "CT3 · warna solid", "CT5 dan CT6", dll. sebelumnya tidak cocok → CT3/CT5/CT6/Eco Roof/
Top Shingles tanpa varian di kit), Javabitumen (tanpa seri) kini satu listing. Gambar tidak dibuat ulang di CI: jalankan
ulang `npm run aset-marketplace` bila spesifikasi/warna berubah. Cover genteng (latar putih, Magnific) menunggu ok Rama (039).

## 060 · 20 November 2026 · Genteng di marketplace dijual per m² (revisi Bang Yusuf)
Bang Yusuf: "Untuk di marketplace harga yg kita list /m2. Contoh 155.000 (CTI CT3)". Kit listing: satuan genteng m², judul
"… per m² Isi X m²/Bundel …", atribut "Satuan jual: per m², dikirim per bundel isi X m²", deskripsi bagian HARGA & PEMESANAN
(pesanan dibulatkan ke kelipatan isi bundel + contoh 100 m²). Gambar 4 jadi "Pesan berapa m²?" (luas + ±10%, kelipatan isi
bundel, contoh m² & jumlah bundel). Ops → Harga marketplace ikut per m² (Ops commit cde1e9c).

## 061 · 20 November 2026 · Note "chat admin" di semua deskripsi marketplace (Bang Yusuf)
Bang Yusuf: "di kasi note di deskripsi e-commerce (chat admin untuk ketersediaan stok dan pengiriman)". `NOTE_CHAT` = "Chat admin
dulu untuk ketersediaan stok dan pengiriman." di paragraf kedua tiap deskripsi (terlihat di pratinjau). Catatan risiko yang
disampaikan ke Rama: niat mengalihkan pembeli ke transaksi langsung di luar marketplace melanggar aturan keempat marketplace
(penalti/pembatasan toko); note-nya sendiri aman. Keputusan bisnis di Rama & Bang Yusuf.

## 062 · 20 November 2026 · Sistem slide marketplace baru (acuan Dr.Shield, Dr.Sonne, guenteng.com)
Rama menilai infografis 059 dan dua putaran arah di kanvas Claude Design "jelek, layout & tipografi berantakan", lalu memberi
referensi Shopee (Dr.Shield, Dr.Sonne, guenteng.com) dengan arahan "amati, tiru, modifikasi". Hasil yang disetujui ("Ya,
pindahkan") jadi generator `npm run aset-marketplace`:
- Bingkai Pinus 1080², logo putih kiri atas, pil Tunas "Chat admin sebelum checkout" di SETIAP slide (termasuk cover), kartu
  putih 1000 × 892 dengan puncak atap di tengah (siluet slip Atapura). Judul rata tengah di bawah puncak.
- Huruf hanya 2 ketebalan: Public Sans 500 (judul 64/56/48, angka 32–40) + Inter 400 (isi 34, label 30 = paling kecil),
  tanpa tebal di tengah kalimat; kerning judul -0,025em, angka -0,01em, Inter -0,011em; jarak 8/12/40.
- Urutan minimal per produk: 1 Cover → 2 Deskripsi & spesifikasi → 3 Penerapan → 4 Syarat & ketentuan; tambahan bila datanya
  ada: etalase warna (maks 6 per gambar, grid 3 kolom rata; dipadatkan ke 9 bila listing > 9 gambar) dan "Hitung kebutuhan"
  (genteng per m²). Maks 9 gambar.
- Cover BERDESAIN (keputusan Rama). Panduan kualitas Shopee di Ops DECISIONS 125 menyarankan sampul polos tanpa teks; sudah
  disampaikan, Rama tetap memilih cover berdesain. Foto polos latar putih disimpan sebagai cadangan
  (`assets/gambar/produk/aksesoris-*-1x1.jpg`, `cover-cti-ct3-1x1.jpg`).
- Cover genteng: foto lembar rakitan bila ada (`assets/gambar/produk/cover-<id>-potong.jpg`, baru CT3 versi B: acuan geometri
  1.000 × 333 mm dari foto seri + Magnific), selain itu foto tekstur seri.
- Gambar ukur genteng = garis luar lembar dari "Ukuran per lembar" (kotak pembatas, tidak menebak bentuk potongan). Aksesoris:
  foto wujud + tabel (garis ukur per foto aksesoris belum digeneralisasi).
- Foto penerapan dipetakan per listing (`PENERAPAN` di `src/data/aset.ts`): data penerapan per merek, jadi foto hanya
  dipasang bila potongan di fotonya sama dengan seri listing. CT5, CT6, Tegola Master/Mosaik/Traditional belum punya foto yang
  cocok → tanpa slide penerapan (perlu ilustrasi/foto baru, menunggu ok Rama per DECISIONS 039).
- Slide lama "posisi di atap"/"lapisan pasang" dan "Butuh pemasangan?" dihapus dari carousel; chip "Ilustrasi" dihapus (Rama).
- Syarat & ketentuan hanya dari data (NOTE_CHAT, satuan jual, isi bundel, garansi pabrik, aksesoris terpisah). Aturan ongkir &
  retur BELUM ada → tidak dicetak sampai Rama/Bang Yusuf memutuskan.
- Aturan generate gambar AI per slide: `docs/ketentuan-gambar-marketplace.md`.

## 063 · 22 November 2026 · Brosur resmi CTI, Tegola, Victory: koreksi data + contoh warna dari foto brosur
Rama mengirim brosur CTI, Tegola (distributor Indonesia), dan Tamko & Victory, minta dipelajari dan fotonya dipakai di katalog ("kalau pecah, enhance; tekstur & pola harus jelas"). Brosur tidak memuat harga.
- **Koreksi data:** CT6 isi per bundel **17 lembar = 2,32 m²** (sebelumnya tertulis 22 lembar); CT3 21 lembar = 3 m², CT5 22 lembar = 3 m². Tegola **Premium Mosaik = potongan segi enam dua nada** (sebelumnya digambarkan persegi acak); seri baru **Premium Gothik** (persegi bertingkat dua nada) memakai foto seri lama yang ternyata bentuk Gothik; foto Mosaik baru = foto segi enam yang diwarnai merah dua nada. Isi per bundel Tegola dari tabel teknis brosur: Rectangular/Traditional 3,05 m², Mosaik/Gothik 3,45 m², Master 2 m². Aksesori CTI dari brosur: UnderMaster 1×10/1×20 m (16/32 kg, tumpang 10 cm), BaseMaster, GuardMaster (roll shingle 1×10 m). Spesifikasi TDS Tegola yang sudah ada (mis. berat Master 12,3 kg/m²) dipertahankan walau brosur distributor menulis 11,7.
- **Warna Tegola** lengkap dari brosur: Master (8), Master J (4), Master Coppo, Premium Mosaik (6), Gothik (6), Liberty (2), Traditional (7), Rectangular (13, menggantikan daftar 10 dari sumber lain), Top Shingles Traditional (6) & Rectangular (10), Eco Roof Hexagonal, Traditional, Rectangular (4 masing-masing).
- **Contoh warna = ubin foto dari brosur** (bukan lagi foto seri yang diwarnai ulang) untuk CTI CT3/CT5/CT6 (24), Tegola (75), Victory (12; Two Tone = potongan lembar + close-up butiran, Standar = butiran). Ubin dideteksi otomatis dari halaman brosur (OpenCV), diperbesar 2× + unsharp mask; CT5 dan CT6 kini kelompok warna terpisah karena polanya beda. Javabitumen tetap hasil pewarnaan ulang (belum ada brosur). Alat pewarna ulang disimpan di `tools/warna/warnai.py` (dulu hanya di scratchpad).
- Ubin warna di halaman merek diperbesar (min 9,5 rem, ±6 per baris laptop, 2 per baris HP) — memori "motif & warna wajib besar". PDF product knowledge dibuat ulang.
- Tidak dipakai: merek Tamko dan seri Victory Legend/Diamond (bukan yang dijual; aturan tanpa brand lain). Lencana garansi Victory di brosur (25 & 20 tahun) tidak jelas milik seri mana → belum diklaim. Foto proyek di brosur tidak dipakai (bukan proyek Atapura).
- Ops: varian GT-CTI-CT6 (2,32 m²/bundel) dibuat sesi Ops (commit 61264f2); warna Ops ditarik ulang dari produk.ts setelah commit ini.
- Tambahan (masukan Rama lewat Ops): brosur Victory hanya punya close-up butiran untuk seri Standar → ubin Standar kini = pita pola 3-tab (dari foto seri `victory-standar`, diwarnai warna rata-rata butiran asli) di atas butiran asli brosur, seragam dengan Two Tone. Pita pola itu ilustrasi, butirannya foto brosur.

## 064 · 22 November 2026 · Kalkulator internal memilih seri (isi bundel & harga per seri dari Ops)
Rama: "benerin juga kalkulatornya". Kalkulator internal menghitung bundel per merek (CTI 3 m², Tegola 3,05 m²), padahal brosur
(063) dan Ops (DECISIONS Ops 134–135) mencatat CT6 2,32 m² dan Tegola Mosaik/Gothik 3,45 m² → 100 m² CT6 tertulis 37 bundel,
seharusnya 48. Perbaikan: `seriGenteng` di `harga.ts` memetakan seri → varian Ops (CTI CT3/CT5/CT6; Tegola Premium
Rectangular/Traditional/Mosaik/Gothik, Top Shingles Rectangular/Traditional, Eco Roof Rectangular/Traditional/Hexagonal;
Victory Standar/Two Tone), kodenya ditambahkan ke `KODE_WAJIB` sinkron Ops. `/internal/kalkulator` menampilkan pilihan Seri
di bawah Merek bila mereknya punya lebih dari satu varian; harga genteng & starter ikut seri (mis. Two Tone Rp220 rb, Eco Roof
Rp315–350 rb). Maxxi & Javabitumen tetap satu varian. Tegola Master belum masuk (harga masih draf di Ops). Kalkulator publik
tidak berubah: tetap patokan terpasang per merek dari Bang Yusuf. Dijaga `harga.test.ts` (terbukti gagal bila seri diabaikan).

## 065 · 22 November 2026 · Mesin artikel SEO/GEO + backoffice website di Ops (keputusan Rama)
Rama ingin artikel rutin 1–2×/minggu untuk SEO & GEO (riset keyword & insight wajib, bukan artikel kosong), dikelola dari
backoffice, plus analisa posisi SEO/GEO dan komparasi kompetitor yang dipantau & dikendalikan di Ops. Pilihan Rama (semua sesuai
rekomendasi):
- **Borongan bulanan**: sebulan sekali sesi Claude Code meriset & menulis ±8 artikel, dijadwalkan tayang 2×/minggu (bukan agen
  cloud mingguan — kualitas & verifikasi sumber dijaga per artikel).
- **Tayang otomatis, bisa ditahan**: artikel ber-`terbit` di masa depan tidak ikut build; workflow harian membangun ulang situs
  pada hari tayang. Rama bisa membaca & menahan dari Ops.
- **Data peringkat kompetitor: Serper.dev gratis dulu** (2.500 cek; ±50 keyword/minggu ≈ 1 tahun). Bayar diputuskan saat habis.
- **Situs dibuka untuk Google begitu domain aktif** (`bisnis.konsep = false` + Search Console). Sampai itu artikel tetap dicicil,
  efek peringkat belum ada.
Tahap: 1 riset & kalender konten · 2 Ops "Website → Artikel" (kalender, status, tahan/geser) · 3 mesin artikel terjadwal ·
4 Ops "Website → SEO & GEO" (cek mingguan: posisi kita & kompetitor, sebutan AI, kesehatan teknis) · 5 Search Console.
Artikel tetap file markdown di repo website (statis, cepat, ada riwayat git); Ops memegang rencana & status. Aturan isi artikel
tetap: klaim bersumber, tanpa brand lain, tanpa over-promise, tanpa TKDN/lokal (memori proyek).

## 066 · 22 November 2026 · Borongan artikel 1: cara kerja yang dipakai ulang tiap bulan
Borongan 1 = 9 artikel Desember (1, 4, 8, 11, 15, 18, 22, 25, 29 Des), status `terjadwal` di `data/kalender-artikel.csv`.
- **Artikel pesaing yang sedang menang** (masukan Rama: "cek artikel yang merajai seperti Dokter Atap, recreate"): topiknya boleh
  diambil, teksnya tidak disalin. Tiap artikel membaca 3–5 hasil teratas (termasuk dokteratap.co.id) lalu menulis ulang dari sumber
  primer + data Atapura dengan satu "information gain" tertulis. Alasan: konten duplikat tidak diberi peringkat Google dan
  melanggar hak cipta. Dokter Atap = pesaing (koreksi Rama 22 Nov), jadi mengalahkan artikelnya di kata kunci yang sama
  memang tujuan.
- **Satu sumber angka**: harga di artikel = yang dilihat pembaca di Hitung AKAL publik (`estimasiPublik` + luas × harga rangka),
  bukan rumus internal `hitungEstimasi`. Artikel harga lama disegarkan (Victory & Tegola ditambahkan).
- **Gambar**: sampul unik per artikel lewat Magnific (izin Rama 22 Nov: "generate pakai Magnific boleh, atau free image") atau
  kolase foto yang sudah ada; diperiksa diperbesar sebelum dipakai (2 dari 7 ditolak). Log di `docs/magnific-log.md`.
- **Alat**: `node tools/artikel/cek.mjs <file…>` (panjang judul/ringkasan/jawaban, kata & merek terlarang, tautan putus atau ke
  artikel yang belum tayang, tabel teks > 3 kolom); pengecualian yang sudah diperiksa: `<!-- cek-izinkan: kata -->`.
  Pratinjau artikel terjadwal di lokal: `TAMPIL_TERJADWAL=1 npx astro build --outDir <folder>`.
- Koreksi data dari pengecekan sumber: BaseMaster CTI untuk atap di bawah **15°** (angka 25 di brosur = berat 25 kg/rol);
  GRC tidak lagi diklaim "tidak dimakan rayap" (tanpa sumber independen).

## 067 · 22 November 2026 · Artikel dipantau & ditahan dari Ops (tahap 2 dari 065; Ops DECISIONS 145)
- `npm run artikel-ops` (`scripts/artikel-ops.mjs`): kirim semua artikel (panduan + guides, termasuk yang terjadwal) dan topik
  kalender yang belum ditulis (`data/kalender-artikel.csv`) ke Ops `POST /api/publik/artikel`, lalu tarik slug yang ditahan pemilik
  ke `src/data/artikel-ditahan.json`. Kunci = SINKRON_SECRET yang sudah dipakai sinkron harga (tanpa token baru untuk Rama).
- `src/content.config.ts` membuang slug ditahan di loader (bersama penyaring tanggal) → tidak ada di halaman, daftar, sitemap,
  llms.txt (dibuktikan dengan artikel yang sudah tayang). `TAMPIL_TERJADWAL=1` (pratinjau lokal) tetap menampilkan semuanya.
- Workflow: `sinkron-ops.yml` menjalankannya tiap sinkron (commit + deploy bila daftar tahanan berubah); `terbit-terjadwal.yml`
  menariknya tepat sebelum 00:05 WIB dan deploy bila ada artikel hari itu atau tahanan berubah. Ops mati = peringatan, daftar
  tahanan lama dipakai (tidak diam-diam menayangkan yang ditahan, tidak menggagalkan terbit artikel lain).
- Batas: artikel lain yang menautkan artikel yang ditahan akan berisi tautan ke halaman 404 sampai dilanjutkan.
- Rama 22 Nov: artikel tidak perlu ia baca/cek dulu; menu Ops = pantauan + rem darurat. Setelah borongan, jalankan
  `npm run artikel-ops` supaya Ops langsung memuat artikel baru (sinkron otomatis juga mengirimnya).

## 068 · 22 November 2026 · Kalkulator: Nama & nomor WhatsApp opsional → lead otomatis di Atapura Ops (Ops DECISIONS 150)
- Keputusan Rama: isian **opsional** (bukan wajib) supaya calon klien tidak merasa ribet. Kalkulator publik dapat langkah
  terakhir "Nama & nomor WhatsApp · opsional" dengan petunjuk "Boleh dikosongkan. Kalau diisi, admin bisa menghubungi Anda
  lebih dulu." Halaman /internal tidak memakainya. Tombol WhatsApp tetap bekerja seperti sebelumnya, dengan atau tanpa isian.
- Saat tombol WhatsApp diketuk dan nama (≥ 2 huruf) + nomor (≥ 9 angka) terisi, browser mengirim `navigator.sendBeacon` ke
  `/api/kirim-lead` (tetap terkirim walau tab berpindah ke WhatsApp). `request_id` dibuat sekali per kunjungan, jadi ketukan
  berulang tetap satu lead (Ops idempoten; WA sama ≤ 24 jam ke lead terbuka digabung).
- `/api/kirim-lead` = **Vercel Function di root repo** (`api/kirim-lead.mjs`), bukan adapter Astro — situs tetap statis, tanpa
  paket baru. Fungsi meneruskan kolom yang dikenal (nama, wa, luas, merek, pekerjaan plafon, estimasi yang dilihat klien,
  halaman, utm) ke `https://atapura-ops.vercel.app/api/lead` dengan header `x-atapura-secret`. Env Vercel proyek `atapura`:
  `LEAD_SECRET` (production, disalin dari env produksi Ops 22 Nov 2026; nilainya tidak pernah ditulis di repo/chat).
- Pengaman ringan: wajib header Origin dari situs ini dan kolom jebakan `situs` kosong (bot yang mengisinya dibalas ok tanpa
  diteruskan). Bukan pengaman kuat — spam serius ditangani nanti bila terjadi.

## 069 · 22 November 2026 · Penghitung kunjungan tanpa cookie (Ops DECISIONS 157)
Rama ingin angka kunjungan artikel & situs serta asal pengunjung, dipantau di Ops (Marketing → Pengunjung website, kolom
"Dibaca 30 hari" di Artikel website). `src/layouts/Base.astro`: satu skrip inline ±400 byte memanggil `navigator.sendBeacon`
ke `/api/kunjungan` (path, referrer, utm_source) — tidak jalan di /internal, localhost, robot, dan browser otomasi
(`navigator.webdriver`, jadi uji Playwright/Lighthouse tidak terhitung). `api/kunjungan.mjs` (Vercel Function, pola kirim-lead
DECISIONS 068): wajib Origin situs sendiri, tambah kota/negara dari header Vercel, IP + browser → kode acak harian sha256
(IP tidak disimpan/diteruskan), teruskan ke Ops dengan LEAD_SECRET yang sudah ada. Tanpa cookie, tanpa banner izin.

## 070 · 23 November 2026 · Situs keluar dari mode konsep, dibuka untuk Google & AI
atapura.com live (Hostinger DNS → Vercel), lalu Rama memutuskan "buka untuk Google". `bisnis.konsep = false`: meta robots
noindex hilang dari halaman publik dan robots.txt jadi `Allow: /` + `Sitemap`. Halaman `/internal/*` tetap noindex lewat prop
`noindex` di Base.astro. Konsekuensi: angka harga, termin, dan garansi di situs kini bisa dikutip Google/AI sebagai klaim
Atapura — ubah di sumbernya (Ops / bisnis.ts) kalau ada yang belum final. Balik ke `true` untuk menutup lagi.

## 071 · 23 November 2026 · Kalkulator pindah ke /hitung; beranda memuat kartu hitung cepat
Keputusan Rama setelah audit 23 Nov (`docs/riset/audit-website-2026-11-23.md`, §3): kalkulator lengkap tidak lagi di beranda.
Alasan: (1) halaman sendiri bisa ranking untuk "kalkulator / biaya pasang atap bitumen" (sudah direncanakan di
`data/keyword-validasi.csv`, autocomplete "estimasi biaya ganti atap rumah"); (2) artikel, area, dan halaman merek menaut
langsung ke `/hitung?merek=X` alih-alih memuat beranda yang berat lalu meloncat ke tengah; (3) halaman fokus tanpa gangguan
sampai tombol "Kirim estimasi ke WhatsApp"; (4) siap jadi tujuan iklan dan terukur sebagai langkah funnel; (5) beranda ±2 layar
HP lebih pendek. Supaya kesan "harga terbuka" tetap terasa di beranda, bagian `#hitung` diganti kartu hitung cepat
(`src/islands/HitungCepat.tsx`): satu isian luas → kelima merek langsung terhitung dari `estimasiPublik` (rumus sama dengan
kalkulator, angka tidak mungkin beda), tiap baris menaut ke `/hitung?luas=X&merek=Y`. Kalkulator membaca `?luas=` dan `?merek=`.
`/hitung` memuat: kalkulator, bantuan "luas lantai teratas × 1,3" (sesuai artikel cara menghitung luas atap: patokan untuk
25–30° teritis pendek) yang mengisi kalkulator, tiga langkah setelah estimasi terkirim (survey gratis → penawaran tertulis →
baru membayar), harga terpasang per merek bertanggal yang menaut ke halaman merek, dan tanya-jawab harga (FAQPage). Semua
tautan `/#hitung` & `/?merek=X#hitung` (header, tab bar, footer, artikel, produk, kuis pilih merek) diganti; `id="hitung"`
tetap ada di kartu beranda supaya tautan lama di luar situs tetap mendarat. Kuis pilih merek kini juga menaut ke halaman merek.
Artikel baru wajib menaut ke `/hitung` (aturan di kalender konten).

## 072 · 23 November 2026 · Beranda diringkas jadi landing page; /cara-kerja dan /garansi berdiri sendiri
Lanjutan audit 23 Nov (§3) atas persetujuan Rama ("langsung bangun"). Prinsip: urutan bagian = urutan pertanyaan di kepala
pembeli, tiap bagian menjawab satu pertanyaan lalu menaut ke halaman rinci. Urutan baru: hero → fakta → hitung cepat (bidang
Pinus, slip putih) → "Atap bocor lagi?" + 5 lapis → 4 janji AKAL → layanan per kebutuhan (kartu foto kini tautan) → ringkasan
6 tahap (tahap 3 pembayaran ditandai) → pilih merek → area → tanya-jawab → penutup. Latar bergantian gelap/terang; AKAL
dipindah ke antara "atap bocor" dan layanan karena komponen 5 lapis dan bento layanan sama-sama butuh latar Embun.
Dibuang dari beranda: Hujan (duplikat 5 lapis), Warna (halaman merek sudah punya warna brosur; komponen `Warna.astro` dihapus),
Rapor Proyek kosong, blok bayar & garansi lengkap, tab 6 tahap besar, blok "kapan pilihan lain" (isinya sudah di FAQ).
Pindah ke halaman baru: `/cara-kerja` (CaraKerja 6 tahap, Lapisan, RaporContoh) dan `/garansi` (`GaransiBayar.astro` dipindah
utuh dari beranda, KlaimGaransi, FAQ garansi). Data 6 tahap jadi `src/data/cara-kerja.ts` (satu sumber). AKAL desktop: panggung
menempel 360vh diganti kisi 4 kartu; janji "dicek lagi setelah musim hujan pertama" dicabut (bertentangan dengan 035 & aturan
tanpa janji kunjungan rutin). Menu: "Warna" → "Cara kerja"; tab bar Garansi → /garansi, Merek → /produk; menu HP "Area" → /area.
Hasil: beranda HP 24,6 → 14,8 layar, laptop 26,8 → 17,7, kata 1.898 → 1.071. Belum: animasi pembuka (Bumper) menunggu
keputusan Rama; /tentang, /kontak, /perusahaan menyusul.
Tambahan hari yang sama (masukan Rama): peta skematik area diganti **peta asli** dari batas wilayah BPS (geoBoundaries
IDN ADM2, CC BY 3.0 IGO; garis Indonesia ADM0, ODbL; sumber dicantumkan di keterangan peta), dibuat ulang lewat
`tools/peta/buat-peta.py` → `src/data/peta-area.json`. Bukan gambar AI: AI mengarang bentuk wilayah. Wilayah layanan hijau muda
(tautan ke /area), peta kecil Indonesia menandai pulau tempat tim pernah bekerja (`bisnis.survey.pengalamanLuar`); tampil juga
di HP dengan label besar yang lebih sedikit. Judul area jadi "Survey gratis di Jabodetabek, siap ke mana saja" (Rama: "jangan
terlalu membatasi Jabodetabek, tinggal tambah ongkir dan transport"). Review Impeccable: beranda versi ringkas komponen Lapisan
(`ringkas`), ringkasan tahap di bidang Pinus, satu gaya `.tautan-lanjut` global (panah SVG lewat mask) untuk semua tautan ke
halaman rinci, label kecil di atas judul dibuang.

## 073 · 23 November 2026 · Animasi pembuka (Bumper) dihapus, menggantikan 022
Audit 23 Nov: animasi logo ±3,3 dtk menutup layar di kunjungan pertama, tepat pengunjung dari Google/AI/iklan; HP menengah
baru bisa membaca setelah 4,4 dtk (tanpa animasi 0,7 dtk). Rama: "kalau secara digital marketing, SEO dan GEO dinilai jelek,
hapus, khususnya di smartphone". Dihapus di semua perangkat (`Bumper.astro` dan pemakaiannya di beranda); hero langsung tampil.

## 074 · 23 November 2026 · Tautan antar-artikel: "Baca juga" relevan + "Halaman terkait" otomatis
Permintaan Rama: tiap artikel mengajak ke halaman dan artikel lain. Audit 21 artikel tayang: semua sudah mengajak ke Hitung AKAL
(kotak template), tetapi 2 artikel tanpa tautan ke artikel lain, hanya 2 menaut halaman merek, 0 ke area/cara kerja/garansi, dan
"Baca juga" selalu tiga artikel pertama yang sama di semua artikel. Perbaikan di template (berlaku otomatis untuk artikel baru):
(1) "Baca juga" diurutkan menurut kategori sama + kata judul yang sama, artikel yang sudah ditaut di isi diturunkan;
(2) blok "Halaman terkait" dibaca dari isi artikel: halaman merek yang disebut (Maxxi/Maxxiroof/Promaxxi, CTI, Javabitumen,
Tegola, Victory), rangka baja ringan, /cara-kerja (bila membahas lapis/survey/pasang), /garansi, /area (bila menyebut Jabodetabek);
(3) dua artikel tanpa tautan diberi tautan kontekstual ke artikel & halaman yang sudah tayang; (4) `tools/artikel/cek.mjs` menolak
artikel dengan < 2 tautan ke artikel lain, dan larangan "menautkan artikel belum tayang" dihitung terhadap tanggal terbit atau hari
ini (mana yang lebih akhir), supaya artikel lama boleh menaut artikel yang sudah tayang.

## 075 · 23 November 2026 · Halaman /tentang, /kontak, /perusahaan
Audit 23 Nov (P0 entitas & E-E-A-T, POV pembeli skeptis dan pengadaan). Semua isi dari `bisnis.ts` dan teks yang sudah ada di
situs; yang belum ada ditulis jujur: PT "dalam proses pendirian", NIB/NPWP "menyusul" (muncul otomatis begitu diisi di
`bisnis.ts`), proyek pertama belum ada. Hanya Ramadan Saputra disebut (027), tanpa janji kontrak (037), tanpa rekening (035),
tanpa klaim TKDN: pengadaan diarahkan ke inventaris resmi Kemenperin (036). /tentang: masalah pembeli → jawaban Atapura, slip
identitas bertitik (sumber utama Google/AI untuk entitas, schema AboutPage), merek, pengakuan "yang belum ada tidak kami karang".
/kontak: WhatsApp, email, alamat + Google Maps (NAP sama dengan footer/JSON-LD), hal yang perlu disiapkan (schema ContactPage).
/perusahaan: dokumen yang diterima, slip legalitas & pembayaran, penawaran resmi lewat WA/email. Kartu proyek beranda: "faktur"
diganti "invoice" (faktur pajak butuh NPWP/PKP yang belum ada); semua tautan "Untuk perusahaan" ke /perusahaan. Footer: Tentang,
Kontak, Untuk perusahaan; "Panduan brand" dikeluarkan. /branding noindex + keluar dari sitemap (audit SEO). Gaya bersama halaman
informasi di `src/styles/halaman.css`.

## 076 · 23 November 2026 · Skala teks bertoken, lantai 13 px; isi HP mengikuti register ringkas Rama
Audit §7: HP 37 ukuran huruf, 70 teks < 13 px (terkecil 6,5 px pada label harga di daftar merek HP); laptop 187 teks < 14 px dan
paragraf catatan 13–15 px. PRODUCT.md menulis isi ≥17 px HP, tetapi selera Rama untuk HP (Ops; masukan kalkulator 23 Nov) adalah
register ringkas 14–16 px; yang dipakai selera Rama, PRODUCT.md disesuaikan. Token `--fs-13…18` di `global.css`; 278 deklarasi
rem < 1.15rem dipetakan ke token terdekat (skrip sekali jalan, bergeser umumnya < 0,5 px). Label berbasis em (Rp, satuan, "tahun")
diberi `max(var(--fs-13), …em)`. Catatan panjang naik ke 15 px, paragraf isi laptop (AKAL, cara bayar, klaim) ke 16 px.
Dikecualikan sengaja: label bilah tab HP (native iOS), label peta SVG, template internal (pricelist/marketplace, presisi cetak),
/branding. Hasil HP: 37 → 20 ukuran, teks < 13 px hanya pengecualian di atas. DESIGN.md bagian Typography diperbarui ke
kenyataan situs (Public Sans 500 + frasa redup, bukan 300 + miring).

## 077 · 23 November 2026 · Artikel November dibereskan sampai lolos cek.mjs
Temuan lama (sebelum aturan cek.mjs ada): tabel 5 kolom "bitumen vs spandek/UPVC/metal" terpotong di HP (515 px di wadah
334 px) → daftar per aspek; tabel spesifikasi RKS 4 kolom (kolom isi sempit, satu baris jadi ±12 baris teks) → daftar
bernomor dengan sumber per item; tabel lima lapis tanpa kolom "No."; tabel biaya per ukuran: satuan "Rp juta" ke judul kolom,
lama kerja ke kalimat, spasi angka dikunci (tanpa patah). "TKDN" di artikel sekolah/RKS memang hanya arahan cek ke inventaris
Kemenperin (036): satu kalimat ditulis ulang, FAQ RKS diberi penanda `cek-izinkan`. "pasti" diganti ("selalu", "tepat").
Jawaban singkat RKS dipangkas ke ≤ 60 kata. cek.mjs: baris judul tabel tidak dihitung panjangnya. Hasil: 30/30 artikel lolos.

## 078 · 23 November 2026 · SEO teknis: schema usaha & produk, judul, alt warna, lastmod, hreflang, garis miring
Dari audit SEO/GEO 23 Nov (P1–P2). (1) RoofingContractor: `legalName`, `priceRange` (dihitung dari harga terpasang termurah–
termahal di harga.ts), `telephone` = nomor WhatsApp selama belum ada telepon kantor. (2) Product merek atap kini ber-Offer
harga genteng per m² (material, `UnitPriceSpecification` unitCode MTK, seller #bisnis); harga terpasang dipindah ke `Service`
"Pemasangan …" (AggregateOffer). Dulu harga terpasang ditulis sebagai harga produk. (3) Judul > 65 karakter: akhiran
" | Atapura" dibuang di Base.astro (satu aturan untuk semua halaman); 4 judul artikel 66–70 karakter dibiarkan (judul terindeks).
(4) Foto contoh warna di halaman merek ber-alt "Contoh warna atap bitumen X Warna". (5) Sitemap memuat lastmod dari `diperbarui`
artikel, area, dan guides (39 URL); halaman lain tanpa lastmod. (6) hreflang dihapus: /en/guides untuk ekspat isinya berbeda,
bukan terjemahan, dan pasangan lama tidak timbal balik. (7) vercel.json `trailingSlash: false` → /x/ dialihkan ke /x.

## 079 · 23 November 2026 · Klik WhatsApp diukur; perbaikan isi kecil dari audit
Audit 23 Nov: tujuan situs adalah chat WhatsApp, tapi klik tombol WA tidak terukur — tidak ketahuan bagian mana yang bekerja.
- Beacon di Base.astro juga mendengar klik pada elemen ber-`data-wa` (delegasi di `document`, fase capture, aturan lewati sama
  dengan beacon kunjungan: /internal, localhost, robot, otomasi) dan mengirim `{e:'klik-wa', l:<label>}` ke /api/kunjungan.
  Fungsi itu meneruskan `event`/`label` (label disaring `[a-z0-9-]{1,40}`, selain itu null) ke Ops, yang menyimpannya di tabel
  `website_events` terpisah dari kunjungan (Ops DECISIONS 170). Ikon WhatsApp di footer diberi `data-wa="footer"`.
- Label baru cukup ditulis di atribut `data-wa`; Ops menampilkan label tak dikenal apa adanya, nama rapinya di `BAGIAN_WA` Ops.
- Klik ≠ chat terkirim (orang bisa menutup WhatsApp); angka dibaca sebagai minat, bukan lead.
- Perbaikan isi dari audit (commit 3428792): multiplek ditulis 12 mm (ada 18 mm), tanpa 9 mm; rangka ditandai terverifikasi;
  tautan DOI jurnal ROTASI yang mati diganti tautan artikel di ejournal.undip.ac.id; kode ikon sosmed "segera hadir" dibuang.

## 080 · 23 November 2026 · Halaman area dibuka dengan layanan & harga; /area tidak lagi buntu
Audit 23 Nov: halaman area dibuka dengan statistik (puting beliung, asbes), harga hanya menyebut 3 merek dan ditulis tangan di
9 file; /area berakhir di kartu data tanpa ajakan.
- Kotak "Layanan di {kota}" (`src/components/LayananArea.astro`) di awal kolom isi lewat slot `awal` di Artikel.astro: survey
  (gratis di Jabodetabek, "bisa diatur" di luar), harga terpasang lima merek termurah dulu, lama pasang (m²/hari + contoh 100 m²),
  garansi pemasangan, tanggal berlaku harga. Semua dari harga.ts/produk.ts/bisnis.ts. Pola slip bertitik dari /tentang; di HP
  label & isi tetap sebaris supaya lima merek tidak memanjang.
- `merekTermurah` dipindah ke produk.ts (dipakai /tentang dan kotak area). Paragraf harga di 9 file area tidak lagi menulis angka
  (merujuk kotak layanan); jawaban FAQ memakai `{harga-merek}` yang diisi template dari data, jadi FAQPage schema ikut benar.
- /area ditutup bagian "Lokasi Anda tidak ada di daftar? Tetap kami kerjakan." + Hitung estimasi + WhatsApp (`data-wa="area-indeks"`).

## 081 · 23 November 2026 · Tanggal berlaku harga & lama pasang di halaman merek
Audit 23 Nov: tanggal berlaku harga hanya ada di artikel harga & Hitung, tidak di /produk dan halaman merek; lama pasang hanya
ada di rangka. Slip harga halaman merek atap kini memuat baris "Lama pasang ±a–b m² per hari" (produktivitas Ops, sama dengan
Hitung AKAL), contoh 100 m² ditambah perkiraan hari kerja, dan "Harga per {tanggal}" dari `harga.berlakuSejak`. /produk:
pengantar menyebut tanggal berlaku harga. Rangka tetap memakai baris lama pasang di datanya sendiri.

## 082 · 23 November 2026 · Label "Ilustrasi" di sampul; /panduan per kategori dengan chip lompat
Audit 23 Nov: sampul artikel/area gambar AI tanpa keterangan terlihat (hanya alt); /panduan satu daftar ±12.000 px di HP.
- Artikel.astro: sampul jadi `<figure>` dengan keterangan "Ilustrasi, bukan proyek Atapura." (Inggris: "Illustration, not an
  Atapura project."), sama dengan galeri produk. Semua 48 sampul di konten berasal dari Magnific.
- /panduan: artikel dikelompokkan per kategori (urutan Dasar, Biaya, Pemasangan, Perawatan, Perbandingan, Teknis, Proyek, Usaha),
  chip lompat + jumlah di kartu pembuka (CSS chip dipindah ke global.css `.lompat`, dipakai juga /produk). Kartu unggulan
  dihapus. HP: baris ringkas foto 96 px + judul + tanggal, ringkasan disembunyikan (tinggi halaman HP ±5.300 px).

## 083 · 23 November 2026 · 404 berkerangka, label warna CTI dicek ke brosur, aksesibilitas
- **404**: dulu layar Pinus tanpa menu/footer. Kini kerangka halaman informasi (halaman.css) dengan menu, footer, empat tujuan
  (Hitung, Produk & layanan, Panduan, Area), Hitung estimasi + WhatsApp (`data-wa="404"`).
- **Warna CTI**: audit curiga CT3 "Black" tampil hijau tua dan "Dark Brown" tampil abu. Dicek ke BROSUR CTI.pdf halaman 1–3:
  urutan dan nama ubin di situs **sama persis** dengan brosur; yang bergeser warna cetak brosurnya sendiri (Black kehijauan/abu,
  Dark Brown abu gelap, di CT3, CT5, CT6). Ubin tidak diwarnai ulang (akan mengarang warna); grup CT3 solid, CT5, CT6 diberi
  catatan bahwa foto dari brosur cetak dan perlu dicocokkan dengan sampel fisik saat survey.
- **Aksesibilitas**: tautan "Langsung ke isi" (Header.astro, muncul saat difokus, target `#isi` setelah navigasi). Kontras judul
  redup (opacity .55) diukur di 10 halaman laptop & HP: 57 elemen, terendah 3,82:1 dan semuanya ≥ 26 px → lolos WCAG AA teks
  besar (3:1); tidak diubah.

## 084 · 23 November 2026 · Tablet: kartu layanan beranda dua kolom
Audit 23 Nov: di tablet 768 px kartu layanan beranda jadi satu kolom foto selebar layar (tampilan HP direntangkan). Di
48–63,99 rem bento kini dua kolom (pasangan foto, pasangan kartu teks, kafe + perusahaan); tinggi beranda tablet 17.559 →
16.680 px. Halaman lain dicek di 768 px (produk, panduan, area, tentang, merek, cara kerja): sudah dua kolom atau satu kolom yang
memang sempit, tidak diubah. Angka bilah bukti di tangkapan layar sempat terbaca "3 merek / 3 tahun": itu animasi hitung naik
yang tertangkap di tengah jalan; HTML-nya 5 merek, 13 kota, 5 tahun.

## 085 · 23 November 2026 · Hero beranda dirombak: satu ajakan, logo merek, skala judul dari referensi
Masukan Rama dengan 11 referensi (Banklio, Redow, SecureHome, Grow+, Novus, Optibiz, Aurel, Logamax, Forma Casa, konsultan
keuangan; semua di `docs/desain/referensi-2/`): teks hero perlu ditulis ulang, nama merek diganti logo, menu belum punya
Beranda, terlalu banyak tombol, tipografi diambil dari referensi.
- **Judul** (pilihan Rama): "Atap bitumen, harga masuk akal." Huruf kecil, bukan "AKAL", karena huruf besar semua terasa
  berteriak, lebih lebar, dan memotong kalimat (masukan Rama). Label di atas judul "Jasa pasang genteng aspal · Jabodetabek"
  tetap di dalam h1, jadi h1 memuat "atap bitumen", "genteng aspal", dan "Jabodetabek". Kalimat pengantar menjawab "kenapa
  masuk akal": estimasi total satu menit + rincian, survey & ukur gratis. Tagline lama "Atap yang masuk AKAL." tetap di bagian
  AKAL.
- **Satu ajakan**: hero hanya punya "Hitung estimasi biaya". Tombol "Untuk perusahaan & proyek" dihapus dari hero (HP juga),
  kartu contoh Hitung AKAL jadi informasi (bukan tautan, baris "Hitung atap Anda →" dihapus), dan di header "Untuk perusahaan"
  jadi tautan teks di menu, jadi pill di header tinggal "Chat WhatsApp".
- **Menu**: Beranda ditambahkan (desktop & menu HP); halaman aktif ditandai titik kecil (`aria-current`). Path build berformat
  file (`/hitung.html`) dinormalkan dulu.
- **Logo merek**: deret "Merek yang kami pasang" tepat di bawah hero (mengintip di layar pertama laptop), lima logo **satu
  warna** (pilihan Rama dari dua opsi; warna asli dinilai terlalu ramai), menaut ke halaman merek. Dibuat dari file resmi oleh
  `tools/logo/satu-warna.py`: bentuk tidak diubah, bagian putih di logo berwarna dilubangi. Ini pengecualian sadar atas aturan
  "logo tidak diwarnai ulang" di `assets/mitra/README.md`, khusus deret ini.
- **Bento bukti → baris angka** (pilihan Rama): 5 tahun garansi · 13 kota · survey gratis · ±4–5 hari kerja untuk 120 m²
  (dari `estimasiPublik`, satu sumber). "5 merek" tidak ditulis lagi karena logonya sudah tampil.
- **Tipografi** (skill hierarchy-and-scale): judul bagian beranda sebelumnya ±76 px dan penutup sampai 104 px, lebih besar
  dari judul hero. Diukur dari referensi: hero ±1,5–2× judul bagian, pengantar 17–18 px abu. Kini hero ±59 px, judul bagian
  ±39 px, penutup ±51 px (laptop 1230 px), pengantar `--fs-18` Lumut; nama merek, angka harga, dan judul tahap Cara kerja
  diturunkan ke tingkat kartu. HP tidak berubah (sudah bertoken `--hp-t1`). Judul "Atap bocor lagi" kini rata atas.
- Animasi pembuka desktop: urutan naik baris judul dibetulkan (`.baris + .baris`, sebelumnya `nth-child(2)` meleset karena
  label kini anak pertama h1); label, tombol, dan jaminan ikut muncul halus.
- Revisi Rama (saran Gemini): kalimat pengantar hero desktop digelapkan (campuran Lumut–Tinta 55%) dan berbobot 450, karena
  ujung kalimat jatuh di atas daun kelapa di foto. Saran kedua (garis bawah "Hitung atap Anda →" di kartu) tidak dipakai:
  tautan itu sudah dihapus atas permintaan Rama (hero satu ajakan).
- Rama: "orang gatau apa itu AKAL" → label kartu hero jadi "Contoh biaya terpasang"; jawaban FAQ durasi menyebut "kalkulator
  biaya di halaman Hitung biaya", bukan "Hitung AKAL".
- Kalimat pengantar hero ditulis ulang (Rama: estimasi, hitung sendiri, dan survey gratis bukan poin yang ingin ditonjolkan).
  Riset hero 15 situs (lokal: semua dibuka dari "kami" + fitur produk; luar: BOXT/instant-roof 12–25 kata, sudut "Anda", apa
  yang dikerjakan + siapa yang mengerjakan). Pilihan akhir Rama, "singkat dan tegas" + AKAL: "Spesialis jasa pasang atap bitumen
  (genteng aspal), lengkap lima lapis dari alas sampai nok. Dikerjakan tim profesional dengan prinsip AKAL: andal, berkualitas,
  amanah, lestari." Memuat kata kunci inti yang dipantau Ops ("jasa pasang atap bitumen", "genteng aspal"). "Solusi terbaik"
  sengaja tidak dipakai (daftar kata terlarang, klaim tak terbukti). Koreksi Rama: label atas tetap "Jasa pasang genteng
  aspal · Jabodetabek", jadi kalimat dibuka "Spesialis atap bitumen, dipasang lengkap lima lapis…" supaya "jasa pasang" dan
  "genteng aspal" tidak dobel dengan label; lokasi hanya di label.
  Final (Rama): chip "Spesialis jasa pasang genteng aspal · Jabodetabek"; kalimat tanpa kata "spesialis" lagi supaya tidak
  dobel dan tidak terlalu panjang: "Dipasang lima lapis dari alas sampai nok oleh tim profesional dengan prinsip AKAL: andal,
  berkualitas, amanah, lestari." Chip satu baris di HP 390 px, dua baris di 360 px.
  Penulisan nilai AKAL (Rama): huruf depan besar, "Andal, Berkualitas, Amanah & Lestari".
- Rama: tiga klaim di bawah tombol (survey & ukur gratis, garansi pemasangan 5 tahun, tiap lapis difoto) berpotensi jadi
  bumerang. Diganti penekanan jasa + material lengkap: "Material lengkap · Jasa pasang tuntas · Bisa sekalian rangka" (rangka
  baja ringan memang dijual & dipasang, harga di data). Baris angka ikut diganti dan tidak mengulang: 13 kota · ±4–5 hari kerja
  untuk 120 m² · harga terpasang mulai Rp…rb/m² (minimum `harga.merek[*].terpasang`, ikut Ops). Garansi & survey tetap
  dijelaskan di halaman/bagian masing-masing.

## 086 · 23 November 2026 · Beranda: layanan naik ke bagian ke-3, kalkulator turun ke sebelah merek
Pilihan Rama setelah analisis referensi-2: di Logamax, Forma Casa, SecureHome, Optibiz, dan Redow bagian setelah hero adalah
layanan/solusi berfoto, lalu "kenapa kami", detail kualitas, proses, dan pita ajakan. Di beranda kita bagian ke-3 adalah
kalkulator (bertentangan dengan arahan Rama untuk tidak menonjolkan hitung sendiri) dan harga muncul empat kali.
- Layanan pindah ke bagian ke-3 dan didesain ulang: empat kartu berfoto (Pasang atap baru · Ganti atap lama · Perbaikan atap
  bocor · Villa, kafe & usaha), masing-masing menaut ke panduan yang menjawabnya (tautan internal), plus pita gelap "Proyek
  perumahan & komersial". Pengantar: "Material lengkap dan jasa pasang dari satu tempat." Kartu angka "8,5–13 kg" dan kartu
  "Jadwalkan cek" lama dilebur ke teks kartu. Bento tablet DECISIONS 084 tidak berlaku lagi.
- Urutan baru, terang–gelap selalu bergantian: Layanan → AKAL → Lima lapis (kini latar Putih) → Cara kerja → Pilih merek →
  Kalkulator → Area → Tanya jawab → Penutup. Kalkulator diletakkan tepat setelah "Bingung pilih merek?"; penggabungan keduanya
  jadi satu bagian Merek & harga dikerjakan saat sampai di bagian itu.
- Koreksi Rama: layanan wajib sinkron dengan Ops ("perbaikan atap bocor gak ada", "harusnya ada beli material doang").
  Patokan Ops: PEKERJAAN (`src/lib/crm/lead.ts`: pasang baru, ganti atap lama, rangka baja ringan, pasang plafon; perbaikan bocor
  dihapus di Ops 19 Nov) dan JENIS transaksi (`src/lib/hitung/penawaran.ts`: material + pasang, material saja, jasa pasang saja).
  Daftar bersama `layanan` di `src/data/produk.ts` disamakan (dipakai /produk dan kartu beranda): Pasang atap baru · Ganti atap
  lama · Rangka baja ringan · Pasang plafon (tetap tersembunyi) · Beli material saja · Jasa pasang saja. "Perbaikan atap bocor"
  dan "Villa, kafe, dan proyek" dihapus. Kartu beranda: empat berfoto + baris "Material sudah ada? Tanya jasa pasang saja"
  (WhatsApp). Ikut disamakan: footer, judul/deskripsi /area dan `serviceType` halaman area ("Pemasangan atap bitumen"), dan
  kalkulator /hitung (pilihan "Perbaikan" dihapus; jenis pekerjaan kini ikut terkirim ke Ops sebagai `pasang_baru` /
  `ganti_atap_lama`, sebelumnya hanya plafon). Garansi pemasangan tetap menanggung bocor akibat pemasangan (itu garansi, bukan
  layanan perbaikan).
  Kalimat jawaban 9 halaman area (yang dikutip mesin pencari/AI) diubah dari "Atapura memasang dan memperbaiki atap
  bitumen" menjadi "Atapura memasang atap bitumen".

- Teks Layanan (Rama): judul "Solusi layanan atap bitumen sesuai kebutuhan proyek Anda." (dua baris di tablet/laptop, frasa
  kedua diredupkan), pengantar "Semua kebutuhan material dan pemasangan dalam satu pintu." dua baris menempel ke tepi kanan.

## 087 · 23 November 2026 · Nomor WhatsApp dikoreksi: 0896-1138-4767
Rama: nomor di situs salah ketik (0896-1139-4867 → WhatsApp "isn't on WhatsApp"). Nomor benar 0896-1138-4767 (`6289611384767`)
di `src/data/bisnis.ts` (satu sumber semua tombol WA, schema, dan pesan kalkulator). Ops `src/lib/profil.ts` ikut dikoreksi.
Aset turunan yang memuat nomor/QR (pricelist, product knowledge PDF, aset marketplace) dibuat ulang setelah ini.
- Aset turunan: QR pricelist `assets/gambar/pricelist-qr-wa.svg` dibuat ulang untuk `https://wa.me/6289611384767` (qrcode-generator,
  format path sama; isi dicek dengan pembaca QR CoreImage macOS), `public/unduh/product-knowledge-atapura.pdf` dicetak ulang
  (`npm run cheatsheet`), pricelist PDF lokal dicetak ulang (`npm run pricelist`, tidak di-commit). Gambar marketplace tidak
  memuat nomor. Ops: bawaan `src/lib/profil.ts` dikoreksi; tabel `business_settings` belum punya baris profil (pakai bawaan).

## 088 · 24 November 2026 · AKAL jadi empat kartu nilai; tombol melayang dihapus
Putaran desain bersama Rama (nilai 1/10 → 4 → 5 → 8/10, "desain dan copywritingnya bagus"):
- Ditolak: tembok huruf raksasa A·K·A·L, lalu pola Aurel (foto tengah + 4 keterangan bergaris), 1/10.
- Dipakai: kartu Embun · Tunas · Pinus · Embun ala Biztop (tombol di takik sudut kiri bawah), nomor 01–04 ala Redow, tepi atas
  atap pelana landai ala Rent H&U (sudut & puncak membulat). Nama nilai jadi judul besar ("kurang ter-highlight" saat kecil).
- Copy (Rama): AKAL = nilai/komitmen, bukan studi kasus dan bukan soal harga; pembaca bukan hanya pemilik rumah dan pekerjaan
  bukan hanya ganti atap. Judul "Empat nilai yang kami pegang di setiap proyek atap.", pengantar "Prinsip AKAL kami jaga dari
  penawaran pertama sampai lama setelah atap terpasang." Andal = pelayanan tim penjualan, tukang, purnajual; Kualitas = tukang
  profesional + material asli dari pabrikan; Amanah = jujur, terbuka, kesepakatan dipegang; Lestari = atap awet, hubungan
  terjaga setelah serah terima. Janji lama "tiap lapis difoto" dan "dikabari tiap tahap" dihapus (tidak ada di Ops, bumerang).
- Latar: AKAL kini Putih (kartu hijau tua & lime butuh latar terang), Lima lapis kembali Embun.
- Pola kepala bagian `.judul-dua` (judul dua baris + pengantar rata kanan) jadi aturan umum beranda.
- Tombol melayang "Berapa biaya atap Anda? Hitung estimasi" di laptop dihapus: tiga kali menutupi konten (kartu layanan, pita
  perusahaan, tautan AKAL) dan menonjolkan hitung sendiri.
- Foto `akal-*.jpg` tidak dipakai lagi di beranda (berkas tetap disimpan).

## 089 · 24 November 2026 · Bagian lima lapis keluar dari beranda (tetap di /cara-kerja)
Audit bagian "Atap bocor lagi setelah diperbaiki?": (1) janji "kami memotret setiap lapis… Foto itu Anda terima" (tidak ada di
Ops, bumerang); (2) judul terkesan menawarkan perbaikan bocor, padahal jasa itu tidak ada di Ops; (3) di laptop label "Nok 5" dan
"Genteng bitumen 4" melayang di ruang kosong ±300 px sebelum diagram terurai; (4) istilah "Standar Pasang AKAL"; (5) kotak
keterangan gaya gambar teknik yang tidak berguna bagi pelanggan; (6) ±1.430 px. Rama: "keren tapi agak berat … jangan dihapus
tapi pindah ke sub halaman lain". Diagram lengkap sudah ada di /cara-kerja#lapisan, jadi bagian beranda (duplikat versi ringkas)
dihapus beserta skrip "teks menebal", gaya anatomi/lembar, dan aturan animasi diagram di desktop.css (hanya dipakai beranda).
Pesan lima lapis tetap ada di kalimat hero dan tautan "Rincian enam tahap & lima lapis" di bagian Cara kerja. Beranda lebih
pendek 1.431 px (laptop) dan 1.397 px (HP). llms.txt diperbarui. Catatan: /cara-kerja masih memuat janji "difoto satu per satu";
dibahas saat halaman itu dikerjakan.

## 090 · 24 November 2026 · Beranda dirapikan per bagian setelah riset isi beranda
Rama: "audit dulu … riset sebaiknya beranda berisi apa", lalu "jalankan semuanya step by step … be kreatif dan berani".
Riset: beranda menjawab siapa/apa/cara menghubungi dalam ±5 detik; detail ke sub halaman; halaman layanan/kota lebih kuat untuk
pencarian spesifik; untuk pembelian mahal halaman agak panjang wajar asal padat (NN/g, Roofr, JobNimbus, CXL, Conversion Rate
Experts). Data pengunjung Ops belum layak dipakai (61 kunjungan, 6 klik WA, sebagian besar uji internal).
- **Cara kerja**: enam tahap → empat langkah (Konsultasi · Survey & penawaran · Pemasangan · Serah terima) di garis waktu ala
  Redow; judul "Dari chat pertama sampai atap terpasang." (tidak lagi soal uang). Janji "lapis yang tertutup tetap bisa Anda
  lihat" dihapus.
- **Merek & harga**: "Bingung pilih merek?" (pemilih + tabel) dan kalkulator "Lima merek, satu isian" digabung jadi lima kartu
  merek ala Bau Cargo (±2.050 → ±750 px). Kalkulator & spesifikasi tetap di /hitung dan /produk; tanggal harga tidak ditulis (Rama).
- **Area**: chip kota + peta dalam kartu; judul "Melayani seluruh Jabodetabek, hingga luar Pulau Jawa." (Rama: "13 kota" terlalu
  sempit). Ikut disamakan: baris angka (Jabodetabek), footer, ajakan akhir artikel, keterangan peta, dan judul 9 halaman area
  ("Jasa pasang atap bitumen di …", sebelumnya "Pasang dan perbaikan …").
- **Tanya jawab**: tambah "Bisa beli material saja atau jasa pasang saja?" (sinkron JENIS Ops), "bangunan" bukan "rumah",
  jadwal "disepakati" bukan "dikirim tertulis", kalimat survey nyasar di jawaban bayar dihapus, urut paling dicari, semua tertutup.
- **Penutup**: "Hitung dulu, baru pasang." diganti kartu panduan + kartu ajakan "Punya proyek atap? Mulai dari satu chat." dengan
  tombol WhatsApp (data-wa "penutup").
- Hasil: tinggi beranda laptop 1288 px ±11.900 → 8.415 px, HP 390 px ±13.050 → 9.012 px. Sapu 5 lebar (360, 390, 1024, 1288,
  1440): 0 elemen keluar layar, 0 galat JS; /produk, /hitung, /area, /area/depok, /cara-kerja, /garansi, /perusahaan dicek di HP.
- Judul penutup (Rama, kata kunci "artikel"): "Artikel & panduan atap bitumen.", pengantar "Jelajahi artikel …", tautan
  "Jelajahi semua artikel".

## 091 · 24 November 2026 · Tipografi isi ala Notion + tanya jawab bervisual
Rama: teks tanya jawab "sangat bertumpuk", lalu minta belajar dari DESIGN.md Figma, MongoDB, dan Notion ("gua suka banget
font2 yang dipake notion … terkenal dengan kerapihannya"), dan mengizinkan bentuk/tabel di FAQ.
- **Temuan**: ketiganya memakai teks isi 16 px, baris ±1,5, spasi huruf **0**, rata kiri. Tracking -0,011 em warisan ritme Apple
  (046) yang bikin paragraf panjang terasa rapat. Rata kanan-kiri dicoba (dengan Source Sans 3 + pemenggal suku kata buatan)
  lalu dibatalkan: Chrome tidak punya pemenggalan bahasa Indonesia sehingga celah antarkata melebar di HP, dan referensi
  semuanya rata kiri. Source Sans 3 & Geist Mono dibuang; tetap dua huruf (Public Sans + Inter).
- **Global**: `body` baris 1,55, spasi huruf 0. Label bagian `.label-bagian` (token *eyebrow* Notion: 600, kapital, baris 1,33)
  di atas semua judul bagian beranda, di lantai 13 px Atapura (Notion 12 px) dengan renggang 0,04 em.
- **Tanya jawab**: jawaban Inter 17/1,6 (HP 16/1,6) warna #24302b, maks 64ch; nilai kunci ditebalkan di dalam kalimat (pola
  modal Notion). Jawaban yang isinya angka diganti visual kecil, permukaan level 0 Notion (putih, garis 1 px, sudut 12 px):
  harga = tabel bergaris tipis per kelompok; cara bayar = batang 40·30·30 sebanding persen (Pinus · Tunas · putih); garansi =
  dua kartu "Dari pabrik" vs "Dari Atapura · pemasangan 5 tahun"; kemiringan = garis miring pada sudut sebenarnya (CTI 10°,
  Tegola 14°, Maxxi 15°); lama kerja = angka besar "4–5 hari kerja untuk atap 120 m²". Semua angka dari `bisnis.ts`/`harga.ts`/
  `estimasiPublik` (sinkron Ops); FAQPage schema tetap memuat teks lengkap lewat `skema`.
- Tidak diambil dari Notion: judul bobot 700 (Rama menilai judul Atapura bobot 500 sudah "mirip"; bila mau diubah, tunjukkan
  spesimen dulu), warna biru, sudut 4/8 px untuk tombol (Atapura tetap pill).
- Disamakan dengan aturan 090 (jadwal "disepakati", bukan "tertulis"; klien bukan hanya pemilik rumah): langkah klaim
  "Perbaikan" di `bisnis.ts`, label "Jadwal disepakati" di KlaimGaransi, jawaban klaim di /garansi, dan slogan footer
  "Atap yang masuk AKAL, untuk setiap proyek." (dulu "untuk rumah di Jabodetabek"). Janji "foto progres / foto tiap lapis /
  Rapor Proyek" di /garansi, /perusahaan, /cara-kerja, dan artikel BELUM diubah: tersebar luas dan butuh keputusan Rama.

## 092 · 24 November 2026 · Satu huruf Inter + fondasi tipografi Notion (termasuk logo)
Rama (melihat getdesign.md/notion "02 — Foundations · Typography"): "kok ga sebagus yang notion", "kita enak dibacanya baru
6/10", "pokoknya kita copy paste saja typography foundationnya notion", "tebalnya 600 cukup jangan terlalu tebal", "jarak antar
teksnya, huruf dan sebagainya samakan saja dengan notion. kerning, margin", lalu "ganti aja total keseluruhannya jadi inter …
termasuk yang di logo". Mengganti DECISIONS 046 (Public Sans untuk judul) dan bagian huruf dari 085/091.
- **Huruf**: Inter saja untuk logo, judul, angka, dan teks. Public Sans dihapus (`@font-face`, preload, file woff2);
  `--font-merek` tetap ada sebagai alias Inter supaya kode lama tidak perlu diubah. Pratinjau Notion di getdesign.md yang Rama
  sukai memang dirender dengan Inter biasa ("Inter shown as substitute").
- **Skala** (token `--t-d1 … --t-title`, `--bobot-judul` di `global.css`): display-1 64/1.0/-0.033em (hero), display-2
  54/1.04/-0.035em (judul halaman & artikel, ajakan penutup, nama AKAL), heading-1 40/1.1/-0.025em (judul bagian), heading-2
  26/1.23/-0.024em, heading-3 22/1.27/-0.011em, title 20/1.4/-0.006em; semua bobot 600 (Notion 700). Dulu: hero 80 px, judul
  bagian 48 px, semua -0.04em — terlalu besar dan rapat di ukuran kecil.
- **Teks**: body 16/1.5/0 di semua lebar layar (dulu 17–18/1.6 di laptop), artikel 16/1.5 (dulu 17/1.7), caption 14/1.43,
  lead 18/1.5. Eyebrow 13 px/600/1.33/0.01em kapital (Notion 12; lantai Atapura 13), jarak eyebrow → judul 8 px.
- **Logo**: dibangun ulang dari garis Inter SemiBold 600 (`tools/logo/build.py`, kerning bawaan Inter lewat HarfBuzz, jarak
  huruf -0.033em); bentuk Λ atap pelana tetap, tebal kakinya mengikuti batang Inter 600. Semua turunan dibuat ulang dengan ukuran
  sama (PNG 2400 px, simbol 1024, favicon 16/32/48 + .ico, ikon 180/512, avatar 1080) dan `atapura-brand-kit.zip`; /branding
  diperbarui. Perbandingan ukuran logo 6930/1768 → 7285/1908.
- Dicek: angka terukur di browser (hero Inter 64 px/600/-2,1 px/baris 64 px; isi 16 px/400/24 px), sapu 9 halaman × 360 &
  1288 px: 0 elemen keluar layar (selain kolom jebakan anti-spam yang memang di luar layar), 0 galat JS.
- Ops perlu ikut (logo & huruf halaman klien/PDF masih Public Sans): dikabari, dikerjakan dari sisi Ops.

## 093 · 24 November 2026 · Janji foto progres & Rapor Proyek disembunyikan
Rama: "janji2 itu dihide dulu aja dan rapor proyek". Janji "foto tiap lapis sebelum ditutup / foto progres tiap termin /
Rapor Proyek" belum dijalankan di lapangan dan tidak ada di Ops, jadi berisiko jadi bumerang.
- Saklar `TAMPIL_FOTO_PROGRES = false` di `src/data/bisnis.ts` (pola sama dengan `TAMPIL_PLAFON`). Saat false: bagian Rapor
  di /cara-kerja hilang, judul/pengantar/meta /cara-kerja tanpa "difoto", tahap Pengerjaan jadi "Dipasang berurutan, lapis
  demi lapis" (pegang: kabar progres lewat chat), Serah terima tanpa Rapor; /garansi tanpa "foto progres" (pengantar & kartu
  bayar); langkah klaim "Laporan" hilang (3 langkah); /perusahaan tanpa "Foto progres di setiap termin" dan Rapor; /tentang
  tanpa kalimat & tautan Rapor; llms.txt ikut. Komponen RaporContoh tetap ada untuk dinyalakan lagi.
- Artikel (4 file) diubah langsung: kalimat yang mengklaim Atapura mengirim foto/menyimpan Rapor dihapus atau diganti nasihat
  umum ("minta foto setiap lapis sebelum ditutup" ke pemasang mana pun tetap ada, karena itu saran untuk pembaca, bukan janji).
  Versi lama ada di git (commit 1c07c58).
- /branding (noindex, panduan konten internal): sebutan Rapor Proyek dinetralkan.
- Dicek: tidak ada "difoto / foto progres / Rapor Proyek" di hasil build halaman publik; /cara-kerja, /garansi, /perusahaan,
  /tentang 0 elemen keluar layar, 0 galat JS.

## 094 · 24 November 2026 · Bilah atas menempel di laptop + takik kartu AKAL sejajar
- Rama: "navigasi atasnya hilang saat scroll, pengen tetep ada, tapi seamless dan tidak terlalu banyak menutupi konten".
  Bilah atas kini `position: fixed` di semua lebar (dulu hanya HP). Di atas hero tetap transparan; setelah digulir 12 px jadi
  kaca buram Embun 80% + garis rambut, tinggi 80 → 56 px (HP 52 px). Elemen sticky di laptop diturunkan supaya tidak tertutup
  (slip kalkulator 5rem, kolom kiri tanya jawab 5.5rem).
- Rama: "lekukan si tombol dan shape utamanya kurang pas rounding-nya". Takik kartu AKAL: celah rata 8 px, sudut takik =
  radius tombol (22 px) + celah = 30 px sehingga sejajar dengan lengkung tombol; lekukan penyambung = sudut kartu 24 px.
- Rama memilih bobot "600 judul, 500 judul kartu" (setelah sesi Ops sempat memasang 700 ala Notion): token baru
  `--bobot-judul-kartu: 500` untuk semua tingkat title (judul kartu, pertanyaan FAQ, nama merek & langkah, harga kecil);
  judul tetap `--bobot-judul: 600`. Ops dikabari untuk menyamakan.

## 095 · 24 November 2026 · Ajakan penutup, daftar kota jadi legenda peta, klaim 3 langkah
- Ajakan penutup (Rama: "Mulai dari satu chat … narasi jelek"): diganti menjawab keraguan terakhir pengunjung setelah melihat
  merek & harga — "Bingung pilih merek atau hitung biayanya? Kami bantu hitungkan." + "Kirim ukuran atau foto atap Anda lewat
  WhatsApp. Kami bantu pilih merek yang cocok dan hitung perkiraan biayanya, tanpa kewajiban memesan." (skill copywriting:
  masalah pembaca + langkah jelas + pengurang risiko). Judul kartu pakai heading-1 (display-2 pecah 4 baris).
- Area (Rama: "chip-nya kurang menarik"): chip diganti daftar kota bergaris tipis dua kolom per provinsi (ala tabel Notion) yang
  berfungsi sebagai legenda peta — titik warna = warna wilayah di peta, arahkan kursor/fokus ke kota → wilayahnya menyala di
  peta dan sebaliknya (`data-kota`). "Pernah dikerjakan di luar Jabodetabek" jadi satu baris bertitik. Pengantar Area dilebarkan
  (5 → 3 baris di laptop).
- /garansi: alur klaim mengikuti jumlah langkah (`--n`), 3 kolom penuh setelah langkah Laporan disembunyikan (093).
- Area, versi 2 (Rama: "cari konsep penyajian data yang lain yang lebih baik"): daftar kota diganti tabel **"Catatan atap
  tiap daerah"** ala tabel data Notion — satu baris per halaman /area dengan fakta atap bersumber (BMKG/BPS, dari ringkasan
  halamannya; field baru `sorot` + `sorotJenis` di koleksi area) dan label pastel Hujan/Angin/Panas. Tab Jabodetabek (9) /
  Luar Jabodetabek (6); di tab luar, peta Jabodetabek diganti peta kecil Indonesia. Baris ↔ wilayah peta menyala bersamaan
  (Jakarta menyalakan 5 wilayahnya). Seluruh baris bisa diklik ke halaman daerah. Tinggi Area laptop 1.098 → 1.023 px;
  HP baris dua tingkat (nama + label, lalu fakta).
- Layanan: foto kartu 4:3 → 16:10 (beranda laptop 8.647 → 8.538 px).

## 096 · 25 November 2026 · Jarak antarbagian beranda dirapatkan
Lanjutan audit kesesuaian beranda (target ±7.000 px di laptop). Jarak atas-bawah tiap bagian `clamp(4.5rem, 9vw, 8rem)`
(116 px di laptop 1288) → `clamp(4.5rem, 7vw, 6rem)` (±90 px, setara jarak antarbagian Notion), foto kartu artikel 16:10 →
2:1. Beranda laptop 8.538 → 8.218 px; HP tidak berubah (jarak HP sudah 3.25rem).

## 097 · 25 November 2026 · Beranda lebih ringan di HP (Lighthouse)
Lighthouse HP (live, sebelum): performa 90, aksesibilitas 97, best practices 100, SEO 100; 342 KB; LCP 2,1 s; TBT 300 ms.
- Kontras: frasa redup kartu ajakan diredupkan dua kali (warna 55% × opacity .55 → 2,56:1). Kini hanya `.miring` (±4,8:1).
- Peta beranda = separuh HTML (84 KB). Koordinat wilayah Jabodetabek dibulatkan ke bilangan bulat + titik kembar dibuang
  (peta 760 unit tampil ±450 px; beda tak terlihat, dicek berdampingan). Peta kecil Indonesia tetap 1 desimal (240 unit).
  `tools/peta/buat-peta.py` ikut diubah. HTML beranda 169 → 148 KB (gzip 51 → 44 KB).
- Logo merek dibuat 72 px (dulu 112 px, tampil ±30 px); foto Layanan dapat ukuran 540 px supaya HP tidak mengambil 640 px.
- Hasil live sesudahnya: beranda performa 96–99, aksesibilitas 100, best practices 100, SEO 100 (TBT 300 → 10–140 ms).
- Halaman lain (/hitung, /produk, artikel, /area/depok, /garansi) performa 100; diperbaiki: label tab bawah HP Pinus 48%
  (2,97:1) → Lumut; sampul artikel/area `sizes` = lebar sebenarnya + ukuran 720 px; foto kartu produk ukuran 280–480 px;
  /garansi "Cara pembayaran" h3 → h2 (urutan judul).

## 098 · 25 November 2026 · Tanggal harga tidak ditampilkan di halaman publik
Melanjutkan perintah Rama di beranda ("harga per Jumat 20 November 2026 gaperlu dicantumkan", DECISIONS 090) ke halaman lain:
slip /produk/[merek], pengantar /produk, /hitung (pengantar, keterangan tabel harga, dan meta description), serta catatan
harga di halaman /area/*. Harga tetap ditarik dari Ops (`ops.json`). Yang sengaja tetap: daftar sumber artikel ("Daftar harga
Atapura … berlaku sejak …") karena angka di artikel mengacu ke daftar harga tanggal itu (klaim wajib bersumber). Kalimat /hitung
"setelah survey gratis dan opname luas" → "setelah survey dan pengukuran luas" (sama dengan tanya jawab beranda).
- Ikut disamakan (Rama, DECISIONS 090: "13 kota" → "seluruh Jabodetabek"): /tentang baris Survey gratis, meta /kontak dan
  /area, contoh chip & spanduk di /branding. llms.txt tetap menyebut jumlah + daftar wilayah (data untuk AI, bukan slogan).

## 099 · 25 November 2026 · Gambar pratinjau tautan (OG) dibuat ulang
`public/og/beranda.jpg` (dipakai semua halaman saat tautan dibagikan di WhatsApp/sosmed) masih versi lama: "Atap yang masuk
AKAL." dengan huruf miring (dilarang), huruf lama, tanpa logo Λ. Dibuat ulang dari templat `tools/og/beranda.html` (foto hero
asli, Inter 600, label spesialis, "Atap bitumen, / harga masuk akal.", tiga keunggulan hero, logo Inter baru), dirender Chrome
1200×630 → JPEG kualitas 85 (126 KB). WhatsApp menyimpan pratinjau lama beberapa waktu; tautan baru/yang belum pernah
dibagikan langsung memakai gambar baru.
- Meta description (Google): beranda disamakan dengan hero ("Spesialis jasa pasang atap bitumen (genteng aspal) … Material
  lengkap, jasa pasang tuntas." — dulu menonjolkan "hitung dalam satu menit, cara pasang per lapis, survey gratis"); /panduan
  dan /tentang dipendekkan ≤ 160 karakter. Judul artikel 63–70 karakter dan ringkasan Tegola (181) dibiarkan.

## 100 · 25 November 2026 · Sinkron harga dari Ops: tidak berhenti diam-diam, angka kalkulator dari Ops
- Audit Ops (Paket 5, Ops DECISIONS 233–234): 24–25 Nov sinkron-ops.yml gagal 3× tanpa ada yang tahu (pricelist berlaku Ops
  teracak oleh Data contoh — dibetulkan di Ops). Tiga celah di sisi website ditutup:
  1. **Lapor ke Ops**: langkah terakhir workflow (`if: always()`) menjalankan `scripts/lapor-ops.mjs` → POST
     `/api/publik/sinkron-status` (kunci SINKRON_SECRET) berisi berhasil/gagal + baris galat terakhir (stderr tarik & tes
     ditulis ke `sinkron-galat.txt`). Gagal → Hari ini pemilik di Ops merah. Tidak pernah menggagalkan workflow.
  2. **Angka tidak dikunci**: `harga.ts` membaca `faktorAlas`, `faktorLapisKedap` (dulu waste genteng), `lebarStarterM`,
     `tambahanHari` dari ops.json (dulu 1,05 / 1+waste / 0,125 / +1). `tarik-ops.mjs` menolak bila angka wajib itu hilang.
  3. **Tes tanpa rupiah tetap**: `harga.test.ts` menghitung harapan yang bergantung pada data Ops (harga starter, rangka,
     plafon, Two Tone, jumlah bundel/lembar/roll, hari) dari ops.json; rupiah tetap hanya untuk kisaran terpasang milik
     pemasaran website. Dibuktikan: harga Ops diubah (rangka, plafon, CTI, Two Tone, paku) → tes baru lulus, tes lama gagal;
     rumus dirusak → tes baru gagal.
- Catatan: jadwal "tiap jam" GitHub Actions nyatanya 3–6 jam (cron gratis tidak dijamin tepat); bisa dipicu manual dari tab
  Actions. Pemicu langsung dari Ops butuh token GitHub khusus (belum ada).

## 101 · 25 November 2026 · Kejar Dokter Atap di "atap bitumen bogor" (tanpa iklan): halaman Bogor, artikel Puncak, daftar isi samping
Pemicu: Dokter Atap memegang kotak peta #1, organik #3 (halaman proyek Rancamaya), dan kutipan AI Overview untuk
"atap bitumen bogor". Rama: kalahkan Dokter Atap, khususnya di Kota Bogor; gratis dulu. Riset: `docs/riset/serp-atap-bitumen-bogor-2026-11-25.md`.
- **Halaman Kota Bogor jadi halaman sasaran "atap bitumen bogor"**: judul "Pasang atap bitumen Bogor: harga per m² dan
  survey gratis" (usul Rama, meniru pola "pasang … rancamaya bogor"); jawaban singkat memuat harga terpasang (Dokter Atap
  tidak menulis harga); bagian enam kecamatan + kantor Cisarua; ganti genteng lama; FAQ harga, material saja, lama pasang.
  Tanpa klaim pengalaman proyek (Atapura belum punya proyek). Slug `/area/kota-bogor` tetap (umur 2 hari, kata kunci di
  URL bobotnya kecil, ganti slug = redirect + tautan berubah).
- **Kabupaten Bogor** dijuruskan ke Puncak/Cibinong ("Atap bitumen Puncak, Cibinong, dan Kabupaten Bogor") supaya tidak
  bersaing dengan halaman Kota Bogor.
- **Isian otomatis di halaman area**: `{harga-merek}`, `{harga-rentang}` (termurah–termahal), `{m2-hari}` di jawaban & FAQ,
  dari data Ops, supaya angka yang dikutip AI tidak basi.
- **Artikel "Atap villa di Puncak dan Bogor" dimajukan** dari 2 Mar 2027 ke 25 Nov 2026 (Rama: "kalau bisa hari ini"):
  data BMKG/BPS Citeko (910 m, 3.747 mm, bulan kering), ARMA lumut vs alga, CTI paku angin, Polres Bogor one way
  situasional; sampul Magnific baru (135 kredit, mode auto). Foto proyek villa asli menyusul.
- **Daftar isi samping di semua artikel & halaman area (desktop ≥60rem)**: Rama: "halaman better penuh kanan kiri" — kolom
  kiri dulu kosong di bawah jawaban singkat. Kini jawaban singkat lalu daftar isi menempel (bagian aktif disorot,
  ±35% tinggi layar) + tautan Hitung AKAL. Isi tetap ±60 karakter per baris. HP tidak berubah.

## 102 · 25 November 2026 · IndexNow dipasang
Butir 14 audit 2 Nov (belum dikerjakan). Kunci di `public/<kunci>.txt`, kirim semua URL sitemap lewat `npm run indexnow`
setelah deploy yang mengubah isi. Gratis; Bing (dipakai ChatGPT search & Copilot), Yandex, Seznam. Google tidak memakai
IndexNow; untuk Google tetap sitemap + Search Console.

## 103 · 25 November 2026 · Halaman kawasan Sentul, kepala artikel dua kolom, nomor telepon resmi
- **Sentul** (Rama: "sentul juga sebagai kawasan perumahan elit di bogor penting dipertimbangkan", kata kunci "Sentul Bogor").
  SERP "atap bitumen sentul" / "pasang atap bitumen sentul city" (SerpApi, lokasi Bogor) tidak punya halaman khusus Sentul
  di 8 besar → peluang terbuka. Dibuat `/area/sentul` (koleksi area, bukan artikel, karena niat pencariannya transaksional).
  Isi lokal yang tidak dimiliki pesaing: Tata Tertib Kawasan Sentul City Revisi 3 (tampak & warna atap ikut pedoman
  desain cluster, izin tertulis + PBG, deposit/akses jalan, jam kerja Sen–Sab 08–17, material & puing), layanan gratis
  SGC (izin renovasi kecil, pangkas pohon), ketinggian 200–450 mdpl (situs kecamatan), luas Sentul City (detik 2024).
  Tidak ada stasiun BMKG Sentul di BPS → hujan dikutip dari Dramaga & Citeko dan ditulis terang begitu.
  `cakupan` = "Babakan Madang, Kabupaten Bogor" (bukan "Kabupaten Bogor") supaya peta beranda tetap menautkan Kabupaten
  Bogor ke halamannya sendiri. `sorotJenis` mendapat nilai baru `aturan` (label "Aturan", latar #e3e8ee).
- **Kepala artikel/area desktop = sampul sinematik** (Rama: "kok kurang enak dilihat ya", lalu dua kolom judul|foto
  "kurang proporsional… judulnya di atas fotonya, foto penuh kiri dan kanan", acuan hero beranda & kartu CTA). Mulai 64rem:
  foto penuh sampai tepi kanan layar, bergeser 26% ke kanan dan memudar ke kiri (mask) ke warna Embun; lapisan Embun di
  atas (navigasi terbaca) dan kiri (judul gelap); tinggi clamp(36rem, 78svh, 48rem); keterangan "Ilustrasi" di pojok foto.
  Di bawah 64rem tetap: judul lalu sampul membulat.
- **Telepon resmi = nomor WA 0896-1138-4767** (Rama setuju 25 Nov). `bisnis.telepon` diisi; JSON-LD sudah memakai nomor
  ini lewat fallback, footer kini menampilkan "Telepon +62 896-1138-4767". Nomor yang sama wajib dipakai di GBP & marketplace.

## 104 · 25 November 2026 · Halaman kawasan Rancamaya (Ciawi, Tajur, Cicurug), sampul dipotong dari bawah, Cicurug = dekat
- Rama: "bikin juga kawasan rancamaya dan sekitarnya seperti ciawi, tajur dan cicurug. banyak perumahan juga". Rancamaya =
  halaman Dokter Atap yang dikutip AI Overview untuk "atap bitumen bogor" → dibuat `/area/rancamaya` sebagai lawan langsung.
  Isi bersumber: Rancamaya Golf Estate 500 ha, ±430 mdpl menurut pengembang, kontur & pohon tua dipertahankan, diakuisisi
  Sinar Mas Land Okt 2024 (realestat.id, 12 Agu 2025); kelurahan Rancamaya (Bogor Selatan) & Tajur (Bogor Timur); Tol Bocimi
  Seksi II Cigombong–Cibadak 11,9 km diresmikan 4 Agu 2023 di GT Parungkuda (detikJabar). Aturan renovasi Rancamaya tidak
  publik → ditulis terang, dirujuk ke contoh Sentul City. Hujan dari Dramaga dengan catatan tidak ada stasiun lokal.
- **Cicurug (Kab. Sukabumi) dilayani seperti Bogor** (Rama: "masih deket banget dari bogor jadi free transport"): survey
  gratis, harga sama, tanpa ongkos transport. Website: `kataJabodetabek` + kawasan Bogor yang sering ditulis tanpa "Bogor"
  (sentul, citeureup, ciawi, cisarua, puncak, rancamaya, tajur, cicurug). Ops: `wilayah.ts` daftar DEKAT = ["cicurug"]
  menang atas "sukabumi" di alamat (tes ditambah).
- Sampul desktop: `object-position: 50% 12%` (Rama: "gentengnya ga keliatan" di Sentul) — subjek sampul = atap di sepertiga
  atas, jadi potongan diambil dari bawah. Sampul Rancamaya: pojok kanan bawah berisi tulisan mirip watermark → dipotong (2700×1800 → 2400×1600).
- **Bukit Sentul** (Rama: "boleh bukit sentul") = nama lama Sentul City (PT Bukit Sentul Tbk 1997–2006 → PT Sentul City Tbk),
  jadi tidak dibuat halaman terpisah (isinya kembar → kanibal). Ditambahkan ke `/area/sentul`: kalimat pembuka + FAQ + sumber.
- **Summarecon Bogor** (Cibanon, Sukaraja; ±500 ha; penjualan mulai 29 Sep 2020): belum dibuat halaman — rumah tertua ±5 tahun,
  atap bawaan pengembang jarang diganti secepat itu, dan belum ada isi lokal bersumber yang cukup. Tinjau lagi bila ada lead/proyek di sana.

## 105 · 25 November 2026 · Tandingan pesaing: 4 artikel dimajukan + artikel berat per m², titik fokus sampul
- Riset 28 kata kunci (`docs/riset/serp-pesaing-2026-11-25.md`). AI Overview paling sering mengutip reel Instagram (29×),
  lalu Onduline, YouTube, Atapomah (178+ artikel), Dokter Atap. Ongkos jasa pasang, underlayer, merek, dan cek musim hujan
  dimajukan dari Desember ke 25 Nov (tautan masuk ditambah dari artikel lama).
- Artikel baru `/panduan/berat-atap-bitumen-per-m2`: halaman 1 Google untuk kata kunci ini diisi situs spam luar negeri.
  Berat per seri dari data pabrik (Maxxi dihitung dari 27 kg per bundel; Tegola dari TDS); CTI/Javabitumen/Victory tidak
  mencantumkan berat → ditulis terang, tanpa tebakan. Atap gelombang disebut umum (aturan DECISIONS 087: merek lain tidak
  disebut; sumber dicatat tanpa tautan ke situs merek itu).
- `sampulFokus` (opsional, koleksi artikel): object-position sampul desktop untuk sampul yang subjeknya bukan atap di
  sepertiga atas (default tetap 50% 12%).
- Berikutnya, satu per satu: atap bitumen gelombang vs genteng aspal → berisik saat hujan (butuh angka dB bersumber) →
  vs genteng keramik/tanah liat → naskah reel dari artikel.
- Artikel `/panduan/atap-bitumen-gelombang-vs-genteng-aspal` (25 Nov). Mulai artikel ini, sebelum tayang tiap artikel diulas
  dari tujuh sudut (Rama: "povnya lengkap… AI, ahli seo, geo, digital marketer, copy writer, pembaca, pebisnis"): dua agen
  pengulas independen (AI/SEO/GEO + cek fakta; pembaca/copywriter/marketer/pebisnis), sarannya digabung. Temuan nyata: berat
  gelombang 4,2 kg/m² hanya untuk >10° (5–10°: 0,78 lembar → ±5,1 kg/m²) → artikel berat ikut dikoreksi; Rw 28 dB = insulasi
  suara udara, bukan bising hujan → ditulis terang; klaim "lebih murah" tanpa harga gelombang diganti "komponen lebih sedikit".
- Artikel `/panduan/atap-bitumen-berisik-saat-hujan` (25 Nov), diulas 7 sudut pandang. Data: Wittmann dkk. 2022 (LIA 74 → 52 dB
  dengan lapis kedua + glasswool + pita karet), BRE IP 2/06 (intensitas bunyi atap, hujan buatan 40 mm/jam), Qiram & Rubiono 2016
  (DOI benar `10.29303/d.v6i2.12`; versi `dtm.` 404). Pengulas fakta menemukan: angka lab = bunyi yang dipancarkan atap, bukan
  bising di kamar (ditulis terang); Chen & Li 2021 = uji dengar rekaman di model kelas (klaim di artikel sekolah ikut dikoreksi).
  Sampul pertama dengan arahan Rama "angle berani": sudut rendah dari bawah teritis (aturan sampul variatif).
- Artikel `/panduan/atap-bitumen-vs-genteng-keramik-tanah-liat` (25 Nov), judul "Genteng aspal vs genteng keramik dan tanah liat",
  diulas 7 sudut pandang. Pengulas fakta: berat keramik 39–46 kg/m² (bukan 44–53; satu ukuran efektif di halaman distributor
  salah ketik, dan 53 kg/m² genteng saja mustahil di atas PPURG 50 kg/m² yang sudah termasuk reng & usuk), harga per keping
  Rp10.800–21.800 (halaman 2 distributor). Kutipan "ahli HAKI di Kompas" dari ringkasan mesin pencari TIDAK ada di artikelnya →
  tidak dipakai; gempa ditulis dari SNI 1726:2019 (V = Cs × W) saja. Papan alas disekrup ke reng (bukan menggantikan reng),
  sesuai artikel multiplek. Ditambah opsi "perbaiki per keping dulu" di tabel keputusan.
- Artikel `/panduan/cara-pasang-atap-bitumen` (25 Nov), 9 langkah dari panduan CTI Rev. Sept 2024, diulas 7 sudut pandang. Angka
  yang ambigu di teks PDF dicek ke gambar halaman (underlayment 150 mm untuk 10–15°, 100 mm di atas 15°); kalimat jurai
  "300–457 mm dari luar garis jurai" tidak jelas di gambar → dikutip apa adanya, tidak ditafsirkan. Pada CT5 paku 2 di area bayangan
  + 2 di area genteng (bukan 4 di area bayangan). Jarak reng 605 mm berlaku untuk multiplek/GRC 12 mm (tanya jawab CTI).
  Sampul v1 ditolak: paku tampak di permukaan genteng (cara pasang salah) → v2 tanpa paku terlihat, kiri dipotong (posisi reng
  meragukan). Artikel ini = dasar naskah video YouTube/reel cara pasang (rencana setelah akun sosmed).
- Artikel `/panduan/atap-bitumen-bocor` (25 Nov), peta gejala → penyebab khas → perbaikan, bersumber ARMA/CTI, diulas 7 sudut
  pandang. Selaras dengan keputusan Ops (lib/crm/lead.ts: "Perbaikan bocor dihapus, Rama 19 Nov 2026: Atapura tidak punya
  jasanya"): atap pasangan Atapura → klaim garansi 5 tahun (respons ≤3 hari kerja, sesuai bisnis.garansi); atap pemasang lain →
  hubungi pemasangnya, Atapura bisa material atau pasang ulang (survey gratis). Kalimat "Atapura mengecek atap bocor…" di
  `atap-bocor-penyebab-dan-cara-mengatasi` dan `atap-bocor-24-jam-pertama` (tayang 11 Des) diganti dengan pembagian yang sama.
  Koreksi pengulas: "2–4 galon" ARMA = galon AS → ditulis 7,5–15 liter (galon di Indonesia = 19 L); klaim "sisi teduh lebih
  lambat merekat" dihapus (tidak ada di sumber); gelombang acak = underlayer, mengikuti sambungan = papan.

## 106 · 25 November 2026 · Artikel bergambar di isi + alat interaktif di artikel (Diagnosa bocor)
- Rama: "biar ga boring… ditambahkan 1 atau 2 foto / gambar / ilustrasi… bukan hanya di cover", lalu "lebih kreatif dan berani lagi…
  jangan terlimitasi". Isi artikel kini boleh memuat gambar markdown (`![alt](…jpg)`) dengan baris keterangan miring tepat di
  bawahnya ("*Ilustrasi, bukan proyek Atapura. …*", wajib untuk gambar AI); gaya di `Artikel.astro` (`.prosa p:has(> img)`).
- Frontmatter artikel `alat` (enum) menyisipkan alat interaktif di awal isi lewat slot `awal`. Alat pertama
  `DiagnosaBocor.astro` di `/panduan/atap-bitumen-bocor`: penampang rumah SVG dengan 9 titik basah yang bisa diketuk (+ chip
  untuk keyboard/HP), slip hasil (penyebab, perbaikan, tingkat mendesak), lalu cabang "siapa pemasangnya": Atapura → klaim
  garansi WA berisi gejala; pemasang lain → jujur tidak ada tambal bocor, tombol tanya penggantian. Gejala selaras dengan tabel
  "Cocokkan gejala" di artikel (ubah keduanya bersamaan). Tanpa dependensi baru (Astro + skrip kecil).
- Artikel `/panduan/perawatan-atap-bitumen` (jadwal, cek tanpa naik, daun, talang, lumut dengan pemutih 1:1 + keamanan,
  larangan, memilih tukang, kapan ganti, garansi per pemasang), 2 gambar isi, diulas 7 sudut pandang. Jadwal ditulis terang
  sebagai saran Atapura (pabrik/ARMA hanya "berkala"); "Oktober–November" dihapus (bentrok dengan artikel BMKG).
- Alat kecil lain (kalkulator berat, diagram paku, pemilih) DITUNDA (Rama 25 Nov: "tools alat kecil ini belum perlu… lebih baik
  fokus ke keyword, isi, copy writing"). Alasan: alat tidak dibaca AI dan tidak menambah ranking langsung; nilai SEO/GEO ada di teks.
  Diagnosa bocor tetap tayang. Peluang tercatat: halaman /hitung belum diarahkan ke "kalkulator atap bitumen" / "hitung kebutuhan
  genteng aspal" (halaman 1 diisi kalkulator gelombang, keramik, dan kalkulator Inggris terjemahan).
- Artikel `/panduan/ukuran-harga-genteng-aspal-per-lembar` (25 Nov), keyword dari penelusuran terkait 30 kata kunci ("harga atap
  bitumen per lembar/per pack", "ukuran per lembar", "isi 1 bundel", "tebal"). Harga per bundel = harga per m² Ops × isi m² bundel;
  per lembar hanya bila jumlah lembar resmi ada. Diulas 7 sudut pandang. Temuan: Hitung AKAL publik hanya estimasi terpasang
  (bukan daftar bundel) → klaim dibetulkan; CT6 17 lembar/2,32 m² dari brosur cetak (web CTI masih 22/3 m²) → ditulis terang;
  syarat material saja dari Ops syarat.ts (ongkir Jabodetabek termasuk, lunas sebelum kirim, garansi material dari pabrik).
  Catatan perawatan: angka harga di artikel ini dan harga-atap-bitumen-per-m2 ditulis tetap (bertanggal) — ikut diperbarui
  bila daftar harga Ops berubah.
- (25 Nov sore) Tabel daerah jadi 11 baris setelah halaman kawasan Rancamaya & Sentul ditambahkan (103–104), lebih panjang dari
  peta → di laptop peta `position: sticky` di bawah bilah atas, jadi selalu tampil di samping baris yang sedang dibaca.
- Artikel `/panduan/analisa-harga-satuan-atap-bitumen` (25 Nov): item AHSP PUPR yang berlaku (SE Dirjen Bina Konstruksi
  182/SE/Dk/2025 Lampiran VI, 3.1.3.6 atap aspal/bitumen & 3.1.3.13 nok; edisi lama A.4.5.2.33/37) menghitung lembaran 0,8 × 1 m
  di atas plywood 6 mm, bukan shingle → analisa sendiri lewat jalur Permen PUPR 8/2023 Pasal 17(1). Koefisien bahan dari angka
  hitung Ops; contoh CTI CT3 = Rp400–450 rb/m² (cocok dengan harga terpasang). Diulas 7 sudut pandang (pengulas menemukan edisi
  2025 + koefisien kepala tukang/mandor yang berubah, BUK 10–15%, dan underlayer 1,1 vs sambungan 100–150 mm).
- PERLU KEPUTUSAN RAMA/YUSUF: faktor underlayer di Ops (`faktorLapisKedap` 1,1) mungkin kurang. Roll lebar 1 m dengan sambungan
  100–150 mm memberi lebar efektif 0,85–0,90 m → faktor 1,11–1,18 sebelum sambungan ujung. Angka bisnis, tidak diubah sepihak.

## 107 · 25 November 2026 · Beranda versi HP dipoles (pilihan Rama: "rapikan beranda versi HP")
Audit HP 390 px (skill antislop-layoutmobile): tinggi 9.688 px; target sentuh < 44 px: tab Area (40) dan "Baca panduan
lengkap" (24); tak ada teks < 13 px.
- Tabel daerah di HP dilipat ke 6 baris + tombol "Lihat N daerah lainnya" (hanya bila JS jalan; tanpa JS semua tampil; laptop
  tetap 11 baris). Tab Area & tautan panduan jadi 44 px.
- Kartu ajakan HP: judul `--hp-t1` (26 px, 4 → 3 baris), foto 14 → 11rem.
- Sorot Rancamaya tanpa nama dobel ("±430 mdpl, berkontur & banyak pohon tua", sesuai isi halamannya).
- Judul kartu artikel HP 20 → 17 px (`--hp-t4`, sama dengan kartu Layanan; 4 → 3 baris).
- Tanya jawab HP: daftar pertanyaan langsung di bawah judul; "Baca panduan lengkap" pindah ke bawah daftar (dulu di antara judul dan daftar, ±100 px kosong). Tablet/laptop tidak berubah.
- Beranda HP 9.688 → 9.250 px. Layanan (±1.030 px) dibiarkan: kartu geser + blok perusahaan sudah ringkas, tidak ada ruang kosong.

## 108 · 25 November 2026 · Kit listing marketplace sebagai data untuk Atapura Ops
- `/unduh/marketplace/kit.json` (endpoint statis): semua listing dari `listing.ts` + gambar yang sudah diekspor + `kode` varian
  Ops yang harganya dipakai listing itu (genteng per seri lewat `seriGenteng`; "Eco Roof"/"Top Shingles" = semua seri
  berawalan namanya; aksesoris lewat peta slug → kode; aluminium foil = single & double). Tegola Master belum berkode karena
  harganya masih draf di Ops.
- Dipakai Ops → Harga marketplace (Ops DECISIONS 250) supaya foto, judul, deskripsi, dan harga tayang ada di satu meja
  unggah. Isi sama dengan /internal/kit-marketplace (tanpa harga/modal), jadi tidak membuka data baru.
- `genteng()` di `harga.ts` kini ikut mengembalikan `kode`.

## 109 · 25 November 2026 · /hitung diarahkan ke "kalkulator atap bitumen" + cara menghitung kebutuhan (pilihan Rama: "gas nomor 1")
Riset SerpApi 25 Nov (3 kata kunci, semua ber-AI Overview): "kalkulator atap bitumen" dimenangkan histeel (kalkulator lembaran
gelombang), kalkulator aspal jalan, dan kalkulator Inggris terjemahan; "cara menghitung kebutuhan atap bitumen" dijawab AI dengan
langkah luas miring → bagi isi per bundel → tambah 5–10% → aksesoris (alas, underlayer, paku), mengutip histeel, Dokter Atap,
atapasphalt, ataprumahkita. Niat pencari = JUMLAH material, sedangkan /hitung hanya memberi rupiah.
- Judul tag, H1 ("Kalkulator atap bitumen."), deskripsi, dan llms.txt memuat kata kunci. Gaya kalimat lama dipertahankan.
- Bagian teks baru `#kebutuhan` "Cara menghitung kebutuhan atap bitumen": paragraf jawaban + tabel 3 kolom (material, cara hitung,
  atap 100 m²). Angkanya dihitung saat build dari `hitungEstimasi(100, PILIHAN_AWAL)` + Angka Bisnis Ops, jadi tabel ikut berubah
  bila Ops mengubah waste/faktor alas/faktor lapis kedap/paku. FAQ baru "Berapa bundel genteng aspal untuk 1 m² atap?" (FAQPage).
- Kalkulatornya sendiri TIDAK diubah (publik tetap luas + merek → rupiah, keputusan 3 Nov); alat kecil tetap ditunda (106).
- Anchor tautan masuk: 5 artikel harga/biaya kini menaut dengan teks "kalkulator atap bitumen" (sebelumnya semua "Hitung AKAL"),
  artikel ukuran-harga menaut ke `/hitung#kebutuhan`.
- Catatan: faktor underlayer 1,1 kini tampil publik di tabel; bila Bang Yusuf menaikkannya (catatan 106), tabel ikut otomatis.
