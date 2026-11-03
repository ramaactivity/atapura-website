import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Artikel panduan: format "jawaban dulu" (ai-seo) — jawaban langsung, tabel, subjudul pertanyaan, FAQ, sumber.
const panduan = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/panduan' }),
  schema: ({ image }) =>
    z.object({
      judul: z.string().max(70),
      ringkasan: z.string().max(160), // meta description
      jawaban: z.string(), // 2–3 kalimat jawaban langsung, tampil paling atas
      kategori: z.enum(['Dasar', 'Biaya', 'Perbandingan', 'Pemasangan', 'Perawatan']),
      terbit: z.coerce.date(),
      diperbarui: z.coerce.date(),
      penulis: z.string().default('Tim Atapura'),
      sampul: image(),
      sampulAlt: z.string(),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      sumber: z.array(z.object({ nama: z.string(), url: z.string().url().optional() })).default([]),
    }),
});

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

export const collections = { panduan, area };
