<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {Navbar},
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },
  methods: {
    async accept() {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Comfortaa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

::-webkit-scrollbar {
  display: none !important;
}

</style>
