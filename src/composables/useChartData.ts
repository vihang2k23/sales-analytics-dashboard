import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSalesStore } from '../stores/salesStore'
import { CATEGORIES } from '../types/sales'
import { buildLineChartData } from '../utils/buildChartData'

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

  return {
    lineChartData,
  }
}
