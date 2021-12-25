<template>
  <div class="card-content">
    <nuxt-content class="content" :document="card" />
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  async asyncData({ $content, params }) {
    return {
      card: await $content(params.folder, params.slug).fetch(),
    }
  },
}
</script>

<style lang="sass">
.card-content
  width: 100%
  padding: 2rem
  background-image: url("/decoration/christmas/left_bottom.svg"), url("/decoration/christmas/right_bottom.svg"), url("/decoration/christmas/right_top.svg")
  background-repeat: no-repeat, no-repeat, no-repeat
  background-position: bottom 5% left, bottom 35% right, top 5% right
  background-size: 40%, 50%, 80%
  .content
    p
      &:first-of-type
        font-weight: bold
        margin: 0 0 .25rem 0
      &:last-of-type
        font-weight: bold
        margin: .25rem 0 0 0
</style>
