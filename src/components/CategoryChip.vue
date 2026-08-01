<script setup lang="ts">
defineProps<{
  label: string
  selected: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<template>
  <button
    type="button"
    class="rounded-full border px-3.5 py-1.5 text-sm font-medium transition"
    :class="
      selected
        ? 'border-accent bg-accent text-white shadow-sm shadow-accent/20'
        : 'border-line bg-page text-muted hover:border-accent/40 hover:text-ink'
    "
    @click="$emit('toggle')"
  >
    {{ label }}
  </button>
</template>
