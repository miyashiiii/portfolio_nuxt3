// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio_nuxt3/",
    cdnURL: "/portfolio_nuxt3/",
  },
  modules: [
    [

    "@nuxtjs/google-fonts" ,{
      families: {
        Ubuntu: true,
      }
    },
  ],
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  css: ["@/assets/main.scss", "vuetify/lib/styles/main.sass"],
  vite: {
    ssr: {
      noExternal: [/\.css$/, /^vuetify/],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
