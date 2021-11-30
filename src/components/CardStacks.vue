<template>
  <v-card :elevation="0">
    <v-card-text>
      <Card @click="getCard()" card="Deck" :size="size" type="cardClickable" class="card-stack-padding-left"/>
      <Card :card="openCardStack.replace(' ', '_')" :key="openCardStack.replace(' ', '_')" :size="size" type="cardNotClickable" class="card-stack-padding-right"/>
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
      this.$emit('loadGame');
    }
  },
}
</script>

<style scoped>
.card-stack-padding-left {
  padding-right: 40px;
}

.card-stack-padding-right {
  padding-left: 40px;
}

</style>