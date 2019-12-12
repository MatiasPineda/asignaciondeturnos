<template>
  <div id="app">
    <Nav />
    <Contenido />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Contenido from "./components/Content";

export default {
  name: 'app',
  components: {
    Contenido,
    Nav
  }
}

</script>

<style>
  @import './assets/scss/app.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
