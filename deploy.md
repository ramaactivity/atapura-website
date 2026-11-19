# Deploy & akun

| Layanan | Akun | Catatan |
|---|---|---|
| GitHub | ramaactivity | repo privat `ramaactivity/atapura-website`, commit email rama.activity98@gmail.com |
| Vercel | atapurakaryalestari@gmail.com (team `atapura`, `team_E2sc4rJv4neVvRPpJubDdAqr`) | proyek `atapura`, `prj_R9OCxzPUAjRnUTZR4Uavihp5QK36`, Hobby, Vercel Authentication mati, alias `atapura.vercel.app` |
| Domain | `atapura.com` (+ `www` → 308 ke apex) | ditempel ke proyek Vercel 20 Nov 2026 sebelum dibeli (permintaan Rama); `site` default di astro.config. DNS di registrar: A `@` 216.198.79.1, CNAME `www` cname.vercel-dns.com. `atapura.vercel.app` tetap jalan |
| Database | tidak ada (fase 1) | |

## Alur standar
Push ke `main` → GitHub Actions `.github/workflows/deploy.yml` → `vercel pull` → `rm -rf .git` → `vercel deploy --prod` (build di Vercel). Jangan sambungkan Git bawaan Vercel, jangan `vercel --prod` manual setelah push.

Secret repo `VERCEL_TOKEN` = token akun atapurakaryalestari (sumbernya `.env.local` proyek ini). Proyek ini otonom: tidak memakai token/akun proyek lain.

## Cek setelah deploy
- Tab Actions hijau (`gh run watch`).
- `https://atapura.com` (atau `atapura.vercel.app` bila DNS belum aktif) 200, `/robots.txt`, `/llms.txt`, `/sitemap-index.xml` terbuka.

## Troubleshooting
| Gejala | Penyebab | Solusi |
|---|---|---|
| "commit email could not be matched" | metadata git ikut ke Vercel | pastikan langkah `rm -rf .git` jalan |
| Build Vercel gagal "Cannot find module ../data/..." | `.vercelignore` membuang `src/data` | pola di `.vercelignore` wajib diawali `/` (root saja) |
| Canonical/sitemap salah alamat | `SITE_URL` | set env `SITE_URL` di Vercel saat ganti domain |
