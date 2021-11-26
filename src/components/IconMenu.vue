<template>
  <v-card :elevation="0">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12" md="4"></v-col>
        <v-col cols="12" sm="12" md="4">
          <h1 class="title">Uno</h1>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-icon @click.native="undo()">mdi-arrow-u-left-top</v-icon>
          <v-icon @click.native="redo()">mdi-arrow-u-right-top</v-icon>
          <v-icon @click.native="save()">mdi-content-save-outline</v-icon>
          <v-icon @click.native="load()">mdi-tray-arrow-up</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import GameService from "@/services/gameService";

export default {
  name: "IconMenu",
  methods: {
    async undo() {
      await GameService.undo();
      this.$parent.loadGame();
    },
    async redo() {
      await GameService.redo();
      this.$parent.loadGame();
    },
    async save() {
      await GameService.save();
      this.$parent.loadGame();
    },
    async load() {
      await GameService.load();
      this.$parent.loadGame();
    },
  }
}
</script>

<style scoped>
i.v-icon.v-icon {
  color: #FFFFFF;
  font-size: 32px;
  padding-left: 15px;
  padding-right: 15px;
}

i.v-icon.v-icon:hover {
  color: #777777;
  transform: scale(1.3);
  transition-duration: 0.3s;
}

.title {
  font-family: Comfortaa !important;
  font-size: 38px !important;
  color: #FFFFFF;
  display: inline-block;
}

</style>