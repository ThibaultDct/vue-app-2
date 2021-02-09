<template>
  <div class="servercard z-depth-1-half">
    <v-circle :config="{
        x: 10,
        y: 10,
        width: 2,
        height: 2,
        fill: isOnline()
        }"
    />
    <div class="title">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'ServerCard',
  props: {
    name: String
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
  width: 300px;
  border-radius: 1em;
  margin-bottom: 20px;
  padding: 16px;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  text-align: left;
}

.title{
    font-weight: bold;
}

</style>
