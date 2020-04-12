<template>
  <div class="top">
    <md-progress-spinner v-if="isloading" class="md-accent" md-mode="indeterminate"></md-progress-spinner>
    <div v-if="!isloading" class="pref-items md-layout md-gutter">
      <div v-for="prefecture in prefectures" :key="prefecture.prefCode"
        class="pref-item md-layout-item md-xlarge-size-10 md-large-size-15 md-medium-size-15 md-small-size-25 md-xsmall-size-33"
      >
        <md-checkbox v-model="prefecture.isChecked" v-on:change="setPopulation(prefecture)">
          {{ prefecture.prefName }}
        </md-checkbox>
      </div>
      <!-- 2or3列の倍数のグリッドで表示できるようにレイアウト調整 -->
      <div class="pref-item md-layout-item md-xlarge-size-10 md-large-size-15 md-medium-size-15 md-small-size-25 md-xsmall-size-33"></div>
    </div>
    <vue-chart class="chart"
      style="width: 90%; height: 600px;"
      :data="populationTrends"
      :options="{scales: {yAxes: [{ticks: {beginAtZero: true}}]}}"
      :update-config="{duration: 0, easing: 'easeOutBounce'}"
      type="line"
    />
  </div>
</template>

<script>
import axios from 'axios'
import VueChart from '@seregpie/vue-chart'
import Color from 'color'
import RandomColor from 'randomcolor'

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
      isloading: true,
      prefectures: [],
      populationTrends: {
        labels: ['1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'],
        datasets: []
      }
    }
  },
  mounted () {
    axiosWrapper.get('https://opendata.resas-portal.go.jp/api/v1/prefectures')
      .then((res) => {
        this.isloading = false
        this.prefectures = res.data.result
      })
  },
  methods: {
    setPopulation: function (prefecture) {
      if (!prefecture.isChecked) {
        // チェックボックスが外れるときには、その都道府県の人口データは削除する
        const datasets = this.populationTrends.datasets.filter((data) => {
          return (data.id !== prefecture.prefCode)
        })
        this.populationTrends.datasets = datasets

        // prefCode順に都道府県をソートしておく
        this.populationTrends.datasets.sort(function (data1, data2) {
          return data1.id - data2.id
        })
      } else {
        const url = 'https://opendata.resas-portal.go.jp/api/v1/population/sum/estimate?prefCode=' + prefecture.prefCode + '&cityCode=-'
        axiosWrapper.get(url)
          .then((res) => {
            // 都道府県の総人口以外のデータは不要
            // 1970年から2020年までのデータに整形
            let populationByYear = res.data.result.data.filter(data => data.label === '総人口')[0].data.slice(2, 13)
            const population = populationByYear.map((data) => {
              return data.value
            })

            // グラフの色をランダムに生成する
            const randomColor = RandomColor({
              luminosity: 'bright',
              hue: 'random',
              format: 'rgb'
            })
            const alphaRandomColor = Color(randomColor).alpha(0.1).string()

            // グラフに描画する都道府県を追加
            const dataset = {
              id: prefecture.prefCode,
              backgroundColor: alphaRandomColor,
              borderColor: randomColor,
              borderWidth: 2,
              data: population,
              label: prefecture.prefName
            }
            this.populationTrends.datasets.push(dataset)

            // prefCode順に都道府県をソートしておく
            this.populationTrends.datasets.sort(function (data1, data2) {
              return data1.id - data2.id
            })
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-progress-spinner {
  margin: 24px;
}
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
