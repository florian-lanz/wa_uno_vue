<template>
  <v-container fluid fill-height>
    <v-row v-if="numOfPlayers >= 3">
      <v-col sm="12" md="6">
        <Enemy :card-count="enemy1Cards" size="10%"/>
      </v-col>
      <v-col sm="12" md="6">
        <Enemy :card-count="enemy2Cards" size="10%"/>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col sm="12">
        <Enemy :card-count="enemy1Cards" size="5%"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <CardStacks :openCardStack="openCardStack" size="5%" />
      </v-col>
    </v-row>
    <v-row v-if="numOfPlayers === 4">
      <v-col sm="12" md="6">
        <Player :cards="playerCards" size="10%"/>
      </v-col>
      <v-col sm="12" md="6">
        <Enemy :card-count="enemy3Cards" size="10%"/>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col sm="12">
        <Player :cards="playerCards" size="5%"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Enemy from "@/components/Enemy";
import GameService from "@/services/gameService";
import Player from "@/components/Player";
import CardStacks from "@/components/CardStacks";
export default {
  name: "Game",
  components: {Player, Enemy, CardStacks},
  data() {
    return {
      enemy1Cards: 0,
      enemy2Cards: 0,
      enemy3Cards: 0,
      numOfPlayers: 0,
      playerCards: [],
      openCardStack: '',
    }
  },
  methods: {
    async loadGame() {
      const gameJson = await GameService.getJson();
      this.enemy1Cards = gameJson.enemy1Cards;
      this.enemy2Cards = gameJson.enemy2Cards;
      this.enemy3Cards = gameJson.enemy3Cards;
      this.numOfPlayers = gameJson.numOfPlayers;
      this.playerCards = gameJson.playerCards;
      this.openCardStack = gameJson.openCardStack;
      if(gameJson.gameText === 'Gegner ist an der Reihe') {
        await GameService.nextStep();
        await this.loadGame();
      }
    }
  },
  async mounted() {
    await this.loadGame();
    console.log(this.openCardStack);
  },
  watch: {
    '$route': 'loadGame'
  },
}
</script>

<style scoped>
div {
  background-color: #141427 !important;
}

</style>