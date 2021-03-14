<template>
  <div class="servercard">
    <ul>
      <li>
        <span v-if="changingName == false">
          <span class="cityName">{{ city_data.name }}</span> 
        </span>
        <span v-if="changingName == true">
          <input class="cityName" v-model="name" placeholder="Ma ville">
        </span>
      </li>
      <li>
        <span class="inventory">
          <span class="gold_values">Or : {{ city_data.gold }} (+{{city_data.gold_rate}}/s)</span> 
        </span>
        <span class="inventory">
          <span class="materials_values">Matériaux : {{ city_data.materials }} (+{{city_data.materials_rate}}/s)</span>
        </span>
        <span class="inventory">
          <span class="energy_values">Énergie : {{ city_data.energy }} (+{{city_data.energy_rate}})</span>
        </span>
        <span class="inventory">
          <span class="population_values">Population : {{ city_data.population }} (+{{city_data.population_rate}})</span>
        </span>
      </li>
      <li>
        <br>
        <button @click="disconnect">Déconnexion</button>
        <button @click="saveProgression">Sauvegarder</button>
        <button @click="refresh">Rafraichir</button>
        <button v-if="changingName == false" @click="changeName">Changer nom</button>
        <button v-if="changingName == true" @click="changeName">Valider nom</button>
      </li>
    </ul>
  </div>
</template>

<script>
import * as type from "../store/types"
import store from "../store/store"
import * as api from "../api"

export default {
  name: 'CityCard',
  props: {
    
  },
  data() {
    return {
      name: '',
      changingName: false,
      user: {},
      city_id: {},
      city_data: {
        city_id: '',
        user: '',
        gold: 0,
        energy: 0,
        materials: 0,
        population: 0,
        gold_rate: 0,
        energy_rate: 0,
        materials_rate: 0,
        population_rate: 0
      }
    }
  },
  mounted: function () {
    window.setInterval(() => {
      this.refresh()
    }, 1000)
  },
  methods: {
      refresh: async function () {
        Object.assign(this.city_data, store.state.city_data)
      },
      saveProgression: async function () {
        await api.saveProgression()
      },
      disconnect: async function () {
        await api.disconnect()
      },
      changeName: async function () {
        if (this.changingName === false){
          this.changingName = true
        } else {
          this.city_data.name = this.name
          store.dispatch({
            type: type.SetCityData,
            city: this.city_data
          })
          await api.saveProgression()
          this.changingName = false
        }
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

.servercard{
  display: block;
  background: #FADA93;
  color: black;
  height: auto;
  width: 90%;
  border-radius: 1em;
  margin-bottom: 20px;
  padding: 16px;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
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

li {
  margin-bottom: 1em;
}

button:hover {
  background: white;
  border: 1px solid black;
  color: black;
}

.city_id {
  font-size: 0.6em;
}

.inventory {
  margin: 2em 1em 0 0;
  padding: 0.5em 1em 0.5em 1em;
  background-color: white;
  border-radius: 1em;
  font-weight: bold;
}

.gold_values {
  color: goldenrod;
}

.materials_values {
  color: green;
}

.energy_values {
  color: cornflowerblue;
}

.population_values {
  color: purple;
}

</style>
