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
    class="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-accent/25 bg-gradient-to-r from-accent-soft to-white px-4 py-3 text-sm shadow-sm"
  >
    <p class="m-0 text-ink">
      {{ UI_TEXT.highlightPrefix }}
      <span class="font-display font-semibold text-accent">{{ highlightedMonth }}</span>
      {{ UI_TEXT.highlightSuffix }}
    </p>
    <button
      type="button"
      class="rounded-full border border-accent/30 bg-surface px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-white"
      @click="store.clearHighlight()"
    >
      {{ UI_TEXT.clearHighlight }}
    </button>
  </div>
</template>
