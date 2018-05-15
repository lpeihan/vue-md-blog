<template>
  <div class="pagination" v-if="total > 5">
    <ul>
      <li @click="go(page - 1)" :class="{'text': page === 1}">Prev</li>
      <li class="page" v-if="page >= 4" @click="go(1)">1</li>
      <li class="page" v-if="page == 4" @click="go(2)">2</li>
      <li v-if="page >= 5">...</li>
      <li class="page" v-if="page >= 3 && page != 4" @click="go(page - 2)">{{page - 2}}</li>
      <li class="page" v-if="page >= 2" @click="go(page - 1)">{{page - 1}}</li>
      <li class="page active">
        {{page}}
      </li>
      <li class="page" v-if="totalPage - page >= 2" @click="go(page + 1)">{{page + 1}}</li>
      <li class="page" v-if="totalPage - page >= 3" @click="go(page + 2)">{{page + 2}}</li>
      <li v-if="totalPage - page >= 4">...</li>
      <li class="page" v-if="page != totalPage" @click="go(totalPage)">{{totalPage}}</li>
      <li @click="go(page + 1)" :class="{'text': page === totalPage}">Next</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    start: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 5
    },
    total: {
      type: Number,
      default: 60
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit);
    }
  },
  data() {
    return {
      page: 1
    };
  },
  watch: {
    $route() {
      this.page = 1;
      this.$emit('update:start', 0);
    }
  },
  methods: {
    go(page) {
      if (page >= 1 && page <= this.totalPage) {
        this.page = page;
        const start = (page - 1) * this.limit;
        this.$emit('update:start', start);
      }
    }
  }
};
</script>

<style lang="stylus">
  @import "../styles/variables"

  .pagination
    text-align: center
    font-family: lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif
    color: #4d4d4d
    ul
      li
        font-size: 16px
        display: inline-block
        cursor: pointer
        margin: 0 4px
        list-style: none
        &.page
          font-size: 12px
          width: 20px
          height: 25px
          background: #4d4d4d
          color: $white
          line-height: 25px
          border-radius: 2px
        &.active
          background: #88acdb
          cursor: default
        &.text
          cursor: text
</style>
