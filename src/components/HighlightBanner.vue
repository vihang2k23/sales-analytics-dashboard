<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSalesStore } from '../stores/salesStore'
import { UI_TEXT } from '../constants/uiText'

const store = useSalesStore()
const { highlightedMonth } = storeToRefs(store)
</script>

<template>
  <!-- only shows after a bar click -->
  <div
    v-if="highlightedMonth"
    class="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-accent/30 bg-accent-soft px-3 py-2 text-sm"
  >
    <p class="m-0 text-ink">
      {{ UI_TEXT.highlightPrefix }}
      <span class="font-semibold">{{ highlightedMonth }}</span>
      {{ UI_TEXT.highlightSuffix }}
    </p>
    <button
      type="button"
      class="rounded-md border border-accent/40 bg-surface px-2.5 py-1 text-accent"
      @click="store.clearHighlight()"
    >
      {{ UI_TEXT.clearHighlight }}
    </button>
  </div>
</template>
