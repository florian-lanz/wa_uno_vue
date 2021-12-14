<template>
  <div>
    <h3>Sign Up</h3>
    <input type="text" v-model="email" placeholder="E-Mail"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="signUp">Sign Up</button>
    <p><router-link to="/login">Hier</router-link> kommst du zum Login-Bereich.</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth';

export default {
  name: "SignUp",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp() {
      console.log(this)
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('Dein Account wurde erstellt: ' + user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Error ' + errorCode + ': ' + errorMessage);
        }
      );
    },
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.replace('login');
      });
    }
  }
}
</script>

<style scoped>

</style>