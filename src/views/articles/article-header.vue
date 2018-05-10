<template>
  <div class="article-header">
    <div class="name">{{name}}</div>
    <div class="date">{{date}}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    date: String
  }
};
</script>

<style lang="stylus">
  @import "../../styles/variables"

  .article-header
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
</style>
