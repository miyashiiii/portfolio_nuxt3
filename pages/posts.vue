<template>
  <p class="text-center font-weight-bold mt-5">Works</p>
  <v-row>
    <v-col cols="8" class="mx-auto">
      <v-list-item-group>
        <div v-for="(item, index) in blogPosts" :key="index">
          <v-list-item :href="item.url">
            <v-list-item-avatar>
              <v-img
                :src="getIconPath(item.url)"
                height="25"
                width="25"
                contain
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-sub-title class="grey--text">{{
                item.date
              }}</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>
          <!-- 末尾のアイテムにはdivider追加しない -->
          <!-- <v-divider v-if="index < blogPosts.length - 1"></v-divider> -->
          <v-divider></v-divider>
        </div>
      </v-list-item-group>
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
          icon: "/sns/hatenablog.png",
        },
        {
          title:
            "Strawberry Djangoを使ってDjangoのChoicesを自動でGraphQLのEnum化する",
          url: "https://qiita.com/miyashiiii/items/f93c4c57a51dbf8ecfd7",
          date: "2023-07-20",
          icon: "/sns/qiita.png",
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
  },
};
</script>
