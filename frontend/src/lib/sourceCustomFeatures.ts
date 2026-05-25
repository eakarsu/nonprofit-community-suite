import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Community Coop Time Bank Platform Source Feature",
    "href": "/features/source-ai-community-coop-time-bank-platform",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICommunityCoopTimeBankPlatform: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "7 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Fundraising Campaign Optimizer Source Feature",
    "href": "/features/source-ai-fundraising-campaign-optimizer",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFundraisingCampaignOptimizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "18 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Nonprofit Field Operations Manager Source Feature",
    "href": "/features/source-ai-nonprofit-field-operations-manager",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AINonprofitFieldOperationsManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Volunteer Matching Management Source Feature",
    "href": "/features/source-ai-volunteer-matching-management",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIVolunteerMatchingManagement: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Non Profit Connect Source Feature",
    "href": "/features/source-non-profit-connect",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in NonProfitConnect: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Non Profit Shield Source Feature",
    "href": "/features/source-non-profit-shield",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in NonProfitShield: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Community Coop Time Bank Platform Source Feature",
      "AI Fundraising Campaign Optimizer Source Feature",
      "AI Nonprofit Field Operations Manager Source Feature",
      "AI Volunteer Matching Management Source Feature",
      "Non Profit Connect Source Feature",
      "Non Profit Shield Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-community-coop-time-bank-platform": {
    "title": "AI Community Coop Time Bank Platform Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICommunityCoopTimeBankPlatform, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICommunityCoopTimeBankPlatform: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "7 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "7",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-fundraising-campaign-optimizer": {
    "title": "AI Fundraising Campaign Optimizer Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIFundraisingCampaignOptimizer, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFundraisingCampaignOptimizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "18 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "18",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-nonprofit-field-operations-manager": {
    "title": "AI Nonprofit Field Operations Manager Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AINonprofitFieldOperationsManager, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AINonprofitFieldOperationsManager: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "9",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-volunteer-matching-management": {
    "title": "AI Volunteer Matching Management Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIVolunteerMatchingManagement, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIVolunteerMatchingManagement: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "9",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-non-profit-connect": {
    "title": "Non Profit Connect Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from NonProfitConnect, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in NonProfitConnect: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "9 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "9",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-non-profit-shield": {
    "title": "Non Profit Shield Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from NonProfitShield, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in NonProfitShield: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "16 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "16",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Community Coop Time Bank Platform Source Feature": {
    "sourceOwners": [
      "AICommunityCoopTimeBankPlatform"
    ],
    "operatingQueues": [
      "Skill Match",
      "AI Tool Page",
      "Main",
      "Tools"
    ],
    "outputs": [
      "AI Community Coop Time Bank Platform merged workflow register",
      "AI Community Coop Time Bank Platform API and route coverage map",
      "AI Community Coop Time Bank Platform AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Fundraising Campaign Optimizer Source Feature": {
    "sourceOwners": [
      "AIFundraisingCampaignOptimizer"
    ],
    "operatingQueues": [
      "Openrouter",
      "Gap No Volunteer Skill Matching AI Peermatch",
      "Agentic Grants",
      "AI"
    ],
    "outputs": [
      "AI Fundraising Campaign Optimizer merged workflow register",
      "AI Fundraising Campaign Optimizer API and route coverage map",
      "AI Fundraising Campaign Optimizer AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Nonprofit Field Operations Manager Source Feature": {
    "sourceOwners": [
      "AINonprofitFieldOperationsManager"
    ],
    "operatingQueues": [
      "AI Backlog Page",
      "AI Page",
      "AI Predictive Page",
      "CF Agentic Volunteer Dispatch Page"
    ],
    "outputs": [
      "AI Nonprofit Field Operations Manager merged workflow register",
      "AI Nonprofit Field Operations Manager API and route coverage map",
      "AI Nonprofit Field Operations Manager AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Volunteer Matching Management Source Feature": {
    "sourceOwners": [
      "AIVolunteerMatchingManagement"
    ],
    "operatingQueues": [
      "AI Tool Page",
      "Main",
      "Tools",
      "Cf Skills To Opportunity Matching Engine With Explainability"
    ],
    "outputs": [
      "AI Volunteer Matching Management merged workflow register",
      "AI Volunteer Matching Management API and route coverage map",
      "AI Volunteer Matching Management AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Non Profit Connect Source Feature": {
    "sourceOwners": [
      "NonProfitConnect"
    ],
    "operatingQueues": [
      "Openrouter",
      "Tool:Tailwind.Config",
      "Main",
      "AI Tools"
    ],
    "outputs": [
      "Non Profit Connect merged workflow register",
      "Non Profit Connect API and route coverage map",
      "Non Profit Connect AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Non Profit Shield Source Feature": {
    "sourceOwners": [
      "NonProfitShield"
    ],
    "operatingQueues": [
      "Openai",
      "Enrollment",
      "Tool:Tailwind.Config",
      "Openai"
    ],
    "outputs": [
      "Non Profit Shield merged workflow register",
      "Non Profit Shield API and route coverage map",
      "Non Profit Shield AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-community-coop-time-bank-platform": {
    "workItems": [
      {
        "id": "source-ai-community-coop-time-bank-platform-work-1",
        "item": "Skill Match",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/SkillMatch.jsx"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-work-2",
        "item": "AI Tool Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/AiToolPage.jsx"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-work-3",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-work-4",
        "item": "Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/tools.js"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-work-5",
        "item": "Cf AI Powered Time Matching Engine",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfAiPoweredTimeMatchingEngine.jsx"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-work-6",
        "item": "Cf Blockchain Backed Ledger",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfBlockchainBackedLedger.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-community-coop-time-bank-platform-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-community-coop-time-bank-platform-log-1",
        "message": "Deep-merge feature generated from AICommunityCoopTimeBankPlatform",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-fundraising-campaign-optimizer": {
    "workItems": [
      {
        "id": "source-ai-fundraising-campaign-optimizer-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/openrouter.js"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-work-2",
        "item": "Gap No Volunteer Skill Matching AI Peermatch",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch.jsx"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-work-3",
        "item": "Agentic Grants",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/agenticGrants.js"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-work-4",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai.js"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-work-5",
        "item": "Campaigns",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/campaigns.js"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-work-6",
        "item": "Emails",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/emails.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-fundraising-campaign-optimizer-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-fundraising-campaign-optimizer-log-1",
        "message": "Deep-merge feature generated from AIFundraisingCampaignOptimizer",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-nonprofit-field-operations-manager": {
    "workItems": [
      {
        "id": "source-ai-nonprofit-field-operations-manager-work-1",
        "item": "AI Backlog Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBacklogPage.js"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-work-2",
        "item": "AI Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIPage.js"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-work-3",
        "item": "AI Predictive Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIPredictivePage.js"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-work-4",
        "item": "CF Agentic Volunteer Dispatch Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CFAgenticVolunteerDispatchPage.js"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-work-5",
        "item": "CF Compliance Audit Agent Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CFComplianceAuditAgentPage.js"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-work-6",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/routes/ai.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-nonprofit-field-operations-manager-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-nonprofit-field-operations-manager-log-1",
        "message": "Deep-merge feature generated from AINonprofitFieldOperationsManager",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-volunteer-matching-management": {
    "workItems": [
      {
        "id": "source-ai-volunteer-matching-management-work-1",
        "item": "AI Tool Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/AiToolPage.jsx"
      },
      {
        "id": "source-ai-volunteer-matching-management-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-volunteer-matching-management-work-3",
        "item": "Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/tools.js"
      },
      {
        "id": "source-ai-volunteer-matching-management-work-4",
        "item": "Cf Skills To Opportunity Matching Engine With Explainability",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability.jsx"
      },
      {
        "id": "source-ai-volunteer-matching-management-work-5",
        "item": "Gap No Notifications Subsystem Sms Email Reminders",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/GapNoNotificationsSubsystemSmsEmailReminders.jsx"
      },
      {
        "id": "source-ai-volunteer-matching-management-work-6",
        "item": "Training Plan",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/TrainingPlan.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-volunteer-matching-management-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-volunteer-matching-management-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-volunteer-matching-management-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-volunteer-matching-management-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-volunteer-matching-management-log-1",
        "message": "Deep-merge feature generated from AIVolunteerMatchingManagement",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-volunteer-matching-management-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-non-profit-connect": {
    "workItems": [
      {
        "id": "source-non-profit-connect-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/openrouter.ts"
      },
      {
        "id": "source-non-profit-connect-work-2",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-non-profit-connect-work-3",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/main.tsx"
      },
      {
        "id": "source-non-profit-connect-work-4",
        "item": "AI Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/ai-tools.tsx"
      },
      {
        "id": "source-non-profit-connect-work-5",
        "item": "Project Details",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/project-details.tsx"
      },
      {
        "id": "source-non-profit-connect-work-6",
        "item": "AI Insight Panel",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/components/AIInsightPanel.tsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-non-profit-connect-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-non-profit-connect-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-non-profit-connect-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-non-profit-connect-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-non-profit-connect-log-1",
        "message": "Deep-merge feature generated from NonProfitConnect",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-non-profit-connect-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-non-profit-shield": {
    "workItems": [
      {
        "id": "source-non-profit-shield-work-1",
        "item": "Openai",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/openai.ts"
      },
      {
        "id": "source-non-profit-shield-work-2",
        "item": "Enrollment",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/enrollment.tsx"
      },
      {
        "id": "source-non-profit-shield-work-3",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-non-profit-shield-work-4",
        "item": "Openai",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/openai.ts"
      },
      {
        "id": "source-non-profit-shield-work-5",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/main.tsx"
      },
      {
        "id": "source-non-profit-shield-work-6",
        "item": "AI Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/pages/ai-tools.tsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-non-profit-shield-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-non-profit-shield-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-non-profit-shield-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-non-profit-shield-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-non-profit-shield-log-1",
        "message": "Deep-merge feature generated from NonProfitShield",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-non-profit-shield-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-community-coop-time-bank-platform": {
    "title": "AI Community Coop Time Bank Platform Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-community-coop-time-bank-platform-entity-1",
        "name": "Skill Match",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-entity-2",
        "name": "AI Tool Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-entity-3",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-entity-4",
        "name": "Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-community-coop-time-bank-platform-entity-5",
        "name": "Cf AI Powered Time Matching Engine",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-fundraising-campaign-optimizer": {
    "title": "AI Fundraising Campaign Optimizer Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-fundraising-campaign-optimizer-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-entity-2",
        "name": "Gap No Volunteer Skill Matching AI Peermatch",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-entity-3",
        "name": "Agentic Grants",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-entity-4",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fundraising-campaign-optimizer-entity-5",
        "name": "Campaigns",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-nonprofit-field-operations-manager": {
    "title": "AI Nonprofit Field Operations Manager Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-nonprofit-field-operations-manager-entity-1",
        "name": "AI Backlog Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-entity-2",
        "name": "AI Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-entity-3",
        "name": "AI Predictive Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-entity-4",
        "name": "CF Agentic Volunteer Dispatch Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-nonprofit-field-operations-manager-entity-5",
        "name": "CF Compliance Audit Agent Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-volunteer-matching-management": {
    "title": "AI Volunteer Matching Management Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-volunteer-matching-management-entity-1",
        "name": "AI Tool Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-volunteer-matching-management-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-volunteer-matching-management-entity-3",
        "name": "Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-volunteer-matching-management-entity-4",
        "name": "Cf Skills To Opportunity Matching Engine With Explainability",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-volunteer-matching-management-entity-5",
        "name": "Gap No Notifications Subsystem Sms Email Reminders",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-non-profit-connect": {
    "title": "Non Profit Connect Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-non-profit-connect-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-non-profit-connect-entity-2",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-non-profit-connect-entity-3",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-non-profit-connect-entity-4",
        "name": "AI Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-non-profit-connect-entity-5",
        "name": "Project Details",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-non-profit-shield": {
    "title": "Non Profit Shield Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-non-profit-shield-entity-1",
        "name": "Openai",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-non-profit-shield-entity-2",
        "name": "Enrollment",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-non-profit-shield-entity-3",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-non-profit-shield-entity-4",
        "name": "Openai",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-non-profit-shield-entity-5",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AICommunityCoopTimeBankPlatform": "/features/source-ai-community-coop-time-bank-platform",
  "AIFundraisingCampaignOptimizer": "/features/source-ai-fundraising-campaign-optimizer",
  "AINonprofitFieldOperationsManager": "/features/source-ai-nonprofit-field-operations-manager",
  "AIVolunteerMatchingManagement": "/features/source-ai-volunteer-matching-management",
  "NonProfitConnect": "/features/source-non-profit-connect",
  "NonProfitShield": "/features/source-non-profit-shield"
};
