// all user-facing copy in one place — easier to tweak later

export const UI_TEXT = {
  appTitle: 'Sales Analytics',
  appSubtitle: 'Monthly revenue by product category',
  navBrand: 'Sales Analytics',
  navProduct: 'Dashboard',
  navOverview: 'Overview',
  navInsights: 'Insights',
  navLive: 'Mock data',
  navYear: 'FY 2024',
  navSubtitle: 'Monthly revenue by category',
  footerCredit: 'Created by Vihang Patel',
  footerNote: 'Built with Vue 3 · Composition API · Pinia',
  // pageEyebrow: 'Take-home assignment',

  filtersHeading: 'Filters',
  filtersLiveHint: 'Updates charts live',
  dateRangeLabel: 'Date range',
  fromLabel: 'From',
  toLabel: 'To',
  categoriesHeading: 'Categories',

  datePresets: [
    { value: 'all', label: 'All year' },
    { value: 'Q1', label: 'Q1 (Jan–Mar)' },
    { value: 'Q2', label: 'Q2 (Apr–Jun)' },
    { value: 'Q3', label: 'Q3 (Jul–Sep)' },
    { value: 'Q4', label: 'Q4 (Oct–Dec)' },
    { value: 'custom', label: 'Custom range' },
  ],

  totalRevenue: 'Total Revenue',
  totalUnits: 'Total Units Sold',
  returnRate: 'Return Rate',

  lineChartTitle: 'Revenue trend',
  barChartTitle: 'Monthly revenue by category',
  barChartHint: 'Click a bar to highlight',
  pieChartTitle: 'Revenue share',

  highlightPrefix: 'Highlighting',
  highlightSuffix: 'on the line and bar charts',
  clearHighlight: 'Clear',

  emptyTitle: 'Nothing to show',
  emptyMessage: 'Turn a category back on or widen the date range.',
} as const
