<template>
  <v-card :elevation="0">
    <v-card-text>
      <Card  @click="setCard(card)" v-for="card in cards" :key="card" :card="card.replace(' ', '_')" :size="size" :type="'cardClickable ' + type"/>
    </v-card-text>
  </v-card>
</template>

<script>
import Card from "@/components/Card";
import GameService from "@/services/gameService";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Player",
  components: {Card},
  props: {
    size: String,
    cards: Array,
    type: String,
  },
   methods: {
    async setCard(card) {
      await GameService.setCard(card);
      this.$emit('loadGame');
    }
  }
}
</script>

<style scoped>

</style>