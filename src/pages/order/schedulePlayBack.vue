<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>行程回放</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <div class="tripMap">
        <el-amap class="amap-box" vid="'amap-vue'" :plugin="plugin" :zoom="zoom" :center="center">
          <el-amap-polyline :editable="polyline.editable"  :path="polyline.path" :events="polyline.events"></el-amap-polyline>
        </el-amap>
    </div>
  </div>
</template>

<script>

    export default {
      data(){
        return {
          mapPath:'',
          userId: this.$app_store.getters.userId,
          zoom: 16,
          center: [112.99497,28.194627],
          polyline: {
            path: [],
            events: {
              click(e) {
                alert('click polyline');
              },
              end: (e) => {
                let newPath = e.target.getPath().map(point => [point.lng, point.lat]);
                console.log(newPath);
              }
            },
            editable: false
          },
          plugin: [{
            pName: 'ToolBar'
          }],
        }
      },
      mounted() {
        this.order = this.$route.params;
        this.getOrderTrajectory();
      },
      methods:{
        // 获取轨迹
        getOrderTrajectory() {
          let self = this;
          debugger
          this.$Ice_myOrderService.getOrderTrajectory(this.userId,this.order.revicompid,this.order.orderno,new IceCallback(
            function(result){
              if (result.code === 0) {
                if(result.obj.length === 0) {
                  self.$vux.toast.text('暂无订单轨迹～', 'top');
                  return
                }
                let jsonPath = JSON.parse(result.obj[0].content);
                if (jsonPath.length > 0) {
                  self.mapPath = jsonPath;
                } else {
                  self.$vux.toast.text('暂无订单轨迹～', 'top');
                }
              } else {
                self.$vux.toast.text('获取轨迹失败', 'top');
              }
            },
            function (error) {
              self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
            }
          ))
        },
        fallback() {
          this.$router.go(-1)
        }
      },
      watch: {
        'mapPath'() {
          for (let i=0; i<this.mapPath.length;i++) {
            this.polyline.path.push([this.mapPath[i].longitude,this.mapPath[i].latitude]);
          }
          this.center = [this.mapPath[0].longitude,this.mapPath[0].latitude];
        }
      }
    }
</script>

<style scoped>

</style>
