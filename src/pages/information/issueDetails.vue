<template>
   <div>
     <div class="issueHeaderNav">
       <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
       <span>货源信息</span>
       <span></span>
     </div>

     <div class="orderPadding10">
       <div class="logisticsNameBox">
         <img src="../../assets/images/small/logo_26.png" alt="">
         <span class="logisticsName">{{detailInfo.puberCarrier}}</span>
       </div>
       <ul>
         <li class="issueDetailsLiText">
           <span class="issueText">运单号</span><span>{{detailInfo.billno}}</span>
         </li>
         <li class="issueDetailsLiText">
           <span class="issueText">出发地</span><span>{{detailInfo.startc}}</span>
         </li>
         <li class="issueDetailsLiText">
           <span class="issueText">目的地</span><span>{{detailInfo.arriarc}}</span>
         </li>
         <li class="issueDetailsLiText">
           <span class="issueText">货物信息</span><span class="textMargin-right10">{{detailInfo.wm}}{{detailInfo.wmdictc}}</span><span class="textMargin-right10">{{detailInfo.num}}{{detailInfo.numdictc}}</span><span class="textMargin-right10">{{detailInfo.ctdictc}}</span><span class="textMargin-right10"></span>
         </li>
         <li class="issueDetailsLiText">
           <span class="issueText">车辆信息</span><span class="textMargin-right10">{{detailInfo.vnum}}台</span><span class="textMargin-right10">{{detailInfo.vldictc}}</span><span class="textMargin-right10">{{detailInfo.vtdictc}}</span><span class="textMargin-right10">{{detailInfo.tndictc}}</span>
         </li>
         <li class="issueDetailsLiText">
           <span class="issueText">费用信息</span><span class="textMargin-right10">{{detailInfo.redictc}}</span><span class="textMargin-right10"></span><span class="textMargin-right10">{{detailInfo.ptdictc}}</span><span></span>
         </li>
         <li class="issueDetailsLiText">
           <span class="issueText">时间信息</span><span class="textMargin-right10">{{detailInfo.puedatetime}}</span><span>取货</span>
         </li>
         <li class="issueDetailsLiText">
           <span class="issueText">联系方式</span><span class="textMargin-right10">{{detailInfo.phone1}}</span><span>{{detailInfo.phone2}}</span>
         </li>
       </ul>
     </div>
     <div class="lineHeight10"></div>
     <div class="orderPadding10">
       <ul>
         <li class="issueDetailsLiText">
           <span class="Consignee">收货人</span>
           <span class="marginright3">{{detailInfo.consignee}}</span>
           <span class="marginright3">{{detailInfo.consphone}}</span>
           <span class="marginright3">{{detailInfo.dmdictc}}</span>
           <span class="marginright3"></span>
         </li>
         <li class="issueDetailsLiText ">
           <span class="arrivalTime">到货时间</span>
           <span>{{detailInfo.easdatetime}}</span>
           <span>至</span>
           <span>{{detailInfo.eaedatetime}}</span>
         </li>
       </ul>
     </div>
     <div class="RobbingBox">
           <div class="Robbing floatleft" >
             <span class="floatleft rderCost">订单费用</span>
             <span class="textRed textBlod floatright rderCost">{{detailInfo.price}}元</span>
           </div>
           <div class="floatleft margin_bottom140 ulWidth100">
             <ul class="ulWidth100">
               <li class="orderinfo">
                 <span class="marginright95">订单号</span>
                 <span>{{detailInfo.orderno}}</span>
               </li>
               <li class="orderinfo">
                 <span class="marginright7">发单时间</span>
                 <span>{{detailInfo.pubdatetime}}</span>
               </li>
               <li class="orderinfo"  v-if="detailInfo.revidatetime !== ''">
                 <span class="marginright7">抢单时间</span>
                 <span>{{detailInfo.revidatetime}}</span>
               </li>
               <li class="orderinfo"  v-if="detailInfo.pusdatetime !== ''">
                 <span class="marginright7">取货时间</span>
                 <span>{{detailInfo.pusdatetime}}</span>
               </li>
               <li class="orderinfo"  v-if="detailInfo.arridatetime !== ''">
                 <span class="marginright7">签收时间</span>
                 <span>{{detailInfo.arridatetime}}</span>
               </li>
             </ul>
           </div>
           <button class="nextStep" v-if="detailInfo.ostatus === 0" @click="setRobbingOrder">抢单</button>
     </div>
   </div>

</template>

<script>
  import { stringIsNotNull } from '@/utils/stringUtil'
  export default {
    data() {
      return {
        detailInfo: {},
        token: ''
      }
    },
    methods: {
      routerBack() {
        this.$router.go(-1)
      },
      setRobbingOrder() {
        let self = this;
        this.message.Toast(this,'loading','正在努力抢单中...',true);
        this.$Ice_OrderService.robbingOrder('0',this.$route.query.id,
          new IceCallback(
            function (result) {
              self.message.Toast(self,'correct','抢单成功',false);
              // 刷新订单数据
              self.getOrderDetailInfo()
            },
            function (error) {
              self.message.Toast(this,'loading',error,true);
              // 刷新订单数据
              self.getOrderDetailInfo()
            }
          )
        );
      },
      fallback() {
        this.$router.go(-1)
      },
      getOrderDetailInfo() {
        let self = this;
        const orderId = this.$route.query.id || '';
        this.$Ice_OrderService.getOrderDetail(orderId,'0',
          new IceCallback(
            function (result) {
              result = JSON.parse(result);
              if (result.code !== 0) {
                self.message.Toast(self,'error',result.msg,false);
              }
              self.detailInfo = result.obj;
            },
            function (error) {
              self.message.Toast(self,'error','订单详情获取失败, 请稍后重试',false);
              self.$router.go(-1)
            }
          )
        );
      }
    },
    mounted() {
      this.getOrderDetailInfo();
    }
  }
</script>

<style>

</style>
