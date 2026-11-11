# Quality One Care – React

The Quality One Care website rebuilt as a React app (Vite + React Router).

## Run it

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Where things live

| Path | What it is |
|---|---|
| `src/App.jsx` | All routes (URLs → page components) |
| `src/components/Layout.jsx` | Header + nav + footer wrapped around every page |
| `src/components/` | Reusable pieces: `Header`, `Nav`, `Footer`, `PageTitle`, `HeroSlider`, `ServiceCarousel`, `Sidebar`, `CheckList`, `ContactList`, `Reveal` (scroll fade-in), `Icon` |
| `src/pages/` | One component per page |
| `src/data/services.js` | Text for the 8 service pages; `/services/:slug` renders from this |
| `src/data/site.js` | Contact details, external links, downloads, blog posts |
| `src/index.css` | All styles (same as the static site) |
| `public/assets/` | Images and icons |

## URLs

`/`, `/about-us`, `/services`, `/services/<service>`, `/careers`,
`/careers/application-forms`, `/careers/drug-calculation-test`, `/blog`, `/contact-us`

## Hosting note

This app uses normal URLs (e.g. `/about-us`). The host must send every URL
to `index.html` so refreshing a page works. Netlify, Vercel and Render handle
this with a one-line rewrite rule. GitHub Pages doesn't support it directly.
