<template>
  <div id="app">
    <kendo-chart
      :title-text="'Bitcoin Prices'"
      :legend-position="'bottom'"
      :tooltip-visible="true"
      :tooltip-template="'$#: value #'"
      :series="series"
      :category-axis-categories="categories"
      :value-axis="axis">
    </kendo-chart>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      series: [{
        type: 'line',
        name: 'Price',
        data: [6316.77, 6513.70, 6477.32, 6367.24, 6402.62, 5594.97, 3768.79, 4191.90, 3493.53, 3272.31],
      }],
      categories: ['10/14/2018','10/21/2018','10/28/2018','11/04/2018','11/11/2018','11/18/2018','11/25/2018','12/02/2018', '12/09/2018', '12/16/2018'],
      axis: [{
        name: 'temperature',
        labels: {
          format: "${0}"
        }
      }]
    }
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
  margin-top: 60px;
}
</style>
