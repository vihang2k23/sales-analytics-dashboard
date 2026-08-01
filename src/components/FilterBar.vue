<script setup lang="ts">
import DateRangeFilter from './DateRangeFilter.vue'
import CategoryFilter from './CategoryFilter.vue'
import { UI_TEXT } from '../constants/uiText'
</script>

<template>
  <section
    class="mb-4 rounded-lg border border-line bg-surface p-3 shadow-sm sm:mb-6 sm:p-4"
    aria-label="Dashboard filters"
  >
    <p class="m-0 mb-3 text-sm font-medium text-ink">{{ UI_TEXT.filtersHeading }}</p>
    <DateRangeFilter />
    <div class="mt-4 border-t border-line pt-4">
      <CategoryFilter />
    </div>
  </section>
</template>
