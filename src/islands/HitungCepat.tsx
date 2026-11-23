import { useState } from 'preact/hooks';
import { estimasiPublik, harga, kisaranRupiah, type Merek } from '../data/harga';
import './hitung-akal.css';
import './hitung-cepat.css';

// Kartu hitung cepat di beranda (DECISIONS 071): satu isian luas, kelima merek langsung terhitung.
// Rumus sama dengan kalkulator penuh di /hitung (estimasiPublik), jadi angkanya tidak mungkin beda.
const MIN = 10;
const MAX = 400;
const LANGKAH = 5;
const MEREK = (Object.keys(harga.merek) as Merek[]).sort((a, b) => harga.merek[a].terpasang[0] - harga.merek[b].terpasang[0]);
const jepit = (n: number) => Math.min(MAX, Math.max(MIN, Math.round(n)));

export default function HitungCepat({ awal = 120 }: { awal?: number }) {
  const [luas, setLuas] = useState(awal);
  const [teks, setTeks] = useState(String(awal));
  const atur = (n: number) => { const v = jepit(n); setLuas(v); setTeks(String(v)); };
  const hari = estimasiPublik(luas, MEREK[0]).hari;

  return (
    <div class="hc">
      <div class="hc-atur">
        <div class="hc-baris">
          <label for="hc-luas" class="hc-label">Luas atap</label>
          <div class="stepper">
            <button type="button" class="stepper-btn" aria-label="Kurangi 5 m²" onClick={() => atur(luas - LANGKAH)} disabled={luas <= MIN}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10" /></svg>
            </button>
            <span class="stepper-isi">
              <input
                id="hc-luas"
                class="stepper-input angka"
                inputMode="numeric"
                autoComplete="off"
                value={teks}
                onInput={(e) => {
                  const t = (e.currentTarget as HTMLInputElement).value.replace(/\D/g, '').slice(0, 3);
                  setTeks(t);
                  if (Number(t) >= MIN) setLuas(jepit(Number(t)));
                }}
                onBlur={() => atur(Number(teks) || MIN)}
              />
              <span class="stepper-satuan">m²</span>
            </span>
            <button type="button" class="stepper-btn" aria-label="Tambah 5 m²" onClick={() => atur(luas + LANGKAH)} disabled={luas >= MAX}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3v10" /></svg>
            </button>
          </div>
        </div>
        <p class="hc-bantu">Belum tahu luasnya? Untuk atap miring, kira-kira luas lantai teratas × 1,3. <a href="/hitung#luas-lantai">Hitung dari luas lantai</a></p>
      </div>

      <div class="hc-slip">
        <p class="hc-slip-judul" aria-live="polite">Terpasang untuk <span class="angka">{luas}</span> m², Jabodetabek</p>
        <ul class="hc-daftar">
          {MEREK.map((m) => {
            const rp = kisaranRupiah(estimasiPublik(luas, m).total);
            return (
              <li>
                <a href={`/hitung?luas=${luas}&merek=${encodeURIComponent(m)}#hasil`} aria-label={`${m}, kelas ${harga.merek[m].kelas.toLowerCase()}: ${rp}. Lihat rincian`}>
                  <span class="hc-merek">{m}<small>kelas {harga.merek[m].kelas.toLowerCase()}</small></span>
                  <span class="hc-titik" aria-hidden="true" />
                  <span class="hc-rp angka">{rp}</span>
                  <svg class="hc-panah" viewBox="0 0 20 20" aria-hidden="true"><path d="m8 5 5 5-5 5" /></svg>
                </a>
              </li>
            );
          })}
        </ul>
        <p class="hc-kaki">±<span class="angka">{hari[0]}–{hari[1]}</span> hari kerja. Belum termasuk rangka baru bila perlu diganti.</p>
        <a class="pill pill-tunas hc-cta" href={`/hitung?luas=${luas}#kalkulator`}>Lihat rincian lengkap</a>
      </div>
    </div>
  );
}
