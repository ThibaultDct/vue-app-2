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
      </li>
      <li>
        <h3>Stockage</h3>
      </li>
      <li>
        <span class="item">Quartier résidentiel</span>
        <br/><span class="description">L'améliorer augmente la population maximale de votre ville.</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Population',
  props: {
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
