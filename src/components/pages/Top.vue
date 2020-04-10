<template>
  <div class="top">
    <h1>都道府県</h1>
    <md-checkbox v-model="boolean1">北海道</md-checkbox>
    <md-checkbox v-model="boolean2">青森</md-checkbox>
    <md-checkbox v-model="boolean3">秋田</md-checkbox>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      boolean1: false,
      boolean2: false,
      boolean3: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
