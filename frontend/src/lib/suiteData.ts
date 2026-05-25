export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'NonProfitConnect', ownership: 'Programs source capabilities and workflows', coverage: ['Programs', 'Clients', 'Volunteers'] },
  { name: 'NonProfitShield', ownership: 'Clients source capabilities and workflows', coverage: ['Donors', 'Grants', 'Campaigns'] },
  { name: 'AINonprofitFieldOperationsManager', ownership: 'Volunteers source capabilities and workflows', coverage: ['Food Pantry', 'Field Operations', 'Events'] },
  { name: 'AIVolunteerMatchingManagement', ownership: 'Donors source capabilities and workflows', coverage: ['Impact', 'Cases', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Programs', value: '84', note: 'Active' },
  { label: 'Clients', value: '61', note: 'Open' },
  { label: 'Volunteers', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Programs operating view', 'Clients operating view', 'Volunteers operating view', 'Donors operating view', 'Grants operating view', 'Campaigns operating view', 'Food Pantry operating view', 'Field Operations operating view'];
export const workflowHighlights = ['Programs workflow with records, approvals, audit, and reporting', 'Clients workflow with records, approvals, audit, and reporting', 'Volunteers workflow with records, approvals, audit, and reporting', 'Donors workflow with records, approvals, audit, and reporting', 'Grants workflow with records, approvals, audit, and reporting'];
