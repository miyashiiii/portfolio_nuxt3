// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/vuetify"],
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
  css: ["@/assets/main.scss", "vuetify/lib/styles/main.sass"],
  vite: {
    ssr: {
      noExternal: [/\.css$/, /^vuetify/],
    },
  },
});
