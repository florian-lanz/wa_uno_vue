<template>
  <v-img :src="images.card" class="card" :width="size"/>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: String,
    size: String,
  },
  data() {
    return {
      images: {
        card: require(`../assets/${this.card}.png`)
      }
    }
  },
}
</script>

<style scoped>
.card {
  display: inline-block;
  min-width: 35px;
}

@media (max-width: 959.99px) {
  .card {
    width: 5% !important;
  }
}

</style>