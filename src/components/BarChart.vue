<script setup lang="ts">
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { useSalesStore } from '../stores/salesStore'
import { useChartData } from '../composables/useChartData'
import { registerCharts } from '../utils/registerCharts'
import type { MonthKey } from '../types/sales'
import ChartPanel from './ChartPanel.vue'

registerCharts()

const store = useSalesStore()
const { barChartData, activeMonths } = useChartData()

const options = computed<ChartOptions<'bar'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label(context) {
          const value = context.parsed.y ?? 0
          return `${context.dataset.label}: $${value.toLocaleString('en-US')}`
        },
      },
    },
  },
  scales: {
    x: {
      stacked: false,
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback(value) {
          return `$${Number(value).toLocaleString('en-US')}`
        },
      },
    },
  },
  onClick(_event, elements) {
    if (!elements.length) {
      store.clearHighlight()
      return
    }

    const month = activeMonths.value[elements[0].index] as MonthKey | undefined
    if (month) {
      store.setHighlightedMonth(month)
    }
  },
}))
</script>

<template>
  <ChartPanel
    title="Monthly revenue by category"
    hint="Click a bar to highlight"
  >
    <div
      class="relative h-64 w-full sm:h-72"
      aria-label="Monthly revenue bar chart"
    >
      <Bar :data="barChartData" :options="options" />
    </div>
  </ChartPanel>
</template>
