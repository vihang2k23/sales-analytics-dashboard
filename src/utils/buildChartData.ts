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

function categoryTotal(records: SalesRecord[], category: Category): number {
  return records
    .filter((row) => row.category === category)
    .reduce((sum, row) => sum + row.revenue, 0)
}

// fade bars that aren't the clicked month
function barFill(
  color: string,
  month: MonthKey,
  highlightedMonth: MonthKey | null,
): string {
  if (!highlightedMonth || month === highlightedMonth) {
    return color
  }

  return `${color}55`
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

export function buildBarChartData(
  records: SalesRecord[],
  months: MonthKey[],
  categories: Category[],
  highlightedMonth: MonthKey | null,
): ChartData<'bar'> {
  return {
    labels: [...months],
    datasets: categories.map((category) => {
      const color = CATEGORY_COLORS[category]

      return {
        label: category,
        data: months.map((month) => revenueFor(records, month, category)),
        backgroundColor: months.map((month) =>
          barFill(color, month, highlightedMonth),
        ),
        borderColor: color,
        borderWidth: months.map((month) =>
          month === highlightedMonth ? 2 : 0,
        ),
      }
    }),
  }
}

export function buildPieChartData(
  records: SalesRecord[],
  categories: Category[],
): ChartData<'doughnut'> {
  return {
    labels: [...categories],
    datasets: [
      {
        data: categories.map((category) => categoryTotal(records, category)),
        backgroundColor: categories.map(
          (category) => CATEGORY_COLORS[category],
        ),
        borderWidth: 1,
        borderColor: '#ffffff',
      },
    ],
  }
}
