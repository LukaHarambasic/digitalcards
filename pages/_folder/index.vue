<template>
  <div class="overview">
    <ul>
      <li v-for="card in cards" :key="card.slug">
        <a :href="card.fullURL">{{ card.slug }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    // TODO ENV
    const PRODUCTION_URL = 'https://postcards.harambasic.de'
    const rawCards = await $content(params.folder).fetch()
    const cards = rawCards.map((card) => {
      return {
        ...card,
        fullURL: `${PRODUCTION_URL}${card.path}`,
      }
    })
    return {
      cards,
    }
  },
}
</script>
