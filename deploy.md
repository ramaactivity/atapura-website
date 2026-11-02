# Deploy & akun

| Layanan | Akun | Catatan |
|---|---|---|
| GitHub | ramaactivity | repo privat `ramaactivity/atapura-website`, commit email rama.activity98@gmail.com |
| Vercel | atapurakaryalestari@gmail.com (team `atapura`, `team_E2sc4rJv4neVvRPpJubDdAqr`) | proyek `atapura`, `prj_R9OCxzPUAjRnUTZR4Uavihp5QK36`, Hobby, Vercel Authentication mati, alias `atapura.vercel.app` |
| Domain | `atapura.vercel.app` | domain sendiri belum dibeli (DECISIONS 003) |
| Database | tidak ada (fase 1) | |

## Alur standar
Push ke `main` → GitHub Actions `.github/workflows/deploy.yml` → `vercel pull` → `rm -rf .git` → `vercel deploy --prod` (build di Vercel). Jangan sambungkan Git bawaan Vercel, jangan `vercel --prod` manual setelah push.

Secret repo `VERCEL_TOKEN` = token akun atapurakaryalestari (sumbernya `.env.local` proyek ini). Proyek ini otonom: tidak memakai token/akun proyek lain.

## Cek setelah deploy
- Tab Actions hijau (`gh run watch`).
- `https://atapura.vercel.app` 200, `/robots.txt`, `/llms.txt`, `/sitemap-index.xml` terbuka.

## Troubleshooting
| Gejala | Penyebab | Solusi |
|---|---|---|
| "commit email could not be matched" | metadata git ikut ke Vercel | pastikan langkah `rm -rf .git` jalan |
| Build Vercel gagal "Cannot find module ../data/..." | `.vercelignore` membuang `src/data` | pola di `.vercelignore` wajib diawali `/` (root saja) |
| Canonical/sitemap salah alamat | `SITE_URL` | set env `SITE_URL` di Vercel saat ganti domain |
