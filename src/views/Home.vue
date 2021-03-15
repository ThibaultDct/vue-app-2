<template>
  <div class="global">
    <div class="content">
      <div class="glass">
        <CityCard/>
        <div class="description">
          <p>Voici la page de résumé de votre ville !</p>
          <p>Le but ? Augmenter au maximum la population de votre ville.</p>
          <p>Comment ? En améliorant vos infrastructures</p>
          <p>
            En effet, sur le menu de gauche, il est mis à votre disposition un ensemble de catégories.
            Pour chaque catégorie, il existe des améliorations de production, et des amélioration de stockage.
            Pour chaque amélioration de production , vous augmenterez la production par seconde de la ressource concernée.
            Pour chaque amélioration de stockage, vous augmenterez le stockage maximum de votre ville pour la ressource concernée.
            Mais attention, chaque amélioration n'est pas gratuite, et le prix est indiqué à côté du bouton d'amélioration.
          </p>
        </div>
        <Leaderboard/>
      </div>
    </div>
  </div>
</template>

<script>
import CityCard from '../components/CityCard.vue'
import Leaderboard from '../components/Leaderboard.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    city: String,
  },
  components: {
    CityCard,
    Leaderboard,
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

.global{
  margin: 0;
  padding: 0;
}

.global{
  display: flex;
  flex-direction: row;
}

/* CONTENT */
div.content{
  flex: 9;
  min-height: 100%;
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

.description{
  display: block;
  background: #202020;
  color: white;
  min-height: 100px;
  min-width: 100px;
  width: 90%;
  border-radius: 1em;
  padding: 16px;
  text-decoration: none;
  margin-bottom: 20px;
}

</style>