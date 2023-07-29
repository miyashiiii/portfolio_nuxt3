// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    download: true,
    families: {
      Ubuntu: true,
    },
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/main.scss"],
});
