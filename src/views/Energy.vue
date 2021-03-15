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
      </li>
      <li>
        <h3>Stockage</h3>
      </li>
      <li>
        <span class="item">Batteries</span>
        <br/><span class="description">Permet de stocker l'énergie, l'améliorer augmente la quantité maximale d'énergie de votre ville.</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Energy',
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
