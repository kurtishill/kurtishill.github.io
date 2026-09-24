# Kurt Hill portfolio

Next.js App Router, React, and TypeScript. The portfolio uses server components
and exports to static HTML for GitHub Pages.

## Local development

Use Node.js 22 (`nvm use`), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Validation and production build

```sh
npm run lint
npm run typecheck
npm run build
```

The production site is generated in `out/`. To preview the exact static output:

```sh
python3 -m http.server 3000 --directory out
```

Static exports do not use `next start` or require a Node.js server in production.

## Editing the site

- `app/page.tsx` assembles the portfolio sections in `components/`.
- `app/layout.tsx` defines the document metadata and favicon.
- `app/globals.css` contains the existing responsive portfolio styles.
- `public/` holds static files served at their original URLs, including
  `/bump/privacy-policy.html` and `/our-adventure/privacy-policy.html`.
  The policies retain their original HTML and styling; legacy assets and images
  remain available under `/assets/` and `/images/`.

## GitHub Pages

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
The workflow validates pull requests, then builds and deploys pushes to `main`.
It can also be run manually from `main`.

The export assumes the site's existing root URL, https://kurtishill.github.io.
Only `out/` is uploaded. Root-level local files such as `.env` and the resume
are not published; files meant to be public belong in `public/`.
