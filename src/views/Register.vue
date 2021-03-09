<template>
  <div class="register">
    <h3>Inscription</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="register">Inscription</button>
    <p>Vous avez déjà un compte ? <router-link to="/login">Connectez vous</router-link></p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'register',
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    register: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert('Votre compte a bien été créé !')
            this.$router.replace('login')
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

<style scoped>

  .register {
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