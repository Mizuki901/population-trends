<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Toolbar from './components/common/Toolbar.vue'
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
  max-width: 1200px;
  margin: 40px auto 0 auto;
}

h1, h2 {
  font-weight: normal;
}
</style>
