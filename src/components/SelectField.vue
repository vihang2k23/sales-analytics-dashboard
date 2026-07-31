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
  <label class="flex min-w-[8rem] flex-col gap-1 text-sm">
    <span class="font-medium text-ink">{{ label }}</span>
    <select
      class="rounded-md border border-line bg-white px-3 py-2 text-ink outline-none focus:border-accent"
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
