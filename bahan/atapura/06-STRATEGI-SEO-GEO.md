# 06 — Strategi SEO & GEO

Istilah sekali jelas:
- **SEO** = muncul tinggi di hasil pencarian Google biasa & Google Maps.
- **GEO** (Generative Engine Optimization) = disebut dan direkomendasikan oleh AI: Google Mode AI & AI Overview, ChatGPT, Gemini, Perplexity, Claude, Copilot.
- **Entitas** = cara mesin memahami "Atapura" sebagai satu bisnis nyata yang jelas: nama, alamat, layanan, area, orang, dan siapa saja yang membicarakannya.

Prinsip besar: **Google & AI merekomendasikan bisnis yang paling jelas, paling konsisten, dan paling banyak dibuktikan pihak lain.** Website adalah pusatnya, tapi bukan satu-satunya.

---

## A. Arsitektur situs (peta halaman)

```
/                                   Beranda
/atap-bitumen                       Pilar: panduan lengkap atap bitumen (halaman terpenting)
/harga-atap-bitumen                 Pilar harga: tabel per merek + per m² + contoh total, diperbarui tiap kuartal
/kalkulator                         Estimasi biaya 1 menit → WhatsApp
/produk                             Ringkasan 3 merek
/produk/maxxi                       + /produk/maxxi/<varian-warna/tipe>
/produk/cti                         + /produk/cti/ct3 · ct5 · ct6 · undermaster
/produk/javabitumen                 + varian
/layanan/pasang-atap-baru
/layanan/ganti-atap-lama            (genteng berat → bitumen ringan)
/layanan/perbaikan-atap-bocor
/layanan/atap-villa-dan-kafe
/layanan/proyek-perumahan-dan-komersial   (B2B: developer, kontraktor)
/standar-pasang                     Standar Pasang AKAL (checklist publik)
/garansi                            Garansi pemasangan + cara klaim
/area                               Daftar area
/area/<kota>                        Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, Jakarta Pusat,
                                    Kota Bogor, Kab. Bogor, Depok, Kota Tangerang, Kab. Tangerang,
                                    Tangerang Selatan, Kota Bekasi, Kab. Bekasi
/proyek                             Galeri Rapor Proyek
/proyek/<slug>                      contoh: /proyek/rumah-2-lantai-cibubur-cti-ct5
/bandingkan/<a>-vs-<b>              bitumen-vs-metal, bitumen-vs-keramik, bitumen-vs-beton, cti-vs-maxxi, maxxi-vs-javabitumen ...
/panduan/<slug>                     Artikel tanya-jawab (lihat daftar di bagian C)
/tentang                            Siapa di balik Atapura, PT, legalitas, tim (nama & wajah)
/cara-kerja                         Tahapan, termin, dokumen yang didapat, bayar hanya ke rekening PT
/untuk-perusahaan                   Jalur B2B: kapasitas, TKDN, pengadaan, penawaran resmi
/dokumen                            Pusat unduhan: company profile, TDS, brosur, sertifikat
/istilah                            Glosarium istilah atap (bagus juga untuk GEO)
/kontak
```

**Aturan anti-penalti:** halaman `/area/<kota>` hanya terbit kalau punya isi unik untuk kota itu (minimal 1 proyek nyata atau data spesifik lokal: jenis rumah, curah hujan, waktu tempuh survey). Halaman kota hasil ganti-nama-kota doang = "doorway page" dan dihukum Google. Terbitkan bertahap.

## B. Fondasi teknis (yang pemain lama gagal)

1. **Statis & cepat**: semua halaman dibangun jadi HTML siap saji (SSG). Target Core Web Vitals hijau di HP: LCP < 2 s, CLS < 0.05, INP < 200 ms. Gambar AVIF/WebP dengan ukuran tetap.
2. **Canonical benar per halaman** (kesalahan fatal roof-online), satu URL per konten, tanpa trailing duplicate.
3. **Title & meta description ditulis manusiawi**, maks ±60 & ±155 karakter, tanpa tag HTML, tanpa daftar keyword.
4. `lang="id"`, `og:locale = id_ID`.
5. **Data terstruktur (schema.org JSON-LD)**, satu sumber kebenaran di kode:
   - `Organization` + `RoofingContractor` (tipe LocalBusiness khusus kontraktor atap) dengan `name`, `legalName` (PT Atapura Karya Lestari), `url`, `logo`, `telephone`, `areaServed` (13 kota), `sameAs` (IG, TikTok, YouTube, Google Maps, LinkedIn).
   - `Service` per layanan, `Product` per merek/varian (tanpa rating palsu), `FAQPage` di halaman tanya-jawab, `HowTo`-gaya konten di standar pasang, `BreadcrumbList` di semua halaman, `Article` dengan `author` (orang nyata) & `dateModified`.
6. `sitemap.xml` otomatis, `robots.txt` yang **mengizinkan** crawler AI: Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended.
7. `llms.txt` di root: ringkasan Atapura + daftar halaman penting. Dampaknya masih kecil, biayanya nol.
8. **Bing Webmaster Tools + IndexNow** (ChatGPT search banyak bersandar pada indeks Bing) dan **Google Search Console** sejak hari pertama.
9. Internal link terencana: tiap artikel → pilar → layanan → kalkulator. Tiap proyek → kota + produk + layanan.
10. Tidak ada konten penting yang cuma muncul setelah JavaScript jalan atau tersembunyi di tab/accordion tertutup tanpa HTML.

## C. Strategi konten

### C1. Klaster kata kunci (hipotesis — validasi volume di Milestone 1)
| Klaster | Contoh kata kunci | Halaman |
|---|---|---|
| Inti | atap bitumen, genteng aspal, genteng bitumen, sirap aspal, atap shingle | `/atap-bitumen` |
| Harga | harga atap bitumen per meter, harga genteng aspal 2026, biaya pasang atap bitumen | `/harga-atap-bitumen`, `/kalkulator` |
| Lokal | jasa pasang genteng aspal [kota], aplikator atap bitumen [kota], tukang atap bitumen terdekat | `/area/<kota>` + Google Maps |
| Merek | genteng maxxi, harga maxxi roof, cti ct3, cti ct5, javabitumen | `/produk/...` |
| Masalah | atap bitumen bocor, atap aspal mengelupas, genteng aspal berjamur, atap berisik saat hujan | `/panduan/...`, `/layanan/perbaikan-atap-bocor` |
| Perbandingan | atap bitumen vs metal, genteng aspal vs keramik, kelebihan kekurangan atap bitumen | `/bandingkan/...` |
| Keputusan | atap bitumen cocok untuk rumah?, kemiringan minimal atap bitumen, berapa lama umur atap bitumen | `/panduan/...` |
| B2B | supplier atap bitumen proyek, genteng aspal TKDN, kontraktor atap untuk developer, TDS genteng aspal, spesifikasi teknis atap bitumen | `/untuk-perusahaan`, `/dokumen`, `/layanan/proyek-perumahan-dan-komersial` |

### C2. Format yang dikutip AI ("answer-first")
Setiap halaman panduan:
1. **Jawaban langsung di 2–3 kalimat pertama**, dengan angka. ("Biaya pasang atap bitumen di Jabodetabek tahun 2026 berkisar Rp… – Rp… per m², sudah termasuk… Selisihnya ditentukan oleh merek, alas atap, dan kerumitan bentuk atap.")
2. Tabel ringkas (AI suka tabel).
3. Penjelasan bertingkat dengan subjudul berupa pertanyaan.
4. "Diperbarui: <tanggal>" + nama penulis/peninjau (orang nyata di Atapura).
5. Sumber angka (brosur pabrik, data proyek sendiri).
6. FAQ singkat di akhir + CTA kalkulator.

### C3. "Information gain" — konten yang tidak bisa disalin kompetitor
- **Data proyek sendiri**: rata-rata durasi pasang per 100 m², biaya rata-rata per tipe rumah, kesalahan yang paling sering ditemukan saat survey.
- **Uji sederhana yang didokumentasikan**: suara hujan di atap bitumen vs metal (ukur dB pakai HP + video), suhu plafon siang hari, berat per m² ditimbang.
- **Galeri warna di bawah cahaya nyata** (pagi, siang, mendung) — orang bingung warna di brosur.
- **Kesalahan pemasangan yang bikin bocor** dengan foto close-up (dari survey perbaikan).
Ini yang membuat AI mengutip Atapura sebagai sumber, bukan sekadar daftar.

### C4. 20 artikel pertama (urut prioritas)
1. Harga atap bitumen per m² 2026 (material + jasa) — Jabodetabek
2. Atap bitumen: kelebihan, kekurangan, dan siapa yang tidak cocok
3. Atap bitumen vs genteng metal: mana untuk rumah di Jabodetabek
4. Atap bitumen vs genteng keramik/beton
5. CTI vs Maxxi vs Javabitumen: perbandingan jujur
6. Kemiringan minimal atap bitumen & kenapa penting
7. Alas atap bitumen: multiplek vs GRC
8. Kenapa atap bitumen bocor — 7 penyebab & cara cek
9. Umur atap bitumen di iklim tropis & cara merawatnya
10. Apakah atap bitumen panas? Data suhu
11. Apakah atap bitumen berisik saat hujan? Uji suara
12. Ganti genteng beton ke bitumen: apakah rangka perlu diganti?
13. Underlayment: wajib atau tidak?
14. Berapa lama pasang atap bitumen (per luas)
15. Atap bitumen untuk villa & kafe: pilihan warna dan model
16. Atap bitumen untuk atap kubah/lengkung
17. Cara membaca garansi atap: garansi pabrik vs garansi pemasangan
18. Checklist memilih aplikator atap (yang jujur, termasuk tanda bahaya)
19. Atap bitumen & TKDN untuk proyek pemerintah
20. Perawatan atap bitumen setelah musim hujan

## D. GEO: membangun entitas di luar website

Ini kerja rutin, bukan sekali jadi. Tanpa ini, website sebagus apa pun jarang disebut AI.

1. **Konsistensi NAP** (Nama, Alamat/area, Phone) identik di semua tempat: "Atapura — Spesialis Atap Bitumen Jabodetabek".
2. **Google Business Profile**: kategori "Kontraktor atap" (Roofing contractor), service-area 13 kota, foto proyek mingguan, produk, Q&A, posting. **Jangan bikin alamat palsu per kota** — itu melanggar aturan dan bisa kena suspend.
3. **Review**: target 1 review per proyek. Minta klien menyebut kota, merek, dan jenis pekerjaan dengan kata-kata mereka sendiri. Balas semua review.
4. **Listing & direktori relevan**: Bing Places, Apple Maps (Business Connect), Archify, Indotrading, Arsitag/Houzz-sejenis, marketplace (Tokopedia/Shopee toko resmi), direktori asosiasi/kontraktor bila ada.
5. **Halaman agen di situs pabrik** (CTI "Agen & Proyek Kami", Maxxi, Javabitumen).
6. **Video**: YouTube + TikTok + Reels: time-lapse pemasangan, "berapa biaya atap ini?", uji suara hujan. Judul & deskripsi memakai nama Atapura + kota. YouTube sering dikutip AI.
7. **Media & konten pihak ketiga**: pitch data unik (mis. "biaya rata-rata ganti atap di Jabodetabek 2026") ke detikProperti, Kompas Properti, Lamudi/Rumah123 journal, Archify. Mereka sering jadi sumber yang dikutip AI.
8. **Kolaborasi**: arsitek, kontraktor, developer kecil di Jabodetabek — studi kasus bersama yang terbit di situs mereka.
9. **Profil orang**: founder & kepala aplikator punya profil (LinkedIn, halaman /tentang) — bisnis dengan orang yang jelas lebih dipercaya Google & AI.

## E. Pengukuran

| Apa | Alat | Seberapa sering |
|---|---|---|
| Posisi & klik keyword | Google Search Console, Bing Webmaster | Mingguan |
| Panggilan/WA dari Maps | Google Business Profile Insights | Mingguan |
| Lead dari website | Event klik WA + form + kalkulator (analytics gratis, mis. Vercel Analytics/Umami) | Mingguan |
| **Disebut AI atau tidak** | Tabel 20 pertanyaan tetap (contoh di bawah) ditanyakan ke ChatGPT, Gemini/Mode AI, Perplexity, Claude; catat: disebut? posisi? sumber yang dikutip? | Bulanan |
| Kecepatan | PageSpeed Insights / CrUX | Tiap rilis |

Contoh pertanyaan pantau GEO: "jasa pasang atap bitumen di Bekasi yang terpercaya", "berapa harga pasang genteng aspal per meter 2026", "atap bitumen merek apa yang bagus untuk rumah", "aplikator CTI di Depok", "ganti genteng beton ke genteng aspal biayanya berapa".

## F. Yang dilarang (merusak lebih dari membantu)
- Konten massal hasil AI tanpa data/pengalaman nyata (Google menurunkan "scaled content").
- Halaman kota kembar, alamat palsu, review palsu/berbayar, klaim "No.1" tanpa bukti.
- Beli backlink murah / PBN.
- Menyalin teks kompetitor atau brosur mentah-mentah.
