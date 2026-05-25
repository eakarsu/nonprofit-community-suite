export const sourceProjectTools = [
  {
    "id": "ai-community-coop-time-bank-platform-source-workflow",
    "title": "AI Community Coop Time Bank Platform Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AICommunityCoopTimeBankPlatform.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AICommunityCoopTimeBankPlatform to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Community Coop Time Bank Platform source context",
    "outputLabel": "AI Community Coop Time Bank Platform source analysis",
    "signals": [
      "frontend/src/pages/SkillMatch",
      "frontend/src/AiToolPage",
      "frontend/src/main",
      "frontend/src/tools",
      "frontend/src/pages/CfAiPoweredTimeMatchingEngine",
      "frontend/src/pages/CfBlockchainBackedLedger",
      "backend/routes/ai"
    ]
  },
  {
    "id": "ai-community-coop-time-bank-platform-ai-tools",
    "title": "AI Community Coop Time Bank Platform AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AICommunityCoopTimeBankPlatform.",
    "defaultPrompt": "Review AICommunityCoopTimeBankPlatform AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Community Coop Time Bank Platform AI prompt or tool context",
    "outputLabel": "AI Community Coop Time Bank Platform AI tool response",
    "signals": [
      "frontend/src/pages/SkillMatch.jsx",
      "frontend/src/AiToolPage.jsx",
      "frontend/src/main.jsx",
      "frontend/src/tools.js",
      "frontend/src/pages/CfAiPoweredTimeMatchingEngine.jsx",
      "frontend/src/pages/CfBlockchainBackedLedger.jsx",
      "backend/routes/ai.js"
    ]
  },
  {
    "id": "ai-community-coop-time-bank-platform-cf-ai-powered-time-matching-engine-19tw25-exact-ai",
    "title": "AI Community Coop Time Bank Platform: Cf AI Powered Time Matching Engine",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfAiPoweredTimeMatchingEngine.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf AI Powered Time Matching Engine\" from AICommunityCoopTimeBankPlatform. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf AI Powered Time Matching Engine donor inputs",
    "outputLabel": "Cf AI Powered Time Matching Engine AI response",
    "signals": [
      "frontend/src/pages/CfAiPoweredTimeMatchingEngine.jsx"
    ]
  },
  {
    "id": "ai-community-coop-time-bank-platform-cf-blockchain-backed-ledger-1nl44a-exact-ai",
    "title": "AI Community Coop Time Bank Platform: Cf Blockchain Backed Ledger",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfBlockchainBackedLedger.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Blockchain Backed Ledger\" from AICommunityCoopTimeBankPlatform. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Blockchain Backed Ledger donor inputs",
    "outputLabel": "Cf Blockchain Backed Ledger AI response",
    "signals": [
      "frontend/src/pages/CfBlockchainBackedLedger.jsx"
    ]
  },
  {
    "id": "ai-community-coop-time-bank-platform-ai-5cuwes-exact-ai",
    "title": "AI Community Coop Time Bank Platform: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AICommunityCoopTimeBankPlatform. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Accessibility",
      "Availability",
      "Background",
      "Community Needs",
      "Complexity",
      "Credits At Stake",
      "Current Skills",
      "Demographics"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-source-workflow",
    "title": "AI Fundraising Campaign Optimizer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIFundraisingCampaignOptimizer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIFundraisingCampaignOptimizer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Fundraising Campaign Optimizer source context",
    "outputLabel": "AI Fundraising Campaign Optimizer source analysis",
    "signals": [
      "server/openrouter",
      "client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch",
      "server/routes/agenticGrants",
      "server/routes/ai",
      "server/routes/campaigns",
      "server/routes/emails",
      "server/routes/gap-no-volunteer-skill-matching-ai-peermatch",
      "client/tailwind.config"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-ai-tools",
    "title": "AI Fundraising Campaign Optimizer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIFundraisingCampaignOptimizer.",
    "defaultPrompt": "Review AIFundraisingCampaignOptimizer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Fundraising Campaign Optimizer AI prompt or tool context",
    "outputLabel": "AI Fundraising Campaign Optimizer AI tool response",
    "signals": [
      "server/openrouter.js",
      "client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch.jsx",
      "server/routes/agenticGrants.js",
      "server/routes/ai.js",
      "server/routes/campaigns.js",
      "server/routes/emails.js",
      "server/routes/gap-no-volunteer-skill-matching-ai-peermatch.js",
      "client/tailwind.config.js"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-gap-no-volunteer-skill-matching-ai-peermatch-v0pqu2-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Gap No Volunteer Skill Matching AI Peermatch",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Volunteer Skill Matching AI Peermatch\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Volunteer Skill Matching AI Peermatch donor inputs",
    "outputLabel": "Gap No Volunteer Skill Matching AI Peermatch AI response",
    "signals": [
      "client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch.jsx"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-agentic-grants-9e7kcz-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Agentic Grants",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticGrants.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Grants\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Grants donor inputs",
    "outputLabel": "Agentic Grants AI response",
    "signals": [
      "Annual Budget = Null",
      "Focus Area = 'General'",
      "Geography = 'United States'"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-ai-j615h1-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Budget Size Usd",
      "Campaign Focus",
      "Context",
      "Data",
      "Deadline",
      "Donor Data",
      "Donor Id",
      "Donor Ids"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-campaigns-1u0cl8-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Campaigns",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/campaigns.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaigns\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaigns donor inputs",
    "outputLabel": "Campaigns AI response",
    "signals": [
      "Amount",
      "Campaign Name",
      "Category",
      "Channels",
      "Current Performance",
      "Description",
      "Donor Id",
      "Duration"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-emails-1c8af8-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Emails",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/emails.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Emails\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Emails donor inputs",
    "outputLabel": "Emails AI response",
    "signals": [
      "Body",
      "Campaign Name",
      "Goal",
      "Purpose",
      "Status",
      "Subject",
      "Target Audience",
      "Tone"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-gap-no-volunteer-skill-matching-ai-peermatch-1ex1sl-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Gap No Volunteer Skill Matching AI Peermatch",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-volunteer-skill-matching-ai-peermatch.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Volunteer Skill Matching AI Peermatch\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Volunteer Skill Matching AI Peermatch donor inputs",
    "outputLabel": "Gap No Volunteer Skill Matching AI Peermatch AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-ai-center-42pwwt-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AICenter.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "client/src/pages/AICenter.jsx"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-ai-predictions-1p3nxn-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: AI Predictions",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIPredictions.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Predictions\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Predictions donor inputs",
    "outputLabel": "AI Predictions AI response",
    "signals": [
      "client/src/pages/AIPredictions.jsx"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-campaigns-w8m1mb-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Campaigns",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/Campaigns.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaigns\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaigns donor inputs",
    "outputLabel": "Campaigns AI response",
    "signals": [
      "Goal ($)",
      "Campaign Name",
      "Amount Raised ($)"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-cf-agentic-grant-prospecting-scanning-grant-g0e97p-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Cf Agentic Grant Prospecting Scanning Grant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfAgenticGrantProspectingScanningGrant.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Grant Prospecting Scanning Grant\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Grant Prospecting Scanning Grant donor inputs",
    "outputLabel": "Cf Agentic Grant Prospecting Scanning Grant AI response",
    "signals": [
      "client/src/pages/CfAgenticGrantProspectingScanningGrant.jsx"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-cf-peer-to-peer-fundraising-team-builder-wyio6k-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Cf Peer To Peer Fundraising Team Builder",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfPeerToPeerFundraisingTeamBuilder.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Peer To Peer Fundraising Team Builder\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Peer To Peer Fundraising Team Builder donor inputs",
    "outputLabel": "Cf Peer To Peer Fundraising Team Builder AI response",
    "signals": [
      "client/src/pages/CfPeerToPeerFundraisingTeamBuilder.jsx"
    ]
  },
  {
    "id": "ai-fundraising-campaign-optimizer-emails-1n0k7d-exact-ai",
    "title": "AI Fundraising Campaign Optimizer: Emails",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/Emails.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Emails\" from AIFundraisingCampaignOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Emails donor inputs",
    "outputLabel": "Emails AI response",
    "signals": [
      "Subject"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-source-workflow",
    "title": "AI Nonprofit Field Operations Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AINonprofitFieldOperationsManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AINonprofitFieldOperationsManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Nonprofit Field Operations Manager source context",
    "outputLabel": "AI Nonprofit Field Operations Manager source analysis",
    "signals": [
      "frontend/src/pages/AIBacklogPage",
      "frontend/src/pages/AIPage",
      "frontend/src/pages/AIPredictivePage",
      "frontend/src/pages/CFAgenticVolunteerDispatchPage",
      "frontend/src/pages/CFComplianceAuditAgentPage",
      "backend/routes/ai",
      "backend/routes/aiBacklog",
      "backend/routes/customFeat01_AgenticVolunteerDispatch"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-ai-tools",
    "title": "AI Nonprofit Field Operations Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AINonprofitFieldOperationsManager.",
    "defaultPrompt": "Review AINonprofitFieldOperationsManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Nonprofit Field Operations Manager AI prompt or tool context",
    "outputLabel": "AI Nonprofit Field Operations Manager AI tool response",
    "signals": [
      "frontend/src/pages/AIBacklogPage.js",
      "frontend/src/pages/AIPage.js",
      "frontend/src/pages/AIPredictivePage.js",
      "frontend/src/pages/CFAgenticVolunteerDispatchPage.js",
      "frontend/src/pages/CFComplianceAuditAgentPage.js",
      "backend/routes/ai.js",
      "backend/routes/aiBacklog.js",
      "backend/routes/customFeat01_AgenticVolunteerDispatch.js"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-ai-backlog-page-jjeqf9-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: AI Backlog Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBacklogPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Backlog Page\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Backlog Page donor inputs",
    "outputLabel": "AI Backlog Page AI response",
    "signals": [
      "Action",
      "Body",
      "Case Id",
      "Entity Id",
      "Entity Type",
      "Program Id",
      "Recipients",
      "Subject"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-ai-predictive-page-f6y2ml-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: AI Predictive Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPredictivePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Predictive Page\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Predictive Page donor inputs",
    "outputLabel": "AI Predictive Page AI response",
    "signals": [
      "Available Resources",
      "Case Id",
      "Constraints",
      "Economic Context",
      "Historical Data",
      "History Summary",
      "Lookback Days",
      "Needs"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-cf-agentic-volunteer-dispatch-page-gurwb0-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: CF Agentic Volunteer Dispatch Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CFAgenticVolunteerDispatchPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"CF Agentic Volunteer Dispatch Page\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "CF Agentic Volunteer Dispatch Page donor inputs",
    "outputLabel": "CF Agentic Volunteer Dispatch Page AI response",
    "signals": [
      "frontend/src/pages/CFAgenticVolunteerDispatchPage.js"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-cf-compliance-audit-agent-page-1ee7pi-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: CF Compliance Audit Agent Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CFComplianceAuditAgentPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"CF Compliance Audit Agent Page\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "CF Compliance Audit Agent Page donor inputs",
    "outputLabel": "CF Compliance Audit Agent Page AI response",
    "signals": [
      "frontend/src/pages/CFComplianceAuditAgentPage.js"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-ai-5cuwes-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Amount Requested",
      "Beneficiary Name",
      "Case Id",
      "Client Name",
      "Constraints",
      "Custom Metrics",
      "Date Range",
      "Deadline"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-ai-backlog-1bvczz-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: AI Backlog",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiBacklog.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Backlog\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Backlog donor inputs",
    "outputLabel": "AI Backlog AI response",
    "signals": [
      "Action",
      "Body",
      "Captured At",
      "Case Id",
      "Context",
      "Details",
      "Entity Id",
      "Entity Type"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-custom-feat01-agentic-volunteer-dispatch-b6xcdo-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: Custom Feat01 Agentic Volunteer Dispatch",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/customFeat01_AgenticVolunteerDispatch.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Custom Feat01 Agentic Volunteer Dispatch\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Custom Feat01 Agentic Volunteer Dispatch donor inputs",
    "outputLabel": "Custom Feat01 Agentic Volunteer Dispatch AI response",
    "signals": [
      "backend/routes/customFeat01_AgenticVolunteerDispatch.js"
    ]
  },
  {
    "id": "ai-nonprofit-field-operations-manager-custom-feat05-compliance-audit-agent-1db8cy-exact-ai",
    "title": "AI Nonprofit Field Operations Manager: Custom Feat05 Compliance Audit Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/customFeat05_ComplianceAuditAgent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Custom Feat05 Compliance Audit Agent\" from AINonprofitFieldOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Custom Feat05 Compliance Audit Agent donor inputs",
    "outputLabel": "Custom Feat05 Compliance Audit Agent AI response",
    "signals": [
      "backend/routes/customFeat05_ComplianceAuditAgent.js"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-source-workflow",
    "title": "AI Volunteer Matching Management Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIVolunteerMatchingManagement.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIVolunteerMatchingManagement to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Volunteer Matching Management source context",
    "outputLabel": "AI Volunteer Matching Management source analysis",
    "signals": [
      "frontend/src/AiToolPage",
      "frontend/src/main",
      "frontend/src/tools",
      "frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability",
      "frontend/src/pages/GapNoNotificationsSubsystemSmsEmailReminders",
      "frontend/src/pages/TrainingPlan",
      "backend/routes/ai",
      "backend/routes/gapNoNotificationsSubsystemSmsEmailReminders"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-ai-tools",
    "title": "AI Volunteer Matching Management AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIVolunteerMatchingManagement.",
    "defaultPrompt": "Review AIVolunteerMatchingManagement AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Volunteer Matching Management AI prompt or tool context",
    "outputLabel": "AI Volunteer Matching Management AI tool response",
    "signals": [
      "frontend/src/AiToolPage.jsx",
      "frontend/src/main.jsx",
      "frontend/src/tools.js",
      "frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability.jsx",
      "frontend/src/pages/GapNoNotificationsSubsystemSmsEmailReminders.jsx",
      "frontend/src/pages/TrainingPlan.jsx",
      "backend/routes/ai.js",
      "backend/routes/gapNoNotificationsSubsystemSmsEmailReminders.js"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-cf-skills-to-opportunity-matching-engine-with-explainability-y5x08m-exact-ai",
    "title": "AI Volunteer Matching Management: Cf Skills To Opportunity Matching Engine With Explainability",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Skills To Opportunity Matching Engine With Explainability\" from AIVolunteerMatchingManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Skills To Opportunity Matching Engine With Explainability donor inputs",
    "outputLabel": "Cf Skills To Opportunity Matching Engine With Explainability AI response",
    "signals": [
      "frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability.jsx"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-gap-no-notifications-subsystem-sms-email-reminders-7r0y3h-exact-ai",
    "title": "AI Volunteer Matching Management: Gap No Notifications Subsystem Sms Email Reminders",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoNotificationsSubsystemSmsEmailReminders.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Notifications Subsystem Sms Email Reminders\" from AIVolunteerMatchingManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Notifications Subsystem Sms Email Reminders donor inputs",
    "outputLabel": "Gap No Notifications Subsystem Sms Email Reminders AI response",
    "signals": [
      "frontend/src/pages/GapNoNotificationsSubsystemSmsEmailReminders.jsx"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-training-plan-1tfug4-exact-ai",
    "title": "AI Volunteer Matching Management: Training Plan",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TrainingPlan.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Plan\" from AIVolunteerMatchingManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Plan donor inputs",
    "outputLabel": "Training Plan AI response",
    "signals": [
      "frontend/src/pages/TrainingPlan.jsx"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-ai-5cuwes-exact-ai",
    "title": "AI Volunteer Matching Management: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIVolunteerMatchingManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Audience",
      "Audience Tone",
      "Bio",
      "Cause Area",
      "Channel",
      "Count = 5",
      "Date Range",
      "End Date"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-gap-no-notifications-subsystem-sms-email-reminders-1jqwjg-exact-ai",
    "title": "AI Volunteer Matching Management: Gap No Notifications Subsystem Sms Email Reminders",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gapNoNotificationsSubsystemSmsEmailReminders.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Notifications Subsystem Sms Email Reminders\" from AIVolunteerMatchingManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Notifications Subsystem Sms Email Reminders donor inputs",
    "outputLabel": "Gap No Notifications Subsystem Sms Email Reminders AI response",
    "signals": [
      "backend/routes/gapNoNotificationsSubsystemSmsEmailReminders.js"
    ]
  },
  {
    "id": "ai-volunteer-matching-management-gap-no-volunteer-profile-crud-backend-only-via-ai-1fa4xq-exact-ai",
    "title": "AI Volunteer Matching Management: Gap No Volunteer Profile Crud Backend Only Via AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gapNoVolunteerProfileCrudBackendOnlyViaAi.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Volunteer Profile Crud Backend Only Via AI\" from AIVolunteerMatchingManagement. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Volunteer Profile Crud Backend Only Via AI donor inputs",
    "outputLabel": "Gap No Volunteer Profile Crud Backend Only Via AI AI response",
    "signals": [
      "backend/routes/gapNoVolunteerProfileCrudBackendOnlyViaAi.js"
    ]
  },
  {
    "id": "non-profit-connect-source-workflow",
    "title": "Non Profit Connect Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from NonProfitConnect.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from NonProfitConnect to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Non Profit Connect source context",
    "outputLabel": "Non Profit Connect source analysis",
    "signals": [
      "server/openrouter",
      "tailwind.config",
      "client/src/main",
      "client/src/pages/ai-tools",
      "client/src/pages/project-details",
      "client/src/components/AIInsightPanel",
      "client/src/components/DetailSheet",
      "client/src/components/ui/tooltip"
    ]
  },
  {
    "id": "non-profit-connect-ai-tools",
    "title": "Non Profit Connect AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from NonProfitConnect.",
    "defaultPrompt": "Review NonProfitConnect AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Non Profit Connect AI prompt or tool context",
    "outputLabel": "Non Profit Connect AI tool response",
    "signals": [
      "server/openrouter.ts",
      "tailwind.config.ts",
      "client/src/main.tsx",
      "client/src/pages/ai-tools.tsx",
      "client/src/pages/project-details.tsx",
      "client/src/components/AIInsightPanel.tsx",
      "client/src/components/DetailSheet.tsx",
      "client/src/components/ui/tooltip.tsx"
    ]
  },
  {
    "id": "non-profit-connect-ai-tools-6quxv2-exact-ai",
    "title": "Non Profit Connect: AI Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/ai-tools.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools\" from NonProfitConnect. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools donor inputs",
    "outputLabel": "AI Tools AI response",
    "signals": [
      "Budget",
      "Criteria",
      "Funder",
      "Grant Title",
      "Outcomes"
    ]
  },
  {
    "id": "non-profit-connect-project-details-1uqjh0-exact-ai",
    "title": "Non Profit Connect: Project Details",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/project-details.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Project Details\" from NonProfitConnect. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Project Details donor inputs",
    "outputLabel": "Project Details AI response",
    "signals": [
      "client/src/pages/project-details.tsx"
    ]
  },
  {
    "id": "non-profit-shield-source-workflow",
    "title": "Non Profit Shield Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from NonProfitShield.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from NonProfitShield to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Non Profit Shield source context",
    "outputLabel": "Non Profit Shield source analysis",
    "signals": [
      "server/openai",
      "client/src/pages/enrollment",
      "tailwind.config",
      "server/openai",
      "client/src/main",
      "client/src/pages/ai-tools",
      "client/src/pages/claims",
      "client/src/pages/submit-claim"
    ]
  },
  {
    "id": "non-profit-shield-ai-tools",
    "title": "Non Profit Shield AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from NonProfitShield.",
    "defaultPrompt": "Review NonProfitShield AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Non Profit Shield AI prompt or tool context",
    "outputLabel": "Non Profit Shield AI tool response",
    "signals": [
      "server/openai.ts",
      "client/src/pages/enrollment.tsx",
      "tailwind.config.ts",
      "server/openai.ts",
      "client/src/main.tsx",
      "client/src/pages/ai-tools.tsx",
      "client/src/pages/claims.tsx",
      "client/src/pages/submit-claim.tsx"
    ]
  },
  {
    "id": "non-profit-shield-ai-tools-6quxv2-exact-ai",
    "title": "Non Profit Shield: AI Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/ai-tools.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools\" from NonProfitShield. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools donor inputs",
    "outputLabel": "AI Tools AI response",
    "signals": [
      "client/src/pages/ai-tools.tsx"
    ]
  },
  {
    "id": "non-profit-shield-claims-19fd5m-exact-ai",
    "title": "Non Profit Shield: Claims",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/claims.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims\" from NonProfitShield. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims donor inputs",
    "outputLabel": "Claims AI response",
    "signals": [
      "client/src/pages/claims.tsx"
    ]
  },
  {
    "id": "non-profit-shield-submit-claim-1x7rhw-exact-ai",
    "title": "Non Profit Shield: Submit Claim",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/submit-claim.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Submit Claim\" from NonProfitShield. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Submit Claim donor inputs",
    "outputLabel": "Submit Claim AI response",
    "signals": [
      "Choose Files"
    ]
  },
  {
    "id": "non-profit-shield-gap-claim-risk-scorer-page-4783e9-exact-ai",
    "title": "Non Profit Shield: Gap Claim Risk Scorer Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/gap/GapClaimRiskScorerPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Claim Risk Scorer Page\" from NonProfitShield. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Claim Risk Scorer Page donor inputs",
    "outputLabel": "Gap Claim Risk Scorer Page AI response",
    "signals": [
      "client/src/pages/gap/GapClaimRiskScorerPage.jsx"
    ]
  },
  {
    "id": "non-profit-shield-gap-claim-status-chatbot-page-3e3657-exact-ai",
    "title": "Non Profit Shield: Gap Claim Status Chatbot Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/gap/GapClaimStatusChatbotPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Claim Status Chatbot Page\" from NonProfitShield. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Claim Status Chatbot Page donor inputs",
    "outputLabel": "Gap Claim Status Chatbot Page AI response",
    "signals": [
      "client/src/pages/gap/GapClaimStatusChatbotPage.jsx"
    ]
  },
  {
    "id": "non-profit-shield-gap-claims-prediction-page-mtb1ou-exact-ai",
    "title": "Non Profit Shield: Gap Claims Prediction Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/gap/GapClaimsPredictionPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Claims Prediction Page\" from NonProfitShield. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Claims Prediction Page donor inputs",
    "outputLabel": "Gap Claims Prediction Page AI response",
    "signals": [
      "client/src/pages/gap/GapClaimsPredictionPage.jsx"
    ]
  },
  {
    "id": "non-profit-shield-gap-compliance-audit-trail-page-1hjx9m-exact-ai",
    "title": "Non Profit Shield: Gap Compliance Audit Trail Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/gap/GapComplianceAuditTrailPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Compliance Audit Trail Page\" from NonProfitShield. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Compliance Audit Trail Page donor inputs",
    "outputLabel": "Gap Compliance Audit Trail Page AI response",
    "signals": [
      "client/src/pages/gap/GapComplianceAuditTrailPage.jsx"
    ]
  }
];
