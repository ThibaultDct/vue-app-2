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
        <br/><span class="description">Améliorer la mine d'or permet d'améliorer la production d'or.</span>
      </li>
      <li>
        <span class="item">Usine de matériaux</span>
        <br/><span class="description">Améliorer l'usine de matériaux augmente la production de matériaux.</span>
      </li>
      <li>
        <h3>Stockage</h3>
      </li>
      <li>
        <span class="item">Chambre forte</span>
        <br/><span class="description">Permet de stocker l'or, l'améliorer augmente la quantité maximale d'or de votre ville.</span>
      </li>
      <li>
        <span class="item">Entrepôt de matériaux</span>
        <br/><span class="description">Permet de stocker les matériaux, l'améliorer augmente la quantité maximale de matériaux de votre ville.</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Industries',
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
