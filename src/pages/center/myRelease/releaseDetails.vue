<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back"></i>
      <span>订单详情</span>
      <div></div>
    </div>
    <div class="releaseStateBox">
      <div class="releaseAndCollect ">
        <div>发布成功</div>
        <!--<div>交易已完成</div>-->
        <!--<div>签收</div>-->
        <!--<div>抢单</div>-->
        <!--<div>取货</div>-->
        <span>等待承运商接单，请耐心等待~ </span>
        <!--<span>您的订单已经确认签收，可以留下您的评价哟~</span>-->
        <!--<span>您的订单已签收，请与收货人确认是否签收~</span>-->
        <!--<span>您的订单已被抢单，请尽快与承运商联系~</span>-->
        <!--<span>司机已取货，您的货物正在运输中~</span>-->
      </div>
      <!--发布成功-->
      <i class="icon iconfont icon-fabu"></i>
      <!--交易已完成-->
      <!--<i class="icon iconfont icon-pingjia"></i>-->
      <!--签收-->
      <!--<i class="icon iconfont icon-liaoxiangqianshou"></i>-->
      <!--抢单 -->
      <!--<i class="icon iconfont icon-chenggong"></i>-->
      <!--取货-->
      <!--<i class="icon iconfont icon-quhuo"></i>-->
    </div>
    <div class="orderPadding10 backFF">
      <div class="logisticsNameBox">
        <img src="" alt="">
        <span class="logisticsName">黄旺物流</span>
      </div>
      <ul class="backFF">
        <li class="issueDetailsLiText">
          <span class="issueText">运单号</span><span>M1313116515</span>
        </li>
        <li class="issueDetailsLiText">
          <span class="issueText">目的地</span><span>广东省，广州市，荔湾区，荔湾大道8号</span>
        </li>
        <li class="issueDetailsLiText">
          <span class="issueText">出发地</span><span>湖南省，长沙市，长沙县，长沙大道10号</span>
        </li>
        <li class="issueDetailsLiText">
          <span class="issueText">货物信息</span><span class="textMargin-right10">1吨</span><span class="textMargin-right10">100件</span><span class="textMargin-right10">木托</span><span class="textMargin-right10">家具</span>
        </li>
        <li class="issueDetailsLiText">
          <span class="issueText">车辆信息</span><span class="textMargin-right10">1台</span><span class="textMargin-right10">9.6米</span><span class="textMargin-right10">厢式货车</span><span class="textMargin-right10">勿压</span>
        </li>
        <li class="issueDetailsLiText">
          <span class="issueText">费用信息</span><span class="textMargin-right10">无代收</span><span class="textMargin-right10">无保价</span><span class="textMargin-right10">线下支付</span><span>3000元整单</span>
        </li>
        <li class="issueDetailsLiText">
          <span class="issueText">时间信息</span><span class="textMargin-right10">2018-07-22 17:20-18:20</span><span>取货</span>
        </li>
        <li class="issueDetailsLiTextLi">
          <span class="issueText">联系方式</span><span class="textMargin-right10">18373270790</span><span>15773146800</span>
        </li>
      </ul>
    </div>
    <div class="lineHeight10"></div>
    <div class="orderPadding10 backFF ">
      <ul>
        <li class="issueDetailsLiText">
          <span class="Consignee">收货人</span>
          <span class="marginright3">小明</span>
          <span class="marginright3">18373270795</span>
          <span class="marginright3">送货-不上楼</span>
          <span class="marginright3">原件返回</span>
        </li>
        <li class="issueDetailsLiTextLi">
          <span class="arrivalTime">到货时间</span>
          <span>2018-07-22</span>
          <span>至</span>
          <span>2018-08-01</span>
        </li>
      </ul>
    </div>
    <div class="RobbingBox">
      <div class="Robbing floatleft" >
        <span class="floatleft rderCost">订单费用</span>
        <span class="textRed textBlod floatright rderCost">￥2018元</span>
      </div>
      <div class="floatleft margin_bottom140 ulWidth100">
        <ul class="ulWidth100">
          <li class="orderinfo">
            <span class="marginright95">订单号</span>
            <span>M8585858858858885</span>
          </li>
          <li class="orderinfo">
            <span class="marginright7">发单时间</span>
            <span>2018-02-12 00:15</span>
          </li>
          <li class="orderinfo">
            <span class="marginright7">抢单时间</span>
            <span>2018-01-29 00:15</span>
          </li>
          <li class="orderinfo">
            <span class="marginright7">取货时间</span>
            <span>2018-02-15 00:15</span>
          </li>
          <li class="orderinfo">
            <span class="marginright7">签收时间</span>
            <span>2018-02-15 00:15</span>
          </li>
        </ul>
      </div>
    </div>
    <!--发布成功****************-->
    <div class="orderOperationBtn">
      <!--<div  class="operationA">-->
        <!--<a class="colorsixnine">取消</a>-->
        <!--<a class="colorBlue">刷新</a>-->
      <!--</div>-->

    <!--交易已完成**********-->

      <!--<div  class="operationA">-->
        <!--<a class="colorsixnine" @click="toseeDispatch">查看调度</a>-->
        <!--<a class="colorsixnine">行程回放</a>-->
        <!--<a class="colorBlue" @click="toevaluate">评价</a>-->
      <!--</div>-->

    <!--抢单***************-->

      <!--<div class="operationA">-->
        <!--<a class="colorsixnine" @click="toseeDispatch">查看调度</a>-->
        <!--<a class="colorsixnine">接受</a>-->
        <!--<a class="colorsixnine">拒绝</a>-->
      <!--</div>-->

    <!--签收***************-->

        <!--<a class="releaseDetailsMore">更多-->
          <!--<div class="pickGoodsBtn">-->
            <!--<a @click="topickGoodsPic">取货照片</a>-->
            <!--<a @click="toseeDispatch">查看调度</a>-->

        <!--</a>-->
            <!--<div class="operationA">-->
              <!--<a class="colorsixnine">签收照片</a>-->
              <!--<a class="colorsixnine">行程回放</a>-->
              <!--<a class="colorBlue">确认签收</a>-->
            <!--</div>-->

      <!--</div>-->
      <!--取货******************************************************-->

        <a class="releaseDetailsMore">更多
          <div class="pickGoodsBtn">
            <a @click="topickGoodsPic">取货照片</a>
            <a @click="toseeDispatch">查看调度</a>
          </div>
        </a>
        <div class="operationA">
          <a class="colorsixnine" @click="topickGoodsCode">取货码</a>
          <a class="colorBlue">付款</a>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
      methods:{
        toseeDispatch(){
          this.$router.push({
            path: '/center/myRelease/seeDispatch'
          })
        },
        topickGoodsPic(){
          this.$router.push({
            path: '/center/myRelease/pickGoodsPic'
          })
        },
        topickGoodsCode(){
          this.$router.push({
            path: '/center/myRelease/pickGoodsCode'
          })
        },
        toevaluate(){
          this.$router.push({
            path: '/center/myRelease/evaluate'
          })
        },
      }
    }
</script>

<style scoped>

</style>
