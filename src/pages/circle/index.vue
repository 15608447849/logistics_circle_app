<template>
  <div id="mescroll" class="mescroll">
    <ul class="order_box">
      <li class="order_list" v-for="(item,index) in infoList" :key="index" @click="item">
        <div class="order_price"><span class="site">{{item.lineInfo}}</span><span class="time">1小时前</span></div>
        <div class="order_time"><span class="volume">{{item.goodsInfo}}</span><span class="car_type">{{item.vehicleRequire}}</span><span
          class="price">2000元</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import '../../assets/css/mescroll.min.css'
  import '../../assets/lib/mescroll.m'
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
        token: 'e140aa06136e4eb6937db4d31e5fe588'
      }
    },
    methods: {
      // 下拉刷新
      onPullingDown() {
        let self = this;
        this.requestInfoList(0,this.startTimeStr, function (result) {
          // 订单标识为空, 初次加载
          if (self.startTimeStr === '') self.infoList = [];
          if (result.length === 0) {
            return
          }
          // 原有数组与新数组连接
          self.startTimeStr = self.startTimeStr.concat(result);

          console.log(result)
        },function (error) {
          console.log(error)
          self.mescroll.endErr();
        });
        if(self.timeStr === '') {
          self.infoList = []
        }
        if(result.length === 0) {
          self.mescroll.endUpScroll(true)
        } else {
          self.infoList = self.infoList.concat(result);
        }
      },
      // 上推加载
      onPullingUp() {

      },
      requestInfoList(requestState,timeStr,successCallback,errorCallback) {
        let self = this;
        this.$Ice_OrderService.queryCircleOrderByApp(self.token,self.key,self.pageSize,self.address,requestState,timeStr,
          new IceCallback(
            function (result) {
              successCallback(result);
            },function (err) {
              errorCallback(err);
            }
          ))
      },
      itemClick(item) {
        // 跳转详情页面

      }
    },
    mounted() {
      var self = this;
      self.mescroll = new MeScroll("mescroll", {
        down: {
          use: true,
          callback: self.onPullingDown, // 下拉回调
        },
        up: {
          callback: self.onPullingUp, // 上拉回调
          //以下参数可删除,不配置
          isBounce: false, // 此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
          toTop: { //配置回到顶部按钮
            src: "../../assets/images/small/mescroll-totop.png", // 默认滚动到1000px显示,可配置offset修改
            duration: 500// 回到顶部的动画时长, 默认300ms
          },
          empty: { // 配置列表无任何数据的提示
            warpId: "dataList",
            icon: "../res/img/mescroll-empty.png",
            tip : "亲,暂无相关数据哦~" ,
          },
        }
      });
    }
  }
</script>

<style>
  /*mescroll滚动的区域*/
  .mescroll{
    position: fixed;
    top: 2rem;
    bottom: 1.5rem;
    height: auto;
  }
</style>
