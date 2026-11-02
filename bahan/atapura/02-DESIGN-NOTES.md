# 02 — Catatan Desain (khusus Atapura)

Pelengkap `DESIGN.md` standar Markas, bukan pengganti. Wajib dibaca bersama skill UI di `09`.

## Arah visual (revisi dari 33 referensi Rama, 2 Nov 2026): "Tenang di bawah atap"

Diringkas dari referensi Rama (solar/energi, Reform, Airen, Spectra, Deloitte, Upmind, eyebot, Vaseline, StreetEasy, dll.). Polanya:
1. **Foto sinematik jadi pahlawan** — rumah & atap asli, cahaya golden hour atau senja, kedalaman dari daun/tanaman blur di depan, sesekali drone dari atas.
2. **Manusia yang hidup tenang**, bukan model berpose: keluarga di teras, orang membaca saat hujan (Reform, Spectra, StreetEasy).
3. **Judul sans besar, campur tipis & tebal dalam satu kalimat** ("The world from a **different** perspective").
4. **Satu aksen lime/chartreuse** yang dipakai hemat: chip, kata kunci, tombol.
5. **Chip/label kecil melayang** di atas foto berisi fakta singkat.
6. **Bentuk merek besar sebagai supergrafis** di atas foto (huruf C Spectra, sapuan Regal).
7. **Copy berupa insight manusiawi**, bukan klaim ("power shouldn't feel unpredictable").
8. **Metafora visual konseptual** untuk kampanye (roller Vaseline di telapak kering, tanah yang dikelupas jadi ladang surya).

Kalimat arahnya: **Atapura terasa seperti sore yang tenang di rumah yang atapnya bisa dipercaya** — hangat, sinematik, dewasa, jelas.

Ini menggantikan arah sebelumnya ("setelah hujan", abu kebiruan). Hujan tetap ada sebagai bagian cerita (uji atap, insight "hujan deras cukup jadi suara"), tapi suasana utama hangat.

Catatan jujur: kombinasi gelap + lime termasuk pola yang sering muncul di desain buatan AI. Yang membedakan kita: (a) gelapnya hijau pinus, bukan hitam; (b) **foto asli yang memimpin**, bukan UI datar gelap; (c) lime dipakai sangat hemat; (d) bagian informasi (harga, tabel, artikel) tetap di latar terang supaya nyaman dibaca.

## Prinsip nomor satu: kejelasan untuk orang dewasa yang sedang memutuskan

Pembaca kita bukan pemburu situs keren; mereka sedang menimbang pengeluaran puluhan sampai ratusan juta dan harus bisa menjelaskannya ke orang lain. Aturan:

- **Informasi dulu, efek belakangan.** Di setiap halaman, jawaban (harga, spesifikasi, garansi) terlihat sebelum animasi apa pun. Adegan Selembar Genteng dibuat **tenang dan pendek** (4 babak, tidak lebih dari ±1,5 tinggi layar per babak) dan bisa dilewati dengan satu tautan "Lewati ke harga".
- **Mudah dibaca untuk usia 40–60:** teks badan minimal 17 px di HP / 18 px di desktop, kontras tinggi (Tinta di atas Embun/Putih), jangan teks abu muda di atas abu muda, area sentuh minimal 44 px.
- **Bahasa awam, istilah teknis dijelaskan.** Saat pertama muncul, istilah seperti underlayment, flashing, nok, TDS diberi penjelasan singkat (tooltip/teks kecil di bawahnya) + glosarium `/istilah`.
- **Tabel di mana pun ada perbandingan.** Tabel rapi, bisa digeser di HP, judul kolom tetap terlihat.
- **Angka selalu lengkap:** satuan (per m², per bundel), apa yang termasuk/tidak termasuk, tanggal berlaku.
- **Bisa dicetak & dibagikan:** halaman harga, produk, dan hasil kalkulator punya tampilan cetak/PDF yang bersih dan link yang bisa dibagikan.
- **Navigasi yang jelas & stabil:** menu tetap dengan maksimal 6 item (Atap Bitumen, Harga, Produk, Proyek, Untuk Perusahaan, Kontak) + tombol utama. Tanpa menu tersembunyi yang aneh, tanpa navigasi eksperimental.
- **Kontak berlapis:** WhatsApp, telepon, email, form — pilih sesuai kenyamanan.

## Token warna (revisi)

| Nama | Hex | Peran |
|---|---|---|
| Pinus | `#10231E` | Latar section gelap (bukti/angka, footer, overlay foto), teks besar di atas terang |
| Tinta | `#151A18` | Teks utama di latar terang |
| Lumut | `#4C5E55` | Teks sekunder, garis, ikon |
| Embun | `#F2F4F1` | Latar terang utama (netral sedikit hijau, **bukan krem**) |
| Putih | `#FFFFFF` | Kartu & tabel |
| Tunas (lime) | `#C6F24E` | Aksen tunggal: tombol utama (teks Pinus di atasnya), chip, sorotan kata. **Tidak pernah** untuk teks di atas latar terang (kontras gagal) |
| Tunas pucat | `#EAF8C4` | Latar chip/sorotan di bagian terang |
| Senja | `#F2B66B` | Hanya di foto & ilustrasi (cahaya golden hour), bukan warna UI |

Aturan pakai: ±70% terang (Embun/Putih), ±25% Pinus & foto, ≤5% Tunas. Semua pasangan teks lolos kontras AA.

## Tipografi

- **Satu keluarga: Plus Jakarta Sans** (variable). Alasannya bukan sekadar selera Rama: font ini dirancang untuk identitas kota Jakarta, jadi relevan dengan pasar Jabodetabek. Sans-serif, sesuai aturan Rama.
- Hierarki dibangun lewat ukuran, berat, dan spasi, bukan font kedua. **Judul besar memadukan berat Light dan Bold dalam satu kalimat** ("Atap yang masuk **AKAL.**") — pola utama dari referensi. Tracking sedikit rapat; badan teks Regular 17–18 px di HP, line-height 1,6; panjang baris < 75 karakter.
- Angka (harga, luas, durasi) pakai **tabular figures**. Rupiah tanpa desimal.
- Judul ditulis kalimat biasa (sentence case). Penekanan lewat **berat huruf**, bukan warna-warni; paling banyak satu kata Tunas per layar, dan hanya di atas latar gelap/foto.

## Bentuk & komponen

- Tombol & chip: **pill** (aturan Rama). Tombol utama Tunas dengan teks Pinus; sekunder garis tipis.
- **Chip fakta melayang di atas foto** ("Garansi pemasangan X tahun", "Survey gratis", "13 kota"): latar Pinus 80% atau Putih 85%, blur ringan hanya di desktop (blur mahal di HP).
- **Supergrafis chevron atap "Λ"** dari bentuk logo, besar dan tipis, menimpa sebagian foto hero & materi sosmed (padanan huruf C Spectra). Satu per layar.
- Kartu: rounded-2xl dengan bayangan lembut — **tapi tidak semua konten jadi kartu.** Hierarki dibedakan: blok foto proyek full-bleed, kartu hanya untuk item yang memang setara (produk, proyek di galeri).
- Tata letak lebar penuh dan sejajar judul; jangan kolom sempit di tengah dengan kiri-kanan kosong (aturan Rama). Teks panjang (artikel) boleh kolom baca < 75 karakter, tapi elemen pendukung (tabel, foto, kalkulator) melebar.
- Tidak boleh kontrol native browser (`select`, checkbox, range, number polos) — kalkulator memakai komponen custom: stepper luas, segmented control merek, slider luas yang besar dan nyaman di jempol.

## Satu ide besar: "Selembar Genteng" — versi ringan (revisi 2 Nov 2026)

Referensi Three.js (Oryzo, Cartier, dll.) indah tapi ada yang loading >1 menit dan patah-patah di iPhone 13 Pro. Itu tidak bisa diterima untuk situs yang tugasnya jualan. Ceritanya tetap, cara menyajikannya diganti.

**Cerita tetap 4 babak:** 1) satu genteng dengan detail granul, 2) lapisan atap tersusun satu per satu, 3) hujan turun dan air mengalir rapi, 4) atap berganti warna sesuai merek.

**Cara menyajikan: "2.5D berlapis".**
- Tiap lapisan (rangka, alas, underlayment, flashing, baris genteng, nok, tetes hujan) adalah **gambar transparan terpisah** yang sudah dirender bagus di laptop (dari adegan Three.js atau ilustrasi), disimpan sebagai AVIF/WebP kecil.
- Di browser, lapisan-lapisan ini hanya **digeser, diskalakan, dan dimunculkan** (transform & opacity). Ini jenis animasi paling murah: dikerjakan GPU tanpa menghitung ulang tata letak, sehingga tetap 60 fps bahkan di HP lama.
- Kesan kedalaman (parallax halus antarlapisan) memberi rasa "3D" tanpa mesin 3D.
- Ganti warna merek (babak 4) = tukar set gambar genteng yang sudah disiapkan, bukan render ulang.
- Hujan = beberapa lapisan tetes berulang (CSS), dimatikan di mode hemat/reduced-motion.

**Aturan gerak:**
- Hanya `transform` dan `opacity`. Dilarang menganimasikan ukuran, posisi tata letak, blur besar, atau bayangan.
- Scroll asli browser. Tidak ada scroll-jacking, tidak ada library smooth-scroll.
- Satu adegan saja (beranda, versi pendek di `/standar-pasang`). Halaman lain tenang.
- Adegan berada **di bawah** hero. Hero = foto + judul + mini kalkulator + tombol WA, tampil instan.
- Teks HTML per babak (judul + satu kalimat + link) tetap ada; ini yang dibaca Google & AI.
- `prefers-reduced-motion` → diagram statis bernomor dengan teks yang sama.

Semua animasi lain: tenang, satu warna, durasi ≥ 0,8 s untuk transisi besar (aturan Rama), tidak ada efek fade-slide di setiap section.

## Konversi di atas segalanya
- Tombol "Hitung estimasi" dan "Chat WhatsApp" terlihat **tanpa scroll** di HP.
- Tombol WA melayang di HP setelah hero lewat, tidak menutupi konten atau tombol lain.
- Bukti (jumlah proyek, garansi, review) muncul sebelum adegan visual, bukan setelahnya.
- Setiap halaman berakhir dengan satu ajakan jelas; tidak ada halaman buntu.

## Tren di luar 3D: yang dipakai & yang ditolak (2 Nov 2026)

Saringannya satu: **apakah tren ini membantu jualan, SEO/GEO, atau kecepatan?** Kalau cuma keren, tidak dipakai.

### Dipakai
| Tren | Dipakai di mana | Kenapa lolos saringan |
|---|---|---|
| **Tipografi besar & bergerak (variable font)** | Judul hero "Atap yang masuk AKAL." muncul dengan sapuan mask saat halaman tampil; berat huruf judul section sedikit menebal saat masuk layar | Plus Jakarta Sans sudah variable → nol aset tambahan. Teksnya tetap HTML (terbaca Google & AI) |
| **Bento grid (asimetris, berisi bukti nyata)** | Blok "Kenapa masuk AKAL", ringkasan merek, ringkasan proyek | Informasi padat jadi mudah dipindai di HP. **Aturan:** tiap kotak isi beda jenis (foto proyek, angka besar, kutipan review, mini peta area), ukuran beda sesuai kepentingan — bukan kartu identik berderet |
| **Micro-interaction yang mengurangi ragu** | Kalkulator: angka estimasi bergulir halus saat input berubah, slider luas besar & responsif, tombol WA berubah jadi "Membuka WhatsApp…" saat ditekan; chip merek dengan status terpilih jelas | Langsung mendorong konversi; murah (CSS + sedikit JS) |
| **Animasi native browser (CSS scroll-driven + View Transitions)** | Adegan Selembar Genteng, reveal section, perpindahan halaman yang mulus | Berjalan di luar jalur utama JavaScript → lebih ringan dari GSAP/Lenis. Browser yang belum mendukung tetap normal, hanya tanpa animasi |
| **Alat interaktif sebagai konten** | **Visualizer warna**: pilih tipe rumah (cluster, villa, kafe, ruko) → pilih merek & warna → atap berganti (gambar pra-render, bukan 3D). **Slider sebelum/sesudah** di Rapor Proyek ganti atap | Membantu keputusan beli (warna adalah keraguan nomor satu), memperpanjang waktu di halaman, bisa dibagikan ke pasangan/keluarga lewat link |
| **Kesan buatan manusia / bukti asli** | Foto tim & tukang asli, foto proyek per tahap, review bernama, tanda tangan kepala aplikator di halaman garansi | Lawan langsung "AI slop"; dipercaya manusia, Google (E-E-A-T), dan AI |
| **Desain hemat (performance-aware)** | Seluruh situs | Sudah jadi aturan di `03` |

### Ditolak (dan alasannya)
| Tren | Alasan ditolak |
|---|---|
| Glassmorphism penuh / liquid glass | Blur mahal di HP & mengganggu keterbacaan. Versi ringan hanya untuk chip kecil (lihat Bentuk & komponen) |
| Neubrutalism / anti-design | Kesan asal-asalan; merusak trust untuk pembelian puluhan juta |
| Retro Y2K / 80-an | Tidak relevan dengan atap & pemilik rumah |
| Kursor kustom / magnetic cursor | Mayoritas pengunjung di HP (tidak ada kursor) |
| Personalisasi AI per pengunjung | Belum ada data; kompleks; risiko privasi |
| Hero hanya teks tanpa foto | Untuk jasa atap, foto atap nyata adalah bukti; teks saja melemahkan trust |

## Beranda (kerangka)

```
[Hero: foto sinematik rumah golden hour, full-bleed, supergrafis chevron tipis, 2–3 chip fakta melayang]
  Kiri: judul + tagline "Atap yang masuk AKAL." + 2 tombol
  Kanan (desktop) / bawah (HP): mini "Hitung AKAL" (luas + merek → rentang biaya)
[Empat fakta: angka besar + label]
[Masalah → jawaban: atap bocor itu soal sistem, bukan genteng]
[Selembar Genteng — adegan 2.5D berlapis 4 babak (lihat atas)]
[Pilih merek: Maxxi / CTI / Javabitumen — terhubung ke babak 4; kelas harga, untuk siapa, garansi pabrik]
[Kenapa masuk AKAL: bento asimetris — 4 pilar, tiap kotak bukti beda jenis]
[Coba warna di rumah Anda: visualizer warna (tipe rumah × merek × warna)]
[Rapor Proyek terbaru: foto besar + kota + merek + durasi]
[Area layanan: 13 kota, link ke halaman kota yang sudah terbit]
[FAQ singkat (5 pertanyaan teratas) — HTML terbuka, bukan disembunyikan]
[CTA akhir: Hitung AKAL / WhatsApp]
[Footer gelap Pinus: legalitas PT, kontak, area, link penting]
```

## Halaman artikel & produk
- Pembuka = jawaban langsung (lihat format "answer-first" di `06-C2`), lalu tabel ringkas, baru penjelasan.
- Baris info: penulis/peninjau (orang nyata), tanggal diperbarui, waktu baca.
- Kalkulator mini selalu ada di akhir; tombol WA melayang di HP, tidak menutupi konten.

## Foto
- Prioritas: foto proyek asli Atapura > foto resmi pabrik (dengan izin) > gambar Magnific (suasana/tekstur saja).
- **Grading: hangat & sinematik** — golden hour/senja, kontras lembut, hitam tidak pekat, hijau daun sedikit diredam.
- Komposisi khas: atap menempati sepertiga atas, ruang kosong untuk judul, daun blur di tepi depan untuk kedalaman.
- **Drone dari atas** untuk setiap proyek (bukti skala & kerapian, juga konten sosmed terkuat).
- Manusia hanya penghuni/klien asli (dengan izin) atau tim Atapura asli; gambar AI orang hanya untuk materi konsep kampanye, tidak pernah diklaim sebagai klien.
- Rasio tetap per slot (16:9 hero desktop, 4:5 HP, 3:2 konten) supaya tata letak tidak loncat.

## Logo
Logo Atapura dibuat terpisah oleh desainer (Rama). Tidak digenerate AI, tidak dirakit dari ikon. Logo merek mitra hanya versi resmi dan utuh.
