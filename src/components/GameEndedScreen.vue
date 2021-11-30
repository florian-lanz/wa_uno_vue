<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <v-card style="background: #6593A6 !important; border-radius: 20px" class="pa-16">
        <v-card-title>
          <span class="text-h4 text-styling" align="center">{{text}}</span>
        </v-card-title>
        <v-card-text v-for="n in [2,3,4]" :key="n" class="pa-0">
          <v-btn class="mt-1 mb-1 button" @click="newGame(n)" autocapitalize="false">
            <h3 class="text-styling-button"> New Game: {{n}} Players </h3>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import GameService from "../services/gameService";
import router from "../router";

export default {
  name: "GameEndedScreen",
  props: {
    text: String,
  },
  data: () => ({
    dialog: true,
  }),
  methods: {
    async newGame(numOfPlayers) {
      await GameService.newGame(numOfPlayers);
      await router.push('/');
      await router.push('/new' + numOfPlayers);
    }
  }
}
</script>

<style scoped>

.text-styling {
  color: #FFFFFF;
  font-family: Comfortaa !important;
}

.text-styling-button {
  font-family: Comfortaa !important;
  font-weight: bold !important;
}

.button {
  padding: 10px 15px 10px 15px;
  margin: 0 5px 0 5px;
  border: none;
  border-radius: 20px;
}

.button:hover {
  transform: scale(1.1);
  transition-duration: 0.3s;
  background-color: #CCCCCC;
}

.v-btn {
  text-transform:none !important;
}

</style>