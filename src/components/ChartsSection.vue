<script setup lang="ts">
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'
</script>

<template>
  <section class="mt-2 flex flex-col gap-6" aria-label="Sales charts">
    <LineChart />
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <BarChart />
      <PieChart />
    </div>
  </section>
</template>
