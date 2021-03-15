<template>
  <div class="industriesbox z-depth-1-half">
    <ul>
      <li>
        <span class="category">Industries</span>
      </li>
      <li>
        <h3>Production</h3>
      </li>
      <li>
        <span class="item">Mine d'or</span>
        <br/><span class="description">Améliorer la mine d'or permet de doubler la production d'or.</span>
        <br/><button class="upgrade" @click="upgradeGold">Améliorer</button>
        <span class="price">  {{ getGoldProdPriceG }} Or | {{ getGoldProdPriceM }} Matériaux</span>
      </li>
      <li>
        <span class="item">Usine de matériaux</span>
        <br/><span class="description">Améliorer l'usine de matériaux double la production de matériaux.</span>
        <br/><button class="upgrade" @click="upgradeMaterials">Améliorer</button>
        <span class="price">  {{ getMaterialsProdPriceG }} Or | {{ getMaterialsProdPriceM }} Matériaux</span>
      </li>
      <li>
        <h3>Stockage</h3>
      </li>
      <li>
        <span class="item">Chambre forte</span>
        <br/><span class="description">Permet de stocker l'or, l'améliorer double la quantité maximale d'or de votre ville.</span>
        <br/><button class="upgrade" @click="upgradeGoldStock">Améliorer</button>
        <span class="price">  {{ getGoldStockPriceG }} Or | {{ getGoldStockPriceM }} Matériaux</span>
      </li>
      <li>
        <span class="item">Entrepôt de matériaux</span>
        <br/><span class="description">Permet de stocker les matériaux, l'améliorer double la quantité maximale de matériaux de votre ville.</span>
        <br/><button class="upgrade" @click="upgradeMaterialsStock">Améliorer</button>
        <span class="price">  {{ getMaterialsStockPriceG }} Or | {{ getMaterialsStockPriceM }} Matériaux</span>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store/store'
import * as type from '../store/types'
import * as api from '../api'

export default {
  name: 'Industries',
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
    getGoldProdPriceG: function () {
      return this.temp.gold_rate * 50
    },
    getGoldProdPriceM: function () {
      return this.temp.gold_rate * 20
    },
    getGoldStockPriceG: function () {
      return this.tempStock.max_gold
    },
    getGoldStockPriceM: function () {
      return this.tempStock.max_gold /2
    },
    getMaterialsProdPriceG: function () {
      return this.temp.materials_rate * 20
    },
    getMaterialsProdPriceM: function () {
      return this.temp.materials_rate * 30
    },
    getMaterialsStockPriceG: function () {
      return this.tempStock.max_materials / 2
    },
    getMaterialsStockPriceM: function () {
      return this.tempStock.max_materials
    },
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
    upgradeGold: async function () {
      this.update()
      if (this.getGoldProdPriceG > this.temp.gold || this.getGoldProdPriceM > this.temp.materials){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getGoldProdPriceG
        this.temp.materials -= this.getGoldProdPriceM
        this.temp.gold_rate *= 2
        this.saveChanges()
      }
    },
    upgradeMaterials: async function () {
      this.update()
      if (this.getMaterialsProdPriceG > this.temp.gold || this.getMaterialsProdPriceM > this.temp.materials){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getMaterialsProdPriceG
        this.temp.materials -= this.getMaterialsProdPriceM
        this.temp.materials_rate *= 2
        this.saveChanges()
      }
    },
    upgradeGoldStock: async function () {
      this.update()
      if (this.getGoldStockPriceG > this.temp.gold || this.getGoldStockPriceM > this.temp.materials){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getGoldStockPriceG
        this.temp.materials -= this.getGoldStockPriceM
        this.tempStock.max_gold *= 2
        this.saveChanges()
      }
    },
    upgradeMaterialsStock: async function () {
      this.update()
      if (this.getMaterialsStockPriceG > this.temp.gold || this.getMaterialsStockPriceM > this.temp.materials){
          alert("Vous n'avez pas les ressources nécessaires pour acheter cette amélioration")
      } else {
        this.temp.gold -= this.getMaterialsStockPriceG
        this.temp.materials -= this.getMaterialsStockPriceM
        this.tempStock.max_materials *= 2
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
