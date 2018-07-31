<template>
  <div>
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>添加好友</span>
      <div></div>
    </div>
    <div class="addFriendBox">
      <div class="searchFriendBox">
        <div class="searchFriend">
          <div class="friendSearchBtn" @click="toPageSearch">
            <i class="icon iconfont icon-sousuo"></i>
            <input v-model="searchInputVal" type="text" class="friendSousuo" placeholder="输入名称、电话模糊查询">
          </div>
        </div>
      </div>
      <span class="friendCanle" @click="">取消</span>
    </div>

    <p class="maybe">可能认识的伙伴</p>
    <tab
      active-color="#3189f5">
      <tab-item @on-item-click="tabClick" selected>货源圈</tab-item>
      <tab-item @on-item-click="tabClick">调度圈</tab-item>
    </tab>
    <ul class="circleList" v-show="selectOneTab">
      <li class="needBorder" v-for="(item, index) in sCircleList">
        <img :src="item.logoPath" alt="" class="circlePic">
        <div class="companyNamePhone"><span class="companyName floatleft">{{item.fname}}</span><span
          class="companyPhone floatright">{{item.contact}}</span></div>
        <div class="lineName"><span class="lineInfo">线路：{{item.disRoute}}</span></div>
        <!--<div class="lineName"><span class="lineInfo">线路:</span></div>-->
        <a class="pullBlack" @click="sCircleAdd(item,index,2)">添 加</a>
      </li>
    </ul>
    <ul class="circleList" v-show="!selectOneTab">
      <li class="needBorder" v-for="(item, index) in SchedulingCircle">
        <img :src="item.logoPath" alt="" class="circlePic">
        <div class="companyNamePhone"><span class="companyName floatleft">{{item.fname}}</span><span
          class="companyPhone floatright">{{item.contact}}</span></div>
        <div class="lineName"><span class="lineInfo">线路：{{item.disRoute}}</span></div>
        <!--<div class="lineName"><span class="lineInfo">线路:</span></div>-->
        <a class="pullBlack" @click="sCircleAdd(item,index,1)">添 加</a>
      </li>
    </ul>

  </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'
  import {searchState} from "../../../utils/config";
  import {SEARCH_STATE} from "../../../store/mutation-types";

  export default {
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        selectOneTab: true, // true 货运圈 false 调度圈
        circleQueryParam: new mycircle.CircleQueryParam(),
        page: new cstruct.Page(),
        userId: this.$app_store.getters.userId || 3,
        circleList: [],
        sCircleList: [], // 货源圈
        SchedulingCircle: [],
        searchInputVal: '',
        cName: ''
      }
    },
    mounted() {
      // 初始化查询条件
      this.initData();
      // 获取圈子推荐
      this.queryCanAddMyCircle(64);
      this.queryCanAddMyCircle(128);
    },
    methods: {
      sCircleAdd(item, index, ctype) {
        let title = '提示';
        let content = '';
        let self = this;
        if (ctype === 2) {
          content = '您确定要添加好友至货源圈嘛?';
        } else {
          content = '您确定要添加好友至调度圈嘛?';
        }
        this.message.showAlert(this, title, content)
          .then(() => {
          self.$Ice_CircleService.sendAddMyCircleMsg(this.userId,item.compId,ctype, new IceCallback(
            function (result) {
              if (result.code === 0) {
                if(ctype === 2) {
                  // self.routeList[index].cstatus = 32;
                  self.$vux.toast.text('货源圈好友添加成功', 'top');
                  self.sCircleList.splice(index,1)
                }else {
                  self.$vux.toast.text('调度圈好友添加成功', 'top');
                  self.SchedulingCircle.splice(index,1)
                }
              } else {
                self.$vux.toast.text('好友圈添加失败', 'top');
              }
            },
            function (error) {
              self.message.Toast(self, '服务器连接失败, 请稍后重试', result.msg, false);
            }
          ))
        })
          .catch(() => {

          })
      },
      initData() {
        // 初始化列表查询条件
        this.page.pageSize = 100; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;

        if (this.$app_store.getters.searchState === searchState.CIRCLE_ADD) {
          this.searchInputVal = this.$app_store.getters.searchContent;
          this.cName = this.searchInputVal;
          // this.driverName = this.searchInputVal;
          console.log(this.$app_store.getters.searchContent)
        }
      },
      queryCanAddMyCircle(cType) {
        let self = this;
        this.circleQueryParam.pageSize = this.page.pageSize;
        this.circleQueryParam.pageIndex = this.page.pageIndex;
        this.circleQueryParam.cType = cType;
        this.circleQueryParam.starPlace = '';
        this.circleQueryParam.endPlace = '';
        this.circleQueryParam.cname = this.cName;
        this.$Ice_CircleService.queryCanAddMyCircle(this.circleQueryParam, new IceCallback(
          function (result) {
            if (result.code === 0) {
              // 货源圈
              if (cType === 128) {
                self.sCircleList = result.obj.circleSeq;
                self.sCircleList.forEach((item, index, arr) => {
                  let disRoute = '';
                  if (item.routes !== null && item.routes.length > 0) {
                    // 拼接路线信息, 列表显示
                    disRoute = item.routes[0].origin + '-' + item.routes[0].destination + '(' + item.routes[0].channel + ')';
                  }
                  item['disRoute'] = disRoute;
                });
              } else {
                // 调度圈
                self.SchedulingCircle = result.obj.circleSeq;
                self.SchedulingCircle.forEach((item, index, arr) => {
                  let disRoute = '';
                  if (item.routes !== null && item.routes.length > 0) {
                    disRoute = item.routes[0].origin + '-' + item.routes[0].destination + '(' + item.routes[0].channel + ')';
                  }
                  item['disRoute'] = disRoute;
                });
              }
            } else {
              // 暂无数据

            }
          },
          function (error) {

          }
        ))
      },
      toPageSearch() {
        this.$app_store.commit(SEARCH_STATE, searchState.CIRCLE_ADD);
        this.$router.push({
          name: 'simpleSearch'
        })
      },
      tabClick() {
        this.selectOneTab = !this.selectOneTab;
      },
      fallback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>

</style>
