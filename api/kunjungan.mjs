// POST /api/kunjungan — penghitung kunjungan tanpa cookie (website DECISIONS 069, Ops DECISIONS 157).
// Tiap halaman mengirim {p: path, r: referrer, s: utm_source} lewat navigator.sendBeacon (src/layouts/Base.astro). Fungsi ini
// menambah kota/negara dari header Vercel, mengubah IP + browser jadi kode acak harian (IP tidak pernah disimpan atau
// diteruskan), lalu meneruskan ke Atapura Ops dengan LEAD_SECRET yang sudah ada di env Vercel. Robot disaring di Ops.
import { createHash } from 'node:crypto';

const OPS = 'https://atapura-ops.vercel.app/api/publik/kunjungan';

export async function POST(request) {
  const asal = request.headers.get('origin');
  if (!asal || new URL(asal).host !== new URL(request.url).host) return new Response(null, { status: 403 });
  if (!process.env.LEAD_SECRET) return new Response(null, { status: 503 });
  let isi;
  try {
    isi = JSON.parse(await request.text());
  } catch {
    return new Response(null, { status: 400 });
  }
  const ua = (request.headers.get('user-agent') ?? '').slice(0, 500);
  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim();
  const hari = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Jakarta' });
  const visitor = createHash('sha256').update(`${process.env.LEAD_SECRET}|${hari}|${ip}|${ua}`).digest('hex').slice(0, 16);
  const r = await fetch(OPS, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-atapura-secret': process.env.LEAD_SECRET },
    body: JSON.stringify({
      path: String(isi?.p ?? '').slice(0, 300),
      ref: isi?.r ? String(isi.r).slice(0, 500) : null,
      utm: isi?.s ? String(isi.s).slice(0, 100) : null,
      ua,
      city: request.headers.get('x-vercel-ip-city'),
      country: request.headers.get('x-vercel-ip-country'),
      visitor,
    }),
  });
  if (!r.ok) console.error('[kunjungan] Ops menolak:', r.status, await r.text());
  return new Response(null, { status: r.ok ? 204 : 502 });
}
