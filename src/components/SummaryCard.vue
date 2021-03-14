<template>
  <div class="summary">
    <ul>
      <li>
        <span class="category energy">Énergie</span>
      </li>
      <li>
        <br>
        <button @click="disconnect">Améliorer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";

const userURL = "http://163.172.173.121:3000/user";
const cityURL = "http://163.172.173.121:3000/city";

export default {
  name: 'SummaryCard',
  props: {
    
  },
  data() {
    return {
      name: '',
      population: 0,
      population_rate: 0,
      gold: 0,
      materials: 0,
      energy: 0,
      user: {},
      city_data: {},
      city_id: {},
    }
  },
  mounted: function () {
    this.refresh()
  },
  methods: {
      disconnect: function() {
        firebase.auth().signOut()
          .then(() => {
            this.$router.replace('login');
          })
      },
      saveProgression: async function() {
        console.log(this.city_data)
        this.city_data.gold = this.gold
        this.city_data.energy = this.energy
        this.city_data.materials = this.materials
        this.city_data.population = this.population
        await axios.put(cityURL + "?city_id=eq." + this.city_data.city_id, this.city_data)
          .catch(error => console.log(error))
        this.refresh()
      },
      refresh: async function() {
        const fbId = firebase.auth().currentUser.uid
        await axios.get(userURL + "?firebase_id=eq." + fbId)
          .then(response => (this.user = response.data[0]))
          .catch(error => console.log(error))
        console.log(this.user)
        await axios.get(cityURL + "?user=eq." + this.user.user_id)
          .then(response => (this.city_data = response.data[0]))
          .catch(error => console.log(error))
        console.log(this.city_data)
        this.city_id = this.city_data.city_id
        this.gold = this.city_data.gold
        this.materials = this.city_data.materials
        this.energy = this.city_data.energy
        this.population = this.city_data.population
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.summary{
  display: block;
  background: #FADA93;
  color: black;
  height: auto;
  width: 90%;
  border-radius: 1em;
  margin-bottom: 20px;
  padding: 5px;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
}

.energy{
    display: block;
    color: #1F97CB;
    font-weight: bold;
    font-size: 1.5em;
}

.cityName {
  color: black;
  border: none;
  background-color: transparent;
  font-size: 2em;
}

.cityName::placeholder {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  color: black;
}

.title{
    font-weight: bold;
}

button {
  padding: 0.5em 1em 0.5em 1em;
  background: transparent;
  border: 1px solid black;
  color: black;
}

button:hover {
  background: white;
  border: 1px solid black;
  color: black;
}

.city_id {
  font-size: 0.6em;
}

</style>
