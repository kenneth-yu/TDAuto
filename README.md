# TD Auto Repair

Marketing website for TD Auto Repair, an ASE-certified auto repair shop in Brooklyn, NY (est. 1992).

## Tech Stack

- **React Router 7** – routing and meta
- **Vite** – build tooling
- **Tailwind CSS 4** – styling
- **TypeScript**
- **Netlify** – hosting and deployment
- **vite-imagetools** – responsive images, WebP, quality optimization

## Project Structure

```
app/
├── components/        # UI components
│   ├── AboutUs.tsx
│   ├── Carousel.tsx
│   ├── ChooseUs.tsx
│   ├── ContactUs.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Icon.tsx
│   ├── Map.tsx
│   ├── NavBar.tsx
│   ├── OptimizedImage.tsx
│   ├── PhotoGallery.tsx
│   ├── Reviews.tsx
│   └── Services.tsx
├── content/           # Site copy and assets
│   ├── content.ts     # All text and config (edit here for copy changes)
│   ├── assets.ts      # Image imports and composed assets
│   └── index.ts       # Composed page data for sections
├── assets/            # Source images (hero, photogallery, navbar, services)
├── entry.client.tsx
├── entry.server.tsx
├── root.tsx
├── routes/
│   └── _index.tsx     # Home page
├── styles.css
└── routes.ts          # Route config

public/
└── .well-known/       # Chrome DevTools app-specific config
```

## Content

**`app/content/content.ts`** is the single source of truth for all site copy and configuration:

- `siteMeta` – title, description, `siteUrl`, `ogImage` (SEO)
- `navBar`, `hero`, `services`, `chooseUs`, `aboutUs`, `reviews`
- `photoGallery` – image alt text
- `contactUs` – phone, email, hours, address
- `mapConfig` – Google Maps embed and directions URLs
- `footer` – copyright

Edit this file to change text or business info. Assets (images) are wired in `app/content/assets.ts`.

## Image Optimization

- **vite-imagetools** – generates responsive WebP images (480/768/1024w, quality 82)
- **OptimizedImage** – `loading`, `fetchPriority`, `decoding`, `srcSet`, `sizes`
- Hero: priority loading; PhotoGallery: first slide eager, others lazy
- Source images live in `app/assets/`; builds output to hashed filenames

## SEO

- Canonical URL, Open Graph, and Twitter Card meta tags
- LocalBusiness (AutomotiveBusiness) JSON-LD for address, phone, hours, geo
- Hero logo in `<h1>` for semantic HTML
- Descriptive `logoAlt` for hero and navbar images
- Update `siteMeta.siteUrl` and `siteMeta.ogImage` before production
- Optional: add `public/og-image.png` (1200×630) for social sharing

## Features

- **NavBar** – logo, nav links (Services, Contact Us), contact info, hover effects
- **Hero** – full-height hero, centered logo, background image
- **Services** – mechanical, bodywork, electrical, inspection with icons
- **ChooseUs** – talking points (Staff, Expertise, Equipment, Parts, Price, Relationships)
- **AboutUs** – company history, “Let’s Work Together” CTA
- **Reviews** – carousel of customer testimonials
- **PhotoGallery** – past work images (portrait layout on mobile)
- **ContactUs** – phone, email, hours, address
  - Desktop: phone numbers not clickable; email copies to clipboard with toast
  - Mobile: phone and email remain clickable
- **Map** – Google Maps embed
- **Scroll-to-top** – button appears when nearing bottom

## Scripts

```sh
npm install
npm run dev        # Start dev server (port 5173)
npm run build      # Production build
npm run start      # Serve built site locally
npm run typecheck  # Generate types and run tsc
npm run clean      # Remove build artifacts and caches
```

## Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

For Netlify-style dev (with functions and redirects):

```sh
netlify dev
```

Uses port 8888 by default.

## Deployment (Netlify)

Netlify is configured via `netlify.toml`:

- Build command: React Router production build
- Publish: `build/client`
- Asset caching: `Cache-Control: max-age=31536000, immutable` for `/assets/*`

**Deploy:**

```sh
# Preview
netlify deploy --build

# Production
netlify deploy --build --prod
```

Or connect the repo to Netlify for automatic deploys on push.

## Environment

- Node ≥ 20.12 (see `.nvmrc` / `.node-version`)
