<template>
  <div>
    <div class="issueHeaderNavMap">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="goBack"></i>
      </div>
      <div class="width60">
        <span style="font-size:.36rem;">选择地址</span>
      </div>
      <div class="width20">
        <button @click="selectCity" class="selectCityBtn floatright">{{searchOption.city}}
          <i class="icon iconfont icon-xiala xiala"></i>
        </button>
      </div>
    </div>
      <div class="amap-container">
        <el-amap-search-box :default="searchDefault" class="search" :search-option="searchOption"
                            :on-search-result="onSearchResult">
        </el-amap-search-box>
        <el-amap vid="amapDemo" :zoom="cZoom" class="amap-demo" :events="events">
          <el-amap-marker v-for="marker in markers" :icon="marker.icon" :position="marker"
                          :key="marker"></el-amap-marker>
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
        searchDefault: '',
        markers: [], // 搜索标记
        mapCenter: [], // 地图中心点
        geocoder: null,
        events: {
          init: (map) => {
            this.map = map;
            // map.setCity(this.searchOption.city)
            this.setCity();
          }
        }
      }
    },
    mounted() {
      this.initData();
    },
    // activated() {
    //   debugger
    //   if(this.map !== null) {
    //     this.setCity();
    //   }
    //   // 清空搜索列表
    //   this.searchDefault = ' ';
    //   this.pList = [];
    // },
    methods: {
      setCity() {
        if (this.$app_store.state.receiptCity !== '') {
          this.searchOption.city = this.$app_store.state.receiptCity;
        } else {
          this.searchOption.city = '长沙市';
        }
        if (this.map !== null) {
          this.map.setCity(this.searchOption.city);
        }
      },
      initData() {
        // this.mapCenter = [113.0068368, 28.212332300000003];
      },
      selectCity() {
        this.$router.push({
          path: '/city',
          query: {
            status: 1
          }
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
        }
      },
      selectionPio(item) {
        let self = this;
        var geocoder = new AMap.Geocoder({});
        geocoder.getAddress([item.lng, item.lat], function (status, result) {
          if (status === "complete" && result.info === "OK") {
            if (result && result.regeocode) {
              self.$app_store.commit(ADDRESSCOM, result.regeocode.addressComponent);
              self.$router.go(-1);
            }
          }
        });
      },
      goBack() {
        // 内容初始化
        this.$app_store.commit(ADDRESSCOM,null);
        this.$router.go(-1);
      }
    },
    deactivated() {

    },
    beforeRouteLeave (to, from, next) {
      if (to.name === 'releaseOrders') {
        to.meta.isUseCache = true;
      }
      if (to.name === 'againRelease') {
        to.meta.isUseCache = true;
      }
      if (to.name === 'repuborder') {
        to.meta.isUseCache = true;
      }
      next();
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
