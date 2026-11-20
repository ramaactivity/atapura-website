// Manifest ekspor aset marketplace (website DECISIONS 059): halaman slide → berkas JPG. Dibaca tools/aset/render.mjs.
import { berkasSlide, semuaSlide } from '../../../data/aset';

export function GET() {
  return Response.json(semuaSlide.map(({ l, s }) => ({ halaman: `/internal/aset-marketplace/${l.id}/${s.no}`, berkas: berkasSlide(l, s) })));
}
