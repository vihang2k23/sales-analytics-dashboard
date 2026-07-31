export type Category = 'Electronics' | 'Clothing' | 'Furniture'

export type MonthKey =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'

export type DateRangePreset = 'all' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'custom'

export interface SalesRecord {
  month: MonthKey
  category: Category
  revenue: number
  unitsSold: number
  returns: number
}

export interface CustomMonthRange {
  start: MonthKey
  end: MonthKey
}

export interface SummaryStats {
  totalRevenue: number
  totalUnits: number
  returnRate: number
}

export const MONTHS: MonthKey[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const CATEGORIES: Category[] = ['Electronics', 'Clothing', 'Furniture']

// maps to the quarter dropdown in FilterBar
export const QUARTER_MONTHS: Record<'Q1' | 'Q2' | 'Q3' | 'Q4', MonthKey[]> = {
  Q1: ['Jan', 'Feb', 'Mar'],
  Q2: ['Apr', 'May', 'Jun'],
  Q3: ['Jul', 'Aug', 'Sep'],
  Q4: ['Oct', 'Nov', 'Dec'],
}
