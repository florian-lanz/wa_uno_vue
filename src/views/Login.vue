<template>
  <div>
    <h3>Login</h3>
    <input type="text" v-model="email" placeholder="E-Mail"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <p>Hast du noch keinen Account? <router-link to="/sign-up">Hier</router-link> kannst du einen Account erstellen.</p>
    <button @click="logout">Logout</button>
    <br><br><br>
    <button @click="socialLogin">Login with Google</button>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('Du bist jetzt angemeldet: ' + user);
          this.$router.replace('new2');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Error ' + errorCode + ': ' + errorMessage);
        }
      );
    },
    socialLogin() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;

          alert(token + ' ' + user);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);

          alert(error + errorCode + errorMessage + email + credential);
      });
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