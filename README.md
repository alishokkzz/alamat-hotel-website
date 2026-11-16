# ALAMAT RESORT website
Static site: HTML5 + CSS + vanilla JS, 10 pages, KZ (default) / EN, light/dark.
## Run locally
`python3 -m http.server 8000` then open http://localhost:8000
## Structure
`*.html` pages · `css/` (style, responsive, animations) · `js/` (main, theme, language, booking, private) · `images/{rooms,resort,restaurant,vip,gallery}`
## Replace images
Drop JPGs at the paths shown on each placeholder (e.g. `images/resort/hero.jpg`, `images/rooms/eco.jpg`). Missing images fall back to a gradient.
## Edit content / languages
Each text is an element with `data-kz` and `data-en` attributes (the inner text is the KZ default). Edit both. Validation messages: `js/language.js` (`I18N`). Language is stored in localStorage (`alamat-lang`), theme in `alamat-theme`; no personal data is stored.
## Deploy (GitHub Pages)
Push to a repo, Settings → Pages → deploy from `main` / root. Update `YOUR-DOMAIN` in `robots.txt` and `sitemap.xml` (add all pages).
## Not production-ready: backend required
All forms are demo only. Needed: secure form processing + email notifications, booking DB + real availability + payments, server-side single-use invitation validation (rate-limited, signed QR), authentication for the private page, privacy policy/terms pages, real contact details, prices, confirmed partners.
Partner names on `partners.html` are prospective directions, not agreements. The Private Pass is not a payment card.
