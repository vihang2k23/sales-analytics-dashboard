<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <p
    class="rounded-lg border border-line bg-surface px-4 py-8 text-center text-muted"
  >
    {{ message }}
  </p>
</template>
