// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    '~/assets/css/containers.css',
    '~/assets/css/background.css',
    '~/assets/css/iframe_doc.css',
  ],
    modules: [
      "@nuxtjs/tailwindcss",
      'nuxt-headlessui',
      '@nuxtjs/supabase',
      '@pinia-plugin-persistedstate/nuxt',
      '@pinia/nuxt',
  ],
})
