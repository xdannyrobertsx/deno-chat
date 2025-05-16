<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  initialValue: 'light',
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()" class="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
    <Icon v-if="isDark" name="heroicons:sun" class="w-5 h-5 text-yellow-300" />
    <Icon v-else name="heroicons:moon" class="w-5 h-5 text-gray-600" />
  </button>
</template>