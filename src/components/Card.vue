<template>
  <v-img :src="`../assets/${card}.png`"/>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: String
  }
}
</script>

<style scoped>

</style>