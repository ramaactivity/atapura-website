# Logo Atapura — "Λtapura"

Dipilih Rama 2 November 2026 (arah A dari tiga sketsa). Panduan lengkap (warna, huruf, penerapan, sosial media): halaman **/branding** di website. Huruf: Public Sans Medium (500), jarak huruf −0,04 em, sama dengan judul website. Semua huruf sudah diubah jadi garis vektor, jadi file tidak bergantung pada font.

**Cerita bentuk:** huruf A pertama tanpa palang tengah menjadi atap pelana dengan puncak runcing seperti bubungan. Λ setinggi huruf kapital dan diberi jarak lega sebelum "tapura", sesuai sketsa yang disetujui Rama.

## File
| File | Pakai untuk |
|---|---|
| `atapura-logo.svg` / `.png` | Logo utama di latar terang (header, kop surat, invoice, dokumen) |
| `atapura-logo-putih.svg` / `.png` | Logo di latar gelap atau foto (hero, footer, spanduk, seragam) |
| `atapura-simbol.svg` / `.png` | Simbol Λ saja di latar terang (stempel foto proyek, watermark) |
| `atapura-simbol-putih.svg` / `.png` | Simbol Λ di latar gelap |
| `favicon.svg`, `favicon.ico`, `favicon-16/32/48.png` | Ikon tab browser. Versi ini memakai Λ yang lebih tebal khusus ukuran kecil |
| `apple-touch-icon.png` (180), `icon-512.png` | Ikon saat situs disimpan di layar HP |
| `avatar-profil-1080.png` / `avatar-profil.svg` | Foto profil WhatsApp Business, Instagram, Google Business Profile (aman dipotong lingkaran) |

PNG berlatar transparan kecuali favicon, ikon, dan avatar (latar pinus).

## Warna
- Pinus `#10231E` di latar terang.
- Embun `#F2F4F1` di latar gelap atau foto.
- Hijau lime `#C6F24E` **tidak** dipakai untuk logo; hanya aksen kecil di desain.

## Aturan pakai
- **Ruang kosong** di sekeliling logo minimal setinggi kaki Λ (± tinggi huruf "a").
- **Ukuran minimum:** logo lengkap 80 px lebar di layar / 20 mm di cetak. Di bawah itu pakai simbol Λ saja.
- Jangan: mengganti huruf, memberi bayangan/gradasi/garis tepi, memiringkan, meregangkan, mengganti Λ dengan A biasa, atau menaruh logo pinus di atas foto gelap.

## Mengubah bentuk
`tools/logo/build.py` membangun ulang semua SVG ke `./out/`; salin ke `public/brand/`, buat ulang `atapura-brand-kit.zip` (`zip -X atapura-brand-kit.zip README.md *.svg *.png favicon.ico`), dan salin `favicon.ico` ke `public/`. dari Public Sans (unduh `PublicSans[wght].ttf` dari github.com/google/fonts, ofl/publicsans, lalu instance ke wght 500). Lisensi font: `docs/lisensi/PublicSans-OFL.txt` (logo dari garis huruf OFL boleh dipakai komersial).

## Sebelum dicetak / didaftarkan
Pencarian "atapura" di PDKI (mode Normal) 2 Nov 2026: tidak ada data. Ulangi dengan mode **Fonetik**, lalu daftarkan merek atas nama PT (minimal kelas 37) begitu PT terbit.
