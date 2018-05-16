<template>
  <div class="article-list">
    <article-item
      v-for="article in articles"
      :article="article"
      :key="article.name">
    </article-item>

    <pagination :start.sync="start" :limit="limit" :total="total"></pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ArticleItem from './article-item';
import Pagination from '../../components/pagination';

export default {
  data() {
    return {
      start: 0,
      limit: 5
    };
  },
  computed: {
    ...mapGetters(['articles', 'total'])
  },
  watch: {
    // 组件复用时，强制刷新
    async $route() {
      await this.query();
    },
    async start() {
      await this.query();

      let dom;
      if (document.documentElement.scrollTop) {
        dom = document.documentElement;
      } else {
        dom = document.body;
      }
      let scrollTop = dom.scrollTop;

      for (let i = 60; i >= 0; i--) {
        setTimeout((i) => {
          dom.scrollTop = scrollTop * i / 60;
        }, 200 / 60 * (60 - i), i);
      }
    }
  },
  methods: {
    ...mapActions([
      'getArticles'
    ]),
    async query() {
      await this.getArticles({
        tag: this.$route.params.tag,
        start: this.start,
        limit: this.limit
      });
    }
  },
  components: {
    ArticleItem,
    Pagination
  },
  async mounted() {
    await this.query();
  }
};
</script>
