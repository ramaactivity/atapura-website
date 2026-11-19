// Jalankan: node --experimental-strip-types src/data/harga.test.ts
import assert from 'node:assert/strict';
import { bagianRentang, estimasiPlafon, estimasiPublik, harga, hitungEstimasi, rentangRangka, rupiahRingkas } from './harga.ts';

const e = hitungEstimasi(100);
// Rama 19 Nov: paku 35 per m², skrup 15 per lembar alas → 100 m²: paku 3.500, skrup 36 lembar × 15 = 540.
assert.equal(e.kebutuhan.find((k) => k.nama === 'Skrup')?.jumlah, 540);
assert.equal(e.kebutuhan.find((k) => k.nama === 'Paku bitumen')?.jumlah, 3500);
assert.equal(hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Underlayer', flashing: 'Flashing U' }).kebutuhan.find((k) => k.nama === 'Skrup')?.jumlah, hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Underlayer', flashing: 'Flashing U' }).kebutuhan[1].jumlah * 15, 'skrup ikut jumlah lembar alas');
// CTI 3 m²/bundel, +10% potongan → 37 bundel; multiplek 2,98 m² +5% → 36 lembar; underlayer 10 m² +10% → 11 roll.
assert.equal(e.kebutuhan[0].jumlah, 37);
assert.equal(e.kebutuhan[1].jumlah, 36);
assert.equal(e.kebutuhan[2].jumlah, 11);
// Starter: keliling 100 m² ≈ 4 × √100 = 40 m × lebar 0,125 m = 5 m² × harga genteng CTI Rp155.000 per m².
assert.equal(e.kebutuhan.find((k) => k.nama === 'Starter bitumen')?.jumlah, 5);
assert.equal(e.baris.find((b) => b.label === 'Starter bitumen')?.rentang[0], 5 * 155_000);
assert.ok(e.total[0] < e.total[1], 'min < max');
// Spek standar harus jatuh di estimasi kasar terpasang Bang Yusuf. Toleransi ±35 rb: sejak 19 Nov 2026 flashing & starter
// dihitung dari keliling, jadi batas atas terlewati di atap kecil (19 Nov, per m²): CTI 60 m² +15 rb, Maxxi 60 +29, Javabitumen
// 60 +23, Tegola 60 +32; 100 m² +6…+21; 200 m² ≤ +6. Kisaran terpasang baru menunggu Bang Yusuf — lalu kembalikan ke ±15 rb.
for (const merek of ['CTI', 'Maxxi', 'Javabitumen', 'Tegola'] as const) {
  for (const luas of [60, 100, 120, 200]) {
    const x = hitungEstimasi(luas, { merek, alas: 'Multiplek 12 mm', lapis: 'Underlayer', flashing: 'Flashing U' });
    const [lo, hi] = harga.merek[merek].terpasang;
    assert.ok(x.perM2[0] >= lo - 35_000 && x.perM2[1] <= hi + 35_000, `${merek} ${luas} m²: ${x.perM2} vs ${lo}–${hi}`);
  }
}
const rangka = hitungEstimasi(100, { merek: 'CTI', alas: 'Multiplek 12 mm', lapis: 'Underlayer', flashing: 'Flashing U', rangka: 'Hi-Steel' });
assert.equal(rangka.total[0] - e.total[0], 20_000_000, 'rangka Hi-Steel 200 rb/m² × 100 m²');
assert.deepEqual(rentangRangka, [195_000, 230_000], 'rentang rangka K-Steel–Taso');
assert.equal(e.material[0] + e.jasa[0], e.baris.reduce((s, b) => s + b.rentang[0], 0), 'material + jasa = semua baris');
const grc = hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Membrane', flashing: 'Flashing U' });
assert.ok(grc.total[0] > e.total[0], 'GRC + membrane lebih mahal');
assert.deepEqual(e.hari, [4, 5]);
const pub = estimasiPublik(100, 'Maxxi');
assert.deepEqual(pub.perM2, [380_000, 430_000]);
assert.deepEqual(pub.total, [38_000_000, 43_000_000]);
assert.deepEqual(estimasiPublik(100, 'CTI').hari, e.hari, 'durasi publik = internal');
// Victory: angka terpasang dari Rama (5 Nov), tidak dikalibrasi ke rumus internal.
assert.deepEqual(estimasiPublik(100, 'Victory').perM2, [500_000, 550_000]);
// Plafon: 40 m² Shunda 300–370 rb → 12–14,8 jt (dibulatkan 50 rb).
assert.deepEqual(estimasiPlafon(40, 'Shunda').total, [12_000_000, 14_800_000]);
assert.deepEqual(estimasiPlafon(33, 'Javafon').total, [6_600_000, 8_600_000]);
// Plafon 40 m² dengan 15–25 m²/hari → 2–3 hari kerja.
assert.deepEqual(estimasiPlafon(40, 'Shunda').hari, [2, 3]);
assert.equal(rupiahRingkas(31_250_000), 'Rp31,3 jt');
assert.equal(rupiahRingkas(950_000), 'Rp950 rb');
assert.equal(rupiahRingkas(47_600_000, 0), 'Rp48 jt');
assert.deepEqual(bagianRentang(41_400_000, 53_100_000), { min: '41,4', max: '53,1', satuan: 'jt' });
console.log('harga.test ok', e.perM2, e.total);
