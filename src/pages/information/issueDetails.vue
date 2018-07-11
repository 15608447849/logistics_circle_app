<template>
   <div>
     <yd-navbar title="货源信息" bgcolor="#1E90FF" color="#FFFFFF" fontsize="18px">
       <router-link to="#" slot="left">
         <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
       </router-link>
     </yd-navbar>
     <div class="orderPadding10">
       <div class="logisticsNameBox">
         <img src="../../assets/images/small/logo_26.png" alt="">
         <span class="logisticsName">黄旺物流</span>
       </div>
       <ul>
         <li class="marginBottom10">
           <span class="issueText">运单号</span><span>1121515524</span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">出发地</span><span>湖南省，长沙市，长沙县，长沙大道10号</span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">目的地</span><span>广东省，广州市，荔湾区，荔湾大道8号</span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">货物信息</span><span>1吨，</span><span>100件，</span><span>木托，</span><span>家具</span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">车辆信息</span><span>1台，</span><span>9.6米，</span><span>厢式货车，</span><span>勿压</span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">费用信息</span><span>无代收，</span><span>无保价，</span><span>线下支付3000元整单</span><span></span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">时间信息</span><span class="textMargin-right10">2018-6-27</span>  <span>13:00-18:00取货</span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">联系方式</span><span class="textMargin-right10">18373270790</span><span>18373270790</span>
         </li>
       </ul>
     </div>
     <div class="lineHeight10">     </div>
     <div class="orderPadding10">
       <ul>
         <li class="marginBottom10">
           <span class="issueText">收货人</span>
           <span class="textMargin-right10">老王</span>
           <span class="textMargin-right10">18373270790</span>
           <span class="textMargin-right10">送货-不上楼</span>
           <span class="textMargin-right10">原件返回</span>
         </li>
         <li class="marginBottom10">
           <span class="issueText">到货时间</span>
           <span>2018-05-03</span>
           <span>至</span>
           <span>2018-06-01</span>
         </li>
       </ul>
     </div>
     <div class="RobbingBox">
           <div class="Robbing floatleft" >
             <span class="floatleft rderCost">订单费用</span>
             <span class="textRed textBlod floatright rderCost">3000.00元</span>
           </div>
           <div class="floatleft margin_bottom140">
             <ul>
               <li class="marginBottom10">
                 <span class="issueText">订单号</span>
                 <span class="issueDetailsText">f12113213265656132</span>
               </li>
               <li class="marginBottom10">
                 <span class="issueText">发单时间</span>
                 <span class="issueDetailsText">2018-02-02</span>
                 <span class="issueDetailsText">09:02</span>
               </li>
               <li class="marginBottom10">
                 <span class="issueText">抢单时间：</span>
                 <span class="issueDetailsText">2018-02-02</span>
                 <span class="issueDetailsText">09:02</span>
               </li>
               <li class="marginBottom10">
                 <span class="issueText">取货时间</span>
                 <span class="issueDetailsText">2018-02-02</span>
                 <span class="issueDetailsText">09:02</span>
               </li>
               <li class="marginBottom10">
                 <span class="issueText">签收时间</span>
                 <span class="issueDetailsText">2018-02-02</span>
                 <span class="issueDetailsText">09:02</span>
               </li>
             </ul>
           </div>
           <button class="nextStep" @click="tologin">抢单</button>
     </div>
   </div>

</template>

<script>
    export default {
    }
</script>

<style>

</style>
