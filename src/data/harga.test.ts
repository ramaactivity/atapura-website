// Jalankan: node --experimental-strip-types src/data/harga.test.ts
import assert from 'node:assert/strict';
import { bagianRentang, estimasiPlafon, estimasiPublik, harga, hitungEstimasi, kisaranRupiah, rentangRangka, rupiahRingkas } from './harga.ts';
import ops from './ops.json' with { type: 'json' };

// Tes ini dijalankan workflow sinkron SETELAH harga baru ditarik dari Ops (website DECISIONS 100). Angka yang berasal dari
// Ops (harga, faktor, produktivitas) dihitung dari ops.json, bukan rupiah tetap — dulu perubahan harga wajar di Ops membuat
// tes gagal dan sinkron berhenti diam-diam. Rupiah tetap hanya untuk angka pemasaran milik website (kisaran terpasang).
const A = ops.angka;
const V = ops.varian as Record<string, { harga: number; hargaMaks: number | null }>;
const bulat = (n: number, ke: number) => Math.round(n / ke) * ke;
const ceil = (n: number) => Math.ceil(n - 1e-9);

const e = hitungEstimasi(100);
// Paku per m² & skrup per lembar alas dari Ops (Rama 19 Nov: 35 & 15).
assert.equal(e.kebutuhan.find((k) => k.nama === 'Skrup')?.jumlah, e.kebutuhan[1].jumlah * A.skrupPerLembar);
assert.equal(e.kebutuhan.find((k) => k.nama === 'Paku bitumen')?.jumlah, bulat(100 * A.pakuPerM2, 100));
assert.equal(hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Underlayer', flashing: 'Flashing U' }).kebutuhan.find((k) => k.nama === 'Skrup')?.jumlah, hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Underlayer', flashing: 'Flashing U' }).kebutuhan[1].jumlah * A.skrupPerLembar, 'skrup ikut jumlah lembar alas');
// Bundel = luas × (1 + waste) ÷ isi bundel; lembar alas × faktor alas; roll × faktor lapis kedap (semua Angka Bisnis Ops).
assert.equal(e.kebutuhan[0].jumlah, ceil((100 * (1 + A.wastePct / 100)) / harga.merek.CTI.m2PerBundel));
assert.equal(e.kebutuhan[1].jumlah, ceil((100 * A.faktorAlas) / harga.alas['Multiplek 12 mm'].m2));
assert.equal(e.kebutuhan[2].jumlah, ceil((100 * A.faktorLapisKedap) / harga.lapisKedap.Underlayer.m2));
// Dengan angka bawaan Ops (waste 10%, alas ×1,05, lapis ×1,1): 37 bundel, 36 lembar, 11 roll — dicek hanya bila angkanya bawaan.
if (A.wastePct === 10 && A.faktorAlas === 1.05 && A.faktorLapisKedap === 1.1) assert.deepEqual([e.kebutuhan[0].jumlah, e.kebutuhan[1].jumlah, e.kebutuhan[2].jumlah], [37, 36, 11]);
// Starter: keliling 100 m² ≈ 4 × √100 = 40 m × lebar starter Ops (0,125 m → 5 m²) × harga genteng CTI per m².
const starter = Math.round(40 * A.lebarStarterM * 100) / 100;
assert.equal(e.kebutuhan.find((k) => k.nama === 'Starter bitumen')?.jumlah, starter);
assert.equal(e.baris.find((b) => b.label === 'Starter bitumen')?.rentang[0], Math.round(starter * V['GT-CTI'].harga));
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
assert.equal(rangka.baris.find((b) => b.label.startsWith('Rangka'))?.rentang[0], 100 * V['RK-HISTEEL'].harga, 'rangka Hi-Steel × 100 m²');
const hargaRangka = ['RK-TASO', 'RK-HISTEEL', 'RK-KSTEEL'].map((k) => V[k].harga);
assert.deepEqual(rentangRangka, [Math.min(...hargaRangka), Math.max(...hargaRangka)], 'rentang rangka = harga rangka Ops');
assert.equal(e.material[0] + e.jasa[0], e.baris.reduce((s, b) => s + b.rentang[0], 0), 'material + jasa = semua baris');
const grc = hitungEstimasi(100, { merek: 'CTI', alas: 'GRC 9 mm', lapis: 'Membrane', flashing: 'Flashing U' });
assert.ok(grc.total[0] > e.total[0], 'GRC + membrane lebih mahal');
assert.deepEqual(e.hari, [ceil(100 / A.m2PerHari[1]) + A.tambahanHari, ceil(100 / A.m2PerHari[0]) + A.tambahanHari]);
const pub = estimasiPublik(100, 'Maxxi');
assert.deepEqual(pub.perM2, [380_000, 430_000]);
assert.deepEqual(pub.total, [38_000_000, 43_000_000]);
assert.deepEqual(estimasiPublik(100, 'CTI').hari, e.hari, 'durasi publik = internal');
// Victory: angka terpasang dari Rama (5 Nov), tidak dikalibrasi ke rumus internal.
assert.deepEqual(estimasiPublik(100, 'Victory').perM2, [500_000, 550_000]);
// Plafon: luas × harga terpasang Ops (dibulatkan 50 rb); hari dari produktivitas plafon Ops.
for (const [merek, kode, luas] of [['Shunda', 'PL-SHUNDA', 40], ['Javafon', 'PL-JAVAFON', 33]] as const)
  assert.deepEqual(estimasiPlafon(luas, merek).total, [bulat(luas * V[kode].harga, 50_000), bulat(luas * (V[kode].hargaMaks ?? V[kode].harga), 50_000)], merek);
assert.deepEqual(estimasiPlafon(40, 'Shunda').hari, [Math.max(1, ceil(40 / A.m2PerHariPlafon[1])), Math.max(1, ceil(40 / A.m2PerHariPlafon[0]))]);
assert.equal(rupiahRingkas(31_250_000), 'Rp31,3 jt');
assert.equal(rupiahRingkas(950_000), 'Rp950 rb');
assert.equal(rupiahRingkas(47_600_000, 0), 'Rp48 jt');
assert.deepEqual(bagianRentang(41_400_000, 53_100_000), { min: '41,4', max: '53,1', satuan: 'jt' });
// Seri dengan isi bundel/harga sendiri (Ops DECISIONS 134–135): 100 m² + 10% = 110 m².
const spek = { alas: 'Multiplek 12 mm', lapis: 'Underlayer', flashing: 'Flashing U' } as const;
const ct6 = hitungEstimasi(100, { merek: 'CTI', seri: 'CT6', ...spek });
assert.equal(ct6.kebutuhan[0].jumlah, 48, 'CT6 2,32 m²/bundel → 48 bundel, bukan 37');
assert.equal(ct6.kebutuhan[0].nama, 'Genteng CTI CT6');
assert.equal(hitungEstimasi(100, { merek: 'CTI', seri: 'CT3', ...spek }).kebutuhan[0].jumlah, 37);
assert.equal(hitungEstimasi(100, { merek: 'Tegola', seri: 'Premium Mosaik', ...spek }).kebutuhan[0].jumlah, 32, 'Mosaik 3,45 m²');
assert.equal(hitungEstimasi(100, { merek: 'Maxxi', seri: 'Promaxxi', ...spek }).kebutuhan[0].jumlah, 48, 'Promaxxi 2,32 m² (Ops 0044)');
const twoTone = hitungEstimasi(100, { merek: 'Victory', seri: 'Two Tone', ...spek });
assert.equal(twoTone.baris[0].rentang[0], twoTone.kebutuhan[0].jumlah * harga.merek.Victory.m2PerBundel * V['GT-VICTORY-2T'].harga, 'Two Tone pakai harga Two Tone');
assert.throws(() => hitungEstimasi(100, { merek: 'CTI', seri: 'CT9', ...spek }), /CT9/);
// Satu format rentang untuk kartu beranda, kalkulator, dan daftar harga (DECISIONS 071).
assert.equal(kisaranRupiah([48_000_000, 54_000_000]), 'Rp48–54 jt');
assert.equal(kisaranRupiah([380_000, 430_000]), 'Rp380–430 rb');
assert.equal(kisaranRupiah([800_000, 1_200_000], 1), 'Rp800 rb–1,2 jt');
assert.equal(kisaranRupiah([45_600_000, 45_600_000], 1), 'Rp45,6 jt');
console.log('harga.test ok', e.perM2, e.total);
