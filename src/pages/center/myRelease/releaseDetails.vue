<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>订单详情</span>
      <div></div>
    </div>
    <div class="downfixed havedownfixed">
      <div class="releaseStateBox">
        <div class="releaseAndCollect ">

          <div v-show="detailInfo.ostatus === 0">发布成功</div>
          <span v-show="detailInfo.ostatus === 0">等待承运商接单，请耐心等待~ </span>

          <div v-show="detailInfo.ostatus === 1">抢单</div>
          <span v-show="detailInfo.ostatus === 1">您的订单已被抢单，请尽快与承运商联系~ </span>

          <div v-show="detailInfo.ostatus === 3">取货</div>
          <span v-show="detailInfo.ostatus === 3">司机已取货，您的货物正在运输中~</span>

          <div v-show="detailInfo.ostatus === 4">签收</div>
          <span v-show="detailInfo.ostatus === 4">您的订单已经确认签收，请与收货人确认是否签收~</span>

          <div v-show="detailInfo.ostatus === 8">交易已完成</div>
          <span v-show="detailInfo.ostatus === 8">您的订单已经确认签收，可以留下您的评价哟~</span>


          <!--<span>您的订单已签收，请与收货人确认是否签收~</span>-->
          <!--<span>您的订单已被抢单，请尽快与承运商联系~</span>-->

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
          <span class="logisticsName">{{detailInfo.compname}}</span>
        </div>
        <ul class="backFF">
          <li class="issueDetailsLiText">
            <span class="issueText">运单号</span><span>{{detailInfo.billno}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">目的地</span><span>{{detailInfo.arriarc}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">出发地</span><span>{{detailInfo.startc}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">货物信息</span><span
            class="textMargin-right10">{{detailInfo.wm}}{{detailInfo.wmdictc}}</span><span class="textMargin-right10">{{detailInfo.num}}{{detailInfo.numdictc}}</span><span
            class="textMargin-right10">{{detailInfo.ctdictc}}</span><span class="textMargin-right10"></span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">车辆信息</span><span class="textMargin-right10">{{detailInfo.vnum}}台</span><span
            class="textMargin-right10">{{detailInfo.vldictc}}</span><span class="textMargin-right10">{{detailInfo.vtdictc}}</span><span
            class="textMargin-right10">{{detailInfo.tndictc}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">费用信息</span><span class="textMargin-right10">{{detailInfo.redictc}}</span><span
            class="textMargin-right10"></span><span
            class="textMargin-right10">{{detailInfo.ptdictc}}</span><span></span>

          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">时间信息</span><span class="textMargin-right10">{{detailInfo.puedatetime}}</span><span>取货</span>

          </li>
          <li class="issueDetailsLiTextLi">
            <span class="issueText">联系方式</span><span class="textMargin-right10">{{detailInfo.phone1}}</span><span>{{detailInfo.phone2}}</span>

          </li>
        </ul>
      </div>
      <div class="lineHeight10"></div>
      <div class="orderPadding10 backFF ">
        <ul>
          <li class="issueDetailsLiText">
            <span class="Consignee">{{detailInfo.consignee}}</span>
            <span class="marginright3">{{detailInfo.consphone}}</span>
            <span class="marginright3">{{detailInfo.dmdictc}}</span>
            <!--<span class="marginright3">送货-不上楼</span>-->
            <!--<span class="marginright3">原件返回</span>-->
          </li>
          <li class="issueDetailsLiTextLi">
            <span class="arrivalTime">到货时间</span>
            <span>{{detailInfo.easdatetime}}</span>
            <span>至</span>
            <span>{{detailInfo.eaedatetime}}</span>
          </li>
        </ul>
      </div>
      <div class="RobbingBox">
        <div class="Robbing floatleft">
          <span class="floatleft rderCost">订单费用</span>
          <span class="textRed textBlod floatright rderCost">￥{{detailInfo.carriage}}元</span>
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
            <li class="orderinfo" v-if="detailInfo.revidatetime !== ''">
              <span class="marginright7">抢单时间</span>
              <span>{{detailInfo.revidatetime}}</span>
            </li>
            <li class="orderinfo" v-if="detailInfo.pusdatetime !== ''">
              <span class="marginright7">取货时间</span>
              <span>{{detailInfo.pusdatetime}}</span>
            </li>
            <li class="orderinfo" v-if="detailInfo.arridatetime !== ''">
              <span class="marginright7">签收时间</span>
              <span>{{detailInfo.arridatetime}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="orderOperationBtn">
        <!--发布成功****************-->
        <div class="operationA" v-show="ostatus === 0">
          <a class="colorsixnine" @click="cancelOrder">取消</a>
          <a class="colorBlue" @click="refreshOrder">刷新</a>
        </div>

        <!--抢单***************-->
        <div class="operationA" v-show="ostatus === 1">
          <a class="colorsixnine" @click="toseeDispatch">查看调度</a>
          <a class="colorsixnine" @click="receiveOrder">接受</a>
          <a class="colorsixnine" @click="refuseOrder">拒绝</a>
        </div>

        <!--取货******************************************************-->
        <div class="operationA" v-show="ostatus === 3">
          <a class="colorsixnine" @click="toPickGoodsCode">取货码</a>
          <!--<a class="colorBlue" @click="show2 = true">付款</a>-->
        </div>

        <!--签收***************-->
        <a class="releaseDetailsMore" v-show="ostatus === 4">更多
          <div class="pickGoodsBtn">
            <a @click="topickGoodsPic">取货照片</a>
            <a @click="toseeDispatch">查看调度</a>
          </div>
        </a>

        <!--交易已完成**********-->

        <div class="operationA" v-show="ostatus === 8">
          <a class="colorsixnine" @click="toseeDispatch">查看调度</a>
          <a class="colorsixnine">行程回放</a>
          <a class="colorBlue" @click="toevaluate">评价</a>
        </div>

      </div>
      <!--</a>-->
      <!--<div class="operationA">-->
      <!--<a class="colorsixnine">签收照片</a>-->
      <!--<a class="colorsixnine">行程回放</a>-->
      <!--<a class="colorBlue">确认签收</a>-->
      <!--</div>-->

      <!--</div>-->


      <!--<a class="releaseDetailsMore">更多-->
      <!--<div class="pickGoodsBtn">-->
      <!--<a @click="topickGoodsPic">取货照片</a>-->
      <!--<a @click="toseeDispatch">查看调度</a>-->
      <!--</div>-->
      <!--</a>-->
    </div>

    <yd-popup v-model="show2" position="bottom" height="52%" @click="show2 = false">
      <div class="closePayment">
        <i class="icon iconfont icon-guanbi1" @click="show2 = false"></i>
        <span>确认支付</span>
        <div></div>
      </div>
      <ul class="payNumMode">
        <li class="totalNum">
          ￥3000
        </li>
        <li class="zhifubao">
          <div>
            <img src="../../../assets/images/small/zhifubao1.png" alt="">
            <span>支付宝支付</span>
          </div>
          <i class="icon iconfont icon-zhengque" v-show="true"></i>
        </li>
        <li class="weixin">
          <div>
            <img src="../../../assets/images/small/weixin1.png" alt="">
            <span>微信支付</span>
          </div>
          <i class="icon iconfont icon-zhengque" v-show="false"></i>
        </li>
        <button class="yesPay" @click="show2 = false">确认支付</button>
      </ul>
    </yd-popup>
  </div>
</template>

<script>
  import {alertContent} from "../../../utils/enum";

  export default {
    data() {
      return {
        show2: false,
        detailInfo: {}
        // 0：已发布，1：已抢单,2：已中转, 3:已取货, 4:已签收, 5：纠纷中, 6:待评价 ,7:抢单成功  8：已完成  20:取消发布
        // 0：已发布，1：已抢单,2：已中转, 3:已取货, 4:已签收, 5：纠纷中, 6:待评价 ,7:抢单成功 8：已完成 20:取消发布
      }
    },
    mounted() {
      this.orderNo = this.$route.query.id
      this.getOrderInfo(this.orderNo);
    },
    methods: {
      // 跳转企业详情
      toComPInfo(item) {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: false,
            id: item.revierid,
            status: 6
          }
        })
      },
      // 获取订单详情
      getOrderInfo(orderNo) {
        let self = this;
        self.$Ice_myOrderService.getOrderInfo(orderNo, self.userId, new IceCallback(
          function (result) {

            if (result.code === 0) {
              self.detailInfo = result.obj.orderifo;
              console.log(self.detailInfo)
              // // 重新发布
              // self.releaseList[index].ostatus = '20';
              // self.$vux.toast.text('订单取消发布成功 !', 'top');
            } else {
              self.$vux.toast.text(result.msg, 'top');
            }
          },
          function (error) {
            self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
          }
        ))
      },
      // 订单取消发布
      cancelOrder(orderId) {
        let self = this;
        this.message.showAlert(this, alertContent.CANCEL_ORDER)
          .then(() => {
            self.$Ice_myOrderService.cancelOrder(orderId, 2, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.getOrderInfo(orderId);
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      // 刷新订单
      refreshOrder(orderId) {
        let self = this;
        this.message.showAlert(this, alertContent.REFRESH_ORDER)
          .then(() => {
            self.$Ice_myOrderService.flushOrder(self.userId, orderId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('订单刷新成功 !', 'top');
                  self.getOrderInfo(orderId);
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      // 拒绝订单
      refuseOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.REFUSE_ORDER)
          .then(() => {
            self.$Ice_myOrderService.refuseOrder(self.userId, item.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('订单拒绝成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      // 订单接受
      receiveOrder(item, index) {
        let self = this;
        this.message.showAlert(this, alertContent.RECEIVE_ORDER)
          .then(() => {
            self.$Ice_myOrderService.receiveOrder(self.userId, item.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('订单接受成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
              }
            ))
          })
          .catch(() => {

          })
      },
      fallback() {
        this.$router.go(-1)
      },
      replaceAddress(str) {
       return str.replace(/#/g,",")
      },
      toseeDispatch() {
        this.$router.push({
          path: '/center/myRelease/seeDispatch'
        })
      },
      topickGoodsPic() {
        this.$router.push({
          path: '/center/myRelease/pickGoodsPic'
        })
      },
      toPickGoodsCode() {
        this.$router.push({
          path: '/center/myRelease/pickGoodsCode',
          query: {
            qrCode: 'no12345678'
          }
        })
      },
      toevaluate() {
        this.$router.push({
          path: '/center/myRelease/evaluate'
        })
      },
    }
  }
</script>

<style scoped>

</style>
