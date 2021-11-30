<template>
  <v-container fluid style="height: 100%">
    <v-row>
      <v-col sm="12">
        <IconMenu @loadGame="loadGame()"/>
      </v-col>
    </v-row>
    <v-row v-if="numOfPlayers >= 3">
      <v-col sm="12" md="6">
        <Enemy v-if="!nextTurn && nextEnemy === 1" :card-count="enemy1Cards" size="10%" type="active-player-glow"/>
        <Enemy v-else :card-count="enemy1Cards" size="10%" type=""/>
      </v-col>
      <v-col sm="12" md="6">
        <Enemy v-if="!nextTurn && nextEnemy === 2" :card-count="enemy2Cards" size="10%" type="active-player-glow"/>
        <Enemy v-else :card-count="enemy2Cards" size="10%" type=""/>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col sm="12">
        <Enemy v-if="!nextTurn" :card-count="enemy1Cards" size="5%" type="active-player-glow"/>
        <Enemy v-else :card-count="enemy1Cards" size="5%" type=""/>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" v-if="chooseColor">
        <ChooseColor size="5%" @loadGame="loadGame()"/>
      </v-col>
      <v-col sm="12" v-else>
        <CardStacks size="5%" :openCardStack="openCardStack" @loadGame="loadGame()"/>
      </v-col>
    </v-row>
    <v-row v-if="numOfPlayers === 4">
      <v-col sm="12" md="6">
        <Player v-if="nextTurn" :cards="playerCards" size="10%" type="active-player-glow" @loadGame="loadGame()"/>
        <Player v-else :cards="playerCards" size="10%" type="" @loadGame="loadGame()"/>
      </v-col>
      <v-col sm="12" md="6">
        <Enemy v-if="!nextTurn && nextEnemy === 3" :card-count="enemy3Cards" size="10%" type="active-player-glow"/>
        <Enemy v-else :card-count="enemy3Cards" size="10%" type=""/>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col sm="12">
        <Player v-if="nextTurn" :cards="playerCards" size="5%" type="active-player-glow" @loadGame="loadGame()"/>
        <Player v-else :cards="playerCards" size="5%" type="" @loadGame="loadGame()"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <p class="game-text">{{gameText}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Enemy from "@/components/Enemy";
import GameService from "@/services/gameService";
import Player from "@/components/Player";
import CardStacks from "@/components/CardStacks";
import ChooseColor from "@/components/ChooseColor";
import IconMenu from "@/components/IconMenu";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Game",
  components: {IconMenu, ChooseColor, Player, Enemy, CardStacks},
  data() {
    return {
      enemy1Cards: 0,
      enemy2Cards: 0,
      enemy3Cards: 0,
      numOfPlayers: 0,
      playerCards: [],
      openCardStack: '',
      gameText: '',
      chooseColor: false,
      nextTurn: false,
      nextEnemy: 0,
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
      this.chooseColor = gameJson.gameText === 'Wähle eine Farbe';
      this.nextTurn = gameJson.nextTurn;
      this.nextEnemy = gameJson.nextEnemy;
      if (gameJson.gameText.startsWith('Du bist dran')) {
        this.gameText = 'Du bist am Zug';
      } else {
        this.gameText = gameJson.gameText;
      }

      await this.sleep(700);

      if (!gameJson.gameText.startsWith('Du bist dran') && gameJson.gameText !== 'Wähle eine Farbe' &&
          gameJson.gameText !== 'Glückwunsch, du hast gewonnen!' && gameJson.gameText !== 'Du hast leider verloren') {
        await GameService.nextStep();
        await this.loadGame();
      }
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
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

.game-text {
  font-family: Comfortaa;
  color: #FFFFFF;
  padding-bottom: 50px;
}

</style>