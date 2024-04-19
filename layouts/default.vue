<template>
  <!-- TODO heightの指定を画面高さに合わせる -->
  <q-layout view="lHh lpr lFf" container style="height: 500px">
    <AppHeader />
    <q-page-container>
      <slot />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>
