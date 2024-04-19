<template>
  <div class="q-pa-md row justify-center">
    <div style="max-width: 950px">
      
      <div class="q-pa-md row items-start q-gutter-lg" :class="$q.screen.lt.md ? 'justify-around': 'justify-between'">
        <q-card v-for="post in posts"  :href="post.url" :style="$q.screen.lt.md ? 'width:75%':'width: 280px;'" class="">
        <a :href="post.url" class="row items-center justify-center bg-grey-1" style="height:120px">
          <q-img v-if="post.img" :src="getImgPath(post.img)"fit="scale-down" style="height:120px"/>
            <q-img v-else
              :src="getIconPath(post.url)"
              style="height: 50px; width: 50px"
            />
            </a>
          <q-card-section>
        <a :href="post.url" class="text-bold text-black" style="text-decoration: none;">{{ post.title }}</a>
            <div class="q-mt-xs text-grey-8">{{ post.date }}</div>
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
type Post = {
  title: string;
  url: string;
  date: string;
  tags: string[];
  img: string;
};
import postsJson from "./assets/posts.json";

const posts = ref(postsJson);

const getDomain = (url: string) => {
  return new URL(url).hostname;
};


const getImgPath = (imgName:string) => {
  return `/posts/${imgName}`;
};

const getIconPath = (url: string) => {
  // ドメイン名に基づいてアイコンのパスを返す
  const domain = getDomain(url);
  if (domain.includes("hatenablog")) {
    return "/sns/hatenablog.svg";
  } else if (domain.includes("qiita")) {
    return "/sns/qiita.png";
  } else if (domain.includes("note")) {
    return "/sns/note.png";
  } else if (domain.includes("zenn")) {
    return "/sns/zenn.png";
  } else if (domain.includes("docswell")) {
    return "/sns/docswell.png";
  } else {
    return "/sns/miyashiiii.png";
  }
};
</script>
