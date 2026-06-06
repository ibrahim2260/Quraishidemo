# Family & Cosmetic Dentistry — Website

Premium Next.js marketing website for Dr. Karen Quraishi, DDS — Sterling Heights, MI.

## Getting Started

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

---

## What to Swap Before Launch

### Photography (priority)
All images are high-quality Unsplash placeholders. Search for `// TODO: replace` to find every image:

| File | What to replace |
|------|----------------|
| `components/home/Hero.tsx` | Lifestyle photo — patient + Dr. Quraishi smiling |
| `components/home/MeetDr.tsx` | Dr. Quraishi professional headshot |
| `components/home/Gallery.tsx` | 4 before/after pairs (patient consent required) |
| `app/about/page.tsx` | Practice interior photos (reception, treatment rooms) |
| `lib/team.ts` | `imageUrl` on `drQuraishi` |
| All `serviceCategories` in `lib/services.ts` | Service-specific imagery |

### Contact Form Backend
`components/shared/AppointmentForm.tsx` — look for the `// TODO: wire up to real backend` comment in `handleSubmit`. Options:
1. **GoHighLevel (GHL)**: POST to your GHL webhook URL with `fetch`
2. **No-code**: [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) — add API key, call their endpoint
3. **Custom API route**: Create `app/api/contact/route.ts` using [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com)

### Social Links
`lib/siteConfig.ts` → `siteConfig.social` — update `facebook`, `instagram`, and `google` URLs.

### Patient Forms Link
`app/new-patients/page.tsx` — search for the forms section, replace the placeholder with your dental software's patient portal link (e.g., Dentrix, Eaglesoft, Weave).

### Google Maps Embed API Key
`components/home/LocationSection.tsx` — the embed works without a key via the basic iframe method, but if you want a styled map or place finder, add a Google Maps Embed API key.

### Analytics
Add your analytics tag to `app/layout.tsx`. Recommended: [Vercel Analytics](https://vercel.com/analytics) (one-line install) or Google Tag Manager.

### Domain & Deployment
Deploy to [Vercel](https://vercel.com) — push to GitHub, import repo, done. Add your custom domain in project settings.

---

## Content to Edit

All content is in typed config files — no CMS, just TypeScript:

| File | What's in it |
|------|-------------|
| `lib/siteConfig.ts` | Phone, address, hours, stats, social links |
| `lib/services.ts` | All service descriptions, benefits, FAQs |
| `lib/testimonials.ts` | Patient reviews (replace with real Google reviews) |
| `lib/team.ts` | Dr. Quraishi bio and credentials |

---

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, services, meet-dr, gallery, testimonials, technology, location, CTA |
| `/services` | All services with category sections, FAQs, individual anchors (`/services#veneers`) |
| `/about` | Dr. Quraishi bio, practice values, office gallery |
| `/new-patients` | First-visit steps, insurance & financing, FAQs, booking form |
| `/contact` | Appointment form, hours, map |

---

## Design Tokens

Defined in `tailwind.config.ts` and `app/globals.css`:

- **Cream** (`#FAF8F2`) — page background
- **Sage** (`#7B9E87`) — brand accent, labels
- **Charcoal** (`#1A1D1B`) — primary text, dark sections
- **Teal** (`#2B5F5F`) — secondary accent, dark backgrounds
- **Brass** (`#B8944A`) — CTAs and highlights only

Fonts loaded via `next/font/google`:
- **Cormorant Garamond** — all display/heading text (`.font-display`)
- **DM Sans** — all body and UI text (`.font-body`)

---

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v3
- Framer Motion (scroll reveals, hero animations, mobile nav)
- `next/image` for optimized images
- `next/font` for zero-layout-shift font loading
- JSON-LD structured data for Local SEO (`Dentist` schema)
