# 01 — Spesifikasi Website Atapura

## Siapa penggunanya (segmen — hipotesis, divalidasi dari 20 lead pertama)

Semua segmen sama-sama orang dewasa yang membelanjakan uang besar dan harus bisa **mempertanggungjawabkan keputusannya** — ke pasangan, keluarga, atasan, atau klien. Itu sebabnya yang mereka cari adalah kejelasan, bukan hiburan.

| Segmen | Siapa | Yang harus jelas sebelum menghubungi | Yang mereka bawa ke orang lain |
|---|---|---|---|
| **A. Pemilik rumah** (inti) | Usia ±30–60, bangun baru/renovasi/ganti atap di Jabodetabek; sering dibahas bersama pasangan/keluarga | Kisaran biaya total, cocok untuk rumahnya atau tidak, berapa lama, garansi, siapa yang mengerjakan, cara bayar aman | Screenshot estimasi, link visualizer warna, link proyek serupa |
| **B. Pemilik villa, kafe, usaha kecil** | Pemilik bisnis/investor properti; peduli tampilan & waktu kerja (usaha tidak boleh lama tutup) | Estetika & warna, tahan hujan deras, durasi pengerjaan, bisa kerja bertahap | Portofolio sejenis, jadwal kerja |
| **C. Profesional perusahaan** | Staf pengadaan, manajer proyek developer/kontraktor, arsitek, facility manager | Data teknis (TDS), sertifikat & TKDN, legalitas PT (NIB, NPWP), kapasitas & jadwal, termin pembayaran, faktur, kontrak | **Dokumen**: company profile PDF, TDS, sertifikat, penawaran resmi berkop — untuk diajukan ke atasan/klien |

Mesin pencari & AI juga "pengguna": butuh fakta terstruktur yang konsisten.

## Kebutuhan informasi yang wajib terjawab di website

| Pertanyaan | Dijawab di |
|---|---|
| Berapa biayanya? | Hitung AKAL + `/harga-atap-bitumen` (tabel, tanggal berlaku, apa saja yang termasuk & tidak termasuk) |
| Cocok untuk bangunan saya? | `/atap-bitumen` (termasuk kapan **tidak** cocok), halaman produk |
| Merek apa, bedanya apa? | Tabel perbandingan 3 merek: tebal, berat/m², garansi pabrik, warna, kelas harga, cocok untuk |
| Berapa lama pengerjaan? | Kalkulator + halaman layanan (rata-rata dari data proyek) |
| Siapa yang mengerjakan, perusahaannya jelas? | `/tentang`: PT, NIB, NPWP, alamat, tim (nama & wajah), foto workshop/gudang |
| Garansinya apa, klaimnya bagaimana? | `/garansi`: cakupan, durasi, pengecualian, langkah klaim |
| Cara bayar aman? | `/cara-kerja`: tahapan (survey → penawaran → kontrak → DP → pengerjaan → serah terima → pelunasan), termin, **hanya ke rekening PT** |
| Dokumen apa yang saya dapat? | Daftar: penawaran berkop, kontrak, invoice/faktur, rapor foto, kartu garansi |

## Jalur khusus perusahaan (segmen C)
- Halaman **`/untuk-perusahaan`**: kapasitas per bulan, TKDN (bila produk mendukung), alur pengadaan, termin, contoh proyek komersial.
- **Pusat unduhan** `/dokumen`: company profile, TDS & brosur tiap merek, sertifikat, contoh format penawaran — PDF ringan, nama file jelas, tanpa wajib isi data untuk dokumen umum.
- Form **"Minta penawaran resmi"**: nama perusahaan, jabatan, lokasi proyek, luas, tenggat, kebutuhan dokumen (faktur, TKDN) → masuk email + notifikasi WA admin.
- Tombol alternatif selain WhatsApp: **email & telepon** (profesional sering tidak mau mulai dari WA pribadi).

## Masalah yang diselesaikan
Calon klien tidak tahu biaya wajar, takut ditipu (kasus penipuan atas nama aplikator memang ada di pasar ini), dan tidak bisa menilai kualitas pemasangan. Website Atapura menjawab ketiganya sebelum klien chat.

## Fitur inti (fase 1)

1. **Hitung AKAL (kalkulator estimasi)**
   - Input: luas atap (m²) atau bantuan hitung (panjang × lebar bangunan + bentuk atap: pelana/limasan/datar-miring + perkiraan kemiringan), merek (Maxxi/CTI/Javabitumen atau "bantu pilihkan"), jenis pekerjaan (pasang baru / ganti atap lama / perbaikan), kota.
   - Output: rentang biaya total (material + aksesoris + jasa), rincian per kelompok, durasi kerja perkiraan, tanggal berlaku harga, catatan "estimasi final setelah survey gratis".
   - Aksi: "Kirim ke WhatsApp" (pesan tersusun otomatis) atau "Minta dihubungi".
   - Ada versi mini di hero & akhir artikel, versi penuh di `/kalkulator`.
   - Harga dari `src/data/harga.ts` (rentang, bukan HPP/margin — rahasia bisnis tidak pernah dikirim ke browser).
2. **Halaman produk** per merek & varian: spesifikasi dari dokumen resmi, warna (foto sampel asli), garansi pabrik, cocok untuk siapa, kapan tidak cocok, rentang harga.
3. **Standar Pasang AKAL**: checklist per lapisan + Lapisan Atap interaktif.
4. **Rapor Proyek**: template halaman proyek (kota, tipe bangunan, luas, merek & warna, durasi, foto per tahap, kutipan klien dengan izin, link ke Google review bila ada).
5. **Halaman layanan** (5 layanan di `06-A`).
6. **Halaman area** per kota (terbit bertahap sesuai aturan di `06-A`).
7. **Panduan & Bandingkan** (format answer-first).
8. **Halaman harga** (`/harga-atap-bitumen`) dengan tabel dan tanggal berlaku.
9. **Garansi** + cara klaim, **`/cara-kerja`** (tahapan & termin), **`/untuk-perusahaan`**, **`/dokumen`** (pusat unduhan). **Tentang** (PT, legalitas, tim, cara bayar aman: hanya ke rekening atas nama PT).
10. **Visualizer warna** (`/warna` + versi ringkas di beranda): tipe rumah × merek × warna → gambar pra-render; tombol "Kirim pilihan ini ke WhatsApp" dan link yang bisa dibagikan.
11. **Slider sebelum/sesudah** di Rapor Proyek ganti atap.
12. Tombol WhatsApp melayang (HP), kontak di footer, schema & SEO teknis di semua halaman.

## Fitur nanti (bukan fase 1)
- Penyimpanan lead + notifikasi admin (Supabase) — saat lead sudah rutin.
- Halaman status proyek untuk klien (link pribadi: progres + foto harian).
- Upload foto atap untuk estimasi jarak jauh.
- Versi Bahasa Inggris (untuk villa milik ekspat) — hanya kalau ada permintaan nyata.

## Alur utama
1. Orang mencari "biaya pasang atap bitumen Depok" → masuk halaman harga/area → membaca jawaban langsung → mencoba Hitung AKAL → melihat 2–3 Rapor Proyek terdekat → kirim WA berisi estimasi → admin jadwalkan survey.
2. Orang bertanya ke ChatGPT/Mode AI → AI mengutip halaman panduan/harga Atapura dan menyebut "Atapura" → orang mencari "Atapura" → masuk beranda → alur 1.
