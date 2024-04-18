<template>
  <header>
    <!-- TODO heightを設定しないと要素が表示されない -->
    <q-layout view="lHh lpr lFf" container style="height: 80px">
      <q-header bordered class="bg-white text-primary row justify-center">
        <q-toolbar style="max-width: 900px;">
          <q-toolbar-title>
            <NuxtLink
              to="/"
              style="text-decoration: none; color: inherit"
              class="text-bold"
            >
              miyashiiii portfolio
            </NuxtLink>
          </q-toolbar-title>

          <q-btn flat  dense to="/posts" label="posts" class="text-bold" />
          <q-btn flat dense to="/works" label="works" class="q-ml-lg text-bold" />
        </q-toolbar>
      </q-header>
    </q-layout>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref("images");
</script>
