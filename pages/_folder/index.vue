<template>
  <div class="overview">
    <ul>
      <li v-for="card in cards" :key="card.slug">
        <nuxt-link :to="card.path">{{ card.slug }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    return {
      cards: await $content(params.folder).fetch(),
    }
  },
}
</script>
