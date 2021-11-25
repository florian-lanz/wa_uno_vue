<template>
  <span>
    <v-app-bar
        app
        color="#6593A6"
        elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="navbar">Uno</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        color="#6593A6"
        :clipped="true"
        app
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="$router.push('/about')">
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="navbar">About</v-list-item-title>
          </v-list-item>

          <v-list-item @click="newGame(2)">
            <v-list-item-icon>
              <v-icon>mdi-gamepad-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="navbar">New Game • 2 Players</v-list-item-title>
          </v-list-item>

          <v-list-item @click="newGame(3)">
            <v-list-item-icon>
              <v-icon>mdi-gamepad-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="navbar">New Game • 3 Players</v-list-item-title>
          </v-list-item>

          <v-list-item @click="newGame(4)">
            <v-list-item-icon>
              <v-icon>mdi-gamepad-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="navbar">New Game • 4 Players</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
import GameService from "@/services/gameService";
import router from "@/router";
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    async newGame(numOfPlayers) {
      await GameService.newGame(numOfPlayers);
      await router.push('/new' + numOfPlayers);
    }
  }
}
</script>

<style scoped>
.navbar {
  color: #FFFFFF;
}

i.v-icon.v-icon {
  color: #FFFFFF;
}
</style>