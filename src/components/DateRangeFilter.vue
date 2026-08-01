<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useSalesStore } from '../stores/salesStore'
import { MONTHS, type DateRangePreset, type MonthKey } from '../types/sales'
import { UI_TEXT } from '../constants/uiText'
import SelectField from './SelectField.vue'

const store = useSalesStore()
const { datePreset, customRange } = storeToRefs(store)

// only show from/to when they pick custom
const showCustomRange = computed(() => datePreset.value === 'custom')

function onPresetChange(value: string): void {
  store.setDatePreset(value as DateRangePreset)
}

function onStartChange(value: string): void {
  store.setCustomRange(value as MonthKey, customRange.value.end)
}

function onEndChange(value: string): void {
  store.setCustomRange(customRange.value.start, value as MonthKey)
}
</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">
    <label class="flex min-w-[10rem] flex-col gap-1.5 text-sm">
      <span class="text-xs font-semibold uppercase tracking-wide text-muted">
        {{ UI_TEXT.dateRangeLabel }}
      </span>
      <select
        class="rounded-xl border border-line bg-page px-3 py-2.5 text-ink outline-none transition focus:border-accent focus:bg-surface"
        :value="datePreset"
        @change="onPresetChange(($event.target as HTMLSelectElement).value)"
      >
        <option
          v-for="option in UI_TEXT.datePresets"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </label>

    <template v-if="showCustomRange">
      <SelectField
        :label="UI_TEXT.fromLabel"
        :model-value="customRange.start"
        :options="MONTHS"
        @update:model-value="onStartChange"
      />
      <SelectField
        :label="UI_TEXT.toLabel"
        :model-value="customRange.end"
        :options="MONTHS"
        @update:model-value="onEndChange"
      />
    </template>
  </div>
</template>
