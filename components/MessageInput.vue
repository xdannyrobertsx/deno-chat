<script setup>
defineProps({
  input: {
    type: String,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  handleSubmit: {
    type: Function,
    required: true
  }
});
</script>

<template>
  <div class="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
    <div class="max-w-4xl mx-auto">
      <form @submit.prevent="handleSubmit" class="relative">
        <input
          :value="input"
          @input="$emit('update:input', $event.target.value)"
          type="text"
          placeholder="Type your message..."
          class="w-full p-4 pr-16 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          :disabled="isLoading"
        />
        <button
          type="submit"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-md bg-purple-600 text-white disabled:opacity-50"
          :disabled="isLoading || !input.trim()"
        >
          <Icon v-if="isLoading" name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
          <Icon v-else name="heroicons:paper-airplane" class="w-5 h-5" />
        </button>
      </form>
      <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
        Powered by Vercel AI SDK and Vue.js
      </p>
    </div>
  </div>
</template> 