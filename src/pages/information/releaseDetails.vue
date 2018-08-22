<template>
   <div>
     <div class="issueHeaderLog">
       <div class="width20">
         <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
       </div>
       <div class="width60">
         <span>货源信息</span>
       </div>
       <div class="width20">
         <span class="alignCenter floatright"></span>
       </div>
     </div>
     <div class="issueDetailsBox">
       <div class="backgroundwhite dingdan">
         <div class="logisticsNameBox">
           <img :src="compInfoA.logoPath" v-if="compInfoA.logoPath !== ''">
           <img src="../../assets/images/small/moren.png" alt="" class="loginPictureDefaultUser" v-if="compInfoA.logoPath === ''">
           <span class="logisticsName">{{subStr(detailInfo.puberCarrier,12)}}</span>
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
           <li class="issueDetailsLiText" v-if="detailInfo.puedatetime !== ''">
             <span class="issueText">时间信息</span><span class="textMargin-right10">{{detailInfo.puedatetime}}</span><span>取货</span>
           </li>
           <li class="issueDetailsLiText" v-if="detailInfo.phone1 === 0 && detailInfo.phone2 === 0">
             <span class="issueText">联系方式</span><span class="textMargin-right10"> {{detailInfo.phone1}}</span><span>{{detailInfo.phone2}}</span>
           </li>
         </ul>
       </div>
       <div class="orderPadding10">
         <ul class="backgroundwhite paddingTop3 paddingBottom2">
           <li class="issueDetailsLiTextNo paddingLeft21">
             <span class="Consignee">收货人</span>
             <span class="marginright3">{{detailInfo.consignee}}</span>
             <span class="marginright3">{{subStrPhone(detailInfo.consphone)}}</span>
             <span class="marginright3">{{detailInfo.dmdictc}}</span>
             <span class="marginright3"></span>
           </li>
           <li class="issueDetailsLiText height6 paddingLeft21" v-if="detailInfo.easdatetime !== ''">
             <div class="arrivalTimeRel">到货时间</div>
             <span class="heightAuto">
               <span>{{detailInfo.easdatetime}}</span>
               <span>至</span>
               <span>{{detailInfo.eaedatetime}}</span>
             </span>

           </li>
         </ul>
       </div>
       <div class="RobbingBox">
         <div class="Robbing floatleft" >
           <span class="floatleft rderCost">订单费用</span>
           <span class="yang">￥</span><span class="orderTotal textRed textBlod">{{detailInfo.carriage}}</span>
         </div>
         <div class="floatleft ulWidth100">
           <ul class="ulWidth100">
             <li class="orderinfo">
               <span class="issueTextOrder">订单号</span>
               <span class="Consignee">{{detailInfo.orderno}}</span>
             </li>
             <li class="orderinfo">
               <span class="issueTextOrder">发单时间</span>
               <span>{{detailInfo.pubdatetime}}</span>
             </li>
             <li class="orderinfo"  v-if="detailInfo.revidatetime !== ''">
               <span class="issueTextOrder">抢单时间</span>
               <span>{{detailInfo.revidatetime}}</span>
             </li>
             <li class="orderinfo"  v-if="detailInfo.pusdatetime !== ''">
               <span class="issueTextOrder">取货时间</span>
               <span>{{detailInfo.pusdatetime}}</span>
             </li>
             <li class="orderinfo"  v-if="detailInfo.arridatetime !== ''">
               <span class="issueTextOrder">签收时间</span>
               <span>{{detailInfo.arridatetime}}</span>
             </li>
           </ul>

         </div>
       </div>
       <div class="RobbingOrderWhite" v-if="detailInfo.ostatus === 0 && isRob === true">
         <button class="robOrderBtn" @click="setRobbingOrder">抢单</button>
       </div>
     </div>

   </div>
</template>

<script>
  import { Toast } from 'vant';
  import { subString } from '../../utils/stringUtil'
  export default {
    data() {
      return {
        detailInfo: {},
        isRob: false,
        token: '',
        orderId: '',
        puberId: '',
        pubercompid: '',
        compInfo: null,
        compInfoA: {},
        ostatus: 0,
      }
    },
    methods: {
      routerBack() {
        this.$router.go(-1)
      },
      setRobbingOrder() {
        let self = this;
        // 当前企业未认证无法抢单
        if(this.compInfo.verify === 0) {
          this.$router.push({
            path: '/userInfo',
            query: {
              isYourCompInfo: true,    //row.hid为变量
            }
          });
          return
        }
        Toast.loading({
          mask: true,
          message: '抢单中...'
        });
        setTimeout(()=>{
          // this.message.Toast(this,'loading','正在努力抢单中...',true);
          this.$Ice_OrderService.robbingOrder(this.$app_store.getters.userId,this.$route.query.id,this.detailInfo.pubercompid,
            new IceCallback(
              function (result) {
                Toast.clear();
                if(result.code === 0) {
                  Toast.success(result.msg);
                } else {
                  Toast.fail(result.msg);
                }
                self.$router.go(-1);
              },
              function (error) {
                Toast.clear();
                Toast.fail('服务器连接失败, 请稍后重试!');
                // 刷新订单数据
                self.getOrderDetailInfo()
              }
            )
          );
        },1000);

      },
      fallback() {
        this.$router.go(-1)
      },
      getOrderDetailInfo() {
        let self = this;
        this.$Ice_OrderService.getOrderDetail(this.orderId,this.puberId,this.pubercompid,
          new IceCallback(
            function (result) {
              if (result.code !== 0) {
                self.$vux.toast.text(result.msg, 'top');
              }
              self.detailInfo = result.obj;
              self.detailInfo.ostatus =  Number(self.ostatus);
              console.log(self.detailInfo.phone1)
              console.log(self.detailInfo.phone2)
            },
            function (error) {
              self.$vux.toast.text('订单详情获取失败, 请稍后重试', 'top');
            }
          )
        );
      },
      queryCompByCid(compId) {
        let self = this;
        this.$Ice_CompService.querygetCompByCid(compId,
          new IceCallback(
            function (result) {
              if(result.code === -1) {
                return
              }
              self.compInfoA = result.obj;
            },
            function (error) {
              self.$vux.toast.text('企业信息获取失败!', 'top');
            }
          )
        );
      },
      subStrPhone(tel) {
        return  tel.toString().substr(0, 3) + '****' + tel.toString().substr(7);
      },
      subStr(str,len) {
        return subString(str, len)
      }

    },
    activated() {
      this.orderId = this.$route.query.id || '';
      this.puberId = this.$route.query.puberid || '';
      this.pubercompid = this.$route.query.pubercompid || '';
      this.ostatus = this.$route.query.ostatus || '';
      if(this.$app_store.state.compInfo!== undefined) {
        this.compInfo = JSON.parse(this.$app_store.state.compInfo);
        if(this.pubercompid !== this.compInfo.compid) {
          // 当前本人订单
          this.isRob = true
        }
      }
      // 根据发布人企业id 获取企业认证信息
      this.queryCompByCid(this.pubercompid);
      this.getOrderDetailInfo();
    }
  }
</script>

<style>

</style>
