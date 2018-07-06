<template>
  <div>
    <yd-navbar title="首页"></yd-navbar>
    <yd-button type="primary" style="margin-top: 12%;margin-bottom:2%;" @click.native="toLogin">登陆页面</yd-button>
    <yd-button type="primary" @click.native="toRegister">注册页面</yd-button>
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
        <li class="order_list">
          <div class="order_price"><span class="site">长沙到广州</span><span class="price">2000元</span></div>
          <div class="order_time"><span class="volume">家具,9方</span><span class="car_type">厢式货车，9.6</span><span class="time">1小时前发布</span></div>
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
      }
    }
  }
</script>
<style>
  a{
    text-decoration : none;
  }
  ul{
    list-style:none
  }
  .binnar{
    width:100%;
    height:200px;
    background:rosybrown;
    z-index:1;
  }
  .content{
    display:block;
    padding: 0 10px 0 10px;
  }
  .order{
    display:block;
    width:100%;
    height:40px;
  }
  .order span{
    vertical-align: top;
    font-weight:bold;
    color:#00abea;
  }
  .bill{
    display:inline-block;
    margin-top:10px;
  }
  .snag_order{
    display:inline-block;
    margin-top:10px;
    margin-left:75px;
  }
  .order_img{
    display:inline-block;
    width:20px;
    height:20px;
    background:rebeccapurple;
  }
  .content .bold_line{
    width:100%;
    height:8px;
    background:gray;
  }
  .content .order_box{
    display:block;
    margin:0 auto;
  }
  .content .good_order{
    display:inline-block;
    margin-left:23%;
    text-align: center;
    color:orange;
  }
  /*列表样式*/
  ul .order_box{
    margin-top:15px;
  }
  ul .order_list{
    display:block;
    width:100%;
    margin:0;
    height:40px;
    border-bottom:1px solid gray;
  }
  .order_price{
    width:100%;
    height:20px;
    font-weight: bold;
  }
  .order_price .site{
    float:left;
  }
  .order_price .price{
    float:right;
    color:red;
  }
  .order_time{
    font-size:14px;
  }
  .order_time .volume{
    float:left;
    margin-right:13px;
  }
  .order_time .time{
    float:right;
  }
  .more_orders{
    display:block;
    text-align: center;
    font-size:16px;
    color:#00abea;
  }
</style>
