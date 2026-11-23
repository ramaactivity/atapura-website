# Deploy & akun

| Layanan | Akun | Catatan |
|---|---|---|
| GitHub | ramaactivity | repo privat `ramaactivity/atapura-website`, commit email rama.activity98@gmail.com |
| Vercel | atapurakaryalestari@gmail.com (team `atapura`, `team_E2sc4rJv4neVvRPpJubDdAqr`) | proyek `atapura`, `prj_R9OCxzPUAjRnUTZR4Uavihp5QK36`, Hobby, Vercel Authentication mati, alias `atapura.vercel.app` |
| Domain | `atapura.com` (+ `www` → 308 ke apex) | registrar **Hostinger** (hPanel, dibeli Rama 21 Nov, live 23 Nov 2026; nameserver bawaan dns-parking.com). DNS: A `@` 216.198.79.1, CNAME `www` → atapura.com. Cert HTTPS Vercel autoRenew. `site` default di astro.config. `atapura.vercel.app` tetap jalan |
| Database | tidak ada (fase 1) | |

## Sinkron dari Atapura Ops
Workflow `.github/workflows/sinkron-ops.yml` (tiap jam menit ke-17, tombol manual, `repository_dispatch` tipe `sinkron-ops`)
menarik `GET <OPS_URL>/api/publik/katalog` → `src/data/ops.json`. Secret repo `SINKRON_SECRET` (= env Vercel Ops dengan nama
sama) dan variabel repo `OPS_URL` (`https://atapura-ops.vercel.app`), dipasang 20 Nov 2026. Bila berubah, workflow ini
memanggil `deploy.yml` (`workflow_call`) sendiri karena push oleh GITHUB_TOKEN tidak memicu deploy.

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
