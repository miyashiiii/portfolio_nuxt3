<template>
  <div class = "fixed-center full-width q-gutter-y-lg">
    <div class="row justify-center items-center">
      <div>
        <q-img
          :src="imagePath"
          spinner-color="white"
          style="height: 300px; width: 300px"
        />
      </div>
      <div>
        <p class="prof-text text-weight-bold">miyashiiii</p>
        <p class="prof-text">Software engineer</p>
        <p class="prof-text">Saitama, Japan</p>
      </div>
    </div>

    <!-- Links section -->
    <div class="row justify-center">
      <div v-for="(link, index) in links" :key="index" class="q-mx-md">
        <a :href="link.url">
          <q-img :src="link.icon" style="height: 32px; width: 32px" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const imagePath = "/miyashiiii.png";
const links = [
  {
    url: "https://twitter.com/mysh_iiii",
    icon: "/sns/x.png",
  },
  {
    url: "https://miyashiiii.hatenablog.jp/",
    icon: "/sns/hatenablog.png",
  },
  {
    url: "https://qiita.com/miyashiiii",
    icon: "/sns/qiita.png",
  },
  {
    url: "https://github.com/miyashiiii",
    icon: "/sns/github.png",
  },
  {
    url: "https://sizu.me/miyashiiii",
    icon: "/sns/sizu.png",
  }
];
</script>
