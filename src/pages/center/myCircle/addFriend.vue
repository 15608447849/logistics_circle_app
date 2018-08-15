<template>
  <div>
    <div class="issueHeaderNav">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>添加好友</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <div style="margin-top:5.5vh;">
      <div class="addFriendBox">
        <div class="searchFriendBox">
          <div class="searchFriend">
            <div class="friendSearchBtn" @click="toPageSearch">
              <i class="icon iconfont icon-sousuo"></i>
              <input v-model="searchInputVal" type="text" class="friendSousuo" placeholder="输入企业名称查询">
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
      <div v-show="selectOneTab">
        <van-list
          v-model="loadingA"
          :finished="finishedA"
          @load="onLoadA"
        >

          <ul class="circleList">
            <li class="needBorder" v-for="(item, index) in sCircleList">
              <van-cell-swipe :right-width="65" :left-width="65">
                <img :src="item.logoPath" alt="" class="circlePic">
                <div class="companyNamePhone"><span class="companyName floatleft">{{item.fname}}</span><span
                  class="companyPhone floatright">{{item.contact}}</span></div>
                <div class="lineName"><span class="lineInfo">线路：{{item.disRoute}}</span></div>
                <!--<div class="lineName"><span class="lineInfo">线路:</span></div>-->
                <a class="pullBlack" @click="sCircleAdd(item,index,2)">添 加</a>
                <span slot="right" @click="onClose(item,index,2)" class="deteleFriend">删除</span>
              </van-cell-swipe>

            </li>

          </ul>
        </van-list>
      </div>
      <div v-show="!selectOneTab">
        <van-list
          v-model="loadingB"
          :finished="finishedB"
          @load="onLoadB"
        >
          <ul class="circleList">
            <li class="needBorder" v-for="(item, index) in SchedulingCircle">
              <van-cell-swipe :right-width="65" :left-width="65">
                <img :src="item.logoPath" alt="" class="circlePic">
                <div class="companyNamePhone"><span class="companyName floatleft">{{item.fname}}</span><span
                  class="companyPhone floatright">{{item.contact}}</span></div>
                <div class="lineName"><span class="lineInfo">线路：{{item.disRoute}}</span></div>
                <!--<div class="lineName"><span class="lineInfo">线路:</span></div>-->
                <a class="pullBlack" @click="sCircleAdd(item,index,1)">添 加</a>
                <span slot="right" @click="onClose(item,index,2)" class="deteleFriend">删除</span>
              </van-cell-swipe>
            </li>
          </ul>
        </van-list>
      </div>
    </div>
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
        circleQueryParamA: new mycircle.CircleQueryParam(),
        circleQueryParamB: new mycircle.CircleQueryParam(),
        page: new cstruct.Page(),
        userId: this.$app_store.getters.userId,
        circleList: [],
        sCircleList: [], // 货源圈
        SchedulingCircle: [],
        searchInputVal: '',
        cName: '',
        loadingA: false,
        finishedA: false,
        loadingB: false,
        finishedB: false
      }
    },
    mounted() {
      // 初始化查询条件
      this.initData();
      this.onLoadB();
    },
    methods: {
      onClose(item,index,type) {
        // console.log(item)
        this.addBlacklist(item,index,type)
      },
      addBlacklist(item, index, ctype) {
        let self = this;
        let content = '您确定要将好友添加至黑名单吗?';
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.addBlackList(this.userId, item.compId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('黑名单添加成功', 'top');
                  if (ctype === 2) {
                    self.sCircleList.splice(index, 1)
                  } else {
                    self.SchedulingCircle.splice(index, 1)
                  }
                } else {
                  self.$vux.toast.text('黑名单添加失败', 'top');
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
      sCircleAdd(item, index, ctype) {
        let title = '提示';
        let content = '';
        let self = this;
        if (ctype === 2) {
          content = '您确定要添加好友至货源圈吗?';
        } else {
          content = '您确定要添加好友至调度圈吗?';
        }
        this.message.showAlert(this, content)
          .then(() => {
            self.$Ice_CircleService.sendAddMyCircleMsg(this.userId, item.compId, ctype, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  if (ctype === 2) {
                    // self.routeList[index].cstatus = 32;
                    self.$vux.toast.text('货源圈好友添加成功', 'top');
                    self.sCircleList.splice(index, 1)
                  } else {
                    self.$vux.toast.text('调度圈好友添加成功', 'top');
                    self.SchedulingCircle.splice(index, 1)
                  }
                } else {
                  self.$vux.toast.text(result.msg, 'top');
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
      initData() {
        // 初始化列表查询条件
        this.page.pageSize = 10; // 每页页数
        this.page.pageIndex = 1; // 当前页
        this.page.totalItems = 0;
        this.page.totalPageCount = 0;

        if (this.$app_store.getters.searchState === searchState.CIRCLE_ADD) {
          this.searchInputVal = this.$app_store.getters.searchContent;
          this.cName = this.searchInputVal;
        }

        this.circleQueryParamA.pageSize = this.page.pageSize;
        this.circleQueryParamA.pageIndex = this.page.pageIndex;
        this.circleQueryParamA.cType = 128;
        this.circleQueryParamA.starPlace = '';
        this.circleQueryParamA.endPlace = '';
        this.circleQueryParamA.cname = this.cName;

        this.circleQueryParamB.pageSize = this.page.pageSize;
        this.circleQueryParamB.pageIndex = this.page.pageIndex;
        this.circleQueryParamB.cType = 64;
        this.circleQueryParamB.starPlace = '';
        this.circleQueryParamB.endPlace = '';
        this.circleQueryParamB.cname = this.cName;
      },
      onLoadA() {
        let self = this;
        this.queryCanAddMyCircle(this.circleQueryParamA, function (result) {
          self.loadingA = false;
          self.circleQueryParamA.pageIndex += 1; // 页码增加
          if (result.code !== 0) {
            self.finishedA = true;
            return
          }
          result = result.obj;
          result.circleSeq.forEach((item, index, arr) => {
            let disRoute = '';
            if (item.routes !== undefined && item.routes !== null && item.routes.length > 0) {
              disRoute = item.routes[0].origin + '-' + item.routes[0].destination + '(' + item.routes[0].channel + ')';
            }
            item['disRoute'] = disRoute;
          });
          self.sCircleList = self.sCircleList.concat(result.circleSeq);
          if (self.sCircleList.length >= result.totalItems) {
            self.finishedA = true;
          }
        }, function (error) {
          self.finishedA = true;
          self.loadingA = false;
        });
      },
      onLoadB() {
        let self = this;
        this.queryCanAddMyCircle(this.circleQueryParamB, function (result) {
          self.loadingB = false;
          self.circleQueryParamB.pageIndex += 1; // 页码增加
          if (result.code !== 0) {
            self.$vux.toast.text(result.msg, 'top');
            self.finishedB = true;
            return
          }
          result = result.obj;
          result.circleSeq.forEach((item, index, arr) => {
            let disRoute = '';
            if (item.routes !== undefined && item.routes !== null && item.routes.length > 0) {
              disRoute = item.routes[0].origin + '-' + item.routes[0].destination + '(' + item.routes[0].channel + ')';
            }
            item['disRoute'] = disRoute;
          });
          self.SchedulingCircle = self.SchedulingCircle.concat(result.circleSeq);
          if (self.SchedulingCircle.length >= result.totalItems) {
            self.finishedB = true;
          }
        }, function (error) {
          self.finishedB = true;
          self.loadingB = false;
        });
      },
      queryCanAddMyCircle(circleQueryParam, successCallback, errorCallback) {
        let self = this;
        this.$Ice_CircleService.queryCanAddMyCircle(circleQueryParam, new IceCallback(
          function (result) {
            successCallback(result)
          },
          function (error) {
            errorCallback(error);
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
