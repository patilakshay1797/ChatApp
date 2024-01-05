import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const chatHistory = ref([{order: 1, from: "me", chatMsg: "Hi there are you awake ?"},{order: 2, from: "other", chatMsg: "Hi, yes awake"}])
  
  const setChatistory = (chatHist) => {
    chatHistory.value = chatHist;
  }

  const addChatToHistory = (chatMsg) => {

  }

  return { chatHistory, setChatistory, addChatToHistory }
})
