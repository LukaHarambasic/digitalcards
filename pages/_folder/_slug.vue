<template>
  <div class="scene">
    <div
      class="card-wrapper"
      :class="{ 'is-flipped': isFlipped }"
      @click="flip()"
    >
      <div class="card-face front">
        <card-front />
      </div>
      <div class="card-face back">
        <card-back :document="document" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  async asyncData({ $content, params }) {
    return {
      document: await $content(params.folder, params.slug).fetch(),
    }
  },
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

<style lang="sass">
.scene
  width: calc(100vw - (2 * 2rem))
  height: calc(100vh - (2 * 2rem))
  min-height: auto
  margin: 2rem auto 1rem auto
  .card-wrapper
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
      &.back
        transform: rotateY(180deg)
</style>
