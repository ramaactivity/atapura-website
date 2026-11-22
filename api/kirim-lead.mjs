// POST /api/kirim-lead — penerus isian kalkulator ke Atapura Ops (/api/lead, docs/PASANG-LEAD-WEBSITE.md di repo Ops).
// Vercel Function di luar Astro (situs tetap statis). Kunci LEAD_SECRET hanya ada di env Vercel proyek ini, tidak pernah
// di halaman. Dipanggil dari tombol WhatsApp kalkulator (navigator.sendBeacon) hanya bila nama & nomor WA diisi.
// DECISIONS 068.

const OPS = 'https://atapura-ops.vercel.app/api/lead';
const KOLOM = ['request_id', 'nama', 'wa', 'kota', 'luas', 'merek', 'pekerjaan', 'estimasi', 'halaman', 'utm'];

export async function POST(request) {
  // Pengaman ringan dari kiriman situs lain/bot: harus dari halaman situs ini, kolom jebakan `situs` harus kosong.
  const asal = request.headers.get('origin');
  if (!asal || new URL(asal).host !== new URL(request.url).host) return Response.json({ ok: false }, { status: 403 });
  if (!process.env.LEAD_SECRET) return Response.json({ ok: false, galat: 'LEAD_SECRET belum dipasang' }, { status: 503 });
  let isi;
  try {
    isi = await request.json();
  } catch {
    return Response.json({ ok: false, galat: 'isi bukan JSON' }, { status: 400 });
  }
  if (isi?.situs) return Response.json({ ok: true });
  const r = await fetch(OPS, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-atapura-secret': process.env.LEAD_SECRET },
    body: JSON.stringify(Object.fromEntries(KOLOM.filter((k) => isi?.[k] !== undefined).map((k) => [k, isi[k]]))),
  });
  if (!r.ok) console.error('[kirim-lead] Ops menolak:', r.status, await r.clone().text());
  return new Response(await r.text(), { status: r.status, headers: { 'content-type': 'application/json' } });
}
