<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSalesStore } from '../stores/salesStore'
import { CATEGORIES, type Category } from '../types/sales'
import { UI_TEXT } from '../constants/uiText'
import CategoryChip from './CategoryChip.vue'

const store = useSalesStore()
const { selectedCategories } = storeToRefs(store)

function isSelected(category: Category): boolean {
  return selectedCategories.value.includes(category)
}

// chips just call the store — no filter logic here
</script>

<template>
  <div>
    <p class="m-0 mb-2 text-sm font-medium text-ink">
      {{ UI_TEXT.categoriesHeading }}
    </p>
    <div class="flex flex-wrap gap-2">
      <CategoryChip
        v-for="category in CATEGORIES"
        :key="category"
        :label="category"
        :selected="isSelected(category)"
        @toggle="store.toggleCategory(category)"
      />
    </div>
  </div>
</template>
