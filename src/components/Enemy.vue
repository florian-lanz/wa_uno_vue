<template>
  <v-card :elevation="0">
    <v-card-text>
        <Card v-for="n in cardCount" :key="n" card="Deck" :size="size" :type="'cardNotClickable ' + type"/>
    </v-card-text>
  </v-card>
</template>

<script>
import Card from "@/components/Card";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Enemy",
  components: {Card},
  props: {
    cardCount: Number,
    size: String,
    type: String,
  },
}
</script>

<style scoped>

</style>