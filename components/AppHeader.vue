<template>
  <q-header class="text-black row justify-center bg-grey-3">
    <!-- PC向け -->
    <q-toolbar
      :style="$q.screen.gt.sm ? 'width:900px' : ''"
      :class="$q.screen.gt.sm ? '' : 'text-center'"
    >
      <q-toolbar-title>
        <NuxtLink to="/" class="text-bold">
          <q-img src="/logo.png" style="width: 128px" no-spinner />
        </NuxtLink>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
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
