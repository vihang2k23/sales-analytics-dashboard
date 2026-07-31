<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <header class="mb-6 sm:mb-8">
    <h1 class="m-0 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
      {{ title }}
    </h1>
    <p class="mt-1 text-sm text-muted sm:mt-2">{{ subtitle }}</p>
  </header>
</template>
