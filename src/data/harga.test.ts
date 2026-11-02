// Jalankan: node --experimental-strip-types src/data/harga.test.ts
import assert from 'node:assert/strict';
import { bagianRentang, hitungEstimasi, rupiahRingkas } from './harga.ts';

const e = hitungEstimasi(100);
// Contoh Bang Yusuf: atap 100 m² → skrup 1.200 pcs, paku bitumen 2.000 pcs.
assert.equal(e.kebutuhan.find((k) => k.nama === 'Skrup')?.jumlah, 1200);
assert.equal(e.kebutuhan.find((k) => k.nama === 'Paku bitumen')?.jumlah, 2000);
// CTI 3 m²/bundel, +10% potongan → 37 bundel; multiplek 2,98 m² +5% → 36 lembar; underlayer 10 m² +10% → 11 roll.
assert.equal(e.kebutuhan[0].jumlah, 37);
assert.equal(e.kebutuhan[1].jumlah, 36);
assert.equal(e.kebutuhan[2].jumlah, 11);
assert.ok(e.total[0] < e.total[1], 'min < max');
assert.ok(e.perM2[0] > 300_000 && e.perM2[1] < 450_000, `harga terpasang/m² wajar: ${e.perM2}`);
assert.equal(e.material[0] + e.jasa[0], e.baris.reduce((s, b) => s + b.rentang[0], 0), 'material + jasa = semua baris');
const grc = hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Membrane', flashing: 'Flashing U' });
assert.ok(grc.total[0] > e.total[0], 'GRC + membrane lebih mahal');
assert.deepEqual(e.hari, [4, 5]);
assert.equal(rupiahRingkas(31_250_000), 'Rp31,3 jt');
assert.equal(rupiahRingkas(950_000), 'Rp950 rb');
assert.deepEqual(bagianRentang(41_400_000, 53_100_000), { min: '41,4', max: '53,1', satuan: 'jt' });
console.log('harga.test ok', e.perM2, e.total);
