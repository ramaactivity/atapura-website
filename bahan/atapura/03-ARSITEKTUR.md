# 03 — Arsitektur & Teknologi

## Keputusan: Astro, bukan Next.js

Rama menyerahkan pilihan teknologi dengan syarat: juara SEO & GEO, canggih, smooth, tidak berat di perangkat apa pun, visual tetap bagus.

| Pilihan | Kenapa |
|---|---|
| **Astro** (versi stabil terbaru — baca dokumentasi resminya sebelum menulis kode, jangan andalkan ingatan) | Setiap halaman dikirim sebagai HTML jadi. JavaScript hanya dimuat di bagian yang memang interaktif (kalkulator, pemilih warna, animasi lapisan). Next.js selalu mengirim runtime React ke semua halaman; untuk situs konten seperti ini itu beban tanpa manfaat, terutama di HP Android kelas menengah ke bawah yang dominan di pasar kita. |
| **Konten: Markdown/MDX di repo** (content collections Astro) | Artikel, proyek, produk, kota = file teks. Gratis, cepat, terversi di Git, tanpa database. |
| **Tailwind CSS v4** | Konsisten dengan proyek Rama lain. CSS dipangkas otomatis. |
| **Pulau interaktif: Preact atau Svelte** (pilih satu, kecil) | Hanya untuk kalkulator & pemilih warna. Satuannya kecil (beberapa KB), bukan React penuh. |
| **Transisi halaman: View Transitions** (fitur bawaan browser + dukungan Astro) | Pindah halaman terasa mulus seperti aplikasi, tanpa membuat situs jadi aplikasi satu-halaman yang berat. Browser lama otomatis jatuh ke navigasi biasa. |
| **Animasi umum: CSS** (termasuk scroll-driven animation) | Smooth tanpa scroll-jacking (aturan Rama). Hormati `prefers-reduced-motion`. |
| **Adegan "Selembar Genteng": gambar berlapis + CSS scroll-driven animation** (fallback JS kecil untuk browser yang belum mendukung). Tanpa Three.js, tanpa GSAP di browser pengunjung | Smooth di semua HP. Three.js hanya alat produksi gambar di laptop. |
| **Gambar: komponen gambar bawaan Astro** → AVIF/WebP, ukuran responsif, lebar/tinggi tetap | Mencegah layout loncat (CLS) dan memotong ukuran unduhan. |
| **Font: Plus Jakarta Sans, self-hosted, variable, subset Latin** | Tanpa request ke Google Fonts, tanpa teks berkedip. |
| **Hosting: Vercel gratis** (pola deploy standar Rama: GitHub Actions → Vercel CLI) | Sesuai `CARA-KERJA-RAMA.md` §7. |
| **Tanpa database di fase 1** | Gratis dulu. Lead → WhatsApp. |

## Struktur folder (arah, Claude Code menyesuaikan dengan kerangka Markas)

```
src/
  content/
    produk/        maxxi.md, cti-ct3.md, ... (spesifikasi, warna, garansi resmi, sumber dokumen)
    proyek/        <slug>.md (kota, luas, merek, durasi, foto per tahap, kutipan klien dengan izin)
    area/          <kota>.md (hanya terbit kalau ada isi unik — aturan di 06)
    panduan/       <slug>.mdx
    bandingkan/    <a>-vs-<b>.mdx
  data/
    bisnis.ts      SATU sumber kebenaran: nama, legalName, kontak, area, jam, sosmed, garansi
    harga.ts       rentang harga per merek + tanggal berlaku (dipakai kalkulator, halaman harga, schema, llms.txt)
  components/      UI + komponen schema JSON-LD
  islands/         Kalkulator, PemilihWarna, LapisanAtap
  pages/           peta halaman sesuai 06-A
public/
  robots.txt  llms.txt (dibangkitkan dari data)  favicon
```

Prinsip "satu sumber kebenaran": angka garansi, jumlah kota, harga, nomor WA hanya ditulis sekali di `src/data/`. Halaman, schema, `llms.txt`, dan pesan WhatsApp mengambil dari situ. Ini mencegah angka tidak konsisten seperti di situs Tegola — AI menghukum sumber yang bertentangan dengan dirinya sendiri.

## Alur lead (gratis)

1. Pengunjung mengisi kalkulator atau tombol "Konsultasi".
2. Situs menyusun pesan WhatsApp lengkap (kota, luas, merek, estimasi, halaman asal) → membuka `wa.me` ke nomor bisnis.
3. Form "minta dihubungi" (untuk yang tidak mau WA) → layanan form gratis (mis. Formspree/Web3Forms tier gratis) ke Gmail bisnis.
4. Event klik dicatat di analytics gratis (Vercel Web Analytics tier gratis atau Umami cloud gratis) untuk tahu halaman mana yang menghasilkan lead.

Upgrade nanti (bukan sekarang): penyimpanan lead di Supabase + notifikasi ke grup admin, CRM sederhana.

## Target performa (gerbang wajib sebelum rilis)

| Ukuran | Target (HP, koneksi 4G lambat) |
|---|---|
| LCP | < 2,0 s |
| CLS | < 0,05 |
| INP | < 200 ms |
| JavaScript per halaman artikel | < 30 KB terkompres (idealnya 0 di luar transisi) |
| Berat halaman beranda | < 600 KB total pada kunjungan pertama |
| Lighthouse (Performance, SEO, Accessibility, Best Practices) | ≥ 95 semua |

Uji di profil HP lambat (throttling) dan di lebar jendela Rama (~1230 px), bukan cuma desktop cepat.

## Adegan "Selembar Genteng" — aturan teknis (revisi)

**Masalah yang dihindari:** situs 3D real-time mengunduh mesin 3D + model + tekstur besar sebelum bisa tampil, lalu GPU HP harus menghitung adegan setiap frame sambil scroll. Hasilnya loading lama dan patah-patah, bahkan di iPhone 13 Pro.

**Solusi: render sekali di laptop, kirim gambar ke pengunjung.**
1. Claude Code membangun adegan Three.js **hanya di laptop** (folder `tools/render/`, tidak ikut dikirim ke situs) dan mengekspor tiap lapisan + tiap varian warna merek sebagai PNG transparan resolusi tinggi.
2. PNG dikompres jadi AVIF (cadangan WebP) dengan beberapa ukuran (HP & desktop).
3. Di situs, lapisan disusun dengan HTML/CSS dan digerakkan oleh **CSS scroll-driven animation** (`animation-timeline`). Browser yang belum mendukung → skrip kecil (IntersectionObserver + requestAnimationFrame, < 3 KB) atau langsung tampil statis.
4. Gambar adegan dimuat malas (lazy) saat mendekati layar; hero tidak menunggu adegan.

**Anggaran wajib adegan:**
| Item | Batas |
|---|---|
| Total gambar adegan di HP | ≤ 400 KB (desktop ≤ 700 KB) |
| JavaScript adegan | ≤ 3 KB |
| Frame rate saat scroll | 60 fps stabil di iPhone 13 Pro & Android kelas menengah (±Rp 2–3 juta) |
| Pengaruh ke LCP / CLS | Nol (adegan di bawah hero, ukuran dikunci) |

**Gerbang uji sebelum rilis:** rekam scroll di iPhone Rama dan satu Android murah, cek tidak ada frame patah (Safari Web Inspector / Chrome Performance). Gagal satu syarat → sederhanakan adegan, bukan turunkan standar.

**Upgrade nanti (opsional, hanya setelah situs menghasilkan lead):** genteng 3D real-time kecil yang bisa diputar di halaman produk, desktop saja, dimuat hanya kalau pengunjung menekan "Lihat 3D". Tidak pernah di beranda, tidak pernah otomatis.

## SEO teknis di kode (checklist)
- Canonical absolut per halaman, `lang="id"`, `og:locale id_ID`, OG image otomatis dari template.
- JSON-LD: Organization + RoofingContractor (dari `bisnis.ts`), BreadcrumbList, Service, Product, FAQPage, Article (author + dateModified).
- `sitemap.xml` otomatis + `robots.txt` mengizinkan crawler AI (daftar di `06-B`).
- `llms.txt` dibangkitkan saat build dari data & daftar halaman penting.
- IndexNow ping saat deploy (Bing/Yandex) — gratis.
- Redirect 301 terkelola di satu file konfigurasi.

## Domain & rencana pindah (kalau mulai di subdomain gratis)
- Semua URL internal relatif; `SITE_URL` hanya di satu variabel lingkungan.
- Saat domain dibeli: pasang domain di Vercel → arahkan subdomain lama ke domain baru dengan 301 per halaman → ganti `SITE_URL` → daftar domain baru di Search Console & Bing → ajukan "Change of Address" di Search Console → update semua listing (Google Business Profile, sosmed, direktori).
- Selama masih di subdomain gratis: **jangan dulu** gencar membangun backlink & listing; fokus produksi konten & foto proyek. Gencarkan setelah domain final.

## Batas & risiko
- Javabitumen belum punya data publik → halaman produknya menunggu brosur resmi.
- Harga material bisa bergerak (bahan baku bitumen naik tahun 2026) → `harga.ts` wajib punya tanggal berlaku, dan halaman harga menampilkannya.
- Foto proyek asli belum ada → halaman area & proyek terbit bertahap; jangan diisi gambar AI yang diklaim sebagai proyek.
- Tier gratis Vercel cukup untuk situs statis; batas yang perlu dipantau di Markas → Langganan: bandwidth & build minutes.
