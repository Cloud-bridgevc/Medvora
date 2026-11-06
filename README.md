# Medvora

**Keep essential medicines within reach.**

Medvora helps healthcare organisations plan medicine purchases and distribution. Its AI turns dispensing and stock records into practical replenishment recommendations.

> Medvora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.medvora.com` and email `hello@medvora.com` are placeholders — check availability with a registrar before use.

Categories: AI · HealthTech · Inventory Management

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional recommendations. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Zainab Garba** — Founder/CEO. Pharmacist with experience managing hospital medicine procurement.
- **Emeka Okorie** — Co-founder. Healthcare supply chain specialist.
- **Ebiere Amakiri** — CTO. Data scientist focused on forecasting and inventory optimisation.

## Sources for the statistics

- 10.5% — Estimated failure rate of medical products in low- and middle-income countries, often where genuine supply is unreliable. ([World Health Organization, 2017](https://www.who.int/news/item/28-11-2017-1-in-10-medical-products-in-developing-countries-is-substandard-or-falsified))
- Up to 169k — Children modelled to die each year from pneumonia treated with substandard or falsified antibiotics. ([World Health Organization, 2017](https://www.who.int/news/item/28-11-2017-1-in-10-medical-products-in-developing-countries-is-substandard-or-falsified))
- 76.6% — Share of Nigeria’s current health expenditure paid out of pocket (2018), so stock-outs fall hardest on patients. ([Africa Check, citing WHO data](https://africacheck.org/fact-checks/reports/nigerias-central-bank-governor-money-about-health-insurance-and-out-pocket))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@medvora.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
