# Bharat Yatra Travel Choice — website

Next.js 16 (App Router) + TypeScript + Tailwind v4. Built to be deployed as-is.

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
```

Deploys straight to Vercel, or any Node host — no env vars required.

## Pages

- `/` — Home
- `/about` — About
- `/packages` — Ayodhya, Manali, Varanasi, Shimla
- `/customers` — Satisfied Customers

## What's real vs. placeholder

**Real, not placeholder:**
- Logo (`public/images/logo/`) — your original file, untouched. `lockup.png` (icon +
  wordmark, uncropped, correct aspect ratio) is what's shown in the nav and footer —
  no circular cropping, no distortion.
- Company facts in `lib/site.ts` and `lib/packages.ts` — MSME/ISO/GST numbers, service list,
  package itineraries — all traced back to the brief, nothing invented.
- The Santosh Jha review on `/customers` — set apart in its own "Verified public review"
  card, distinct from the sample testimonials below it.

**Placeholder, flagged for you to swap:**
- All destination photography is licensed Unsplash stock (free commercial use), standing in
  for real trip/Instagram photos. Swap by editing the `PHOTOS` object in `lib/site.ts` —
  point `id` at a new Unsplash photo id, or replace `unsplash()` calls with local files in
  `public/images/`.
- Package prices carry a `verified: false` flag in `lib/packages.ts` and show a `*` with a
  "starting from, pending confirmation" note sitewide — flip to `true` once you've confirmed
  pricing with the company, and the asterisk/disclaimer will need removing by hand at that point.
- `/customers` has 6 sample testimonials in `lib/testimonials.ts`, each tagged `isSample: true`
  and shown with a visible "Sample review" pill — swap this array for real submitted reviews
  when available.

## Structure

```
app/            routes (home, about, packages, customers)
components/     Navbar, Footer, TicketCard, TestimonialCard, AccordionGallery,
                WaterRippleImage, Reveal
lib/site.ts     site-wide constants + image manifest
lib/packages.ts package data
lib/testimonials.ts  sample testimonial data (clearly flagged, see above)
public/images/  logo + folder scaffold for real photos later
```

## Notes on the design

- Palette: ocean blue (primary), warm cream (background), gold and orange (accents/CTAs),
  deep navy (footer & dark sections) — sampled from the logo's own blue and orange, with
  green intentionally minimized so it doesn't dominate.
- Type: Fraunces (display), Inter (body), IBM Plex Mono (data/eyebrows — durations, prices).
- The navbar's active-state pill position is computed on mount, on route change, on resize,
  and once custom fonts finish loading — with `overflow-hidden` on its container as a hard
  guard, so it can't render outside the nav regardless of measurement timing.
- No decorative divider lines — sections are separated by color blocks, spacing and
  typography only, per direction to let the layout breathe.
