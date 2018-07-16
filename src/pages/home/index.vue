<template>
  <div>
    <!--页头-->
    <div class="issueHeaderNav">
      <img src="../../assets/images/small/logo_26.png" alt="" class="issueHeaderNavPic">
      <span>首页</span>
      <span @click="toissue" class="icon iconfont icon-gengduo1"></span>
    </div>
    <yd-button type="primary" style="margin-top: 12%;margin-bottom:2%;" @click.native="toLogin">登陆页面</yd-button>
    <yd-button type="primary" @click.native="toRegister">注册页面</yd-button>
    <yd-button type="primary" @click.native="toPageGeo">地图测试</yd-button>
    <yd-button type="primary" @click.native="toPagePickerTest">picker测试</yd-button>
    <yd-button type="primary" @click.native="toTest">测试页面</yd-button>
    <div class="searchBox">
      <div class="selectRegion">
        <div class="searchBtn">
          <i class="icon iconfont icon-sousuo"></i>
          <span class="sousuo">搜索</span>
        </div>
      </div>
    </div>
    <div class="orderOperation">
      <div class="banner">
        <img src="../../assets/images/small/banner@2x.png" alt="">
      </div>
      <div class="fastSendRob">
        <div class="sendOrder">
          <img src="../../assets/images/small/快速发单@2x.png" alt="">
          <span>快速发单</span>
        </div>
        <div class="already">
          <img src="../../assets/images/small/已抢订单@2x.png" alt="">
          <span>快速发单</span>
        </div>
      </div>
    </div>
    <ul class="order_box">
      <li class="order_list" @click="toissueDetails">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list" @click="toissueDetails">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list" @click="toissueDetails">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list" @click="toissueDetails">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list" @click="toissueDetails">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
    </ul>
    <div class="seeMore">查看更多</div>
  </div>

</template>
<script>
  export default{
    methods: {
      toLogin() {
        this.$router.push({path: '/login'})
      },
      toRegister() {
        this.$router.push({path: '/register'})
      },
      toPageGeo() {
        this.$router.push({path: '/geo'})
      },
      toPagePickerTest() {
        this.$router.push({path: '/picker'})
      },
      toTest(){
        this.$router.push({path: '/test'})
      }
    }
  }
</script>
<style>
</style>
