<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useChat } from '@ai-sdk/vue';

const { messages, input, handleSubmit, status } = useChat({
  api: '/api/chat'
});

const isLoading = computed(() => status.value === 'in-progress');

const chatContainerRef = ref(null);

const scrollToBottom = () => {
  if (chatContainerRef.value) {
    chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight;
  }
};


watch(messages, scrollToBottom, { deep: true });

onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 py-4 px-6">
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-800">ChatGPT Clone</h1>
      </div>
    </header>

    <!-- Chat Container -->
    <div 
      ref="chatContainerRef"
      class="flex-1 overflow-y-auto p-4 md:p-6 max-w-4xl mx-auto w-full"
    >
      <div v-if="messages.length === 0" class="flex flex-col items-center justify-center h-full text-center">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-md">
          <h2 class="text-xl font-medium text-gray-800 mb-2">Welcome to ChatGPT Clone</h2>
          <p class="text-gray-600">Ask me anything and I'll do my best to help you.</p>
        </div>
      </div>

      <div v-else class="space-y-6">
        <div 
          v-for="message in messages" 
          :key="message.id"
          :class="[
            'p-4 rounded-lg max-w-3xl',
            message.role === 'user' 
              ? 'bg-purple-600 text-white ml-auto' 
              : 'bg-gray-100 text-gray-800'
          ]"
        >
          <div class="flex items-start gap-3">
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              :class="message.role === 'user' ? 'bg-white text-purple-600' : 'bg-gray-200'"
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
      </div>
    </div>

    <!-- Input Form -->
    <div class="border-t border-gray-200 bg-white p-4">
      <div class="max-w-4xl mx-auto">
        <form @submit.prevent="handleSubmit" class="relative">
          <input
            v-model="input"
            type="text"
            placeholder="Type your message..."
            class="w-full p-4 pr-16 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
        <p class="text-xs text-gray-500 mt-2 text-center">
          Powered by Vercel AI SDK and Vue.js
        </p>
      </div>
    </div>
  </div>
</template>