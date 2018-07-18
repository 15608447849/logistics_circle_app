<template>
  <div>
    <yd-navbar title="地址选择" bgcolor="#1E90FF" color="#FFFFFF" fontsize="16px">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon color="#FFFFFF"></yd-navbar-back-icon>
      </router-link>
      <!--<img slot="right" src="../../assets/images/small/logo_26.png"/>-->
    </yd-navbar>
    <div class="amap-container">
      <button @click="selectCity">{{searchOption.city}}</button>
      <el-amap-search-box class="search" :search-option="searchOption"
                          :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap vid="amapDemo" :center="mapCenter" :zoom="12" class="amap-demo">
        <el-amap-marker v-for="marker in markers" :position="marker" :key="marker"></el-amap-marker>
      </el-amap>
    </div>
    <ul class="order_box" style="height: 5rem">
      <li class="order_list" v-for="(item,index) in pList" :key="index">
        <div class="order_time"><span class="site">{{item.name}}</span></div>
        <div class="order_price"><span class="carWeight">{{item.address}}</span></div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pList: [],// 搜索点坐标
        searchOption: {
          city: '',
          citylimit: true
        },
        markers: [], // 搜索标记
        mapCenter: [], // 地图中心点
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
        console.log(this.searchOption.city);
        // 初始化地图中心点
        this.mapCenter = [113.0068368, 28.212332300000003];
      },
      selectCity() {
        this.$router.push({
          path: '/city'
        })
      },
      onSearchResult(pois) {
        let latSum = 0;
        let lngSum = 0;
        this.pList = pois;
        console.log(this.pList);
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
      }
    },
    watch: {
      // pList: {
      //   handler(newValue, oldValue) {
      //
      //   },
      //   deep: true
      // }
    }
  };
</script>

<style>
  .search {
    font-size: .3rem;
  }

  .amap-container {
    height: 5rem;
  }

  .amap-demo {
    height: 300px;
  }

  .amap-page-container {
    position: relative;
  }

  .scroll-list-wrap {
    height: 5rem
  }

</style>
