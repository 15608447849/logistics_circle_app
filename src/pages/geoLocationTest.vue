<template>
  <div class="amap-page-container">
    <button @click="selectCity"></button>
    <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
    <!--<el-amap vid="amapDemo" :center="mapCenter" :zoom="12" class="amap-demo">-->
      <!--<el-amap-marker v-for="(marker,index) in markers" :key="index" :position="marker" ></el-amap-marker>-->
    <!--</el-amap>-->
    <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
    </el-amap>
  </div>
</template>
<script>
  import { amapManager } from 'vue-amap';
  export default {
    components: {
      amapManager
    },
    data() {
      return {
        markers: [
          [121.59996, 31.197646],
          [121.40018, 31.197622],
          [121.69991, 31.207649]
        ],
        searchOption: {
          city: '上海',
          citylimit: true
        },
        mapCenter: [121.59996, 31.197646]
      }
    },
    methods: {
      selectCity() {
        this.$router.push({
          path: '/city'
        })
      },
      addMarker: function() {
        let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
        let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
        this.markers.push([lng, lat]);
      },
      onSearchResult(pois) {
        let latSum = 0;
        let lngSum = 0;
        if (pois.length > 0) {
          pois.forEach(poi => {
            let {lng, lat} = poi;
            lngSum += lng;
            latSum += lat;
            this.markers.push([poi.lng, poi.lat]);
          });
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          };
          this.mapCenter = [center.lng, center.lat];
        }
      }
    }
  };
</script>

<style>
  .amap-demo {
    height: 1.5rem;
  }
  .search-box {
    position: absolute;
    top: 25px;
    left: 20px;
  }
  .amap-page-container {
    position: relative;
  }
</style>
