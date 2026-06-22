# Decisions

| Date | Decision | Reason | Status |
| --- | --- | --- | --- |
| 2026-06-05 | Build the first version as a static local web app. | Fastest path to a usable review-first workflow without backend complexity. | Active |
| 2026-06-05 | Store tracker data in browser localStorage. | Keeps data local and avoids account/database setup for the MVP. | Active |
| 2026-06-05 | Use rule-based scoring before AI integration. | Transparent, easy to adjust, and safer for early validation. | Active |
| 2026-06-05 | Prioritize onboarding, L&D/training, project/ops coordination, implementation/customer success, and content/documentation roles. | These categories best match Julie's resume, profile, and review evidence. | Active |
| 2026-06-05 | Keep job-board discovery as generated search links plus copied-listing import. | A static local app cannot reliably or safely scrape major job boards. | Active |
| 2026-06-05 | Do not build auto-apply behavior. | The product is focused on better applications and human review, not mass submission. | Active |
| 2026-06-05 | Make imported jobs pass through an editable import review screen before saving. | Correcting parsed jobs before saving improves trust and usability without adding risky automation. | Active |
| 2026-06-05 | Add Light, Dark, and System theme modes using CSS variables and localStorage. | The app needs to support different user preferences while preserving the local, review-first workflow. | Active |
| 2026-06-05 | Add GitHub Pages-ready PWA support with relative paths and app-shell-only caching. | Julie should be able to install the static app on Android while preserving localStorage-only data and review-first behavior. | Active |
| 2026-06-18 | Use `2Kwik4u/Job-Search-Assistant` as the project repository. | The user identified this as the canonical GitHub repository for the project. | Active |
| 2026-06-18 | Show `Possible keyword gaps` only for watched terms found in the job post. | Julie's known skills should not appear as missing just because the job post omits those words. | Active |
| 2026-06-18 | Show a score explanation without changing the scoring formula. | Julie and reviewers need to understand why a role received its fit score before trusting or acting on it. | Active |
| 2026-06-21 | Rename the public product to `Job Search Assistant` with subtle Eric Labs branding. | The app is becoming reusable for candidate profiles while preserving Julie as the first migrated user. | Active |
| 2026-06-21 | Store reusable app state under `job-search-assistant-state-v2`. | A versioned state key allows candidate profiles, jobs, settings, and resume notes without mutating the legacy tracker key. | Active |
| 2026-06-21 | Automatically copy valid `julie-job-search-tracker-v1` jobs into a Julie candidate profile when no valid v2 state exists. | Julie's saved jobs exist only in her browser localStorage, so migration must happen safely on her device when she opens the updated GitHub Pages app. | Active |
| 2026-06-21 | Do not delete, overwrite, or mutate `julie-job-search-tracker-v1` in v0.6.0. | The legacy key is Julie's parachute backup during the first migration release. | Active |
| 2026-06-21 | Add full app backup export/import with validation and replacement confirmation. | Users need a recoverable local-first backup path before and after migration. | Active |
| 2026-06-21 | Add exact legacy Julie tracker export when the legacy key exists. | Julie needs a raw backup of the old tracker data before relying on the migrated v2 state. | Active |
| 2026-06-21 | Support one active candidate only in v0.6.0. | This keeps the migration conservative and avoids adding candidate-switching complexity before data safety is validated. | Active |
| 2026-06-21 | Use text-based resume tracking only for v0.6.0. | Labels, notes, and optional pasted resume text are useful without adding risky file parsing or cloud storage. | Active |
| 2026-06-21 | Treat `No pay listed` as a visibility flag, not a score penalty. | Pay visibility matters, but the first release should not change scoring weight before real-listing validation. | Active |
| 2026-06-22 | Add simple in-page tabs for Jobs, Skills, Resume, and Profile / Settings. | The migration foundation made the top of the app settings-heavy; tabs restore Jobs as the main workflow while keeping profile and backup controls available. | Active |
| 2026-06-22 | Keep Data Safety controls in Profile / Settings and the migration banner. | Backup/export/import actions should be available without dominating the normal job-search workflow. | Active |
