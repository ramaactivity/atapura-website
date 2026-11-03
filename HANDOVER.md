# Handover

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
3. "Cek Atap Gratis" setelah musim hujan + layanan perawatan sebagai kartu/bagian sendiri.
4. Halaman /harga-atap-bitumen, /atap-bitumen, /tentang (2 pendiri), /cara-kerja, /garansi (multi-halaman = SEO).
Butuh data/aksi Rama: harga resmi, garansi (tahun), termin DP, foto proyek asli + ulasan Google, brosur/TDS (pusat unduhan), spesifikasi teknis per merek (kemiringan min., berat, angin), domain sendiri, Google Business Profile, Search Console, telepon resmi, logo (a2).

## Revisi Bang Yusuf (DECISIONS 024) — ✅ terpasang 2 Nov 2026
Kalkulator: spek pendukung + harga terpasang/m² (qty material hanya di `/internal/kalkulator`, DECISIONS 026); cara bayar material lunas sebelum kirim + jasa 40/30/30; luar Jabodetabek dilayani (survey berbayar). Menunggu jawaban Bang Yusuf: flashing 0,4 m/m², harga GRC & Javabitumen, Flashing Z, biaya survey luar kota, boleh-tidaknya klaim pengalaman Papua dst. tampil publik.

## Status konsep
Situs masih KONSEP untuk partner (DECISIONS 017): `bisnis.konsep = true` → noindex + robots Disallow. Ubah ke false setelah angka termin/garansi/harga final **dan rekening atas nama PT sudah ada** — seluruh copy menjanjikan "hanya ke rekening atas nama perusahaan"; rekening pribadi sementara (Rama punya) jangan pernah ditulis di situs/repo, hanya di kontrak/invoice.

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
