<script setup lang="ts">
import DateRangeFilter from './DateRangeFilter.vue'
import CategoryFilter from './CategoryFilter.vue'
</script>

<template>
  <section
    class="mb-6 rounded-lg border border-line bg-surface p-4 shadow-sm"
    aria-label="Dashboard filters"
  >
    <DateRangeFilter />
    <div class="mt-4">
      <CategoryFilter />
    </div>
  </section>
</template>
