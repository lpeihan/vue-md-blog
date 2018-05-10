<template>
  <div class="article-list">
    <div class="article"
      v-for="(article, index) in articles"
      :key="index">
      <article-header
        :title="article.title"
        :date="article.date"
      />
      <div class="article-content" v-html="article.content"></div>
      <div class="article-footer">
        <a
          class="more"
          @click="$router.push(article.name)">
          展开全文 >>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ArticleHeader from './article-header';

export default {
  computed: {
    ...mapGetters(['articles', 'tags'])
  },
  components: {
    ArticleHeader
  },
  methods: {
    ...mapActions(['getArticles'])
  },
  async mounted() {
    await this.getArticles();
  }
};
</script>

<style lang="stylus">
  @import "../../styles/variables"

  .article-list
    .article
      margin-bottom: 20px
      background: $white
      p
        &:first-child
          display: none
      &-content
        padding: 1% 5%
      &-footer
        position: relative
        margin: 0 5%
        border-top: 1px solid rgb(204, 219, 204)
        height: 80px
        .more
          position: absolute
          right: 0
          top: 50%
          transform: translateY(-50%)
          background: #4d4d4d
          padding: 5px 8px
          color: $white
          font-size: 14px
          border-radius: 2px
          cursor: pointer

</style>
