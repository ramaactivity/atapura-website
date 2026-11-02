// Jalankan: node --experimental-strip-types src/data/harga.test.ts
import assert from 'node:assert/strict';
import { hitungEstimasi, rupiahRingkas } from './harga.ts';

const e = hitungEstimasi(100, 'CTI');
assert.equal(e.baris.length, 4);
assert.ok(e.total[0] < e.total[1], 'min < max');
assert.equal(e.total[0], e.baris.reduce((s, b) => s + b.rentang[0], 0), 'total = jumlah baris');
// Genteng CTI 145rb × 100 m² × 1,1 = 15,95 jt → dibulatkan ke 50rb terdekat = 15,95 jt
assert.equal(e.baris[0].rentang[0], 15_950_000);
assert.deepEqual(e.hari, [4, 5]);
assert.ok(hitungEstimasi(200, 'CTI').total[0] > e.total[0], 'luas lebih besar = lebih mahal');
assert.equal(rupiahRingkas(31_250_000), 'Rp31,3 jt');
assert.equal(rupiahRingkas(950_000), 'Rp950 rb');
console.log('harga.test ok');
