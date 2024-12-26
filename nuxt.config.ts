// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/components.css",
    "@fontsource/quicksand/400.css", 
    "@fontsource/quicksand/700.css"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "nuxt-icon"
  ],

  runtimeConfig: {
    public: {
      environment: process.env.VITE_ENVIRONMENT,
      pocketbaseURL: process.env.VITE_POCKETBASE_URL
    }
  },

  compatibilityDate: "2024-10-16"
});