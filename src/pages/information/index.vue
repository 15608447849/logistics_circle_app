<template>
  <div>
    <div class="issueHeaderNav">
      <div class="issueHeaderNavPic"><img src="../../assets/images/small/logo_26.png" alt=""></div>
      <div><span>圈子订单</span></div>
      <div @click="toissue"><span>发单</span></div>
    </div>
    <!--<yd-pullrefresh :callback="loadList">-->

    <!--</yd-pullrefresh>-->
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
        infoList: []
      }
    },
    mounted() {
      console.log(this.$app_store.state.userToken);
      this.requestInfoList();
    },
    methods: {
      requestInfoList() {

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
