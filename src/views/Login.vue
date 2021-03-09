<template>
  <div class="login">
    <h3>Connexion</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Connexion</button>
    <p>Vous n'avez pas encore de compte ? Vous pouvez en <router-link to="/register">créer un</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: "",
        password: "",
        user: null,
      },
    };
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          (userCredential) => {
            this.user = userCredential.user;
            this.$router.replace('home');
          }
        )
        .catch(
          (error) => {
            alert('Oops. ' + error.message)
          }
        );
    }
  }
};
</script>

<style>

  .login {
    text-align: center;
  }

  input {
    margin-bottom: 2em;
    padding: 1em;
    border-radius: 1em;
  }

  input:hover {
    border-radius: 1em;
  }

  input:focus {
    border-radius: 1em;
  }

  button {
    padding: 1em 2em 1em 2em;
    border-radius: 1em;
    background-color: orange;
  }

  button:hover {
    cursor: pointer;
    background-color: greenyellow;
  }

</style>