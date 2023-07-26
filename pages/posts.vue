<template>
  <p class="text-h2 text-center mt-5">Posts</p>
  <v-row class="justify-center mb-5">
    <v-col cols="3">
      <v-divider color="primary" thickness="5" class="my-5"></v-divider>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="8" xl="4" class="mx-auto">
      <v-list lines="one">
        <v-divider></v-divider>
        <div v-for="(item, index) in blogPosts" :key="item.title">
          <v-list-item
            :title="item.title"
            :subtitle="item.date + ' ' + getSiteName(item.url)"
            :prepend-avatar="getIconPath(item.url)"
            :href="item.url"
            class="py-5"
          ></v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          title: "PRODUCTION READY GRAPHQLを読む: 1章. GraphQL入門",
          url: "https://miyashiiii.hatenablog.jp/entry/2023/07/22/213724",
          date: "2023-07-22",
        },
        {
          title:
            "Strawberry Djangoを使ってDjangoのChoicesを自動でGraphQLのEnum化する",
          url: "https://qiita.com/miyashiiii/items/f93c4c57a51dbf8ecfd7",
          date: "2023-07-20",
        },
      ],
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
    getSiteName(url) {
      // ドメイン名に基づいてアイコンのパスを返す
      const domain = this.getDomain(url);
      if (domain.includes("hatenablog")) {
        return "はてなブログ";
      } else if (domain.includes("qiita")) {
        return "Qiita";
      } else {
        // ドメインが一致しない場合のデフォルトのアイコン
        return "/sns/hatenablog.png";
      }
    },
  },
};
</script>
