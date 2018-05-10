<template>
  <div class="sidebar">
    <div class="overlay">
      <div class="avatar">
        <img src="../assets/avatar.png" alt="avatar" with="100%" height="100%">
      </div>
    </div>
    <div class="nav">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../styles/mixins"
  @import "../styles/variables"

  .sidebar
    fixed: top 0 left 0 bottom 0
    width: 300px
    background: rgb(246, 248, 250)
    .overlay
      position: relative
      height: 160px
      background: rgb(204, 219, 204)
    .avatar
      size: 110px
      border: 5px solid $white
      overflow: hidden
      absolute: bottom -50px left 50%
      border-radius: 50%
      transform: translateX(-50%)
</style>
