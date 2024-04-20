<template>
  <!-- TODO heightを設定しないと要素が表示されない -->
  <q-header class="text-black row justify-center bg-grey-3">
    <!-- PC向け -->
    <div class="gt-sm">
      <q-toolbar style="width: 900px" class="row justify-between">
        <q-toolbar-title>
          <NuxtLink
            to="/"
            style="text-decoration: none; color: inherit"
            class="text-bold"
          >
            <q-img src="/logo.png" style="width: 128px" no-spinner />
          </NuxtLink>
        </q-toolbar-title>

        <!-- <q-btn flat dense to="/posts" label="posts" class="text-bold" /> -->
        <!-- <q-btn flat dense to="/works" label="works" class="q-ml-lg text-bold" /> -->
        <q-tabs
          v-model="tab"
          no-caps
          indicator-color="black"
          class="text-black text-bold"
          style="font-size: 16px"
        >
          <NuxtLink to="/posts" style="text-decoration: none; color: inherit">
            <q-tab name="posts"> Posts </q-tab>
          </NuxtLink>
          <NuxtLink to="/works" style="text-decoration: none; color: inherit">
            <q-tab name="works"> Works </q-tab>
          </NuxtLink>
        </q-tabs>
      </q-toolbar>
    </div>

    <!-- SP向け -->
    <div class="lt-md q-my-xs">
      <q-toolbar>
        <q-toolbar-title class="text-black">
          <NuxtLink to="/" style="text-decoration: none" class="text-bold">
            <q-img src="/logo.png" style="width: 128px" no-spinner />
          </NuxtLink>
        </q-toolbar-title>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script setup lang="ts">
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
