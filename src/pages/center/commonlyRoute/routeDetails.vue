<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>线路详情</span>
      <div></div>
    </div>
    <div class="addRouterBox">
      <ul class="addRouteList">
        <li class="needBorder">
          <span class="routeTitle ">目的地</span>
          <input type="text" readonly="readonly" value="">
        </li>
        <li class="needBorder">
          <span class="routeTitle">出发地</span>
          <input type="text" readonly="readonly" value="">
        </li>
        <li class=" needBorder">
          <span class="routeTitle">途经点</span>
          <input type="text" readonly="readonly" value="">
        </li>
        <li class="needBorder">
          <span class="routeTitle">中转点</span>
          <input type="text" readonly="readonly" value="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          areaList: []
        }
      },
      mounted() {
        // 地区信息
        this.areaList = JSON.parse(localStorage.getItem('area'));
        console.log(this.areaList)
      },
      methods:{
        fallback() {
          this.$router.go(-1)
        },
      }
    }
</script>

<style scoped>

</style>
