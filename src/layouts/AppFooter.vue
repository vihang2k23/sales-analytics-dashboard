<script setup lang="ts">
import { UI_TEXT } from '../constants/uiText'
import logoUrl from '../assets/sales-analytics-logo.png'
</script>

<template>
  <footer class="mt-auto border-t border-line bg-navy text-slate-300">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6"
    >
      <div class="flex items-center gap-3">
        <img
          :src="logoUrl"
          alt=""
          class="h-10 w-10 rounded-full bg-white object-contain p-1.5"
        />
        <div>
          <p class="m-0 font-display text-sm font-semibold text-white">
            {{ UI_TEXT.footerCredit }}
          </p>
          <p class="m-0 mt-1 text-xs text-slate-400">{{ UI_TEXT.footerNote }}</p>
        </div>
      </div>
      <p class="m-0 text-xs text-slate-500">{{ UI_TEXT.navBrand }}</p>
    </div>
  </footer>
</template>
