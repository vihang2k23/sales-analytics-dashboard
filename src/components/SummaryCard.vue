<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-2xl border border-line bg-surface p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md sm:p-5"
  >
    <div
      class="absolute inset-y-0 left-0 w-1 bg-accent opacity-80 transition group-hover:opacity-100"
      aria-hidden="true"
    />
    <p class="m-0 pl-2 text-xs font-semibold uppercase tracking-wide text-muted">
      {{ label }}
    </p>
    <p class="font-display mt-2 m-0 pl-2 text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
      {{ value }}
    </p>
  </article>
</template>
