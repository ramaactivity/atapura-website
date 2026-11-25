import { defineCollection } from 'astro:content';
import { glob, type Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import ditahan from './data/artikel-ditahan.json' with { type: 'json' };

// Artikel terjadwal (DECISIONS 065): entri dengan `terbit` setelah hari ini (tanggal WIB) dibuang saat koleksi dimuat, jadi
// tidak ada halaman, daftar, sitemap, atau llms.txt yang memuatnya. Workflow terbit-terjadwal.yml membangun ulang situs
// pada hari tayang. Satu tempat untuk semua pemanggil getCollection.
const hariIniWib = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Jakarta' });
const sudahTayang = (terbit: Date | string, hari = hariIniWib()) => new Date(terbit).toISOString().slice(0, 10) <= hari;
const globTayang = (opsi: Parameters<typeof glob>[0]): Loader => {
  const dasar = glob(opsi);
  return {
    ...dasar,
    load: async (ctx) => {
      await dasar.load(ctx);
      // TAMPIL_TERJADWAL=1 hanya untuk pratinjau lokal (cek tampilan sebelum tayang); produksi tidak pernah mengisinya.
      if (process.env.TAMPIL_TERJADWAL === '1') return;
      // Ditahan pemilik di Ops (Lainnya → Artikel website), ditarik `npm run artikel-ops` (DECISIONS 067).
      const tahan = new Set<string>(ditahan);
      for (const [id, e] of ctx.store.entries()) if (tahan.has(id) || !sudahTayang(e.data.terbit as Date)) ctx.store.delete(id);
    },
  };
};

// Artikel format "jawaban dulu" (ai-seo) — jawaban langsung, tabel, subjudul pertanyaan, FAQ, sumber.
// Satu bentuk untuk /panduan (Indonesia) dan /en/guides (Inggris, untuk ekspat); hanya daftar kategorinya beda.
const artikel = <K extends [string, ...string[]]>(base: string, kategori: K) =>
  defineCollection({
  loader: globTayang({ pattern: '**/*.md', base }),
  schema: ({ image }) =>
    z.object({
      judul: z.string().max(70),
      ringkasan: z.string().max(160), // meta description
      jawaban: z.string(), // 2–3 kalimat jawaban langsung, tampil paling atas
      kategori: z.enum(kategori),
      terbit: z.coerce.date(),
      diperbarui: z.coerce.date(),
      penulis: z.string().default('Tim Atapura'),
      sampul: image(),
      sampulAlt: z.string(),
      sampulFokus: z.string().optional(), // object-position sampul desktop, mis. '50% 70%'
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      sumber: z.array(z.object({ nama: z.string(), url: z.string().url().optional() })).default([]),
      /** Slug artikel padanan di bahasa lain (untuk hreflang), bila ada. */
      padanan: z.string().optional(),
    }),
  });
const panduan = artikel('./src/content/panduan', ['Dasar', 'Biaya', 'Perbandingan', 'Pemasangan', 'Perawatan', 'Usaha', 'Proyek', 'Teknis']);
const guides = artikel('./src/content/guides', ['Basics', 'Costs', 'Comparison', 'Installation', 'Care']);

// Halaman per daerah (service-area SEO). Isi wajib unik per daerah dan bersumber (BPS/BMKG/pabrikan),
// bukan nama kota yang ditukar — lihat docs/riset/data-lokal-area.md dan DECISIONS 030+.
const area = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/area' }),
  schema: ({ image }) =>
    z.object({
      nama: z.string(), // nama daerah di judul, mis. 'Jakarta'
      // Nama wilayah (sama persis dengan bisnis.area untuk Jabodetabek) yang dicakup halaman ini.
      cakupan: z.array(z.object({ nama: z.string(), jenis: z.enum(['City', 'AdministrativeArea']) })).min(1),
      wilayah: z.enum(['Jabodetabek', 'Luar Jabodetabek']),
      judul: z.string().max(70),
      // Fakta singkat dari ringkasan untuk tabel daerah di beranda (DECISIONS 095); jenis = warna label.
      sorot: z.string().max(48),
      sorotJenis: z.enum(['hujan', 'angin', 'panas', 'aturan']),
      ringkasan: z.string().max(160),
      jawaban: z.string(),
      diperbarui: z.coerce.date(),
      sampul: image(),
      sampulAlt: z.string(),
      urut: z.number().default(99),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      sumber: z.array(z.object({ nama: z.string(), url: z.string().url().optional() })).default([]),
    }),
});

export const collections = { panduan, area, guides };
