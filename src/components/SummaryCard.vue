<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <article class="rounded-lg border border-line bg-surface p-4 shadow-sm">
    <p class="m-0 text-sm text-muted">{{ label }}</p>
    <p class="mt-1 m-0 text-2xl font-semibold text-ink">{{ value }}</p>
  </article>
</template>
