# 00 — BRIEF: Website Atapura

Dirangkum dari brainstorm Rama × Claude (claude.ai), 2 November 2026.

## Ringkasan satu paragraf

Atapura adalah aplikator + supplier atap bitumen (genteng aspal / shingle) untuk Jabodetabek, di bawah PT Atapura Karya Lestari (sedang diurus). Websitenya punya satu tugas utama: **jualan lewat pencarian**. Artinya menang di Google (SEO) dan sering disebut/direkomendasikan oleh AI seperti ChatGPT, Gemini, Google AI Mode, Perplexity, dan Claude (GEO). Visual dan pengalaman harus premium dan meyakinkan, tapi semua keputusan desain tunduk pada satu pertanyaan: *apakah ini bikin kita ditemukan dan dipercaya?*

## Keputusan yang sudah dikunci

| # | Keputusan | Alasan singkat |
|---|---|---|
| D1 | Brand: **Atapura**. Badan hukum: **PT Atapura Karya Lestari** (cadangan: PT Atapura Andalan Sejahtera) | Nama unik = entitas bersih di mata Google & AI |
| D2 | Area layanan: **Jabodetabek** (bukan cuma Puncak) | Pasar lebih besar; strategi halaman per kota |
| D3 | Produk: **Maxxi**, **Javabitumen**, **CTI** (genteng/sirap bitumen) | Tiga lapis harga: ekonomis → menengah |
| D4 | Model bisnis: **aplikator + supplier** (jasa pasang + material dalam satu paket) | Margin di jasa; material ikut paket |
| D5 | Tagline: **"Atap yang masuk AKAL."** — AKAL = Andal, Kualitas, Amanah, Lestari | Lihat `07-BRAND-AKAL-DAN-COPY.md` |
| D6 | Aset gambar AI dibuat Rama di **Magnific**; Claude cuma kasih meta prompt. Logo & teks tidak pernah digenerate | Aturan kerja Rama |
| D7 | Teknologi diserahkan ke Claude. Diputuskan: **Astro** (situs statis, nyaris tanpa JavaScript) + Tailwind v4, deploy Vercel gratis. Jenis Markas: **Situs sederhana**. Detail & alasan di `03-ARSITEKTUR.md` | Paling ringan di HP murah = skor kecepatan terbaik = modal SEO; tetap bisa interaktif (kalkulator, animasi) |
| D8 | **Gratis dulu, upgrade bertahap.** Fase 1: hosting Vercel gratis, tanpa database, lead lewat WhatsApp + form gratis, email Gmail `atapurakaryalestari@gmail.com` (atau alias lebih pendek kalau tersedia). Upgrade nanti: email @atapura.id, analytics berbayar, dsb. | Arahan Rama 2 Nov 2026 |
| D10 | **Pengecualian yang disarankan: domain** (atapura.id / atapura.com, ratusan ribu per tahun). Nilai SEO menempel ke domain; mulai di subdomain gratis lalu pindah = sebagian nilai hilang. **Menunggu keputusan Rama.** Kalau tetap gratis: mulai di `atapura.vercel.app`, siapkan redirect 301 saat pindah (lihat `03`) | Keberatan disampaikan sekali, keputusan di Rama |
| D11 | **Urutan prioritas (tidak boleh dibalik):** 1) dapat customer (lead WA/form), 2) menang SEO & GEO, 3) cepat & mulus di HP apa pun, 4) visual. Visual tugasnya membangun trust; kalau satu efek visual mengorbankan 1–3, efeknya dibuang | Arahan Rama 2 Nov 2026, setelah referensi Three.js loading >1 menit dan patah-patah di iPhone 13 Pro |
| D12 | **Tidak ada 3D real-time di website.** Three.js hanya dipakai di laptop saat produksi untuk merender gambar per lapisan; pengunjung menerima gambar ringan yang digerakkan CSS | Smooth di semua HP, tidak membebani loading |
| D13 | **Target: orang dewasa yang memutuskan dengan informasi** — pemilik rumah/properti perorangan dan orang dengan jabatan di perusahaan (pengadaan, manajer proyek, arsitek, pemilik usaha). Mereka butuh **kejelasan**: harga, spesifikasi, garansi, legalitas, jadwal, cara bayar. Kejelasan informasi menang atas efek visual di setiap keputusan desain. Detail segmen di `01` | Arahan Rama 2 Nov 2026 |
| D14 | **Arah visual "Tenang di bawah atap"** dari 33 referensi Rama: foto sinematik hangat, manusia yang hidup tenang, judul sans campur tipis-tebal, aksen tunggal lime, chip fakta melayang, supergrafis chevron atap, copy insight. Berlaku sama untuk website & sosmed (`02`, `10`) | Menggantikan arah "setelah hujan" |
| D9 | Bahasa situs: **Bahasa Indonesia** saja (id-ID) | Pasar lokal; jangan ulangi kesalahan kompetitor yang locale-nya en_US |

## Posisi kita vs pemain lama (ringkas — detail di `05`)

Pemain lama (Dokter Atap, Tegola Indonesia, CTI, Atap Teduh Lestari/roof-online) semuanya **WordPress lama** dengan masalah teknis nyata: canonical salah, meta title berisi tag HTML, locale bahasa Inggris, link footer mati, URL `page-id9` / `contact-us-2-2`, keyword stuffing. Mereka menjual **merek**; tidak ada yang menjual **kepastian hasil** secara transparan.

Celah Atapura: **"aplikator lokal Jabodetabek yang paling transparan dan paling bisa dibuktikan"**: estimasi harga online, standar pasang yang terdokumentasi, rapor foto per proyek, garansi pemasangan tertulis, perbandingan merek yang jujur.

## Ekspektasi yang jujur

- Kata kunci lokal panjang (mis. "jasa pasang genteng aspal Depok"): realistis halaman 1 dalam **3–6 bulan** kalau konten & Google Maps jalan.
- Kata kunci besar ("atap bitumen", "genteng aspal"): pesaing punya domain umur 10+ tahun. Realistis **9–18 bulan**, dan butuh sebutan dari situs lain (backlink + listing), bukan cuma website bagus.
- GEO (disebut AI) **ditentukan sebagian besar di luar website**: review Google, listing, artikel media, video. Website hanya separuh pekerjaan. Ini ditulis di `06` sebagai kerja rutin bulanan.
- Riset ini dari membaca HTML publik & hasil pencarian. **Belum ada data volume keyword dan traffic** (butuh tools seperti Google Keyword Planner/Ubersuggest/Search Console). Angka prioritas keyword di `06` adalah hipotesis yang divalidasi di milestone pertama.

## Yang dibutuhkan dari Rama (tanpa ini website tidak bisa jujur)

1. **Foto proyek asli.** Ini faktor trust terbesar. Kalau belum punya proyek: 3–5 proyek pertama didokumentasikan penuh (foto tiap tahap, drone kalau bisa); tawarkan potongan harga ke klien sebagai ganti izin dokumentasi.
2. **Data produk resmi** dari supplier: brosur/TDS Maxxi, Javabitumen, CTI (ukuran, berat/m², garansi pabrik resmi, warna). Catatan: di web, garansi CTI tertulis beda-beda (20 vs 30 tahun) — pakai dokumen resmi saja.
3. **Info Javabitumen**: tidak ditemukan jejak online sama sekali. Butuh brosur, asal produksi, spesifikasi. (Sisi baiknya: kalau mereknya baru, kita bisa jadi pemilik hasil pencarian "Javabitumen".)
4. **Harga jual** per m² (material, jasa, paket) atau minimal rentang. Untuk kalkulator.
5. **Ketentuan garansi pemasangan** Atapura (berapa tahun, cakupan apa).
6. **Nomor WhatsApp bisnis**, email domain, alamat basis (boleh service-area tanpa alamat publik).
7. Status: domain atapura.id/.com, handle sosmed, PDKI, PT.
8. Apakah Atapura agen resmi CTI / Maxxi / Javabitumen? (Kalau ya → minta dicantumkan di halaman agen mereka = backlink dari situs pabrik.)

## Pertanyaan yang belum terjawab

- Harga dan margin per merek (rahasia bisnis — tidak tayang publik, hanya rentang).
- Apakah Atapura juga mengerjakan rangka atap, multiplek/GRC alas, talang, waterproofing dak? (Memengaruhi daftar layanan.)
- Kapasitas tim pasang per bulan (memengaruhi janji jadwal di website).
- Nama & wajah tim yang boleh ditampilkan (E-E-A-T: Google & AI lebih percaya bisnis yang orangnya jelas).

## Wajib untuk Claude Code (lihat `09-SKILL-WAJIB.md`)

UI wajib lewat trio impeccable + emil-design-eng + taste-skill + frontend-design. SEO/GEO wajib lewat skill marketing (seo-audit, schema-markup, programmatic-seo, ai-seo bila tersedia). AI slop = gagal.
