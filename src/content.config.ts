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

export const collections = { panduan };
