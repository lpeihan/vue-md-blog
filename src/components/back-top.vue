<template>
  <div class="back-top" v-if="backShow" @click="backTop">
    <!-- {{percent}}% -->
    UP
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 300
    },
    duration: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      backShow: false,
      percent: 0,
      dom: null
    };
  },
  methods: {
    scrollListener() {
      const { scrollTop, scrollHeight } = document.documentElement;
      this.percent =
        Math.round(((scrollTop + window.innerHeight) / scrollHeight) * 100);
      this.backShow = scrollTop >= this.height;
    },
    backTop() {
      const dom = document.documentElement;
      let scrollTop = dom.scrollTop;

      for (let i = 60; i >= 0; i--) {
        setTimeout((i) => {
          dom.scrollTop = scrollTop * i / 60;
        }, this.duration / 60 * (60 - i), i);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener, false);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener, false);
  }
};
</script>

<style lang="stylus">
  @import "../styles/variables"

  .back-top
    position: fixed
    text-align: center
    color: $white
    right: 25px
    bottom: 50px
    width: 40px
    height: 40px
    line-height: 40px
    border-radius: 5px
    background: $overlay
    overflow: hidden
    cursor: pointer
</style>
