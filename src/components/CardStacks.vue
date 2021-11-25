<template>
  <v-card :elevation="0">
    <v-card-text>
      <Card @click.native="getCard()" card="Deck" :size="size" type="cardClickable"/>
      <Card :card="openCardStack.replace(' ', '_')" :key="openCardStack.replace(' ', '_')" :size="size" type="cardNotClickable"/>
    </v-card-text>
  </v-card>
</template>

<script>
import Card from "@/components/Card";
import GameService from "@/services/gameService";
export default {
  name: "CardStacks",
  components: {Card},
  props: {
    size: String,
    openCardStack: String,
  },
  methods: {
    async getCard() {
      await GameService.getCard();
      this.$parent.loadGame();
    }
  },
}
</script>

<style scoped>

</style>