<script setup lang="ts">
defineProps<{
  title?: string
  message: string
}>()
</script>

<template>
  <div
    class="rounded-2xl border border-dashed border-line bg-surface/80 px-6 py-14 text-center shadow-sm"
    role="status"
  >
    <div
      class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-page text-accent"
      aria-hidden="true"
    >
      <span class="font-display text-lg font-bold">∅</span>
    </div>
    <p v-if="title" class="font-display m-0 text-lg font-semibold text-ink">
      {{ title }}
    </p>
    <p class="m-0 text-sm text-muted" :class="{ 'mt-2': title }">
      {{ message }}
    </p>
  </div>
</template>
