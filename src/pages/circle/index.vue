<template>
  <div>
    <div class="issueHeaderNav">
      <img src="../../assets/images/small/logo_26.png" alt="" class="issueHeaderNavPic">
      <span>圈子</span>
      <span @click="toPageIssue">发单</span>
    </div>
    <!--下拉刷新回调的提示-->
    <div class="downfixed havedownfixed">
      <p v-show="isShowMessage" class="download-tip">{{pullingMessage}}</p>
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
    </div>
    <!--<div class="Baseline">-->
      <!-- -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;没有更多的数据了-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
    <!--</div>-->
  </div>
</template>

<script>
  import Conversion from '@/utils/conversion'
  import {TABBAR_INDEX} from "../../store/mutation-types";

  export default {
    data() {
      return {
        infoList: [],
        pageSize: '10', // 订单数
        address: this.$app_store.getters.currentCity, // 地址
        startTimeStr: '', // 起始订单标识
        endTimeStr: '', // 结束订单标识
        key: '',// 关键词
        requestState: 0, // 获取最新 0, 获取历史1
        token: '0',
        pullingMessage: '',
        isShowMessage: false,
        loading: false,
        finished: false
      }
    },
    methods: {
      showTip() {
        let self = this;
        this.isShowMessage = true;
        setTimeout(() => {
          self.isShowMessage = false;
        }, 1500);
      },
      onLoad() {
        let self = this;
        this.requestInfoList(1, this.endTimeStr, function (result) {
          self.loading = false;
          if (result.length === 0) {
            // 列表无数据显示
            self.finished = true;
            return
          }
          self.endTimeStr = result[result.length - 1].time;
          // 原有数组与新数组连接
          self.infoList = self.infoList.concat(result);
        }, function (error) {
          self.loading = false;
          self.finished = true;
        });
      },
      requestInfoList(requestState, timeStr, successCallback, errorCallback) {
        let self = this;
        this.$Ice_OrderService.queryCircleOrderByApp("0", self.pageSize, self.address, self.key, requestState, timeStr,
          new IceCallback(
            function (result) {
              if (result.code !== 0) {
                self.message.Toast(self, 'error', result.msg, false);
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
          path: '/information/issueDetails',
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
          path: '/information/issue',
          query: {
            status: 1
          }
        })
      },
      dateConversion(time) {
        return Conversion.formatMsgTime(time)
      }
    }
  }
</script>

<style>
</style>
