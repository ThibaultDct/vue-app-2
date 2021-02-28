<template>
  <div id="app">
    <div class="sidebar">
      <a href="#home"><img src="./assets/logo.png" width="100px" height="115px"/></a>
      <a class="active" href="#home">Accueil</a>
      <a href="#building">Habitations</a>
      <a href="#industry">Industries</a>
      <a href="#energy">Energie</a>
      <a href="#research">Recherche</a>
    </div>
    <div class="global">
      <div class="content">
        <div class="glass">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}

.global{
  margin: 0;
  padding: 0;
  flex: 9;
}

.global{
  display: flex;
  flex-direction: row;
}

/* CONTENT */
div.content{
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

/* SIDEBAR */
.sidebar{
  flex: 1;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  background-color: #202020;
  min-height: 100vh;
  min-width: 200px;
  overflow: auto;
  font-family: 'Lato', sans-serif;
  text-align: center;
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

</style>
