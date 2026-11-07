# Chandra Sekhar Mullu — portfolio

Professional portfolio for quantitative development and risk technology.

**Live:** https://iamknownstranger.github.io/

## Published site

The current site is a buildless, accessible HTML/CSS page. GitHub Pages publishes the `master` branch at `/ (root)`; `.nojekyll` prevents the template README from becoming the homepage.

- `index.html`: professional summary, selected projects, experience, technical focus and contact.
- `assets/portfolio.css`: responsive layout, reduced-motion preference, and printable career summary.
- `assets/portfolio.js`: native browser print action.
- `assets/monogram.svg`: local favicon.
- `robots.txt` and `sitemap.xml`: crawler discovery.
- `scripts/validate_portfolio.py`: local asset and section-link checks, also run in CI.

## Preview and check

Run `python3 scripts/validate_portfolio.py`, then `python3 -m http.server 8080`. Open `http://localhost:8080`.

Check desktop, phone layout, keyboard focus, the expandable engineering notes, email links and the printable career summary before publishing edits. The deployed site requires no API tokens, external fonts, analytics, or backend.

## Content conventions

Professional experience is separate from open-source project capabilities. Igloo is described by its default branch; draft preview features and roadmap items are identified explicitly. Portfolio Pulse is hypothetical research, with model and execution assumptions linked from the project section.

## Earlier template

The previous DeveloperFolio React source remains under `src/` and `public/` for history and attribution. It is not the active site entry point. Its original license is preserved in `LICENSE`. The old React deployment workflow was replaced with static-site validation, matching the existing GitHub Pages source.
