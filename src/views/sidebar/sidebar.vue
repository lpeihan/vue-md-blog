<template>
  <div class="sidebar">
    <div class="container">
      <div class="avatar" @click="$router.push('/')">
        <img src="../../assets/avatar.png" alt="avatar" with="100%" height="100%">
      </div>
      <!-- <div class="title">Lpeihan</div> -->
      <div class="sub-title">
        凡心所向，素履以往。<br>
        生如逆旅，一苇以航。
      </div>
      <div class="nav">
        <div class="item">首页</div>
        <div class="item" @click="$router.push('/tags')">标签</div>
        <div class="item">归档</div>
        <div class="item">关于我</div>
      </div>
      <div class="links">
        <div class="github"></div>
        <div class="github"></div>
        <div class="github"></div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../styles/mixins"
  @import "../../styles/variables"

  .sidebar
    fixed: top 0 left 0 bottom 0
    width: 300px
    background: rgb(246, 248, 250)
    &::before
      content: ''
      height: 160px
      absolute: top 0 left 0 right 0
      background: #5d5d5d
      z-index: -1
    .container
      margin-top: 160px
      text-align: center
      .avatar
        position: relative
        margin: -55px auto 0
        size: 110px
        border: 5px solid $white
        overflow: hidden
        border-radius: 50%
        cursor: pointer
        &:hover
          border: 5px solid rgb(234, 217, 204)
          box-shadow: 0 0 1.5em rgb(234, 217, 204)
          animation: shake 0.15s linear infinite alternate
          @keyframes shake
            from
              right: 4px
              top: 1px
            to
              right: 0px
              top: -1px
      .title
        font-size: 30px
        color: $gray
        margin-bottom: 25px
      .sub-title
        color: #999
        line-height: 30px
        margin-top: 10px
        margin-bottom: 40px
      .nav
        color: #999
        line-height: 32px
        margin-bottom: 30px
        .item
          cursor: pointer
      .links
        text-align: center
        .github
          width: 32px
          height: 32px
          background: url(//cdn.bootcss.com/logos/0.2.0/github-octocat.svg) no-repeat #fff
          background-size: 100%
          border-radius: 50%
          box-shadow: 1px 1px 3px rgba(0,0,0,0.3)
          display: inline-block
          margin-right: 10px

</style>
