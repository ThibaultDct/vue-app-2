<template>
  <div class="servercard">
    <span class="cityName">Leaderboard</span>
    <ul>
        <li v-for="item in board" :key="item.name">
            {{ item.name }} : {{ item.population }}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Leaderboard',
  props: {
    
  },
  data() {
    return {
      board: [],
    }
  },
  beforeMount: function () {
    this.getData()
  },
  methods: {
      getData: async function () {
        await axios.get("https://citybuilder.thibaultdct.fr/api/city?order=population.desc")
        .then(response => (this.board = response.data))
        .catch(error => console.log(error))
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

button:hover {
  background: white;
  border: 1px solid black;
  color: black;
}

li {
  margin-bottom: 1em;
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
