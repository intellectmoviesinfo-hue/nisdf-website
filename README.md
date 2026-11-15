# North India Self Defense Federation (NISDF) – Website

This is a static website with no build step. Upload the folder to any host: GitHub Pages, Netlify, Cloudflare Pages or Hostinger.

## Structure
- `index.html` holds every section: Hero, About, Programs, Director (Dushyant Tyagi), Schools, Media, Gallery and Contact.
- `assets/css/style.css` is the stylesheet. `assets/js/main.js` holds the gallery and news-clipping lists (the `MEDIA` and `GALLERY` arrays), the language switch, the lightbox and the contact form.

## Hindi / English
- The page is written in Hindi. Each translatable element also carries its English text in a `data-en="..."` attribute.
- The **हिंदी | EN** button in the header swaps between them and remembers the choice. `?lang=en` in the URL opens the English version directly.
- To edit English text, change the `data-en` attribute. To edit Hindi text, change the element's content. Gallery and news captions are in `main.js` (Hindi and English side by side).
- `assets/img/` holds the optimized photos. `news/` has the newspaper clippings, `gallery/` has the photos, `people/` has the portrait and award photos.
- `old-site-recovered/` is a backup of the old NISDF site, recovered from GitHub (github.com/nisdf-up/ngo-website).

## To add a photo
1. Put the file in `assets/img/gallery/`, for example `new1.jpg`.
2. In `assets/js/main.js`, add a line like `['new1', 'training', 'हिंदी कैप्शन', 'English caption']` to the `GALLERY` array. The categories are `training`, `events` and `sports`.

## Local preview
```
powershell -ExecutionPolicy Bypass -File .claude/serve.ps1
```
Then open http://localhost:5510

## Domain
- **Old domain `nisdf.ngo`**: it no longer resolves and shows as unregistered, so it can likely be re-registered.
- **Suggested new domains** (both looked unregistered on 15 Nov 2026):
  - `dushyanttyagi.in`: recommended for his personal and political profile.
  - `dushyanttyagi.com`
  - Keep or re-register `nisdf.ngo` for the NGO, and point it to the same site or to a separate NGO page.

## GitHub Pages DNS (if hosting on GitHub Pages)
- Add a `CNAME` file containing the domain, for example `www.dushyanttyagi.in`.
- Create these records with the domain registrar:
  - A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - CNAME record for `www`: `<github-username>.github.io`
