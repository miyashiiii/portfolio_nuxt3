<template>
  <!-- TODO heightを設定しないと要素が表示されない -->
  <q-header
    class="text-white row justify-center"
    style="background-color: #5694b3"
  >
    <!-- PC向け -->
    <div class="gt-sm">
      <q-toolbar style="width: 900px" class="row justify-between">
        <q-toolbar-title>
          <NuxtLink
            to="/"
            style="text-decoration: none; color: inherit"
            class="text-bold"
          >
            miyashiiii portfolio
          </NuxtLink>
        </q-toolbar-title>

        <q-btn flat dense to="/posts" label="posts" class="text-bold" />
        <q-btn flat dense to="/works" label="works" class="q-ml-lg text-bold" />
      </q-toolbar>
    </div>

    <!-- SP向け -->
    <div class="lt-md">
      <q-toolbar>
        <q-toolbar-title>
          <NuxtLink
            to="/"
            style="text-decoration: none; color: inherit"
            class="text-bold"
          >
            miyashiiii portfolio
          </NuxtLink>
        </q-toolbar-title>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref("images");
</script>
