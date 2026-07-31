<script setup lang="ts">
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'
</script>

<template>
  <!-- line full width; bar + pie side by side on desktop -->
  <section class="flex flex-col gap-4 sm:gap-6" aria-label="Sales charts">
    <LineChart />
    <div class="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
      <BarChart />
      <PieChart />
    </div>
  </section>
</template>
