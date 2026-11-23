@AGENTS.md

# Atapura Website

Website Atapura, spesialis atap bitumen (Maxxi, CTI, Javabitumen) untuk Jabodetabek di bawah PT Atapura Karya Lestari. Tujuan utama: menang di Google dan sering direkomendasikan AI, lalu mengubah pengunjung jadi chat WhatsApp lewat kalkulator estimasi "Hitung AKAL". Harus super ringan di HP, premium secara visual, dan bebas AI slop.

Jenis: Situs sederhana (HTML).

## Cara menjalankan
- Jalankan: buka index.html di browser. Deploy: Vercel / GitHub Pages.

## Aturan proyek
- **Wajib dibaca dulu: docs/CARA-KERJA-RAMA.md** (cara Rama vibecoding: gaya bicara, otonomi, git, deploy, database, desain). Rama tidak perlu mem-brief ulang.
- Ngobrol ke Rama pakai bahasa Indonesia santai, tanpa jargon (Rama non-teknis). Kode, commit, komentar, dan dokumen teknis ditulis normal.
- Sebelum mulai kerja: baca HANDOVER.md dan docs/DECISIONS.md.
- Keputusan penting dicatat bernomor di docs/DECISIONS.md beserta alasannya.
- Akun deploy, database, dan layanan dicatat di deploy.md; cocokkan dulu sebelum push/deploy.
- Tampilan mengikuti DESIGN.md.
- .env.local tidak pernah di-commit; daftar variabelnya di .env.example.
- **Ops ↔ Website satu kesatuan** (Rama, 20 Nov 2026): repo `~/Proyek/Atapura Ops` dan `~/Proyek/Atapura Website` wajib saling sinkron. Dari sesi di repo mana pun **boleh** membaca & mengedit repo satunya, membaca `.env.local`-nya, commit, push, dan deploy (ikuti CLAUDE.md/deploy.md repo tujuan: cek akun, build dari worktree, stage file sendiri, tanpa force-push; cek `git status`/`git log` repo tujuan dulu). Data yang dipakai keduanya (harga, katalog, resep, aksesoris, profil bisnis, lead) jangan diubah di satu sisi saja — mekanisme sinkron di Ops `docs/DECISIONS.md` 123.

- **Akun uji Ops** (Rama, 23 Nov 2026): `claude.uji` (pemilik) di https://team.atapura.com boleh dipakai sesi Website maupun Ops untuk uji & audit halaman berlogin lewat browser otomatis. Sandi di `~/Proyek/Atapura Ops/.env.local` (`OPS_UJI_USERNAME`, `OPS_UJI_SANDI`), jangan disalin ke repo/chat. Aksi yang mengubah data hanya bila perlu diuji lalu langsung dibatalkan; jangan memicu kiriman ke klien atau transaksi uang.

## Bahan awal
File & folder bahan dari Rama didaftar di docs/BAHAN.md (dokumen di docs/, gambar di assets/, data di data/).
