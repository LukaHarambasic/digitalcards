<template>
  <div class="wrapper">
    <div class="snowflakes">
      <div v-for="i in 50" :key="i" class="snowflake" />
    </div>
    <div class="scene">
      <div
        class="card"
        :class="{ 'is-flipped': isFlipped }"
        @mouseover="flip"
        @mouseleave="flip"
      >
        <div class="card-face front"></div>
        <div class="card-face back">
          <Nuxt />
        </div>
      </div>
    </div>
    <div class="open-source">
      Host your own digital cards from
      <a href="https://github.com/LukaHarambasic/digitalcards">GitHub</a>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      isFlipped: false,
    }
  },
  methods: {
    flip() {
      this.isFlipped = !this.isFlipped
    },
  },
}
</script>

<style lang="sass" scoped>
.scene
  width: calc(100vw - (2 * 2rem))
  height: calc(100vh - (2 * 2rem))
  min-height: auto
  margin: 2rem auto
  .card
    width: 100%
    height: 100%
    position: relative
    transition: transform 1s
    transform-style: preserve-3d
    &.is-flipped
      transform: rotateY(180deg)
    .card-face
      position: absolute
      width: 100%
      height: 100%
      backface-visibility: hidden
      font-family: 'Oooh Baby', cursive
      font-size: 1.75rem
      background-color: var(--c-accent)
      border-radius: var(--border-radius)
      box-shadow: 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)
      &.front
        color: var(--c-light)
        background-image: url("/decoration/christmas/tree.svg")
        background-repeat: no-repeat
        background-position: bottom center
        background-size: 150%
        background-color: var(--c-primary)
      &.back
        background-color: var(--c-accent)
        transform: rotateY(180deg)
.snowflake
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
</style>
