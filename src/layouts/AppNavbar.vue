<script setup lang="ts">
import { UI_TEXT } from '../constants/uiText'
import logoUrl from '../assets/sales-analytics-logo.png'
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-white/10 bg-navy text-white shadow-lg shadow-slate-900/10">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <div class="flex items-center justify-between gap-4 py-3">
        <a href="/" class="flex min-w-0 items-center gap-3 no-underline">
          <img
            :src="logoUrl"
            alt=""
            class="h-11 w-11 rounded-full bg-white object-contain p-1.5 shadow-sm sm:h-12 sm:w-12"
          />
          <div class="min-w-0">
            <p class="m-0 font-display text-base font-semibold tracking-tight text-white sm:text-lg">
              {{ UI_TEXT.navBrand }}
            </p>
            <p class="m-0 truncate text-xs text-slate-300">
              {{ UI_TEXT.navSubtitle }}
            </p>
          </div>
        </a>

        <nav
          class="hidden items-center gap-1 rounded-full bg-white/5 p-1 text-sm md:flex"
          aria-label="Primary"
        >
          <span
            class="rounded-full bg-white px-3.5 py-1.5 font-medium text-navy"
          >
            {{ UI_TEXT.navOverview }}
          </span>
          <span class="rounded-full px-3.5 py-1.5 text-slate-300">
            {{ UI_TEXT.navInsights }}
          </span>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <span
            class="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300"
          >
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {{ UI_TEXT.navLive }}
          </span>
          <span
            class="hidden rounded-lg border border-white/15 bg-navy-soft px-2.5 py-1 text-xs font-medium text-slate-200 sm:inline"
          >
            {{ UI_TEXT.navYear }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
