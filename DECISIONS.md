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
