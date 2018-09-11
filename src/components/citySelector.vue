<template>

  <div style="height: 100%;">
    <!--<div class="issueHeaderNav">-->
      <!--<div class="width20"><i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i></div>-->
      <!--<div class="width60"><span>城市选择</span></div>-->
      <!--<div class="width20"><div class="alignCenter floatright"></div></div>-->
    <!--</div>-->
    <div class="searchBox margintop6">
      <div class="selectRegion">
        <div class="searchBtnCity floatleft">
          <i class="icon iconfont icon-sousuo magnifierziti cityNameI"></i>
          <input type="text"  class="cityInput" placeholder="城市名/首字母" readonly="readonly" @click="toSearchCity">
        </div>
      </div>
    </div>
    <!-- 城市选择列表 -->
    <fs-cities
      :cities="cities"
      @recently='recentlyClick'
    />

  </div>
</template>
<script>
  import { Toast } from 'vant';
  import {
    CURRENT_CITY,
    RECEIPT_CITY,
    CITY_CODE, START_CITY, BOURN_CITY, START_CITY_CODE, BOURN_CITY_CODE, CURRENT_CITY_CODE
  } from '../store/mutation-types'
  import fsSideNavIndex from './cities-list/side-nav-index'
  import fsCities from './cities-list/cities'

  export default {
    components: {
      fsSideNavIndex,
      fsCities
    },
    data() {
      return {
        cities: [], // 城市数据
        selectCities: {}, // 当前选中城市
        recentlyUsed: {}, // 最近使用
        currentCity: '', // 当前选中城市
        status: 0,
        options : {
          probeType: 1
        }
      }
    },
    mounted() {

    },
    activated(){
      // status: 0 定位城市 1 发单定位 2 路线出发地 3路线目的地
      this.status = this.$route.query.status;
      switch (Number(this.status)) {
        case 0:
          this.currentCity = this.$app_store.getters.currentCity;
          this.cityCode = this.$app_store.state.currentCityCode;
          break
        case 1:
          this.currentCity = this.$app_store.getters.receiptCity;
          this.cityCode = this.$app_store.state.cityCode;
          break
        case 2:
          this.currentCity = this.$app_store.getters.startCity;
          this.cityCode = this.$app_store.getters.startCityCode;
          break
        case 3:
          this.currentCity = this.$app_store.getters.bournCity;
          this.cityCode = this.$app_store.getters.bournCityCode;
          break
      }
    },
    methods: {
      recentlyClick(item,index) {
        console.log(item,index)
      },
      initCityList() {

        // 判断本地是否保存城市选择信息
        // 因为从搜索返回只有城市名+城市码且多处使用该页面
        // so, 根据城市名称获取当前选中地区区县 (〒︿〒)
        for(let i=0;i<resolve.length;i++) {
          for(let j=0;j<resolve[i].items.length;j++) {
            if(this.cityCode.toString().substring(0,6) === resolve[i].items[j].value) {
              this.selectCities.type = 'current';
              let cityObj = resolve[i].items[j];
              cityObj.children.unshift({
                checked: true,
                name: cityObj.name,
                values: cityObj.value
              });
              this.selectCities.items = resolve[i].items[j];
              this.selectCities.name = '区县';
            }
          }
        }
        // 加载字母列表
        this.cities = resolve;
        // 最近使用，先写死展示数据
        this.recentlyUsed.type = 'recently';
        this.recentlyUsed.items = {
          checked: false,
          children: [{
            value: '10430121',
            name: '长沙县',
            checked: 'false'
          },{
            value: '10430181',
            name: '浏阳市',
            checked: 'false'
          },{
            value: '10430182',
            name: '宁乡市',
            checked: 'false'
          }],
          name: '长沙市',
          value: '104301'
        };
        this.recentlyUsed.name = '最近';
        this.cities.unshift(this.recentlyUsed);
        // 区县
        this.cities.unshift(this.selectCities);
      },
      toSearchCity(){
        this.$router.push({
          name: 'searchCity',
          query: {
            status: this.status,
            state: this.$route.query.state
          }
        })
      },
      selectItem(item) {
        // 设置城市名称
        switch (this.status) {
          case 0:
            this.$app_store.commit(CURRENT_CITY_CODE,item.value);
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
