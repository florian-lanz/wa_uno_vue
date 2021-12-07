<template>
  <v-container fluid fill-height class="rain">
    <v-row>
      <v-col sm="12">
        <IconMenu/>
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
        <ChooseColor size="5%"/>
      </v-col>
      <v-col sm="12" v-else>
        <CardStacks size="5%" :openCardStack="openCardStack"/>
      </v-col>
    </v-row>
    <v-row v-if="numOfPlayers === 4">
      <v-col sm="12" md="6">
        <Player v-if="nextTurn" :cards="playerCards" size="10%" type="active-player-glow"/>
        <Player v-else :cards="playerCards" size="10%" type=""/>
      </v-col>
      <v-col sm="12" md="6">
        <Enemy v-if="!nextTurn && nextEnemy === 3" :card-count="enemy3Cards" size="10%" type="active-player-glow"/>
        <Enemy v-else :card-count="enemy3Cards" size="10%" type=""/>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col sm="12">
        <Player v-if="nextTurn" :cards="playerCards" size="5%" type="active-player-glow"/>
        <Player v-else :cards="playerCards" size="5%" type=""/>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12">
        <p class="game-text">{{ gameText }}</p>
      </v-col>
    </v-row>
    <GameEndedScreen v-if="gameText === 'Glückwunsch, du hast gewonnen!' || gameText === 'Du hast leider verloren'"
                     :text="gameText"></GameEndedScreen>

    <div v-if="gameText === 'Du hast leider verloren'">
      <div v-for="i in 950" :key="i" class="drop" :id="'drop' + i"></div>
    </div>
  </v-container>
</template>

<script>
import JSConfetti from 'js-confetti'
import $ from "jquery";

import Enemy from "@/components/Enemy";
import GameService from "@/services/gameService";
import Player from "@/components/Player";
import CardStacks from "@/components/CardStacks";
import ChooseColor from "@/components/ChooseColor";
import IconMenu from "@/components/IconMenu";
import GameEndedScreen from "./GameEndedScreen";

export default {
  name: "Game",
  components: {GameEndedScreen, IconMenu, ChooseColor, Player, Enemy, CardStacks},
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
      drop: 0
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

      if (!gameJson.gameText.startsWith('Du bist dran') && gameJson.gameText !== 'Wähle eine Farbe' &&
          gameJson.gameText !== 'Glückwunsch, du hast gewonnen!' && gameJson.gameText !== 'Du hast leider verloren') {
        await this.sleep(700);
        await GameService.nextStep();
        await this.loadGame();
      }

      if (this.gameText === 'Glückwunsch, du hast gewonnen!') {
        const jsConfetti = new JSConfetti()
        await this.sleep(100);
        while (this.gameText === 'Glückwunsch, du hast gewonnen!') {
          jsConfetti.addConfetti();
          await this.sleep(2000);
        }
      } else if (this.gameText === 'Du hast leider verloren') {
        this.createRain();
      }
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    createRain() {
      for (let i = 1; i <= 950; i++) {
        let dropLeft = this.randRange(0, 3000);
        let dropTop = this.randRange(-1000, 1000);
        $('#drop' + i).css('left', dropLeft);
        $('#drop' + i).css('top', dropTop);
      }
    },
    randRange(maxNum, minNum) {
      return (Math.floor(Math.random(10) * (maxNum - minNum + 1)) + minNum);
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


.drop {
  background: #FFFFFF !important;
  width: 1px;
  height: 89px;
  position: absolute;
  bottom: 200px;
  -webkit-animation: fall .63s linear infinite;
  -moz-animation: fall .63s linear infinite;
}

div {
  background-color: #141427 !important;
}

.game-text {
  font-family: Comfortaa;
  color: #FFFFFF;
  padding-bottom: 50px;
}

@-webkit-keyframes fall {
  to {
    margin-top: 1000px;
  }
}

@-moz-keyframes fall {
  to {
    margin-top: 1000px;
  }
}

</style>