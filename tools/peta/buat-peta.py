"""Buat data peta area survey (src/data/peta-area.json) dari batas kabupaten/kota geoBoundaries IDN ADM2.

Sumber: geoBoundaries gbOpen IDN ADM2 (BPS, WFP, OCHA ROAP), lisensi CC BY 3.0 IGO: wajib cantumkan sumber
(caption di PetaArea.astro). Unduh sekali (±150 MB, jangan di-commit):
  curl -L -o adm2.geojson https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/IDN/ADM2/geoBoundaries-IDN-ADM2.geojson
Peta kecil Indonesia (ADM0, ODbL 1.0, cantumkan sumber):
  curl -L -o adm0.geojson https://github.com/wmgeolab/geoBoundaries/raw/9469f09/releaseData/gbOpen/IDN/ADM0/geoBoundaries-IDN-ADM0_simplified.geojson
Jalankan:  python3 tools/peta/buat-peta.py adm2.geojson adm0.geojson
"""
import json
import math
import sys

# Nama di data BPS → nama di bisnis.area. Wilayah di luar daftar ini digambar sebagai daratan tetangga (abu).
LAYANAN = {
    'Kota Jakarta Utara': 'Jakarta Utara', 'Kota Jakarta Barat': 'Jakarta Barat', 'Kota Jakarta Pusat': 'Jakarta Pusat',
    'Kota Jakarta Timur': 'Jakarta Timur', 'Kota Jakarta Selatan': 'Jakarta Selatan', 'Kota Tangerang': 'Kota Tangerang',
    'Tangerang': 'Kabupaten Tangerang', 'Kota Tangerang Selatan': 'Tangerang Selatan', 'Kota Depok': 'Depok',
    'Kota Bekasi': 'Kota Bekasi', 'Bekasi': 'Kabupaten Bekasi', 'Kota Bogor': 'Kota Bogor', 'Bogor': 'Kabupaten Bogor',
}
TETANGGA = {'Serang', 'Lebak', 'Cianjur', 'Karawang', 'Purwakarta', 'Sukabumi', 'Kota Serang', 'Kota Cilegon'}

LON0, LON1, LAT0, LAT1 = 106.36, 107.32, -6.80, -5.96  # bingkai peta (Kepulauan Seribu sengaja di luar)
LEBAR = 760
KOS = math.cos(math.radians((LAT0 + LAT1) / 2))
K = LEBAR / ((LON1 - LON0) * KOS)
TINGGI = round((LAT1 - LAT0) * K)
TOLERANSI = 0.9  # px, Douglas-Peucker


def proyeksi(lon, lat):
    return ((lon - LON0) * KOS * K, (LAT1 - lat) * K)


def dp(titik, tol):
    """Douglas-Peucker iteratif; ponytail: cukup untuk ±50 ribu titik, pakai shapely kalau datanya jauh lebih besar."""
    if len(titik) < 4:
        return titik
    if titik[0] == titik[-1]:  # cincin tertutup: pecah di titik terjauh dari awal supaya garis acuan tidak nol
        x0, y0 = titik[0]
        i = max(range(len(titik)), key=lambda k: (titik[k][0] - x0) ** 2 + (titik[k][1] - y0) ** 2)
        return dp(titik[:i + 1], tol) + dp(titik[i:], tol)[1:]
    simpan = [False] * len(titik)
    simpan[0] = simpan[-1] = True
    tumpuk = [(0, len(titik) - 1)]
    while tumpuk:
        a, b = tumpuk.pop()
        (x1, y1), (x2, y2) = titik[a], titik[b]
        dx, dy = x2 - x1, y2 - y1
        n = math.hypot(dx, dy) or 1e-9
        jauh, i_jauh = 0.0, -1
        for i in range(a + 1, b):
            x, y = titik[i]
            d = abs(dy * x - dx * y + x2 * y1 - y2 * x1) / n
            if d > jauh:
                jauh, i_jauh = d, i
        if jauh > tol:
            simpan[i_jauh] = True
            tumpuk += [(a, i_jauh), (i_jauh, b)]
    return [p for p, s in zip(titik, simpan) if s]


def luas_titik_berat(r):
    a = cx = cy = 0.0
    for (x1, y1), (x2, y2) in zip(r, r[1:] + r[:1]):
        f = x1 * y2 - x2 * y1
        a += f
        cx += (x1 + x2) * f
        cy += (y1 + y2) * f
    a /= 2
    return (abs(a), (cx / (6 * a), cy / (6 * a))) if a else (0, r[0])


def dalam_bingkai(r):
    xs, ys = [p[0] for p in r], [p[1] for p in r]
    return max(xs) > -40 and min(xs) < LEBAR + 40 and max(ys) > -40 and min(ys) < TINGGI + 40


# Peta kecil Indonesia: posisi Jabodetabek + pulau tempat tim pemasang pernah bekerja (bisnis.survey.pengalamanLuar).
I_LON0, I_LON1, I_LAT0, I_LAT1 = 94.8, 141.2, -11.2, 6.2
I_LEBAR = 240
I_K = I_LEBAR / ((I_LON1 - I_LON0) * math.cos(math.radians(-2.5)))
PULAU = [('Sumatra', 101.2, 0.0), ('Kalimantan', 113.9, 0.4), ('Sulawesi', 121.4, -1.9), ('Papua', 138.2, -4.3)]


def i_proyeksi(lon, lat):
    return ((lon - I_LON0) * math.cos(math.radians(-2.5)) * I_K, (I_LAT1 - lat) * I_K)


def indonesia(sumber):
    g = json.load(open(sumber))['features'][0]['geometry']
    poligon = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
    jalur = []
    for pol in poligon:
        r = dp([i_proyeksi(*p[:2]) for p in pol[0]], 0.3)
        if len(r) >= 4 and luas_titik_berat(r[:-1])[0] >= 0.8:
            jalur.append('M' + 'L'.join(f'{x:.1f} {y:.1f}' for x, y in r[:-1]) + 'Z')
    (x0, y0), (x1, y1) = i_proyeksi(LON0, LAT1), i_proyeksi(LON1, LAT0)
    return {
        'lebar': I_LEBAR, 'tinggi': round((I_LAT1 - I_LAT0) * I_K), 'd': ''.join(jalur),
        'kotak': [round(x0, 1), round(y0, 1), round(x1 - x0, 1), round(y1 - y0, 1)],
        'pulau': [{'nama': n, 'x': round(i_proyeksi(lo, la)[0], 1), 'y': round(i_proyeksi(lo, la)[1], 1)} for n, lo, la in PULAU],
    }


def main(sumber, sumber_indonesia):
    data = json.load(open(sumber))
    wilayah = []
    for f in data['features']:
        nama_bps = f['properties']['shapeName']
        if nama_bps not in LAYANAN and nama_bps not in TETANGGA:
            continue
        g = f['geometry']
        poligon = g['coordinates'] if g['type'] == 'MultiPolygon' else [g['coordinates']]
        jalur, terbesar = [], (0, None)
        for pol in poligon:
            for j, cincin in enumerate(pol):
                r = dp([proyeksi(*p[:2]) for p in cincin], TOLERANSI)
                if len(r) < 4 or not dalam_bingkai(r):
                    continue
                luas, tb = luas_titik_berat(r[:-1])
                if luas < 6:  # pulau sangat kecil: tidak terbaca di skala ini
                    continue
                if j == 0 and luas > terbesar[0]:
                    terbesar = (luas, tb)
                # Bilangan bulat cukup untuk peta 760 unit yang tampil ±450 px; titik kembar setelah dibulatkan dibuang (DECISIONS 097).
                t = [(round(x), round(y)) for x, y in r[:-1]]
                t = [p for k, p in enumerate(t) if k == 0 or p != t[k - 1]]
                if len(t) >= 3: jalur.append('M' + 'L'.join(f'{x} {y}' for x, y in t) + 'Z')
        if not jalur:
            continue
        wilayah.append({
            'nama': LAYANAN.get(nama_bps, nama_bps),
            'layanan': nama_bps in LAYANAN,
            'd': ''.join(jalur),
            'label': [round(terbesar[1][0], 1), round(terbesar[1][1], 1)],
        })
    wilayah.sort(key=lambda w: w['layanan'])  # tetangga digambar dulu, wilayah layanan di atasnya
    keluar = {'lebar': LEBAR, 'tinggi': TINGGI, 'wilayah': wilayah, 'indonesia': indonesia(sumber_indonesia)}
    json.dump(keluar, open('src/data/peta-area.json', 'w'), ensure_ascii=False, separators=(',', ':'))
    print(f'{len(wilayah)} wilayah ({sum(w["layanan"] for w in wilayah)} layanan), {LEBAR}×{TINGGI}, '
          f'{sum(len(w["d"]) for w in wilayah) // 1024} KB jalur')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
