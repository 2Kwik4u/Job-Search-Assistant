Project Status Report

Version

0.5.0 - GitHub Pages PWA support.

Completed This Session

- Read README.md, ROADMAP.md, PROJECT_STATUS.md, and AGENTS.md before coding.
- Added theme options: `Light`, `Dark`, and `System`.
- Added persistent theme preference using localStorage key `julie-theme-preference`.
- Added early theme application in `index.html` to reduce theme flash.
- Reworked visual styling around CSS variables.
- Added a soft warm neutral light theme for Julie.
- Added a charcoal/navy dark professional theme.
- Polished header, safety card, strategy cards, job discovery, import review, analyzer, fit review, tracker, buttons, inputs, tags, score cards, and responsive behavior.
- Preserved existing app workflow, scoring logic, data model, local storage model, and review-first behavior.
- Updated README.md.
- Updated ROADMAP.md.
- Updated PROJECT_STATUS.md.
- Updated DECISIONS.md.
- Replaced unnecessary step-number labels with descriptive section labels:
  - `Best-fit searches`
  - `Fit and tailoring review`
  - `Application pipeline`
- Added `manifest.webmanifest` with GitHub Pages-safe relative paths.
- Added app icons at `icons/icon-192.png` and `icons/icon-512.png`.
- Added `service-worker.js` with versioned cache name `julie-job-search-app-v0.5.0`.
- Configured the service worker to cache only the core app shell.
- Added manifest and icon links to `index.html`.
- Added service worker registration guarded for HTTPS and localhost.
- Added GitHub Pages setup instructions to README.md.
- Added Android install instructions for the GitHub Pages URL.
- Documented localStorage origin separation between local `file://` use and GitHub Pages.
- Documented backup/export reminder before switching to the hosted version.

Current State

The app is a static local web app using `index.html`, `styles.css`, and `app.js`.

It supports targeted job-search links, manual job-description analysis, editable bulk import review, Julie-specific fit scoring, truthful tailoring suggestions, suspicious-job red flags, local application tracking, JSON/CSV export, persistent Light/Dark/System themes, descriptive section labels, and GitHub Pages-ready PWA install support.

The project is explicitly not an auto-apply bot. Every job remains subject to human review.

Roadmap Progress

- Completed: static MVP, analyzer, tracker, search links, bulk import, import review, export, theme system, section-label polish, GitHub Pages PWA support, safety posture, and documentation baseline.
- Current Milestone: deploy to GitHub Pages and verify Android installability.
- Next Milestone: run a real-listing validation pass with 10-15 copied jobs, checking Light, Dark, System, and installed-PWA behavior during the same pass.

Known Limitations

- Data is stored only in browser localStorage.
- Theme preference is stored only in browser localStorage.
- GitHub Pages localStorage is separate from local `file://` localStorage.
- No backend persistence.
- No job-board API integrations.
- No direct scraping.
- No browser automation.
- No auto-apply.
- Service worker offline support covers only the core app shell.
- Service worker updates require cache-name version bumps when cached files change.
- PWA install support requires GitHub Pages or another secure served origin; it will not work reliably from `file://`.
- Bulk import parsing depends on copied text structure.
- Duplicate warnings are advisory and should be reviewed before saving.
- Fit scoring is rule-based and should be reviewed by a person.
- Theme rendering should be manually reviewed in a real browser.
- Visual browser verification could not be completed because the in-app browser runtime failed to connect in the Codex environment.

Testing Checklist

- Run `node --check app.js`.
- Run `node --check service-worker.js`.
- Confirm `manifest.webmanifest` uses relative paths.
- Confirm `service-worker.js` caches only core app shell files.
- Open `index.html` in a browser.
- Confirm theme selector offers `Light`, `Dark`, and `System`.
- Confirm Light mode applies a soft warm neutral theme.
- Confirm Dark mode applies a charcoal/navy theme.
- Confirm System mode follows the OS/browser color scheme.
- Refresh the page and confirm selected theme persists.
- Confirm search links render for each role angle.
- Confirm location selection changes generated search URLs.
- Paste one full job description and confirm analysis is produced.
- Bulk import two copied listings separated by a blank line.
- Confirm parsed jobs appear in the import review screen before saving.
- Edit draft title, company, link, remote status, salary, source, and description/notes.
- Confirm duplicate warnings appear before saving when a draft matches another draft or tracker item.
- Delete one draft before saving.
- Save selected drafts.
- Confirm saved imported jobs appear in the tracker as `Reviewing`.
- Edit status, follow-up date, and notes in the tracker.
- Export JSON.
- Export CSV.
- Confirm no feature submits an application or sends personal data.
- Deploy to GitHub Pages.
- Open the GitHub Pages URL on Android Chrome.
- Install from `Add to Home screen` or `Install app`.
- Confirm installed app launches as `Julie Jobs`.

Files Modified

- index.html
- manifest.webmanifest
- service-worker.js
- icons/icon-192.png
- icons/icon-512.png
- ROADMAP.md
- README.md
- PROJECT_STATUS.md
- DECISIONS.md

Recommended Next Step

Publish the static app to GitHub Pages, export a tracker backup from the local file version first, then test Android install from the GitHub Pages URL.

Product Manager Notes

The project should optimize for application quality, not application volume. The near-term product goal is to help Julie identify strong-fit opportunities and prepare better applications with less noise.

This PWA milestone preserves the static, local-first, review-first product shape. Do not expand into direct job-board scraping, browser automation, backend services, cloud sync, accounts, AI integrations, or auto-apply workflows until explicitly approved.
