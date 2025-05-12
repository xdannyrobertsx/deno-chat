import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    openaiApiKey: Deno.env.get("OPENAI_API_KEY")
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon']
})
