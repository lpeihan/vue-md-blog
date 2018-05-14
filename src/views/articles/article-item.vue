<template>
  <div class="article">
    <article-header
      :title="article.title"
      :date="article.date"
      />

    <div class="article-content" v-html="article.content"></div>

    <div class="article-footer">
      <div class="tag-list">
        <a
          @click="$router.push(`/tags/${tag}`)"
          class="tag"
          v-for="(tag, index) in article.tags"
          :key="index">
          {{tag}}
        </a>
      </div>
      <a
        class="more"
        @click="$router.push(article.name)">
        展开全文 >>
      </a>
    </div>
  </div>
</template>

<script>
import ArticleHeader from './article-header';

export default {
  props: ['article'],
  components: {
    ArticleHeader
  }
};
</script>

<style lang="stylus">
  @import "../../styles/variables"

  .article
    margin-bottom: 25px
    background: $white
    box-shadow: 3px 3px 5px $default-border
    p
      &:first-child
        display: none
    &-content
      padding: 1% 8%
    &-footer
      color: $white
      display: flex
      justify-content: space-between
      align-items: center
      margin: 0 8%
      border-top: 1px solid #eaecef
      height: 80px
      .tag-list
        font-size: 14px
        margin-left: 9px
        .tag
          position: relative
          float: left
          height: 18px
          padding: 0 6px 0 8px
          line-height: 18px
          background: #ba8f6c
          margin-right: 20px
          border-top-right-radius: 5px
          border-bottom-right-radius: 5px
          cursor: pointer
          &:hover
            transform: scale(1.1)
          &::before
            position: absolute
            left: -18px
            content: ''
            width: 0
            height: 0
            border: 9px solid transparent
            border-right: 9px solid #ba8f6c
          &::after
            position: absolute
            top: 50%
            transform: translateY(-50%)
            left: 0
            background: $white
            content: ''
            width: 4px
            height: 4px
            border-radius: 50%
            box-shadow: 0 0 0 1px rgba(0, 0, 0, .3)

      .more
        background: #4d4d4d
        padding: 5px 8px
        font-size: 14px
        border-radius: 2px
        cursor: pointer

</style>
