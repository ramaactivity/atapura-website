// Jalankan: node --experimental-strip-types src/data/harga.test.ts
import assert from 'node:assert/strict';
import { bagianRentang, estimasiPublik, harga, hitungEstimasi, rupiahRingkas } from './harga.ts';

const e = hitungEstimasi(100);
// Contoh Bang Yusuf: atap 100 m² → skrup 1.200 pcs, paku bitumen 2.000 pcs.
assert.equal(e.kebutuhan.find((k) => k.nama === 'Skrup')?.jumlah, 1200);
assert.equal(e.kebutuhan.find((k) => k.nama === 'Paku bitumen')?.jumlah, 2000);
// CTI 3 m²/bundel, +10% potongan → 37 bundel; multiplek 2,98 m² +5% → 36 lembar; underlayer 10 m² +10% → 11 roll.
assert.equal(e.kebutuhan[0].jumlah, 37);
assert.equal(e.kebutuhan[1].jumlah, 36);
assert.equal(e.kebutuhan[2].jumlah, 11);
assert.ok(e.total[0] < e.total[1], 'min < max');
// Spek standar harus jatuh di estimasi kasar terpasang Bang Yusuf (toleransi ±15 rb untuk pembulatan bundel).
for (const merek of ['CTI', 'Maxxi', 'Javabitumen'] as const) {
  for (const luas of [60, 100, 120, 200]) {
    const x = hitungEstimasi(luas, { merek, alas: 'Multiplek 12 mm', lapis: 'Underlayer', flashing: 'Flashing U' });
    const [lo, hi] = harga.merek[merek].terpasang;
    assert.ok(x.perM2[0] >= lo - 15_000 && x.perM2[1] <= hi + 15_000, `${merek} ${luas} m²: ${x.perM2} vs ${lo}–${hi}`);
  }
}
const rangka = hitungEstimasi(100, { merek: 'CTI', alas: 'Multiplek 12 mm', lapis: 'Underlayer', flashing: 'Flashing U', rangka: true });
assert.equal(rangka.total[0] - e.total[0], 22_000_000, 'rangka 220 rb/m² × 100 m²');
assert.equal(e.material[0] + e.jasa[0], e.baris.reduce((s, b) => s + b.rentang[0], 0), 'material + jasa = semua baris');
const grc = hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Membrane', flashing: 'Flashing U' });
assert.ok(grc.total[0] > e.total[0], 'GRC + membrane lebih mahal');
assert.deepEqual(e.hari, [4, 5]);
const pub = estimasiPublik(100, 'Maxxi');
assert.deepEqual(pub.perM2, [380_000, 430_000]);
assert.deepEqual(pub.total, [38_000_000, 43_000_000]);
assert.deepEqual(estimasiPublik(100, 'CTI').hari, e.hari, 'durasi publik = internal');
assert.equal(rupiahRingkas(31_250_000), 'Rp31,3 jt');
assert.equal(rupiahRingkas(950_000), 'Rp950 rb');
assert.equal(rupiahRingkas(47_600_000, 0), 'Rp48 jt');
assert.deepEqual(bagianRentang(41_400_000, 53_100_000), { min: '41,4', max: '53,1', satuan: 'jt' });
console.log('harga.test ok', e.perM2, e.total);
