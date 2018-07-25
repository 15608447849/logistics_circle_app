<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>常用线路</span>
      <span @click="toaddRoute">添加</span>
    </div>
    <div class="LineBox">
      <div class="lineSearch">
        <div class="driverSearchBtn">
          <i class="icon iconfont icon-sousuo"></i>
          <span class="sousuo">搜索</span>
        </div>
      </div>
    </div>
    <ul class="lineList">
      <li class="needBorder" @click="routeDetails">
          <img src="../../../assets/images/small/line_03.png" alt="">
        <span class="startAndEnd">长沙-广州</span> <span class="route">途经衡阳、郴州、韶关、清远</span>
        <a class="discontinuation">停用</a>
        <a class="discontinuationBlue">启用</a>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        data(){

        },
        methods:{
          toaddRoute(){
            this.$router.push({
              path:'/center/commonlyRoute/addRoute'
            })
          },
          routeDetails(){
            this.$router.push({
              path:'/center/commonlyRoute/routeDetails'
            })
          },
          fallback() {
            this.$router.go(-1)
          },
        }
    }
</script>

<style scoped>

</style>
