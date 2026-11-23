# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Delegated: Astro 7 (static output) + Tailwind v4 + Preact islands only where interactive (calculator, color picker). Chosen in brainstorm (bahan/atapura/03-ARSITEKTUR.md) because every page ships as finished HTML with near-zero JS: fastest on low-end Android, best base for SEO/GEO. Hosted on Vercel free tier via GitHub Actions; starts on `atapura.vercel.app` (no custom domain yet, decision 2 Nov 2026).

## Users
- **Homeowners in Jabodetabek (core), ~30–60 years old**, building new, renovating, or replacing a heavy/leaking roof. They decide together with a spouse or family and must be able to justify a spend of tens of millions of rupiah. They arrive from Google or an AI answer, often on a mid-range Android phone.
- **Owners of villas, cafés, small businesses**: care about how the roof looks, heavy-rain performance, and how long the business must close.
- **Company professionals**: procurement staff, project managers at developers/contractors, architects, facility managers. They need documents to hand to a superior or client (TDS, certificates, PT legality, terms, invoice). The site never claims TKDN or "local product" status for any brand (Rama, 4 Nov 2026); procurement readers are pointed to the official Kemenperin TKDN inventory.

All of them are adults deciding with information. Clarity beats spectacle.

## Product Purpose
Atapura (PT Atapura Karya Lestari, in process) supplies and installs bitumen roofing (Maxxi, CTI, Javabitumen, Tegola, Victory) across Jabodetabek, with projects outside it quoted directly via WhatsApp. The website's single job is to sell through search: rank on Google, be cited and recommended by AI assistants, then turn visitors into WhatsApp conversations via the "Hitung AKAL" cost estimator. Success = qualified WhatsApp leads carrying an estimate.

## Positioning
The most transparent, most provable bitumen roofing applicator in Jabodetabek: an online total-cost estimate (material + accessories + labor) before any chat, a published installation standard, per-project photo reports by stage, a written installation warranty separate from the factory warranty, and brand-neutral advice across five brands. Terms of agreement (contract, detailed payment terms) are discussed on WhatsApp, not promised on the site. Incumbents (WordPress catalogs) sell brands and hide prices; Atapura sells a verifiable result.

## Operating Context
Visitor flow: search question → answer page (price/guide/area) → Hitung AKAL → nearby project reports → WhatsApp message with the estimate prefilled → admin schedules a free survey. Professionals also download PDFs and request a formal quote by email/phone. Prices change (bitumen raw material rose in 2026), so every price shows its valid-from date.

## Capabilities and Constraints
- Phase 1: no database. Leads go to WhatsApp and a free form service.
- Prices are ranges, never cost/margin (business secret, never shipped to the browser).
- No real-time 3D on the site; any layered roof scene is pre-rendered images moved by CSS transform/opacity.
- Priority order that may not be reversed: (1) leads, (2) SEO & GEO, (3) fast and smooth on any phone, (4) visuals.
- Bahasa Indonesia only (id-ID). Address the reader as "Anda".
- No native browser controls (select, checkbox, range, number, date, plain textarea, alert/confirm).
- Open: WhatsApp business number, company bank account, PT legal numbers (NIB/NPWP), official agent status with each brand, Javabitumen & Victory specs, Tegola & Victory prices.

## Brand Commitments
- Name "Atapura"; legal "PT Atapura Karya Lestari". Never shorten to "Lestari".
- Tagline "Atap yang masuk AKAL." AKAL = Andal, Kualitas, Amanah, Lestari; every pillar must link to checkable proof.
- Owned terms: Hitung AKAL, Standar Pasang AKAL, Rapor Proyek. ("Cek Atap Gratis" was dropped 4 Nov 2026: maintenance is handled from WhatsApp photo reports; the team visits only for leaks or damage.)
- Voice: calm, plain, numeric, honest about when bitumen is not suitable. Banned phrases listed in `.agents/product-marketing.md` and bahan/atapura/07.
- Logo is designed separately by Rama (not yet supplied); never generated or assembled.
- Binding visual references: `docs/desain/referensi/` (33 images, Rama's picks) summarized in bahan/atapura/02-DESIGN-NOTES.md.
- Sans-serif only: Public Sans (OFL), styled after askmidnight.com — headings weight 500 with -0.04em tracking, body 400, no italics; emphasis by dimming part of a headline. Plus Jakarta Sans, Switzer and Uncut Sans were rejected/replaced on 2 Nov 2026. Pill buttons/chips.

## Evidence on Hand
- None yet: no completed projects, no real photos, no testimonials, no reviews, no project metrics. Must not be fabricated. AI-generated imagery (made by Rama in Magnific) may set atmosphere only and must never be presented as an Atapura project.
- Facts that are true now: 5 brands (prices for Maxxi, CTI, Javabitumen), 13 cities/regencies served, free survey in Jabodetabek.
- Installation warranty: 5 years, written (from the partner, 2 Nov 2026), covering leaks and installation errors.
- Competitor audit: bahan/atapura/05.

## Product Principles
1. Answer before asking: price, suitability, warranty, and process are visible before any contact request.
2. Every claim carries its proof or is cut.
3. Honest limits sell: say when bitumen is the wrong choice.
4. One source of truth: numbers live once in `src/data/` and feed pages, schema, llms.txt, and the WhatsApp message.
5. Speed is a feature: nothing visual may cost the first three priorities.

## Accessibility & Inclusion
Readers aged 40–60 on phones: body text 15–16 px on phones (compact native register, owner's preference 23 Nov 2026) and 16–18 px on laptop, nothing under 13 px except tab-bar and map labels (DECISIONS 076), line-height ~1.5–1.6, WCAG AA contrast, touch targets ≥44 px, `prefers-reduced-motion` respected, print-friendly price and estimate pages.
