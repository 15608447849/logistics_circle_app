<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>常用线路</span>
      </div>
      <div class="width20">
        <i @click="editorRoute" class="icon iconfont icon-gengduo1 dropdowngengduo colorWhite floatright"></i>
      </div>


    </div>
    <!--<div class="LineBox">-->
      <!--<div class="lineSearch">-->
        <!--<div class="driverSearchBtn">-->
           <!--<i class="icon iconfont icon-sousuo"></i>-->
           <!--<span class="sousuo">搜索</span>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
 <div style="height:95vh;background:#ffffff;overflow: auto">
   <van-list
     v-model="loading"
     :finished="finished"
     @load="onLoad"
   >
         <div @click="editorRoute(item)" class="needBorderF5 lineListDiv" v-for="(item,index) in routeList" :key="index">
           <img src="../../../assets/images/small/line_03.png" alt="">
           <span class="startAndEnd">{{item.startpn}} - {{item.endpn}}</span> <span class="route">途经</span>
           <!--<span class="startAndEnd">{{item.startpn}} - {{item.endpn}}</span> <span class="route" v-for="(itemB,indexB) in item.routevias" :key="indexB">途经{{itemB.placename}}</span>-->
           <!--<a class="discontinuation">停用</a>-->
           <!--<a class="discontinuationBlue">启用</a>-->
           <a :class="item.cstatus === 32 ? 'discontinuation' : 'discontinuation'" @click.stop="isEnable"
              @click="isEnable(item,index)">{{item.cstatus === 32 ? '启用' : '停用'}}</a>
         </div>
   </van-list>
 </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        userId: this.$app_store.getters.userId,
        routeList: [],
        page: new cstruct.Page(),
        origin: '',// 目的地地区码
        destination: '',// 出发地地区码
        state: '',// 线路状态
        total: 0,
        loading: false,
        finished: false
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      onLoad() {
        this.queryRoutes();
      },
      initData() {
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;
        // if (this.$app_store.getters.searchState === searchState.DRIVER) {
        //   this.searchInputVal = this.$app_store.getters.searchContent;
        //   this.driverName = this.searchInputVal;
        //   console.log(this.$app_store.getters.searchContent)
        // }
      },
      // 获取路线信息
      queryRoutes() {
        let self = this;
        this.$Ice_EnterpriseService.queryRoutes(this.userId, this.origin, this.destination, this.state, this.page, new IceCallback(
          function (result) {
            self.loading = false;
            if (result.code === 0) {
              self.page.pageIndex += 1; // 页码增加
              self.routeList = self.routeList.concat(result.obj);
              if (self.routeList.length >= result.totalItems) {
                self.finished = true;
              }
            }
          },
          function (error) {
            self.finished = true;
            self.loading = false;
          }
        ))
      },
      editorRoute(item) {

          this.$router.push({
            name: 'routeDetails',
            params: item
          });


      },
      fallback() {
        this.$router.go(-1)
      },
      /** 是否启用 */
      isEnable(item, index) {
        let content = '';
        let self = this;
        if (item.cstatus === 0) {
          content = '您确定要将常用路线停用吗?';
        } else {
          content = '您确定要将常用路线启用吗?';
        }
        this.message.showAlert(this, content)
          .then(() => {
            if (item.cstatus === 0) {
              // 停用
              self.$Ice_EnterpriseService.disableRoute(item.routeid, new IceCallback(
                function (result) {
                  if (result.code === 0) {
                    self.routeList[index].cstatus = 32;
                    self.$vux.toast.text('路线停用成功', 'top');
                  }
                },
                function (error) {
                  self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
                }
              ))
            } else {
              self.$Ice_EnterpriseService.enableRoute(item.routeid, new IceCallback(
                function (result) {
                  if (result.code === 0) {
                    self.$vux.toast.text('路线启用成功', 'top');
                    self.routeList[index].cstatus = 0
                  }
                },
                function (error) {
                  self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
                }
              ))
            }
          })
          .catch(() => {

          })
      },
    }
  }
</script>

<style scoped>
</style>
