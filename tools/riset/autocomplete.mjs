// Riset keyword borongan bulanan (DECISIONS 065): frasa yang benar-benar diketik orang di Google (autocomplete, tanpa volume).
// Pakai: node tools/riset/autocomplete.mjs "atap bitumen" "genteng aspal" ... > data/riset/autocomplete-YYYY-MM.csv
// Tiap kata kunci awal ditanya polos + diikuti a–z, hl=id gl=id, jeda 300 ms supaya tidak membebani. Keluaran CSV: seed,frasa.
const seeds = process.argv.slice(2);
if (!seeds.length) throw new Error('beri minimal satu kata kunci awal');
const tidur = (ms) => new Promise((r) => setTimeout(r, ms));

async function saran(q) {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=id&gl=id&q=${encodeURIComponent(q)}`;
  for (let coba = 0; coba < 3; coba++) {
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
    if (res.ok) return (await res.json())[1] ?? [];
    await tidur(2000 * (coba + 1));
  }
  throw new Error(`autocomplete gagal untuk "${q}"`); // gagal keras, jangan jadi daftar kosong diam-diam
}

const lihat = new Set();
console.log('seed,frasa');
for (const s of seeds) {
  for (const akhir of ['', ...'abcdefghijklmnopqrstuvwxyz']) {
    for (const f of await saran(akhir ? `${s} ${akhir}` : s)) {
      if (lihat.has(f)) continue;
      lihat.add(f);
      console.log(`"${s}","${f.replaceAll('"', '')}"`);
    }
    await tidur(300);
  }
}
console.error(`${lihat.size} frasa unik dari ${seeds.length} kata kunci awal`);
