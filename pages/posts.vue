<template>
  <div class="q-pa-md row justify-center">
    <div style="max-width: 950px">
      <!-- PC向け -->
      <div class="q-pa-md row items-start q-gutter-lg gt-sm justify-between">
        <q-card v-for="post in posts" :href="post.url" style="width: 280px">
          <a
            :href="post.url"
            class="row items-center justify-center bg-grey-1"
            style="height: 120px"
          >
            <q-img
              v-if="post.img"
              :src="getImgPath(post.img)"
              fit="scale-down"
              style="height: 120px"
            />
            <q-img
              v-else
              :src="getServiceFromUrl(post.url).icon"
              style="height: 50px; width: 50px"
            />
          </a>
          <q-card-section>
            <a
              :href="post.url"
              class="text-bold text-black"
              style="text-decoration: none"
            >
              {{ post.title }}
            </a>
            <div class="q-mt-xs text-grey-8">
              <span class="text-black">{{ post.date }}</span> -
              {{ getServiceFromUrl(post.url).name }}
            </div>
            <q-chip
              v-for="tag in post.tags"
              class="text-caption q-ml-none"
              :label="tag"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- スマホ向け -->
      <div class="q-pa-md row items-start q-gutter-lg lt-md">
        <q-list separator>
          <a
            v-for="post in posts"
            :href="post.url"
            style="text-decoration: none"
          >
            <q-item class="q-gutter-x-lg">
              <div
                style="width: 120px; height: 80px"
                class="row justify-center items-center bg-grey-1"
              >
                <q-img
                  v-if="post.img"
                  :src="getImgPath(post.img)"
                  fit="scale-down"
                  style="height: 80px"
                />
                <q-img
                  v-else
                  :src="getServiceFromUrl(post.url).icon"
                  style="height: 50px; width: 50px"
                />
              </div>
              <div class="col">
                <div class="text-black text-bold">
                  {{ post.title }}
                </div>
                <div class="q-mt-xs text-grey-8">
                  <span class="text-black">{{ post.date }}</span> -
                  {{ getServiceFromUrl(post.url).name }}
                </div>
                <q-chip
                  v-for="tag in post.tags"
                  class="text-caption q-ml-none"
                  :label="tag"
                />
              </div>
            </q-item>
            <q-separator color="grey-4" />
          </a>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

import postsJson from "./assets/posts.json";

const posts = ref(postsJson);

const getImgPath = (imgName: string): string => {
  return `/posts/${imgName}`;
};

type Service = {
  name: string;
  icon: string;
};
const getServiceFromUrl = (url: string): Service => {
  if (url.includes("hatenablog")) {
    return { name: "はてなブログ", icon: "/sns/hatenablog.svg" };
  } else if (url.includes("qiita")) {
    return { name: "Qiita", icon: "/sns/qiita.png" };
  } else if (url.includes("note")) {
    return { name: "note", icon: "/sns/note.png" };
  } else if (url.includes("zenn")) {
    return { name: "Zenn", icon: "/sns/zenn.png" };
  } else if (url.includes("docswell")) {
    return { name: "Docswell", icon: "/sns/docswell.png" };
  } else {
    throw new Error("invalid url");
  }
};
</script>
