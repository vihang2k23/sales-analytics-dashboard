<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { useChartData } from '../composables/useChartData'
import { registerCharts } from '../utils/registerCharts'
import { UI_TEXT } from '../constants/uiText'
import ChartPanel from './ChartPanel.vue'

registerCharts()

const { pieChartData } = useChartData()

const options: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label(context) {
          const value = context.parsed ?? 0
          const label = context.label ?? ''
          return `${label}: $${Number(value).toLocaleString('en-US')}`
        },
      },
    },
  },
}
</script>

<template>
  <ChartPanel :title="UI_TEXT.pieChartTitle">
    <div
      class="relative mx-auto h-64 w-full max-w-md sm:h-72"
      aria-label="Revenue share pie chart"
    >
      <Doughnut :data="pieChartData" :options="options" />
    </div>
  </ChartPanel>
</template>
