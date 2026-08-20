# GING Website

This repository contains the GING website, built with Next.js and Tailwind CSS. The project uses static content files under the `constants/` and `app/` folders to generate the site pages.

## Project overview

- Framework: Next.js
- Styling: Tailwind CSS
- Main app pages: `app/`
- Reusable UI: `components/`
- Content/config data: `constants/`
- Static built output for deployment: `docs/`

## Prerequisites

Before making changes, install the required dependencies:

```bash
npm install
```

## Local development

Run the app locally in development mode:

```bash
npm run dev
```

Then open the local preview in your browser, typically at:

```text
http://localhost:3000
```

## Typical change workflow

1. Create a branch for your work.
2. Edit the relevant files in `app/`, `components/`, or `constants/`.
3. If you change publication or content data, regenerate derived files when needed:

```bash
npm run publications
```

4. Check the app locally with the dev server.
5. Validate the project before finishing:

```bash
npm run build
```

6. Commit your changes and push the branch when ready.

## Main folders

- `app/` — pages and route-level UI
- `components/` — reusable UI and page sections
- `constants/` — site content, metadata, routes, language data, and publication data
- `public/` — static assets and generated files
- `lib/` — utilities
- `docs/` — generated build output used for deployment

## Deployment

This project is published to github pages when you push to master in github (remember to do before the ``npm run build``)


## Notes

- Most content updates are made in the files inside `constants/`.
- Page structure and routing are typically changed in `app/`.
- Reusable UI should go into `components/` instead of duplicating markup across pages.

If you are unsure where a change belongs, start with the page or page section that matches the feature, then move shared logic into `components/` or `constants/` only when it is actually reused.
