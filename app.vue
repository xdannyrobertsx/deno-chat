<script setup>
import { computed } from 'vue';
import { useChat } from '@ai-sdk/vue';
import Header from './components/Header.vue';
import ChatContainer from './components/ChatContainer.vue';
import MessageInput from './components/MessageInput.vue';

const { messages, input, handleSubmit, status } = useChat({
  api: '/api/chat'
});

const isLoading = computed(() => status.value === 'in-progress');
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
    <Header />
    <ChatContainer :messages="messages" />
    <MessageInput 
      :input="input"
      :is-loading="isLoading"
      :handle-submit="handleSubmit"
      @update:input="newValue => input = newValue"
    />
  </div>
</template>