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
    class="rounded-md border px-3 py-1.5 text-sm transition-colors"
    :class="
      selected
        ? 'border-accent bg-accent-soft text-accent'
        : 'border-line bg-white text-muted'
    "
    @click="$emit('toggle')"
  >
    {{ label }}
  </button>
</template>
