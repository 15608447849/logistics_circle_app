<template>
  <div style="height: 100%;">
    <div class="issueHeaderNav">
      <div class="width20"><i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i></div>
      <div class="width60"><span>城市选择</span></div>
      <div class="width20"><div class="alignCenter floatright"></div></div>
    </div>
    <div class="searchBox margintop6">
      <div class="selectRegion">
        <div class="searchBtnCity floatleft">
          <i class="icon iconfont icon-sousuo magnifierziti cityNameI"></i>
          <input type="text"  class="cityInput" placeholder="请输入城市" readonly="readonly" @click="toSearchCity">
        </div>
      </div>
    </div>
    <cube-index-list
      :data="cityData"
      @select="selectItem"
      @title-click="clickTitle"></cube-index-list>
  </div>
</template>
<script>
  import { Toast } from 'vant';
  import {
    CURRENT_CITY,
    RECEIPT_CITY,
    CITY_CODE, START_CITY, BOURN_CITY, START_CITY_CODE, BOURN_CITY_CODE
  } from '../store/mutation-types'

  export default {
    data() {
      return {
        cityNameSeach:'',//搜索框值
        cityData: [], // 城市数据
        currentCity: '', // 当前选中城市
        status: 0,
        options : {
          probeType: 1
        }
      }
    },
    mounted() {
      this.initCityList(0).then((resolve) => {
        console.log('数据开始渲染' + new Date());
        this.cityData = resolve;
        this.$nextTick(function(){
          console.log('数据渲染完毕拉~' + new Date());
          // 关闭下拉框
          Toast.clear();
        });
      });
    },
    activated(){
      // status: 0 定位城市 1 发单定位 2 路线出发地 3路线目的地
      this.status = this.$route.query.status;
      switch (this.status) {
        case 0:
          this.currentCity = this.$app_store.getters.currentCity;
          break
        case 1:
          this.currentCity = this.$app_store.getters.receiptCity;
          break
        case 2:
          this.currentCity = this.$app_store.getters.startCity;
          break
        case 3:
          this.currentCity = this.$app_store.getters.bournCity;
          break
      }
    },
    methods: {
      initCityList(ms) {
        Toast.loading({
          mask: true,
          message: '加载中...'
        });
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(JSON.parse(this.$app_store.state.citys));
          },ms);
        });
      },
      toSearchCity(){
        this.$router.push({
          name: 'searchCity',
          query: {
            status: this.status
          }
        })
      },
      selectItem(item) {
        // 设置城市名称
        switch (this.status) {
          case 0:
            this.$app_store.commit(CURRENT_CITY,item.name);
            let obj = {
              currentCity: item.name,
              cityCode: item.value
            };
            localStorage.setItem('cityInfo',JSON.stringify(obj));
            break;
          case 1:
            // 设置城市编码
            this.$app_store.commit(CITY_CODE,item.value);
            this.$app_store.commit(RECEIPT_CITY,item.name);
            break;
          case 2:
            // 设置城市编码
            this.$app_store.commit(START_CITY_CODE,item.value);
            this.$app_store.commit(START_CITY,item.name);
            break;
          case 3:
            // 设置城市编码
            this.$app_store.commit(BOURN_CITY_CODE,item.value);
            this.$app_store.commit(BOURN_CITY,item.name);
            break;
        }
        this.$router.go(-1);
      },
      clickTitle(title) {
        this.$router.go(-1);
      },
      fallback() {
        this.$router.go(-1);
      },
    },
    beforeRouteLeave (to, from, next) {
      if (to.name === 'routeDetails') {
        to.meta.isUseCache = true;
      }
      next();
    }
  }
</script>
<style>

</style>
