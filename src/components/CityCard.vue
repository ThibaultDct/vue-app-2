<template>
  <div class="servercard z-depth-1-half">
    <input class="cityName" v-model="name" placeholder="Ma ville">
    <span>Population : {{ population }} (+{{ population_rate }})</span>
  </div>
</template>

<script>
export default {
  name: 'ServerCard',
  props: {
    name: String,
    population: Number,
    population_rate: Number,
  },
  methods: {
      isOnline: function (){
          return "green"
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.servercard{
  display: block;
  background: #202020;
  color: white;
  height: 100px;
  width: 80%;
  border-radius: 1em;
  margin-bottom: 20px;
  padding: 16px;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  text-align: left;
}

.cityName {
  color: white;
  border: none;
  background-color: transparent;
  font-size: 2em;
}

.cityName::placeholder {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  color: white;
}

.title{
    font-weight: bold;
}

</style>
