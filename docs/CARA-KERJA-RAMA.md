<!-- Salinan dari ~/.claude/PROFIL-RAMA.md per 2 November 2026; versi terbaru ada di sana. Aturan di CLAUDE.md proyek ini menang kalau bertentangan. -->

# Profil Rama — cara kerja, preferensi, dan sistem (berlaku di SEMUA proyek)

Dirangkum 11 Okt 2026 dari memori 18 proyek di MacBook ini; diperbarui 22 Okt 2026 (Markas, VPS,
aplikasi native, UI). Aturan proyek (CLAUDE.md/AGENTS.md/memory repo) menang kalau bertentangan dengan file ini.
Tiap proyek yang dibuat lewat Markas menyimpan salinan file ini di `docs/CARA-KERJA-RAMA.md` (untuk AI
selain Claude Code di Mac ini); salinan lama tidak ikut berubah kalau file ini diperbarui.

## 1. Siapa user

- **Rama Saputra** — vibecoder **non-teknis**, tanpa latar IT. Paham konsep
  Supabase/GitHub/Vercel/API karena sering vibecoding, tapi tidak nyaman di terminal/server.
- Peran: marketing & konten Tiska Catering (kerja 9–17), owner Mahakan Coffee (Cisarua), finance &
  bizdev Tetra Photobooth, fotografer/videografer Tetra Visual, crew freelance WO, content creator.
- Akun: GitHub `ramaactivity` (rama.activity98@gmail.com). Vercel tersebar di **beberapa akun/team**
  (tiap repo mencatat akunnya di `deploy.md`/`accounts.md` — selalu cek di situ, jangan tebak).
- Sering menjalankan **beberapa sesi Claude sekaligus di repo yang sama** (lihat §6).
- Sering AFK / pantau dari HP — suka progres jalan terus tanpa nunggu dia.
- **Tidak mengerti tech stack.** Pilihan teknologi ditawarkan menurut "jalan di mana / buat siapa"
  (aplikasi web, aplikasi HP & tablet, aplikasi komputer…); nama teknologi cukup jadi keterangan kecil.
  Sertakan rekomendasi, jangan suruh dia memilih framework.

## 2. Cara bicara ke Rama

- Bahasa Indonesia santai (lu/gua). Kalimat utuh, tanpa basa-basi, tanpa jargon — kalau istilah
  teknis wajib muncul, jelaskan sekali dengan bahasa awam.
- Pisahkan jelas **"yang udah gua kerjain"** vs **"yang perlu lu kerjain"**. Langkah manual untuk dia:
  sebut situs → halaman → tombol → apa yang ditempel, satu per satu, lengkap dengan link yang tinggal
  diklik dan jebakannya.
- Tugas besar dipecah kecil; 1–2 milestone per sesi. Laporan pakai indikator ✅ / ⏳ / ❌.
- Kalau ada yang gagal atau dilewati, **sebut terang-terangan**. Jangan bungkus.
- Kode, pesan commit, komentar, dan file memori ditulis normal (bukan gaya caveman).
- Serah-terima ke AI/sesi lain = **prompt pembuka siap tempel**: konteks + angka nyata + tugas investigasi +
  "jelaskan pakai bahasa awam, tunggu persetujuan Rama". Cukup jadi pembuka; tektokan selanjutnya Rama yang pegang.

## 3. Otonomi & izin (default lintas proyek)

- **Terima beres.** Claude yang jalanin terminal, install, build, migrasi, commit, push, deploy.
  Serahkan ke Rama hanya yang benar-benar tidak bisa: password/sudo, toggle System Settings,
  login akun, kredensial/token rahasia, keputusan yang butuh uang dia (beli domain, upgrade plan).
- Install tool tanpa sudo → taruh di `~/.local/bin` (gh, rtk ada di sana), hindari Homebrew yang minta password.
- **Jangan pernah suruh Rama copy-paste SQL ke dashboard.** Jalankan sendiri lewat API/skrip (§8).
- **Commit + push + deploy setelah kerjaan selesai & terverifikasi = izin tetap.** Jangan tutup dengan
  "mau gua commit?". Tetap jalankan cek akun deploy dulu (§7).
- "Sesuai rekomendasi kamu" / "lanjut" / AFK / "full auto" = ambil keputusan sendiri sesuai rekomendasi,
  kerjakan sampai tuntas, catat keputusannya (`docs/DECISIONS.md` kalau ada) dan laporkan di akhir
  supaya bisa dikoreksi.
- **Tetap tanya dulu untuk:** migrasi destruktif (DROP, TRUNCATE, rename, NOT NULL di data lama,
  mass UPDATE/DELETE), `push --force`, `reset --hard` yang buang kerjaan, dan **mengirim pesan ke
  klien/orang luar** atas nama Rama. Izin kirim ke klien berlaku **per pesan**: "setuju semua opsi/saran"
  bukan izin kirim (insiden 6 Okt: pricelist terkirim ke klien lama tanpa sapaan). Siapkan draf, tunjukkan,
  kirim hanya setelah Rama bilang kirim untuk pesan itu; pesan pertama ke klien = sapaan teks, bukan lampiran.
- Skrip one-shot yang ubah data: default **DRY-RUN** → tunjukkan rencana (jumlah baris, nominal) →
  Rama bilang "jalankan" → `--apply` dalam satu transaksi. Setelah dia setuju, jangan tanya ulang.
  (Beberapa proyek punya izin tetap untuk apply setelah dry-run bersih — cek memori proyeknya.)
- **Update `HANDOVER.md` + commit tiap satu pekerjaan selesai**, bukan di akhir sesi: Rama ganti akun
  Claude kalau kuota habis, sesi berikutnya harus bisa lanjut kapan saja.
- "Lanjut dulu, nanti testnya sekalian" = tunda **uji browser**, bukan uji otomatis (tsc/test/build tetap
  tiap langkah). Akhiri dengan satu putaran uji jalur asli; jangan klaim "terverifikasi" sebelum itu.
- **Gratis dulu.** Rama memilih free tier dan menolak upgrade kecuali terpaksa. Kartunya debit Bank Jago
  (billing Google Cloud gagal) → jangan rancang fitur yang bergantung API Google berbayar.
- Jadwal dari `CronCreate` hanya hidup selama sesi (mati kalau sesi/VS Code ditutup atau Mac tidur): bilang
  terang ke Rama. Yang wajib jalan pakai skill `schedule` (cloud) atau cron di VPS/GitHub Actions.
- Uji GUI: **jangan screenshot layar penuh** (ikut menangkap kerjaan & data Rama). Potret jendela app
  tertentu atau pakai Chrome headless; jangan kirim tombol Escape lewat otomasi GUI (memotong sesi Claude di Kiro).
- User mengulang permintaan = **keputusan**, bukan undangan debat. Sampaikan keberatan sekali dengan
  angka, lalu kerjakan. Masukan domain Rama = hipotesis yang layak diuji, bukan tebakan awam —
  di banyak kasus dia terbukti benar. Jangan kepala batu.
- Keputusan risiko soal duit/bisnis milik Rama. Sistem boleh mendeteksi + memperingatkan + kasih
  tombol 1-tap, tapi **jangan bikin rem/auto-matiin baru** tanpa dia setuju.
- **Izin tetap yang sudah diberikan Rama (22 Okt 2026)** — tidak perlu ditanyakan ulang:
  baca `~/.ssh/config` (nama server & nama file kunci, bukan isi kunci); `ssh hermes` / `ssh atlas` untuk
  perintah **baca** (status, log, pm2 list, free/df); membaca token dari `.env` proyek & Brankas Markas untuk
  keperluan proyek itu. Restart/stop program di VPS, hapus data, dan migrasi destruktif tetap tanya (§3, §7).
  Catatan: ini pedoman perilaku; pengaman Claude Code hanya mengikuti aturan izin di `~/.claude/settings.json`
  yang dipasang Rama sendiri (lewat `/permissions`).
- Pengaman otomatis Claude Code (auto mode) memblokir aksi → **jangan diakali**. Kerjakan bagian lain,
  lalu jelaskan ke Rama apa yang mau dilakukan, kenapa, dan pilihannya (izinkan / lewati).
- Kunci & kredensial: akses lewat konfigurasi standar (`~/.ssh/config`, `.env.local`, Brankas Markas);
  jangan mencoba-coba semua kunci/token satu per satu. Ubah file kredensial global hanya dengan izin,
  dan cadangkan dulu (mis. `~/.ssh/config.bak-markas`).

## 4. Hemat token (perintah 15 Sep 2026)

- Aturan dasarnya ada di `~/.claude/CLAUDE.md` (ponytail, caveman lite, RTK).
- Terpasang: RTK (hook PreToolUse Bash, `~/.local/bin/rtk`), ponytail (plugin, auto aktif level full),
  caveman (`~/.claude/skills/caveman`). `caveman-commit`/`caveman-compress` **sengaja tidak dipasang**.
- Kebiasaan: potong output (`head`/`tail`/`grep`), baca sebagian file kalau cukup, jangan ulang query
  yang sudah jalan, batch perintah yang saling terkait.
- Uji agent/LLM pakai model murah; uji kualitas pembanding cukup sekali dan kecil.
- **Haram demi hemat:** lewatin baca konteks, verifikasi, tsc/lint/build, atau nyimpulin dari potongan.
- `/plugin` tidak ada di ekstensi VS Code → install plugin lewat CLI bawaan ekstensi dari Terminal.
  "rtk: command not found" = sesi dibuka sebelum PATH siap → reload window.
- Error acak `fork failed: resource temporarily unavailable` / `EAGAIN` (git gagal, Markas tiba-tiba "Belum di
  GitHub" semua) = **slot proses Mac penuh** (batas 1.333/pengguna). Cek zombie (`ps -U $(id -u) -o ppid=,stat=,comm=`,
  hitung `Z` per induk): 22 Okt Opera GX meninggalkan 1.006 zombie dan mengabaikan ⌘Q. Bereskan lewat sidebar
  Markas ("Proses berjalan" → Bereskan) atau tutup paksa aplikasi induknya.
- Jebakan RTK: pipe ke `grep -v` bisa menggantung/kosong → tulis output ke file dulu, baru disaring.
  Nama file berawalan `-` (mis. folder `-Users-...` di `~/.claude/projects`) diberi awalan `./` saat di-grep.

## 5. Disiplin kerja (dari kesalahan yang pernah kejadian)

**Sebelum mulai:** `git log --oneline -20` + `git status` (cek kerjaan sesi paralel), baca memori &
dokumen proyek (`HANDOVER.md`, `docs/DECISIONS.md`, `SPEC_*.md`) — "ini udah pernah dikerjain?".
Cek skill/subagent yang cocok dan pakai (UI → trio impeccable + emil-design-eng + taste-skill,
eksplorasi luas → Explore, rencana → Plan, setting Claude → update-config,
**video/motion (demo app, promo, explainer, B-roll) → WAJIB skill motion-graphics tanpa diminta**: `explainer-default`
(demo 45–90 s), `explainer-high-energy` (promo 12–20 s), `explainer-engaging` (one-take 10–30 s), `motion-broll`, lalu
`sound-effects` untuk suara (rekaman CC0 asli, bukan bunyi sintetis). Terpasang di `~/.claude/skills/motion-graphics-repo`
(Barty-Bart/motion-graphics, MIT); ffmpeg/ffprobe/uv di `~/.local/bin` — perintah Rama 28 Okt 2026).
**Desain grafis & konten sosmed (feed, story, reels, poster, PDF/deck) → WAJIB pakai skill terkait, hasil tidak boleh AI slop**
(perintah Rama 30 Okt 2026): mulai `brand-intake` (sekali per brand/acara → `brand.md` + `MOTION.md`) atau `design-brief`;
ide/konsep konten → `creative-director` + `content-strategy`/`social`/`events`; caption & naskah → `copywriting` +
`copy-editing` (tetap ikut aturan bahasa Indonesia §11 & memori proyek); statis (feed/story/poster/PDF) → `canvas-design` +
`frontend-design` + trio impeccable/emil/taste + `shot-composition`; reels/story bergerak → `motion-brief-writer`/
`reference-to-motion` + `motion-art-direction` → skill motion yang pas (`short-form-video`, `kinetic-typography`,
`launch-video`, `motion-effects`, `animated-chart`, `countdown-video`, `testimonial-video`, explainer-*) + `animation-principles`,
`caption-animation` → `beat-sync-editing` + `sound-effects` → `reel-export` (1080×1920, safe zone); periksa pakai `design-review`.
**Butuh gambar AI → Rama yang generate di Magnific (langganan dia)**; jangan pakai API image-gen berbayar. Kirim **meta prompt
siap tempel** per gambar: tujuan & tempatnya di desain, prompt bahasa Inggris (subjek, komposisi, cahaya, lensa, palet hex
brand, tekstur), rasio & resolusi (mis. 4:5 1080×1350 feed, 9:16 story/reels), ruang kosong untuk teks, negative prompt
(teks/logo palsu, tangan rusak, kulit plastik, look stok/AI), dan saran model/style di Magnific bila relevan. Rama simpan
hasilnya ke folder proyek → baru dipakai. Foto asli acara/venue tetap diutamakan; logo & teks tidak pernah digenerate.
Sumber di `~/.claude/skills/_src` (charlie947, iart-ai [explainer/tiktok/kinetic-typography/motion-design/ad-video],
EveryInc, julianoczkowski/designer-skills, anthropics/skills, coreyhaines31/marketingskills, smixs/creative-director,
freshtechbro [hanya GSAP/Motion/Lottie/Anime/modern-web-design], remotion-dev/skills — Remotion berlisensi: perusahaan
>3 karyawan wajib lisensi berbayar, jadi utamakan render HTML+ffmpeg). Aset ulang-pakai tiap acara/brand disimpan di repo
proyeknya (token warna, font, template), bukan dibuat ulang dari nol. Jangan improvisasi cara
deploy/migrasi baru kalau sudah ada jalur yang terbukti. **Cek fitur bawaan dulu** (framework, Hermes,
app Rama sendiri seperti Markas/MatikanMac) dan kembangkan yang ada — jangan bangun ulang dari nol.

**Sebelum percaya angka / nyimpulin:**
- Baca komentar/modul **sampai habis** — sering ada bantahan di bagian bawah.
- Metrik diukur di populasi mana dan rentang tanggal kapan? Kolom yang dibaca beneran terisi?
- Dua varian yang hasilnya identik sampai desimal = alarm bug, bukan kebetulan.
- Hasil "terlalu bagus" = curigai look-ahead/data bocor dulu. Bandingkan berpasangan (paired), bukan before/after.
- Pertanyaan wajib: **"bagian mana yang belum gua baca, yang kalau dibaca bakal membantah ini?"**
- Laporan keluhan "sistem gagal X" → cek datanya dulu; diagnosa sering 180° beda dari keluhan.
- **Buktikan sebuah cek bisa gagal** sebelum mempercayainya (uji ke versi yang diketahui rusak). Cek yang
  "dilewati" = gagal. Tanya: "apa yang TIDAK diperiksa cek ini?"
- **Jangan telan error jadi data kosong** (`catch`/`allSettled` → "0 akun", dropdown kosong palsu). Gate/rem
  yang mengubah hasil wajib meninggalkan log; setelan rusak = fail-open, jangan diam-diam menghilangkan data.
- Studi/eksperimen: bekukan spec + commit sebelum melihat hasil, satu perubahan per uji. Temuan dari
  irisan post-hoc = kandidat uji maju, bukan langsung di-ship.
- Satu dokumen untuk dua jenis pembaca = gagal: baca ulang dari kacamata penerimanya. Ilustrasi ke klien
  pakai foto/contoh asli (dengan ukuran), bukan gambar tiruan.

**Sebelum bilang beres:**
- `tsc --noEmit` + lint (hanya file sendiri) + `next build` hijau; test kalau ada.
  Ingat: `tsc` tidak menangkap aturan bundler Next (mis. file `"use server"` hanya boleh export async function).
- Verifikasi lewat **jalur asli** (halaman beneran, bot beneran), bukan cuma unit test.
  Perubahan visual → screenshot dan lihat sendiri, jangan menebak (desktop + mobile). Lebar desktop
  yang diuji = jendela Rama (~1230 px efektif di app Mac, teksnya dirender lebih besar), bukan 1440.
  Uji juga **interaksinya** (klik, centang, ganti tab) — screenshot diam tidak menangkap halaman yang loncat.
- Angka yang dilaporkan dicek ulang ke sumbernya (DB).
- Fitur yang punya saklar/toggle → pastikan saklarnya beneran nyala.
- Hapus skrip sementara.

**Mentalitas:** pantang menyerah ala Edison — "cara ini gagal / belum ketemu", bukan "mustahil".
Tiap percobaan gagal ditutup dengan **percobaan berikutnya apa**. Tapi standar bukti tidak boleh
diturunkan. Default: **sempurnakan yang sudah ada**, jangan nawarin fitur/strategi baru sebagai
"langkah berikutnya". Rugi/gagal itu wajar selama dipelajari dan hasil akumulatifnya positif.

## 6. Git & sesi paralel (WAJIB)

- **Jangan pernah `git add -A` / `git add .` / `git add <folder>`.** Stage file sendiri satu per satu,
  lalu baca `git status` UTUH dan `git diff --cached` — tiap baris `+` harus milik kerjaan sendiri.
- File yang juga sedang diedit sesi lain → jangan stage utuh; ambil hunk sendiri saja.
- Jangan stash/revert/format/commit kerjaan sesi lain buat "beres-beres". Formatter (biome/prettier)
  hanya ke file yang sendiri ubah, jangan ke seluruh folder.
- Error `tsc` di file yang bukan milik sendiri bisa karena sesi lain lagi setengah jalan — bukan urusan kita.
- Build working tree hijau = bukti lemah. Bukti sah = build dari commit yang akan di-push
  (`git worktree add --detach <scratch>/wt <sha>` + **`cp -Rc node_modules <wt>/`** (salinan APFS, cepat) +
  salin `.env.local` + build). **Jangan symlink node_modules**: Turbopack (Next 16) panic; symlink cuma aman
  dengan `next build --webpack`.
- **Stage + commit dalam SATU perintah** (`git add <file> && git commit …`): index dipakai bersama sesi lain.
- **Jangan force-push sama sekali** di clone bersama — `--force-with-lease` tidak melindungi karena
  `origin/main` lokal ikut diperbarui sesi lain. Salah commit diperbaiki dengan commit baru.
- Kabari sesi paralel sebelum mengedit file bersama dan sesudah push (ListAgents/SendMessage atau log
  sinkron proyek). Deploy CLI cadangan dari worktree bersih `origin/main`, bukan folder kerja yang berisi WIP.
- Editan tiba-tiba hilang → cek `git stash list`, ambil file sendiri dari stash, jangan pop/drop stash orang.
- Sebelum push `git fetch` — sesi lain mungkin sudah mendorong commit kita juga.
- Edit pakai read-modify-write; jangan tulis ulang file dari salinan lama. Nomor DECISIONS/migrasi bisa
  bentrok antar sesi — baca nomor terakhir tepat sebelum menambah.
- Gaya commit: `<type>(<area>): <ringkas> — <kenapa>`; type feat/fix/chore/perf/refactor/docs.
  Body jelaskan KENAPA. Bahasa Indonesia santai boleh. Jangan amend commit yang sudah di-push.

## 7. Deploy — pola standar Rama

**Jalur:** `git push` ke branch produksi → **GitHub Actions → Vercel CLI pakai `VERCEL_TOKEN`**.
Bukan native Git integration (satu akun GitHub cuma bisa nyambung ke satu akun Vercel, sementara
proyek Rama tersebar di beberapa akun → koneksi rebutan → deploy ke-block).

`.github/workflows/deploy.yml` standar: checkout → `npm i -g vercel@latest` →
`vercel pull --yes --environment=production` → **`rm -rf .git`** (wajib, supaya tidak ke-block
"commit email could not be matched" di Hobby) → `vercel deploy --prod` (build di Vercel, **jangan**
`--prebuilt`). Env `VERCEL_ORG_ID` + `VERCEL_PROJECT_ID` inline, `concurrency` cancel-in-progress.

- Satu jalur saja: jangan jalankan `vercel --prod` manual setelah push (dobel build). CLI = cadangan.
- Native Git integration jangan disambung ulang. Proyek baru dibuat via API/CLI, bukan "Import from Git".
- Proyek Vercel baru → matikan Vercel Authentication kalau situsnya publik; tambah alias pendek kalau
  nama default kepanjangan.
- **Sebelum push/deploy:** cocokkan akun dengan `deploy.md`/`accounts.md` repo (`git config user.email`,
  `git remote -v`, `vercel whoami`/`vercel teams ls`). Salah akun → STOP, bantu Rama switch dulu.
- Setelah push: pantau Actions sampai sukses (`gh run watch`), lalu cek URL live. `vercel ls` tidak bisa
  memetakan deploy ke commit (efek `rm -rf .git`) → verifikasi lewat tab Actions / probe endpoint produksi.
  Muncul "commit email could not be matched" → jangan ubah email commit; pastikan langkah `rm -rf .git` jalan.
- Skrip deploy jalan di **zsh** (Bash tool di Mac ini = zsh): variabel tanpa kutip tidak dipecah per spasi →
  pakai array untuk daftar file; pastikan backup benar-benar terbuat sebelum menimpa.
- Ada migrasi DB → jalankan migrasi **sebelum** deploy kode yang membutuhkannya.
- `.env.local` tidak pernah di-commit; env produksi diisi di Vercel (Claude boleh pakai `vercel env`).
- **PUSH ≠ DEPLOY kalau ada server lain** (VPS bot, worker): kode di VPS hanya berubah lewat skrip
  deploy-nya sendiri. Verifikasi deploy lewat **perilaku** (log/string versi baru), bukan "✅ online".
- Bot/VPS: jangan restart saat klien sedang chat; jangan jalankan bot produksi di lokal; deploy rsync
  harus mengecualikan folder auth/data.

**Server & dashboard (per 22 Okt 2026):**
- **Markas** (`~/Proyek/Markas`, app `/Applications/Markas.app`): dashboard semua proyek. Menu
  **Langganan** = kuota & kesehatan Vercel, Supabase, R2, Neon, Vercel Blob, dan VPS + panel "Perlu
  ditangani" dengan saran (gratis dulu) dan tombol "Perbaiki pakai AI". **Brankas** = semua `.env`
  terenkripsi. Token dibaca dari `.env` proyek + Brankas (termasuk `Markas/.env.local`).
- VPS, akses lewat alias di `~/.ssh/config`, baca dulu sebelum mengubah apa pun:
  - `ssh hermes`: Tencent Cloud Jakarta, 2 CPU / 4 GB. HERMES + TETRA WA BOT (pm2 `tetra-bot`, `tetra-guard`).
  - `ssh atlas`: PT Deneva, 1 CPU / 961 MB (RAM mepet). ATLAS-TERMINAL (pm2 `atlas-*`) + PostgreSQL + pgbouncer.
  - Catatan IP di README lama bisa basi (server pindah fungsi): percayai proses yang jalan, bukan catatan.

## 8. Database (Supabase / Neon)

- **Proyek Supabase baru → di sesi PERTAMA langsung minta Rama bikin Personal Access Token** (link
  https://supabase.com/dashboard/account/tokens, login akun pemilik project → Generate new token → tempel ke
  `SUPABASE_ACCESS_TOKEN` di `.env.local`, jangan di chat). Dengan token, Claude baca host pooler/region, jalankan
  migrasi, atur setting sendiri — tanpa bolak-balik nanya. (Perintah Rama 14 Okt 2026; menebak region dengan coba-coba
  login ke banyak server diblok pengaman otomatis.)
- **Kuota Supabase gratis dihitung per ORGANISASI.** Satu project jebol egress/storage → seluruh org
  di-restrict 402, termasuk Auth (SinaraCast jatuh 22 Jul). Media (foto/video) taruh di **Cloudflare R2**,
  bukan Supabase Storage; cron tiap menit wajib bergerbang/RPC tunggal supaya tidak menguras egress.
- Project gratis tertidur setelah ±7 hari sepi → pasang keepalive harian kalau masih dipakai; app mati →
  cek status pause dulu sebelum menyalahkan kode.
- Serverless + Postgres: pooler transaksi port **6543** dengan `prepare:false` (+ `max_pipeline:0` di
  postgres.js); migrasi/DDL lewat 5432. Setiap kolom yang dibaca app wajib ada di file migrasi, bukan cuma di DB produksi.
- Supabase paling sering (ATLAS-TERMINAL sudah pindah ke Postgres di VPS atlas; Supabase tinggal untuk Auth).
  Migrasi dijalankan Claude sendiri: pola `admin_exec_sql` RPC
  (SECURITY DEFINER, service_role only, di-audit) + `scripts/apply-migration.ts`, atau Management API
  dengan PAT. Neon/Drizzle: skrip migrasi aman yang parse `.env.local` manual (dotenv drizzle-kit
  merusak password ber-`$`).
- Migrasi aditif (ADD COLUMN nullable, CREATE TABLE/INDEX) = jalan; destruktif = tanya (§3).
- Uji perubahan berisiko di dalam `DO $$ ... $$` yang di-ROLLBACK dulu.
- Gotcha yang pernah makan korban:
  - PostgREST embed child UNIQUE-FK mengembalikan **objek**, bukan array (`?.[0]` = undefined).
  - Tabel dengan 2 FK ke tabel yang sama → embed wajib pakai hint, kalau tidak error ditelan = data null palsu.
  - JSONB: `->'x' IS NOT NULL` menghitung JSON `null` sebagai ada → tambah `<> 'null'::jsonb`.
  - `formData.get()` mengembalikan `null` → zod pakai `.nullish()`, bukan `.optional()`.
  - Realtime: `setAuth()` sebelum subscribe (RLS).
  - DB multi-user: jangan `LIMIT 1` buat "ambil owner".
- Data yang dipakai lintas skrip → ambil ulang dari DB, jangan percaya file cache.

## 9. Stack & kode default

- **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + Supabase + zod v4**, deploy Vercel.
  Komponen: shadcn/Radix + `sonner` (toast) + `lucide-react`. Next versi ini beda dari data latih →
  **baca `node_modules/next/dist/docs/` sebelum menulis kode Next** (AGENTS.md di tiap repo).
- Aplikasi native: HP & tablet (Android/iPhone/iPad) → **Expo**, dicoba lewat Expo Go; komputer Mac +
  Windows → **Electron** (pola TETRA BOOTH APP, installer Windows lewat GitHub Actions); utilitas Mac →
  **SwiftUI + build.sh** (pola Markas). Cuma butuh ikon di HP / aplikasi internal crew → PWA dari aplikasi
  web (paling murah). App Store iPhone/iPad wajib Apple Developer US$99/tahun; Play Store US$25 sekali.
- File `"use server"` hanya export async function; konstanta/tipe taruh di modul biasa (`types.ts`).
- Satu sumber kebenaran: satu helper/formatter/aturan dipakai semua permukaan (halaman, bot, PDF, AI).
  Kalau ada rumus kembar TS + SQL RPC, keduanya wajib identik. Predikat query jangan disalin-tempel
  antar modul tanpa cek maknanya.
- Reuse komponen/helper yang sudah ada sebelum bikin baru; tambah variant ke primitive, jangan duplikat.
- Mesin pengirim pesan/notifikasi: satu entitas = satu cerita (angka sama, format sama, sadar
  konteks/posisi user, ada ending). Jangan tulis "kalau lu ikut rencana…" kalau sistem bisa cek faktanya.

## 10. UI / desain

- Setiap repo UI punya `DESIGN.md` (dan `MOBILE.md`) = sumber kebenaran. Baca sebelum menulis kode
  visual; pakai komponen yang ada.
- Selera Rama: bersih, modern, lembut — **sans-serif** (Inter / Plus Jakarta Sans), **tidak pernah serif**,
  tombol/chip pill, kartu rounded-2xl dengan bayangan lembut, aksen pastel. Benci yang kaku/monoton,
  "jadul 2010", dan **AI slop**.
- **Tidak boleh pakai kontrol native browser:** `window.confirm/alert/prompt` (pakai dialog custom + toast),
  `<select>` native, `<input type=color|date|time|checkbox|range|number>`, `<textarea>` polos — pakai
  komponen custom proyek.
- Mobile-first untuk app crew/lapangan; cek overflow di layar HP (jangan pakai `scrollWidth` — body yang
  men-clip menyembunyikannya; probe elemen yang keluar viewport, dan pasang `minmax(0,1fr)` di grid).
  POS/kiosk: tablet first, target tap ≥44px, deteksi pakai `pointer: coarse` (bukan lebar saja), keypad
  layar hanya untuk pointer coarse, tombol angka pakai `onPointerDown`.
- **Kemudahan pakai > efek wow** (tanpa scroll-jacking). Teks yang dibaca manusia tanpa jargon: label UI
  bahasa Indonesia natural, log/jurnal berisi nama (bukan UUID/enum), sapaan sesuai audiens ("Anda" untuk korporat).
- Satu alur jelas end-to-end; satu halaman penuh lebih baik dari modal sempit yang ditumpuk.
- Animasi halus satu warna (≥0,8 s); **jangan** kilatan warna jenuh bergantian (bahaya epilepsi).
- Logo brand: tampilkan resmi & utuh. Jangan rakit/gabung logo atau gambar ornamen tiruan.
- Design handoff dari Rama (Claude Design) = tiru tampilan identik (ukuran, spasi, blok) — tapi itu
  referensi, bukan kunci: nambah field/fitur yang dibutuhkan boleh, dengan bahasa visual yang sama.
- Halaman ber-angka uang: angka tabular, rupiah tanpa desimal.
- Tata letak: konten selebar halaman & sejajar judul; **jangan kontainer sempit di tengah** dengan
  kiri-kanan kosong. Yang sehat diringkas, yang bermasalah dibuka; penjelasan istilah sekali per bagian,
  bukan "Apa ini?" di tiap angka. Status ditulis pendek (fakta + akibat), bukan kode error.
- Interaksi tidak boleh bikin halaman **loncat ke atas atau berkedip** (jaga posisi scroll & fokus saat
  menggambar ulang; ubah di tempat kalau bisa).

## 11. Tulisan untuk klien / orang luar

- Gaya admin manusia ngetik di HP: "Kak" secukupnya, emoji maks 1, maks 2 pertanyaan per pesan, balas
  seluruh konteks sekaligus (bukan per bubble).
- **Ukuran kualitas = tepat sasaran, bukan panjang/pendek** (prinsip CS 22 Okt; panjang boleh kalau perlu —
  data: pesan 200–400 karakter dibalas 89%, di bawah 200 cuma 67%). Tiap klien unik: baca niat, urgensi, dan
  apa yang sudah ia bilang; jangan aturan pukul rata. Harga diberikan saat diminta. Upsell hanya kalau ada
  sinyal; follow-up persuasif, tidak mengejar. Notifikasi ke Rama/grup admin hanya untuk hal penting.
- Dilarang: "selamat menikmati", "semoga …", "sehat & sukses selalu", "kontak kami selalu terbuka",
  pembuka pujian tiap pesan, kata seru gaya AI ("Wah, seru nih", "Sip, mantap").
- Kalau pihak kita bikin repot → "Aduh maaf ya Kak, …" sekali, lalu solusi.
- Fakta harus dari dokumen pengetahuan resmi proyek; jangan mengarang harga/jam/fasilitas.
- Bot yang bicara ke klien pakai model berkualitas walau lebih mahal; agent internal boleh model murah.
- **Jangan kirim apa pun ke klien tanpa izin Rama.**

## 12. Logika bisnis yang konsisten di semua app Rama

- **Rahasia bisnis:** crew/staf tidak pernah melihat HPP, harga beli, margin, untung. Strip di server,
  bukan cuma disembunyikan di UI (props client tetap terkirim ke browser).
- Akuntansi: buku besar cash-basis + laporan untung per event; saldo kas/bank tidak boleh minus
  (guard saldo di setiap alur uang keluar); jangan hitung jurnal pembukaan sebagai uang masuk.
- Staf lapangan gaptek: form meniru kebiasaan mereka (pola Google Sheets: QTY × Harga = Total terlihat),
  label tanpa istilah akuntansi, desimal qty diperbolehkan.
- Istilah ke owner pakai kata sehari-hari ("Bagi hasil owner / Bisa diambil"), bukan jargon.
- Data lama **disembunyikan, bukan dihapus** (cutoff/tutup buku lewat satu setelan yang bisa dimatikan).
  Batas hari dihitung tengah malam **WIB**, bukan UTC. Tanggal di laporan pakai nama hari.

## 12b. AI agent & bot (Hermes, bot WA, Atlas)

- **Ucapan bot = tindakannya.** Bot/agent dilarang mengaku "sudah diubah/dikirim/dikonfirmasi" kalau sistem
  belum melakukannya; pasang penjaga klaim di kode. Perubahan data (jadwal, booking, bayar) berbentuk usulan
  yang disetujui admin.
- **AI = juru bicara, bukan eksekutor.** Tool agent default baca-saja; keputusan duit/eksekusi tetap di aturan
  deterministik. Agent tidak akses DB langsung — lewat API webapp bertoken khusus (baca dulu, izin tulis
  belakangan). Angka dibacakan ulang sebelum ditulis; ragu → tandai `perlu_cek`.
- Ganti model AI untuk klien hanya setelah **uji buta** (replay chat asli + penilai buta) dan persetujuan Rama;
  tiap ganti model/effort, uji ulang semua penjaga (bocor pikiran internal, harga asing) ke seluruh riwayat.
- Memori/preferensi Rama menang atas prompt, cron, dan skrip. Agent dilarang menjawab "siap" untuk hal di
  luar kendalinya.
- Akun sosial/bisnis: **membaca** (riset/pantau) boleh otomatis dari akun kedua/logged-out; **menulis** dari
  akun utama hanya lewat API resmi atau kartu sekali-tap yang dikirim Rama sendiri. Tanpa akun tumbal, provider legal.
- Satu agent = satu pekerjaan; agent berikutnya dibangun setelah yang sebelumnya dipakai seminggu penuh.

## 13. Kerangka proyek baru (pola yang dipakai di semua repo)

- **Lokasi: semua proyek coding di `~/Proyek/<nama>`. Jangan pernah di Desktop, Documents,
  Downloads, atau iCloud Drive** (perintah Rama 16 Okt 2026). iCloud hanya untuk iPhone-nya; di Mac
  sync iCloud dimatikan. Alasan: sync node_modules/.next/.git bikin `bird`/`fileproviderd` makan ~90% CPU,
  file picker browser & copy-paste macet, dan iCloud bikin file kembar "x 2.json" yang bisa merusak repo.
  Kalau ketemu repo di folder iCloud → peringatkan Rama dan tawarkan pindah ke `~/Proyek`.
- **Bikin proyek baru lewat Markas → "Proyek baru"**: folder + kerangka (web / HP & tablet / komputer /
  Mac / situs / kosong) + dokumen di bawah + `docs/CARA-KERJA-RAMA.md` (salinan file ini) + repo privat
  GitHub + bahan dari Downloads dirapikan (`docs/`, `assets/`, `data/`, daftar di `docs/BAHAN.md`) +
  prompt pembuka di Claude. Proyek situs statis dapat `.vercelignore` supaya dokumen tidak tayang publik.
- `CLAUDE.md` (isi `@AGENTS.md` + aturan proyek) · `AGENTS.md` (peringatan Next) · `DESIGN.md` ·
  `deploy.md` (akun, project id, alur, tabel troubleshooting) · `accounts.md` (kalau multi-akun) ·
  `HANDOVER.md` · `docs/DECISIONS.md` (keputusan bernomor + alasannya) · `.env.example` ·
  `.github/workflows/deploy.yml` (§7).
### 13b. Brainstorm di Claude web → proyek baru di Markas

Rama biasanya brainstorm & menyusun dokumen di **Claude web (claude.ai)** dengan file ini terlampir, lalu
membuat proyeknya lewat **Markas → Proyek baru**. Markas memindahkan file dari folder Downloads ke proyek:
`.md`/`.txt` → `docs/`, PDF → `docs/referensi/`, gambar → `assets/gambar/`, folder desain → `docs/desain/`,
CSV/Excel → `data/` (daftarnya di `docs/BAHAN.md`), lalu membuka Claude Code dengan prompt pembuka.

**Untuk Claude web — kalau Rama sedang merancang aplikasi/proyek baru**, akhiri rancangan dengan paket ini:
1. **Isian formulir Markas** (dalam satu blok, siap salin):
   - Nama proyek (boleh huruf besar & spasi, jadi nama folder & repo).
   - Jenis — pilih SATU dari pilihan Markas dan sebut alasannya sekalimat: *Aplikasi web* · *Aplikasi HP
     & tablet* · *Aplikasi komputer* (Mac & Windows) · *Aplikasi Mac kecil* · *Situs sederhana* · *Folder kosong*
     (lihat §9 untuk teknologinya; Rama tidak memilih framework).
   - Cerita singkat 2–3 kalimat: apa, untuk siapa, masalah yang diselesaikan (ditempel ke kolom
     "Ceritakan singkat proyeknya" → masuk `CLAUDE.md`).
2. **Dokumen bahan, satu file `.md` per topik, siap diunduh**, nama bernomor huruf besar tanpa spasi:
   `00-BRIEF.md` (ringkasan + keputusan hasil brainstorm + pertanyaan yang belum terjawab) ·
   `01-PRODUCT-SPEC.md` (pengguna, masalah, fitur inti vs nanti, alur utama) · `02-DESIGN-NOTES.md`
   (catatan tampilan khusus proyek ini — pelengkap DESIGN.md standar, bukan pengganti) ·
   `03-ARSITEKTUR.md` (data, layanan, batas platform, risiko) · `04-ROADMAP.md` (milestone kecil, 1–2 per
   sesi, milestone 1 bisa dicoba Rama). Topik lain boleh ditambah dengan nomor berikutnya (mis. `05-…`).
3. Mockup/gambar referensi → file gambar terpisah; data contoh → `.csv`.

Aturan paket: **jangan** membuat `CLAUDE.md`, `AGENTS.md`, `DESIGN.md`, `deploy.md`, `HANDOVER.md`,
`DECISIONS.md`, atau `CARA-KERJA-RAMA.md` (Markas sudah membuatnya — kalau dobel, bentrok). Keputusan
brainstorm ditulis di `00-BRIEF.md`; Claude Code yang memindahkannya ke `docs/DECISIONS.md`. Tanpa rahasia
(token, password, nomor HP klien). Bahasa Indonesia, jelas untuk non-teknis. Batas platform yang tidak
mungkin (mis. iOS tidak mengizinkan app menghapus permanen foto tanpa lewat "Baru Dihapus") ditulis terang
di `00-BRIEF.md` beserta alternatif terbaiknya. Akhiri dengan langkah untuk Rama: unduh semua file →
Markas → Proyek baru → isi formulir → "Pilih file & folder dari Downloads" → centang file tadi → Buat proyek.

- Awal proyek: tanya/catat akun Vercel & GitHub mana yang dipakai, lalu tulis ke `deploy.md` Kalau pakai Supabase, minta
  Supabase Personal Access Token sekalian (lihat §8).
- Memori proyek: satu fakta per file; simpan aturan dari Rama sebagai feedback dengan **Why** + **How to apply**.
  Kalau Rama minta aturan berlaku di semua proyek → tambahkan ke file ini.
