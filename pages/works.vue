<template>
  <p class="text-center font-weight-bold mt-5">Works</p>
  <v-row class="mb-5 justify-center">
    <v-col v-for="(work, index) in works" :key="index" cols="12" class="">
      <v-col cols="6" class="mx-auto">
        <v-card class="mb-3">
          <v-img :src="work.thumbnail" height="180" contain></v-img>
          <v-card-title>{{ work.title }}</v-card-title>
          <v-card-subtitle class="grey--text">
            {{ work.subtitle }}
          </v-card-subtitle>
          <div class="px-3 py-3">
            <v-chip
              v-for="(tag, tagIndex) in work.tags"
              :key="tagIndex"
              class="mx-1"
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-col>
  </v-row>

  <v-divider></v-divider>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          title: "ポートフォリオ",
          subtitle: "このサイト",
          thumbnail: "/works/miyashiiii.png",
          tags: ["Nuxt.js", "Vuetify", "GitHub Pages"],
        },
        {
          title: "数読",
          subtitle: "Androidアプリ",
          thumbnail: "/works/sudoku.png",
          tags: ["Android", "Flutter", "Dart"],
        },
        {
          title: "TapNum",
          subtitle: "Androidアプリ",
          thumbnail: "/works/tapnum.png",
          tags: ["Android", "Unity", "C#"],
        },
      ],
      certifications: ["AWS DVA", "基本情報", "応用情報", "囲碁四段"],
    };
  },
  methods: {
    getDomain(url) {
      // URLからドメイン名を抽出
      return new URL(url).hostname;
    },
    getIconPath(url) {
      // ドメイン名に基づいてアイコンのパスを返す
      const domain = this.getDomain(url);
      if (domain.includes("hatenablog")) {
        return "/sns/hatenablog.png";
      } else if (domain.includes("qiita")) {
        return "/sns/qiita.png";
      } else {
        // ドメインが一致しない場合のデフォルトのアイコン
        return "/sns/hatenablog.png";
      }
    },
  },
};
</script>
