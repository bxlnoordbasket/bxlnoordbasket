# Brussel Noord Basket — React website

React/Vite website based on the BNB visual identity.

## Pages

- `/` — Home
- `/praktisch` — Praktische info
- `/over-bnb` — Over BNB
- `/contact` — Contact

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

## Main places to edit

- `src/pages/Home.jsx` — hero, partner carousel, next game, practical CTA
- `src/pages/Practical.jsx` — three upcoming matches, training schedule, location and extra info
- `src/pages/About.jsx` — club story and values
- `src/pages/Contact.jsx` — contact details, socials and form
- `src/styles.css` — full visual system

## Partner carousel

Replace these five temporary SVGs with the real partner logos while keeping the same filenames:

- `public/assets/partners/partner-1.svg`
- `public/assets/partners/partner-2.svg`
- `public/assets/partners/partner-3.svg`
- `public/assets/partners/partner-4.svg`
- `public/assets/partners/partner-5.svg`

The carousel runs automatically and pauses on hover. It also stops animating for users who have reduced-motion enabled.

## Temporary content

Dates, opponents, contact details, training hours and locations are currently example/placeholder data. The structure is ready for the real information.

The contact form is currently front-end only and displays a demo confirmation. It can later be connected to Formspree, EmailJS, a custom API, or another form backend.
