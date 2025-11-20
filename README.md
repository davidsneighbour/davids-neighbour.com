# davids-neighbour.com

davids-neighbour.com website using [Astro 5](https://astro.build), MDX, Tailwind CSS (via the `@tailwindcss/vite` plugin), and TypeScript.

## Overview

- Current stack: Astro, MDX, Tailwind CSS, TypeScript.
- Purpose: agency site for David's Neighbour.
- Status: Active development in `main`.

## Tech Stack

| Layer        | Implementation |
|--------------|----------------|
| Framework    | Astro 5.x      |
| Styling      | Tailwind CSS 4.x (via Vite plugin) |
| Content      | MDX + `.astro` + Markdown |
| Language     | TypeScript     |
| Deployment   | Netlify |

## Directory Structure (selected)

```plaintext
├─ astro.config.mjs          # Astro configuration (Tailwind + MDX integrations)
├─ src/
│  ├─ layouts/               # Astro layout components (e.g. BaseLayout.astro)
│  ├─ pages/                 # Route pages (index, contact, etc.)
│  ├─ styles/                # Global CSS (Tailwind layer imports, custom styles)
│  └─ utils/                 # App-level utilities (e.g. AppConfig.ts)
├─ public/                   # Static assets served as-is
├─ netlify.toml              # Netlify deployment configuration (root project)
└─ package.json              # Scripts & dependencies for the Astro site
```

## Getting Started

Prerequisites:

- Node.js (recommend LTS).
- npm (comes with Node).

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run astro:dev
```

The site will start on the default Astro dev port (usually 4321). Use `--host` if you need LAN access.

Type & diagnostics check:

```bash
npm run astro:check
```

Production build:

```bash
npm run astro:build
```

Preview the production build locally:

```bash
npm run astro:preview
```

## Styling & Components

- Tailwind CSS available globally; customize via `src/styles/global.css` and (if added later) Tailwind config.
- MDX allows mixing JSX-like components with markdown content.
- Layout components centralize common HTML structure (`BaseLayout.astro`).

## Deployment

Netlify configuration (`netlify.toml`)

1. Connect repository to Netlify via `netlify switch`.
2. Set build command: `npm run astro:build`
3. Set publish directory: `dist`
4. (Optional) Add environment variables as needed.

## Coding guidelines

- Keep changes minimal and focused.
- Prefer TypeScript for logic.
- Avoid introducing global side effects in layouts/pages.
- Maintain accessibility (semantic HTML, alt text, proper labels).
