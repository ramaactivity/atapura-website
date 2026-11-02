# 08 — Daftar Aset Visual & Meta Prompt Magnific

## Aturan umum
- **Foto proyek asli selalu menang.** Gambar AI hanya untuk: hero suasana, tekstur, ilustrasi lapisan, dan pengisi sementara sampai foto asli ada. Begitu ada foto asli untuk slot yang sama, ganti.
- **Tidak pernah digenerate:** logo (Atapura maupun merek mitra), teks/tulisan di gambar, kemasan produk bermerek, wajah tim Atapura, "foto proyek" palsu yang diklaim proyek kita.
- Label & angka pada ilustrasi ditambahkan di kode (HTML/SVG), bukan di gambar.
- Model di Magnific: pakai model realistis (Mystic atau yang paling fotoreal yang tersedia di akun Rama) untuk foto; mode ilustrasi/3D untuk diagram. Upscale pakai Magnific Upscaler dengan creativity rendah agar detail granul tidak "mengarang".
- Simpan hasil ke folder proyek: `assets/gambar/magnific/<nama-slot>.png`.

## Palet acuan (masuk ke prompt)
Pinus `#10231E`, Embun `#F2F4F1`, Tunas/lime `#C6F24E` (hanya aksen kecil), cahaya Senja `#F2B66B`. Grading foto: hangat, sinematik, golden hour.
(Final ditetapkan di `02-DESIGN-NOTES.md`; kalau berubah, ganti hex di prompt.)

## Negative prompt standar (tempel di semua prompt foto)
`text, letters, watermark, logo, signage, brand names, fake labels, distorted hands, extra fingers, plastic skin, waxy faces, oversaturated, HDR halo, stock photo look, cartoonish, CGI sheen, fisheye, blurry granules, wavy shingle lines, impossible roof geometry, floating objects, duplicate chimneys`

---

### 1. HERO beranda — rumah modern Jabodetabek, golden hour
- **Tempat:** hero beranda, latar penuh; teks di kiri.
- **Rasio:** 16:9 desktop (2560×1440) + versi 4:5 HP (1440×1800) — generate terpisah dengan komposisi disesuaikan.
- **Prompt:**
`Architectural photograph of a contemporary two-storey Indonesian suburban house with a steep gable roof covered in charcoal laminated asphalt shingles, warm golden-hour sunlight grazing the roof so the shingle granules glow softly, a few soft clouds, tropical plants (frangipani, palm) in the yard, out-of-focus leaves in the immediate foreground framing the lower corner for depth, clean white render walls with warm wood accents, shot from slightly below at street level with a 35mm lens, composition with generous empty sky and calm wall area on the left third for headline text, natural colour grading, warm cinematic golden-hour grading, deep pine green shadows #10231E, soft off-white highlights #F2F4F1, realistic, editorial, high detail`
- **Ruang kosong:** sepertiga kiri (desktop), sepertiga atas (HP).

### 2. Tekstur granul per warna (6–10 gambar)
- **Tempat:** **tekstur permukaan genteng untuk render lapisan "Selembar Genteng"** (prioritas tertinggi), juga latar kartu produk & pemilih warna.
- **Rasio:** 1:1, 2048×2048, harus bisa di-tile mulus (minta "seamless").
- **Prompt (ganti warna):**
`Seamless macro texture of asphalt roofing shingle surface, dense ceramic-coated mineral granules, colour [dark charcoal / weathered brown / slate grey / terracotta red / forest green], even soft daylight from top-left, very shallow relief shadows, no seams, no tile edges visible, true-to-life colour, ultra sharp, 100mm macro`
- **Catatan:** cocokkan warna dengan sampel fisik asli tiap merek; foto sampel asli di bawah cahaya jendela lebih jujur untuk pemilih warna. Tekstur AI cukup untuk dekorasi.

### 3. Ilustrasi lapisan atap (exploded view) — signature visual
- **Tempat:** `/standar-pasang`, `/atap-bitumen`, blok Kualitas di beranda. Akan dianimasikan per lapisan di kode.
- **Rasio:** 3:2, 3000×2000, latar polos Embun (off-white netral).
- **Prompt:**
`Clean isometric exploded-view illustration of a pitched roof section, layers separated vertically with even spacing: light steel roof truss, plywood deck, black self-adhesive underlayment membrane, metal drip edge flashing, starter strip, overlapping charcoal asphalt shingles, ridge cap on top, soft studio lighting, subtle ambient occlusion, matte materials, restrained palette deep pine #10231E, charcoal shingles, a single thin lime accent line #C6F24E on the underlayment edge, plain off-white background #F2F4F1, no labels, no text, precise engineering accuracy, minimal and elegant`
- **Alternatif lebih aman:** minta Claude Code menggambarnya sebagai SVG berlapis (lebih tajam & bisa dianimasikan). Rekomendasi: pakai hasil Magnific sebagai referensi gaya, final di SVG.

### 4. Hujan di atap (detail emosional)
- **Tempat:** section "tidak berisik saat hujan", artikel uji suara.
- **Rasio:** 3:2, 2400×1600.
- **Prompt:**
`Close-up of heavy tropical rain hitting charcoal asphalt shingles, droplets bursting into fine mist, water sheeting along the granule surface into a dark gutter, cool blue-grey dusk light with a single warm window glow out of focus in the background, 85mm, shallow depth of field, cinematic but natural, warm window glow against deep pine-green dusk #10231E`

### 5. Tukang memasang (pengisi sampai ada foto asli)
- **Tempat:** layanan pasang baru, standar pasang.
- **Rasio:** 4:5, 1440×1800.
- **Prompt:**
`Documentary photograph of an Indonesian roofing installer in a plain grey work shirt and safety harness, kneeling on a roof deck, nailing an asphalt shingle with a hammer, hands clearly visible and anatomically correct, focused expression partly turned away from camera, morning light, chalk-line marks visible on the underlayment, authentic, unposed, 35mm, natural colour`
- **Risiko:** tangan & wajah AI sering cacat. Kalau hasil meragukan, jangan dipakai. **Prioritas: foto tukang asli Atapura** (lebih dipercaya Google & manusia).

### 6. Tipe bangunan per segmen (4 gambar)
- **Tempat:** layanan villa & kafe, rumah cluster, ruko/komersial, ganti atap lama.
- **Rasio:** 3:2, 2400×1600. Sisakan ruang kosong di atas untuk judul.
- **Prompt dasar + variasi:**
  - Villa: `A-frame wooden villa in misty highland pine forest of West Java, roof covered with dark brown asphalt shingles, morning fog, warm interior lights`
  - Kafe: `Small modern tropical café with a dramatic steep roof clad in slate grey asphalt shingles, outdoor seating, golden hour, people blurred in motion`
  - Cluster: `Row of modern minimalist cluster houses in a Greater Jakarta suburb, uniform charcoal shingle roofs, clean street, overcast soft light`
  - Ganti atap: `Split view concept of an old house roof, left half heavy cracked concrete tiles, right half new charcoal asphalt shingles, same house, same light, documentary realism`
  - Tambahkan ke semua: `, realistic architectural photography, 24mm tilt-shift look, no text, warm golden-hour grading, shadows toward deep pine green #10231E`

### 7. Latar halaman area/kota (opsional, hemat)
- Jangan generate "pemandangan kota" per kota (generik, tidak menambah nilai SEO). **Pakai foto proyek nyata di kota itu.** Selama belum ada, halaman kota belum terbit (aturan di `06`).

### 8. Gambar Open Graph (preview saat link dibagikan)
- **Jangan digenerate.** Dibuat otomatis oleh kode dari template (judul halaman + tekstur granul #2 + logo asli). Konsisten dan selalu benar.

### 9. Rumah dasar untuk visualizer warna (4 gambar, + varian atap dibuat di kode/render)
- **Tempat:** `/warna` dan blok visualizer di beranda.
- **Rasio:** 3:2, 2400×1600. **Atap harus terlihat jelas & cukup luas**, sudut 3/4 dari depan, langit polos mendung terang (supaya ganti warna atap terlihat natural).
- **Prompt dasar:** `Clean architectural photograph of a [modern two-storey cluster house in Greater Jakarta / A-frame highland villa / small tropical café / two-storey shophouse], three-quarter front view, roof prominently visible and occupying the upper third, roof covered with plain neutral grey asphalt shingles, soft overcast light, no harsh shadows on the roof, simple landscaping, no people, no cars, no text, realistic, 28mm, warm golden-hour grading, shadows toward deep pine green #10231E`
- **Catatan:** varian warna per merek dibuat dengan menimpa area atap (masker) memakai tekstur granul #2 — dikerjakan Claude Code di tahap render, bukan generate ulang tiap warna (supaya rumahnya identik).

### 10. Konsep kampanye (sosmed & iklan, gaya Reform / Vaseline / peel)
Bukan untuk mengklaim proyek. Tidak ada teks di gambar — judul ditambahkan di template.
- **"Hujan cuma jadi suara"** (4:5 & 9:16): `Cinematic interior photograph at dusk during heavy tropical rain, an Indonesian family relaxing calmly in a warm-lit modern living room, a parent reading on the sofa, a child drawing on the floor, rain streaks visible on the large window, warm lamp light, deep pine-green and blue tones outside, peaceful mood, 35mm, natural skin tones, editorial, realistic`
- **"Kelupas atap lama"** (4:5, gaya gambar referensi 1): `Conceptual advertising photograph, a hand peeling back an old cracked, mossy concrete roof tile surface like a sheet of paper, revealing a brand-new charcoal asphalt shingle roof underneath glowing in golden-hour light, same house, seamless transition, hyperreal, sharp detail on both surfaces, clean sky with space at the top for a headline`
- **"Drone rapi"** (4:5 & 1:1): `Top-down drone photograph of a modern suburban house in Greater Jakarta with a perfectly installed charcoal asphalt shingle roof, crisp straight shingle lines and clean ridge caps, surrounded by tropical trees, late-afternoon light with long soft shadows, subtle lens flare in one corner, cinematic grading`
- **Metafora produk** (1:1, gaya Vaseline): `Macro conceptual photograph of a single asphalt roof shingle used as a tiny umbrella over a miniature model house during a light rain shower, droplets beading and rolling off the granules, dramatic soft side light, dark pine-green background, playful but premium`
- Negative tambahan untuk semua konsep: `text, logos, distorted hands, extra fingers, uncanny faces, plastic skin`. Hasil dengan tangan/wajah cacat dibuang.

## Urutan kerja Rama
1. Generate #2 (tekstur granul, semua warna merek) dan #9 (rumah dasar visualizer) paling dulu — dipakai untuk render lapisan adegan. Lalu #1 (hero fallback) dan #3 (referensi gaya lapisan).
2. #4 dan #6 menyusul.
3. #5 hanya kalau foto asli belum ada.
