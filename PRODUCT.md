# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Delegated: Astro 7 (static output) + Tailwind v4 + Preact islands only where interactive (calculator, color picker). Chosen in brainstorm (bahan/atapura/03-ARSITEKTUR.md) because every page ships as finished HTML with near-zero JS: fastest on low-end Android, best base for SEO/GEO. Hosted on Vercel free tier via GitHub Actions; starts on `atapura.vercel.app` (no custom domain yet, decision 2 Nov 2026).

## Users
- **Homeowners in Jabodetabek (core), ~30–60 years old**, building new, renovating, or replacing a heavy/leaking roof. They decide together with a spouse or family and must be able to justify a spend of tens of millions of rupiah. They arrive from Google or an AI answer, often on a mid-range Android phone.
- **Owners of villas, cafés, small businesses**: care about how the roof looks, heavy-rain performance, and how long the business must close.
- **Company professionals**: procurement staff, project managers at developers/contractors, architects, facility managers. They need documents to hand to a superior or client (TDS, certificates, TKDN, PT legality, terms, invoice).

All of them are adults deciding with information. Clarity beats spectacle.

## Product Purpose
Atapura (PT Atapura Karya Lestari, in process) supplies and installs bitumen roofing (Maxxi, CTI, Javabitumen) across Jabodetabek. The website's single job is to sell through search: rank on Google, be cited and recommended by AI assistants, then turn visitors into WhatsApp conversations via the "Hitung AKAL" cost estimator. Success = qualified WhatsApp leads carrying an estimate.

## Positioning
The most transparent, most provable bitumen roofing applicator in Jabodetabek: an online total-cost estimate (material + accessories + labor) before any chat, a published installation standard, per-project photo reports by stage, a written installation warranty separate from the factory warranty, brand-neutral advice across three price tiers, and payment only to the company account. Incumbents (WordPress catalogs) sell brands and hide prices; Atapura sells a verifiable result.

## Operating Context
Visitor flow: search question → answer page (price/guide/area) → Hitung AKAL → nearby project reports → WhatsApp message with the estimate prefilled → admin schedules a free survey. Professionals also download PDFs and request a formal quote by email/phone. Prices change (bitumen raw material rose in 2026), so every price shows its valid-from date.

## Capabilities and Constraints
- Phase 1: no database. Leads go to WhatsApp and a free form service.
- Prices are ranges, never cost/margin (business secret, never shipped to the browser).
- No real-time 3D on the site; any layered roof scene is pre-rendered images moved by CSS transform/opacity.
- Priority order that may not be reversed: (1) leads, (2) SEO & GEO, (3) fast and smooth on any phone, (4) visuals.
- Bahasa Indonesia only (id-ID). Address the reader as "Anda".
- No native browser controls (select, checkbox, range, number, date, plain textarea, alert/confirm).
- Open: WhatsApp business number, installation warranty duration (undecided), PT legal numbers (NIB/NPWP), official agent status with each brand, Javabitumen specs, real price list.

## Brand Commitments
- Name "Atapura"; legal "PT Atapura Karya Lestari". Never shorten to "Lestari".
- Tagline "Atap yang masuk AKAL." AKAL = Andal, Kualitas, Amanah, Lestari; every pillar must link to checkable proof.
- Owned terms: Hitung AKAL, Standar Pasang AKAL, Rapor Proyek, Cek Atap Gratis.
- Voice: calm, plain, numeric, honest about when bitumen is not suitable. Banned phrases listed in `.agents/product-marketing.md` and bahan/atapura/07.
- Logo is designed separately by Rama (not yet supplied); never generated or assembled.
- Binding visual references: `docs/desain/referensi/` (33 images, Rama's picks) summarized in bahan/atapura/02-DESIGN-NOTES.md.
- Sans-serif only: Switzer, a Helvetica-style neo-grotesque with true italics (Rama rejected Plus Jakarta Sans as too generic, 2 Nov 2026); pill buttons/chips.

## Evidence on Hand
- None yet: no completed projects, no real photos, no testimonials, no reviews, no project metrics. Must not be fabricated. AI-generated imagery (made by Rama in Magnific) may set atmosphere only and must never be presented as an Atapura project.
- Facts that are true now: 3 brands, 13 cities/regencies served, free survey.
- Installation warranty: written warranty exists as a commitment; duration undecided — show no number.
- Competitor audit: bahan/atapura/05.

## Product Principles
1. Answer before asking: price, suitability, warranty, and process are visible before any contact request.
2. Every claim carries its proof or is cut.
3. Honest limits sell: say when bitumen is the wrong choice.
4. One source of truth: numbers live once in `src/data/` and feed pages, schema, llms.txt, and the WhatsApp message.
5. Speed is a feature: nothing visual may cost the first three priorities.

## Accessibility & Inclusion
Readers aged 40–60 on phones: body text ≥17 px mobile / 18 px desktop, line-height ~1.6, WCAG AA contrast, touch targets ≥44 px, `prefers-reduced-motion` respected, print-friendly price and estimate pages.
