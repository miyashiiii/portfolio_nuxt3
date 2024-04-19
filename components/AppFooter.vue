<template>
  <!-- TODO heightを設定しないと要素が表示されない -->
  <q-footer
    class="text-white row justify-center"
    style="background-color: #5694b3"
  >
    <!-- PC向け -->

    <!-- SP向け -->
    <div class="lt-md">
      <q-toolbar>
        <q-tabs
          no-caps
          indicator-color="white"
          class="text-white"
          v-model="tab"
          switch-indicator
        >
          <NuxtLink to="/posts" style="text-decoration: none; color: inherit">
            <q-tab name="posts">
              <q-icon name="description" />
              Posts
            </q-tab>
          </NuxtLink>
          <NuxtLink to="/works" style="text-decoration: none; color: inherit">
            <q-tab name="works">
              <q-icon name="work" />
              Works
            </q-tab>
          </NuxtLink>
        </q-tabs>
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref("images");
</script>
