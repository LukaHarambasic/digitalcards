<template>
  <div class="wrapper">
    <div class="snowflakes">
      <div v-for="i in 50" :key="i" class="snowflake" />
    </div>
    <Nuxt />
    <div class="open-source">
      Digital cards by <a href="https://harambasic.de">Luka Harambasic</a> (<a
        href="https://github.com/LukaHarambasic/digitalcards"
        >GitHub</a
      >).
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>

<style lang="sass" scoped>
.snowflake
  z-index: 1000
  width: 1rem
  height: 1rem
  background: rgba(255,255,255,.3)
  border-radius: 50%
  position: absolute
  top: -5vh
@keyframes snowfall
  0%
    transform: translate3d(var(--left-ini), 0, 0)
  100%
    transform: translate3d(var(--left-end), 110vh, 0)
@for $i from 1 through 50
  .snowflake:nth-child(#{$i})
    --size: #{random(5) * 0.2}vw
    --left-ini: #{random(20) - 10}vw
    --left-end: #{random(20) - 10}vw
    left: #{random(100)}vw
    animation: snowfall #{15 + random(10)}s linear infinite
    animation-delay: -#{random(20)}s
    filter: blur(1px)
.open-source
  font-size: 0.8rem
  text-align: center
  margin: 0 0 .5rem 0
</style>
