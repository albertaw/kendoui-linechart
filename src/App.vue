<template>
  <div id="app">
    <kendo-datasource 
      ref="dataSource"
      :transport-read-url="'./src/OHLC.json'"
      :transport-read-data-type="'json'"
      :schema-parse="schemaParse">
    </kendo-datasource>
    <kendo-chart
      :data-source-ref="'dataSource'"
      :title-text="'Dash Prices'"
      :legend-position="'bottom'"
      :tooltip-visible="true"
      :tooltip-template="'$#: value #'"
      :series="series"
      :category-axis="categoryAxis"
      :value-axis="valueAxis">
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
        field: 'Volume'
      }],
      categoryAxis: {
        field: 'Date'
      },
      valueAxis: {
        labels: {
          format: '${0}'
        }
      }
    }
  },
  methods: {
    schemaParse: function(response) {
      return response.result.DASHUSD.map(function(arr) {
        let utcSeconds = arr[0];
        let date = new Date(0);
        date.setUTCSeconds(utcSeconds);
        return {
          Date: date,
          Volume: arr[6]
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
