<template>
  <div class="card">
    <nuxt-content :document="card" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    console.log(params.folder, params.slug)
    return {
      card: await $content(params.folder, params.slug).fetch(),
    }
  },
}
</script>
