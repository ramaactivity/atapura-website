import type { APIRoute } from 'astro';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { berkasSlide, slideListing } from '../../../data/aset';
import { harga, seriGenteng } from '../../../data/harga';
import { listing } from '../../../data/listing';
import { produk } from '../../../data/produk';

// Kit listing untuk Atapura Ops → Harga marketplace (Ops DECISIONS 250): teks listing + gambar yang sudah diekspor + kode varian
// Ops yang harganya dipakai listing itu. Ops menempelkan harga tayang & menyajikan semuanya siap unggah. Tanpa harga/modal.
const KODE_AKSESORIS: Record<string, string[]> = {
  multiplek: ['AL-MULTIPLEK-12'],
  grc: ['AL-GRC-9'],
  underlayer: ['LK-UNDERLAYER'],
  membrane: ['LK-MEMBRANE'],
  'flashing-u': ['FL-U'],
  'flashing-z': ['FL-Z'],
  paku: ['PAKU'],
  skrup: ['SKRUP'],
  'aluminium-foil': ['FOIL-SINGLE', 'FOIL-DOUBLE'],
};

/** Seri tanpa entri persis (mis. "Eco Roof" = Rectangular/Traditional/Hexagonal) memakai semua seri berawalan namanya. */
function kodeListing(l: (typeof listing)[number]): string[] {
  if (l.ref.jenis === 'aksesoris') return KODE_AKSESORIS[l.ref.slug] ?? [];
  if (l.ref.jenis === 'jasa') return ['JASA-PASANG'];
  const { produk: slug, seri } = l.ref;
  const merek = produk.find((p) => p.slug === slug)?.harga;
  if (!merek) return [];
  const peta = seriGenteng[merek];
  if (!peta) return [harga.merek[merek].kode];
  if (!seri) return [];
  return Object.entries(peta)
    .filter(([k]) => k === seri || k.startsWith(`${seri} `))
    .map(([, v]) => v.kode);
}

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      listing: listing.map((l) => ({
        ...l,
        kode: kodeListing(l),
        gambar: slideListing(l)
          .map((s) => ({ no: s.no, nama: s.nama, url: berkasSlide(l, s) }))
          .filter((g) => existsSync(join(process.cwd(), 'public', g.url)))
          .sort((a, b) => a.no - b.no),
      })),
    }),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
