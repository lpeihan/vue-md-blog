<template>
  <div id="app">
    <sidebar />

    <div class="content markdown-body">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <back-top />
  </div>
</template>

<script>
import Sidebar from './views/sidebar/sidebar';
import BackTop from './components/back-top';

import './styles/lib/github-markdown-css.css'; // for marked
import './styles/lib/github.css'; // for highlight.js

export default {
  components: {
    Sidebar,
    BackTop
  }
};
</script>

<style lang="stylus">
  @import "./styles/mixins"
  @import "./styles/variables"

  normalize-css()

  body
    background: $default-bg
  #app
    .content
      margin-left: 300px
      padding: 24px
      background: $default-bg
    .fade
      &-enter
      &-leave-to
        opacity: 0
      &-enter-active
      &-leave-active
        transition: opacity .5s

    .markdown-body
      box-sizing: border-box
      max-width: 980px

      section
        background: $white
        padding: 1% 8%
        & > p
          &:first-child
            display: none
  @media screen and (max-width: 800px)
    #app
      .content
        margin: 0
        padding: 0
      .markdown-body
        section
          padding: 0 20px
</style>
