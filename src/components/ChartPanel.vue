<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    hint?: string
  }>(),
  {
    hint: undefined,
  },
)
</script>

<template>
  <div class="rounded-lg border border-line bg-surface p-3 shadow-sm sm:p-4">
    <div class="mb-3 flex flex-wrap items-baseline justify-between gap-2">
      <h2 class="m-0 text-sm font-medium text-ink">{{ title }}</h2>
      <p v-if="hint" class="m-0 text-xs text-muted">{{ hint }}</p>
    </div>
    <slot />
  </div>
</template>
