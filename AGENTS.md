# AGENTS.md

This file is for future Codex sessions working on Job Search Assistant.

## Project Philosophy

- Quality applications over mass applications.
- Human review required before applying.
- Resume accuracy and truthfulness are mandatory.
- Safety and scam detection are high priority.
- Simplicity over complexity.

This project is not an auto-apply bot.

Its purpose is:

- Find good jobs.
- Evaluate fit.
- Improve applications.
- Tailor resumes honestly.
- Track progress.

Success is measured by interview quality and job quality, not application quantity.

## Development Rules

- No auto-apply without explicit approval.
- No fabricated experience.
- No automated job submissions.
- Explain plans before major changes.
- Update documentation after completed work.
- Preserve the review-first workflow.
- Keep data local unless the user explicitly approves a different storage model.
- Flag suspicious jobs instead of smoothing over risk.
- Prefer small, shippable improvements over broad feature expansion.
- Do not default a fresh install to Julie. Only create the Julie profile through valid legacy migration or explicit import/setup.
- Do not delete, overwrite, or mutate `julie-job-search-tracker-v1` during the v0.6.x migration period unless Eric explicitly approves it.
- Validate backup imports before writing to localStorage.
- Ask for confirmation before replacing existing v2 app state with an imported backup.

## Workflow

Before coding:

- Read README.md.
- Read ROADMAP.md.
- Read PROJECT_STATUS.md.
- Read AGENTS.md.

After coding:

- Update all project documentation.
- Generate a status report.
- Recommend one next milestone.

## Current Technical Shape

- Static browser app.
- Repository: `https://github.com/2Kwik4u/Job-Search-Assistant`.
- Expected GitHub Pages URL: `https://2kwik4u.github.io/Job-Search-Assistant/`.
- Main files: `index.html`, `styles.css`, `app.js`.
- PWA files: `manifest.webmanifest`, `service-worker.js`, `icons/icon-192.png`, `icons/icon-512.png`.
- Current v2 app state storage: browser `localStorage` key `job-search-assistant-state-v2`.
- Legacy Julie tracker storage: browser `localStorage` key `julie-job-search-tracker-v1`.
- Theme preference storage: browser `localStorage` key `julie-theme-preference`.
- Service worker cache names must be versioned when cached app-shell files change.
- v0.6.1 service worker cache: `julie-job-search-app-v0.6.1`.
- If valid legacy Julie jobs exist and no valid v2 state exists, copy them into v2 state with a Julie candidate profile.
- The legacy Julie tracker key is read-only in v0.6.x.
- Fresh no-data installs should show setup guidance instead of a preloaded Julie profile.
- One active candidate only; no candidate switcher yet.
- The app uses in-page tabs: `Jobs`, `Skills`, `Resume`, and `Profile / Settings`.
- With an active candidate, `Jobs` should be the default landing tab.
- With no active candidate, `Profile / Settings` should be the default setup tab.
- Keep normal job-search workflow surfaces in `Jobs`.
- Keep backup/import/export controls in `Profile / Settings` and the migration banner.
- Resume tracking v1 is text-based only: label, notes, optional pasted resume text.
- `Possible keyword gaps` should mean terms found in the job post that need review, not Julie skills absent from the posting.
- Score explanations should make the existing formula visible before changing the formula itself.
- Fit categories are `Strong fit`, `Possible fit`, `Stretch`, and `Not worth applying`.
- `No pay listed` is currently a quality/visibility flag, not a score penalty.
- No package manager or build step.
- No backend.
- No automated job submissions.

## Product Boundaries

Allowed:

- Generate search links.
- Import copied job listings.
- Score listings.
- Track applications.
- Suggest truthful resume positioning.
- Draft short messages for human review.
- Export tracker data.
- Export/import full local app backups.
- Export/import candidate profiles.
- Export the exact legacy Julie tracker JSON when the legacy key exists.

Not allowed without explicit approval:

- Submit applications.
- Send messages to employers.
- Upload resumes to third-party sites.
- Scrape job boards automatically.
- Use logged-in browser sessions for job actions.
- Store personal data in cloud services.
