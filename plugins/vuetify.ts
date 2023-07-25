import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
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
          primary: "#4299c2", // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
        },
      },
    },
  },
  });

  nuxtApp.vueApp.use(vuetify);
});
