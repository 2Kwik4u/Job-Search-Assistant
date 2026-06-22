(function () {
  const APP_VERSION = "0.6.1";
  const APP_STATE_KEY = "job-search-assistant-state-v2";
  const STORAGE_KEY = "julie-job-search-tracker-v1";
  const THEME_STORAGE_KEY = "julie-theme-preference";
  const SCHEMA_VERSION = 2;
  const JULIE_CANDIDATE_ID = "julie-watkins";
  const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const roleAngles = [
    {
      name: "Onboarding / Employee Experience",
      priority: "Highest priority",
      keywords: [
        "onboarding",
        "new hire",
        "employee experience",
        "orientation",
        "people operations",
        "hr",
        "culture",
        "facilitate",
        "welcome",
        "training new",
      ],
      proof:
        "Founded and leads a 20-person volunteer onboarding team; partners with CEO and HR; manages scheduling, budgeting, training, presentations, facility tours, and welcome calls.",
      searchTerms: [
        "remote onboarding specialist",
        "remote employee experience coordinator",
        "remote people operations coordinator",
        "remote client onboarding coordinator",
      ],
    },
    {
      name: "Training / Learning and Development",
      priority: "Highest priority",
      keywords: [
        "training",
        "learning and development",
        "l&d",
        "learning",
        "curriculum",
        "learner",
        "instructional",
        "lms",
        "education",
        "facilitation",
      ],
      proof:
        "Produces construction education materials, supports learner engagement, works with LMS and curriculum workflows, and facilitates onboarding events.",
      searchTerms: [
        "remote learning and development coordinator",
        "remote training coordinator",
        "remote customer education coordinator",
        "remote curriculum operations coordinator",
      ],
    },
    {
      name: "Project / Operations Coordination",
      priority: "High priority",
      keywords: [
        "project coordinator",
        "operations coordinator",
        "workflow",
        "status",
        "jira",
        "smartsheet",
        "schedule",
        "deadline",
        "stakeholder",
        "cross-functional",
        "process improvement",
      ],
      proof:
        "Led a six-person cross-functional sprint team, presented recommendations to executive leadership, and uses Smartsheet/Jira for workflow tracking.",
      searchTerms: [
        "remote project coordinator",
        "remote operations coordinator",
        "remote project coordinator customer onboarding",
        "remote workflow coordinator",
      ],
    },
    {
      name: "Implementation / Customer Success",
      priority: "Selective priority",
      keywords: [
        "implementation",
        "customer success",
        "client success",
        "client onboarding",
        "customer onboarding",
        "salesforce",
        "case management",
        "escalation",
        "retention",
        "support operations",
      ],
      proof:
        "Managed daily support operations in Salesforce, handled case management and client correspondence, resolved escalations, and improved communication workflows.",
      searchTerms: [
        "remote implementation coordinator",
        "remote customer onboarding specialist",
        "remote customer success specialist onboarding",
        "remote client support specialist implementation",
      ],
    },
    {
      name: "Content / Documentation Operations",
      priority: "High priority",
      keywords: [
        "content coordinator",
        "documentation",
        "content operations",
        "publishing",
        "style guide",
        "template",
        "xml",
        "dita",
        "oxygen",
        "indesign",
        "production",
      ],
      proof:
        "Designs and produces education materials in Adobe InDesign; develops templates and style guides; applies CSS/XML in NCCER systems using Oxygen XML Editor.",
      searchTerms: [
        "remote content coordinator",
        "remote documentation specialist",
        "remote content operations specialist",
        "remote publishing production coordinator",
      ],
    },
  ];

  const julieTools = [
    "Adobe InDesign",
    "Adobe Illustrator",
    "Oxygen XML Editor",
    "Canva",
    "Salesforce",
    "Learning Management Systems",
    "Credentialing systems",
    "NetSuite",
    "Smartsheet",
    "Microsoft Office",
    "Jira",
    "DITA XML",
    "CSS",
  ];

  const strongFitTerms = [
    "remote",
    "cross-functional",
    "stakeholder",
    "client",
    "customer",
    "documentation",
    "training",
    "onboarding",
    "workflow",
    "coordination",
    "communication",
    "process",
    "support",
    "education",
  ];

  const weakFitTerms = [
    "cold calling",
    "quota",
    "commission only",
    "door to door",
    "senior director",
    "vp",
    "software engineer",
    "python",
    "sql required",
    "account executive",
    "hunter",
    "travel 75",
  ];

  const keywordGapTerms = [
    "hubspot",
    "zendesk",
    "intercom",
    "gainsight",
    "totango",
    "workday",
    "sap",
    "quickbooks",
    "google analytics",
    "tableau",
    "power bi",
    "advanced excel",
    "sql",
    "python",
    "html",
    "javascript",
    "api",
    "certification required",
    "bachelor's degree required",
    "pmp",
    "scrum master",
  ];

  const redFlagTerms = [
    "telegram",
    "whatsapp",
    "wire transfer",
    "startup fee",
    "equipment purchase",
    "send money",
    "personal bank",
    "social security",
    "no interview",
    "immediate hire",
    "too good to be true",
    "crypto",
  ];

  const julieSeedProfile = {
    id: JULIE_CANDIDATE_ID,
    displayName: "Julie Watkins",
    targetRoles: [
      "Customer Success Specialist",
      "Client Support Specialist",
      "Project Coordinator",
      "Operations Coordinator",
      "Onboarding Specialist",
      "Learning & Development Coordinator",
      "Training Coordinator",
      "Content Coordinator",
      "Documentation Specialist",
      "Desktop Publishing / Production Designer",
      "Implementation Coordinator",
    ],
    preferredWorkArrangements: ["Remote"],
    preferredLocations: ["Remote", "Florida", "United States"],
    salaryPreference: {
      minimumPay: "",
      payMustBeListed: false,
      notes: "",
    },
    skills: strongFitTerms,
    tools: julieTools,
    certifications: [],
    education: [],
    proofPoints: roleAngles.map((angle) => angle.proof),
    dealbreakers: [
      "commission only",
      "requests for money",
      "requests for sensitive personal information before a verified interview",
      "vague company identity",
    ],
    roleAngles,
    weakFitTerms,
    keywordGapTerms,
    redFlagTerms,
    resumeVersions: [
      {
        id: "julie-base-resume",
        label: "Base resume",
        notes: "Text-based resume tracking only. Do not invent experience when tailoring.",
        text: "",
        createdAt: "2026-06-21T00:00:00.000Z",
        updatedAt: "2026-06-21T00:00:00.000Z",
      },
    ],
  };

  const statusOptions = [
    "Saved",
    "Reviewing",
    "Tailoring Resume",
    "Ready to Apply",
    "Applied",
    "Follow Up",
    "Interview",
    "Rejected",
    "Offer",
  ];

  const sourceOptions = [
    "LinkedIn",
    "Indeed",
    "FlexJobs",
    "Remote.co",
    "We Work Remotely",
    "Idealist",
    "Company site",
    "Bulk import",
    "Other",
  ];

  const remoteStatusOptions = ["Remote", "Hybrid", "On-site", "Unknown"];

  const searchSources = [
    {
      name: "LinkedIn",
      note: "Best for networking and hiring-manager context",
      buildUrl: (query, location) =>
        `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`,
    },
    {
      name: "Indeed",
      note: "High volume; screen carefully",
      buildUrl: (query, location) =>
        `https://www.indeed.com/jobs?q=${encodeURIComponent(query)}&l=${encodeURIComponent(location)}`,
    },
    {
      name: "FlexJobs",
      note: "Filtered remote/flexible listings",
      buildUrl: (query) => `https://www.flexjobs.com/search?search=${encodeURIComponent(query)}`,
    },
    {
      name: "Remote.co",
      note: "Remote-focused board",
      buildUrl: (query) => `https://remote.co/remote-jobs/search/?search_keywords=${encodeURIComponent(query)}`,
    },
    {
      name: "We Work Remotely",
      note: "Remote-first tech-adjacent listings",
      buildUrl: (query) => `https://weworkremotely.com/remote-jobs/search?term=${encodeURIComponent(query)}`,
    },
    {
      name: "Idealist",
      note: "Education, nonprofit, and mission-driven roles",
      buildUrl: (query) =>
        `https://www.idealist.org/en/jobs?q=${encodeURIComponent(query)}&locationType=REMOTE`,
    },
    {
      name: "Company-site search",
      note: "Find direct employer postings",
      buildUrl: (query, location) =>
        `https://www.google.com/search?q=${encodeURIComponent(`${query} ${location} careers job`)}`,
    },
  ];

  const loadedState = loadAppState();
  const state = {
    appState: loadedState.appState,
    applications: loadedState.appState.jobs,
    importDrafts: [],
    latestAnalysis: null,
    migration: loadedState.migration,
  };

  const jobForm = document.querySelector("#jobForm");
  const trackerRows = document.querySelector("#trackerRows");
  const trackerSummary = document.querySelector("#trackerSummary");
  const analysisResults = document.querySelector("#analysisResults");
  const emptyResults = document.querySelector("#emptyResults");
  const strategyGrid = document.querySelector("#strategyGrid");
  const searchAngle = document.querySelector("#searchAngle");
  const searchLocation = document.querySelector("#searchLocation");
  const searchLinks = document.querySelector("#searchLinks");
  const bulkImportText = document.querySelector("#bulkImportText");
  const importReview = document.querySelector("#importReview");
  const importReviewSummary = document.querySelector("#importReviewSummary");
  const draftList = document.querySelector("#draftList");
  const themeSelect = document.querySelector("#themeSelect");
  const migrationBanner = document.querySelector("#migrationBanner");
  const profileForm = document.querySelector("#profileForm");
  const profileSetup = document.querySelector("#profileSetup");
  const profileStatus = document.querySelector("#profileStatus");
  const fullBackupInput = document.querySelector("#fullBackupInput");
  const candidateProfileInput = document.querySelector("#candidateProfileInput");
  const tabButtons = Array.from(document.querySelectorAll(".tab-button[data-tab-target]"));
  const tabPanels = Array.from(document.querySelectorAll("[data-tab-panel]"));
  const activeCandidateIndicator = document.querySelector("#activeCandidateIndicator");

  initTheme();
  initNavigation();
  renderMigrationBanner();
  renderProfile();
  renderStrategy();
  renderSearchControls();
  renderTracker();

  jobForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!activeCandidate()) {
      showInlineError("Set up or import a candidate profile before analyzing jobs.");
      return;
    }

    const formData = new FormData(jobForm);
    const description = clean(formData.get("description"));

    if (!description) {
      showInlineError("Paste a job description before analyzing.");
      return;
    }

    const application = {
      id: crypto.randomUUID(),
      company: clean(formData.get("company")) || "Unknown company",
      title: clean(formData.get("title")) || "Untitled role",
      link: clean(formData.get("link")),
      remoteStatus: clean(formData.get("remoteStatus")),
      salary: clean(formData.get("salary")),
      source: clean(formData.get("source")),
      description,
      status: "Saved",
      followUpDate: "",
      notes: "",
      candidateId: activeCandidate().id,
      createdAt: new Date().toISOString(),
      analysis: analyzeJob(description, clean(formData.get("title")), clean(formData.get("remoteStatus")), clean(formData.get("salary"))),
    };

    state.applications.unshift(application);
    state.latestAnalysis = application;
    saveAppState();
    renderAnalysis(application);
    renderTracker();
    jobForm.reset();
  });

  document.querySelector("#clearForm").addEventListener("click", () => {
    jobForm.reset();
  });

  searchAngle.addEventListener("change", renderSearchLinks);
  searchLocation.addEventListener("change", renderSearchLinks);

  document.querySelector("#importListings").addEventListener("click", () => {
    state.importDrafts = parseImportDrafts(bulkImportText.value);
    renderImportReview();
  });

  document.querySelector("#clearImport").addEventListener("click", () => {
    bulkImportText.value = "";
    state.importDrafts = [];
    importReview.hidden = true;
  });

  document.querySelector("#saveSelectedDrafts").addEventListener("click", () => {
    saveSelectedDrafts();
  });

  document.querySelector("#discardDrafts").addEventListener("click", () => {
    state.importDrafts = [];
    importReview.hidden = true;
  });

  draftList.addEventListener("change", (event) => {
    const draftCard = event.target.closest(".draft-card");
    if (!draftCard) return;
    const draft = state.importDrafts.find((item) => item.id === draftCard.dataset.id);
    if (!draft) return;

    const field = event.target.dataset.field;
    if (!field) return;

    if (field === "selected") {
      draft.selected = event.target.checked;
    } else {
      draft[field] = event.target.value;
    }
    renderImportReview();
  });

  draftList.addEventListener("input", (event) => {
    const draftCard = event.target.closest(".draft-card");
    if (!draftCard) return;
    const draft = state.importDrafts.find((item) => item.id === draftCard.dataset.id);
    if (!draft) return;

    const field = event.target.dataset.field;
    if (!field || field === "selected") return;
    draft[field] = event.target.value;
  });

  draftList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-action='delete-draft']");
    if (!deleteButton) return;
    const draftCard = event.target.closest(".draft-card");
    if (!draftCard) return;

    state.importDrafts = state.importDrafts.filter((item) => item.id !== draftCard.dataset.id);
    renderImportReview();
  });

  function initNavigation() {
    switchTab(activeCandidate() ? "jobs" : "settings");

    document.addEventListener("click", (event) => {
      const tabButton = event.target.closest("[data-tab-target]");
      if (!tabButton) return;
      event.preventDefault();
      switchTab(tabButton.dataset.tabTarget);
    });
  }

  function switchTab(tabName) {
    const normalizedTab = ["jobs", "skills", "resume", "settings"].includes(tabName) ? tabName : "jobs";
    state.activeTab = normalizedTab;

    tabButtons.forEach((button) => {
      const isActive = button.dataset.tabTarget === normalizedTab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      panel.hidden = panel.dataset.tabPanel !== normalizedTab;
    });

    renderProfile();
  }

  function initTheme() {
    const savedTheme = loadThemePreference();
    themeSelect.value = savedTheme;
    applyThemePreference(savedTheme);

    themeSelect.addEventListener("change", () => {
      const nextPreference = themeSelect.value;
      saveThemePreference(nextPreference);
      applyThemePreference(nextPreference);
    });

    systemThemeQuery.addEventListener("change", () => {
      if (loadThemePreference() === "system") {
        applyThemePreference("system");
      }
    });
  }

  function loadThemePreference() {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      return ["light", "dark", "system"].includes(savedTheme) ? savedTheme : "system";
    } catch {
      return "system";
    }
  }

  function saveThemePreference(preference) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      // Theme preference is noncritical; the app can still run without persistence.
    }
  }

  function applyThemePreference(preference) {
    document.documentElement.dataset.themePreference = preference;
    if (preference === "light" || preference === "dark") {
      document.documentElement.dataset.theme = preference;
      return;
    }

    delete document.documentElement.dataset.theme;
  }

  document.querySelector("#exportJson").addEventListener("click", () => {
    downloadFile("application-tracker.json", JSON.stringify(state.applications, null, 2), "application/json");
  });

  document.querySelector("#exportCsv").addEventListener("click", () => {
    downloadFile("application-tracker.csv", toCsv(state.applications), "text/csv");
  });

  document.querySelector("#exportFullBackup").addEventListener("click", exportFullBackup);
  document.querySelector("#importFullBackup").addEventListener("click", () => fullBackupInput.click());
  document.querySelector("#exportCandidateProfile").addEventListener("click", exportCandidateProfile);
  document.querySelector("#importCandidateProfile").addEventListener("click", () => candidateProfileInput.click());
  document.querySelector("#exportLegacyTracker").addEventListener("click", exportLegacyTracker);
  document.querySelector("#exportFullBackupFromBanner").addEventListener("click", exportFullBackup);
  document.querySelector("#exportLegacyFromBanner").addEventListener("click", exportLegacyTracker);
  document.querySelector("#dismissMigrationBanner").addEventListener("click", () => {
    state.appState.settings.legacyJulieBannerDismissed = true;
    saveAppState();
    renderMigrationBanner();
  });
  document.querySelector("#createBlankProfile").addEventListener("click", () => {
    if (activeCandidate() && !window.confirm("Replace the active candidate profile with a blank profile? Tracker jobs will remain in place.")) {
      return;
    }
    setActiveCandidate(createBlankCandidateProfile());
    saveAppState();
    switchTab("skills");
    renderAll();
    showProfileMessage("Blank candidate profile created. Add truthful skills, tools, and resume notes before scoring jobs.", "success");
  });

  document.querySelector("#clearTracker").addEventListener("click", () => {
    const confirmed = window.confirm("Clear all saved applications from this browser?");
    if (!confirmed) return;
    state.applications = [];
    state.appState.jobs = state.applications;
    state.latestAnalysis = null;
    saveAppState();
    renderTracker();
    analysisResults.hidden = true;
    emptyResults.hidden = false;
  });

  fullBackupInput.addEventListener("change", () => importFullBackup(fullBackupInput));
  candidateProfileInput.addEventListener("change", () => importCandidateProfile(candidateProfileInput));

  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const candidate = activeCandidate();
    if (!candidate) {
      switchTab("settings");
      showProfileMessage("Create or import a candidate profile before saving profile details.", "error");
      return;
    }
    const formData = new FormData(profileForm);
    updateCandidateFromForm(candidate, formData);
    saveAppState();
    renderAll();
    showProfileMessage("Candidate profile saved in this browser.", "success");
  });

  trackerRows.addEventListener("change", (event) => {
    const row = event.target.closest("tr");
    if (!row) return;
    const app = state.applications.find((item) => item.id === row.dataset.id);
    if (!app) return;

    if (event.target.name === "status") app.status = event.target.value;
    if (event.target.name === "followUpDate") app.followUpDate = event.target.value;
    if (event.target.name === "notes") app.notes = event.target.value;
    saveAppState();
    renderTrackerSummary();
  });

  trackerRows.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-action='view']");
    const deleteButton = event.target.closest("[data-action='delete']");
    const row = event.target.closest("tr");
    if (!row) return;

    if (viewButton) {
      const app = state.applications.find((item) => item.id === row.dataset.id);
      if (app) renderAnalysis(app);
    }

    if (deleteButton) {
      state.applications = state.applications.filter((item) => item.id !== row.dataset.id);
      state.appState.jobs = state.applications;
      saveAppState();
      renderTracker();
    }
  });

  function analyzeJob(description, title, remoteStatus, salary) {
    const candidate = activeCandidate();
    const candidateRoleAngles = candidate && candidate.roleAngles && candidate.roleAngles.length ? candidate.roleAngles : [];
    const candidateTools = candidate && candidate.tools && candidate.tools.length ? candidate.tools : [];
    const candidateStrengths = candidate && candidate.skills && candidate.skills.length ? candidate.skills : [];
    const candidateWeakTerms = candidate && candidate.weakFitTerms && candidate.weakFitTerms.length ? candidate.weakFitTerms : weakFitTerms;
    const candidateGapTerms = candidate && candidate.keywordGapTerms && candidate.keywordGapTerms.length ? candidate.keywordGapTerms : keywordGapTerms;
    const candidateRedFlagTerms = candidate && candidate.redFlagTerms && candidate.redFlagTerms.length ? candidate.redFlagTerms : redFlagTerms;

    if (!candidate || !candidateRoleAngles.length) {
      return createEmptyAnalysis();
    }

    const haystack = `${title} ${description}`.toLowerCase();
    const angleMatches = candidateRoleAngles
      .map((angle) => ({
        ...angle,
        matches: findMatches(haystack, angle.keywords),
      }))
      .sort((a, b) => b.matches.length - a.matches.length);

    const bestAngle = angleMatches[0];
    const matchedTools = candidateTools.filter((tool) => haystack.includes(tool.toLowerCase()));
    const matchedStrengths = findMatches(haystack, candidateStrengths);
    const weakAreas = findMatches(haystack, candidateWeakTerms);
    const redFlags = findMatches(haystack, candidateRedFlagTerms);
    const keywordGaps = findMatches(haystack, candidateGapTerms);
    const remotePenalty = remoteStatus !== "Remote" && /remote|work from home|distributed/.test(haystack) === false ? 6 : 0;
    const qualityFlags = getQualityFlags(description, title, salary);

    const baseline = 42;
    const roleKeywordPoints = Math.min(bestAngle.matches.length * 6, 30);
    const toolPoints = Math.min(matchedTools.length * 4, 16);
    const strengthPoints = Math.min(matchedStrengths.length * 2, 14);
    const weakSignalPenalty = Math.min(weakAreas.length * 7, 24);
    const redFlagPenalty = Math.min(redFlags.length * 12, 36);

    let score = baseline;
    score += roleKeywordPoints;
    score += toolPoints;
    score += strengthPoints;
    score -= weakSignalPenalty;
    score -= redFlagPenalty;
    score -= remotePenalty;
    const unclampedScore = score;
    score = Math.max(1, Math.min(100, score));

    return {
      score,
      fitTier: scoreToFitTier(score),
      bestAngle: bestAngle.name,
      priority: bestAngle.priority,
      matchedAngleKeywords: bestAngle.matches,
      matchedTools,
      matchedStrengths,
      keywordGaps,
      weakAreas,
      redFlags,
      qualityFlags,
      proof: bestAngle.proof,
      scoreBreakdown: {
        baseline,
        additions: [
          {
            label: "Role keyword matches",
            value: roleKeywordPoints,
            detail: bestAngle.matches.length
              ? bestAngle.matches.join(", ")
              : "No strong category keywords from this role angle were found.",
          },
          {
            label: `${candidate.displayName || "Candidate"} tool matches`,
            value: toolPoints,
            detail: matchedTools.length
              ? matchedTools.join(", ")
              : "No modeled candidate tools were mentioned in this listing.",
          },
          {
            label: "Transferable strengths",
            value: strengthPoints,
            detail: matchedStrengths.length
              ? matchedStrengths.join(", ")
              : "Few general strength signals were found in this listing.",
          },
        ],
        penalties: [
          {
            label: "Weak-fit signals",
            value: weakSignalPenalty,
            detail: weakAreas.length
              ? weakAreas.join(", ")
              : "No major weak-fit terms were detected.",
          },
          {
            label: "Safety red flags",
            value: redFlagPenalty,
            detail: redFlags.length
              ? redFlags.join(", ")
              : "No scam or suspicious-job red flags were detected.",
          },
          {
            label: "Remote clarity",
            value: remotePenalty,
            detail: remotePenalty
              ? "The listing or selected status does not clearly support remote work."
              : "Remote status is selected or the listing includes remote language.",
          },
        ],
        unclampedScore,
      },
      suggestedBullets: makeBullets(bestAngle.name),
      messageDraft: makeMessage(bestAngle.name, candidate),
      recommendation: makeRecommendation(score, redFlags, weakAreas),
    };
  }

  function makeBullets(angleName) {
    const bullets = {
      "Onboarding / Employee Experience": [
        "Founded and lead a volunteer onboarding team supporting new-hire orientation, scheduling, resource development, facility tours, welcome calls, and culture-focused presentations.",
        "Partner with HR and executive leadership to align onboarding activities with company culture, employee experience goals, and organizational priorities.",
        "Train and coordinate onboarding volunteers while managing task delegation, event logistics, and ongoing process improvements.",
      ],
      "Training / Learning and Development": [
        "Produce learner-centered education materials by coordinating content, layout, accessibility, and design feedback across publishing and curriculum workflows.",
        "Support training and onboarding experiences through presentation facilitation, resource development, team coordination, and stakeholder communication.",
        "Apply LMS, credentialing, XML, and publishing-system knowledge to help structure and deliver training content across digital and print formats.",
      ],
      "Project / Operations Coordination": [
        "Led a six-person cross-functional sprint team through customer feedback sessions, market research, data review, business-case development, and executive presentation.",
        "Coordinate project workflows, status tracking, deadlines, and cross-functional communication using tools including Smartsheet and Jira.",
        "Identify process gaps and improvement opportunities by combining stakeholder feedback, operational detail, and big-picture business context.",
      ],
      "Implementation / Customer Success": [
        "Managed support operations in Salesforce, including case management, client correspondence, issue escalation, and timely customer resolution.",
        "Improved client experience by strengthening communication workflows, analyzing feedback, and proactively supporting service updates.",
        "Partnered with internal teams to resolve customer issues, clarify requirements, and maintain a positive client experience.",
      ],
      "Content / Documentation Operations": [
        "Design and produce education materials using Adobe InDesign while maintaining brand alignment, layout quality, and multi-format publishing standards.",
        "Develop and maintain templates, style guides, and structured publishing workflows to improve consistency, scalability, and production efficiency.",
        "Apply CSS, XML, DITA workflows, and Oxygen XML Editor to structure, validate, and export content for digital platforms.",
      ],
    };

    return bullets[angleName] || bullets["Project / Operations Coordination"];
  }

  function makeMessage(angleName, candidate) {
    const proofPoints = candidate && Array.isArray(candidate.proofPoints) ? candidate.proofPoints.slice(0, 3) : [];
    const proofSummary = proofPoints.length
      ? proofPoints.join(" ")
      : "My background includes practical coordination, communication, and support work.";
    return `Hi, I am interested in this role because it sits at the intersection of ${angleName.toLowerCase()}, communication, and practical support work. ${proofSummary} I would welcome the chance to discuss how that mix could support your team.`;
  }

  function makeRecommendation(score, redFlags, weakAreas) {
    if (redFlags.length) return "Hold for manual review. This listing contains possible scam or quality red flags.";
    if (score >= 85) return "Prioritize. Tailor the resume and prepare a short, role-specific message.";
    if (score >= 70) return "Review selectively. Apply if the company, salary, and remote terms are strong.";
    if (score >= 55) return "Stretch. Review only if there is a strategic reason, strong company fit, or unusually good work conditions.";
    if (weakAreas.length) return "Likely low priority. The role may lean away from the candidate's strongest evidence.";
    return "Low priority unless there is a strategic reason to pursue it.";
  }

  function scoreToFitTier(score) {
    if (score >= 85) return "Strong fit";
    if (score >= 70) return "Possible fit";
    if (score >= 55) return "Stretch";
    return "Not worth applying";
  }

  function scoreClass(analysis) {
    const tier = analysis && analysis.fitTier ? analysis.fitTier : scoreToFitTier(Number(analysis && analysis.score) || 0);
    if (tier === "Strong fit") return "strong";
    if (tier === "Possible fit") return "possible";
    if (tier === "Stretch") return "stretch";
    return "not-worth";
  }

  function normalizeFitTier(analysis) {
    if (!analysis) return "Not worth applying";
    const score = Number(analysis.score);
    if (Number.isFinite(score)) return scoreToFitTier(score);
    if (analysis.fitTier === "Strong") return "Strong fit";
    if (analysis.fitTier === "Moderate") return "Possible fit";
    if (analysis.fitTier === "Weak") return "Stretch";
    return analysis.fitTier || "Not worth applying";
  }

  function createEmptyAnalysis() {
    return {
      score: 1,
      fitTier: "Not worth applying",
      bestAngle: "No active candidate profile",
      priority: "Setup required",
      matchedAngleKeywords: [],
      matchedTools: [],
      matchedStrengths: [],
      keywordGaps: [],
      weakAreas: [],
      redFlags: [],
      qualityFlags: [],
      proof: "Set up or import a candidate profile before analyzing jobs.",
      scoreBreakdown: {
        baseline: 0,
        additions: [],
        penalties: [],
        unclampedScore: 0,
      },
      suggestedBullets: [],
      messageDraft: "",
      recommendation: "Set up or import a candidate profile before scoring this job.",
    };
  }

  function getQualityFlags(description, title, salary) {
    const visiblePay = clean(salary);
    const haystack = `${title} ${description}`.toLowerCase();
    const payMentioned = visiblePay || /\$|salary|compensation|pay range|hourly|per hour|annually|annual/.test(haystack);
    return payMentioned ? [] : ["No pay listed"];
  }

  function renderStrategy() {
    strategyGrid.innerHTML = "";
    const candidate = activeCandidate();
    const candidateRoleAngles = candidate && candidate.roleAngles && candidate.roleAngles.length ? candidate.roleAngles : [];
    if (!candidateRoleAngles.length) {
      strategyGrid.innerHTML = `
        <div class="empty-state">
          <strong>No search strategy yet.</strong>
          <p>Import or create a candidate profile to generate role-specific search terms.</p>
        </div>
      `;
      return;
    }

    candidateRoleAngles.forEach((angle) => {
      const card = document.createElement("article");
      card.className = "strategy-card";
      card.innerHTML = `
        <div class="strategy-head">
          <h3>${escapeHtml(angle.name)}</h3>
          <span>${escapeHtml(angle.priority)}</span>
        </div>
        <p>${escapeHtml(angle.proof)}</p>
        <div class="tag-list">
          ${angle.searchTerms.map((term) => `<span class="tag">${escapeHtml(term)}</span>`).join("")}
        </div>
      `;
      strategyGrid.append(card);
    });
  }

  function renderSearchControls() {
    const candidate = activeCandidate();
    const candidateRoleAngles = candidate && candidate.roleAngles && candidate.roleAngles.length ? candidate.roleAngles : [];
    searchAngle.innerHTML = candidateRoleAngles
      .map((angle) => `<option value="${escapeAttribute(angle.name)}">${escapeHtml(angle.name)}</option>`)
      .join("");
    renderSearchLinks();
  }

  function renderSearchLinks() {
    const candidate = activeCandidate();
    const candidateRoleAngles = candidate && candidate.roleAngles && candidate.roleAngles.length ? candidate.roleAngles : [];
    const angle = candidateRoleAngles.find((item) => item.name === searchAngle.value) || candidateRoleAngles[0];
    if (!angle) {
      searchLinks.innerHTML = `
        <div class="empty-state">
          <strong>No candidate search links yet.</strong>
          <p>Set up a candidate profile to build targeted job-board searches.</p>
        </div>
      `;
      return;
    }
    const location = searchLocation.value || "Remote";
    const primaryTerm = angle.searchTerms[0];

    searchLinks.innerHTML = searchSources
      .map((source) => {
        const url = source.buildUrl(primaryTerm, location);
        return `
          <article class="search-source">
            <div>
              <h3>${escapeHtml(source.name)}</h3>
              <p>${escapeHtml(source.note)}</p>
            </div>
            <a href="${escapeAttribute(url)}" target="_blank" rel="noreferrer">Open search</a>
          </article>
        `;
      })
      .join("");
  }

  function renderAnalysis(application) {
    const analysis = application.analysis && application.analysis.scoreBreakdown
      ? application.analysis
      : analyzeJob(application.description || "", application.title || "", application.remoteStatus || "Unknown", application.salary || "");
    emptyResults.hidden = true;
    analysisResults.hidden = false;
    analysisResults.innerHTML = `
      <div class="score-card ${scoreClass(analysis)}">
        <div>
          <span class="score">${analysis.score}</span>
          <span class="score-label">/100</span>
        </div>
        <div>
          <strong>${escapeHtml(normalizeFitTier(analysis))}</strong>
          <p>${escapeHtml(analysis.recommendation)}</p>
        </div>
      </div>

      ${renderScoreExplanation(analysis)}

      <dl class="analysis-meta">
        <div><dt>Company</dt><dd>${escapeHtml(application.company)}</dd></div>
        <div><dt>Role</dt><dd>${escapeHtml(application.title)}</dd></div>
        <div><dt>Best angle</dt><dd>${escapeHtml(analysis.bestAngle)}</dd></div>
        <div><dt>Source proof</dt><dd>${escapeHtml(analysis.proof)}</dd></div>
      </dl>

      ${renderTags("Matched role keywords", analysis.matchedAngleKeywords)}
      ${renderTags("Matched tools", analysis.matchedTools)}
      ${renderTags("Transferable strengths", analysis.matchedStrengths)}
      ${renderTags("Possible keyword gaps", analysis.keywordGaps || [])}
      ${renderTags("Quality / visibility flags", analysis.qualityFlags || [], "warning")}
      ${renderTags("Weak-fit signals", analysis.weakAreas)}
      ${renderTags("Red flags", analysis.redFlags, "danger")}

      <section class="suggestions">
        <h3>Truthful Tailoring Suggestions</h3>
        <ul>
          ${analysis.suggestedBullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
        </ul>
      </section>

      <section class="suggestions">
        <h3>Short Message Draft</h3>
        <p>${escapeHtml(analysis.messageDraft)}</p>
      </section>
    `;
  }

  function renderScoreExplanation(analysis) {
    const breakdown = analysis.scoreBreakdown;
    if (!breakdown) return "";

    const totalAdded = breakdown.additions.reduce((sum, item) => sum + item.value, 0);
    const totalSubtracted = breakdown.penalties.reduce((sum, item) => sum + item.value, 0);

    return `
      <section class="score-explanation">
        <h3>Why this score?</h3>
        <p>This starts from a neutral baseline of ${breakdown.baseline}. The analyzer added ${totalAdded} points for role fit signals and subtracted ${totalSubtracted} points for weak-fit, safety, or remote-clarity concerns.</p>
        <ul>
          ${breakdown.additions.map((item) => renderScoreLine(item, "+")).join("")}
          ${breakdown.penalties.map((item) => renderScoreLine(item, "-")).join("")}
        </ul>
        <p class="score-note">Fit categories: 85-100 is Strong fit, 70-84 is Possible fit, 55-69 is Stretch, and below 55 is Not worth applying. No pay listed is a visibility flag only, not a score penalty. This is a review aid, not a final decision.</p>
      </section>
    `;
  }

  function renderScoreLine(item, sign) {
    const value = item.value ? `${sign}${item.value}` : "0";
    return `
      <li>
        <strong>${escapeHtml(value)} ${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.detail)}</span>
      </li>
    `;
  }

  function renderTags(title, tags, tone) {
    tags = Array.isArray(tags) ? tags : [];
    if (!tags.length) return "";
    return `
      <section class="tag-section">
        <h3>${escapeHtml(title)}</h3>
        <div class="tag-list">
          ${tags.map((tag) => `<span class="tag ${tone || ""}">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </section>
    `;
  }

  function renderTracker() {
    trackerRows.innerHTML = "";
    if (!state.applications.length) {
      trackerRows.innerHTML = '<tr><td colspan="10" class="empty-row">No saved applications yet.</td></tr>';
      renderTrackerSummary();
      return;
    }

    state.applications.forEach((app) => {
      const analysis = app.analysis || createEmptyAnalysis();
      const row = document.createElement("tr");
      row.dataset.id = app.id;
      row.innerHTML = `
        <td>
          <strong>${escapeHtml(app.company)}</strong>
          ${safeUrl(app.link) ? `<a href="${escapeAttribute(safeUrl(app.link))}" target="_blank" rel="noreferrer">Open</a>` : ""}
        </td>
        <td>${escapeHtml(app.title)}</td>
        <td><span class="mini-score ${scoreClass(analysis)}">${analysis.score}</span></td>
        <td>${escapeHtml(analysis.bestAngle)}</td>
        <td>${escapeHtml(app.remoteStatus)}</td>
        <td>${escapeHtml(app.salary)}</td>
        <td>
          <select name="status">
            ${statusOptions.map((status) => `<option ${status === app.status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </td>
        <td><input name="followUpDate" type="date" value="${escapeAttribute(app.followUpDate || "")}"></td>
        <td><textarea name="notes" rows="2" placeholder="Notes">${escapeHtml(app.notes || "")}</textarea></td>
        <td class="row-actions">
          <button type="button" class="small" data-action="view">View</button>
          <button type="button" class="small danger" data-action="delete">Delete</button>
        </td>
      `;
      trackerRows.append(row);
    });

    renderTrackerSummary();
  }

  function renderTrackerSummary() {
    const count = state.applications.length;
    const strong = state.applications.filter((app) => app.analysis && app.analysis.score >= 85).length;
    const ready = state.applications.filter((app) => app.status === "Ready to Apply").length;
    const applied = state.applications.filter((app) => app.status === "Applied").length;
    const avg = count ? Math.round(state.applications.reduce((sum, app) => sum + app.analysis.score, 0) / count) : 0;

    trackerSummary.innerHTML = `
      <span><strong>${count}</strong> saved</span>
      <span><strong>${strong}</strong> strong fits</span>
      <span><strong>${ready}</strong> ready</span>
      <span><strong>${applied}</strong> applied</span>
      <span><strong>${avg}</strong> avg score</span>
    `;
  }

  function findMatches(text, terms) {
    return terms.filter((term) => text.includes(term.toLowerCase()));
  }

  function parseImportDrafts(rawText) {
    const blocks = clean(rawText)
      .split(/\n\s*\n/g)
      .map((block) => block.trim())
      .filter(Boolean);

    return blocks
      .map(parseListingBlock)
      .filter(Boolean);
  }

  function parseListingBlock(block) {
    const lines = block
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length < 2) return null;

    const link = findFirstUrl(block);
    const remoteStatus = inferRemoteStatus(block);
    const salary = inferSalary(block);
    const title = stripUrl(lines[0]);
    const company = stripUrl(lines[1]);
    const description = lines.slice(2).join("\n") || block;

    return {
      id: crypto.randomUUID(),
      selected: true,
      company: company || "Unknown company",
      title: title || "Untitled role",
      link,
      remoteStatus,
      salary,
      source: "Bulk import",
      description: `${title}\n${company}\n${description}`,
      status: "Reviewing",
      followUpDate: "",
      notes: "Imported for review. Verify company site before applying.",
      createdAt: new Date().toISOString(),
    };
  }

  function renderImportReview() {
    if (!state.importDrafts.length) {
      importReview.hidden = false;
      importReviewSummary.textContent = "No valid draft jobs are ready to save.";
      draftList.innerHTML = `
        <div class="empty-state">
          <strong>No valid listings were parsed.</strong>
          <p>Use one blank line between jobs. Each job should start with a title on the first line and company on the second line.</p>
          <pre>Onboarding Specialist
Example Co
https://example.com/job
Remote - $55,000-$70,000
Paste the job description or notes here.</pre>
        </div>
      `;
      return;
    }

    const duplicateCount = state.importDrafts.filter((draft, index) => getDuplicateWarnings(draft, index).length).length;
    const selectedCount = state.importDrafts.filter((draft) => draft.selected).length;
    importReview.hidden = false;
    importReviewSummary.textContent = `${state.importDrafts.length} draft job${state.importDrafts.length === 1 ? "" : "s"} parsed. ${selectedCount} selected to save. ${duplicateCount} duplicate warning${duplicateCount === 1 ? "" : "s"}.`;

    draftList.innerHTML = state.importDrafts
      .map((draft, index) => renderDraftCard(draft, index, getDuplicateWarnings(draft, index)))
      .join("");
  }

  function renderDraftCard(draft, index, duplicateWarnings) {
    return `
      <article class="draft-card" data-id="${escapeAttribute(draft.id)}">
        <div class="draft-card-head">
          <label class="check-label">
            <input type="checkbox" data-field="selected" ${draft.selected ? "checked" : ""}>
            Save this draft
          </label>
          <button type="button" class="small danger" data-action="delete-draft">Delete Draft</button>
        </div>

        ${duplicateWarnings.length ? `
          <div class="duplicate-warning">
            <strong>Duplicate warning</strong>
            <ul>${duplicateWarnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}</ul>
          </div>
        ` : ""}

        <div class="draft-grid">
          <label>
            Job title
            <input data-field="title" value="${escapeAttribute(draft.title)}">
          </label>
          <label>
            Company
            <input data-field="company" value="${escapeAttribute(draft.company)}">
          </label>
          <label>
            Link
            <input data-field="link" type="url" value="${escapeAttribute(draft.link)}">
          </label>
          <label>
            Remote status
            <select data-field="remoteStatus">
              ${remoteStatusOptions.map((option) => `<option ${option === draft.remoteStatus ? "selected" : ""}>${option}</option>`).join("")}
            </select>
          </label>
          <label>
            Salary
            <input data-field="salary" value="${escapeAttribute(draft.salary)}">
          </label>
          <label>
            Source
            <select data-field="source">
              ${sourceOptions.map((option) => `<option ${option === draft.source ? "selected" : ""}>${option}</option>`).join("")}
            </select>
          </label>
        </div>

        <label>
          Description / notes
          <textarea data-field="description" rows="6">${escapeHtml(draft.description)}</textarea>
        </label>
      </article>
    `;
  }

  function saveSelectedDrafts() {
    if (!activeCandidate()) {
      importReview.hidden = false;
      importReviewSummary.textContent = "Set up or import a candidate profile before saving imported jobs to the tracker.";
      return;
    }

    const selectedDrafts = state.importDrafts.filter((draft) => draft.selected);
    if (!selectedDrafts.length) {
      importReview.hidden = false;
      importReviewSummary.textContent = "Select at least one draft before saving.";
      return;
    }

    const savedApplications = selectedDrafts.map((draft) => {
      const application = {
        id: crypto.randomUUID(),
        company: clean(draft.company) || "Unknown company",
        title: clean(draft.title) || "Untitled role",
        link: clean(draft.link),
        remoteStatus: clean(draft.remoteStatus) || "Unknown",
        salary: clean(draft.salary),
        source: clean(draft.source) || "Bulk import",
        description: clean(draft.description) || `${draft.title}\n${draft.company}`,
        status: "Reviewing",
        followUpDate: "",
        notes: "Imported after manual review. Verify company site before applying.",
        candidateId: activeCandidate().id,
        createdAt: new Date().toISOString(),
      };
      application.analysis = analyzeJob(application.description, application.title, application.remoteStatus, application.salary);
      return application;
    });

    state.applications = [...savedApplications, ...state.applications];
    state.appState.jobs = state.applications;
    state.importDrafts = state.importDrafts.filter((draft) => !draft.selected);
    state.latestAnalysis = savedApplications[0];
    saveAppState();
    renderAnalysis(savedApplications[0]);
    renderTracker();
    renderImportReview();

    if (!state.importDrafts.length) {
      bulkImportText.value = "";
      importReview.hidden = true;
    }
  }

  function findFirstUrl(value) {
    const match = String(value || "").match(/https?:\/\/[^\s)]+/i);
    return match ? match[0].replace(/[.,;]+$/, "") : "";
  }

  function stripUrl(value) {
    return clean(value).replace(/https?:\/\/[^\s)]+/gi, "").trim();
  }

  function inferRemoteStatus(value) {
    const text = String(value || "").toLowerCase();
    if (/hybrid/.test(text)) return "Hybrid";
    if (/on-site|onsite|in office/.test(text)) return "On-site";
    if (/remote|work from home|distributed/.test(text)) return "Remote";
    return "Unknown";
  }

  function inferSalary(value) {
    const text = String(value || "");
    const range = text.match(/\$?\d{2,3}(?:,\d{3})?\s?(?:k|K|000)?\s?[-\u2013]\s?\$?\d{2,3}(?:,\d{3})?\s?(?:k|K|000)?/);
    if (range) return range[0];
    const hourly = text.match(/\$\d{2,3}(?:\.\d{2})?\s?(?:\/|per )?h(?:ou)?r/i);
    return hourly ? hourly[0] : "";
  }

  function getDuplicateWarnings(draft, draftIndex) {
    const warnings = [];
    const candidateLink = safeUrl(draft.link);
    const existingDuplicate = state.applications.some((app) => {
      const sameLink = candidateLink && safeUrl(app.link) === candidateLink;
      const sameRole =
        clean(app.company).toLowerCase() === clean(draft.company).toLowerCase() &&
        clean(app.title).toLowerCase() === clean(draft.title).toLowerCase();
      return sameLink || sameRole;
    });

    if (existingDuplicate) {
      warnings.push("This appears to match a job already saved in the tracker.");
    }

    const draftDuplicate = state.importDrafts.some((otherDraft, otherIndex) => {
      if (otherIndex === draftIndex) return false;
      const otherLink = safeUrl(otherDraft.link);
      const sameLink = candidateLink && otherLink === candidateLink;
      const sameRole =
        clean(otherDraft.company).toLowerCase() === clean(draft.company).toLowerCase() &&
        clean(otherDraft.title).toLowerCase() === clean(draft.title).toLowerCase();
      return sameLink || sameRole;
    });

    if (draftDuplicate) {
      warnings.push("This appears to duplicate another draft in the import review list.");
    }

    return warnings;
  }

  function clean(value) {
    return String(value || "").trim();
  }

  function loadAppState() {
    const existing = readJsonFromStorage(APP_STATE_KEY);
    if (existing.ok && validateAppState(existing.value)) {
      return {
        appState: normalizeAppState(existing.value),
        migration: { migratedLegacy: false, legacyExists: legacyTrackerExists(), error: "" },
      };
    }

    const legacy = readLegacyTracker();
    if (legacy.ok && legacy.jobs.length) {
      const migratedState = createStateFromLegacyJobs(legacy.jobs);
      if (validateAppState(migratedState)) {
        try {
          localStorage.setItem(APP_STATE_KEY, JSON.stringify(migratedState));
          return {
            appState: migratedState,
            migration: { migratedLegacy: true, legacyExists: true, error: "" },
          };
        } catch {
          return {
            appState: createEmptyAppState(),
            migration: {
              migratedLegacy: false,
              legacyExists: true,
              error: "Legacy tracker data was found, but the new app backup could not be saved in this browser.",
            },
          };
        }
      }
    }

    return {
      appState: createEmptyAppState(),
      migration: {
        migratedLegacy: false,
        legacyExists: legacyTrackerExists(),
        error: existing.raw ? "Existing v2 app data could not be validated. Existing data was left untouched." : "",
      },
    };
  }

  function saveAppState() {
    const nextState = {
      ...state.appState,
      schemaVersion: SCHEMA_VERSION,
      appVersion: APP_VERSION,
      updatedAt: new Date().toISOString(),
      jobs: state.applications,
    };

    if (!validateAppState(nextState)) {
      showProfileMessage("App data failed validation and was not saved. Existing browser data was left untouched.", "error");
      return false;
    }

    try {
      localStorage.setItem(APP_STATE_KEY, JSON.stringify(nextState));
      state.appState = nextState;
      state.applications = nextState.jobs;
      return true;
    } catch {
      showProfileMessage("This browser could not save the app data. Export a backup before continuing.", "error");
      return false;
    }
  }

  function createEmptyAppState() {
    const now = new Date().toISOString();
    return {
      schemaVersion: SCHEMA_VERSION,
      appVersion: APP_VERSION,
      activeCandidateId: "",
      candidates: [],
      jobs: [],
      settings: {
        legacyJulieBannerDismissed: false,
      },
      createdAt: now,
      updatedAt: now,
    };
  }

  function createStateFromLegacyJobs(legacyJobs) {
    const now = new Date().toISOString();
    const profile = cloneProfile(julieSeedProfile);
    const jobs = legacyJobs.map((job) => normalizeJob(job, profile.id));
    return {
      schemaVersion: SCHEMA_VERSION,
      appVersion: APP_VERSION,
      activeCandidateId: profile.id,
      candidates: [profile],
      jobs,
      settings: {
        legacyJulieBannerDismissed: false,
        migratedFrom: STORAGE_KEY,
        migratedAt: now,
      },
      createdAt: now,
      updatedAt: now,
    };
  }

  function normalizeAppState(appState) {
    const normalized = {
      ...createEmptyAppState(),
      ...appState,
      schemaVersion: SCHEMA_VERSION,
      appVersion: appState.appVersion || APP_VERSION,
      settings: {
        legacyJulieBannerDismissed: false,
        ...(appState.settings || {}),
      },
    };
    normalized.candidates = Array.isArray(appState.candidates)
      ? appState.candidates.map(normalizeCandidateProfile).filter(Boolean)
      : [];
    normalized.activeCandidateId = normalized.candidates.some((candidate) => candidate.id === appState.activeCandidateId)
      ? appState.activeCandidateId
      : (normalized.candidates[0] ? normalized.candidates[0].id : "");
    normalized.jobs = Array.isArray(appState.jobs)
      ? appState.jobs.map((job) => normalizeJob(job, normalized.activeCandidateId)).filter(Boolean)
      : [];
    return normalized;
  }

  function validateAppState(appState) {
    if (!appState || typeof appState !== "object") return false;
    if (Number(appState.schemaVersion) !== SCHEMA_VERSION) return false;
    if (!Array.isArray(appState.candidates)) return false;
    if (!Array.isArray(appState.jobs)) return false;
    if (appState.activeCandidateId && !appState.candidates.some((candidate) => candidate && candidate.id === appState.activeCandidateId)) {
      return false;
    }
    return appState.candidates.every(isValidCandidateProfile) && appState.jobs.every(isValidJob);
  }

  function isValidCandidateProfile(candidate) {
    return Boolean(candidate && typeof candidate === "object" && clean(candidate.id) && clean(candidate.displayName));
  }

  function isValidJob(job) {
    return Boolean(job && typeof job === "object" && clean(job.id) && (clean(job.company) || clean(job.title)));
  }

  function normalizeCandidateProfile(candidate) {
    if (!candidate || typeof candidate !== "object") return null;
    const now = new Date().toISOString();
    const profile = {
      id: clean(candidate.id) || crypto.randomUUID(),
      displayName: clean(candidate.displayName) || "Candidate",
      targetRoles: stringList(candidate.targetRoles),
      preferredWorkArrangements: stringList(candidate.preferredWorkArrangements),
      preferredLocations: stringList(candidate.preferredLocations),
      salaryPreference: {
        minimumPay: clean(candidate.salaryPreference && candidate.salaryPreference.minimumPay),
        payMustBeListed: Boolean(candidate.salaryPreference && candidate.salaryPreference.payMustBeListed),
        notes: clean(candidate.salaryPreference && candidate.salaryPreference.notes),
      },
      skills: stringList(candidate.skills),
      tools: stringList(candidate.tools),
      certifications: stringList(candidate.certifications),
      education: stringList(candidate.education),
      proofPoints: stringList(candidate.proofPoints),
      dealbreakers: stringList(candidate.dealbreakers),
      roleAngles: normalizeRoleAngles(candidate.roleAngles),
      weakFitTerms: stringList(candidate.weakFitTerms),
      keywordGapTerms: stringList(candidate.keywordGapTerms),
      redFlagTerms: stringList(candidate.redFlagTerms),
      resumeVersions: normalizeResumeVersions(candidate.resumeVersions),
      createdAt: candidate.createdAt || now,
      updatedAt: now,
    };

    if (!profile.roleAngles.length && profile.targetRoles.length) {
      profile.roleAngles = [{
        name: "General target roles",
        priority: "Review priority",
        keywords: profile.targetRoles.concat(profile.skills).slice(0, 18),
        proof: profile.proofPoints[0] || "Use the candidate profile proof points when tailoring.",
        searchTerms: profile.targetRoles.map((role) => `remote ${role.toLowerCase()}`),
      }];
    }

    return isValidCandidateProfile(profile) ? profile : null;
  }

  function normalizeJob(job, candidateId) {
    if (!job || typeof job !== "object") return null;
    const score = Number(job.analysis && job.analysis.score);
    const analysis = job.analysis && typeof job.analysis === "object"
      ? {
          ...job.analysis,
          score: Number.isFinite(score) ? Math.max(1, Math.min(100, Math.round(score))) : 1,
          fitTier: Number.isFinite(score) ? scoreToFitTier(Math.max(1, Math.min(100, Math.round(score)))) : normalizeFitTier(job.analysis),
          qualityFlags: Array.isArray(job.analysis.qualityFlags) ? job.analysis.qualityFlags : getQualityFlags(job.description, job.title, job.salary),
        }
      : createEmptyAnalysis();

    return {
      id: clean(job.id) || crypto.randomUUID(),
      candidateId: clean(job.candidateId) || candidateId || "",
      company: clean(job.company) || "Unknown company",
      title: clean(job.title) || "Untitled role",
      link: clean(job.link),
      remoteStatus: clean(job.remoteStatus) || "Unknown",
      salary: clean(job.salary),
      source: clean(job.source),
      description: clean(job.description),
      status: clean(job.status) || "Saved",
      followUpDate: clean(job.followUpDate),
      notes: clean(job.notes),
      createdAt: job.createdAt || new Date().toISOString(),
      analysis,
    };
  }

  function normalizeRoleAngles(angles) {
    if (!Array.isArray(angles)) return [];
    return angles
      .map((angle) => ({
        name: clean(angle && angle.name),
        priority: clean(angle && angle.priority) || "Review priority",
        keywords: stringList(angle && angle.keywords),
        proof: clean(angle && angle.proof),
        searchTerms: stringList(angle && angle.searchTerms),
      }))
      .filter((angle) => angle.name && angle.keywords.length);
  }

  function normalizeResumeVersions(resumeVersions) {
    const versions = Array.isArray(resumeVersions) ? resumeVersions : [];
    return versions.map((version) => ({
      id: clean(version && version.id) || crypto.randomUUID(),
      label: clean(version && version.label) || "Resume version",
      notes: clean(version && version.notes),
      text: clean(version && version.text),
      createdAt: version && version.createdAt ? version.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
  }

  function stringList(value) {
    if (Array.isArray(value)) {
      return value.map(clean).filter(Boolean);
    }
    return clean(value)
      .split(/\r?\n|,/)
      .map(clean)
      .filter(Boolean);
  }

  function readJsonFromStorage(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return { ok: false, raw: "" };
      return { ok: true, value: JSON.parse(raw), raw };
    } catch {
      return { ok: false, raw: "invalid" };
    }
  }

  function readLegacyTracker() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ok: false, jobs: [], raw: "" };
      const parsed = JSON.parse(raw);
      const jobs = Array.isArray(parsed) ? parsed.filter(isValidJob) : [];
      return { ok: Array.isArray(parsed), jobs, raw };
    } catch {
      return { ok: false, jobs: [], raw: "" };
    }
  }

  function legacyTrackerExists() {
    try {
      return localStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      return false;
    }
  }

  function cloneProfile(profile) {
    return normalizeCandidateProfile(JSON.parse(JSON.stringify(profile)));
  }

  function activeCandidate() {
    return state.appState.candidates.find((candidate) => candidate.id === state.appState.activeCandidateId) || null;
  }

  function setActiveCandidate(candidate) {
    const normalized = normalizeCandidateProfile(candidate);
    if (!normalized) return false;
    state.appState.candidates = [normalized];
    state.appState.activeCandidateId = normalized.id;
    state.applications = state.applications.map((job) => ({ ...job, candidateId: normalized.id }));
    state.appState.jobs = state.applications;
    return true;
  }

  function createBlankCandidateProfile() {
    const now = new Date().toISOString();
    return {
      id: crypto.randomUUID(),
      displayName: "New Candidate",
      targetRoles: [],
      preferredWorkArrangements: [],
      preferredLocations: [],
      salaryPreference: {
        minimumPay: "",
        payMustBeListed: false,
        notes: "",
      },
      skills: [],
      tools: [],
      certifications: [],
      education: [],
      proofPoints: [],
      dealbreakers: [],
      roleAngles: [],
      weakFitTerms,
      keywordGapTerms,
      redFlagTerms,
      resumeVersions: [{
        id: crypto.randomUUID(),
        label: "Base resume",
        notes: "",
        text: "",
        createdAt: now,
        updatedAt: now,
      }],
      createdAt: now,
      updatedAt: now,
    };
  }

  function renderAll() {
    if (!activeCandidate() && state.activeTab !== "settings") {
      switchTab("settings");
    }
    renderMigrationBanner();
    renderProfile();
    renderStrategy();
    renderSearchControls();
    renderTracker();
    if (!activeCandidate()) {
      emptyResults.hidden = false;
      emptyResults.textContent = "Set up or import a candidate profile before scoring jobs.";
      analysisResults.hidden = true;
    }
  }

  function renderMigrationBanner() {
    const legacyExists = legacyTrackerExists();
    document.querySelector("#exportLegacyTracker").hidden = !legacyExists;
    document.querySelector("#exportLegacyFromBanner").hidden = !legacyExists;

    if (state.migration.error) {
      showProfileMessage(state.migration.error, "error");
    }

    migrationBanner.hidden = !(
      state.migration.migratedLegacy &&
      legacyExists &&
      !state.appState.settings.legacyJulieBannerDismissed
    );
  }

  function renderProfile() {
    const candidate = activeCandidate();
    renderActiveCandidateIndicator(candidate);
    profileSetup.hidden = Boolean(candidate) || state.activeTab !== "settings";
    profileForm.hidden = false;

    if (!candidate) return;

    profileForm.elements.displayName.value = candidate.displayName || "";
    profileForm.elements.preferredWorkArrangements.value = candidate.preferredWorkArrangements.join(", ");
    profileForm.elements.preferredLocations.value = candidate.preferredLocations.join(", ");
    profileForm.elements.minimumPay.value = candidate.salaryPreference.minimumPay || "";
    profileForm.elements.payMustBeListed.checked = Boolean(candidate.salaryPreference.payMustBeListed);
    profileForm.elements.salaryNotes.value = candidate.salaryPreference.notes || "";
    profileForm.elements.targetRoles.value = candidate.targetRoles.join("\n");
    profileForm.elements.skills.value = candidate.skills.join("\n");
    profileForm.elements.tools.value = candidate.tools.join("\n");
    profileForm.elements.certifications.value = candidate.certifications.join("\n");
    profileForm.elements.education.value = candidate.education.join("\n");
    profileForm.elements.proofPoints.value = candidate.proofPoints.join("\n");
    profileForm.elements.dealbreakers.value = candidate.dealbreakers.join("\n");

    const resume = candidate.resumeVersions[0] || {
      label: "",
      notes: "",
      text: "",
    };
    profileForm.elements.resumeLabel.value = resume.label || "";
    profileForm.elements.resumeNotes.value = resume.notes || "";
    profileForm.elements.resumeText.value = resume.text || "";
  }

  function renderActiveCandidateIndicator(candidate) {
    if (!activeCandidateIndicator) return;

    if (!candidate) {
      activeCandidateIndicator.textContent = "No active candidate";
      activeCandidateIndicator.classList.add("empty");
      return;
    }

    activeCandidateIndicator.textContent = `Active candidate: ${candidate.displayName || "Candidate"}`;
    activeCandidateIndicator.classList.remove("empty");
  }

  function updateCandidateFromForm(candidate, formData) {
    candidate.displayName = clean(formData.get("displayName")) || "Candidate";
    candidate.preferredWorkArrangements = stringList(formData.get("preferredWorkArrangements"));
    candidate.preferredLocations = stringList(formData.get("preferredLocations"));
    candidate.salaryPreference = {
      minimumPay: clean(formData.get("minimumPay")),
      payMustBeListed: Boolean(formData.get("payMustBeListed")),
      notes: clean(formData.get("salaryNotes")),
    };
    candidate.targetRoles = stringList(formData.get("targetRoles"));
    candidate.skills = stringList(formData.get("skills"));
    candidate.tools = stringList(formData.get("tools"));
    candidate.certifications = stringList(formData.get("certifications"));
    candidate.education = stringList(formData.get("education"));
    candidate.proofPoints = stringList(formData.get("proofPoints"));
    candidate.dealbreakers = stringList(formData.get("dealbreakers"));

    const now = new Date().toISOString();
    const existingResume = candidate.resumeVersions[0] || {
      id: crypto.randomUUID(),
      createdAt: now,
    };
    candidate.resumeVersions = [{
      id: existingResume.id,
      label: clean(formData.get("resumeLabel")) || "Base resume",
      notes: clean(formData.get("resumeNotes")),
      text: clean(formData.get("resumeText")),
      createdAt: existingResume.createdAt || now,
      updatedAt: now,
    }];

    if ((!candidate.roleAngles.length || candidate.roleAngles[0].name === "General target roles") && candidate.targetRoles.length) {
      candidate.roleAngles = normalizeCandidateProfile(candidate).roleAngles;
    }
    candidate.updatedAt = now;
  }

  function exportFullBackup() {
    const backup = {
      exportType: "job-search-assistant-full-backup",
      exportedAt: new Date().toISOString(),
      state: {
        ...state.appState,
        jobs: state.applications,
      },
      themePreference: loadThemePreference(),
      note: "Browser localStorage backup. Import only into a trusted copy of Job Search Assistant.",
    };
    downloadFile("job-search-assistant-full-backup.json", JSON.stringify(backup, null, 2), "application/json");
  }

  function exportCandidateProfile() {
    const candidate = activeCandidate();
    if (!candidate) {
      showProfileMessage("Create or import a candidate profile before exporting it.", "error");
      return;
    }
    const exportData = {
      exportType: "job-search-assistant-candidate-profile",
      exportedAt: new Date().toISOString(),
      candidate,
    };
    downloadFile(`${slugify(candidate.displayName)}-candidate-profile.json`, JSON.stringify(exportData, null, 2), "application/json");
  }

  function exportLegacyTracker() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        showProfileMessage("No legacy Julie tracker data was found in this browser.", "error");
        return;
      }
      downloadFile("julie-legacy-tracker-exact.json", raw, "application/json");
    } catch {
      showProfileMessage("Could not read the legacy Julie tracker data from this browser.", "error");
    }
  }

  function importFullBackup(input) {
    const file = input.files && input.files[0];
    if (!file) return;
    readJsonFile(file)
      .then((data) => {
        const importedState = data && data.state ? data.state : data;
        const normalized = normalizeAppState(importedState);
        if (!validateAppState(normalized)) {
          showProfileMessage("That full backup is not a valid v2 app backup. Existing data was left untouched.", "error");
          return;
        }

        const hasExistingState = Boolean(activeCandidate() || state.applications.length);
        if (hasExistingState && !window.confirm("Import this full backup and replace the current candidate profile and tracker in this browser?")) {
          showProfileMessage("Full backup import canceled. Existing data was left untouched.", "error");
          return;
        }

        const previousState = state.appState;
        const previousApplications = state.applications;
        state.appState = normalized;
        state.applications = normalized.jobs;
        if (!saveAppState()) {
          state.appState = previousState;
          state.applications = previousApplications;
          return;
        }
        state.migration.migratedLegacy = false;
        renderAll();
        showProfileMessage("Full backup imported successfully.", "success");
      })
      .catch(() => {
        showProfileMessage("Could not read that backup file. Existing data was left untouched.", "error");
      })
      .finally(() => {
        input.value = "";
      });
  }

  function importCandidateProfile(input) {
    const file = input.files && input.files[0];
    if (!file) return;
    readJsonFile(file)
      .then((data) => {
        const importedProfile = data && data.candidate ? data.candidate : data;
        const normalized = normalizeCandidateProfile(importedProfile);
        if (!normalized) {
          showProfileMessage("That file is not a valid candidate profile. Existing data was left untouched.", "error");
          return;
        }

        if (activeCandidate() && !window.confirm("Import this candidate profile and replace the active profile? Tracker jobs will remain in place.")) {
          showProfileMessage("Candidate profile import canceled. Existing data was left untouched.", "error");
          return;
        }

        setActiveCandidate(normalized);
        saveAppState();
        renderAll();
        showProfileMessage("Candidate profile imported successfully.", "success");
      })
      .catch(() => {
        showProfileMessage("Could not read that candidate profile file. Existing data was left untouched.", "error");
      })
      .finally(() => {
        input.value = "";
      });
  }

  function readJsonFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          resolve(JSON.parse(reader.result));
        } catch {
          reject(new Error("Invalid JSON"));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  }

  function showProfileMessage(message, tone) {
    profileStatus.hidden = false;
    profileStatus.className = `inline-status ${tone || ""}`;
    profileStatus.textContent = message;
  }

  function showInlineError(message) {
    emptyResults.hidden = true;
    analysisResults.hidden = false;
    analysisResults.innerHTML = `<div class="empty-state error">${escapeHtml(message)}</div>`;
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function toCsv(applications) {
    const headers = [
      "Company",
      "Job Title",
      "Link",
      "Remote Status",
      "Salary",
      "Source",
      "Score",
      "Fit Tier",
      "Best Angle",
      "Status",
      "Follow-up Date",
      "Notes",
      "Recommendation",
    ];
    const rows = applications.map((app) => [
      app.company,
      app.title,
      app.link,
      app.remoteStatus,
      app.salary,
      app.source,
      app.analysis && app.analysis.score,
      normalizeFitTier(app.analysis),
      app.analysis && app.analysis.bestAngle,
      app.status,
      app.followUpDate,
      app.notes,
      app.analysis && app.analysis.recommendation,
    ]);

    return [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  }

  function csvCell(value) {
    return `"${String(value || "").replace(/"/g, '""')}"`;
  }

  function slugify(value) {
    return clean(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "candidate";
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

  function safeUrl(value) {
    const url = clean(value);
    if (!url) return "";
    try {
      const parsed = new URL(url);
      return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
    } catch {
      return "";
    }
  }
})();
