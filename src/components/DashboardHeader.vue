<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <header class="mb-8">
    <h1 class="m-0 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
      {{ title }}
    </h1>
    <p class="mt-2 text-sm text-muted">{{ subtitle }}</p>
  </header>
</template>
