<script setup lang="ts">
import { Line } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { useChartData } from '../composables/useChartData'
import { registerCharts } from '../utils/registerCharts'
import ChartPanel from './ChartPanel.vue'

registerCharts()

const { lineChartData } = useChartData()

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
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
    y: {
      beginAtZero: true,
      ticks: {
        callback(value) {
          return `$${Number(value).toLocaleString('en-US')}`
        },
      },
    },
  },
}
</script>

<template>
  <ChartPanel title="Revenue trend">
    <div class="relative h-72 w-full" aria-label="Revenue trend line chart">
      <Line :data="lineChartData" :options="options" />
    </div>
  </ChartPanel>
</template>
