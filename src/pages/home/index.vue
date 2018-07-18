<template>
  <div>
    <!--<yd-button size="large" type="danger" @click.native="show4 = true">右侧弹出</yd-button>-->
    <!--<yd-popup v-model="show4" position="right">-->
    <!--<yd-button type="danger" style="margin: 30px;" @click.native="show4 = false">Close Right Popup</yd-button>-->
    <!--</yd-popup>-->
    <!--页头-->
    <yd-button type="primary" style="margin-top: 12%;margin-bottom:2%;" @click.native="toLogin">登陆页面</yd-button>
    <yd-button type="primary" @click.native="toRegister">注册页面</yd-button>
    <yd-button type="primary" @click.native="toPageGeo">地图测试</yd-button>
    <yd-button type="primary" @click.native="toPagePickerTest">picker测试</yd-button>
    <yd-button type="primary" @click.native="toPageInfoTest">发布订单测试</yd-button>
    <yd-button type="primary" @click.native="toTest">测试页面</yd-button>
    <yd-button type="primary" @click.native="toCityTest">城市选择</yd-button>
    <yd-button type="primary" @click.native="toRePwdTest">找回密码</yd-button>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-jibenxinxi1"  size="" type="" @click.native="show3 = true"></i>
      <!--<img src="../../assets/images/small/logo_26.png" alt="" class="issueHeaderNavPic">-->
      <yd-popup v-model="show3" position="left" width="80%">
        <div style="background-color:#fff;">
          <p>
            我为什么喜欢在京东买东西，因为今天买明天就可以送到。我为什么每个商品的评价都一样，因为在京东买的东西太多太多了，
            导致积累了很多未评价的订单，所以我统一用段话作为评价内容。京东购物这么久，有买到很好的产品，也有买到比较坑的产品，
            如果我用这段话来评价，说明这款产品没问题，至少85分以上，而比较垃圾的产品，我绝对不会偷懒到复制粘贴评价，我绝对会用心的差评，
            这样其他消费者在购买的时候会作为参考，会影响该商品销量，而商家也会因此改进商品质牌质量非常好，与卖家描述的完全一致，
            非常满意，真的很喜欢。
          </p>
          <p style="color:#F00;margin-top: 10px;">
            呐~你也看到了，这只是一个普通弹窗，未设置内外边距。
          </p>
          <p style="text-align: center;">
            <yd-button @click.native="show1 = false">Close Center Popup</yd-button>
          </p>
        </div>
      </yd-popup>
      <span>首页</span>
      <span class="icon iconfont icon-gengduo1 dropdowngengduo">
        <ul class="dropdown" v-show="!isMember">
            <li>
              <i class="icon iconfont icon-erweima"></i>
              <span>我的二维码</span>
            </li>
            <li>
              <i class="icon iconfont icon-saoyisao"></i>
              <span>扫一扫</span>
            </li>
            <li>
              <i class="icon iconfont icon-iconset0206"></i>
              <span>邀请有礼</span>
            </li>
        </ul>
      </span>

    </div>

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
      <li class="order_list">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
      <li class="order_list">
        <div class="order_time"><span class="site">长沙</span><span class="site">—</span><span class="site">广州</span><span class="time">1小时前</span></div>
        <div class="order_price"><span class="carWeight">家具</span><span class="carWeight">9方</span><span class="carWeight">厢式货车</span><span class="carWeight">9.6</span><span class="total_price">￥2000元</span></div>
      </li>
    </ul>
    <div class="seeMore">查看更多</div>


  </div>

</template>
<script>
  export default{
    data(){
      return {
        show4: false,
        isMember:true,
        direction: '',
        tipStyle: ''
      }
    },
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
      },
      toPageInfoTest() {
        this.$router.push({path: '/infoTest'})
      },
      toCityTest() {
        this.$router.push({path: '/city'})
      },
      toRePwdTest() {
        this.$router.push({path: '/login/retrievePwd'})
      }
    }
  }
</script>
<style>
</style>
