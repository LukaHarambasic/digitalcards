<template>
  <div class="card-front">
    <h1>Merry Christmas</h1>
    <p>Click on the card</p>
  </div>
</template>

<script>
export default {
  name: 'CardFront',
}
</script>

<style lang="sass" scoped>
.card-front
  width: 100%
  height: 100%
  border-radius: var(--border-radius)
  color: var(--c-light)
  background-image: url("/decoration/christmas/tree.svg")
  background-repeat: no-repeat
  background-position: bottom center
  background-size: 150%
  background-color: var(--c-primary)
  padding: 2rem
  text-align: center
  h1
    font-size: 3rem
    line-height: 1
    margin: 30% 0 2rem 0
  p
    font-size: 1rem
</style>
