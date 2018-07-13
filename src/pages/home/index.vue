<template>
  <div>
    <yd-navbar title="首页"></yd-navbar>
    <yd-button type="primary" style="margin-top: 12%;margin-bottom:2%;" @click.native="toLogin">登陆页面</yd-button>
    <yd-button type="primary" @click.native="toRegister">注册页面</yd-button>
    <yd-button type="primary" @click.native="toPageGeo">地图测试</yd-button>
    <yd-button type="primary" @click.native="toPagePickerTest">picker测试</yd-button>
    <yd-button type="primary" @click.native="toTest">测试页面</yd-button>
    <!--首页轮播-->
    <div class="binnar">
       <div class="binnar_img">img</div>
       <!--<img src="" alt="">-->
    </div>
    <div class="content">
        <div class="order">
           <div class="bill">
             <div class="order_img"></div>
             <span>快速发单</span>
           </div>
           <div class="snag_order">
             <div class="order_img"></div>
             <span>已抢订单</span>
           </div>
        </div>
        <div class="bold_line"></div>
        <div class="order_box"><span class="good_order">----为你精选的好订单----</span></div>
      <!--订单列表-->
      <ul class="order_box">
        <li class="order_list" @click="toissueDetails">
          <div class="order_price"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
          <div class="order_time"><span class="volume">家具,9方</span><span class="car_type">厢式货车，9.6</span><span class="price">2000元</span></div>
        </li>
      </ul>
      <a class="more_orders">更多订单</a>
    </div>
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
