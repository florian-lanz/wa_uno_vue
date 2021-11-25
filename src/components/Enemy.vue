<template>
  <v-card :elevation="0">
    <v-card-text>
        <Card v-for="n in cardCount" :key="n" card="Deck" :size="size"/>
    </v-card-text>
  </v-card>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Enemy",
  components: {Card},
  props: {
    cardCount: Number,
    size: String,
  },
}
</script>

<style scoped>

</style>