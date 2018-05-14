<template>
  <div class="tags">
    <div class="header">
      标签云
    </div>
    <div class="container">
      <div class="tag-list">
        <div
          @click="$router.push(`/tags/${tag}`)"
          class="item"
          v-for="tag in tags"
          :key="tag">
          {{tag}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['tags'])
  }
};
</script>

<style lang="stylus">
  @import "../../styles/variables"
  .tags
    box-shadow: 3px 3px 5px $default-border
    background: $white
    .header
      text-align: center
      font-size: 30px
    .container
      .tag-list
        display: flex
        .item
          margin-right: 10px
          cursor: pointer
          border-bottom: 1px solid $gray

</style>
