# Handover

- **Lead otomatis ke Ops** (22 Nov 2026, DECISIONS 068 / Ops 150): kalkulator publik punya isian Nama & No. WA opsional → `api/kirim-lead.mjs` (Vercel Function) → Ops `/api/lead`. Env `LEAD_SECRET` di Vercel proyek `atapura`.
- **Harga = dari Atapura Ops** (20 Nov 2026, website DECISIONS 055 / Ops 123): `src/data/ops.json` ditarik otomatis tiap jam oleh `sinkron-ops.yml`; ubah harga di Ops, bukan di `harga.ts`. `npm run tarik-ops` untuk tarik manual.
## Mesin artikel SEO/GEO + backoffice di Ops (22 November 2026, DECISIONS 065; Ops 137)
- Keputusan Rama: borongan bulanan (±8 artikel/sesi), tayang otomatis Selasa & Jumat, bisa ditahan dari Ops; peringkat
  kompetitor lewat Serper.dev gratis; situs dibuka untuk Google begitu domain aktif. Fokus pembaca: Indonesia, khususnya Jabodetabek.
- ✅ Tahap 1 riset & kalender: `docs/riset/kalender-konten-2026-12.md` (temuan, strategi lokal, standar tiap artikel, daftar
  pantau GEO) + `data/kalender-artikel.csv` (31 topik berskor, 15 lokal; 9 bertanggal Desember = borongan 1). Autocomplete:
  `node tools/riset/autocomplete.mjs "<seed>" … > data/riset/autocomplete-YYYY-MM.csv`.
- ✅ Fondasi terjadwal: artikel ber-`terbit` setelah hari ini (WIB) dibuang di loader (`src/content.config.ts`) → tidak ada di
  halaman/daftar/sitemap/llms.txt; `.github/workflows/terbit-terjadwal.yml` deploy tiap 00:05 WIB bila ada artikel terbit hari itu.
- ✅ **Borongan 1 selesai** (DECISIONS 066): 9 artikel Desember terjadwal, sampul unik (Magnific 455 kredit), semua lolos
  `tools/artikel/cek.mjs`, tabel muat di HP 390 px, artikel harga lama disegarkan (Victory & Tegola). ✅ Promaxxi kini varian Ops
  sendiri `GT-MAXXI-PROMAXXI` 2,32 m² (Ops DECISIONS 140, harga sementara = Maxxi; tanya Bang Yusuf) → kalkulator internal pilih
  Maxxiroof/Promaxxi, kit & gambar marketplace ikut (gambar dibuat ulang; slide warna kini menyebut motif). Belum: (2) UnderMaster: brosur 16/32 kg & ">20°",
  lembar spek 18/36 kg, halaman web 8,91 m²/rol & 15–90° — situs memakai brosur. (3) Pratinjau artikel terjadwal untuk Rama
  belum ada (rencana: tahap 2 Ops).
- ✅ **Tahap 2 selesai** (DECISIONS 067, Ops 145): Ops → Lainnya → **Artikel website** (kalender, hitungan, tab per keadaan,
  Tahan/Lanjutkan khusus pemilik, tercatat di riwayat). Website kirim/tarik lewat `npm run artikel-ops` (otomatis di sinkron &
  sebelum terbit). Saat ini 59 artikel di Ops: 24 tayang, 9 terjadwal, 26 rencana.
- ✅ **Tahap 4 terpasang** (Ops DECISIONS 146): Ops → Marketing → **SEO & GEO** + workflow Ops `pantau-seo.yml` (Senin 06:00 WIB).
  Cek teknis sudah jalan (domain ✗, boleh diindeks ✗ mode konsep, sitemap 52 URL ✓, llms.txt ✓, PageSpeed 429 tanpa kunci).
  ✅ Kunci SerpApi (Free 250/bulan) dari `.env.local` website → secret Ops `SERPAPI_KEY` + `.env.local` Ops. Putaran 22 Nov:
  27 kata kunci, 25 ber-AI Overview, Atapura 0 (situs dikunci). Pesaing teratas: dokteratap.co.id (12 kata kunci, dikutip AI 3×),
  tokopedia (10), atapomah (7), id.onduline (6), maxxiroof (5). Perbaikan: hasil Google berupa pengalihan `/goto?url=` dibuka
  lewat `displayed_link`. SerpApi menyimpan cache 1 jam (gratis, tapi token susulan AI Overview kedaluwarsa) → jangan jalankan
  ulang dalam 1 jam bila butuh sumber AI lengkap.
  Opsional PSI_KEY (Google Cloud API key PageSpeed, tanpa billing) supaya kecepatan terukur.
- ✅ **Pengunjung website** (DECISIONS 069, Ops 157): beacon tanpa cookie di `Base.astro` → `api/kunjungan.mjs` → Ops
  `website_visits`. Ops → Marketing → Pengunjung website (7/30/90 hari, halaman, asal, perangkat, kota) + kolom "Dibaca 30 hari"
  di Artikel website. Diuji di produksi: browser asli tercatat, Googlebot & kiriman tanpa Origin tidak. 3 baris pertama
  (22 Nov) = kunjungan uji Claude (beranda ×2, artikel panas ×1).
- ✅ PageSpeed: `PSI_KEY` (project Google Cloud "Atapura", dibatasi ke PageSpeed Insights API) di `.env.local` website & Ops +
  secret Ops. Skor HP beranda 22 Nov: 98, LCP 2,1 dtk, CLS 0, TBT 0. Cek teknis tanpa jatah SerpApi:
  `node --experimental-strip-types scripts/pantau-seo.mjs --teknis-saja` (repo Ops).
- Menu Ops sudah dikelompokkan ulang sesi Ops (DECISIONS 147): Artikel website & SEO & GEO di grup Marketing.
- ⏳ Berikutnya: (a) ~~borongan 1~~ — tulis 9 artikel Desember sesuai standar di dokumen kalender; (b) ~~tahap 2~~; (c) tahap 4 SEO & GEO (Rama daftar
  Serper.dev, kunci ke `.env.local` Ops); (d) tahap 5 Search Console setelah domain aktif & `bisnis.konsep = false`.

## Cek kesehatan (22 November 2026, sore)
- ⚠️ **atapura.com BELUM terdaftar**: RDAP Verisign 404 (google.com 200 sebagai pembanding), tidak ada NS/A. Padahal canonical,
  sitemap, llms.txt, JSON-LD, pricelist PDF, dan PDF product knowledge semua menulis atapura.com. Tanyakan Rama: sudah bayar di
  registrar mana? Kalau belum, beli; kalau domain lain, ganti `site` di astro.config + `situs` di pricelist.astro +
  product-knowledge.astro. Situs tetap jalan di atapura.vercel.app.
- Sapu luberan 53 halaman publik (HP 390 + laptop 1230): 0 elemen keluar layar, 0 error JS (cek dibuktikan bisa gagal).
- Sinkron Ops jalan (tiap ±6 jam, jadwal GitHub sering molor dari "tiap jam"). Varian Ops per seri (GT-CTI-CT6, Tegola, Victory 2T)
  kini ikut ops.json untuk kalkulator internal per seri (DECISIONS 064): `/internal/kalkulator` punya pilihan Seri (CTI,
  Tegola, Victory) sehingga bundel CT6/Mosaik/Gothik benar. Tegola Master menunggu harga final di Ops.

## Terbaru (22 November 2026) — brosur resmi CTI, Tegola, Victory (DECISIONS 063)
- Data dikoreksi dari brosur: CT6 17 lembar = 2,32 m²; Tegola Premium Mosaik = segi enam, seri baru Premium Gothik, isi per bundel per seri, warna Tegola lengkap berkode (13 kelompok); aksesori CTI UnderMaster/BaseMaster/GuardMaster.
- Contoh warna CTI, Tegola, Victory = ubin foto dari brosur (dideteksi otomatis, diperbesar 2× + dipertajam), ubin di halaman merek diperbesar. Alat pewarna ulang (untuk merek tanpa brosur, mis. Javabitumen): `tools/warna/warnai.py`. Brosur asli di ~/Downloads (BROSUR CTI.pdf, Brosur tegola.pdf, Brosur Tamko & Victory.pdf).
- Ops sudah membuat varian GT-CTI-CT6; warna Ops perlu ditarik ulang dari produk.ts (sudah dikabari ke sesi Ops).
- Belum: harga Tegola per seri (brosur tanpa harga), garansi Victory per seri (lencana 25/20 tahun di brosur tidak jelas milik seri mana).

## Terbaru (20 November 2026)
- **Gambar marketplace pakai sistem slide baru** (DECISIONS 062, disetujui Rama di kanvas Claude Design): bingkai Pinus +
  kartu beratap + "Chat admin sebelum checkout" di tiap slide; urutan cover → deskripsi & spesifikasi → (warna) → penerapan →
  (hitung kebutuhan) → syarat & ketentuan. `npm run aset-marketplace` membuat ulang semua gambar. Belum: aturan ongkir & retur
  (tidak dicetak), foto cover rakitan merek selain CT3 (pakai tekstur seri), garis ukur per foto aksesoris, foto penerapan
  CT5/CT6/Tegola Master/Mosaik/Traditional (slide penerapan dilewati).
- **Product knowledge** `/internal/product-knowledge` (DECISIONS 054): cheatsheet sales + teks siap salin; PDF `npm run cheatsheet`
  → `public/unduh/product-knowledge-atapura.pdf` (buat ulang saat data berubah, sama seperti pricelist).
- Logo mitra transparan & tajam di `/branding` (unduh per logo + ZIP); `src/data/mitra.ts` = sumber logo & negara asal merek.
- **Pricelist v4** (DECISIONS 053) meniru referensi Rama, 26 halaman, `npm run pricelist`: halaman mitra (hal. 2), motif & warna per seri
  dengan foto di tiap halaman. Logo resmi belum ada untuk Javabitumen, Victory, K-Steel, Alphaproof, Bitumax (minta ke pemasok).
  Cek paginasi: `pw/hal.cjs` (scratchpad sesi) mencetak LUBER/SISA per halaman warna.
- Harga sheet Vendor masuk (Victory 200/220 rb, multiplek 12 mm 179 rb, flashing U 40 rb). Legend 270 rb belum di situs.
- **atapura.com** ditempel ke Vercel + jadi `site` default. **Rama beli domain 21 Nov** → isi DNS di registrar:
  A `@` 216.198.79.1, CNAME `www` cname.vercel-dns.com; lalu cek `https://atapura.com` 200.

## Sebelumnya (19 November 2026)
- **Pricelist PDF** (DECISIONS 051): template `src/pages/internal/pricelist.astro`, cetak `npm run pricelist` → `docs/pricelist/pricelist-atapura.pdf` (tidak di-commit). Cara revisi: `docs/pricelist/README.md`.
- **Plafon disembunyikan** lewat `TAMPIL_PLAFON` (bisnis.ts), Tegola Eco Roof & Top Shingles masuk (harga SEMENTARA), pricelist 16 halaman dengan halaman motif & warna per merek. DECISIONS 052.
- Halaman **/produk/aksesoris** + kelompok Aksesoris di /produk, menu atas "Panduan" → **"Artikel"** (`/artikel`, `/blog` dialihkan ke `/panduan`). DECISIONS 050.
- 6 gambar aksesoris sudah dibuat lewat MCP Magnific (log di `docs/magnific-log.md`). **Menunggu Bang Yusuf**: GRC 9 mm atau 12 mm, harga aluminium foil & ukuran lain.

## Status (2 November 2026, sesi 1)

Milestone 1 (bahan/atapura/04-ROADMAP.md):
- ✅ Kerangka Astro 7 + Tailwind v4 + Preact island + font self-hosted (Plus Jakarta Sans)
- ✅ `src/data/bisnis.ts` + `src/data/harga.ts` (harga = CONTOH, `contoh: true`) + self-check `src/data/harga.test.ts`
- ✅ Layout, header, footer, tombol WA melayang (HP), JSON-LD RoofingContractor (service-area, tanpa rating) + FAQPage
- ✅ Beranda v1: hero tekstur genteng + slip Hitung AKAL (berfungsi, pesan WA tersusun), "atap bocor" + diagram 5 lapis interaktif, tabel 3 merek + "kapan kami menyarankan pilihan lain", AKAL, area 13 kota, Rapor Proyek (kosong jujur), FAQ, penutup
- ✅ robots.txt (wildcard allow), llms.txt (dari data, tanpa angka harga contoh), sitemap
- ✅ `data/keyword-validasi.csv` — 50 keyword untuk dicek volumenya
- ✅ Deploy: akun Vercel khusus Atapura (deploy.md), secret `VERCEL_TOKEN` terpasang, workflow Actions → Vercel.
- ✅ DESIGN.md + `.impeccable/design.json` (documenter, mode gabung). Font: Uncut Sans tipis + miring (DECISIONS 011). WA sementara terpasang (012).
- ✅ Logo final Λtapura (DECISIONS 018) di `public/brand/` + terpasang di header, footer, favicon, JSON-LD. Halaman **/branding** = panduan brand & design system (unduh logo/ZIP, warna, huruf, komponen, foto, templat sosmed, penerapan, tulisan) — patokan konten sosmed. Ubah logo lewat `tools/logo/build.py`, lalu buat ulang ZIP (lihat `public/brand/README.md`). `vercel.json` cleanUrls aktif (halaman baru tanpa .html).

Review desain: Impeccable finish reviewer 2 putaran (fix → fix). Semua 8 temuan material + 2 regresi sudah diperbaiki; putaran ketiga (verdict) belum dijalankan. Detektor Impeccable: 0 temuan (terbukti bisa menangkap slop di fixture).

## Prioritas berikutnya (POV calon customer + riset a2, 2 Nov 2026)
Sumber: docs/riset/kompetitor-website-2026-11-02.md, docs/riset/audit-seo-geo-2026-11-02.md. Quick wins audit di kode SUDAH dikerjakan (commit c1bce77).
Bisa dibangun tanpa data baru:
1. Bagian "Pilih warna" (swatch dari foto sampel asli — tekstur Magnific hanya ilustrasi, wajib label "cek sampel fisik saat survey").
2. Tabel termin bayar + "Cara klaim garansi" (isi persentase DP/termin menunggu Rama).
3. ~~"Cek Atap Gratis"~~ dibatalkan Rama 4 Nov 2026: perawatan lewat laporan WhatsApp, tim hanya datang bila ada kebocoran/kerusakan (DECISIONS 035).
4. Halaman /harga-atap-bitumen, /atap-bitumen, /tentang (hanya Ramadan Saputra yang disebut — DECISIONS 027), /cara-kerja, /garansi (multi-halaman = SEO).
Butuh data/aksi Rama: harga resmi, garansi (tahun), termin DP, foto proyek asli + ulasan Google, brosur/TDS (pusat unduhan), spesifikasi teknis per merek (kemiringan min., berat, angin), domain sendiri, Google Business Profile, Search Console, telepon resmi, logo (a2).

## Revisi Bang Yusuf (DECISIONS 024) — ✅ terpasang 2 Nov 2026
Kalkulator: spek pendukung + harga terpasang/m² (qty material hanya di `/internal/kalkulator`, DECISIONS 026); cara bayar material lunas sebelum kirim + jasa 40/30/30; luar Jabodetabek dilayani (survey berbayar). Menunggu jawaban Bang Yusuf: flashing 0,4 m/m², harga GRC & Javabitumen, Flashing Z, biaya survey luar kota, boleh-tidaknya klaim pengalaman Papua dst. tampil publik.

## Konten SEO/GEO (DECISIONS 029, 031) — ✅ live 3 Nov 2026
- 13 artikel /panduan; semua klaim teknis bersumber (docs/riset/product-knowledge-atap-bitumen.md). Klaim baru wajib dicek ke dokumen itu atau sumber primer dulu.
- 11 halaman /area (Jakarta, Kota/Kab Bogor, Kota/Kab Tangerang, Tangsel, Bandung, Bali, Batam, Palembang, Balikpapan) dari data BPS/BMKG (docs/riset/data-lokal-area.md).
- 15 halaman /area live (termasuk Depok, Kota/Kab Bekasi, Surabaya). Belum: curah hujan lokal Depok & Kab Bekasi (portal Open Data Jabar sedang mati 3 Nov — coba lagi); nama kecamatan (cocokkan ke Kemendagri dulu); spesifikasi Javabitumen (situs resmi suspended — minta datasheet ke distributor).
- 21 artikel /panduan (8 per persona, DECISIONS 033) + 3 artikel Inggris /en/guides. Jurnal di docs/riset/jurnal-atap.md; klaim hukum PBG dari PP 16/2021.
- Belum: angka dB hujan untuk genteng aspal; nilai TKDN produk.
- Efek SEO baru terasa setelah `bisnis.konsep = false` (sekarang robots Disallow + noindex) dan Search Console terpasang.

## Tampilan HP seperti aplikasi native (DECISIONS 032) — 3 Nov 2026
✅ Skala ukuran HP (token --hp-*), ✅ bilah tab bawah + bilah atas kaca buram, ✅ kartu geser layanan & AKAL, daftar panduan ringkas.
✅ Hero HP ringkas (label, judul, satu tombol, bukti), ✅ 7 tahap Cara kerja kartu bertumpuk, ✅ fakta 2×2 menghitung naik, ✅ kalimat menebal ikut gulir, ✅ tombol panah dalam bulatan, ✅ warna kartu geser, ✅ tiap bagian kartu membulat di latar #dde2dc.
⏳ Berikutnya bila diminta: daftar area jadi geser, testimoni setelah ada ulasan asli.

## Variasi dari situs acuan (DECISIONS 034) — 3 Nov 2026
✅ Bento bukti desktop, ✅ garis denah (Merek, Rapor), ✅ kartu contoh Hitung AKAL di hero desktop, ✅ wordmark raksasa footer, ✅ komponen logo klien (tersembunyi sampai `src/data/klien.ts` diisi), ✅ fix celah foto hero HP.
⏳ Kandidat berikutnya dari daftar 17 (bila diminta): foto "untuk siapa" yang melebar saat disentuh, kartu proses dengan mini-UI, kuis 1 klik masalah atap, swatch warna berkode + foto tekstur (butuh foto & kode katalog), cerita proyek editorial "Proyek Vol.1", testimoni video, unduhan lembar spesifikasi/RKS — yang butuh data asli menunggu proyek pertama.

## Produk & layanan (DECISIONS 036–041) — ✅ live 4 Nov 2026
- 5 merek: Maxxi, CTI, Javabitumen, Tegola, Victory. `/produk` + `/produk/[slug]` dari `src/data/produk.ts`; harga hanya dari `harga.ts` (Tegola "tanya admin" — tunggu harga Bang Yusuf; Victory sudah ada, DECISIONS 043).
- Seri tampil sebagai foto close-up (`assets/gambar/seri/`), contoh warna = foto seri diwarnai ulang (`assets/gambar/warna/`, skrip di DECISIONS 042), penerapan semua beratap rectangular/3-tab.
- Warna hanya dari daftar resmi (riset `docs/riset/produk-per-merek.md`); warna yang hanya ada di katalog pihak ketiga ditahan.
- Ilustrasi penerapan via Magnific MCP (`.mcp.json`, login OAuth Rama). Aturan kredit DECISIONS 039, log `docs/magnific-log.md`. Generate hanya setelah "ok" Rama.
- Belum: dokumen resmi Javabitumen (spek) & Victory (pabrikan, ukuran, garansi), harga Tegola, konfirmasi stok warna tambahan CTI.

## Lini plafon & rangka, katalog ala toko online, tipografi hibrida (DECISIONS 044–046) — ✅ live 18 Nov 2026
- Rangka baja ringan per merek (Taso Rp230 rb, Hi-Steel Rp200 rb, K-Steel Rp195 rb per m² terpasang; jasa saja Rp55 rb) — `/produk/rangka-baja-ringan`, kalkulator internal pilih merek, publik "Rp195–230 rb".
- Plafon PVC Shunda (Rp300–370 rb/m²) & Javafon (= "Java Plafon", Rp200–260 rb/m²) — `/produk/shunda`, `/produk/javafon`; motif = nama + kode resmi (dilipat), garansi pasang 1 th; garansi material "sesuai ketentuan pabrik" (angka 10 th dicabut sementara, DECISIONS 047). Kalkulator punya langkah Atap/Plafon; `/?merek=X#hitung` memilih merek.
- `produk.ts`: `lini` (atap/plafon/rangka), `LINI`, `atribut`, helper `sampulProduk`/`rentangProduk`/`namaLengkap`/`fotoWarna`. Komponen `KartuProduk` (katalog berfoto) & `IkonLayanan`. Riset: `docs/riset/plafon-merek-kompetitor.md`, `rangka-baja-ringan.md`, `ux-ecommerce-katalog.md` (saran 2, 4, 6, 11, 12 belum dikerjakan: galeri di hero merek, tab bar HP sadar halaman, swatch mini di kartu, swatch bisa diketuk, tabel spek seragam).
- Font: Public Sans (judul & teks besar) + Inter (teks kecil), sama di semua perangkat. SF Pro dilarang lisensi. Daftar teks besar non-judul di `global.css` (`--font-merek`).
- Magnific: saldo ±1.141 kredit (paket Plus) — hemat; log di `docs/magnific-log.md`.
- **Atapura Ops perlu menyalin**: rangka per merek (ganti 220 rb di resep), lini Plafon (Shunda/Javafon, harga terpasang, termasuk/tidak termasuk, garansi 10 th/1 th), `pekerjaan` lead tambah plafon. Prompt pembuka untuk sesi Ops ada di laporan 18 Nov.
- Nilai SEMENTARA hasil riset (DECISIONS 047, dikoreksi Bang Yusuf Kamis 19 Nov): harga Tegola (genteng ±420 rb, terpasang 700–750 rb, masuk kalkulator), harga plafon barang saja, m²/hari plafon & rangka, survey gratis plafon & rangka, garansi rangka (pasang 5 th, Taso 10 th tahan karat). Daftar pertanyaan Kamis ada di DECISIONS 047.

## Status konsep
Situs masih KONSEP untuk partner (DECISIONS 017): `bisnis.konsep = true` → noindex + robots Disallow. Ubah ke false setelah angka termin/garansi/harga final. Penyebutan rekening dihapus dari seluruh situs (permintaan Rama 4 Nov 2026); nomor rekening jangan pernah ditulis di situs/repo, cukup di penawaran/invoice lewat WA.

## Menunggu dari Rama
WhatsApp bisnis, harga resmi per merek, durasi garansi pemasangan, logo, foto proyek/Magnific, brosur Javabitumen, status agen resmi, NIB/NPWP setelah PT terbit.

## Berikutnya (urutan wajib — DECISIONS 014)
0. **Foto Magnific LENGKAP (2 Nov):** 4 foto Magnific (08-ASET-MAGNIFIC.md no. 1 hero rumah golden hour, 4 hujan di atap, 5 tukang memasang, 6 villa/kafe) di `assets/gambar/magnific/`, . Situs patokan sudah dipilih: sunrun, otovo, enphase — pola di docs/desain/patokan-situs.md. Butuh juga dari Rama: nama, foto asli, satu paragraf & email untuk "pesan pendiri".
   Status foto (sesi a2): ✅ hero-hp, tekstur-{charcoal,coklat,abu,merah,hijau}, rumah-{cluster,villa,kafe,ruko} (atap abu, mendung — untuk visualizer warna). ✅ hujan-desktop (16:9), hujan-hp (4:5), tukang-4x5 (tangan & wajah dicek wajar), segmen-villa-3x2, segmen-kafe-3x2 (golden hour); hujan-biru-3x2 = alternatif biru dingin. ✅ hero-desktop 2688×1504 (upscale Magnific 2x). ✅ tukang-1x1 & segmen-{villa,kafe}-4x5 = potongan dari 4x5/3x2 (hemat kredit). Prompt final ada di percakapan sesi a2 (tanpa hex, tanpa kata "Indonesian" — memicu ornamen Bali). Disimpan JPG q92 (PNG asli 10 MB/biji di ~/Downloads/board-creations (1)).
   Lalu buat MOCKUP satu halaman (artifact/HTML statis, desktop + HP) untuk disetujui. Jangan rombak kode beranda sebelum mockup disetujui.
1. Rama cek https://atapura.vercel.app di HP.
2. Verdict pass reviewer + documenter → DESIGN.md + `.impeccable/design.json`.
3. Milestone 2 (mesin konten): content collections, template produk/proyek/area/artikel.
4. Uji lapisan desktop di Safari & Firefox (efek scroll butuh dukungan animation-timeline; tanpa itu efeknya otomatis tidak muncul).
5. Rapikan skala tipografi: 21 catatan advisory detektor (ukuran huruf di luar skala DESIGN.md) → satukan jadi token ukuran.
6. Polesan: skill better-ui/better-typography/web-typography di slip & tabel; uji di iPhone Rama.

## Catatan teknis
- Screenshot uji: skrip Playwright di scratchpad sesi; executable Chromium `~/Library/Caches/ms-playwright/chromium-1243/...` (versi Playwright global butuh 1246 yang belum terunduh).
- `.vercelignore` wajib pola berawalan `/` — `data/` tanpa `/` ikut membuang `src/data`.
