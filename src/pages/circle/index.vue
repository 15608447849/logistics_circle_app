<template>
  <div>
    <div class="issueHeaderNav">
      <img src="../../assets/images/small/logo_26.png" alt="" class="issueHeaderNavPic">
      <span>圈子</span>
      <span></span>
    </div>
    <!--<yd-navbar height=.8rem title="圈子" fontsize="0.36rem" color="#FFFFFF" bgcolor="#1E90FF"></yd-navbar>-->
    <!--下拉刷新回调的提示-->
    <p v-show="isShowMessage" class="download-tip">{{pullingMessage}}</p>
    <div id="mescroll" class="mescroll">
      <ul class="order_box">
        <li class="order_list"  @click="toPageIssueDetail(item)"  v-for="(item,index) in infoList" :key="index">
          <div class="order_time"><span class="site">{{item.startAddr}}</span><span class="site">—</span><span class="site">{{item.destAddr}}</span><span class="time">{{dateConversion(item.time)}}</span></div>
          <div class="order_price"><span class="carWeight">{{item.goodsType}}</span><span class="carWeight">{{item.wm}}</span><span class="carWeight">{{item.vt}}</span><span class="carWeight">{{item.vlen}}</span><span class="total_price">￥{{item.cost}}元</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/mescroll.min.css'
  import '../../assets/lib/mescroll.m'
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
        mescroll:null,
        pullingMessage: '',
        isShowMessage: false
      }
    },
    methods: {
      showTip() {
        let self = this;
        this.isShowMessage = true;
        setTimeout(() => {
          self.isShowMessage = false;
        },1500);
      },
      // 下拉刷新
      onPullingDown() {
        let self = this;
        this.requestInfoList(0,this.startTimeStr, function (result) {
          self.mescroll.endSuccess();
          if (result.length === 0) {
            self.pullingMessage = '列表数据已是最新';
            self.showTip();
            return
          }
          self.startTimeStr = result[0].time;
          self.pullingMessage = result.length + '条新发布订单';
          self.showTip();
          // 原有数组与新数组连接
          self.infoList = result.concat(self.infoList);
        },function (error) {
          self.mescroll.endErr();
        });
      },
      // 上推加载
      onPullingUp() {
        let self = this;
        this.requestInfoList(1,this.endTimeStr, function (result) {
          // 隐藏上推加载状态;
          self.mescroll.endSuccess();
          // 初次加载
          if (self.endTimeStr === '') self.infoList = [];
          // 无数据, 关闭上推加载 提示用户
          if (result.length === 0) {
            return
          }
          // 初始化下拉刷新订单标识
          if (self.startTimeStr === '') self.startTimeStr = result[0].time;
          // 上推加载订单标识
          self.endTimeStr = result[result.length-1].time;
          // 原有数组与新数组连接
          self.infoList = self.infoList.concat(result);
        },function (error) {
          self.mescroll.endErr();
        });
      },
      requestInfoList(requestState,timeStr,successCallback,errorCallback) {
        let self = this;
        // this.$Ice_OrderService.queryOrderByApp(self.token,self.key,self.pageSize,self.address,requestState,timeStr,
        this.$Ice_OrderService.queryCircleOrderByApp("0",self.pageSize,self.address,self.key,requestState,timeStr,
          new IceCallback(
            function (result) {
              result = JSON.parse(result);
              if(result.code !== 0) {
                self.message.Toast(self,'error',result.msg,false);
                return
              }
              successCallback(result.obj);
            },function (err) {
              console.log(err);
              errorCallback(err);
            }
          ))
      },
      toPageIssueDetail(item) {
        this.$router.push({
          path: '/information/issueDetails',
          query: {
            id: item.id
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
    mounted() {
      var self = this;
      self.mescroll = new MeScroll("mescroll", {
        down: {
          auto: false,
          callback: self.onPullingDown, // 下拉回调
        },
        up: {
          callback: self.onPullingUp, // 上拉回调
          //以下参数可删除,不配置
          isBounce: false, // 此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
          toTop: { //配置回到顶部按钮
            src: "../../assets/images/small/totop.png", // 默认滚动到1000px显示,可配置offset修改
            duration: 500// 回到顶部的动画时长, 默认300ms
          },
          empty: { // 配置列表无任何数据的提示
            // warpId: "dataList",
            // icon: "../res/img/mescroll-empty.png",
            // tip : "亲,暂无相关数据哦~" ,
          },
        }
      });
    }
  }
</script>

<style>
</style>
