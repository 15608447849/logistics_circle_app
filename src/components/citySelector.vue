<template>
  <div style="height: 100%;background:#ffffff;">
    <div class="issueHeaderNav">
      <div class="width20"><i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i></div>
      <div class="width60"><span>城市选择</span></div>
      <div class="width20"><div class="alignCenter floatright"></div></div>
    </div>
    <div class="searchBox margintop6">
      <div class="selectRegion">
        <div class="searchBtnCity floatleft">
          <i class="icon iconfont icon-sousuo magnifierziti cityNameI"></i>
          <input type="text"  class="cityInput" placeholder="城市名/首字母" readonly="readonly" @click="toSearchCity">
        </div>
      </div>
    </div>
    <van-collapse v-model="activeNames">
      <span class="pickCountyBox">选择区县</span>
      <van-collapse-item :title="looking" name="1" style="position:relative;">
          <span class="pickCount">全城</span>
          <span class="pickCount backgroundNine">长沙县</span>
          <span class="pickCount">浏阳市</span>
          <span class="pickCount">望城区</span>
          <span class="pickCount">宁乡县</span>
          <span class="pickCount">雨花区</span>
          <span class="pickCount">岳麓区</span>
          <span class="pickCount">近效</span>
          <span class="pickCount">芙蓉区</span>
          <span class="pickCount">开福区</span>
          <span class="pickCount">天心区</span>
      </van-collapse-item>
    </van-collapse>
    <div class="latelyCity">
      <p>最近访问</p>
      <span class="pickCount"><img src="./../assets/images/small/dingwei.png" alt="">长沙</span>
      <span class="pickCount">成都</span>
      <span class="pickCount">深圳</span>
    </div>

    <div class="cityAggregate">
      <p class="rollLetter">A</p>
      <ul class="cityNameAggregate">
        <li>安顺</li>
        <li>阿富汗</li>
      </ul>
      <ul class="letter">
        <li>定位</li>
        <li>热门</li>
        <li class="colorBlueSan">A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </div>
    <!--<cube-index-list-->
      <!--:data="cityData"-->
      <!--@select="selectItem"-->
      <!--@title-click="clickTitle">-->

    <!--</cube-index-list>-->
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
        looking:'你正在看：长沙',
        activeNames:['1'],
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
        console.log('数据开始过滤' + new Date());
        // 城市列表数据过滤
        let countyList = [];// 区县列表
        for(let i=0;i<resolve.length;i++) {
          for(let j=0;j<resolve[i].items.length;j++) {
            if(resolve[i].items[j].value.length > 6) {
              countyList.push(resolve[i].items[j]);
              // 移除区县
              resolve[i].items.splice(j,1);
              j--;
            }
          }
        }
        for(let i=0 ;i<resolve.length;i++) {
          for(let j=0;j<resolve[i].items.length;j++) {
            resolve[i].items[j].children =[];
            let value = resolve[i].items[j].value;
            for(let k=0;k<countyList.length;k++) {
              if(countyList[k].value.slice(0,6) === value) {
                resolve[i].items[j].children.push(countyList[k]);
              }
            }
          }
        }
        this.cityData = resolve;

        console.log(this.cityData);
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
            status: this.status,
            state: this.$route.query.state
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
