export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-community-coop-time-bank-platform-cf-ai-powered-time-matching-engine-19tw25-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf AI Powered Time Matching Engine source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAiPoweredTimeMatchingEngine.jsx"
    }
  ],
  "ai-community-coop-time-bank-platform-cf-blockchain-backed-ledger-1nl44a-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Blockchain Backed Ledger source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfBlockchainBackedLedger.jsx"
    }
  ],
  "ai-community-coop-time-bank-platform-ai-5cuwes-exact-ai": [
    {
      "name": "accessibility",
      "label": "Accessibility",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "availability",
      "label": "Availability",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "background",
      "label": "Background",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "communityNeeds",
      "label": "Community Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "complexity",
      "label": "Complexity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "creditsAtStake",
      "label": "Credits At Stake",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentSkills",
      "label": "Current Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "durationHours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeContext",
      "label": "Exchange Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeCount",
      "label": "Exchange Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeHistory",
      "label": "Exchange History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "issue",
      "label": "Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberId",
      "label": "Member Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberName",
      "label": "Member Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberNeeds",
      "label": "Member Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberSkills",
      "label": "Member Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "neighborhood",
      "label": "Neighborhood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "options",
      "label": "Options",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "partyAStatement",
      "label": "Party A Statement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "partyBStatement",
      "label": "Party B Statement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "peerFeedback",
      "label": "Peer Feedback",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "rawDescription",
      "label": "Raw Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recentTrends",
      "label": "Recent Trends",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recruitmentBudget",
      "label": "Recruitment Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "riskLevel",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "stakeholders",
      "label": "Stakeholders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taskDescription",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "totalHours",
      "label": "Total Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-community-coop-time-bank-platform-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf AI Powered Time Matching Engine source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAiPoweredTimeMatchingEngine.jsx"
    },
    {
      "name": "accessibility",
      "label": "Accessibility",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "availability",
      "label": "Availability",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "background",
      "label": "Background",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "communityNeeds",
      "label": "Community Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "complexity",
      "label": "Complexity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "creditsAtStake",
      "label": "Credits At Stake",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentSkills",
      "label": "Current Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "durationHours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeContext",
      "label": "Exchange Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeCount",
      "label": "Exchange Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeHistory",
      "label": "Exchange History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "issue",
      "label": "Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberId",
      "label": "Member Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberName",
      "label": "Member Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberNeeds",
      "label": "Member Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberSkills",
      "label": "Member Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "neighborhood",
      "label": "Neighborhood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "options",
      "label": "Options",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "partyAStatement",
      "label": "Party A Statement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "partyBStatement",
      "label": "Party B Statement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "peerFeedback",
      "label": "Peer Feedback",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "rawDescription",
      "label": "Raw Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recentTrends",
      "label": "Recent Trends",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recruitmentBudget",
      "label": "Recruitment Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "riskLevel",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "stakeholders",
      "label": "Stakeholders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taskDescription",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "totalHours",
      "label": "Total Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-community-coop-time-bank-platform-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf AI Powered Time Matching Engine source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAiPoweredTimeMatchingEngine.jsx"
    },
    {
      "name": "accessibility",
      "label": "Accessibility",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "availability",
      "label": "Availability",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "background",
      "label": "Background",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "communityNeeds",
      "label": "Community Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "complexity",
      "label": "Complexity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "creditsAtStake",
      "label": "Credits At Stake",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentSkills",
      "label": "Current Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "durationHours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeContext",
      "label": "Exchange Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeCount",
      "label": "Exchange Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "exchangeHistory",
      "label": "Exchange History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "issue",
      "label": "Issue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberId",
      "label": "Member Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberName",
      "label": "Member Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberNeeds",
      "label": "Member Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "memberSkills",
      "label": "Member Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "neighborhood",
      "label": "Neighborhood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "options",
      "label": "Options",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "partyAStatement",
      "label": "Party A Statement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "partyBStatement",
      "label": "Party B Statement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "peerFeedback",
      "label": "Peer Feedback",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "rawDescription",
      "label": "Raw Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recentTrends",
      "label": "Recent Trends",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recruitmentBudget",
      "label": "Recruitment Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "riskLevel",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "stakeholders",
      "label": "Stakeholders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "taskDescription",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "totalHours",
      "label": "Total Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-fundraising-campaign-optimizer-gap-no-volunteer-skill-matching-ai-peermatch-v0pqu2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Volunteer Skill Matching AI Peermatch source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch.jsx"
    }
  ],
  "ai-fundraising-campaign-optimizer-agentic-grants-9e7kcz-exact-ai": [
    {
      "name": "annual_budget = null",
      "label": "Annual Budget = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "focus_area = 'general'",
      "label": "Focus Area = 'General'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "geography = 'United States'",
      "label": "Geography = 'United States'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    }
  ],
  "ai-fundraising-campaign-optimizer-ai-j615h1-exact-ai": [
    {
      "name": "budget_size_usd",
      "label": "Budget Size Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "campaign_focus",
      "label": "Campaign Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_data",
      "label": "Donor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_id",
      "label": "Donor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_ids",
      "label": "Donor Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expected_audience",
      "label": "Expected Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus_areas = []",
      "label": "Focus Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "geography",
      "label": "Geography",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_needed",
      "label": "Hours Needed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "mission",
      "label": "Mission",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "required_skills = []",
      "label": "Required Skills = []",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sponsorship_targets",
      "label": "Sponsorship Targets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "task_description",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ticket_price",
      "label": "Ticket Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_horizon_months",
      "label": "Time Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "volunteer_ids",
      "label": "Volunteer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-fundraising-campaign-optimizer-campaigns-1u0cl8-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "campaign_name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "current_performance",
      "label": "Current Performance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "donor_id",
      "label": "Donor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "goal_amount",
      "label": "Goal Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "raised_amount",
      "label": "Raised Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    }
  ],
  "ai-fundraising-campaign-optimizer-emails-1c8af8-exact-ai": [
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "campaign_name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    }
  ],
  "ai-fundraising-campaign-optimizer-gap-no-volunteer-skill-matching-ai-peermatch-1ex1sl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-volunteer-skill-matching-ai-peermatch.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-volunteer-skill-matching-ai-peermatch.js"
    }
  ],
  "ai-fundraising-campaign-optimizer-ai-center-42pwwt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    }
  ],
  "ai-fundraising-campaign-optimizer-ai-predictions-1p3nxn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Predictions source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictions.jsx"
    }
  ],
  "ai-fundraising-campaign-optimizer-campaigns-w8m1mb-exact-ai": [
    {
      "name": "goal_amount",
      "label": "Goal ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "50000",
      "options": [],
      "required": false,
      "source": "client/src/pages/Campaigns.jsx"
    },
    {
      "name": "name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Spring Fundraiser 2026",
      "options": [],
      "required": false,
      "source": "client/src/pages/Campaigns.jsx"
    },
    {
      "name": "raised_amount",
      "label": "Amount Raised ($)",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Campaigns.jsx"
    }
  ],
  "ai-fundraising-campaign-optimizer-cf-agentic-grant-prospecting-scanning-grant-g0e97p-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Grant Prospecting Scanning Grant source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfAgenticGrantProspectingScanningGrant.jsx"
    }
  ],
  "ai-fundraising-campaign-optimizer-cf-peer-to-peer-fundraising-team-builder-wyio6k-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Peer To Peer Fundraising Team Builder source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfPeerToPeerFundraisingTeamBuilder.jsx"
    }
  ],
  "ai-fundraising-campaign-optimizer-emails-1n0k7d-exact-ai": [
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Year-End Giving Campaign",
      "options": [],
      "required": false,
      "source": "client/src/pages/Emails.jsx"
    }
  ],
  "ai-fundraising-campaign-optimizer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Volunteer Skill Matching AI Peermatch source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch.jsx"
    },
    {
      "name": "annual_budget = null",
      "label": "Annual Budget = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "focus_area = 'general'",
      "label": "Focus Area = 'General'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "geography = 'United States'",
      "label": "Geography = 'United States'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "budget_size_usd",
      "label": "Budget Size Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "campaign_focus",
      "label": "Campaign Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_data",
      "label": "Donor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_id",
      "label": "Donor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_ids",
      "label": "Donor Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expected_audience",
      "label": "Expected Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus_areas = []",
      "label": "Focus Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "geography",
      "label": "Geography",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_needed",
      "label": "Hours Needed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "mission",
      "label": "Mission",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "required_skills = []",
      "label": "Required Skills = []",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sponsorship_targets",
      "label": "Sponsorship Targets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "task_description",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ticket_price",
      "label": "Ticket Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_horizon_months",
      "label": "Time Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "volunteer_ids",
      "label": "Volunteer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "campaign_name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "current_performance",
      "label": "Current Performance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "goal_amount",
      "label": "Goal Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "50000",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Spring Fundraiser 2026",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "raised_amount",
      "label": "Raised Amount",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Year-End Giving Campaign",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-volunteer-skill-matching-ai-peermatch.js"
    }
  ],
  "ai-fundraising-campaign-optimizer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Volunteer Skill Matching AI Peermatch source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoVolunteerSkillMatchingAiPeermatch.jsx"
    },
    {
      "name": "annual_budget = null",
      "label": "Annual Budget = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "focus_area = 'general'",
      "label": "Focus Area = 'General'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "geography = 'United States'",
      "label": "Geography = 'United States'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticGrants.js"
    },
    {
      "name": "budget_size_usd",
      "label": "Budget Size Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "campaign_focus",
      "label": "Campaign Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_data",
      "label": "Donor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_id",
      "label": "Donor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "donor_ids",
      "label": "Donor Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_id",
      "label": "Event Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_type",
      "label": "Event Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "expected_audience",
      "label": "Expected Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus_areas = []",
      "label": "Focus Areas = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "geography",
      "label": "Geography",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_needed",
      "label": "Hours Needed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "mission",
      "label": "Mission",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "required_skills = []",
      "label": "Required Skills = []",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sponsorship_targets",
      "label": "Sponsorship Targets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "task_description",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ticket_price",
      "label": "Ticket Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_horizon_months",
      "label": "Time Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "volunteer_ids",
      "label": "Volunteer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "campaign_name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "current_performance",
      "label": "Current Performance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "goal_amount",
      "label": "Goal Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "50000",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Spring Fundraiser 2026",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "raised_amount",
      "label": "Raised Amount",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Year-End Giving Campaign",
      "options": [],
      "required": false,
      "source": "server/routes/emails.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-volunteer-skill-matching-ai-peermatch.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-ai-backlog-page-jjeqf9-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "target_language",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "es",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-ai-predictive-page-f6y2ml-exact-ai": [
    {
      "name": "available_resources",
      "label": "Available Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "economic_context",
      "label": "Economic Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "history_summary",
      "label": "History Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "needs",
      "label": "Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "open_shifts",
      "label": "Open Shifts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "next_quarter",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period_end",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period_start",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "upcoming_campaigns",
      "label": "Upcoming Campaigns",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-cf-agentic-volunteer-dispatch-page-gurwb0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Volunteer Dispatch Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticVolunteerDispatchPage.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-cf-compliance-audit-agent-page-1ee7pi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Compliance Audit Agent Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFComplianceAuditAgentPage.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-ai-5cuwes-exact-ai": [
    {
      "name": "amount_requested",
      "label": "Amount Requested",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beneficiary_name",
      "label": "Beneficiary Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "custom_metrics",
      "label": "Custom Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "donor_id",
      "label": "Donor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "funder",
      "label": "Funder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "grant_name",
      "label": "Grant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_months",
      "label": "Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "needs",
      "label": "Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_description",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reporting_period",
      "label": "Reporting Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "shift_requirements",
      "label": "Shift Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "situation",
      "label": "Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "urgency_score",
      "label": "Urgency Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volunteer_ids",
      "label": "Volunteer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-ai-backlog-1bvczz-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "captured_at",
      "label": "Captured At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "html",
      "label": "Html",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "image_base64",
      "label": "Image Base64",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "latitude",
      "label": "Latitude",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "longitude",
      "label": "Longitude",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "mime_type = 'image/jpeg'",
      "label": "Mime Type = 'Image Jpeg'",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "recipients = []",
      "label": "Recipients = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "source_language",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "target_language",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-custom-feat01-agentic-volunteer-dispatch-b6xcdo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat01 Agentic Volunteer Dispatch source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/customFeat01_AgenticVolunteerDispatch.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-custom-feat05-compliance-audit-agent-1db8cy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat05 Compliance Audit Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/customFeat05_ComplianceAuditAgent.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-source-workflow": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "target_language",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "es",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "available_resources",
      "label": "Available Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "economic_context",
      "label": "Economic Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "history_summary",
      "label": "History Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "needs",
      "label": "Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "open_shifts",
      "label": "Open Shifts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "next_quarter",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period_end",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period_start",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "upcoming_campaigns",
      "label": "Upcoming Campaigns",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Volunteer Dispatch Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticVolunteerDispatchPage.js"
    },
    {
      "name": "amount_requested",
      "label": "Amount Requested",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beneficiary_name",
      "label": "Beneficiary Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "custom_metrics",
      "label": "Custom Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "donor_id",
      "label": "Donor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "funder",
      "label": "Funder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "grant_name",
      "label": "Grant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_months",
      "label": "Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_description",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reporting_period",
      "label": "Reporting Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "shift_requirements",
      "label": "Shift Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "situation",
      "label": "Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "urgency_score",
      "label": "Urgency Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volunteer_ids",
      "label": "Volunteer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "captured_at",
      "label": "Captured At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "html",
      "label": "Html",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "image_base64",
      "label": "Image Base64",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "latitude",
      "label": "Latitude",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "longitude",
      "label": "Longitude",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "mime_type = 'image/jpeg'",
      "label": "Mime Type = 'Image Jpeg'",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "recipients = []",
      "label": "Recipients = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "source_language",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    }
  ],
  "ai-nonprofit-field-operations-manager-ai-tools": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "case_id",
      "label": "Case Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "target_language",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "es",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBacklogPage.js"
    },
    {
      "name": "available_resources",
      "label": "Available Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "economic_context",
      "label": "Economic Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "history_summary",
      "label": "History Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "90",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "needs",
      "label": "Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "open_shifts",
      "label": "Open Shifts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "next_quarter",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period_end",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "period_start",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "upcoming_campaigns",
      "label": "Upcoming Campaigns",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "5",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPredictivePage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Volunteer Dispatch Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticVolunteerDispatchPage.js"
    },
    {
      "name": "amount_requested",
      "label": "Amount Requested",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "beneficiary_name",
      "label": "Beneficiary Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "custom_metrics",
      "label": "Custom Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "donor_id",
      "label": "Donor Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "funder",
      "label": "Funder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "grant_name",
      "label": "Grant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "horizon_months",
      "label": "Horizon Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_description",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reporting_period",
      "label": "Reporting Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "shift_requirements",
      "label": "Shift Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "situation",
      "label": "Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "urgency_score",
      "label": "Urgency Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volunteer_ids",
      "label": "Volunteer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "captured_at",
      "label": "Captured At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "html",
      "label": "Html",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "image_base64",
      "label": "Image Base64",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "latitude",
      "label": "Latitude",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "longitude",
      "label": "Longitude",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "mime_type = 'image/jpeg'",
      "label": "Mime Type = 'Image Jpeg'",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "recipients = []",
      "label": "Recipients = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "source_language",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiBacklog.js"
    }
  ],
  "ai-volunteer-matching-management-cf-skills-to-opportunity-matching-engine-with-explainability-y5x08m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Skills To Opportunity Matching Engine With Explainability source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability.jsx"
    }
  ],
  "ai-volunteer-matching-management-gap-no-notifications-subsystem-sms-email-reminders-7r0y3h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Notifications Subsystem Sms Email Reminders source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoNotificationsSubsystemSmsEmailReminders.jsx"
    }
  ],
  "ai-volunteer-matching-management-training-plan-1tfug4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Training Plan source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TrainingPlan.jsx"
    }
  ],
  "ai-volunteer-matching-management-ai-5cuwes-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience_tone",
      "label": "Audience Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "bio",
      "label": "Bio",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cause_area",
      "label": "Cause Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "count = 5",
      "label": "Count = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookbackDays = 90",
      "label": "Lookback Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization",
      "label": "Organization",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volunteerId",
      "label": "Volunteer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-volunteer-matching-management-gap-no-notifications-subsystem-sms-email-reminders-1jqwjg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Notifications Subsystem Sms Email Reminders source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoNotificationsSubsystemSmsEmailReminders.js"
    }
  ],
  "ai-volunteer-matching-management-gap-no-volunteer-profile-crud-backend-only-via-ai-1fa4xq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Volunteer Profile Crud Backend Only Via AI source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoVolunteerProfileCrudBackendOnlyViaAi.js"
    }
  ],
  "ai-volunteer-matching-management-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Skills To Opportunity Matching Engine With Explainability source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability.jsx"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience_tone",
      "label": "Audience Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "bio",
      "label": "Bio",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cause_area",
      "label": "Cause Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "count = 5",
      "label": "Count = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookbackDays = 90",
      "label": "Lookback Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization",
      "label": "Organization",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volunteerId",
      "label": "Volunteer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-volunteer-matching-management-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Skills To Opportunity Matching Engine With Explainability source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfSkillsToOpportunityMatchingEngineWithExplainability.jsx"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience_tone",
      "label": "Audience Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "bio",
      "label": "Bio",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "cause_area",
      "label": "Cause Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "count = 5",
      "label": "Count = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookbackDays = 90",
      "label": "Lookback Days = 90",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "organization",
      "label": "Organization",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "volunteerId",
      "label": "Volunteer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "non-profit-connect-ai-tools-6quxv2-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "funder",
      "label": "Funder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "grantTitle",
      "label": "Grant Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "outcomes",
      "label": "Outcomes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    }
  ],
  "non-profit-connect-project-details-1uqjh0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Project Details source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/project-details.tsx"
    }
  ],
  "non-profit-connect-source-workflow": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "funder",
      "label": "Funder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "grantTitle",
      "label": "Grant Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "outcomes",
      "label": "Outcomes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Project Details source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/project-details.tsx"
    }
  ],
  "non-profit-connect-ai-tools": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "funder",
      "label": "Funder",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "grantTitle",
      "label": "Grant Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "outcomes",
      "label": "Outcomes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Project Details source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/project-details.tsx"
    }
  ],
  "non-profit-shield-ai-tools-6quxv2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    }
  ],
  "non-profit-shield-claims-19fd5m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claims source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/claims.tsx"
    }
  ],
  "non-profit-shield-submit-claim-1x7rhw-exact-ai": [
    {
      "name": "file-upload",
      "label": "Choose Files",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/submit-claim.tsx"
    }
  ],
  "non-profit-shield-gap-claim-risk-scorer-page-4783e9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Claim Risk Scorer Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/gap/GapClaimRiskScorerPage.jsx"
    }
  ],
  "non-profit-shield-gap-claim-status-chatbot-page-3e3657-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Claim Status Chatbot Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/gap/GapClaimStatusChatbotPage.jsx"
    }
  ],
  "non-profit-shield-gap-claims-prediction-page-mtb1ou-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Claims Prediction Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/gap/GapClaimsPredictionPage.jsx"
    }
  ],
  "non-profit-shield-gap-compliance-audit-trail-page-1hjx9m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Compliance Audit Trail Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/gap/GapComplianceAuditTrailPage.jsx"
    }
  ],
  "non-profit-shield-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "file-upload",
      "label": "Choose Files",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/submit-claim.tsx"
    }
  ],
  "non-profit-shield-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/ai-tools.tsx"
    },
    {
      "name": "file-upload",
      "label": "Choose Files",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/submit-claim.tsx"
    }
  ]
};
