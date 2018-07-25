<template>
  <div>
     <div class="myReleaseBox">
       <div class="issueHeaderNav">
         <i class="icon iconfont icon-btngoback back"></i>
         <span>我的发布</span>
         <i class="icon iconfont icon-sousuo white" @click="toreleaseSearchpage"></i>
       </div>
       <div class="releaseAccept">发布订单88条，接受订单188条</div>
       <div class="releaseMenu">
         <span class="releaseState">发布</span>
         <span class="releaseState">抢单</span>
         <span class="releaseState activecircle">取货</span>
         <span class="releaseState">签收</span>
         <span class="releaseState">待评价</span>
         <span class="releaseState">全部</span>
       </div>
       <ul class="myReleaseList">
         <div class="releaseCompany">
           <div class="companyBox">
             <i class="icon iconfont icon-qiyexinxi"></i>
             <span>黄旺物流</span>
             <i class="icon iconfont icon-icon-test"></i>
           </div>
           <!--<span class="releasetext">发布</span>-->
           <!--待评价-->
           <!--<span class="releasetext">待评价</span>-->
           <!--签收-->
           <!--<span class="releasetext">签收</span>-->
           <!--抢单-->
           <!--<span class="releasetext">抢单</span>-->
           <!--取货-->
           <span class="releasetext">取货</span>
         </div>
         <li class="address marginBottom15">
           <div class="addressList"><span>长沙</span>-<span>广州</span></div>     <div class="addressTime"><span>2018-07-23</span> <span>09:45</span></div>
         </li>
         <li class="collection marginBottom15">
           <span>无代收，无保价</span>
         </li>
         <li class="specifications marginBottom15">
           <span>家具，9方</span>  <span>厢式货车,9.6</span>
         </li>
         <li class="pickGoods marginBottom15">
           <div>
             <span>取货时间：</span> <span>2018-07-22</span><span>11:00-14:00</span>
           </div>
           <span class="underPay">线下付款</span>
           <!--线上付款-->
           <!--<span class="underPay">线上付款</span>-->
         </li>
         <li class="goodsTotalPrice">
           <div></div>
           <div><span class="Totaltext">合计：</span><span class="yang">￥</span><span class="yangNum">2680</span></div>
         </li>
         <div class="cancelRefres">
           <!--我的发布-->
           <!--<div class="operationA">-->
             <!--<a class="colorsixsix">取消发布</a>-->
             <!--<a class="colorsixsix">刷新</a>-->
           <!--</div>-->
           <!--待评价-->
           <!--<div class="operationA">-->
             <!--<a class="colorsixsix" @click="toseeDispatch">查看调度</a>-->
             <!--<a class="colorsixsix">行程回放</a>-->
             <!--<a class="colorLightBlue">待评价</a>-->
           <!--</div>-->
           <!--签收-->
           <!--<div class="operationA">-->
             <!--<a class="colorsixsix" @click="toseeDispatch">查看调度</a>-->
             <!--<a class="colorsixsix">行程回放</a>-->
             <!--<a class="colorLightBlue">待评价</a>-->
           <!--</div>-->
           <!--<a class="releaseDetailsMoreIndex">更多-->
             <!--<div class="pickGoodsBtnIndex">-->
               <!--<a @click="topickGoodsPic">取货照片</a>-->
               <!--<a @click="toseeDispatch">查看调度</a>-->
             <!--</div>-->
           <!--</a>-->
           <!--抢单-->
           <!--<div class="operationA">-->
             <!--<a class="colorsixsix" @click="toseeDispatch">查看调度</a>-->
             <!--<a class="colorsixsix">接受</a>-->
             <!--<a class="colorsixsix">拒绝</a>-->
           <!--</div>-->
           <!--线上状态的取货-->
           <!--<div class="operationA">-->
             <!--<a class="colorsixsix" @click="toseeDispatch">查看调度</a>-->
             <!--<a class="colorsixsix" @click="topickGoodsPic">取货照片</a>-->
             <!--<a class="colorLightBlue" @click="topickGoodsCode">取货码</a>-->
           <!--</div>-->
           <!--全部-->
           <div class="operationA">
             <a class="colorsixsix" @click="toseeDispatch">查看调度</a>
             <a class="colorsixsix">行程回放</a>
             <a class="colorLightBlue" @click="toevaluate">评价</a>
           </div>
         </div>
       </ul>
       <ul class="myReleaseList">
         <div class="releaseCompany">
           <div class="companyBox">
             <i class="icon iconfont icon-qiyexinxi"></i>
             <span>黄旺物流</span>
             <i class="icon iconfont icon-icon-test"></i>
           </div>
           <!--<span class="releasetext">发布</span>-->
           <span class="releasetext">取货</span>
         </div>
         <li class="address marginBottom15">
           <div class="addressList"><span>长沙</span>-<span>广州</span></div>     <div class="addressTime"><span>2018-07-23</span> <span>09:45</span></div>
         </li>
         <li class="collection marginBottom15">
           <span>无代收，无保价</span>
         </li>
         <li class="specifications marginBottom15">
           <span>家具，9方</span>  <span>厢式货车,9.6</span>
         </li>
         <li class="pickGoods marginBottom15">
           <div>
             <span>取货时间：</span> <span>2018-07-22</span><span>11:00-14:00</span>
           </div>
           <!--<span class="underPay">线下付款</span>-->
           <!--线上付款-->
           <span class="underPay">线上付款</span>
         </li>
         <li class="goodsTotalPrice">
           <div></div>
           <div><span class="Totaltext">合计：</span><span class="yang">￥</span><span class="yangNum">2680</span></div>
         </li>
         <!--抢单-->
         <div class="cancelRefres">
           <!--<div class="operationA">-->
             <!--<a class="colorsixsix"  @click="toseeDispatch">查看调度</a>-->
             <!--<a class="colorsixsix">接受</a>-->
             <!--<a class="colorsixsix">拒绝</a>-->
           <!--</div>-->
           <!--线上状态的取货-->
           <div class="operationA">
             <a class="colorsixsix">付款</a>
             <a class="colorLightBlue" @click="topickGoodsCode">取货码</a>
           </div>
           <a class="releaseDetailsMoreIndex">更多
             <div class="pickGoodsBtnIndex">
             <a @click="topickGoodsPic">取货照片</a>
             <a @click="toseeDispatch">查看调度</a>
           </div>
           </a>
         </div>
       </ul>
     </div>
  </div>
</template>

<script>
    export default {
      data(){

      },
      methods:{
        toreleaseDetails(){
          this.$router.push({
            path: '/center/myRelease/releaseDetails'
          })
        },
        toreleaseSearchpage(){
          this.$router.push({
            path: '/center/myRelease/releaseSearch'
          })
        },
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

<style>

</style>
