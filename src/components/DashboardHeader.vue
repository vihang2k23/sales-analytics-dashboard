<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  eyebrow?: string
}>()
</script>

<template>
  <header
    class="relative mb-6 overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-sm sm:mb-8 sm:p-6"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-teal-400 to-navy"
      aria-hidden="true"
    />
    <p
      v-if="eyebrow"
      class="m-0 mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
    >
      {{ eyebrow }}
    </p>
    <h1
      class="font-display m-0 text-2xl font-semibold tracking-tight text-ink md:text-3xl"
    >
      {{ title }}
    </h1>
    <p class="mt-2 max-w-2xl text-sm text-muted sm:text-base">{{ subtitle }}</p>
  </header>
</template>
