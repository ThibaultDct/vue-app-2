<template>
  <div class="industriesbox z-depth-1-half">
    <ul>
      <li>
        <span class="category">Energie</span>
      </li>
      <li>
        <h3>Production</h3>
      </li>
      <li>
        <span class="item">Centrale à fusion</span>
        <br/><span class="description">Améliorer la centrale à fusion permet d'augmenter la production d'énergie.</span>
        <br/><button class="upgrade" @click="upgradeEnergyProd">Améliorer</button>
        <span class="price">  {{ getEnergyProdPriceG }} Or | {{ getEnergyProdPriceM }} Matériaux | {{ getEnergyProdPriceE }} Énergie</span>
      </li>
      <li>
        <h3>Stockage</h3>
      </li>
      <li>
        <span class="item">Batteries</span>
        <br/><span class="description">Permet de stocker l'énergie, l'améliorer augmente la quantité maximale d'énergie de votre ville.</span>
        <br/><button class="upgrade" @click="upgradeEnergyStock">Améliorer</button>
        <span class="price">  {{ getEnergyStockPriceG }} Or | {{ getEnergyStockPriceM }} Matériaux | {{ getEnergyStockPriceE }} Énergie</span>
      </li>
    </ul>
  </div>
</template>

<script>

import store from '../store/store'
import * as type from '../store/types'
import * as api from '../api'

export default {
  name: 'Energy',
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
      getEnergyProdPriceG: function () {
          return this.tempStock.max_energy
      },
      getEnergyProdPriceM: function () {
          return this.tempStock.max_energy * 2
      },
      getEnergyProdPriceE: function () {
          return this.tempStock.max_energy / 2
      },
      getEnergyStockPriceG: function () {
          return this.tempStock.max_energy * 2
      },
      getEnergyStockPriceM: function () {
          return this.tempStock.max_energy
      },
      getEnergyStockPriceE: function () {
          return this.tempStock.max_energy
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
    upgradeEnergyProd: async function () {
      this.update()
      if (this.getEnergyProdPriceG > this.temp.gold || this.getEnergyProdPriceM > this.temp.materials || this.getEnergyProdPriceE > this.temp.energy){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getEnergyProdPriceG
        this.temp.materials -= this.getEnergyProdPriceM
        this.temp.energy -= this.getEnergyProdPriceE
        this.temp.energy_rate += 100
        this.saveChanges()
      }
    },
    upgradeEnergyStock: async function () {
      this.update()
      if (this.getEnergyStockPriceG > this.temp.gold || this.getEnergyStockPriceM > this.temp.materials || this.getEnergyStockPriceE > this.temp.energy){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getGoldStockPriceG
        this.temp.materials -= this.getGoldStockPriceM
        this.temp.energy -= this.getEnergyStockPriceE
        this.tempStock.max_energy *= 2
        this.saveChanges()
      }
    },
  },
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
