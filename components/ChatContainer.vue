<script setup>
import { ref, watch, onMounted } from 'vue';
import ChatMessage from './ChatMessage.vue';
import WelcomeMessage from './WelcomeMessage.vue';

const props = defineProps({
  messages: {
    type: Array,
    default: () => []
  }
});

const chatContainerRef = ref(null);

const scrollToBottom = () => {
  if (chatContainerRef.value) {
    chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight;
  }
};

watch(() => props.messages, scrollToBottom, { deep: true });

onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div 
    ref="chatContainerRef"
    class="flex-1 overflow-y-auto p-4 md:p-6 max-w-4xl mx-auto w-full"
  >
    <WelcomeMessage v-if="messages.length === 0" />

    <div v-else class="space-y-6">
      <ChatMessage 
        v-for="message in messages" 
        :key="message.id"
        :message="message"
      />
    </div>
  </div>
</template> 