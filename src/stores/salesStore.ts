import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import salesData from '../data/salesData.json'
import {
  CATEGORIES,
  MONTHS,
  type Category,
  type CustomMonthRange,
  type DateRangePreset,
  type MonthKey,
  type SalesRecord,
} from '../types/sales'
import {
  calculateSummary,
  filterSalesRecords,
  resolveActiveMonths,
} from '../utils/salesFilters'

export const useSalesStore = defineStore('sales', () => {
  const rawData = ref<SalesRecord[]>(salesData as SalesRecord[])
  const selectedCategories = ref<Category[]>([...CATEGORIES])
  const datePreset = ref<DateRangePreset>('all')
  const customRange = ref<CustomMonthRange>({ start: 'Jan', end: 'Dec' })
  const highlightedMonth = ref<MonthKey | null>(null)

  const activeMonths = computed(() =>
    resolveActiveMonths(datePreset.value, customRange.value),
  )

  const filteredRecords = computed(() =>
    filterSalesRecords(rawData.value, selectedCategories.value, activeMonths.value),
  )

  const summaryStats = computed(() => calculateSummary(filteredRecords.value))
  const hasFilteredData = computed(() => filteredRecords.value.length > 0)

  function setDatePreset(preset: DateRangePreset): void {
    datePreset.value = preset
    highlightedMonth.value = null
  }

  function setCustomRange(start: MonthKey, end: MonthKey): void {
    customRange.value = { start, end }
    datePreset.value = 'custom'
    highlightedMonth.value = null
  }

  function toggleCategory(category: Category): void {
    const selected = selectedCategories.value

    if (selected.includes(category)) {
      selectedCategories.value = selected.filter((item) => item !== category)
    } else {
      selectedCategories.value = [...selected, category]
    }

    highlightedMonth.value = null
  }

  // toggle off if they click the same bar again
  function setHighlightedMonth(month: MonthKey): void {
    highlightedMonth.value =
      highlightedMonth.value === month ? null : month
  }

  function clearHighlight(): void {
    highlightedMonth.value = null
  }

  return {
    rawData,
    selectedCategories,
    datePreset,
    customRange,
    highlightedMonth,
    availableMonths: MONTHS,
    availableCategories: CATEGORIES,
    activeMonths,
    filteredRecords,
    summaryStats,
    hasFilteredData,
    setDatePreset,
    setCustomRange,
    toggleCategory,
    setHighlightedMonth,
    clearHighlight,
  }
})
