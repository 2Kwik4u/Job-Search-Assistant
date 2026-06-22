# Job Search Assistant

## Project Overview

Job Search Assistant is a local, review-first web app for finding, evaluating, tailoring, and tracking job opportunities from a candidate profile.

The app is intentionally lightweight. It runs as static HTML, CSS, and JavaScript in the browser. It does not require a backend, account login, database server, or job-board automation.

Repository:

```text
https://github.com/2Kwik4u/Job-Search-Assistant
```

Expected GitHub Pages URL:

```text
https://2kwik4u.github.io/Job-Search-Assistant/
```

## Problem the App Solves

Job searches can become noisy fast. The goal of this app is to help a candidate focus on strong-fit roles instead of applying broadly to low-quality or poorly matched listings.

The app helps with four practical questions:

- Is this job a good fit for the active candidate?
- Which parts of the candidate's background match the listing?
- What honest resume positioning would make the application stronger?
- Where is each opportunity in the application process?

## Target Users

- A job seeker using a local candidate profile.
- Julie Watkins, as the first migrated candidate profile.
- A helper, coach, or reviewer assisting with job search workflow.
- Future Codex sessions maintaining the local app.

## Core Features

- Job discovery support through targeted search links.
- Light, dark, and system theme support.
- GitHub Pages-ready PWA install support.
- Candidate profile foundation with one active candidate.
- Automatic legacy Julie tracker migration into a Julie candidate profile when old browser data exists.
- Full app backup export and validated full app backup import.
- Candidate profile export and import.
- Legacy Julie tracker export when the old tracker key exists.
- Resume tracking v1 with label, notes, and optional pasted resume text.
- Bulk import of copied job listings into an editable draft review screen.
- Manual job-description paste and fit analysis.
- Candidate-profile-driven scoring using the active profile's role angles, skills, tools, and proof points.
- Score explanation showing the baseline, boosts, penalties, and fit categories.
- Matched skill, tool, and keyword detection.
- Possible keyword gap and weak-fit signal detection.
- Scam and suspicious-job red flag detection.
- Truthful resume-tailoring suggestions.
- Short outreach message draft.
- Application tracker with status, follow-up date, notes, salary, remote status, and source.
- JSON and CSV tracker export.

## Current Functionality

The current app supports:

- Static local browser use via `index.html`.
- Static GitHub Pages deployment support.
- Web app manifest for installing from a phone home screen.
- Simple service worker that caches only the core app shell.
- Theme selector with `Light`, `Dark`, and `System` options.
- Persistent theme preference saved in browser storage.
- Public app title `Job Search Assistant` with subtle Eric Labs branding.
- In-page navigation tabs for `Jobs`, `Skills`, `Resume`, and `Profile / Settings`.
- `Jobs` is the default landing tab when an active candidate exists.
- Subtle active-candidate indicator near the tabs.
- Empty setup state when no candidate profile or legacy data exists.
- Local candidate profile editing for:
  - display name
  - preferred work arrangements and locations
  - salary preference, including minimum acceptable pay, pay-must-be-listed, and notes
  - skills, tools, certifications, education, proof points, dealbreakers, and target roles in the Skills tab
  - one text-based resume version label, notes, and optional pasted resume text
- Automatic copy-only migration from `julie-job-search-tracker-v1` into `job-search-assistant-state-v2` when valid legacy Julie jobs are found.
- One-time migration banner with:
  - Export Full Backup
  - Export Legacy Julie Tracker
  - Dismiss
- Full app backup export and validated full app backup import.
- Candidate profile export and import.
- Compact Data Safety panel in `Profile / Settings`.
- Generated searches for LinkedIn, Indeed, FlexJobs, Remote.co, We Work Remotely, Idealist, and company-site Google searches.
- Role-angle selection for search strategy.
- Location selection for search links.
- Bulk import format using one listing per block:
  - first line: job title
  - second line: company
  - remaining lines: link, salary, remote status, description, or notes
- Import review before saving:
  - edit title, company, link, remote status, salary, source, and description/notes
  - see duplicate warnings before saving
  - delete unwanted drafts
  - save only selected drafts
- Immediate scoring for manually pasted or imported jobs.
- A `Why this score?` explanation for each analysis.
- Four fit categories: `Strong fit`, `Possible fit`, `Stretch`, and `Not worth applying`.
- `No pay listed` visibility flag. It is not a score penalty in this version.
- Duplicate detection by link or company/title.
- Local application tracking in browser storage.
- Export to JSON or CSV.

## Future Vision

The long-term vision is a calm, high-quality job-search command center that can support different candidates while staying local-first and review-first.

The app should help candidates find better jobs, not merely more jobs. Future versions may support richer profile editing, better job parsing, saved preferences, analytics on which role categories produce the best matches, and optional AI-assisted review.

Any future automation must preserve human review before applying.

## Local Setup Instructions

No build step is required.

1. Open `index.html` in a browser.
2. Choose `Light`, `Dark`, or `System` from the theme selector in the header.
3. If no candidate profile is active, use `Profile / Settings` to import a candidate profile/full backup or create a blank local profile.
4. Use the `Jobs` tab for search strategy, job discovery, import review, analysis, and the application tracker.
5. Use the `Skills` tab to maintain target roles, skills, tools, proof points, and dealbreakers.
6. Use the `Resume` tab for the simple text-based resume version label, notes, and optional pasted resume text.
7. Use `Profile / Settings` for salary preferences, candidate profile import/export, full backup import/export, and legacy Julie tracker export when available.

Optional syntax check:

```bash
node --check app.js
```

## GitHub Pages Setup

This app is designed to work as a static GitHub Pages site under this repository URL:

```text
https://2kwik4u.github.io/Job-Search-Assistant/
```

All PWA paths are relative so the app can live under a repository path instead of a domain root.

To publish with GitHub Pages:

1. Commit the project files to `https://github.com/2Kwik4u/Job-Search-Assistant`.
2. In GitHub, open the repository settings.
3. Go to `Pages`.
4. Set the source to the branch and folder that contain `index.html`.
5. Save the Pages settings.
6. Open `https://2kwik4u.github.io/Job-Search-Assistant/` after GitHub Pages finishes deploying.

Before switching from the local file version to the GitHub Pages version, export a backup:

1. Open the local `index.html` version.
2. Use `Export Full Backup` for the new v2 app state.
3. If `Export Legacy Julie Tracker` is visible, use it too. This exports the old Julie tracker exactly as stored.
4. Keep those exports as backups before using the hosted version.

Important data note: browser storage is origin-specific. Data saved in the local file version is separate from data saved at `https://2kwik4u.github.io/Job-Search-Assistant/`. Installing the GitHub Pages version on Android will use the GitHub Pages origin, not the local `file://` origin.

## Android Install Instructions

After the app is published on GitHub Pages:

1. Open the GitHub Pages URL in Chrome on Android.
2. Wait for the page to load fully.
3. Open the Chrome menu.
4. Tap `Add to Home screen` or `Install app`.
5. Confirm the install prompt.
6. Launch `Job Assistant` from the phone home screen.

The installed app still stores tracker data only in localStorage for that GitHub Pages origin.

## Service Worker Updates

The service worker uses a versioned cache name in `service-worker.js`.

When future app files change:

1. Update the cache name, for example from `julie-job-search-app-v0.6.1` to a newer version.
2. Commit and deploy the changed files to GitHub Pages.
3. Reload the app after deployment.
4. The new service worker will cache the updated app shell and remove older app-shell caches.

Only the core app shell is cached:

- `./`
- `./index.html`
- `./styles.css`
- `./app.js`
- `./manifest.webmanifest`
- `./icons/icon-192.png`
- `./icons/icon-512.png`

External job board links are not cached and are not available offline.

## Data Storage Approach

The app stores the current v2 app state in browser `localStorage` under:

```text
job-search-assistant-state-v2
```

The v2 state includes the active candidate profile, tracker jobs, resume labels/notes/text, and app settings.

The previous Julie-only tracker key is still read for migration and exact legacy backup export:

```text
julie-job-search-tracker-v1
```

Version `0.6.1` does not delete, overwrite, or mutate this legacy key.

The app stores theme preference separately under:

```text
julie-theme-preference
```

This means:

- Data stays local to the browser and device.
- Julie's old GitHub Pages data can only be migrated on Julie's own browser/device because localStorage is stored there.
- When Julie opens the updated GitHub Pages app, valid legacy tracker jobs are copied into the new v2 state and shown under a Julie candidate profile.
- The old legacy key remains in place as a safety backup.
- Clearing browser site data may delete saved applications.
- Clearing browser site data may reset the theme preference.
- Opening the app in a different browser will not automatically show the same tracker data.
- The local file version and GitHub Pages version do not share localStorage.
- Installing the GitHub Pages version on Android does not import data from the local file version.
- JSON and CSV export should be used for backups.
- Full app backup JSON is the preferred backup for v2 data.
- Full backup import validates the file before writing and asks for confirmation before replacing existing state.

## Safety Principles

- This project is not an auto-apply bot.
- Human review is required before applying.
- The app must not submit applications automatically.
- The app must not fabricate experience, credentials, metrics, or qualifications.
- Resume tailoring must preserve truthfulness.
- Suspicious jobs should be flagged before Julie invests time.
- Success is measured by interview quality and job quality, not application quantity.

## Current Limitations

- No backend or server-side persistence.
- No account login.
- No direct job-board scraping.
- No browser automation.
- No automatic import from LinkedIn, Indeed, or other job boards.
- PWA install support requires a served secure origin such as GitHub Pages; it will not work reliably from `file://`.
- Offline support covers only the cached app shell, not external job boards.
- No PDF or DOCX resume parsing in the app.
- Resume tracking is text-based only in this version.
- Fit scoring is rule-based and should be treated as a review aid, not an objective truth.
- Score explanations describe the current rule-based formula but do not replace human judgment.
- Bulk import works best when copied listings follow the expected title/company/details format.
- Duplicate warnings are advisory and should be reviewed before saving selected drafts.
- Theme support depends on browser support for CSS variables, `prefers-color-scheme`, and localStorage.
- Rendered browser validation should be repeated after meaningful UI changes, especially around tabs, mobile layout, and localStorage migration states.
