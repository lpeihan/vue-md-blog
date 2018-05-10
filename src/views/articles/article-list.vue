<template>
  <div class="article-list">
    <div class="article"
      v-for="(compiledMarkdown, index) in compiledMarkdowns"
      :key="index">
      <article-header :name="compiledMarkdown.title" :date="compiledMarkdown.date"/>
      <div class="article-content" v-html="compiledMarkdown.content"></div>
      <div class="article-footer">
        <a class="more" @click="$router.push(compiledMarkdown.name)">展开全文 >></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import compiledMarkdown from '../../utils/compiledMarkdown';
import ArticleHeader from './article-header';

export default {
  computed: {
    ...mapGetters(['articles', 'tags']),
    compiledMarkdowns() {
      return this.articles.map((article) => {
        const content = compiledMarkdown(article.content);
        return Object.assign(article, { content });
      });
    }
  },
  components: {
    ArticleHeader
  },
  methods: {
    ...mapActions(['getArticles'])
  },
  async mounted() {
    await this.getArticles(this.tags[0]);
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
      &-header
        display: flex
        justify-content: space-between
        align-items: center
        padding: 1.5% 5%
        border-left: 4px solid #4d4d4d
        color: #696969
        .name
          font-size: 30px
        .date
          color: $gray
          font-size: 20px
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
