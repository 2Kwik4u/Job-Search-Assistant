# AGENTS.md

This file is for future Codex sessions working on the Julie Watkins Job Search Assistant.

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
- Data storage: browser `localStorage`.
- Theme preference storage: browser `localStorage` key `julie-theme-preference`.
- Service worker cache names must be versioned when cached app-shell files change.
- `Possible keyword gaps` should mean terms found in the job post that need review, not Julie skills absent from the posting.
- Score explanations should make the existing formula visible before changing the formula itself.
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

Not allowed without explicit approval:

- Submit applications.
- Send messages to employers.
- Upload resumes to third-party sites.
- Scrape job boards automatically.
- Use logged-in browser sessions for job actions.
- Store personal data in cloud services.
