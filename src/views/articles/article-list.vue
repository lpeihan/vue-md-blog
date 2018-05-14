<template>
  <div class="article-list">
    <article-item
      v-for="article in articles"
      :article="article"
      :key="article.name">
    </article-item>

    <pagination></pagination>
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
    ...mapGetters(['articles']),
    total() {
      return this.articles.length;
    }
  },
  watch: {
    // 组件复用时，强制刷新
    '$route': 'query'
  },
  methods: {
    ...mapActions([
      'getArticles'
    ]),
    query() {
      this.getArticles({
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
  mounted() {
    this.query();
  }
};
</script>
