<script setup lang="ts">
import { storeToRefs } from 'pinia'
import DashboardHeader from '../components/DashboardHeader.vue'
import FilterBar from '../components/FilterBar.vue'
import SummaryCards from '../components/SummaryCards.vue'
import HighlightBanner from '../components/HighlightBanner.vue'
import EmptyState from '../components/EmptyState.vue'
import ChartsSection from '../components/ChartsSection.vue'
import { useSalesStore } from '../stores/salesStore'

const store = useSalesStore()
const { hasFilteredData } = storeToRefs(store)
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-6 sm:py-8 md:px-6 lg:py-10">
    <DashboardHeader
      title="Sales Analytics"
      subtitle="Monthly revenue by product category"
    />

    <FilterBar />
    <SummaryCards />

    <template v-if="hasFilteredData">
      <HighlightBanner />
      <ChartsSection />
    </template>

    <EmptyState
      v-else
      title="Nothing to show"
      message="Turn a category back on or widen the date range."
    />
  </div>
</template>
