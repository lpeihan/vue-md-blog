<template>
  <div class="archives">
    <div class="container">
      <div class="counter">
        目前共计 {{total}} 篇日志。 继续努力。
      </div>
      <div class="archive-list" v-for="year in years" :key="year">
        <div class="year">
          {{year}}
        </div>
        <div
          class="article-title"
          v-for="article in archives[year]"
          :key="article.name"
          @click="$router.push(article.name)">
          {{article.title}}
          <span class="date">{{article.date}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['getArchives'])
  },
  computed: {
    ...mapGetters(['archives', 'total']),
    years() {
      return Object.keys(this.archives).sort((prev, next) => next - prev);
    }
  },
  mounted() {
    this.getArchives();
  }
};

</script>

<style lang="stylus">
  @import "../../styles/variables"
  .archives
    padding: 5% 8%
    background: $white
    color: #555
    .container
      position: relative
      padding-left: 25px
      &::before
        content: ''
        position: absolute
        top: 10px
        bottom: 0
        left: 0
        width: 4px
        background: #e5e5e5
    .counter
      position: relative
      &::before
        content: ''
        position: absolute
        width: 10px
        height: 10px
        background: #bbb
        border-radius: 50%
        top: 50%
        transform: translateY(-50%)
        left: -28px
    .year
      font-family: 'Roboto Slab', 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif
      margin: 60px 0 30px
      position: relative
      font-size: 20px
      font-weight bold
      &::before
        content: ''
        position: absolute
        width: 8px
        height: 8px
        background: #bbb
        border-radius: 50%
        top: 50%
        transform: translateY(-50%)
        left: -27px
    .article-title
      line-height: 36px
      margin: 30px 0
      border-bottom: 1px dashed #ccc
      position: relative
      cursor: pointer
      &:hover
        color: #333
        border-bottom: 1px dashed #333
      &:hover::before
        background: #444
      &::before
        content: ''
        position: absolute
        width: 6px
        height: 6px
        background: #bbb
        border-radius: 50%
        top: 50%
        transform: translateY(-50%)
        left: -26px
      .date
        float: right
        color: $gray
        @media screen and (max-width: 800px)
          float: none

</style>
