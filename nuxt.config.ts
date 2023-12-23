// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio_nuxt3/",
  },
  modules: [
    "@nuxtjs/google-fonts",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
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
