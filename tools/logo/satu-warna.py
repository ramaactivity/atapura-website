# Logo mitra satu warna (Pinus) untuk deret "Merek yang kami pasang" di beranda (DECISIONS 085).
# Sumber: assets/mitra/<merek>-logo*.png (file resmi, lihat assets/mitra/README.md). Bentuk logo tidak diubah:
# bagian yang hampir putih di logo berwarna dilubangi (mis. huruf "cti" di kotak hijau), sisanya diisi Pinus.
# Logo yang seluruhnya putih (Javabitumen) dipakai bentuk aslinya. Pakai: python3 tools/logo/satu-warna.py
from pathlib import Path
from PIL import Image

AKAR = Path(__file__).resolve().parents[2]
SUMBER = AKAR / 'assets/mitra'
KELUAR = SUMBER / 'satu-warna'
PINUS = (16, 35, 30)
TINGGI = 112  # px; tampil ±28 px, jadi tajam sampai layar 4×
MEREK = ['maxxi', 'cti', 'javabitumen', 'tegola', 'victory']

KELUAR.mkdir(exist_ok=True)
for m in MEREK:
    asli = Image.open(next(SUMBER.glob(f'{m}-logo*.png'))).convert('RGBA')
    px = asli.load()
    w, h = asli.size
    terang = lambda r, g, b: (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.82
    berisi = [(px[x, y]) for y in range(0, h, 3) for x in range(0, w, 3) if px[x, y][3] > 40]
    # Logo putih (Javabitumen) bergradasi putih-abu muda: cirinya hampir tidak ada piksel gelap/berwarna.
    gelap = lambda r, g, b: (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.55
    semua_putih = sum(gelap(*p[:3]) for p in berisi) / len(berisi) < 0.1
    topeng = Image.new('L', (w, h), 0)
    tp = topeng.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            # Alpha dipertegas 2× supaya teks tipis berbayang (tagline CTI) setegas bagian lain.
            tp[x, y] = min(255, a * 2) if semua_putih or not terang(r, g, b) else 0
    kotak = topeng.getbbox()
    topeng = topeng.crop(kotak)
    hasil = Image.new('RGBA', topeng.size, PINUS + (0,))
    hasil.putalpha(topeng)
    lebar = round(hasil.width * TINGGI / hasil.height)
    hasil = hasil.resize((lebar, TINGGI), Image.LANCZOS)
    hasil.save(KELUAR / f'{m}.png', optimize=True)
    print(f'{m}: {lebar}×{TINGGI}', 'semua putih' if semua_putih else '')
