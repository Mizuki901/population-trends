<template>
  <div class="top">
    <h1>都道府県一覧</h1>
    <div class="pref-items md-layout md-gutter">
      <div v-for="prefecture in prefectures" :key="prefecture.prefCode"
        class="pref-item md-layout-item md-xlarge-size-10 md-large-size-15 md-medium-size-15 md-small-size-25 md-xsmall-size-33"
      >
        <md-checkbox v-model="prefecture.checked">
          {{ prefecture.prefName }}
        </md-checkbox>
      </div>
      <!-- adjust number of pref-items to multiples of 3 -->
      <div class="pref-item md-layout-item md-xlarge-size-10 md-large-size-15 md-medium-size-15 md-small-size-25 md-xsmall-size-33"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const axiosWrapper = axios.create({
  headers: {
    'X-API-KEY': 'yEfuzcVHxB8L7eG3me7yQZ0Iibh2AGlTMo3TLsyq'
  }
})

export default {
  name: 'Top',
  data () {
    return {
      prefectures: []
    }
  },
  mounted () {
    axiosWrapper.get('https://opendata.resas-portal.go.jp/api/v1/prefectures')
      .then((res) => {
        this.prefectures = res.data.result
        this.prefectures.forEach((prefecture) => {
        })
        console.log(this.prefectures)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pref-items {
  margin: 10px 0;
}
.pref-item {
  margin: 0 auto;
  text-align: left;
}
</style>
