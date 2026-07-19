# RAYU.md

This file provides guidance to RAYU when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint on all JS/JSX files
npm run deploy     # Build + deploy to gh-pages
```

There are no tests configured in this project.

## Architecture

This is a single-page portfolio website for THOEUN SOKHENG, built with **Vite + React 18**. It is deployed via **gh-pages**.

### Tech stack

- **Build**: Vite 8 with `@vitejs/plugin-react`
- **UI**: React 18, MUI 5 (Material UI), Emotion (CSS-in-JS), Bootstrap 5 (CDN), Font Awesome (CDN)
- **Contact form**: EmailJS (`@emailjs/browser`)
- **Icons**: `react-icons` + custom inline SVGs in `src/components/SubComponents/Icons.jsx`
- **Deploy**: `gh-pages` to GitHub Pages

### Component tree

```
App
├── Navbar (fixed-top, with dark/light toggle)
├── Hero (intro + tech stack)
├── About (image + text)
├── Projects (project cards from data file)
├── Work (education + experience)
├── Contact (contact items + EmailJS form)
└── Footer
```

### Theming

Dark/light theme is handled via React Context in `src/components/Contact/ThemContext.jsx`. The provider wraps the app in `main.jsx`. Theme state is persisted to `localStorage` and applied via a `data-theme` attribute on `<html>`. CSS variables (e.g., `--navbar-bg`, `--text-color`, `--card-bg`) are used in `src/styles/index.css` for theme-aware styling. Components access the theme via the `useTheme()` hook.

### Data

- `src/assets/data/projectInfo.js` — array of project objects (title, description, imgSrc, codeLink/codeLinks, demoLink, technologies). Some projects have a single `codeLink`, others have `codeLinks` (array of `{label, url}` for separate frontend/backend repos).
- `src/assets/data/personalInfo.jsx` — social links (Telegram, GitHub).

### Key patterns

- **Section components** (Hero, About, Projects, Work, Contact) are composition roots that assemble sub-components. E.g., `Hero` composes `HeroImg`, `HeroText`, and `TechStack`.
- **Reusable sub-components** live in `src/components/SubComponents/`: `Header` (section title + subtitle), `Icons` (all custom SVG icons as named exports), `Container`.
- **Bootstrap grid classes** are used extensively for layout (`container`, `row`, `col-*`).
- **EmailJS** is configured via environment variables in `.env`: `VITE_EMAIL_SERVICE_ID`, `VITE_EMAIL_TEMPLATE_ID`, `VITE_EMAIL_USER_ID`. These are prefixed with `VITE_` so Vite exposes them to the client bundle.
- The `base` in `vite.config.js` is set to `'/'` (root). If deploying to a subpath on GitHub Pages, this may need to change.

### ESLint

Uses flat config format (`eslint.config.js`) with `@eslint/js` recommended rules, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. JSX runtime is set to automatic (no need to import React in every file).
