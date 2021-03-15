<template>
  <div class="global">
    <div class="content">
      <div class="glass">
        <CityCard/>
      </div>
    </div>
  </div>
</template>

<script>
import CityCard from '../components/CityCard.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    city: String,
  },
  components: {
    CityCard,
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

</style>