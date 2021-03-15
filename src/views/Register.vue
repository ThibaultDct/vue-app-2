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
import axios from "axios";
import * as api from "../api"

const userURL = "https://citybuilder.thibaultdct.fr/api/user";
const cityURL = "https://citybuilder.thibaultdct.fr/api/city";
const stockURL = "https://citybuilder.thibaultdct.fr/api/stock";

export default {
  name: 'register',
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      uuid: '',
      city_uuid : '',
      basicUserData: {
        user_id: '',
        firebase_id: ''
      },
      basicCityData: {
        city_id: '',
        user: '',
        population: 0,
        gold: 0,
        energy: 0,
        materials: 0,
        gold_rate: 1,
        energy_rate: 1,
        materials_rate: 3,
        population_rate: 0,
        name: "Ma ville"
      },
      basicStockData: {
        stock_id: '',
        city: '',
        max_gold: 100,
        max_materials: 100,
        max_energy: 100,
        max_population: 100
      }
    };
  },
  methods: {
    generateUuid: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    generateUserData: async function () {
      this.uuid = this.generateUuid()
      this.basicUserData.user_id = this.uuid
      this.basicUserData.firebase_id = firebase.auth().currentUser.uid
      await axios.post(userURL, this.basicUserData)
        .catch(error => console.log(error))
      this.city_uuid = this.generateUuid()
      this.basicCityData.city_id = this.city_uuid
      this.basicCityData.user = this.uuid
      await axios.post(cityURL, this.basicCityData)
        .catch(error => console.log(error))
      this.basicStockData.city = this.city_uuid
      this.basicStockData.stock_id = this.generateUuid()
      await axios.post(stockURL, this.basicStockData)
        .catch(error => console.log(error))
      await api.getUser()
      await api.getCityData()
      await api.getStockData()
    },
    register: async function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert('Votre compte a bien été créé !')
            this.generateUserData()
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