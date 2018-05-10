<template>
  <div class="article-footer">
    <a
      class="more"
      @click="$router.push(article.name)">
      展开全文 >>
    </a>
  </div>
</template>

<style lang="stylus">
  @import "../../styles/variables"

  .article-footer
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
