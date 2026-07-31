<script setup lang="ts">
import SummaryCards from '../components/SummaryCards.vue'
import FilterBar from '../components/FilterBar.vue'
import LineChart from '../components/LineChart.vue'
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-8 md:px-6">
    <header class="mb-8">
      <h1 class="m-0 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        Sales Analytics
      </h1>
      <p class="mt-2 text-sm text-muted">
        Monthly revenue by product category
      </p>
    </header>

    <SummaryCards />
    <FilterBar />

    <section class="mt-6 flex flex-col gap-6">
      <LineChart />
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <BarChart />
        <PieChart />
      </div>
    </section>
  </div>
</template>
