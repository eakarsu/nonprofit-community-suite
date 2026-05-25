export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['programs', 'Programs Records', 'Programs priority queue', 'Open', 'Programs exception list', 'Programs Lead', '$0'],
  ['clients', 'Clients Records', 'Clients priority queue', 'Review', 'Clients exception list', 'Programs Lead', '$0'],
  ['volunteers', 'Volunteers Records', 'Volunteers priority queue', 'Action needed', 'Volunteers exception list', 'Programs Lead', '$0'],
  ['donors', 'Donors Records', 'Donors priority queue', 'Open', 'Donors exception list', 'Programs Lead', '$0'],
  ['grants', 'Grants Records', 'Grants priority queue', 'Review', 'Grants exception list', 'Operations Lead', '$0'],
  ['campaigns', 'Campaigns Records', 'Campaigns priority queue', 'Action needed', 'Campaigns exception list', 'Operations Lead', '$0'],
  ['food-pantry', 'Food Pantry Records', 'Food Pantry priority queue', 'Open', 'Food Pantry exception list', 'Operations Lead', '$0'],
  ['field-operations', 'Field Operations Records', 'Field Operations priority queue', 'Review', 'Field Operations exception list', 'Operations Lead', '$0'],
  ['events', 'Events Records', 'Events priority queue', 'Action needed', 'Events exception list', 'Governance Lead', '$0'],
  ['impact', 'Impact Records', 'Impact priority queue', 'Open', 'Impact exception list', 'Governance Lead', '$0'],
  ['cases', 'Cases Records', 'Cases priority queue', 'Review', 'Cases exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
