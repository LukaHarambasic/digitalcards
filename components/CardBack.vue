<template>
  <div class="card-back">
    <nuxt-content class="content" :document="document" />
  </div>
</template>

<script>
export default {
  name: 'CardBack',
  props: {
    document: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="sass">
.card-back
  width: 100%
  height: 100%
  border-radius: var(--border-radius)
  padding: 2rem
  background-color: var(--c-accent)
  background-image: url("/decoration/christmas/left_bottom.svg"), url("/decoration/christmas/right_bottom.svg"), url("/decoration/christmas/right_top.svg")
  background-repeat: no-repeat, no-repeat, no-repeat
  background-position: bottom 5% left, bottom 35% right, top 5% right
  background-size: 40%, 50%, 80%
  overflow: scroll
  .content
    p
      &:first-of-type
        font-weight: bold
        margin: 0 0 .5rem 0
      &:last-of-type
        font-weight: bold
        line-height: 1
        margin: .5rem 0 0 0
</style>
