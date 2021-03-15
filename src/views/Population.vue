<template>
  <div class="industriesbox z-depth-1-half">
    <ul>
      <li>
        <span class="category">Habitations</span>
      </li>
      <li>
        <h3>Production</h3>
      </li>
      <li>
        <span class="item">Centre commercial</span>
        <br/><span class="description">Améliorer le centre commercial permet d'augmenter la population entrante.</span>
        <br/><button class="upgrade" @click="upgradePopulationProd">Améliorer</button>
        <span class="price">  {{ getPopulationProdPriceG }} Or | {{ getPopulationProdPriceM }} Matériaux | {{ getPopulationStockPriceE }} Énergie</span>
      </li>
      <li>
        <h3>Stockage</h3>
      </li>
      <li>
        <span class="item">Quartier résidentiel</span>
        <br/><span class="description">L'améliorer augmente la population maximale de votre ville.</span>
        <br/><button class="upgrade" @click="upgradePopulationStock">Améliorer</button>
        <span class="price">  {{ getPopulationStockPriceG }} Or | {{ getPopulationStockPriceM }} Matériaux | {{ getPopulationStockPriceE }} Énergie</span>
      </li>
    </ul>
  </div>
</template>

<script>

import store from '../store/store'
import * as type from '../store/types'
import * as api from '../api'

export default {
  name: 'Population',
  props: {
  },
  data () {
    return {
      temp: {},
      tempStock: {},
    }
  },
  beforeMount: function () {
      Object.assign(this.temp, store.state.city_data)
      Object.assign(this.tempStock, store.state.stock)
  },
  computed: {
      getPopulationProdPriceG: function () {
          return this.tempStock.max_population
      },
      getPopulationProdPriceM: function () {
          return this.tempStock.max_population * 2
      },
      getPopulationProdPriceE: function () {
          return this.tempStock.max_population / 2
      },
      getPopulationStockPriceG: function () {
          return this.tempStock.max_population * 2
      },
      getPopulationStockPriceM: function () {
          return this.tempStock.max_population
      },
      getPopulationStockPriceE: function () {
          return this.tempStock.max_population
      }
  },
  methods: {
    saveChanges: async function () {
      store.dispatch({
        type: type.SetCityData,
        city: this.temp
      })
      store.dispatch({
        type: type.SetStock,
        stock: this.tempStock
      })
      api.saveProgression()
      this.$forceUpdate()
    },
    update: function () {
      Object.assign(this.temp, store.state.city_data)
      Object.assign(this.tempStock, store.state.stock)
    },
    upgradePopulationProd: async function () {
      this.update()
      if (this.getPopulationProdPriceG > this.temp.gold || this.getPopulationProdPriceM > this.temp.materials || this.getPopulationProdPriceE > this.temp.energy){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getPopulationProdPriceG
        this.temp.materials -= this.getPopulationProdPriceM
        this.temp.energy -= this.getPopulationProdPriceE
        this.temp.population_rate += 10
        this.saveChanges()
      }
    },
    upgradePopulationStock: async function () {
      this.update()
      if (this.getPopulationStockPriceG > this.temp.gold || this.getPopulationStockPriceM > this.temp.materials || this.getPopulationStockPriceE > this.temp.energy){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getPopulationStockPriceG
        this.temp.materials -= this.getPopulationStockPriceM
        this.temp.energy -= this.getPopulationStockPriceE
        this.tempStock.max_population *= 2
        this.saveChanges()
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 0 0 1em 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px 1em 1em;
}
a {
  color: #42b983;
}

button {
  padding: 0.5em 1em 0.5em 1em;
  background: transparent;
  border: 1px solid white;
  color: white;
}

button:hover {
  background: white;
  border: 1px solid black;
  color: black;
}

.item {
    font-weight: bold;
    color: #62BEE5;
}

.category {
  color: goldenrod;
  border: none;
  background-color: transparent;
  font-size: 2em;
}

.industriesbox{
  display: block;
  background: #202020;
  color: white;
  min-height: 100px;
  min-width: 100px;
  border-radius: 1em;
  padding: 16px;
  text-decoration: none;
}

</style>
