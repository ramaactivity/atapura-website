import { useEffect, useRef, useState } from 'preact/hooks';
import { harga, hitungEstimasi, rupiahRingkas, type Merek } from '../data/harga';
import { waLink } from '../data/bisnis';
import './hitung-akal.css';

const MIN = 20;
const MAX = 400;
const LANGKAH = 5;
const MEREK = Object.keys(harga.merek) as Merek[];

const jepit = (n: number) => Math.min(MAX, Math.max(MIN, Math.round(n)));

/** Angka bergulir ke nilai baru; langsung lompat kalau pengguna minta gerak dikurangi. */
function useGulir(target: number) {
  const [nilai, setNilai] = useState(target);
  const dari = useRef(target);
  useEffect(() => {
    const awal = dari.current;
    if (awal === target || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dari.current = target;
      setNilai(target);
      return;
    }
    const t0 = performance.now();
    let id = 0;
    const jalan = (t: number) => {
      const p = Math.min(1, (t - t0) / 520);
      const v = awal + (target - awal) * (1 - Math.pow(1 - p, 4));
      dari.current = v;
      setNilai(v);
      if (p < 1) id = requestAnimationFrame(jalan);
    };
    id = requestAnimationFrame(jalan);
    return () => cancelAnimationFrame(id);
  }, [target]);
  return nilai;
}

export default function HitungAkal({ awal = 100, sumber = 'beranda' }: { awal?: number; sumber?: string }) {
  const [luas, setLuas] = useState(awal);
  const [teksLuas, setTeksLuas] = useState(String(awal));
  const [merek, setMerek] = useState<Merek>('CTI');
  const [membuka, setMembuka] = useState(false);
  const track = useRef<HTMLDivElement>(null);

  const est = hitungEstimasi(luas, merek);
  const minTampil = useGulir(est.total[0]);
  const maxTampil = useGulir(est.total[1]);

  const atur = (n: number) => {
    const v = jepit(n);
    setLuas(v);
    setTeksLuas(String(v));
  };

  const dariPointer = (clientX: number) => {
    const r = track.current!.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    atur(Math.round((MIN + p * (MAX - MIN)) / LANGKAH) * LANGKAH);
  };

  const onPointerDown = (e: PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dariPointer(e.clientX);
  };
  const onPointerMove = (e: PointerEvent) => {
    if ((e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)) dariPointer(e.clientX);
  };
  const onSliderKey = (e: KeyboardEvent) => {
    const peta: Record<string, number> = {
      ArrowRight: LANGKAH, ArrowUp: LANGKAH, ArrowLeft: -LANGKAH, ArrowDown: -LANGKAH,
      PageUp: 50, PageDown: -50,
    };
    if (e.key in peta) atur(luas + peta[e.key]);
    else if (e.key === 'Home') atur(MIN);
    else if (e.key === 'End') atur(MAX);
    else return;
    e.preventDefault();
  };

  const persen = ((luas - MIN) / (MAX - MIN)) * 100;
  const rentang = `${rupiahRingkas(est.total[0])} – ${rupiahRingkas(est.total[1])}`;
  const pesan = [
    'Halo Atapura, saya mau tanya pemasangan atap bitumen.',
    `Luas atap: ${luas} m²`,
    `Merek: ${merek}`,
    `Estimasi dari website: ${rentang}${harga.contoh ? ' (harga contoh, belum harga resmi)' : ''}`,
    'Lokasi rumah: ',
    `(dari ${sumber})`,
  ].join('\n');

  return (
    <div class="hitung">
      <div class="hitung-kepala">
        <h2 id="hitung-judul" class="hitung-judul">Hitung AKAL</h2>
        {harga.contoh && <span class="contoh">Harga contoh</span>}
      </div>

      <div class="hasil" aria-live="polite" aria-atomic="true">
        <p class="hasil-label">Perkiraan biaya total</p>
        <p class="hasil-angka angka">
          <span class="sr-only">{rentang}</span>
          <span aria-hidden="true">
            {rupiahRingkas(minTampil)}<span class="hasil-sd"> – </span>{rupiahRingkas(maxTampil)}
          </span>
        </p>
        <p class="hasil-durasi angka">
          {est.hari[0]}–{est.hari[1]} hari kerja untuk {luas} m²
        </p>
      </div>

      <div class="kontrol">
        <div class="kontrol-baris">
          <label for="luas-teks" class="kontrol-label">Luas atap</label>
          <div class="stepper">
            <button type="button" class="stepper-btn" aria-label="Kurangi 5 m²" onClick={() => atur(luas - LANGKAH)} disabled={luas <= MIN}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10" /></svg>
            </button>
            <span class="stepper-isi">
              <input
                id="luas-teks"
                class="stepper-input angka"
                inputMode="numeric"
                autoComplete="off"
                value={teksLuas}
                onInput={(e) => {
                  const t = (e.currentTarget as HTMLInputElement).value.replace(/\D/g, '').slice(0, 3);
                  setTeksLuas(t);
                  if (Number(t) >= MIN) setLuas(jepit(Number(t)));
                }}
                onBlur={() => atur(Number(teksLuas) || MIN)}
              />
              <span class="stepper-satuan">m²</span>
            </span>
            <button type="button" class="stepper-btn" aria-label="Tambah 5 m²" onClick={() => atur(luas + LANGKAH)} disabled={luas >= MAX}>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3v10" /></svg>
            </button>
          </div>
        </div>
        <div
          ref={track}
          class="slider"
          role="slider"
          tabIndex={0}
          aria-label="Luas atap dalam meter persegi"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={luas}
          aria-valuetext={`${luas} meter persegi`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onKeyDown={onSliderKey}
          style={{ '--p': `${persen}%` }}
        >
          <span class="slider-isi" />
          <span class="slider-jempol" />
        </div>
        <p class="kontrol-bantu">Belum tahu luasnya? Untuk atap miring, kira-kira luas lantai teratas × 1,3.</p>

        <div class="kontrol-baris kontrol-baris-merek">
          <span id="merek-label" class="kontrol-label">Merek</span>
          <div class="segmen" role="radiogroup" aria-labelledby="merek-label">
            {MEREK.map((m) => (
              <button
                type="button"
                role="radio"
                aria-checked={merek === m}
                tabIndex={merek === m ? 0 : -1}
                class="segmen-btn"
                onClick={() => setMerek(m)}
                onKeyDown={(e) => {
                  const i = MEREK.indexOf(m);
                  const arah = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
                  if (!arah) return;
                  e.preventDefault();
                  const n = MEREK[(i + arah + MEREK.length) % MEREK.length];
                  setMerek(n);
                  ((e.currentTarget as HTMLElement).parentElement!.children[MEREK.indexOf(n)] as HTMLElement).focus();
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      <dl class="rincian angka">
        {est.baris.map((b) => (
          <div class="rincian-baris">
            <dt>{b.label}</dt>
            <dd>{rupiahRingkas(b.rentang[0])}–{rupiahRingkas(b.rentang[1]).replace('Rp', '')}</dd>
          </div>
        ))}
      </dl>

      <a
        class="pill pill-tunas hitung-cta"
        href={waLink(pesan)}
        target="_blank"
        rel="noopener"
        data-wa="hitung"
        onClick={() => { setMembuka(true); setTimeout(() => setMembuka(false), 2500); }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" class="ikon-wa"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" /></svg>
        {membuka ? 'Membuka WhatsApp…' : 'Kirim estimasi ke WhatsApp'}
      </a>
      <p class="hitung-kaki">
        Survey gratis sebelum harga final. Pembayaran hanya ke rekening atas nama perusahaan.
      </p>
    </div>
  );
}
