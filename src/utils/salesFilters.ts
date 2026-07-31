import {
  MONTHS,
  QUARTER_MONTHS,
  type Category,
  type CustomMonthRange,
  type DateRangePreset,
  type MonthKey,
  type SalesRecord,
  type SummaryStats,
} from '../types/sales'

export function resolveActiveMonths(
  preset: DateRangePreset,
  customRange: CustomMonthRange,
): MonthKey[] {
  if (preset === 'all') {
    return [...MONTHS]
  }

  if (preset === 'custom') {
    return getMonthsInRange(customRange.start, customRange.end)
  }

  return [...QUARTER_MONTHS[preset]]
}

export function getMonthsInRange(start: MonthKey, end: MonthKey): MonthKey[] {
  const startIndex = MONTHS.indexOf(start)
  const endIndex = MONTHS.indexOf(end)

  // start after end? just return empty
  if (startIndex < 0 || endIndex < 0 || startIndex > endIndex) {
    return []
  }

  return MONTHS.slice(startIndex, endIndex + 1)
}

export function filterSalesRecords(
  records: SalesRecord[],
  categories: Category[],
  months: MonthKey[],
): SalesRecord[] {
  return records.filter(
    (row) => categories.includes(row.category) && months.includes(row.month),
  )
}

export function calculateSummary(records: SalesRecord[]): SummaryStats {
  const totalRevenue = records.reduce((sum, row) => sum + row.revenue, 0)
  const totalUnits = records.reduce((sum, row) => sum + row.unitsSold, 0)
  const totalReturns = records.reduce((sum, row) => sum + row.returns, 0)

  return {
    totalRevenue,
    totalUnits,
    // % of units returned
    returnRate: totalUnits === 0 ? 0 : (totalReturns / totalUnits) * 100,
  }
}
