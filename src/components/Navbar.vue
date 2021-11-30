<template>
  <span>
    <v-app-bar
        app
        color="#6593A6"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="navbar">Uno</v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        color="#6593A6"
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
          <v-list-item @click="about()">
            <v-list-item-title class="navbar">About</v-list-item-title>
          </v-list-item>

          <v-list-item @click="newGame(2)">
            <v-list-item-title class="navbar">New Game • 2 Players</v-list-item-title>
          </v-list-item>

          <v-list-item @click="newGame(3)">
            <v-list-item-title class="navbar">New Game • 3 Players</v-list-item-title>
          </v-list-item>

          <v-list-item @click="newGame(4)">
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    async newGame(numOfPlayers) {
      await GameService.newGame(numOfPlayers);
      await router.push('/');
      await router.push('/new' + numOfPlayers);
    },
    about() {
      router.push('/about');
    },
  }
}
</script>

<style scoped>
.navbar {
  color: #FFFFFF;
  font-family: Comfortaa !important;
}

i.v-icon.v-icon {
  color: #FFFFFF;
}
</style>