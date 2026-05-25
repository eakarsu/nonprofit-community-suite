export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AICommunityCoopTimeBankPlatform",
      "AIFundraisingCampaignOptimizer",
      "AINonprofitFieldOperationsManager",
      "AIVolunteerMatchingManagement",
      "NonProfitConnect",
      "NonProfitShield"
    ],
    "examples": [
      "backend/routes/ai",
      "backend/routes/aiBacklog",
      "backend/routes/customFeat01_AgenticVolunteerDispatch",
      "backend/routes/customFeat05_ComplianceAuditAgent",
      "backend/routes/gapNoNotificationsSubsystemSmsEmailReminders",
      "backend/routes/gapNoVolunteerProfileCrudBackendOnlyViaAi"
    ],
    "count": 6
  },
  {
    "id": "customers",
    "label": "Customers",
    "description": "Open customer, client, patient, member, or lead workflows.",
    "href": "/features",
    "sourceProjects": [
      "NonProfitConnect",
      "NonProfitShield"
    ],
    "examples": [
      "client/src/components/ui/tooltip",
      "client/src/pages/enrollment"
    ],
    "count": 2
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "AICommunityCoopTimeBankPlatform",
      "AIVolunteerMatchingManagement"
    ],
    "examples": [
      "frontend/src/pages/SkillMatch",
      "frontend/src/tools"
    ],
    "count": 2
  }
];
