# Burning Brew — Local Preview

This repository contains a static prototype of the Burning Brew marketing site built to the brand guidelines in `instructions.md`.

Files added:
- `index.html` — Home / hero / manifesto / teaser grid
- `products.html` — Product catalog and subscription block
- `vision.html` — Brand manifesto and timeline
- `contact.html` — Contact form & newsletter
- `css/styles.css` — Main styles
- `js/scripts.js` — Small interactive behaviors
- `assets/` — Place images and media here

How to preview locally

Option A — Quick (no server):
Open any HTML file in your browser (Chrome/Firefox). Some features (like relative includes) work fine locally.

Option B — Recommended (static file server):
If you have Python installed, run:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

Notes & assumptions
- This is a static site scaffold. The original design doc suggested Node/Express — if you want a dynamic Node-based build, I can add an Express server and package.json next.
- Replace placeholder images in `assets/` with optimized WebP or JPG images.
- Accessibility: basic ARIA attributes and semantic HTML are included; run an a11y audit for full WCAG 2.2 AA compliance.
