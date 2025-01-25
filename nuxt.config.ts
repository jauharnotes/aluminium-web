// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/aos.js", mode: "client" }],
  css: ["~/assets/css/main.css", "animate.css", "aos/dist/aos.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@pinia/nuxt"],
});