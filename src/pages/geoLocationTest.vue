<template>
  <div>
    <yd-navbar title="地址选择" bgcolor="#1E90FF" color="#FFFFFF" fontsize="16px">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
      </router-link>
      <!--<img slot="right" src="../../assets/images/small/logo_26.png"/>-->
    </yd-navbar>
    <div class="amap-container">
      <button @click="selectCity">{{searchOption.city}}</button>
      <el-amap-search-box class="search" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap vid="amapDemo" :center="mapCenter" :zoom="18" class="amap-demo">
        <el-amap-marker  :position="markers" ></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchOption: {
          city: '',
          citylimit: true
        },
        markers: [], // 搜索标记
        mapCenter: [] // 地图中心点
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      // 初始化数据
      initData() {
        // 设置地址搜索框城市
        this.searchOption.city = this.$app_store.getters.currentCity || '北京'
        console.log(this.searchOption.city)
        // 初始化地图中心点
        this.markers = [112.99454,28.194858];
        this.mapCenter = [113.0068368,28.212332300000003];
      },
      selectCity() {
        this.$router.push({
          path: '/city'
        })
      },
      onSearchResult(pois) {
        let latSum = 0;
        let lngSum = 0;
        if (pois.length > 0) {
          pois.forEach(poi => {
            debugger
            let {lng, lat} = poi;
            lngSum += lng;
            latSum += lat;
            this.markers = [poi.lng, poi.lat];
            console.log(this.markers)
          });
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          };
          this.mapCenter = [center.lng, center.lat];
          console.log(this.mapCenter)
        }
      }
    }
  };
</script>

<style>
  .search {
    font-size: .3rem;
  }
  .amap-container {
    height: 10rem;
  }

  .amap-demo {
    height: 300px;
  }


  .amap-page-container {
    position: relative;
  }
</style>
