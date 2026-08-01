<script setup lang="ts">
import { computed } from 'vue'
import { useSalesStore } from '../stores/salesStore'
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '../utils/formatters'
import { UI_TEXT } from '../constants/uiText'
import SummaryCard from './SummaryCard.vue'

const store = useSalesStore()

const cards = computed(() => {
  const stats = store.summaryStats

  return [
    { label: UI_TEXT.totalRevenue, value: formatCurrency(stats.totalRevenue) },
    { label: UI_TEXT.totalUnits, value: formatNumber(stats.totalUnits) },
    { label: UI_TEXT.returnRate, value: formatPercent(stats.returnRate) },
  ]
})
</script>

<template>
  <section
    class="mb-4 grid grid-cols-1 gap-3 sm:mb-6 sm:grid-cols-3 sm:gap-4"
    aria-label="Summary statistics"
  >
    <SummaryCard
      v-for="card in cards"
      :key="card.label"
      :label="card.label"
      :value="card.value"
    />
  </section>
</template>
