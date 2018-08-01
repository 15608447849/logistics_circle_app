<template>
  <div>
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>我的圈子</span>
      <span @click="toaddFriend">添加</span>
    </div>
    <div class="downfixed havedownfixed">
      <div class="driverBox" @click="tosearchFriend">
        <div class="searchDriverBox">
          <div class="searchDriver">
            <div class="driverSearchBtn">
              <i class="icon iconfont icon-sousuo"></i>
              <span class="sousuo">搜索</span>
            </div>
          </div>
        </div>
      </div>
      <div class="circleListBox">
        <!--<div class="circleType">-->
        <!--<div class="SourceGoods marginLeft21" @click="tabClick" :class="{'activecircle': selectOneTab}">货源圈</div>-->
        <!--<div class="dispatch  marginRight21" @click="tabClick"  :class="{'activecircle': !selectOneTab}">调度圈</div>-->
        <!--</div>-->
        <tab
          active-color="#3189f5">
          <tab-item @on-item-click="tabClick" selected>货源圈</tab-item>
          <tab-item @on-item-click="tabClick">调度圈</tab-item>
        </tab>
        <ul class="circleList" v-show="selectOneTab">
          <li class="needBorder" @click="toComPInfo(item)" v-for="(item, index) in sCircleList" :key="index">
            <img src="" alt="" class="circlePic">
            <div class="companyNamePhone"><span class="companyName floatleft">{{item.fname}}</span><span
              class="companyPhone floatright">{{item.contact}}</span></div>
            <div class="lineName"><span class="lineInfo">线路：{{item.disRoute}}</span></div>
            <a class="pullBlack" @click.stop="removeClick(item, index, 128)">移 出</a>
          </li>
        </ul>
        <ul class="circleList" v-show="!selectOneTab">
          <li class="needBorder" @click="toComPInfo(item)" v-for="(item, index) in SchedulingCircle" :key="index">
            <img src="" alt="" class="circlePic">
            <div class="companyNamePhone"><span class="companyName floatleft">{{item.fname}}</span><span
              class="companyPhone floatright">{{item.contact}}</span></div>
            <div class="lineName"><span class="lineInfo">线路：{{item.disRoute}}</span></div>
            <a class="pullBlack" @click.stop="removeClick(item, index, 64)">移 出</a>
          </li>
        </ul>
      </div>
      <div class="friendNum" v-show="selectOneTab">共{{sCircleNum}}位朋友</div>
      <div class="friendNum" v-show="!selectOneTab">共{{SchedulingCircleNum}}位朋友</div>
    </div>
  </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'

  export default {
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        selectOneTab: true, // true 货运圈 false 调度圈
        sCircleList: [], // 货运圈列表
        SchedulingCircle: [],// 调度圈列表
        page: new cstruct.Page(),
        userId: this.$app_store.getters.userId,
        sCircleNum: 0,
        SchedulingCircleNum: 0
      }
    },
    mounted() {
      // 初始化数据
      this.initData();
      // 获取货源圈
      this.queryMyCircleByUser(128);
      // 获取调度圈
      this.queryMyCircleByUser(64);
    },
    methods: {
      initData() {
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;
      },
      queryMyCircleByUser(circleT) {
        let self = this;
        this.$Ice_CircleService.queryMyCircleByUser(this.userId, circleT, this.page.pageIndex, this.page.pageSize, new IceCallback(
          function (result) {
            if (result.code === 0) {
              if (circleT === 128) {
                self.sCircleList = result.obj.circleSeq;
                self.sCircleNum = result.obj.totalItems;
                self.sCircleList.forEach((item, index, arr) => {
                  let disRoute = '';
                  if (item.routes !== null && item.routes.length > 0) {
                    disRoute = item.routes[0].origin + '-' + item.routes[0].destination + '(' + item.routes[0].channel + ')';
                  }
                  item['disRoute'] = disRoute;
                });
              } else {
                self.SchedulingCircle = result.obj.circleSeq;
                self.SchedulingCircleNum = result.obj.totalItems;
                self.SchedulingCircle.forEach((item, index, arr) => {
                  let disRoute = '';
                  if (item.routes !== null && item.routes.length > 0) {
                    disRoute = item.routes[0].origin + '-' + item.routes[0].destination + '(' + item.routes[0].channel + ')';
                  }
                  item['disRoute'] = disRoute;
                });
              }
            } else {

            }
          },
          function (error) {

          }
        ))
      },
      tabClick() {
        this.selectOneTab = !this.selectOneTab;
      },
      removeClick(item, index, ctype) {
        let title = '提示';
        let content = '';
        let self = this;
        if (ctype === 128) {
          content = '您确定要将好友移除货源圈吗?';
        } else {
          content = '您确定要将好友移除调度圈吗?';
        }
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.removeCircle(this.userId, item.compId, ctype, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  if (ctype === 128) {
                    // self.routeList[index].cstatus = 32;
                    self.$vux.toast.text('货源圈好友移除成功', 'top');
                    self.sCircleList.splice(index, 1)
                  } else {
                    self.$vux.toast.text('调度圈好友移除成功', 'top');
                    self.SchedulingCircle.splice(index, 1)
                  }
                } else {
                  self.$vux.toast.text('好友圈移除失败', 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      toaddFriend() {
        this.$router.push({
          path: '/center/myCircle/addFriend'
        })
      },
      toComPInfo(item) {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: false,
            id: item.compId,
            status: 1
          }
        })
      },
      tosearchFriend() {
        this.$router.push({
          path: '/center/myCircle/searchFriend'
        })
      },
      fallback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
