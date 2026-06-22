# Roadmap

## Completed

- Created a static local web app.
- Added Julie-specific role angles:
  - Onboarding / Employee Experience
  - Training / Learning and Development
  - Project / Operations Coordination
  - Implementation / Customer Success
  - Content / Documentation Operations
- Added targeted job search links.
- Added manual job-description analysis.
- Added bulk import of copied job listings.
- Added fit score, fit category, matched keywords, possible keyword gaps, weak-fit signals, and red flags.
- Added score explanation showing baseline, boosts, penalties, and tier thresholds.
- Clarified keyword-gap output so Julie's known skills are not shown as missing when a job post does not mention them.
- Added truthful tailoring bullet suggestions.
- Added short outreach message draft.
- Added local application tracker.
- Added JSON and CSV export.
- Added duplicate detection.
- Added project documentation set.
- Added import review screen before bulk-imported jobs enter the tracker.
- Added draft editing for title, company, link, remote status, salary, source, and description/notes.
- Added duplicate warnings for import drafts.
- Added selected-draft saving and draft deletion.
- Added polished theme system with Light, Dark, and System modes.
- Added persistent theme preference in localStorage.
- Reworked visual styling with CSS variables for light and dark palettes.
- Replaced internal step-number labels with descriptive section cues.
- Added GitHub Pages-ready PWA manifest.
- Added local app icons.
- Added simple versioned service worker caching only the core app shell.
- Added Android install documentation for the GitHub Pages URL.
- Renamed the public product to `Job Search Assistant`.
- Added subtle Eric Labs branding.
- Added v2 localStorage app state under `job-search-assistant-state-v2`.
- Added automatic copy-only migration from legacy Julie tracker data into a Julie candidate profile.
- Preserved `julie-job-search-tracker-v1` without deleting, overwriting, or mutating it.
- Added a one-time migration banner with full backup and legacy tracker export options.
- Added full app backup export and validated full app backup import.
- Added candidate profile export and import.
- Added one-active-candidate profile foundation without a candidate switcher.
- Added setup-oriented empty state when no candidate profile or legacy tracker data exists.
- Added resume tracking v1 with label, notes, and optional pasted resume text.
- Added salary preference fields for minimum pay, pay-must-be-listed, and notes.
- Added four fit categories:
  - Strong fit
  - Possible fit
  - Stretch
  - Not worth applying
- Added `No pay listed` as a quality/visibility flag without making it a score penalty.
- Added in-page tabs for Jobs, Skills, Resume, and Profile / Settings.
- Made Jobs the default landing tab when an active candidate exists.
- Moved skills/tools/proof-point editing into the Skills tab.
- Moved resume tracking v1 fields into the Resume tab.
- Moved profile, salary, backup, and import/export controls into Profile / Settings.
- Added a subtle active-candidate indicator near the tab navigation.
- Added a compact Data Safety panel in Profile / Settings.

## Current Milestone

Validate the v0.6.1 navigation polish with real browser data.

Priority work:

- Have Julie open the updated GitHub Pages app on her own PC/browser.
- Confirm her old tracker data is copied into the new v2 app state.
- Export Full Backup immediately after migration.
- Export Legacy Julie Tracker if the button is visible.
- Confirm the migration banner appears once and can be dismissed.
- Confirm Jobs is the default tab after migration.
- Confirm Skills, Resume, and Profile / Settings save correctly.
- Confirm existing tracker jobs remain visible and editable.
- Confirm new candidate profile fields save locally.
- Confirm full backup import rejects invalid files and asks before replacing data.
- Confirm the app still works from the Android installed PWA after refresh.
- Keep all application actions manual and approval-based.

## Next Milestone

Run a real-listing validation pass after migration is confirmed.

Highest-value next milestone:

- Test the app with 10-15 real copied listings from the target search boards.
- Test the app in Light, Dark, and System modes during that pass.
- Test the GitHub Pages PWA install flow on Android.
- Confirm four fit categories feel understandable to Julie.
- Confirm `No pay listed` is visible but not over-weighted.
- Note where parsing succeeds or fails.
- Note whether scores feel aligned with human judgment.
- Improve only the smallest usability issues found during that test.
- Keep scoring logic unchanged unless there is clear evidence it needs adjustment.

This milestone prioritizes usability and confidence before adding new capabilities.

## Future Ideas

- Saved search presets by role category.
- Search-session checklist.
- Better scoring explanations.
- Strong-fit queue view.
- Candidate profile editor improvements.
- Multiple candidate profiles and candidate switcher.
- Resume version duplicate/tweak workflow per job.
- Backup restore preview before import.
- Follow-up reminders.
- Company research checklist.
- Application quality score.
- Role-category analytics.
- Resume version labels without storing full resume files.
- Optional AI-assisted job summary.

## Deferred Ideas

- Direct LinkedIn integration.
- Direct Indeed integration.
- Browser automation.
- Auto-apply workflows.
- Automated job submissions.
- Cloud sync.
- User accounts.
- Resume version history.
- AI interview prep.
- Salary negotiation assistant.
- Email automation.
- Scraping job boards without explicit approval and compliance review.
