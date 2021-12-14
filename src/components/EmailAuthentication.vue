<template>
  <v-card :elevation="0">
    <v-tabs
        v-model="tab"
        color="#FFFFFF"
        grow
    >
      <v-tab autocapitalize="false">Registrierung</v-tab>
      <v-tab autocapitalize="false">Anmelden</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card class="pt-10" :elevation="0">
          <v-text-field dark class="text-field" type="text" color="#FFFFFF" v-model="username" label="Username"></v-text-field>
          <v-text-field dark type="text" color="#FFFFFF" v-model="email" label="E-Mail"></v-text-field>
          <v-text-field dark type="password" color="#FFFFFF" v-model="password" label="Password"></v-text-field>
          <v-btn class="mt-1 mb-1 button" autocapitalize="false" @click="signUp">
            <span class="text-styling-button">
              Jetzt Registrieren!
            </span>
          </v-btn>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card class="pt-10" :elevation="0">
          <v-text-field dark type="text" color="#FFFFFF" v-model="email" label="E-Mail"></v-text-field>
          <v-text-field dark type="password" color="#FFFFFF" v-model="password" label="Password"></v-text-field>
          <v-btn class="mt-1 mb-1 button" autocapitalize="false" @click="login">
            <span class="text-styling-button">
              Anmelden
            </span>
          </v-btn>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </v-card>
</template>

<script>
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

export default {
  name: "EmailAuthentication",
  data() {
    return {
      tab: null,
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    signUp() {
      console.log(this.username)
      console.log(this.email)
      console.log(this.password)
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: this.username
            }).then(() => {
              this.$router.replace('account');
            }).catch((err) => {
              alert(err);
            });
          })
          .catch((err) => {
            alert(err);
          });
    },
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace('account');
        })
        .catch(() => {
          alert('Leider gab es ein Problem beim Anmelden!');
        }
      );
    }
  }
}
</script>

<style scoped>
.v-text-field {
  font-family: Comfortaa;
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

div{
  background-color: #141427 !important;
}

.v-tab {
  font-family: Comfortaa;
  font-size: 18px;
  color: #FFFFFF !important;
  text-transform:none !important;
}
</style>