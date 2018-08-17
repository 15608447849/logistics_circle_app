<template>
  <div>
    <div class="issueHeaderNav">
      <div class="width20">
        <img :src="isAvatar" alt="" @click="avatarClick" class="loginPicture floatleft" v-if="isAvatar !== ''">
        <img src="../../assets/images/small/moren.png" alt="" @click="avatarClick" class="loginPictureDefault floatleft" v-if="isAvatar === ''">
      </div>
      <div class="width60">
        <span>圈子</span>
      </div>
      <div class="width20">
        <i class="icon iconfont icon-gengduo1 colorWhite floatright" @click="toPageIssue"></i>
      </div>
      <!--<span @click="toPageIssue">发单</span>-->
    </div>
    <!--下拉刷新回调的提示-->

      <p v-show="isShowMessage" class="download-tip">{{pullingMessage}}</p>
     <div class="circleLists">
       <div v-show="isShowNoData" class="noDataBox">
         <img src="../../assets/images/small/nodate.png"/>
       </div>
       <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
         <van-list
           v-model="loading"
           :finished="finished"
           @load="onLoad"
         >
           <ul class="order_box">
             <li class="order_list" @click="toPageIssueDetail(item)" v-for="(item,index) in infoList" :key="index">
               <div class="order_time"><span class="site">{{item.startAddr}}</span><span class="site">—</span><span
                 class="site">{{item.destAddr}}</span><span class="time">{{dateConversion(item.time)}}</span></div>
               <div class="order_price"><span class="carWeight">{{item.goodsType}}</span><span
                 class="carWeight">{{item.wm}}</span><span class="carWeight">{{item.vt}}</span><span class="carWeight">{{item.vlen}}</span><span
                 class="total_price">￥{{item.cost}}元</span></div>
             </li>
           </ul>
         </van-list>
       </van-pull-refresh>
     </div>
    <!--<div class="Baseline">-->
      <!-- -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;没有更多的数据了-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <!--</div>-->
  </div>
</template>
<script>
  import Conversion from '@/utils/conversion'
  import {IS_SHOW_SIDEBAR, TABBAR_INDEX} from "../../store/mutation-types";

  export default {
    computed: {
      isAvatar: {
        get: function () {
          return this.$app_store.state.avatar
        },
        set: function () {
          // this.$app_store.commit(IS_SHOW_SIDEBAR, false);
        }
      }
    },
    data() {
      return {
        isShowNoData: false, // 无数据显示
        avatar: this.$app_store.state.avatar,// 头像
        userId: this.$app_store.state.userId,
        infoList: [],
        pageSize: '50', // 订单数
        address: this.$app_store.getters.currentCity, // 地址
        startTimeStr: '', // 起始订单标识
        endTimeStr: '', // 结束订单标识
        key: '',// 关键词
        requestState: 0, // 获取最新 0, 获取历史1
        token: '0',
        pullingMessage: '',
        isShowMessage: false,
        loading: false,
        finished: false,
        isLoading: false // 下拉刷新
      }
    },
    mounted() {
      this.$app_store.commit(TABBAR_INDEX, 2);
    },
    methods: {
      showTip() {
        let self = this;
        this.isShowMessage = true;
        setTimeout(() => {
          self.isShowMessage = false;
        }, 1500);
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(()=>{
          let self = this;
          this.requestInfoList(0, this.startTimeStr, function (result) {
            self.isLoading = false;
            if (result.length === 0) {
              self.pullingMessage = '列表数据已是最新'
            }else {
              self.startTimeStr = result[0].time;
              self.pullingMessage = result.length + '条新发布订单';
              self.infoList = result.concat(self.infoList);
            }
            self.showTip();
          }, function (error) {
            self.isLoading = false;
          });
        },500);
      },
      onLoad() {
        let self = this;
        this.requestInfoList(1, this.endTimeStr, function (result) {
          self.loading = false;
          if (result.length === 0) {
            // 列表无数据显示
            self.finished = true;
            if(self.infoList.length === 0) {
              self.isShowNoData = true
            }
            return
          }
          self.endTimeStr = result[result.length - 1].time;
          // 原有数组与新数组连接
          self.infoList = self.infoList.concat(result);

        }, function (error) {
          if (self.infoList !== null && self.infoList.length > 0) {
            self.isShowNoData = false;
          } else {
            self.isShowNoData = true;
          }
          self.loading = false;
          self.finished = true;
        });
      },
      requestInfoList(requestState, timeStr, successCallback, errorCallback) {
        let self = this;
        this.$Ice_OrderService.queryCircleOrderByApp(self.userId, self.pageSize, self.address, self.key, requestState, timeStr,
          new IceCallback(
            function (result) {
              if (result.code !== 0) {
                self.$vux.toast.text(result.msg, 'top');
                return
              }
              successCallback(result.obj);
            }, function (err) {
              errorCallback(err);
            }
          ))
      },
      toPageIssueDetail(item) {
        this.$router.push({
          path: '/information/releaseDetails',
          query: {
            id: item.id,
            puberid: item.puberid,
            pubercompid: item.pubercompid
          }
        })
      },
      itemClick(item) {
        // 跳转详情页面
      },
      toPageIssue() {
        this.$router.push({
          path: '/information/releaseOrders',
          query: {
            status: 1
          }
        })
      },
      dateConversion(time) {
        return Conversion.formatMsgTime(time)
      },
      avatarClick() {
        // 验证登录
        if (this.$app_store.state.userId) {
          this.$app_store.commit(IS_SHOW_SIDEBAR, true);
        }else {
          this.$router.push({
            path: '/login'
          })
        }
      },
    },
    watch: {
      infoList: {
        handler: function (newVal) {
          if(newVal.length === 0) {
            this.isShowNoData = true
          }else {
            this.isShowNoData = false
          }
        },
        deep: true
      }
    }
  }
</script>

<style>
</style>
