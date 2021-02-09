<template>
  <div class="global">
    <div class="sidebar">
        <a href="#home"><img src="../assets/logo.png" width="100px" height="115px"/></a>
        <a class="active" href="#home">Accueil</a>
        <a href="#building">Habitations</a>
        <a href="#industry">Industries</a>
        <a href="#energy">Energie</a>
        <a href="#research">Recherche</a>
    </div>
    <div class="content">
      <div class="glass">
        <CityCard/>
        <ContentBox/>
      </div>
    </div>
  </div>
</template>

<script>
import ContentBox from './ContentBox.vue'
import CityCard from './CityCard.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    city: String,
  },
  components: {
    ContentBox,
    CityCard
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

/* SIDEBAR */
.sidebar{
  flex: 1;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  /* background-color: #302F2F; */
  background-color: #202020;
  min-height: 100vh;
  min-width: 200px;
  overflow: auto;
  font-family: 'Lato', sans-serif;
}

.sidebar a{
  display: block;
  color: white;
  padding: 10px;
  text-decoration: none;
  size: 1em;
}

.sidebar a:hover{
  font-size: 1.5em;
  color: orange;
  transition-delay: 0.01s;
}

/* CONTENT */
div.content{
  flex: 9;
  min-height: 100%;
  background-color: orange;
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

</style>