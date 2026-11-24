# Builds public/brand/*.svg from Inter SemiBold (600) — Rama 24 Nov 2026, DECISIONS 092 (was Public Sans Medium).
# Needs Inter-600.ttf in the working dir:
#   python3 -c "from fontTools.ttLib import TTFont; from fontTools.varLib import instancer; \
#     i=instancer.instantiateVariableFont(TTFont('public/fonts/Inter-Variable-latin.woff2'),{'wght':600}); i.flavor=None; i.save('Inter-600.ttf')"
# Kerning comes from Inter's own GPOS via HarfBuzz (pip install uharfbuzz brotli fonttools).
# Writes to ./out/; render PNGs from these SVGs with headless Chrome.
import math
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

O = 'out/'
FONT = 'Inter-600.ttf'
i = TTFont(FONT); gs = i.getGlyphSet(); order = i.getGlyphOrder()
UPM = i['head'].unitsPerEm
def bounds(g): p = BoundsPen(gs); gs[g].draw(p); return p.bounds
cmap = i.getBestCmap()
CAP = bounds(cmap[ord('H')])[3]
DESC = -bounds(cmap[ord('p')])[1]
TRACK = round(-0.033 * UPM)     # same tracking as the display headings (Notion display-1)
PINUS = '#10231E'; EMBUN = '#F2F4F1'
CAPX = CAP / 106                # sketch units -> font units (sketch: 106 units = cap height)
L0, R0 = 0, round(94 * CAPX)    # Λ 94 sketch units wide, feet on the baseline
C = R0 / 2
# Λ stroke follows the font: Public Sans 500 used t=18 with stem/cap 0.148 (ratio 1.15 for the diagonal);
# the same ratio on Inter 600's stem gives the logo stroke.
STEM = bounds(cmap[ord('I')]); STEM = (STEM[2] - STEM[0]) / CAP
T_LOGO = round(STEM * 1.15 * 106, 1)

def lam(t):
    # Λ: pointed apex at cap height (the roof ridge), legs cut flat on the baseline (approved by Rama 2 Nov 2026).
    half = 94 / 2; H = 106
    phi = math.atan(half / H); hw = t / math.cos(phi) * CAPX; d = t / math.sin(phi) * CAPX
    return [(L0, 0), (C, CAP), (R0, 0), (R0 - hw, 0), (C, CAP - d), (L0 + hw, 0)]
LAM = lam(T_LOGO)
def poly(pts, dx=0, dy=0): return 'M' + ' L'.join(f'{x+dx:.1f} {dy+CAP-y:.1f}' for x, y in pts) + ' Z'

# Shape "tapura" with Inter's kerning, then add tracking between letters.
blob = hb.Blob.from_file_path(FONT); font = hb.Font(hb.Face(blob))
buf = hb.Buffer(); buf.add_str('tapura'); buf.guess_segment_properties(); hb.shape(font, buf, {'kern': True, 'liga': False})
paths = [poly(LAM)]; x = R0 + 0.015 * UPM      # 0.015 em gap after Λ, as in the sketch
for n, (info, pos) in enumerate(zip(buf.glyph_infos, buf.glyph_positions)):
    g = order[info.codepoint]
    sp = SVGPathPen(gs); gs[g].draw(TransformPen(sp, (1, 0, 0, -1, x + pos.x_offset, CAP)))
    xmax = x + pos.x_offset + bounds(g)[2]
    paths.append(sp.getCommands()); x += pos.x_advance + TRACK

W = xmax - L0; H = CAP + DESC; d = ' '.join(paths)
def wm(fill, name):
    open(O + name, 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{L0} 0 {W:.0f} {H:.0f}" width="{W/10:.0f}" height="{H/10:.0f}" role="img" aria-label="Atapura"><title>Atapura</title><path fill="{fill}" d="{d}"/></svg>\n')
wm(PINUS, 'atapura-logo.svg'); wm(EMBUN, 'atapura-logo-putih.svg')
def sym(fill, name, pts, bg=None, pad=0.0, r=0):
    LW = R0 - L0; box = max(LW, CAP) / (1 - 2 * pad); ox = (box - LW) / 2 - L0; oy = (box - CAP) / 2
    b = f'<rect width="{box:.0f}" height="{box:.0f}" rx="{r*box:.0f}" fill="{bg}"/>' if bg else ''
    open(O + name, 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {box:.0f} {box:.0f}" role="img" aria-label="Atapura"><title>Atapura</title>{b}<path fill="{fill}" d="{poly(pts,ox,oy)}"/></svg>\n')
sym(PINUS, 'atapura-simbol.svg', LAM); sym(EMBUN, 'atapura-simbol-putih.svg', LAM)
SMALL = lam(T_LOGO * 1.5)       # heavier legs for 16-48 px so they survive pixel snapping (was 27 vs 18)
sym(EMBUN, 'favicon.svg', SMALL, bg=PINUS, pad=0.14, r=0.22)
sym(EMBUN, '_avatar.svg', LAM, bg=PINUS, pad=0.28)
sym(EMBUN, '_icon.svg', LAM, bg=PINUS, pad=0.22)
print('W', round(W), 'H', round(H), 'stroke', T_LOGO, 'aspect', f'{W:.0f} / {H:.0f}')
