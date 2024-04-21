<template>
  <!-- SP向けのみ -->
  <q-footer class="text-white" style="background-color: #5694b3">
    <q-toolbar class="row justify-center">
      <q-tabs
        no-caps
        indicator-color="white"
        class="text-white"
        v-model="tab"
        switch-indicator
      >
        <NuxtLink to="/" style="text-decoration: none; color: inherit">
          <q-tab name="index" class="q-py-xs" style="width: 80px">
            <q-icon name="home" size="sm" />
            Top
          </q-tab>
        </NuxtLink>
        <NuxtLink to="/posts" style="text-decoration: none; color: inherit">
          <q-tab name="posts" class="q-py-xs" style="width: 80px">
            <q-icon name="description" size="sm" />
            Posts
          </q-tab>
        </NuxtLink>
        <NuxtLink to="/works" style="text-decoration: none; color: inherit">
          <q-tab name="works" class="q-py-xs" style="width: 80px">
            <q-icon name="palette" size="sm" />
            Works
          </q-tab>
        </NuxtLink>
        <NuxtLink
          to="https://github.com/miyashiiii/miyashiiii.github.io"
          style="text-decoration: none; color: inherit"
        >
          <div class="col q-py-xs" style="width: 80px">
            <div class="row justify-center">
              <q-icon name="fa-brands fa-github" size="sm" />
            </div>
            <div class="text-center">Source <q-icon name="open_in_new" /></div>
          </div>
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
  } else if (route.path.startsWith("/posts")) {
    tab.value = "posts";
  } else if (route.path === "/works") {
    tab.value = "works";
  }
});
</script>
