# 05 — Riset Kompetitor & Pasar

Diaudit 2 November 2026 dari HTML publik dan hasil pencarian. Bukan data traffic/ranking (perlu tools terpisah — lihat Milestone 1 di `04`).

## 1. Audit kompetitor

### Dokter Atap — dokteratap.co.id (PT Dua Sinar Sinergi)
- **Posisi:** distributor + aplikator, mengaku "sejak 2012", melayani "seluruh Indonesia", jual banyak merek (Tegola, Tamko, CertainTeed, CTI, Maxxi, Onduline, KMEW, dll.).
- **Kekuatan:** domain tua, katalog produk lengkap dengan harga (WooCommerce), banyak halaman merek → menang di query merek ("CTI harga", "Tamko"). Punya halaman referensi proyek (Tebet, Rancamaya, Cinere, Sentul).
- **Kelemahan yang bisa kita serang:**
  - Pesan "Waspada PENIPUAN yang mengatasnamakan Dokter Atap" tayang di hampir tiap halaman, lengkap dengan nomor rekening pribadi direktur. Ini sinyal trust yang buruk dan bikin calon klien was-was soal keamanan bayar.
  - Judul halaman keyword-stuffing ("Spesialis Atap - Distributor Atap - Genteng Berkualitas", "Kontraktor Atap Bitumen Indonesia No.1"). Klaim "No.1" tanpa bukti.
  - Konten proyek bertanggal 2020, terasa tidak diperbarui. Situs sempat timeout saat diakses (lambat/tidak stabil).
  - Terlalu luas (semua jenis atap, seluruh Indonesia) → tidak ada kedalaman lokal.
  - "Konsultasi gratis 24 jam" tanpa bukti respons.

### Tegola Indonesia — tegolaindonesia.com
- **Posisi:** distributor resmi Tegola (Italia), "sejak 1978", showroom Jl. Hayam Wuruk, segmen premium (garansi 40 tahun).
- **Kekuatan:** otoritas merek & umur; punya FAQ di beranda (bagus untuk GEO); aktif di IG/FB/YouTube/TikTok; ISO; testimoni.
- **Kelemahan:**
  - WordPress + Elementor (berat), `og:locale` = en_US padahal situs berbahasa Indonesia.
  - Link "Quick Links" di footer semuanya `#` (mati). Email resmi @yahoo.com.
  - Angka tidak konsisten di satu halaman: "18 type dan 87 warna" vs "17 model dan 88 warna". AI dan pembaca teliti menangkap ini sebagai tidak akurat.
  - Satu merek saja, harga premium → tidak relevan untuk pembeli kelas menengah yang membandingkan.
  - Testimoni anonim ("Home Owner", "Arsitek").

### CTI — ct-i.co.kr (manufaktur, "BITUTEK", produksi Indonesia, TKDN)
- **Catatan penting:** CTI adalah **salah satu produk kita**. Di pencarian dia pesaing, di bisnis dia mitra.
- **Kekuatan:** pabrikan lokal, sertifikat TKDN (penting untuk proyek pemerintah/BUMN), punya halaman tutorial, galeri, Tanya-Jawab, halaman **"Agen & Proyek Kami"**.
- **Kelemahan:** domain `.co.kr` (Korea) untuk pasar Indonesia, plugin WPML versi sangat lama, URL berantakan (`/page-id9/`, `/contact-us-2-2/`, `/portfolio-item/...-2/`), keunggulan ditulis sebagai label kosong tanpa penjelasan ("100% Tahan Air", "Tahan Bencana Alam").
- **Peluang:** jadi agen resmi → minta dicantumkan di halaman "Agen & Proyek Kami" = backlink dari situs pabrik, salah satu sinyal paling kuat untuk query "CTI Jakarta/Bogor/Bekasi".

### PT Atap Teduh Lestari — roof-online.com/atl
- **Posisi:** distributor material atap & bangunan (IKO, membran, insulasi, rangka, plafon, pintu-jendela), kantor Kalimalang Jakarta Timur.
- **Kekuatan:** cakupan produk luas, ISO 9001, TKDN, divisi industrial, program partnership.
- **Kelemahan teknis berat:**
  - **Canonical setiap halaman produk menunjuk ke beranda** (`canonical: https://roof-online.com/`). Artinya Google diminta menganggap halaman "Atap Bitumen" sebagai duplikat beranda → halaman produknya berpotensi tidak pernah tampil sendiri.
  - Meta title & description berisi tag HTML `<p>` dan deretan keyword ("atap sirap, sirap bitumen, atap shingle…, atap ashpalt").
  - Gambar dimuat lewat `http://` (tidak aman), link FAQ `#!` mati.
- **Catatan nama:** "Atap Teduh Lestari" mirip pola dengan "Atapura Karya Lestari". Tidak bentrok secara hukum (kata pembedanya Atapura), tapi jangan pakai "Lestari" sebagai nama panggilan brand — tetap "Atapura".

### Ringkasan pola pemain lama
| Aspek | Pemain lama | Peluang Atapura |
|---|---|---|
| Teknologi | WordPress lama, berat, bug SEO teknis | Situs statis super cepat, teknis bersih |
| Yang dijual | Merek & katalog | Hasil + proses + bukti |
| Harga | Daftar harga material saja, atau "hubungi kami" | Kalkulator estimasi total (material + jasa) |
| Bukti | Foto proyek lama, testimoni anonim | Rapor proyek per lokasi, foto per tahap, review Google bernama |
| Lokal | "Seluruh Indonesia" | Dalam per kota Jabodetabek |
| Trust | Peringatan penipuan, rekening pribadi | Rekening atas nama PT, invoice resmi, kontrak & garansi tertulis |
| Konten | Artikel generik copas | Data asli, perbandingan jujur, panduan berangka |

## 2. Pasar Indonesia secara umum

- Genteng aspal masih kalah populer dibanding keramik/beton/metal; di media mainstream masih ditulis sebagai "mahal" dan "sering impor" (Mamikos, Lamudi). Edukasi = bagian dari jualan.
- Tren yang menguntungkan: rumah minimalis, atap flat/miring modern, villa & cafe estetik, renovasi ganti atap berat ke ringan, rumah dengan rangka baja ringan (atap ringan ~8,5–13 kg/m² vs keramik/beton 40–60 kg/m²).
- **Merek yang ramai di marketplace & B2B (Indotrading, Tokopedia):** CTI (CT3/CT5/CT6), Maxxi Roof, Onduline/Onduvilla (bergelombang), Tegola, IKO, GAF, Tamko, CertainTeed, Cana, BSK (Korea), Dragon, Seeton.
- **Rentang harga material yang terlihat publik** (perlu verifikasi supplier, satuan biasanya per m²): CTI CT3/CT5/CT6 ±Rp145–170 rb; Maxxi 3-tab ±Rp135–160 rb; Tegola ±Rp440–555 rb; GAF Timberline ±Rp650 rb. Maxxi Roof 3-tab: 1000 × 333 mm, tebal 2,6 mm, 21 lembar/bundel.
- Bahan baku bitumen sempat naik tajam tahun 2026 (indikator harga aspal Shanghai naik ±30% YoY per April 2026) → harga material bisa bergerak; kalkulator wajib punya tanggal "harga per…".

## 3. Cara orang mencari sekarang (ini yang mengubah permainan)

- **Google Mode AI resmi tersedia di Indonesia dalam Bahasa Indonesia** (diumumkan September 2025) dan punya pintasan di Chrome HP. Orang mengetik pertanyaan panjang: "atap bitumen buat rumah di Bekasi bagusnya merek apa dan berapa biaya pasangnya?"
- AI menjawab dengan **merangkum beberapa sumber**, lalu menyebut nama bisnis yang (a) jelas identitasnya, (b) disebut konsisten di banyak tempat, (c) punya halaman yang menjawab langsung dengan angka & fakta.
- Konsekuensi: website yang cuma katalog (pola pemain lama) jarang dikutip. Halaman yang **menjawab pertanyaan spesifik dengan data, tabel, dan tanggal** lebih sering dikutip.
- Google Maps tetap pintu utama untuk "jasa pasang atap dekat saya". Review dengan kata spesifik ("pasang genteng aspal CTI di Cibubur, rapi, 4 hari") memberi sinyal ke Maps dan ke AI.

## 4. Kesimpulan: celah & USP Atapura

**Celah utama:** belum ada satu pun pemain yang jadi "jawaban paling jelas" untuk orang Jabodetabek yang mau pasang atap bitumen: berapa biayanya, merek mana yang cocok, siapa yang pasang, dan bagaimana kalau bocor.

**USP (urut prioritas):**
1. **Estimasi harga online dalam 1 menit** — isi luas/tipe atap & merek → rentang total (material + jasa + aksesoris), kirim ke WhatsApp. Tidak ada kompetitor yang melakukannya.
2. **Standar Pasang AKAL** — checklist pemasangan tertulis (alas, underlayment, starter, paku, flashing, nok, ventilasi) yang dipublikasikan. Klien tahu persis apa yang dikerjakan.
3. **Rapor Proyek** — tiap proyek punya halaman foto per tahap + data (luas, merek, lama kerja, kota). Bukti sekaligus konten SEO lokal.
4. **Garansi pemasangan tertulis**, terpisah dari garansi pabrik, dengan kanal klaim yang jelas.
5. **Netral merek** — tiga merek, tiga kelas harga; kita bantu pilih, bukan memaksa satu merek. Konten perbandingan jujur = magnet kutipan AI.
6. **Pembayaran aman** — hanya ke rekening PT, invoice & kontrak resmi. (Membalik kelemahan trust pemain lama tanpa menyebut nama mereka.)
