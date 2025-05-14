<script setup>
defineProps({
  message: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div 
    :class="[
      'p-4 rounded-lg max-w-3xl',
      message.role === 'user' 
        ? 'bg-purple-600 text-white ml-auto' 
        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
    ]"
  >
    <div class="flex items-start gap-3">
      <div 
        class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        :class="message.role === 'user' ? 'bg-white text-purple-600' : 'bg-gray-200 dark:bg-gray-600'"
      >
        <Icon v-if="message.role === 'user'" name="heroicons:user" class="w-5 h-5" />
        <Icon v-else name="heroicons:cpu-chip" class="w-5 h-5" />
      </div>
      <div>
        <div v-for="(part, idx) in message.parts" :key="idx">
          <div v-if="part.type === 'text'" class="whitespace-pre-wrap">{{ part.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template> 