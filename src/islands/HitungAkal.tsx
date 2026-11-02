import { useEffect, useRef, useState } from 'preact/hooks';
import { bagianRentang, harga, hitungEstimasi, rupiahRingkas, type Alas, type Flashing, type LapisKedap, type Merek } from '../data/harga';
import { bisnis, dalamJabodetabek, waLink } from '../data/bisnis';
import './hitung-akal.css';

const MIN = 20;
const MAX = 400;
const LANGKAH = 5;
const MEREK = Object.keys(harga.merek) as Merek[];
const ALAS = Object.keys(harga.alas) as Alas[];
const LAPIS = Object.keys(harga.lapisKedap) as LapisKedap[];
const FLASHING = Object.keys(harga.flashing) as Flashing[];
const angka = (n: number) => n.toLocaleString('id-ID');
const termin = bisnis.pembayaran.jasa.map((t) => t.persen).join('/');
const PEKERJAAN = ['Pasang baru', 'Ganti atap lama', 'Perbaikan'] as const;
type Pekerjaan = (typeof PEKERJAAN)[number];

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

/** Kelompok tombol pilihan tunggal (pengganti radio bawaan browser), panah kiri/kanan berpindah pilihan. */
function Pilihan<T extends string>({ label, opsi, nilai, ubah }: { label: string; opsi: readonly T[]; nilai: T; ubah: (v: T) => void }) {
  return (
    <div class="segmen" role="radiogroup" aria-label={label}>
      {opsi.map((o) => (
        <button
          type="button"
          role="radio"
          aria-checked={nilai === o}
          tabIndex={nilai === o ? 0 : -1}
          class="segmen-btn"
          onClick={() => ubah(o)}
          onKeyDown={(e) => {
            const i = opsi.indexOf(o);
            const arah = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
            if (!arah) return;
            e.preventDefault();
            const n = opsi[(i + arah + opsi.length) % opsi.length];
            ubah(n);
            ((e.currentTarget as HTMLElement).parentElement!.children[opsi.indexOf(n)] as HTMLElement).focus();
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function HitungAkal({ awal = 100, sumber = 'beranda' }: { awal?: number; sumber?: string }) {
  const [luas, setLuas] = useState(awal);
  const [teksLuas, setTeksLuas] = useState(String(awal));
  const [merek, setMerek] = useState<Merek>('CTI');
  const [alas, setAlas] = useState<Alas>('Multiplek 12 mm');
  const [lapis, setLapis] = useState<LapisKedap>('Underlayer');
  const [flashing, setFlashing] = useState<Flashing>('Flashing U');
  const [pekerjaan, setPekerjaan] = useState<Pekerjaan>('Pasang baru');
  const [kota, setKota] = useState('');
  const [membuka, setMembuka] = useState(false);
  const track = useRef<HTMLDivElement>(null);

  const est = hitungEstimasi(luas, { merek, alas, lapis, flashing });
  const minTampil = useGulir(est.perM2[0]);
  const maxTampil = useGulir(est.perM2[1]);
  const jabo = dalamJabodetabek(kota);

  const atur = (n: number) => {
    const v = jepit(n);
    setLuas(v);
    setTeksLuas(String(v));
  };

  // Kolom luas di hero mengirim angkanya ke sini.
  useEffect(() => {
    const dengar = (e: Event) => atur(Number((e as CustomEvent<number>).detail) || awal);
    const dengarMerek = (e: Event) => { const m = (e as CustomEvent<string>).detail as Merek; if (MEREK.includes(m)) setMerek(m); };
    addEventListener('atapura:luas', dengar);
    addEventListener('atapura:merek', dengarMerek);
    return () => { removeEventListener('atapura:luas', dengar); removeEventListener('atapura:merek', dengarMerek); };
  }, []);

  const dariPointer = (clientX: number) => {
    const r = track.current!.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    atur(Math.round((MIN + p * (MAX - MIN)) / LANGKAH) * LANGKAH);
  };
  const onSliderKey = (e: KeyboardEvent) => {
    const peta: Record<string, number> = { ArrowRight: LANGKAH, ArrowUp: LANGKAH, ArrowLeft: -LANGKAH, ArrowDown: -LANGKAH, PageUp: 50, PageDown: -50 };
    if (e.key in peta) atur(luas + peta[e.key]);
    else if (e.key === 'Home') atur(MIN);
    else if (e.key === 'End') atur(MAX);
    else return;
    e.preventDefault();
  };

  const persen = ((luas - MIN) / (MAX - MIN)) * 100;
  const rentang = `${rupiahRingkas(est.total[0])} – ${rupiahRingkas(est.total[1])}`;
  const perM2 = `${rupiahRingkas(est.perM2[0])} – ${rupiahRingkas(est.perM2[1])} per m²`;
  const pesan = [
    'Halo Atapura, saya mau tanya pemasangan atap bitumen.',
    `Pekerjaan: ${pekerjaan}`,
    `Luas atap: ${luas} m²`,
    `Spek: ${merek}, ${alas}, ${harga.lapisKedap[lapis].nama}, ${flashing}`,
    `Kebutuhan: ${est.kebutuhan.map((k) => `${k.nama} ${angka(k.jumlah)} ${k.satuan}`).join('; ')}`,
    `Lokasi: ${kota.trim() || '(belum diisi)'}`,
    `Estimasi terpasang: ${perM2} (total ${rentang})${harga.contoh ? ', harga acuan, final setelah survey' : ''}`,
    `(dari ${sumber})`,
  ].join('\n');

  return (
    <div class="ha">
      <ol class="ha-langkah">
        <li>
          <span class="ha-no angka">01</span>
          <div class="ha-isi">
            <div class="ha-baris">
              <label for="luas-teks" class="ha-label">Luas atap</label>
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
              onPointerDown={(e) => { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); dariPointer(e.clientX); }}
              onPointerMove={(e) => { if ((e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)) dariPointer(e.clientX); }}
              onKeyDown={onSliderKey}
              style={{ '--p': `${persen}%` }}
            >
              <span class="slider-isi" />
              <span class="slider-jempol" />
            </div>
            <p class="ha-bantu">Belum tahu luasnya? Untuk atap miring, kira-kira luas lantai teratas × 1,3.</p>
          </div>
        </li>
        <li>
          <span class="ha-no angka">02</span>
          <div class="ha-isi">
            <p class="ha-label">Merek</p>
            <Pilihan label="Merek" opsi={MEREK} nilai={merek} ubah={setMerek} />
          </div>
        </li>
        <li>
          <span class="ha-no angka">03</span>
          <div class="ha-isi">
            <p class="ha-label">Spek pendukung</p>
            <div class="ha-spek">
              <div class="ha-spek-baris"><span class="ha-spek-nama">Alas</span><Pilihan label="Alas atap" opsi={ALAS} nilai={alas} ubah={setAlas} /></div>
              <div class="ha-spek-baris"><span class="ha-spek-nama">Lapis kedap air</span><Pilihan label="Lapis kedap air" opsi={LAPIS} nilai={lapis} ubah={setLapis} /></div>
              <div class="ha-spek-baris"><span class="ha-spek-nama">Flashing</span><Pilihan label="Flashing" opsi={FLASHING} nilai={flashing} ubah={setFlashing} /></div>
            </div>
          </div>
        </li>
        <li>
          <span class="ha-no angka">04</span>
          <div class="ha-isi">
            <p class="ha-label">Pekerjaan</p>
            <Pilihan label="Jenis pekerjaan" opsi={PEKERJAAN} nilai={pekerjaan} ubah={setPekerjaan} />
          </div>
        </li>
        <li>
          <span class="ha-no angka">05</span>
          <div class="ha-isi">
            <label for="ha-kota" class="ha-label">Kota</label>
            <input id="ha-kota" class="ha-teks" placeholder="Contoh: Tangerang Selatan" autoComplete="address-level2" value={kota} onInput={(e) => setKota((e.currentTarget as HTMLInputElement).value)} />
            {jabo === true && <p class="ha-bantu">Survey gratis untuk lokasi di Jabodetabek.</p>}
            {jabo === false && <p class="ha-bantu ha-luar">Di luar Jabodetabek: {bisnis.survey.luar.toLowerCase()}.</p>}
          </div>
        </li>
      </ol>

      <div class="ha-slip" data-nosnippet>
        <div class="ha-slip-kepala">
          <p class="ha-label-kecil">Kebutuhan material untuk {luas} m²</p>
          {harga.contoh && <span class="contoh">Harga acuan</span>}
        </div>
        <ul class="ha-butuh">
          {est.kebutuhan.map((k) => (
            <li><span>{k.nama}</span><b class="angka">{angka(k.jumlah)} <small>{k.satuan}</small></b></li>
          ))}
        </ul>

        <p class="ha-label-kecil ha-label-harga">Estimasi harga terpasang</p>
        <p class="hasil-angka" aria-live="polite" aria-atomic="true">
          <span class="sr-only">{perM2}</span>
          {(() => {
            const b = bagianRentang(minTampil, maxTampil);
            return (
              <span aria-hidden="true">
                <span class="hasil-rp">Rp</span>{b.min}<span class="hasil-sd">–</span>{b.max}<span class="hasil-satuan">{b.satuan === 'jt' ? 'juta' : 'ribu'} / m²</span>
              </span>
            );
          })()}
        </p>
        <p class="hasil-durasi angka">Total {rentang} · {est.hari[0]}–{est.hari[1]} hari kerja</p>
        {pekerjaan === 'Perbaikan' && (
          <p class="ha-catatan">Untuk perbaikan, biaya bergantung pada sumber bocor yang ditemukan saat survey. Angka di atas adalah biaya penggantian penuh sebagai batas atas.</p>
        )}
        <dl class="ha-bayar">
          <div><dt>Material</dt><dd><b class="angka">{rupiahRingkas(est.material[0])}–{rupiahRingkas(est.material[1]).replace('Rp', '')}</b> dibayar sebelum dikirim</dd></div>
          <div><dt>Jasa pasang</dt><dd><b class="angka">{rupiahRingkas(est.jasa[0])}–{rupiahRingkas(est.jasa[1]).replace('Rp', '')}</b> termin {termin}</dd></div>
        </dl>
        <details class="ha-rinci">
          <summary>Rincian biaya per item</summary>
          <dl class="rincian">
            {est.baris.map((b) => (
              <div class="rincian-baris">
                <dt>{b.label}</dt>
                <dd>{b.rentang[0] === b.rentang[1] ? rupiahRingkas(b.rentang[0]) : `${rupiahRingkas(b.rentang[0])}–${rupiahRingkas(b.rentang[1]).replace('Rp', '')}`}</dd>
              </div>
            ))}
          </dl>
        </details>
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
        <p class="hitung-kaki">Survey gratis di Jabodetabek sebelum harga final. Bayar hanya ke rekening atas nama perusahaan.</p>
      </div>
    </div>
  );
}
