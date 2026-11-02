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

Review desain: Impeccable finish reviewer 2 putaran (fix → fix). Semua 8 temuan material + 2 regresi sudah diperbaiki; putaran ketiga (verdict) belum dijalankan. Detektor Impeccable: 0 temuan (terbukti bisa menangkap slop di fixture).

## Menunggu dari Rama
WhatsApp bisnis, harga resmi per merek, durasi garansi pemasangan, logo, foto proyek/Magnific, brosur Javabitumen, status agen resmi, NIB/NPWP setelah PT terbit.

## Berikutnya
1. Rama cek https://atapura.vercel.app di HP.
2. Verdict pass reviewer + documenter → DESIGN.md + `.impeccable/design.json`.
3. Milestone 2 (mesin konten): content collections, template produk/proyek/area/artikel.
4. Uji lapisan desktop di Safari & Firefox (efek scroll butuh dukungan animation-timeline; tanpa itu efeknya otomatis tidak muncul).
5. Rapikan skala tipografi: 21 catatan advisory detektor (ukuran huruf di luar skala DESIGN.md) → satukan jadi token ukuran.
6. Polesan: skill better-ui/better-typography/web-typography di slip & tabel; uji di iPhone Rama.

## Catatan teknis
- Screenshot uji: skrip Playwright di scratchpad sesi; executable Chromium `~/Library/Caches/ms-playwright/chromium-1243/...` (versi Playwright global butuh 1246 yang belum terunduh).
- `.vercelignore` wajib pola berawalan `/` — `data/` tanpa `/` ikut membuang `src/data`.
