# Builds public/brand/*.svg from Public Sans Medium. Needs PublicSans-500.ttf in the working dir
# (fontTools.varLib.instancer on google/fonts ofl/publicsans/PublicSans[wght].ttf at wght=500).
# Writes to ./out/; the PNGs were rendered from these SVGs with headless Chrome.
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
O='out/'
i=TTFont('PublicSans-500.ttf'); cmap=i.getBestCmap(); hm=i['hmtx']; gs=i.getGlyphSet()
CAP=1446; DESC=322; TRACK=-80
KERN={'Λt':-140,'ta':-6,'ap':0,'pu':-4,'ur':11,'ra':-32}
PINUS='#10231E'; EMBUN='#F2F4F1'
CAPX=CAP/106                    # sketch units -> font units (sketch: 106 units = cap height)
L0,R0=0,round(94*CAPX)          # Λ 94 sketch units wide, feet on the baseline
C=R0/2
def lam(t):
    # Λ: pointed apex at cap height (the roof ridge), legs cut flat on the baseline. t = stroke in sketch
    # units, as approved by Rama in the "Logo Atapura" artifact (t=18 for the logo).
    half=94/2; H=106; import math
    phi=math.atan(half/H); hw=t/math.cos(phi)*CAPX; d=t/math.sin(phi)*CAPX
    return [(L0,0),(C,CAP),(R0,0),(R0-hw,0),(C,CAP-d),(L0+hw,0)]
LAM=lam(18)
def poly(pts,dx=0,dy=0): return 'M'+' L'.join(f'{x+dx:.1f} {dy+CAP-y:.1f}' for x,y in pts)+' Z'
paths=[poly(LAM)]; x=R0+0.015*2000; prev='Λ'   # 0.015 em gap after Λ, as in the sketch
for ch in 'tapura':
    if prev!='Λ': x+=KERN.get(prev+ch,0)+TRACK
    g=cmap[ord(ch)]; sp=SVGPathPen(gs); gs[g].draw(TransformPen(sp,(1,0,0,-1,x,CAP)))
    bp=BoundsPen(gs); gs[g].draw(bp); xmax=x+bp.bounds[2]
    paths.append(sp.getCommands()); x+=hm[g][0]; prev=ch
W=xmax-L0; H=CAP+DESC; d=' '.join(paths)
def wm(fill,name):
    open(O+name,'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{L0} 0 {W:.0f} {H}" width="{W/10:.0f}" height="{H/10:.0f}" role="img" aria-label="Atapura"><title>Atapura</title><path fill="{fill}" d="{d}"/></svg>\n')
wm(PINUS,'atapura-logo.svg'); wm(EMBUN,'atapura-logo-putih.svg')
def sym(fill,name,pts,bg=None,pad=0.0,r=0):
    LW=R0-L0; box=max(LW,CAP)/(1-2*pad); ox=(box-LW)/2-L0; oy=(box-CAP)/2
    b=f'<rect width="{box:.0f}" height="{box:.0f}" rx="{r*box:.0f}" fill="{bg}"/>' if bg else ''
    open(O+name,'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {box:.0f} {box:.0f}" role="img" aria-label="Atapura"><title>Atapura</title>{b}<path fill="{fill}" d="{poly(pts,ox,oy)}"/></svg>\n')
sym(PINUS,'atapura-simbol.svg',LAM); sym(EMBUN,'atapura-simbol-putih.svg',LAM)
SMALL=lam(27)                   # heavier legs for 16-48 px so they survive pixel snapping
sym(EMBUN,'favicon.svg',SMALL,bg=PINUS,pad=0.14,r=0.22)
sym(EMBUN,'_avatar.svg',LAM,bg=PINUS,pad=0.28)
sym(EMBUN,'_icon.svg',LAM,bg=PINUS,pad=0.22)
print('W',round(W),'H',H,'inner apex',round(LAM[4][1]))
