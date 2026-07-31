<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="rounded-lg border border-line bg-surface p-4 shadow-sm">
    <h2 class="m-0 mb-3 text-sm font-medium text-ink">{{ title }}</h2>
    <slot />
  </div>
</template>
