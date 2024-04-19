<template>
  <div class="q-pa-md row justify-center">
    <div style="max-width: 950px">
      <div
        class="q-pa-md row items-start q-gutter-lg"
        :class="$q.screen.lt.md ? 'justify-around' : 'justify-between'"
      >
        <q-card
          v-for="post in posts"
          :href="post.url"
          :style="$q.screen.lt.md ? 'width:75%' : 'width: 280px;'"
          class=""
        >
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
              {{ post.date }} - {{ getServiceFromUrl(post.url).name }}
            </div>
            <q-chip
              v-for="tag in post.tags"
              class="text-caption q-ml-none"
              :label="tag"
            />
          </q-card-section>
        </q-card>
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
