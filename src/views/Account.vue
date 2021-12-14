<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12">
        <h1 v-if="loggedIn" :key="loggedIn">
          Herzlich Willkommen, {{name}}!
        </h1>
        <h1 v-else :key="loggedIn">
          Hallo Unbekannter!
        </h1>
      </v-col>
      <v-col cols="12">
        <h2 v-if="!loggedIn" :key="loggedIn">
          Um Uno spielen zu können, musst du mit einem Account angemeldet sein.
        </h2>
      </v-col>
      <v-col v-if="!loggedIn" cols="1" sm="2" md="3" lg="4">
      </v-col>
      <v-col v-if="!loggedIn" cols="10" sm="8" md="6" lg="4">
        <EmailAuthentication class="pb-5 pt-5"/>
      </v-col>
      <v-col v-if="!loggedIn" cols="1" sm="2" md="3" lg="4">
      </v-col>
      <v-col v-if="!loggedIn" cols="1" sm="1" md="2" lg="3">
      </v-col>
      <v-col v-if="!loggedIn" cols="10" sm="10" md="8" lg="6">
        <hr>
      </v-col>
      <v-col v-if="!loggedIn" cols="1" sm="1" md="2" lg="3">
      </v-col>
      <v-col cols="12">
        <v-btn v-if="!loggedIn" class="mt-5 mb-1 button" @click="socialLogin" autocapitalize="false" width="300">
          <span class="text-styling-button">Mit Google anmelden</span>
          <v-spacer/>
          <v-icon>mdi-google</v-icon>
        </v-btn>
        <v-btn v-else class="mt-5 mb-1 button" @click="logout" autocapitalize="false" width="200">
          <span class="text-styling-button">Abmelden</span>
          <v-spacer/>
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import EmailAuthentication from "@/components/EmailAuthentication";

export default {
  name: "Account",
  components: {
    EmailAuthentication
  },
  data() {
    return {
      loggedIn: false,
      name: ""
    }
  },
  methods: {
    socialLogin() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(() => {
          this.$router.replace('acc');
          this.$router.replace('account');
        }).catch(() => {}
      );
    },
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.replace('acc');
        this.$router.replace('account');
      });
    },
    reload() {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if(!currentUser) {
        this.loggedIn = false;
      } else {
        this.loggedIn = true;
        this.name = currentUser.displayName
      }
    }
  },
  mounted () {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if(!currentUser) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
      this.name = currentUser.displayName
    }
  },
  watch: {
    '$route': 'reload'
  },
}
</script>

<style scoped>

h1 {
  font-family: Comfortaa;
  color: #FFFFFF;
  padding: 15px 15px 15px 15px;
}

h2 {
  font-family: Comfortaa;
  color: #FFFFFF;
}

div {
  background-color: #141427 !important;
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