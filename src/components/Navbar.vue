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
        absolute
        temporary
        color="#6593A6"
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

          <v-list-item @click="$router.push('/')">
            <v-list-item-icon>
              <v-icon>mdi-gamepad-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="navbar">New Game • 2 Players</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/')">
            <v-list-item-icon>
              <v-icon>mdi-gamepad-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="navbar">New Game • 3 Players</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/')">
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
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
  }),
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