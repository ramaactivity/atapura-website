# 09 — Skill & Alur Desain untuk Claude Code (revisi 2 Nov 2026)

## Kenapa trio lama mengecewakan (dan kenapa skill baru saja tidak cukup)
Skill desain berisi **aturan dan polesan, bukan selera**. Tanpa arah visual yang spesifik, model tetap mendesain dari "rata-rata web". Uji pihak ketiga (Okt 2026) pada satu landing page: hanya Impeccable yang mengubah tampilan; taste-skill, better-ui, dan skill Emil hanya memoles detail. Bahkan blind test taste-skill v2 sendiri: versi baru skor 7,7, tanpa skill sama sekali 7,8. Menumpuk banyak skill juga saling bertabrakan (contoh: better-ui pakai skala tekan 0,96, Emil 0,97).

Kesimpulan: **yang mengubah hasil adalah referensi yang dikurasi + desain visual disetujui dulu sebelum coding.** Skill dipakai untuk kritik dan polesan.

## Susunan baru (jangan ditumpuk semua sekaligus)

| Peran | Skill | Install | Kapan |
|---|---|---|---|
| Arah + kritik (satu-satunya skill arah) | **Impeccable** (Paul Bakaus) — 24 perintah: shape, critique, audit, bolder, quieter, distill, typeset, layout, polish; 60 cek pola AI otomatis | `npx impeccable install` | Awal (shape) & tiap review (critique/audit) |
| Ambil token dari referensi | **extract-design-system** | `npx skills add arvindrk/extract-design-system` (cek nama persis di repo) | Sekali, dari 3–5 situs referensi |
| Polesan detail permukaan | **better-ui** (Jakub Krehel) — radius dalam/luar, bayangan berlapis, ikon, efek tekan | `npx skills add jakubkrehel/skills` | Setelah tata letak disetujui |
| Gerak & interaksi | **emil-design-eng** — **hanya** untuk animasi UI & transisi | sudah terpasang | Milestone 4 |
| 3D (hanya alat render di laptop) | Skill Three.js bila tersedia; wajib baca dokumentasi resmi Three.js versi terpasang. **Tidak ada Three.js/GSAP di bundle situs** | — | Milestone 4a |
| Audit teknis UX & aksesibilitas | **web-design-guidelines** (Vercel, 100+ aturan) | `npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines` | Gerbang sebelum rilis |
| Referensi (opsional) | **Subframe inspiration MCP** (gratis; catatan: buatan Subframe sendiri, jadi ulasan di atas bias ke produk mereka) | `claude mcp add --transport http subframe https://mcp.subframe.com/mcp` lalu login lewat `/mcp` | Kalau referensi kurasi Rama masih kurang |

Dilepas dari daftar wajib: taste-skill (lambat, ratusan ribu token per build, hasil tidak lebih baik dari tanpa skill di uji mereka sendiri) dan frontend-design sebagai pengarah utama (cukup jadi lantai; prinsipnya sudah dirangkum di `02`).

## Alur desain baru (wajib)
1. **Rama memilih 3–5 situs referensi** yang dia suka, + tulis satu kalimat per situs: apa yang disukai (tipografi? foto? cara menjelaskan harga?). Tidak harus situs atap.
2. `extract-design-system` dari referensi → bandingkan dengan token di `02` → putuskan token final.
3. **Mockup visual disetujui Rama dulu** (Claude Design / artifact Design di claude.ai): beranda desktop + HP. Revisi di tahap gambar jauh lebih murah daripada di kode.
4. Claude Code membangun **identik** dengan mockup (aturan handoff di `CARA-KERJA-RAMA.md` §10).
5. Impeccable `critique` + `audit` → perbaiki → better-ui polish → screenshot desktop (~1230 px) & HP dilihat sendiri.
6. Bandingkan sekali dengan versi tanpa skill polish; kalau tidak lebih baik, buang polesannya.

## SEO & GEO (tidak berubah)
`seo-audit`, `schema-markup`, `programmatic-seo`, `site-architecture` (kalau ada), skill AI search/GEO bila tersedia, `content-strategy`, `copywriting` + `copy-editing`. Kalau ada yang tidak ditemukan, Claude Code wajib bilang terang.

## Gerbang "tidak boleh slop" sebelum commit visual
1. Label HURUF BESAR di atas judul, panah di tombol, meta bertitik tengah, kartu identik berderet? → hapus.
2. Teks pemanis tanpa angka/bukti? → ganti fakta atau buang.
3. Gambar AI yang terlihat seperti proyek nyata Atapura? → ganti/beri konteks jujur.
4. Hasil cocok dengan mockup yang disetujui? Screenshot HP & desktop sudah dilihat?
