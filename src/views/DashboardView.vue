<script setup lang="ts">
import { storeToRefs } from 'pinia'
import DashboardHeader from '../components/DashboardHeader.vue'
import FilterBar from '../components/FilterBar.vue'
import SummaryCards from '../components/SummaryCards.vue'
import EmptyState from '../components/EmptyState.vue'
import ChartsSection from '../components/ChartsSection.vue'
import { useSalesStore } from '../stores/salesStore'

const store = useSalesStore()
const { hasFilteredData } = storeToRefs(store)

// hide charts if every category is off / range is empty
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-8 md:px-6">
    <DashboardHeader
      title="Sales Analytics"
      subtitle="Monthly revenue by product category"
    />

    <FilterBar />
    <SummaryCards />

    <EmptyState
      v-if="!hasFilteredData"
      message="No data for the current filters. Turn a category back on or widen the date range."
    />
    <ChartsSection v-else />
  </div>
</template>
