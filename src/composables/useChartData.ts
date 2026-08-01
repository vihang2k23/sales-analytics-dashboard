import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSalesStore } from '../stores/salesStore'
import { CATEGORIES } from '../types/sales'
import {
  buildBarChartData,
  buildLineChartData,
  buildPieChartData,
} from '../utils/buildChartData'

export function useChartData() {
  const store = useSalesStore()
  const {
    filteredRecords,
    activeMonths,
    selectedCategories,
    highlightedMonth,
  } = storeToRefs(store)

  // keep category order stable so colors don't jump around
  const visibleCategories = computed(() =>
    CATEGORIES.filter((category) =>
      selectedCategories.value.includes(category),
    ),
  )

  const lineChartData = computed(() =>
    buildLineChartData(
      filteredRecords.value,
      activeMonths.value,
      visibleCategories.value,
      highlightedMonth.value,
    ),
  )

  const barChartData = computed(() =>
    buildBarChartData(
      filteredRecords.value,
      activeMonths.value,
      visibleCategories.value,
      highlightedMonth.value,
    ),
  )

  const pieChartData = computed(() =>
    buildPieChartData(
      filteredRecords.value,
      visibleCategories.value,
      highlightedMonth.value,
    ),
  )

  return {
    lineChartData,
    barChartData,
    pieChartData,
    activeMonths,
    highlightedMonth,
  }
}
