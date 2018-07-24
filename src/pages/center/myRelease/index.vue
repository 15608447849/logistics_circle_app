<template>
  <div>
     <div class="myReleaseBox">
       <div class="issueHeaderNav">
         <i class="icon iconfont icon-btngoback back"></i>
         <span>我的发布</span>
         <i class="icon iconfont icon-sousuo white"></i>
       </div>
       <div class="releaseAccept">发布订单88条，接受订单188条</div>
       <div class="releaseMenu">
         <span class="releaseState activecircle">发布</span>
         <span class="releaseState">抢单</span>
         <span class="releaseState">取货</span>
         <span class="releaseState">签收</span>
         <span class="releaseState">待评价</span>
         <span class="releaseState">全部</span>
       </div>
       <ul class="myReleaseList" @click="toreleaseDetails">
         <div class="releaseCompany">
           <div class="companyBox">
             <i class="icon iconfont icon-qiyexinxi"></i>
             <span>黄旺物流</span>
             <i class="icon iconfont icon-icon-test"></i>
           </div>
           <span class="releasetext">发布</span>
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
         </li>
         <li class="goodsTotalPrice">
           <div></div>
           <div><span class="Totaltext">合计：</span><span class="yang">￥</span><span class="yangNum">2680</span></div>
         </li>
         <div class="cancelRefres">
           <div>
             <a class="canleRelease">取消发布</a>
             <a class="refreshRelease">刷新</a>
           </div>
         </div>
       </ul>
       <ul class="myReleaseList" @click="toreleaseDetails">
         <div class="releaseCompany">
           <div class="companyBox">
             <i class="icon iconfont icon-qiyexinxi"></i>
             <span>黄旺物流</span>
             <i class="icon iconfont icon-icon-test"></i>
           </div>
           <span class="releasetext">发布</span>
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
         </li>
         <li class="goodsTotalPrice">
           <div></div>
           <div><span class="Totaltext">合计：</span><span class="yang">￥</span><span class="yangNum">2680</span></div>
         </li>
         <div class="cancelRefres">
           <div>
             <a class="canleRelease">取消发布</a>
             <a class="refreshRelease">刷新</a>
           </div>
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
      }
    }
</script>

<style>

</style>
