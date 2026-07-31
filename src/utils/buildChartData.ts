import type { ChartData } from 'chart.js'
import type { Category, MonthKey, SalesRecord } from '../types/sales'
import { CATEGORY_COLORS } from './chartColors'

function revenueFor(
  records: SalesRecord[],
  month: MonthKey,
  category: Category,
): number {
  const row = records.find(
    (item) => item.month === month && item.category === category,
  )
  return row?.revenue ?? 0
}

export function buildLineChartData(
  records: SalesRecord[],
  months: MonthKey[],
  categories: Category[],
  highlightedMonth: MonthKey | null,
): ChartData<'line'> {
  return {
    labels: [...months],
    datasets: categories.map((category) => {
      const color = CATEGORY_COLORS[category]

      return {
        label: category,
        data: months.map((month) => revenueFor(records, month, category)),
        borderColor: color,
        backgroundColor: color,
        tension: 0.25,
        borderWidth: 2,
        // bump the point when that month is selected on the bar chart
        pointRadius: months.map((month) =>
          month === highlightedMonth ? 6 : 3,
        ),
        pointHoverRadius: 7,
      }
    }),
  }
}
