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
    <h1>都道府県別人口推移</h1>
    <vue-chart class="chart"
      style="width: 90%; height: 600px;"
      :data="populationTrends"
      :options="{scales: {yAxes: [{ticks: {beginAtZero: true}}]}}"
      :update-config="{duration: 2000, easing: 'easeOutBounce'}"
      type="line"
    />
  </div>
</template>

<script>
import axios from 'axios'
import VueChart from '@seregpie/vue-chart'

const axiosWrapper = axios.create({
  headers: {
    'X-API-KEY': 'yEfuzcVHxB8L7eG3me7yQZ0Iibh2AGlTMo3TLsyq'
  }
})

export default {
  name: 'Top',
  components: {
    [VueChart.name]: VueChart
  },
  data () {
    return {
      prefectures: [],
      populationTrends: {
        labels: ['1990', '1995', '2000'],
        datasets: [
          {
            backgroundColor: 'rgba(255,0,0,0.1)',
            borderColor: 'rgba(255,0,0)',
            borderWidth: 2,
            data: [5, 4, 6],
            label: '北海道'
          },
          {
            backgroundColor: 'rgba(0,255,0,0.1)',
            borderColor: 'rgba(0,255,0)',
            borderWidth: 2,
            data: [4, 1, 3],
            label: '青森県'
          },
          {
            backgroundColor: 'rgba(0,0,255,0.1)',
            borderColor: 'rgba(0,0,255)',
            borderWidth: 2,
            data: [2, 3, 1],
            label: '岩手県'
          }
        ]
      }
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
  margin: 10px 0 60px 0px;
}
.pref-item {
  margin: 0 auto;
  text-align: left;
  height: 40px;
}
.chart {
  margin: 0 auto;
}
</style>
