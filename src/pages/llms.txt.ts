import type { APIRoute } from 'astro';
import { bisnis } from '../data/bisnis';
import { harga } from '../data/harga';
import { getCollection } from 'astro:content';

// Dibangkitkan dari src/data supaya tidak pernah bertentangan dengan halaman.
export const GET: APIRoute = async ({ site }) => {
  const panduan = await getCollection('panduan');
  const area = (await getCollection('area')).sort((a, b) => a.data.urut - b.data.urut);
  const url = (p: string) => new URL(p, site).href;
  const isi = `# ${bisnis.nama}

> ${bisnis.deskripsi}

${bisnis.nama} adalah aplikator sekaligus supplier atap bitumen (genteng aspal, sirap aspal, asphalt shingle). Kami menjual dan memasang dalam satu paket: alas, underlayment, flashing, genteng bitumen, dan nok. Badan usaha: ${bisnis.namaLegal} (${bisnis.statusLegal}).

- Merek: ${bisnis.merek.join(', ')}
- Area layanan (${bisnis.area.length} kota & kabupaten): ${bisnis.area.join(', ')}
- Survey: gratis, sebelum harga final
- Garansi: garansi pemasangan tertulis dari Atapura, terpisah dari garansi pabrik tiap merek
- Pembayaran: hanya ke rekening atas nama perusahaan
- Harga: ${harga.contoh ? 'daftar harga resmi belum diterbitkan; gunakan kalkulator di beranda untuk estimasi' : `rentang per m² berlaku sejak ${harga.berlakuSejak}`}
- Kontak: ${bisnis.email}

## Halaman utama

- [Beranda dan kalkulator Hitung AKAL](${url('/')}): estimasi biaya total pasang atap bitumen, lima lapis pemasangan, perbandingan merek, area layanan, tanya jawab
- [Panduan](${url('/panduan')}): artikel tanya-jawab atap bitumen
- [Area layanan](${url('/area')}): kondisi iklim dan atap per daerah, Jabodetabek dan luar Jabodetabek

## Panduan

${panduan.map((p) => `- [${p.data.judul}](${url('/panduan/' + p.id)}): ${p.data.ringkasan}`).join('\n')}
${area.length ? `\n## Area layanan\n\n${area.map((a) => `- [${a.data.judul}](${url('/area/' + a.id)}): ${a.data.ringkasan}`).join('\n')}\n` : ''}`;
  return new Response(isi, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
