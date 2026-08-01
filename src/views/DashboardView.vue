<script setup lang="ts">
import { storeToRefs } from 'pinia'
import DashboardHeader from '../components/DashboardHeader.vue'
import FilterBar from '../components/FilterBar.vue'
import SummaryCards from '../components/SummaryCards.vue'
import HighlightBanner from '../components/HighlightBanner.vue'
import EmptyState from '../components/EmptyState.vue'
import ChartsSection from '../components/ChartsSection.vue'
import { useSalesStore } from '../stores/salesStore'
import { UI_TEXT } from '../constants/uiText'

const store = useSalesStore()
const { hasFilteredData } = storeToRefs(store)
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-6 sm:py-8 md:px-6 lg:py-10">
    <DashboardHeader
      :title="UI_TEXT.appTitle"
      :subtitle="UI_TEXT.appSubtitle"
    />

    <FilterBar />
    <SummaryCards />

    <template v-if="hasFilteredData">
      <HighlightBanner />
      <ChartsSection />
    </template>

    <EmptyState
      v-else
      :title="UI_TEXT.emptyTitle"
      :message="UI_TEXT.emptyMessage"
    />
  </div>
</template>
