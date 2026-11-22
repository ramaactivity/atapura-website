"""Contoh warna dari foto tekstur seri (metode DECISIONS 042/056).

Foto seri -> luminans -> dikalikan hex warna (rata-rata hasil = hex), bercak lembut untuk warna dua nada/campuran.
Hasil 480x360 JPG di assets/gambar/warna/<tekstur>-<slug nama>.jpg (dibaca fotoWarna di src/data/produk.ts).

Pakai: python3 tools/warna/warnai.py daftar.json
daftar.json = [{"tekstur": "tegola-premium-mosaik", "dasar": "tegola-eco-roof-hexagonal", "nama": "2-Tone Red", "hex": "#9A4237", "nada": true}, ...]
"dasar" (opsional) = foto seri sumber bila berbeda dari kunci tekstur; "nada" = beri bercak dua nada.
"""
import json, random, re, sys
from pathlib import Path
from PIL import Image, ImageFilter

AKAR = Path(__file__).resolve().parents[2]
SERI, WARNA = AKAR / 'assets/gambar/seri', AKAR / 'assets/gambar/warna'
slug = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def potong(dasar: str) -> Image.Image:
    im = Image.open(SERI / f'{dasar}.jpg').convert('L')
    w, h = im.size
    lebar = min(w, h * 4 // 3)
    x0, y0 = (w - lebar) // 2, (h - lebar * 3 // 4) // 2
    return im.crop((x0, y0, x0 + lebar, y0 + lebar * 3 // 4)).resize((480, 360), Image.LANCZOS)


def warnai(l: Image.Image, hexa: str, nada: bool, benih: str) -> Image.Image:
    r, g, b = (int(hexa[i:i + 2], 16) for i in (1, 3, 5))
    rata = sum(l.getdata()) / (480 * 360)
    random.seed(benih)
    bercak = Image.new('L', (24, 18))
    bercak.putdata([random.randint(0, 255) for _ in range(24 * 18)])
    bercak = bercak.resize((480, 360), Image.BICUBIC).filter(ImageFilter.GaussianBlur(14))
    amp = 0.22 if nada else 0.07
    L, B = l.load(), bercak.load()
    out = Image.new('RGB', (480, 360)); P = out.load()
    for y in range(360):
        for x in range(480):
            f = (L[x, y] / rata) ** 0.9 * (1 + amp * (B[x, y] - 128) / 128)
            P[x, y] = (min(255, int(r * f)), min(255, int(g * f)), min(255, int(b * f)))
    return out


if __name__ == '__main__':
    daftar = json.loads(Path(sys.argv[1]).read_text())
    cache = {}
    for d in daftar:
        dasar = d.get('dasar', d['tekstur'])
        cache.setdefault(dasar, potong(dasar))
        tujuan = WARNA / f"{d['tekstur']}-{slug(d['nama'])}.jpg"
        warnai(cache[dasar], d['hex'], d.get('nada', False), d['tekstur'] + d['nama']).save(tujuan, quality=80, optimize=True)
    print(f'{len(daftar)} contoh warna ditulis ke {WARNA}')
