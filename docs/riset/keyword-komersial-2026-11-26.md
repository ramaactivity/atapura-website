# Celah kata kunci komersial (jasa, aplikator, jual) — 26 November 2026

Pertanyaan Rama: "apakah di website kita ada keyword penting yang sering diketik dan dicari tapi belum ada, misalkan aplikator,
penyedia jasa pasang dan sebagainya."

Sumber (gratis, tanpa volume absolut — butuh akun Google Ads):
- Autocomplete Google, 14 kata kunci awal → `data/riset/autocomplete-komersial-2026-11.csv` (201 frasa).
- Google Trends lewat SerpApi, Indonesia, 12 bulan, rata-rata relatif dalam satu perbandingan.
- Cakupan situs: grep isi `src/content` + `src/pages` (jumlah file yang memuat frasa, dan apakah ada di judul).

## Trends (relatif, satu perbandingan)
- atap bitumen 66 · tukang atap 25 · jasa pasang atap 15 · ganti atap 14 · renovasi atap 10
- jasa pasang atap 24 · tukang atap 39 · kontraktor atap 1 · jasa ganti atap 0 · aplikator atap 0
- jasa pasang atap bitumen 2 · kontraktor atap bitumen 2 · jual / distributor / pasang atap bitumen 0
Catatan: Trends mencocokkan kata tanpa urutan, jadi "tukang atap"/"jasa pasang atap" ikut menghitung baja ringan, spandek, dll.
"Aplikator" istilah industri; orang awam mengetik "tukang", "jasa", "kontraktor".

## Cakupan situs vs frasa yang diketik
| Frasa (autocomplete) | Di situs | Catatan |
|---|---|---|
| jasa pasang atap bitumen (+ per m², harga) | 14 file, judul halaman area | aman |
| aplikator / kontraktor / tukang pasang atap bitumen | 1 / 0 / 0 file | **celah** — tidak ada halaman yang menyasar |
| ganti atap rumah, jasa ganti atap, renovasi atap, kontraktor ganti atap rumah | ganti atap 16 file; "jasa ganti atap" 0, "renovasi atap" 0 | **celah** — volume ganti+renovasi ≈ 1/3 "atap bitumen" |
| borongan / upah / ongkos pasang atap bitumen per m² | 1 / 1 / 2 file | perkuat artikel ongkos jasa (sinonim di subjudul/FAQ) |
| urutan / proses pemasangan atap bitumen | 0 | perkuat cara pasang + 5 lapis (sinonim di subjudul) |
| jasa pasang genteng aspal | 1 | sinonim di beranda/area |
| jual / supplier / distributor / toko atap bitumen (terdekat) | 1 / 0 / 0 / 0 | celah bila jual material saja mau dipromosikan (sekarang cuma 1 kalimat) |
| jasa pasang (rangka) atap baja ringan per m² | 0 judul | banyak varian; relevan hanya bila Atapura terima pekerjaan rangka saja |
| … terdekat | 3 | dijawab Google Business Profile, bukan artikel |

## Usulan (urut dampak)
1. Halaman/artikel baru "Jasa ganti atap rumah / renovasi atap ke atap bitumen".
2. Artikel "Cara memilih aplikator/kontraktor/tukang pasang atap bitumen" (gabung topik kalender 2027-02-23 "Checklist
   membandingkan penawaran pasang atap").
3. Perkuat tanpa halaman baru: ongkos jasa (borongan, upah), cara pasang (urutan, proses), sinonim "genteng aspal".
4. Menunggu keputusan bisnis Rama: halaman jual material saja; jasa rangka baja ringan saja.
