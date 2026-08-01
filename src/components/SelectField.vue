<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string
  options: readonly string[]
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <label class="flex min-w-[8.5rem] flex-col gap-1.5 text-sm">
    <span class="text-xs font-semibold uppercase tracking-wide text-muted">
      {{ label }}
    </span>
    <select
      class="rounded-xl border border-line bg-page px-3 py-2.5 text-ink outline-none transition focus:border-accent focus:bg-surface"
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
</template>
