<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Toolbar from './components/organisms/Toolbar.vue'
export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.container {
  margin-top: 40px;
}
</style>
