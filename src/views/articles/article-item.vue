<template>
  <div class="article">
    <article-header
      :title="article.title"
      :date="article.date"
      :name="article.name"
      />

    <div class="article-content" v-html="article.content"></div>

    <article-footer :article="article"></article-footer>
  </div>
</template>

<script>
import ArticleHeader from './article-header';
import ArticleFooter from './article-footer';

export default {
  props: ['article'],
  components: {
    ArticleHeader,
    ArticleFooter
  }
};

</script>

<style lang="stylus">
  @import "../../styles/variables"

  .article
    margin-bottom: 25px
    background: $white
    box-shadow: 3px 3px 5px $default-border

    &-content
      padding: 1% 8%
      & > p
        &:first-child
          display: none

</style>
