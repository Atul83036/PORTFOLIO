# Atul Maurya — Portfolio

A responsive personal portfolio built with React, Vite, and TypeScript. Includes experience at TCTD, IIT Bombay, team projects, technical skills, education, and academic work.

## Run locally

Use a current Node.js LTS release supported by Vite.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run lint     # Check lint rules
npm run build    # Check TypeScript and build into dist/
npm run preview  # Preview the production build
```

## Stack and structure

- React + TypeScript with Vite
- Tailwind CSS with the Vite plugin
- Official shadcn/ui sidebar and supporting UI primitives
- Lucide React icons

```text
src/
  main.tsx           # Entry point, portfolio data, and simple page components
  styles.css         # Theme and responsive styling
  assets/atul.jpg     # Original supplied portrait
  components/ui/     # shadcn/ui components
  hooks/             # Mobile detection for the sidebar
  lib/utils.ts       # Class name utility
public/
  Atul-Maurya-Resume.pdf
  favicon.svg
components.json      # shadcn configuration
```

The Vite starter App.tsx, App.css, and index.css have been removed. The page is rendered directly from main.tsx. The existing route.tsx is untouched; this single-page portfolio uses section anchors and needs no router.

## Customize

Update the navigation, project, skill, and academic-project arrays in src/main.tsx. Profile, experience, education, and contact details are directly in the page markup. Change colors, typography, spacing, and responsive layouts in src/styles.css.

Replace src/assets/atul.jpg to change the portrait. Replace public/Atul-Maurya-Resume.pdf to update the download. Contact links use email, telephone, and the supplied LinkedIn profile. Project cards describe team contributions without unverified demo or repository links.

## Features

- Desktop sidebar and accessible mobile menu using shadcn/ui
- Section navigation with an active indicator
- Overview, about, projects, experience, skills, education, and contact
- Downloadable resume, email, telephone, and LinkedIn links
- Responsive layout, keyboard focus styles, skip link, and reduced-motion support

Content comes from the supplied professional and academic resumes. The photo, contact details, and downloadable resume are included in the static build. No backend, API key, or environment variables are required.

## Deployment

Live portfolio: [Atul Maurya](https://atul83036.github.io/PORTFOLIO/).

GitHub Actions builds and deploys the portfolio to GitHub Pages on every push to main. The workflow is in .github/workflows/deploy.yml. Vite uses /PORTFOLIO/ as the base path; public-file links use that same base so the resume download works on GitHub Pages.
