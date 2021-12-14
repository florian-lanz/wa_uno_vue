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
      <v-col  v-if="loggedIn" cols="12">
        <v-avatar size="75">
          <img :src="img" width="75">
        </v-avatar>
      </v-col>
      <v-col v-if="loggedIn" cols="1" sm="2" md="3" lg="4">
      </v-col>
      <v-col v-if="loggedIn" cols="10" sm="8" md="6" lg="4">
        <p class="user-data">Username: {{name}}</p>
        <p class="user-data">E-Mail: {{email}}</p>
      </v-col>
      <v-col v-if="loggedIn" cols="1" sm="2" md="3" lg="4">
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
        <v-btn v-if="!loggedIn" class="mt-5 mb-1 button" @click="socialLogin" autocapitalize="false">
          <img src="../assets/google-icon.png" width="25">
          &nbsp;&nbsp;
          <span class="text-styling-button">Mit Google anmelden</span>
        </v-btn>
        <v-btn v-else class="mt-1 mb-1 button" @click="logout" autocapitalize="false">
          <v-icon>mdi-logout-variant</v-icon>
          &nbsp;&nbsp;
          <span class="text-styling-button">Abmelden</span>
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
      name: '',
      email: '',
      img: '',
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
        this.email = currentUser.email
        this.img = currentUser.photoURL
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
      this.email = currentUser.email
      this.img = currentUser.photoURL
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

.user-data {
  font-family: Comfortaa;
  color: #FFFFFF;
  font-size: 18px;
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