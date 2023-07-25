<template>


    <!-- Profile section -->
    <v-container>
      <v-row class="align-center justify-center">
        <v-col cols="4">
          <v-img src="/miyashiiii.png"></v-img>
        </v-col>
        <v-col cols="4">
          <p class="font-weight-bold">miyashiiii</p>
          <p>Software Engineer</p>
          <p>Saitama, Japan</p>
        </v-col>
      </v-row>

      <!-- Links section -->
      <v-row class="my-3 justify-center">
        <div
          v-for="(link, index) in links"
          :key="index"
          class="mx-3"
          :href="link.url"
        >
          <a>
            <v-img :src="link.icon" height="32" width="32"></v-img>
          </a>
        </div>
      </v-row>
      <v-divider></v-divider>

      <!-- AboutMe section -->
      <p class="text-center font-weight-bold mt-5">About Me</p>
      <v-col class="mx-auto" cols="6">
        <p class="mb-5">
          <span v-for="(line, index) in aboutMe" :key="index">
            {{ line }}<br />
          </span>
        </p>
      </v-col>
      <v-divider></v-divider>
      <!-- Blog section -->
      <v-row class="mt-5"> </v-row>
      <p class="text-center font-weight-bold">Posts</p>
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
          <div class="text-right my-5">
            <v-btn
            color="primary"
              href="https://miyashiiii.hatenablog.jp/"
              append-icon="mdi-chevron-right"
            >
              もっと見る
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <!-- Works section -->
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
                class=" mx-1"
              >
                {{ tag }}
              </v-chip>
            </div>
          </v-card>
          </v-col>
        </v-col>
      </v-row>

      <v-divider></v-divider>
    </v-container>
</template>

<script>

export default {
  data() {
    return {
      aboutMe: [
        '1993年生まれ。埼玉県在住。',
        '都内の受託開発企業でサーバーサイドエンジニアをしています。',
        'Pythonが好きです。',
      ],
      links: [
        { url: 'https://twitter.com/mysh_iiii', icon: '/sns/twitter.png' },
        {
          url: 'https://miyashiiii.hatenablog.jp/',
          icon: '/sns/hatenablog.png',
        },
        { url: 'https://qiita.com/miyashiiii', icon: '/sns/qiita.png' },
        { url: 'https://github.com/miyashiiii', icon: '/sns/github.png' },
      ],
      blogPosts: [
        {
          title: 'PRODUCTION READY GRAPHQLを読む: 1章. GraphQL入門',
          url: 'https://miyashiiii.hatenablog.jp/entry/2023/07/22/213724',
          date: '2023-07-22',
          icon: '/sns/hatenablog.png',
        },
        {
          title:
            'Strawberry Djangoを使ってDjangoのChoicesを自動でGraphQLのEnum化する',
          url: 'https://qiita.com/miyashiiii/items/f93c4c57a51dbf8ecfd7',
          date: '2023-07-20',
          icon: '/sns/qiita.png',
        },
      ],
      works: [
        {
          title: 'ポートフォリオ',
          subtitle: 'このサイト',
          thumbnail: '/works/miyashiiii.png',
          tags: ['Nuxt.js', 'Vuetify', 'GitHub Pages'],
        },
        {
          title: '数読',
          subtitle: 'Androidアプリ',
          thumbnail: '/works/sudoku.png',
          tags: ['Android', 'Flutter', 'Dart'],
        },
        {
          title: 'TapNum',
          subtitle: 'Androidアプリ',
          thumbnail: '/works/tapnum.png',
          tags: ['Android', 'Unity', 'C#'],
        },
      ],
      certifications: ['AWS DVA', '基本情報', '応用情報', '囲碁四段'],
    }
  },
  methods: {
getDomain(url) {
  // URLからドメイン名を抽出
  return (new URL(url)).hostname;
},
    getIconPath(url) {
      // ドメイン名に基づいてアイコンのパスを返す
      const domain = this.getDomain(url)
      if (domain.includes('hatenablog')) {
        return '/sns/hatenablog.png'
      } else if (domain.includes('qiita')) {
        return '/sns/qiita.png'
      } else {
        // ドメインが一致しない場合のデフォルトのアイコン
        return '/sns/hatenablog.png'
      }
    },
  },
}
</script>
