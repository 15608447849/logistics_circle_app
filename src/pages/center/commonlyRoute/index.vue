<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>常用线路</span>
      <span @click="toaddRoute">添加</span>
    </div>
    <!--<div class="LineBox">-->
    <!--<div class="lineSearch">-->
    <!--<div class="driverSearchBtn">-->
    <!--<i class="icon iconfont icon-sousuo"></i>-->
    <!--<span class="sousuo">搜索</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <ul class="lineList">
      <li class="needBorder" @click="editorRoute(item)" v-for="(item,index) in routeList" :key="index">
        <img src="../../../assets/images/small/line_03.png" alt="">
        <span class="startAndEnd">{{item.startpn}} - {{item.endpn}}</span> <span class="route">途经</span>
        <!--<span class="startAndEnd">{{item.startpn}} - {{item.endpn}}</span> <span class="route" v-for="(itemB,indexB) in item.routevias" :key="indexB">途经{{itemB.placename}}</span>-->
        <!--<a class="discontinuation">停用</a>-->
        <!--<a class="discontinuationBlue">启用</a>-->
        <a :class="item.cstatus === 32 ? 'discontinuationBlue' : 'discontinuation'" @click.stop="isEnable"
           @click="isEnable(item,index)">{{item.cstatus === 32 ? '启用' : '停用'}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userId: this.$app_store.getters.userId || 4,
        routeList: [],
        page: new cstruct.Page(),
        origin: '',// 目的地地区码
        destination: '',// 出发地地区码
        state: '',// 线路状态
        total: 0
      }
    },
    mounted() {
      this.initData();
      this.queryRoutes();
    },
    methods: {
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
            if (result.code === 0) {
              self.routeList = result.obj;
            }
          },
          function (error) {
            debugger
          }
        ))
      },
      toaddRoute() {
        this.$router.push({
          path: '/center/commonlyRoute/addRoute'
        })
      },
      // routeDetails() {
      //   this.$router.push({
      //     path: '/center/commonlyRoute/routeDetails'
      //   })
      // },
      addRoute() {
        this.$router.push({
          name: 'driverInfo'
        })
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
        let title = '操作确认';
        let content = '';
        let self = this;
        if (item.cstatus === 0) {
          content = '您确定要将常用路线停用吗?';
        } else {
          content = '您确定要将常用路线启用吗?';
        }
        this.message.showAlert(this, title, content)
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
                  self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
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
                  self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
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
