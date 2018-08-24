<template>
  <div style="height: 100%;">
    <div class="issueHeaderNav">
      <div class="width20"><i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i></div>
      <div  class="width60"><span>城市选择</span></div>
      <div class="width20"><div class="alignCenter floatright"></div></div>
    </div>
    <cube-index-list
      style="margin-top:.8rem;"
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
    CITY_CODE
  } from '../store/mutation-types'

  export default {
    data() {
      return {
        cityData: [], // 城市数据
        currentCity: '', // 当前选中城市
        status: 0
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
      // status: 0 定位城市 1 发单定位
      this.status = this.$route.query.status;
      if (this.status === 0) {
        this.currentCity = this.$app_store.getters.currentCity;
      } else {
        this.currentCity = this.$app_store.getters.receiptCity;
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
      selectItem(item) {
        // 设置城市名称
        if (this.status === 0) {
          this.$app_store.commit(CURRENT_CITY,item.name);
          let obj = {
            currentCity: item.name,
            cityCode: item.value
          };
          localStorage.setItem('cityInfo',JSON.stringify(obj));
        } else {
          // 设置城市编码
          this.$app_store.commit(CITY_CODE,item.value);
          this.$app_store.commit(RECEIPT_CITY,item.name);
        }
        this.$router.go(-1);
      },
      clickTitle(title) {
        this.$router.go(-1);
      },
      fallback() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style>

</style>
