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
  <div
    class="rounded-2xl border border-line bg-surface p-4 shadow-sm sm:p-5"
  >
    <div class="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
      <h2 class="font-display m-0 text-sm font-semibold text-ink">{{ title }}</h2>
      <p
        v-if="hint"
        class="m-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
      >
        {{ hint }}
      </p>
    </div>
    <slot />
  </div>
</template>
