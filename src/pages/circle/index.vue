<template>
  <div>
    <div class="issueHeaderNav">
      <img src="../../assets/images/small/logo_26.png" alt="" class="issueHeaderNavPic">
      <span>圈子</span>
      <span></span>
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
    <div class="Baseline">
      ---------------没有更多的数据了---------------
    </div>
  </div>
</template>

<script>
  import Conversion from '@/utils/conversion'

  export default {
    data() {
      return {
        infoList: [],
        pageSize: '20', // 订单数
        address: '', // 地址
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
        });
      },
      // 下拉刷新
      // onPullingDown() {
      // let self = this;
      // this.requestInfoList(0,this.startTimeStr, function (result) {
      //   self.mescroll.endSuccess();
      //   if (result.length === 0) {
      //     self.pullingMessage = '列表数据已是最新';
      //     self.showTip();
      //     return
      //   }
      //   self.startTimeStr = result[0].time;
      //   self.pullingMessage = result.length + '条新发布订单';
      //   self.showTip();
      //   // 原有数组与新数组连接
      //   self.infoList = result.concat(self.infoList);
      // },function (error) {
      //   self.mescroll.endErr();
      // });
      // },
      // // 上推加载
      // onPullingUp() {
      //   let self = this;
      //   this.requestInfoList(1,this.endTimeStr, function (result) {
      //     // 隐藏上推加载状态;
      //     self.mescroll.endSuccess();
      //     // 初次加载
      //     if (self.endTimeStr === '') self.infoList = [];
      //     // 无数据, 关闭上推加载 提示用户
      //     if (result.length === 0) {
      //       return
      //     }
      //     // 初始化下拉刷新订单标识
      //     if (self.startTimeStr === '') self.startTimeStr = result[0].time;
      //     // 上推加载订单标识
      //     self.endTimeStr = result[result.length-1].time;
      //     // 原有数组与新数组连接
      //     self.infoList = self.infoList.concat(result);
      //   },function (error) {
      //     self.mescroll.endErr();
      //   });
      // },
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
              console.log(err);
              errorCallback(err);
            }
          ))
      },
      toPageIssueDetail(item) {
        this.$router.push({
          path: '/information/issueDetails',
          query: {
            id: item.id,
            puberid: item.puberid
          }
        })
      },
      itemClick(item) {
        // 跳转详情页面

      },
      dateConversion(time) {
        return Conversion.formatMsgTime(time)
      }
    },
    activated() {

    }
  }
</script>

<style>
</style>
