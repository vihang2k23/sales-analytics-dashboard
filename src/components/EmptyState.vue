<script setup lang="ts">
defineProps<{
  title?: string
  message: string
}>()
</script>

<template>
  <div
    class="rounded-lg border border-dashed border-line bg-surface px-4 py-10 text-center sm:px-6"
    role="status"
  >
    <p v-if="title" class="m-0 text-base font-medium text-ink">{{ title }}</p>
    <p class="m-0 text-sm text-muted" :class="{ 'mt-2': title }">
      {{ message }}
    </p>
  </div>
</template>
