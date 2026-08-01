<script setup lang="ts">
import DateRangeFilter from './DateRangeFilter.vue'
import CategoryFilter from './CategoryFilter.vue'
import { UI_TEXT } from '../constants/uiText'
</script>

<template>
  <section
    class="mb-4 rounded-2xl border border-line bg-surface p-4 shadow-sm sm:mb-6 sm:p-5"
    aria-label="Dashboard filters"
  >
    <div class="mb-4 flex items-center justify-between gap-3">
      <p class="font-display m-0 text-sm font-semibold text-ink">
        {{ UI_TEXT.filtersHeading }}
      </p>
      <span class="rounded-full bg-page px-2.5 py-1 text-xs font-medium text-muted">
        {{ UI_TEXT.filtersLiveHint }}
      </span>
    </div>
    <DateRangeFilter />
    <div class="mt-4 border-t border-line pt-4">
      <CategoryFilter />
    </div>
  </section>
</template>
