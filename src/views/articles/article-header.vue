<template>
  <div class="article-header">
    <div class="title" @click="$router.push(name)">{{title}}</div>
    <div class="date">{{date}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    name: String
  }
};
</script>

<style lang="stylus">
  @import "../../styles/variables"

  .article-header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 1.5% 8%
    border-left: 4px solid #4d4d4d
    color: #696969
    .title
      font-size: 30px
      cursor: pointer
    .date
      color: $gray
      font-size: 20px
  @media screen and (max-width: 800px)
    .article-header
     border-left: none
     padding: 4% 0
     margin: 0 20px 20px
     display: block
     border-bottom: 1px dashed $default-border
     .title
        font-size: 20px
     .date
        font-size: 18px
        margin-top: 5px
</style>
