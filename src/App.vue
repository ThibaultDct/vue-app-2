<template>
  <div id="app">
    <div class="sidebar">
      <router-link to="/home"><img src="./assets/logo.png" width="100px" height="115px"/></router-link>
      <router-link to="/home" class="active">Accueil</router-link>
      <router-link to="/population">Habitations</router-link>
      <router-link to="/industries">Industries</router-link>
      <router-link to="/energy">Energie</router-link>
    </div>
    <div class="global">
      <div class="content">
        <div class="glass">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "./api"
import * as type from "./store/types"
import store from "./store/store"

const incrementRate = 1;
const saveRate = 10;

export default {
  name: 'App',
  components: {
  },
  beforeMount: function () {
      this.refresh()
  },
  mounted: function () {
    // Increment resources
    window.setInterval(() => {
        this.incrementValues()
    }, incrementRate * 1000)
    // Save progression
    window.setInterval(() => {
        console.log("Saving progression...")
        api.saveProgression()
    }, saveRate * 1000)
  },
  data() {
    return {
      user: {},
      city_data: {
        city_id: '',
        user: '',
        name: '',
        gold: 0,
        energy: 0,
        materials: 0,
        population: 0,
        gold_rate: 0,
        energy_rate: 0,
        materials_rate: 0,
        population_rate: 0
      },
      stock: {
        stock_id: '',
        city: '',
        max_gold: 0,
        max_materials: 0,
        max_energy: 0,
        max_population: 0
      }
    }
  },
  methods: {
      incrementValues: function () {
        Object.assign(this.city_data, store.state.city_data)
        Object.assign(this.stock, store.state.stock)

        this.city_data.gold += this.city_data.gold_rate
        this.city_data.materials += this.city_data.materials_rate
        this.city_data.energy += this.city_data.energy_rate
        this.city_data.population += this.city_data.population_rate

        if (this.city_data.gold >= this.stock.max_gold){
          this.city_data.gold = this.stock.max_gold
        }
        if (this.city_data.materials >= this.stock.max_materials){
          this.city_data.materials = this.stock.max_materials
        }
        if (this.city_data.energy >= this.stock.max_energy){
          this.city_data.energy = this.stock.max_energy
        }
        if (this.city_data.population >= this.stock.max_population){
          this.city_data.population = this.stock.max_population
        }
        
        store.dispatch({
          type: type.SetCityData,
          city: this.city_data
        })
      },
      refresh: async function () {
        console.log("Refreshing data...")
        await api.getUser()
        await api.getCityData()
        await api.getStockData()
        Object.assign(this.city_data, store.state.city_data)
        console.log("Data refreshed.")
      },
      saveProgression: async function () {
        await api.saveProgression()
      },
      disconnect: async function () {
        await api.disconnect()
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.global{
  margin: 0;
  padding: 0;
  flex: 9;
}

.global{
  display: flex;
  flex-direction: row;
}

/* GLASS EFFECT */
.glass{
  margin: 0;
  padding: 0;
  background: linear-gradient(to top left, rgba(255,255,255,0.5), rgba(255,255,255,0.3));
  height: 100%;
  width: 100%;
  padding: 50px;
}

/* SIDEBAR */
.sidebar{
  flex: 1;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  /* background-color: #202020; */
  background-color: #FADA93;
  min-height: 100vh;
  min-width: 200px;
  overflow: auto;
  font-family: 'Lato', sans-serif;
  text-align: center;
}

.sidebar a{
  display: block;
  color: black;
  padding: 10px;
  text-decoration: none;
  size: 1em;
}

.router-link {
  display: block;
  color: black;
  padding: 10px;
  text-decoration: none;
  size: 1em;
}

.sidebar a:hover{
  font-size: 1.5em;
  color: orange;
  transition-delay: 0.01s;
}

/* CONTENT */
div.content{
  flex: 9;
  min-height: 100%;
  /* background-color: orange; */
  background-color: #F0F0F0;
}

</style>
