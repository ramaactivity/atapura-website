// Logo merek mitra — satu sumber untuk pricelist (halaman mitra) dan /branding (unduhan). File resmi di assets/mitra
// (asal tiap file di README di sana; yang beresolusi rendah ditajamkan di Magnific Precision tanpa mengubah bentuk).
// Merek tanpa file resmi tidak dibuatkan logo tiruan: halaman pemakai menulis namanya saja.
import javabitumen from '../../assets/mitra/javabitumen-logo-putih.png';
import maxxi from '../../assets/mitra/maxxi-logo.png';
import cti from '../../assets/mitra/cti-logo.png';
import victory from '../../assets/mitra/victory-logo.png';
import tegola from '../../assets/mitra/tegola-logo.png';
import histeel from '../../assets/mitra/histeel-logo.png';
import tatalogam from '../../assets/mitra/tatalogam-logo.png';

export type LogoMitra = { merek: string; label: string; file: ImageMetadata; nama: string; gelap?: boolean };

export const logoMitra: LogoMitra[] = [
  { merek: 'Javabitumen', label: 'Javabitumen', file: javabitumen, nama: 'logo-javabitumen-putih.png', gelap: true },
  { merek: 'Maxxi', label: 'Maxxi', file: maxxi, nama: 'logo-maxxi.png' },
  { merek: 'CTI', label: 'CTI', file: cti, nama: 'logo-cti.png' },
  { merek: 'Victory', label: 'Victory', file: victory, nama: 'logo-victory.png' },
  { merek: 'Tegola', label: 'Tegola Canadese', file: tegola, nama: 'logo-tegola.png' },
  { merek: 'Hi-Steel', label: 'Hi-Steel', file: histeel, nama: 'logo-hi-steel.png' },
  { merek: 'Taso', label: 'Tatalogam Lestari (Taso)', file: tatalogam, nama: 'logo-tatalogam-taso.png' },
];
