Project Status Report

Version

0.6.1 - Navigation and Profile UX Polish.

Completed This Session

- Added in-page tabs for `Jobs`, `Skills`, `Resume`, and `Profile / Settings`.
- Made `Jobs` the default landing tab when an active candidate exists.
- Kept `Profile / Settings` as the default no-data/setup tab when no active candidate exists.
- Added a subtle active-candidate indicator near the tab navigation.
- Moved search strategy, job discovery, import review, analyzer, fit review, and application tracker into the `Jobs` tab.
- Moved target roles, skills, tools/platforms, certifications, education, proof points, and dealbreakers into the `Skills` tab.
- Moved resume label, notes, and optional pasted resume text into the `Resume` tab.
- Moved display name, work preferences, location preferences, salary preferences, candidate import/export, full backup import/export, and legacy Julie tracker export into `Profile / Settings`.
- Added a compact `Data Safety` panel in `Profile / Settings`.
- Preserved the migration banner with `Export Full Backup`, `Export Legacy Julie Tracker`, and `Dismiss`.
- Preserved tracker JSON and CSV export behavior.
- Preserved full backup export/import and candidate profile export/import behavior.
- Preserved copy-only legacy Julie tracker migration behavior.
- Preserved the `julie-job-search-tracker-v1` key without deleting, overwriting, or mutating it.
- Bumped the service worker cache name to `julie-job-search-app-v0.6.1`.
- Updated README.md, ROADMAP.md, PROJECT_STATUS.md, DECISIONS.md, and AGENTS.md.

Current State

The app is still static, local-first, GitHub Pages-friendly, and review-first. The main workflow now starts in `Jobs` when a candidate profile is active, while profile maintenance and backups are tucked into focused tabs.

Roadmap Progress

- Completed: v0.6.0 migration foundation and v0.6.1 navigation/profile UX polish.
- Current Milestone: validate the tabbed workflow on Julie's GitHub Pages browser origin.
- Next Milestone: run a real-listing validation pass after Julie confirms migration and tabbed workflow usability.

Known Limitations

- Julie's existing GitHub Pages tracker data can only be migrated on Julie's own device/browser.
- The migration banner behavior with real legacy browser data still needs Julie-device validation.
- Full backup import opens the browser file picker and requires manual file selection.
- Download event capture was not reliable in the in-app browser runtime for Blob downloads, though export button clicks produced no app errors.
- One active candidate only; no candidate switcher yet.
- Resume tracking remains text-based only; no PDF/DOCX parsing.
- Data remains localStorage-only and origin-specific.
- Fit scoring remains rule-based and should be treated as a review aid.

Testing Checklist

- Run `node --check app.js`.
- Run `node --check service-worker.js`.
- Confirm no-data/setup state defaults to `Profile / Settings`.
- Confirm an active candidate reload defaults to `Jobs`.
- Confirm active candidate indicator updates after profile save.
- Confirm Skills tab saves target roles, skills, tools, and proof points.
- Confirm Skills tab values affect search strategy and scoring.
- Confirm Resume tab saves label, notes, and optional pasted resume text.
- Confirm Profile / Settings saves display name, work preferences, salary preferences, and Data Safety controls remain available.
- Confirm job analysis and tracker workflow still work.
- Confirm tracker JSON and CSV export buttons remain available in Jobs.
- Confirm full backup and candidate profile export/import buttons remain available in Profile / Settings.
- Confirm legacy Julie tracker export appears only when the old key exists.
- Confirm migration banner still includes backup actions and dismiss.
- Confirm mobile tab layout is usable.
- Confirm service worker cache is `julie-job-search-app-v0.6.1`.

Files Modified

- app.js
- index.html
- styles.css
- service-worker.js
- README.md
- ROADMAP.md
- PROJECT_STATUS.md
- DECISIONS.md
- AGENTS.md

Recommended Next Step

Deploy v0.6.1 to GitHub Pages and have Julie verify that her migrated tracker opens directly to the `Jobs` tab. Then export a full backup and run 5-10 real listings through the updated workflow.

Product Manager Notes

This was a workflow polish release, not a feature expansion. Keep future work focused on confidence, data safety, and job quality before adding more automation or integrations.
