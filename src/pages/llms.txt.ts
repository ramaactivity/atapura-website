import type { APIRoute } from 'astro';
import { alamatLengkap, bisnis, TAMPIL_PLAFON } from '../data/bisnis';
import { harga } from '../data/harga';
import { LINI, namaLengkap, produk, rentangProduk } from '../data/produk';
import { getCollection } from 'astro:content';

// Dibangkitkan dari src/data supaya tidak pernah bertentangan dengan halaman.
export const GET: APIRoute = async ({ site }) => {
  const panduan = await getCollection('panduan');
  const area = (await getCollection('area')).sort((a, b) => a.data.urut - b.data.urut);
  const guides = await getCollection('guides');
  const url = (p: string) => new URL(p, site).href;
  const isi = `# ${bisnis.nama}

> ${bisnis.deskripsi}

${bisnis.nama} adalah aplikator sekaligus agen atap bitumen (genteng aspal, sirap aspal, asphalt shingle). Kami menjual dan memasang dalam satu paket: alas, underlayment, flashing, genteng bitumen, dan nok. Badan usaha: ${bisnis.namaLegal} (${bisnis.statusLegal}).

- Merek atap: ${bisnis.merek.join(', ')}
- Juga: ${TAMPIL_PLAFON ? 'plafon PVC (Shunda, Javafon) dan ' : ''}rangka atap baja ringan (Taso, Hi-Steel, K-Steel)${TAMPIL_PLAFON ? ', masing-masing' : ''} dengan jasa pasang
- Area layanan (${bisnis.area.length} kota & kabupaten): ${bisnis.area.join(', ')}
- Survey: gratis, sebelum harga final
- Garansi: garansi pemasangan tertulis dari Atapura, terpisah dari garansi pabrik tiap merek
- Harga: ${harga.contoh ? 'daftar harga resmi belum diterbitkan; gunakan kalkulator di beranda untuk estimasi' : `rentang per m² berlaku sejak ${harga.berlakuSejak}`}
- Kontak: ${bisnis.email}
- Alamat: ${alamatLengkap}

## Halaman utama

- [Beranda](${url('/')}): ringkasan layanan pasang atap bitumen, estimasi cepat per merek, lima lapis pemasangan, perbandingan merek, area layanan, tanya jawab
- [Cara kerja](${url('/cara-kerja')}): enam tahap dari survey gratis sampai pelunasan, Standar Pasang AKAL lima lapis yang difoto sebelum tertutup, format Rapor Proyek
- [Bayar & garansi](${url('/garansi')}): material lunas sebelum dikirim, jasa pasang bertahap, garansi pemasangan tertulis terpisah dari garansi pabrik, yang ditanggung dan tidak, cara klaim lewat WhatsApp
- [Kalkulator Hitung AKAL](${url('/hitung')}): estimasi biaya terpasang per m² dan total untuk luas atap dan merek pilihan, apa yang sudah dan belum termasuk, cara bayar, harga per merek
- [Produk & layanan](${url('/produk')}): katalog atap bitumen, ${TAMPIL_PLAFON ? 'plafon PVC, ' : ''}rangka baja ringan, dan aksesoris dengan harga per m²
- [Panduan](${url('/panduan')}): artikel tanya-jawab atap bitumen
- [Area layanan](${url('/area')}): kondisi iklim dan atap per daerah, Jabodetabek dan luar Jabodetabek
- [Guides in English](${url('/en/guides')}): asphalt shingle roofing in Indonesia for expats and villa owners

## Produk

${produk.map((p) => { const r = rentangProduk(p); return `- [${namaLengkap(p)}](${url('/produk/' + p.slug)}) (${LINI[p.lini].nama.toLowerCase()}): ${p.ringkas}${r ? ` Terpasang Rp${r[0] / 1000}–${r[1] / 1000} ribu per m² di Jabodetabek.` : ''}`; }).join('\n')}

## Panduan

${panduan.map((p) => `- [${p.data.judul}](${url('/panduan/' + p.id)}): ${p.data.ringkasan}`).join('\n')}
${guides.length ? `\n## Guides in English\n\n${guides.map((g) => `- [${g.data.judul}](${url('/en/guides/' + g.id)}): ${g.data.ringkasan}`).join('\n')}\n` : ''}${area.length ? `\n## Area layanan\n\n${area.map((a) => `- [${a.data.judul}](${url('/area/' + a.id)}): ${a.data.ringkasan}`).join('\n')}\n` : ''}`;
  return new Response(isi, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
