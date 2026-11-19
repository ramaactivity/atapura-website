# Prompt Magnific: aksesoris atap (19 Nov 2026)

Gambar untuk halaman **/produk/aksesoris** di website dan kartu **Katalog → Aksesoris** di Atapura Ops.
Foto produk dokteratap.co.id tidak dipakai karena ada watermark logo Dokter Atap dan tulisan yang menempel di gambarnya.
Isinya tetap dipakai sebagai acuan bentuk barang.

Aturannya sama dengan gelombang 1 & 2:
- Jangan tulis kode warna hex di prompt, karena warnanya jadi belang.
- Jangan tulis kata "Indonesian", karena gambarnya jadi muncul ornamen Bali. Pakai "Southeast Asian" atau "Jakarta suburb".
- Gaya: foto dokumenter yang natural, cahaya sore hangat, warna lembut. Jangan mirip foto stok.

**Simpan ke** `Atapura Website/assets/gambar/magnific/` dengan nama file persis seperti di bawah.
Rasio **3:2, ukuran 2048×1365** (sama dengan ilustrasi penerapan produk lain).
Barangnya taruh agak ke tengah. Tepi kiri dan kanan boleh terpotong, karena kartu di HP memotongnya jadi 4:3.

**Negative prompt (tempel di semua):**
`text, letters, numbers, watermark, logo, brand names, printed labels, stickers with writing, packaging text, signage, distorted hands, extra fingers, plastic skin, oversaturated, HDR halo, stock photo look, white studio cutout background, cartoonish, CGI sheen, fisheye, Balinese ornaments, impossible roof geometry`

Saran di Magnific: mode foto realistis (mis. Mystic / model "realism"), creative detailing sedang. Kalau tangan tukang rusak, pakai versi tanpa tangan.

Sudah ada (tidak perlu dibuat): multiplek (`rangka-baja-ringan-papan-3x2.jpg`), flashing Z / flashing dinding
(`flashing-dinding-3x2.jpg`), aluminium foil (`loteng-ventilasi-3x2.jpg`), baja ringan (`penerapan-rangka-rumah-baru-3x2.jpg`).

---

### 1. `aksesoris-underlayer-3x2.jpg`: Underlayer self-adhesive
Lapis kedap hitam yang ditempel (tanpa api) di atas papan alas multiplek. Yang harus kelihatan: gulungan, kertas pelapis yang dikelupas, sambungan yang saling tumpang.
`Documentary photo on a plywood roof deck of a house in a Jakarta suburb, a roofer's gloved hands unrolling a black self-adhesive bitumen underlayment roll and peeling back its thin release film, previous strips already stuck down with neat horizontal overlaps, a second full roll lying beside, late afternoon warm side light revealing the fine fiberglass texture, 50mm lens, shallow depth of field, realistic, hands anatomically correct`

### 2. `aksesoris-membrane-3x2.jpg`: Membrane torching
Membran bitumen tebal yang dipasang dengan cara dibakar. Yang harus kelihatan: obor gas dengan api biru kecil, tepi membran yang melunak, gulungan tebal.
`Documentary photo of a roofer in grey work clothes kneeling on a flat concrete roof deck, heating the underside of a thick black bitumen torch-on membrane roll with a small gas torch, soft blue flame, the softened edge glossy and being pressed down, two more thick rolls standing nearby, warm evening light, safety gloves, 35mm lens, realistic, face turned away from camera`

### 3. `aksesoris-flashing-u-3x2.jpg`: Flashing U
Profil logam zincalume bentuk U yang menutup tepi atap (lisplang). Yang harus kelihatan: tepi atap bitumen yang rapi dengan profil logam keperakan sepanjang tepinya.
`Close-up photo of the eave edge of a new charcoal asphalt shingle roof on a modern house, a clean silver zincalume U-shaped metal edge flashing running straight along the fascia board, capping the plywood edge neatly, a few spare 120 cm flashing lengths resting on the roof deck, golden hour light glinting on the metal, 85mm lens, shallow depth of field, realistic, high detail`

### 4. `aksesoris-grc-3x2.jpg`: GRC (papan semen)
Papan semen abu-abu muda sebagai alas atap di atas rangka baja ringan. Yang harus kelihatan: tumpukan papan dengan tepi tebal yang terlihat, sebagian sudah disekrup ke rangka.
`Documentary photo on a light steel roof truss of a house under renovation in a Jakarta suburb, pale grey fiber cement boards being laid as roof decking, some boards already screwed to the silver steel battens, a neat stack of boards with visible thick edges in the foreground, a cordless screwdriver resting on top, soft late afternoon light, 35mm lens, realistic, construction site tidy`

### 5. `aksesoris-paku-3x2.jpg`: Paku bitumen
Paku pendek berkepala lebar untuk genteng bitumen. Yang harus kelihatan: paku di telapak tangan atau wadah, di atas genteng bitumen yang sedang dipasang.
`Macro close-up of a small handful of short galvanized roofing nails with wide flat heads resting in a roofer's gloved palm, held just above a charcoal asphalt shingle being installed on a plywood deck, one nail already driven flush into the shingle, a hammer softly out of focus behind, warm side light showing the zinc sheen and shingle granules, 100mm macro lens, shallow depth of field, realistic`

### 6. `aksesoris-skrup-3x2.jpg`: Skrup
Sekrup baja sekitar 1 inci untuk mengunci papan alas ke rangka. Yang harus kelihatan: mata bor sedang memutar sekrup ke papan multiplek di atas reng baja ringan, beberapa sekrup di sampingnya.
`Close-up documentary photo of a cordless drill driving a 1-inch black phosphate self-tapping screw through a plywood roof deck board into a silver light steel batten below, a few loose screws scattered on the board next to it, the row of already-driven screws visible along the batten line, late afternoon warm light, 85mm lens, shallow depth of field, realistic, hands anatomically correct`

---
Setelah file masuk folder, bilang ke Claude Code. Foto akan langsung dipasang di website (halaman aksesoris otomatis membaca
`aksesoris-*-3x2.jpg`) dan disalin ke Atapura Ops (`public/katalog/<kode>.webp`, ditambah ke daftar `FOTO` di halaman Katalog).
