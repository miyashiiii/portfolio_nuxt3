<template>
  <div>
    <v-app>
      <v-app-bar color="primary">
          <v-app-bar-title class="pl-5 white--text"> miyashiiii portfolio </v-app-bar-title>
        <template v-slot:append>
          <v-btn nuxt to="/posts">posts</v-btn>
          <v-btn nuxt to="/works">works</v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
    </v-app>
  </div>
</template>
