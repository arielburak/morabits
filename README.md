# Morabits — static site

Static replica of morabits1.webflow.io, rebuilt with plain HTML/CSS/JS for GitHub Pages. No build step, no dependencies.

## Structure

- `index.html` — the whole site (hero, clients, services, process, pricing, testimonials, CTA, footer)
- `css/style.css` — brand system (Inter, #443FDE primary, lavender/violet geometric shapes, square buttons, 7rem petal radii)
- `js/main.js` — nav, Hire mega-dropdown, logo marquee pause, testimonial slider, scroll reveals
- `assets/` — all logos, shapes, and photos downloaded from the original Webflow CDN
- `_reference/` — the original Webflow HTML and CSS, kept for reference only (not linked)
- `.nojekyll` — keeps GitHub Pages from running Jekyll

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Morabits static site"
git branch -M main
git remote add origin https://github.com/<your-user>/<repo>.git
git push -u origin main
```

Then in the repo: Settings → Pages → Source: "Deploy from a branch" → `main` / root.

## Notes for later

- The Hire dropdown role links and CTAs all point to the original Typeform (`form.typeform.com/to/HAAGqLdA`); the per-role pages (`/roles/...`) and the Best Practices / Pricing subpages were not part of this migration and can be added as extra HTML pages later.
- The newsletter form is front-end only. Wire it to Formspree, Buttondown, or similar before launch.
- "Book a call" still points to the Outlook bookings link from the original site.
