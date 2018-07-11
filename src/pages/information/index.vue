<template>
  <div>
    <div class="issueHeaderNav">
      <div class="issueHeaderNavPic"><img src="../../assets/images/small/logo_26.png" alt=""></div>
      <div><span>圈子订单</span></div>
      <div @click="toissue"><span>发单</span></div>
    </div>
    <div class="content">
        <ul class="order_box">
          <li class="order_list" @click="toissueDetails">
            <div class="order_price"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
            <div class="order_time"><span class="volume">家具,9方</span><span class="car_type">厢式货车，9.6</span><span class="price">2000元</span></div>
          </li>
          <li class="order_list" @click="toissueDetails">
            <div class="order_price"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
            <div class="order_time"><span class="volume">家具,9方</span><span class="car_type">厢式货车，9.6</span><span class="price">2000元</span></div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        infoList: [],
        pageSize: '10', // 订单数
        address: '', // 地址
        timeStr: '2018-07-10 11:56:30', // 订单标识
        key: '',// 关键词
        requestState: 0 // 获取最新 0, 获取历史1
      }
    },
    mounted() {
      console.log(this.$app_store.state.userToken);
      this.requestInfoList();
    },
    methods: {
      requestInfoList() {
        this.$Ice_OrderService.queryOrderByApp(
          this.$app_store.state.userToken,this.key,this.pageSize,this.address,this.requestState,this.timeStr,
          new IceCallback(
            function (result) {
              console.log("收到",result)
            },function (error) {
              console.log(error)
            }
          ));
      },
      toissue() {
        this.$router.push({path: '/information/issue'})
      },
      toissueDetails() {
        this.$router.push({path: '/information/issueDetails'})
      },
    }
  }
</script>
<style>

</style>
