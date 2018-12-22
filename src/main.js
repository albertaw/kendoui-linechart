import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Chart, ChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.use(ChartInstaller)
Vue.use(DataSourceInstaller)

new Vue({
  el: '#app',
  components: {
  	Chart,
  	DataSource
  },
  render: h => h(App)
})
