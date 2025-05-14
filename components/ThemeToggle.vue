<script setup>
import { useDark, useToggle } from '@vueuse/core'

// This will automatically add the dark class to the html element when in dark mode
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button 
    @click="toggleDark()" 
    class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Icon v-if="isDark" name="heroicons:sun" class="w-5 h-5 text-yellow-300" />
    <Icon v-else name="heroicons:moon" class="w-5 h-5 text-gray-600" />
  </button>
</template> 