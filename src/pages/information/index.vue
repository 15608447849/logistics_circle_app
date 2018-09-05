<template>
  <div>
    <div class="issueHeaderNav">
      <div class="width20">
        <img :src="isAvatar" alt="" @click="avatarClick" class="loginPicture floatleft" v-if="isAvatar !== ''">
        <img src="../../assets/images/small/moren.png" alt="" @click="avatarClick" class="loginPictureDefault floatleft" v-if="isAvatar === ''">
      </div>
      <div class="width60">
        <span>信息大厅</span>
      </div>
      <div class="width20">
        <span @click="toPageIssue" class="floatright">发布</span>
      </div>

      <!--<span @click="toPageIssue">发单</span>-->
    </div>

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
                class="carWeight"></span><span
                class="carWeight">{{item.vt}}</span><span class="carWeight">{{item.wm}}</span><span class="total_price">￥{{item.cost}}元</span>
              </div>
            </li>
          </ul>
        </van-list>
      </van-pull-refresh>
    </div>

      <!--下拉刷新回调的提示-->

  </div>
</template>
<script>
  import Conversion from '@/utils/conversion'
  import { page } from '@/utils/config'
  import {TABBAR_INDEX} from "../../store/mutation-types";
  import {IS_SHOW_SIDEBAR} from "../../store/mutation-types";

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
        infoList: [],
        pageSize: page.pageSize, // 每次获取订单条数
        address: this.$app_store.getters.currentCity, // 地址
        startTimeStr: '', // 起始订单标识
        endTimeStr: '', // 结束订单标识
        key: '',// 关键词
        requestState: 0, // 获取最新 0, 获取历史1
        oid: '0',
        pullingMessage: '',
        isShowMessage: false,
        loading: false,
        finished: false,
        isLoading: false // 下拉刷新
      }
    },
    activated() {
      this.$app_store.commit(TABBAR_INDEX,1);
      this.oid = this.$app_store.getters.userId || '0';
    },
    methods: {
      toPageIssue() {
        this.$router.push({
          path: '/information/releaseOrders',
          query: {
            status: 0
          }
        })
      },
      toPageIssueDetail(item) {
        this.$router.push({
          path: '/information/releaseDetails',
          query: {
            id: item.id,
            puberid: item.puberid,
            pubercompid: item.pubercompid,
            ostatus: item.ostatus
          }
        })
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
      showTip() {
        let self = this;
        this.isShowMessage = true;
        setTimeout(() => {
          self.isShowMessage = false;
        }, 1500);
      },
      // // 下拉刷新
      // onPullingDown() {
      //   let self = this;
      //   this.requestInfoList(0, this.startTimeStr, function (result) {
      //     self.mescroll.endSuccess();
      //
      //     if (result.length === 0) {
      //       self.pullingMessage = '列表数据已是最新';
      //       self.showTip();
      //       return
      //     }
      //     self.startTimeStr = result[0].time;
      //     self.pullingMessage = result.length + '条新发布订单';
      //     self.showTip();
      //     // 原有数组与新数组连接
      //     self.infoList = result.concat(self.infoList);
      //   }, function (error) {
      //     self.mescroll.endErr();
      //   });
      // },
      // 上推加载
      // onPullingUp() {
      //   let self = this;
      //   this.requestInfoList(1, this.endTimeStr, function (result) {
      //     // 隐藏上推加载状态;
      //     self.mescroll.endErr();
      //     // 初次加载
      //     if (self.endTimeStr === '') self.infoList = [];
      //     // 无数据, 关闭上推加载 提示用户
      //     if (result.length === 0) {
      //       return
      //     }
      //     // 初始化下拉刷新订单标识
      //     if (self.startTimeStr === '') self.startTimeStr = result[0].time;
      //     // 上推加载订单标识
      //     self.endTimeStr = result[result.length - 1].time;
      //     // 原有数组与新数组连接
      //     self.infoList = self.infoList.concat(result);
      //   }, function (error) {
      //     self.mescroll.endErr();
      //   });
      // },
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
      // 上推加载
      onLoad() {
        let self = this;
        this.requestInfoList(1, this.endTimeStr, function (result) {
          self.loading = false;
          if (result.length === 0) {
            self.finished = true;
            // if (self.infoList !== null && self.infoList.length > 0) {
            //   self.isShowNoData = false;
            // } else {
            //   self.isShowNoData = true;
            // }
          }else {
            self.startTimeStr = result[0].time;
            self.endTimeStr = result[result.length - 1].time;
            // 原有数组与新数组连接
            self.infoList = self.infoList.concat(result);
          }
        }, function (error) {
          // if (self.infoList !== null && self.infoList.length > 0) {
          //   self.isShowNoData = false;
          // } else {
          //   self.isShowNoData = true;
          // }
          self.loading = false;
          self.finished = true;
        });
      },
      requestInfoList(requestState, timeStr, successCallback, errorCallback) {
        let self = this;
        this.$Ice_OrderService.queryOrderByApp(self.oid, self.pageSize, self.address, self.key, requestState, timeStr,
          new IceCallback(
            function (result) {
              if (result.code !== 0) {
                self.$vux.toast.text(result.msg, 'top');
              }
              debugger
              if(result.obj.length === 0) {
                if (self.infoList !== null && self.infoList.length > 0) {
                  self.isShowNoData = false;
                } else {
                  self.isShowNoData = true;
                }
              }
              successCallback(result.obj);
            }, function (err) {

              errorCallback(err);
            }
          ))
      },
      itemClick(item) {
        // 跳转详情页面

      },
      dateConversion(time) {
        return Conversion.formatMsgTime(time)
      }
    },
    mounted() {
      this.$app_store.commit(TABBAR_INDEX, 1);
    }
  }
</script>
<style>

</style>
