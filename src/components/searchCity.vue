<template>
  <div class="backgroundwhite">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    <ul class="citySearchPageas">
      <li v-for="(item, index) in cityList" :key="index" @click="itemClick(item)">{{item.arean}}</li>
    </ul>
  </div>
</template>

<script>
  import {
    BOURN_CITY,
    BOURN_CITY_CODE,
    CITY_CODE,
    CURRENT_CITY,
    RECEIPT_CITY,
    START_CITY,
    START_CITY_CODE
  } from "../store/mutation-types";

    export default {
      data(){
        return {
          value: '',
          cityList: [],
          status: 0
        }
      },
      mounted() {
        this.status = this.$route.query.status;
      },
      methods:{
        onSearch() {
          this.requestCityList(this.value)
        },
        onCancel() {
         this.$router.go(-1)
        },
        itemClick(item) {
          // status: 0 定位城市 1 发单定位 2 路线出发地 3路线目的地
          let pathName = '';
          // 设置城市名称
          switch (Number(this.status)) {
            case 0:
              this.$app_store.commit(CURRENT_CITY,item.arean);
              let obj = {
                currentCity: item.arean,
                cityCode: item.areac
              };
              localStorage.setItem('cityInfo',JSON.stringify(obj));
              pathName = 'home';
              break;
            case 1:
              this.$app_store.commit(CITY_CODE,item.areac);
              this.$app_store.commit(RECEIPT_CITY,item.arean);
              pathName = 'geo';
              break;
            case 2:
              this.$app_store.commit(START_CITY_CODE,item.areac);
              this.$app_store.commit(START_CITY,item.arean);
              pathName = 'routeDetails';
              break;
            case 3:
              this.$app_store.commit(BOURN_CITY_CODE,item.areac);
              this.$app_store.commit(BOURN_CITY,item.arean);
              pathName = 'routeDetails';
              break;
          }

          this.$router.push({
            name: pathName
          })

        },
        requestCityList(condition) {
          let self = this;
          this.$Ice_SystemService.getCityByName(condition,
            new IceCallback(
              function (result) {
                if(result.code === 0) {
                  self.cityList = result.obj;
                  console.log(self.cityList)
                }
              },
              function (error) {
                debugger
              }
            )
          );
        }
      },
      beforeRouteLeave (to, from, next) {
        if (to.name === 'routeDetails') {
          to.meta.isUseCache = true;
        }
        next();
      }
    }
</script>

<style scoped>

</style>
