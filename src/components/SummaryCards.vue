<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSalesStore } from '../stores/salesStore'
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '../utils/formatters'
import SummaryCard from './SummaryCard.vue'

const store = useSalesStore()
const { summaryStats } = storeToRefs(store)

// formatting stays here; numbers come from the store
</script>

<template>
  <section
    class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3"
    aria-label="Summary statistics"
  >
    <SummaryCard
      label="Total Revenue"
      :value="formatCurrency(summaryStats.totalRevenue)"
    />
    <SummaryCard
      label="Total Units Sold"
      :value="formatNumber(summaryStats.totalUnits)"
    />
    <SummaryCard
      label="Return Rate"
      :value="formatPercent(summaryStats.returnRate)"
    />
  </section>
</template>
