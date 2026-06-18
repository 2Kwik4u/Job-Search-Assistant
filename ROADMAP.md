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
- Added fit score, fit tier, matched keywords, possible keyword gaps, weak-fit signals, and red flags.
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

## Current Milestone

Stabilize the review-first MVP with real listings and theme review.

Priority work:

- Make the app easy to use during real job-search sessions.
- Manually review light, dark, and system themes in a real browser.
- Deploy to GitHub Pages and verify installability on Android.
- Validate the scoring logic against real pasted listings.
- Confirm score explanations make sense to Julie during real use.
- Confirm import review behavior with realistic copied job posts.
- Improve clarity of review output before adding more automation.
- Keep all application actions manual and approval-based.

## Next Milestone

Run a real-listing validation pass.

Highest-value next milestone:

- Test the app with 10-15 real copied listings from the target search boards.
- Test the app in Light, Dark, and System modes during that pass.
- Test the GitHub Pages PWA install flow on Android.
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
