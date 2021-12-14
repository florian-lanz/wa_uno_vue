<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <h1 :v-if="loggedIn" :key="loggedIn" >
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAuth } from 'firebase/auth';

export default {
  name: "Account",
  components: {

  },
  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {

  },
  mounted () {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if(!currentUser) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
}
</script>

<style scoped>

div {
  background-color: #141427 !important;
}

</style>