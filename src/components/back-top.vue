<template>
  <transition>
    <div class="back-top" v-if="backShow" @click="backTop">
      UP
    </div>
  </transition>
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
    getBody() {
      if (document.documentElement.scrollTop) {
        return document.documentElement;
      } else {
        return document.body;
      }
    },
    scrollListener() {
      const { scrollTop, scrollHeight } = this.getBody();
      this.percent =
        Math.round(((scrollTop + window.innerHeight) / scrollHeight) * 100);
      this.backShow = scrollTop >= this.height;
    },
    backTop() {
      const dom = this.getBody();
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
    z-index: 100
    color: $white
    right: 24px
    bottom: 50px
    width: 40px
    height: 40px
    line-height: 40px
    border-radius: 5px
    background: $overlay
    overflow: hidden
    cursor: pointer
    &.v
      &-enter-active
      &-leave-active
        transition: all .3s
      &-enter
      &-leave-to
        bottom: -30px
        opacity: 0
  @media screen and (max-width: 800px)
    .back-top
      right: 20px
</style>
