<template>
  <div>
    <div class="issueHeaderNavMap">
      <i class="icon iconfont icon-btngoback back"></i>
      <span>选择地址</span>
      <button @click="selectCity" class="selectCityBtn">当前城市：{{searchOption.city}}<i class="icon iconfont icon-xiala xiala"></i></button>
    </div>
    <div class="amap-container">
      <el-amap-search-box class="search" :search-option="searchOption"
                          :on-search-result="onSearchResult">
      </el-amap-search-box>
      <el-amap vid="amapDemo" :center="mapCenter" :zoom="cZoom" class="amap-demo" :events="events">
        <el-amap-marker v-for="marker in markers" :icon="marker.icon" :position="marker" :key="marker"></el-amap-marker>
      </el-amap>
    </div>
    <ul class="order_boxMap">
      <li class="order_listMap" v-for="(item,index) in pList" :key="index" @click="selectionPio(item)">
        <div class="order_timeMap"><span class="siteMap">{{item.name}}</span></div>
        <div class="order_priceMap"><span class="carWeightMap">{{item.address}}</span></div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {
    ADDRESSCOM
  } from '../store/mutation-types'
  import { AMapManager } from "vue-amap";
  export default {
    data() {
      return {
        // 缩放比例
        cZoom: 12,
        pList: [],// 搜索点坐标
        map: null,
        searchOption: {
          city: '',
          citylimit: true
        },
        markers: [], // 搜索标记
        mapCenter: [], // 地图中心点
        geocoder: null,
        events: {
          init :(map) => {
            console.log(123)
            this.map = map
            this.map.setCity(this.$app_store.getters.currentCity);
          }
        }
      }
    },
    mounted() {
      this.initData();
    },
    activated: function () {
      if(this.map !== null) {
        this.searchOption.city = this.$app_store.getters.currentCity;
        this.map.setCity(this.searchOption.city);
      }
    },
    methods: {
      initData() {
        // 设置地址搜索框城市
        this.searchOption.city = this.$app_store.getters.currentCity || '北京';
        this.mapCenter = [113.0068368, 28.212332300000003];
      },
      selectCity() {
        this.$router.push({
          path: '/city'
        })
      },
      onSearchResult(pois) {

        this.cZoom = 14;
        let latSum = 0;
        let lngSum = 0;
        this.pList = pois;
        this.markers = [];
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
          console.log(this.mapCenter)
        }
      },
      selectionPio(item) {
        let self = this;
        var geocoder = new AMap.Geocoder({});
        geocoder.getAddress([item.lng, item.lat], function (status, result) {
          if (status === "complete" && result.info === "OK") {
            if (result && result.regeocode) {
              self.$app_store.commit(ADDRESSCOM, result.regeocode.addressComponent);
              self.goBack()
            }
          }
        });
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style>
  .search {
    font-size: .3rem;
  }

  .amap-container {
    height: 8rem;
  }

  .amap-demo {
    height: 5rem;
  }

</style>
