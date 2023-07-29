import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: "mdi",
    },
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#5692b0",
            secondary: "#5f696c",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
