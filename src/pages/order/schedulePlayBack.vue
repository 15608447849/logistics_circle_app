<template>
  <div>
    <div class="tripHeader">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>行程回放</span>
      <div class="alignCenter"></div>
    </div>
    <div class="tripMap">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-bezier-curve v-for="(line, index) in lines" :key="index" :events="line.events" :path="line.path" :stroke-color="line.strokeColor" :stroke-style="line.strokeStyle"  :stroke-opacity="line.strokeOpacity"></el-amap-bezier-curve>
      </el-amap>
    </div>
  </div>
</template>

<script>

    export default {
      data(){
        return {
          zoom: 12,
          center: [116.380298, 39.907771],
          lines: [
            {
              path: [
                [116.39, 39.91, 116.37, 39.91],
                [116.380298, 39.907771, 116.38, 39.90],
                [116.385298, 39.907771, 116.40, 39.90]
              ],
              strokeDasharray: [10, 10],
              strokeColor: "#FF33FF", //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 3, //线宽
              strokeStyle: "solid", //线样式
              events: {
                click: () => {
                  alert('click');
                }
              }
            }
          ]
        }
      },
      mounted() {
        this.order = this.$route.params;
        // this.getOrderTrajectory();
      },
      methods:{
        // 获取轨迹
        getOrderTrajectory() {
          let self = this;
          this.$Ice_myOrderService.getOrderTrajectory(this.userId,this.order.orderId,new IceCallback(
            function(result){
              if (result[0].code === 0) {
                let jsonPath = JSON.parse(result[0].obj[0].content);
                if (jsonPath.length > 0) {
                  self.mapPath = result[0].obj[0].content;
                  self.mapShow = true;
                } else {
                  self.$vux.toast.text('暂无订单轨迹～', 'top');
                }
              } else {
                self.$vux.toast.text('获取轨迹失败', 'top');
              }
            }
          ))
        },
        fallback() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
