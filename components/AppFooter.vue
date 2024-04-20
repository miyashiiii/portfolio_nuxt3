<template>
  <!-- SP向けのみ -->
  <q-footer class="text-white lt-md" style="background-color: #5694b3">
    <q-toolbar class="row justify-center">
      <q-tabs
        no-caps
        indicator-color="white"
        class="text-white"
        v-model="tab"
        switch-indicator
      >
        <NuxtLink to="/" style="text-decoration: none; color: inherit">
          <q-tab name="index">
            <q-icon name="home" />
            Top
          </q-tab>
        </NuxtLink>
        <NuxtLink to="/posts" style="text-decoration: none; color: inherit">
          <q-tab name="posts">
            <q-icon name="description" />
            Posts
          </q-tab>
        </NuxtLink>
        <NuxtLink to="/works" style="text-decoration: none; color: inherit">
          <q-tab name="works">
            <q-icon name="palette" />
            Works
          </q-tab>
        </NuxtLink>
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref("works");
const route = useRoute();

watchEffect(() => {
  if (route.path === "/") {
    tab.value = "index";
  } else if (route.path === "/posts") {
    tab.value = "posts";
  } else if (route.path === "/works") {
    tab.value = "works";
  }
});
</script>
