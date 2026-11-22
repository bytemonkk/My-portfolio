# Manoj Sunkara — Portfolio

A responsive, single-page AI engineer / researcher portfolio with an elegant cream-and-gold theme inspired by the supplied QuickDine visual reference. Includes a sticky header, full mobile menu, carefully styled project cards, research highlights, experience timeline, contact section, and a multi-column footer. Built with **React + Vite + Lucide icons**. It is ready to run with npm and deploy to **Vercel**. No backend, API keys, or environment variables required.

## Run locally

Install [Node.js 22.12+](https://nodejs.org/) (or a newer compatible version), then run:

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Deploy with Vercel (recommended)

1. Unzip this folder, create a GitHub repository, and push the portfolio source into it.
2. Go to https://vercel.com/new and import the repository.
3. Vercel should detect **Vite**. If prompted, use:
   - **Framework preset:** Vite
   - **Install command:** `npm install`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Future pushes to GitHub will trigger new deployments.

You can also deploy directly from the command line:

```bash
npm install
npm run build
npx vercel --prod
```

Follow Vercel's CLI prompts to connect your account and project.

## Update the portfolio

- **Name, bio, links, stats, projects, publications, and skills:** `src/data/site.js`
- **Layout and interactive elements:** `src/App.jsx`
- **Colors, spacing, and animations:** `src/styles.css`
- **Resume download:** replace `public/resume.pdf` with your updated PDF
- **Browser title, meta tags, social preview:** `index.html` and `public/og-image.svg`

GitHub/LinkedIn/LeetCode and project repository links were extracted from the supplied résumé; they are not placeholder URLs. The visuals inside the project cards are *illustrations*, not screenshots of deployed apps.

## Menu and footer

Both are defined in `src/App.jsx`. Update the `navItems` array to change menu labels or section links. The `Footer()` component includes sitemap, QuickDine live link, social profiles, contact email, and back-to-top navigation. Colors and responsive styles are in `src/styles.css`.

## Build check

```bash
npm run build
npm run preview
```

The site is static and can be served from `dist/`. No special rewrite rules are needed for the single-page anchor navigation.

## Folder layout

```text
manoj-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── resume.pdf
├── src/
│   ├── data/site.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```
