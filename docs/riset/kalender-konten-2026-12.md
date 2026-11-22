# Kalender konten artikel — riset borongan 1 (22 November 2026)

Dasar: DECISIONS 065 (mesin artikel SEO/GEO, borongan bulanan, tayang 2×/minggu, bisa ditahan dari Ops). Data mesin: `data/kalender-artikel.csv` (sumber untuk Ops "Website → Artikel" di tahap 2). Masukan Rama 22 Nov: **klien mayoritas Indonesia, khususnya Jabodetabek** → kalender diberi bobot lokal; artikel bahasa Inggris tidak ditambah dulu.

## Sumber & batasan
- **Google Autocomplete** (hl=id gl=id): 25 kata kunci awal × polos + a–z → 2.139 frasa unik (`data/riset/autocomplete-2026-11.csv`, alat `tools/riset/autocomplete.mjs`). Frasa nyata yang diketik orang, **tanpa angka volume**.
- **Riset SERP & celah konten** (±30 kueri, agen riset). Batasan: mesin pencari yang dipakai berbasis AS, bukan google.co.id → kotak "Orang juga bertanya", AI Overview, dan peta lokal tidak terlihat. Peringkat = sinyal kasar; dicek ulang lewat Serper (google.co.id) di tahap 4.
- Riset lama yang dipakai ulang: `keyword-artikel-2026-11-03.md`, `keyword-persona-2026-11-03.md`, `kompetitor-website-2026-11-02.md`, `data-lokal-area.md`.
- Volume asli baru ada setelah Search Console terpasang (domain aktif + situs dibuka).

## Temuan utama
1. **Kueri teknis-spesifik paling mudah dimenangkan dan paling mungkin dikutip AI.** "underlayer atap bitumen" muncul dalam 16 variasi (harga per m², tebal, jenis, cara pasang) tetapi SERP hanya berisi listing marketplace. Sama untuk alas atap (multiplek vs GRC: tidak ada perbandingan langsung), atap datar/dak (SERP rancu dengan membran), talang, dan perbandingan merek (tidak ada sama sekali). Atapura punya data brosur resmi → keunggulan informasi.
2. **Pencarian lokal Jabodetabek nyata dan belum dikuasai aplikator.** Contoh frasa: tukang atap bocor jakarta selatan/timur/barat, jasa renovasi atap rumah depok/bogor/tangerang, kontraktor atap jakarta, atap bocor bekasi, jasa tukang atap bocor cibubur, atap bitumen jakarta, genteng tegola jakarta. SERP-nya diisi marketplace (indotrading, tokopedia, olx) dan halaman kota programatik yang tipis.
3. **Kueri harga umum & musim hujan dikuasai media** (detik, kontan, mamikos, liputan6), tetapi datanya 2025 dan tidak per merek. Celah: harga bertanggal 2026 dari Ops + rincian lingkup pekerjaan.
4. **Dua produk tercampur di pencarian**: "genteng aspal 80x100 cm / per biji / per buah" = genteng aspal gelombang, bukan shingle. Artikel pelurusan menangkap pencari yang salah produk.
5. **Musiman**: BMKG (rilis 22 Sep 2026) — musim hujan Jabodetabek mulai Okt–Nov 2026, puncak sekitar Februari 2027. Artikel bocor, angin, dan cek atap ditaruh di Desember–Januari.
6. Pesaing aplikator terkuat (riset, tidak disebut di situs): satu blog aplikator dengan "Biaya 2026 + RAB nyata" tanpa data per merek; satu situs halaman kota programatik yang tipis. Media besar tanpa data 2026/per merek.

## Strategi lokal Jabodetabek
- Tiap artikel bertopik biaya, bocor, atau renovasi memakai **data lokal bersumber** (BMKG/BPS per wilayah, harga Jabodetabek dari Ops, contoh tipe rumah yang umum di Bekasi/Bogor/Tangerang) dan menautkan ke halaman `/area` yang relevan.
- 15 dari 31 topik bertanda lokal. Topik khas Jabodetabek: rumah subsidi Bekasi/Bogor/Tangerang, izin renovasi di perumahan cluster, villa Puncak/Bogor, memilih tukang atap bocor di Jakarta.
- Halaman `/area` Jakarta dipecah per kota administrasi **hanya** bila isi tiap wilayah unik (data BPS + minimal satu proyek) — aturan anti doorway (DECISIONS 030). Sementara itu kueri "… jakarta selatan" dikejar lewat artikel memilih tukang + halaman Jakarta yang diperkaya.
- Di luar website (paling berpengaruh untuk "dekat saya"): Google Business Profile area layanan Jabodetabek, ulasan per proyek, NAP sama di semua tempat — menunggu domain & nomor resmi.

## Pilar
| Pilar | Isi | Halaman yang sudah ada |
|---|---|---|
| Biaya | ongkos jasa, ganti atap baja ringan, limasan vs pelana, checklist penawaran | harga-atap-bitumen-per-m2, biaya-atap-rumah-per-ukuran |
| Bocor & musim hujan | cek sebelum puncak hujan, 24 jam pertama, angin, kondensasi | atap-bocor-penyebab-dan-cara-mengatasi |
| Sistem atap | underlayer, alas, talang, dak | lima-lapis-pemasangan, nok-flashing-talang |
| Ganti & renovasi | genteng beton → bitumen, rumah subsidi, 2 lantai, carport, garansi, durasi | ganti-atap-rumah-izin-lama-tanpa-pindah, ganti-atap-asbes |
| Merek | perbandingan resmi, CTI per seri, Tegola, Victory | halaman /produk |
| Lokal Jabodetabek | tukang bocor Jakarta, cluster, villa Puncak, area per kota | 15 halaman /area |
| Perawatan | lumut & pudar, diinjak/dicat | – |

**Anti kanibal**: artikel baru yang dekat dengan artikel lama wajib beda niat dan saling menautkan — ongkos jasa (lingkup jasa) vs harga per m² (harga terpasang per merek); biaya ganti atap baja ringan (bongkar + rangka baru) vs biaya per ukuran (atap baru); 24 jam pertama (darurat) vs penyebab bocor.

## Kalender & prioritas
Skor = dampak ke pelanggan 40% + cocok dengan layanan 30% + potensi pencarian 20% + kesiapan data 10% (skill content-strategy). Jadwal Selasa & Jumat. Borongan 1 = 9 artikel Desember (bertanda tanggal 2026-12-xx). "nanti" = ditahan sampai datanya ada.

| Jadwal | Judul kerja | Keyword utama | Pilar | Lokal | Skor | Butuh data |
|---|---|---|---|---|---|---|
| 2026-12-01 | Checklist atap sebelum puncak hujan Februari 2027 di Jabodetabek | cek atap sebelum musim hujan | Bocor & musim hujan | ya | 8.2 | – |
| 2026-12-04 | Ongkos jasa pasang atap bitumen per m² 2026: apa saja yang termasuk | harga jasa pasang atap bitumen per m2 | Biaya | ya | 8.8 | – |
| 2026-12-08 | Underlayer atap bitumen: fungsi, jenis, tebal, dan harga per m² | underlayer atap bitumen | Sistem atap | tidak | 8.6 | – |
| 2026-12-11 | Atap bocor saat hujan deras: yang dilakukan di 24 jam pertama | atap bocor saat hujan solusi | Bocor & musim hujan | ya | 8.1 | – |
| 2026-12-15 | Biaya ganti atap rumah dengan baja ringan & bitumen: tipe 36, 45, 60 di Jabodetabek | biaya ganti atap rumah dengan baja ringan | Biaya | ya | 8.7 | – |
| 2026-12-18 | Multiplek 12 mm vs GRC 9 mm untuk alas atap bitumen | alas atap bitumen | Sistem atap | tidak | 7.8 | – |
| 2026-12-22 | Genteng aspal terangkat atau lepas kena angin kencang: penyebab dan pencegahan | genteng aspal lepas kena angin | Bocor & musim hujan | ya | 7.5 | – |
| 2026-12-25 | Maxxi, CTI, Tegola, Victory: perbandingan spesifikasi resmi 2026 | merek atap bitumen terbaik | Merek | tidak | 8.5 | – |
| 2026-12-29 | Ukuran talang dan pipa turun untuk atap bitumen sesuai curah hujan Jakarta | talang atap bitumen | Sistem atap | ya | 7.3 | Data curah hujan maksimum harian BMKG/BPS |
| 2027-01-01 | Genteng aspal gelombang vs genteng aspal shingle: beda bentuk, cara pasang, dan harga | genteng aspal 80x100 | Dasar | tidak | 7.6 | – |
| 2027-01-05 | Renovasi atap rumah subsidi di Bekasi, Bogor, Tangerang: pilihan dan biayanya | renovasi atap rumah subsidi | Ganti & renovasi | ya | 7.6 | Ukuran tipikal rumah subsidi (sumber resmi PUPR/BP Tapera) |
| 2027-01-08 | Ganti genteng beton atau keramik ke bitumen: rangka lama dipakai atau diganti? | ganti genteng ke bitumen | Ganti & renovasi | ya | 8.1 | – |
| 2027-01-12 | Memilih tukang atap bocor di Jakarta: yang harus ditanya sebelum bayar | tukang atap bocor jakarta | Lokal Jabodetabek | ya | 8.2 | – |
| 2027-01-15 | Garansi atap bitumen: garansi pabrik vs garansi pemasangan | garansi atap bitumen | Ganti & renovasi | tidak | 7.3 | Dokumen garansi resmi per merek |
| 2027-01-19 | Bisakah atap bitumen dipasang di atap datar atau dak beton? | atap datar bitumen | Sistem atap | tidak | 7.4 | – |
| 2027-01-22 | Atap bitumen untuk rumah 2 lantai dan rencana tambah lantai | atap rumah 2 lantai | Ganti & renovasi | ya | 7.1 | – |
| 2027-01-26 | Atap limasan vs pelana dengan bitumen: beda luas, sisa potongan, dan biaya | atap limasan bitumen | Biaya | tidak | 7.2 | – |
| 2027-01-29 | CTI CT3, CT5, dan CT6: beda bentuk, isi, dan pemakaian | genteng aspal cti | Merek | tidak | 7.2 | – |
| 2027-02-02 | Genteng Tegola: seri, warna, dan harga 2026 | genteng tegola | Merek | ya | 7.3 | Harga Tegola per seri final dari Bang Yusuf |
| 2027-02-05 | Genteng Victory Standar vs Two Tone | genteng victory | Merek | tidak | 6.8 | – |
| 2027-02-09 | Atap bitumen untuk carport, teras, dan kanopi | atap carport | Ganti & renovasi | ya | 6.8 | – |
| 2027-02-12 | Plafon basah padahal atap tidak bocor: kondensasi dan ventilasi | plafon basah tapi tidak bocor | Bocor & musim hujan | tidak | 6.8 | – |
| 2027-02-16 | Lumut, jamur, dan warna pudar di genteng aspal: normal atau tidak? | genteng aspal berlumut | Perawatan | tidak | 6.7 | – |
| 2027-02-19 | Bolehkah atap bitumen diinjak, dicat, atau disemprot air bertekanan? | atap bitumen diinjak | Perawatan | tidak | 6.2 | – |
| 2027-02-23 | Checklist membandingkan penawaran pasang atap: item yang wajib tertulis | penawaran pasang atap | Biaya | tidak | 7.6 | – |
| 2027-02-26 | Renovasi atap di perumahan cluster Jabodetabek: izin pengelola dan aturan tampak | renovasi atap perumahan | Lokal Jabodetabek | ya | 7.1 | Contoh aturan renovasi resmi pengelola kawasan (publik) |
| 2027-03-02 | Atap villa di Puncak dan Bogor: hujan, kabut, dan angin | atap villa puncak | Lokal Jabodetabek | ya | 6.3 | Foto proyek villa asli |
| 2027-03-05 | Berapa hari pasang atap bitumen? Urutan kerja hari per hari | berapa lama pasang atap bitumen | Ganti & renovasi | tidak | 6.5 | Catatan proyek asli |
| nanti | Halaman area Jakarta Selatan, Timur, Barat, Utara, Pusat | jasa pasang atap bitumen jakarta selatan | Lokal Jabodetabek | ya | 7.6 | Data BPS per kota administrasi; minimal satu proyek per wilayah |
| nanti | Program gentengisasi 2026: apa artinya untuk atap rumah | program gentengisasi | Dasar | tidak | 5.3 | Naskah aturan resmi |
| nanti | Atap bitumen dan panel surya (PLTS atap): pemasangan bracket yang aman | atap bitumen panel surya | Sistem atap | tidak | 5.2 | Panduan pabrikan soal tembusan bracket |

## Standar tiap artikel (dicek sebelum dijadwalkan)
1. **Kalimat information gain** ditulis dulu: apa yang artikel ini punya dan 5 hasil teratas tidak. Tidak bisa ditulis → topik dibatalkan.
2. Format "jawaban dulu" (skema `src/content.config.ts`): jawaban 2–3 kalimat di atas, subjudul berbentuk pertanyaan, tabel untuk perbandingan, FAQ, daftar sumber (ikut ke JSON-LD).
3. Klaim teknis & angka bersumber (pabrikan, BMKG/BPS, regulasi, data Ops bertanggal) — memori "klaim wajib bersumber"; harga dari `harga.ts`/Ops, bukan ketik tangan.
4. Tanpa merek lain, tanpa janji di luar kontrak, tanpa klaim TKDN/lokal, multiplek 12 mm (memori proyek).
5. Tautan internal hanya ke halaman yang sudah tayang pada tanggal terbit artikel; minimal 3 tautan masuk/keluar dalam klaster + satu ke `/area` bila lokal + ajakan Hitung AKAL.
6. Sampul dari aset yang ada; gambar baru lewat Magnific hanya setelah "ok" Rama (DECISIONS 039).
7. 10 opsi judul → pilih satu (≤70 karakter), ringkasan ≤160 karakter, keyword utama di judul, paragraf pertama, dan satu subjudul — tanpa keyword stuffing.

## Daftar pantau GEO (untuk tahap 4)
Pertanyaan yang ditanyakan ke Google/AI tiap minggu (3 kali per mesin, dicatat tingkat penyebutan, bukan satu kali jalan): jasa pasang atap bitumen jakarta · kontraktor atap bitumen terpercaya di jabodetabek · harga atap bitumen terpasang per m2 2026 · biaya ganti atap rumah dengan baja ringan · atap bitumen bagus atau tidak untuk iklim indonesia · atap bitumen vs genteng metal mana lebih baik · underlayer atap bitumen wajib atau tidak · merek atap bitumen terbaik · tukang atap bocor jakarta selatan · renovasi atap rumah subsidi bekasi · atap bitumen tahan berapa lama · apakah atap bitumen panas.

## Sengaja tidak dibuat
- "1 bundel berapa m²", "ukuran per lembar/per bundel": membantu orang menghitung beli sendiri (DECISIONS 026). Bila Rama ingin dibuka karena kit marketplace kini memuat isi bundel, putuskan dulu.
- Frasa bermerek pihak lain (Onduline, Onduvilla, Alderon, IKO, Archiplus) — DECISIONS 028; aturan tanpa brand lain.
- Topik spandek/uPVC/polikarbonat murni (bukan layanan Atapura), kecuali sebagai pembanding di artikel yang sudah ada.
