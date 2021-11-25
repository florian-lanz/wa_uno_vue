<template>
  <v-card :elevation="0">
    <v-card-text>
      <Card card="Deck" :size="size"/>
      <Card :key="openCardStack.replace(' ', '_')" :card="openCardStack.replace(' ', '_')" :size="size"/>
    </v-card-text>
  </v-card>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "CardStacks",
  components: {Card},
  props: {
    size: String,
    openCardStack: String,
  },
}
</script>

<style scoped>

</style>