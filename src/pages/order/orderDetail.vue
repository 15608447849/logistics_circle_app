<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>订单详情</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>

      <div class="releaseStateBox">
        <div class="releaseAndCollect" v-show="type === 0">
          <div v-show="detailInfo.tstatus === 0">发布成功</div>
          <span v-show="detailInfo.tstatus === 0">等待承运商接单，请耐心等待~ </span>

          <div v-show="detailInfo.tstatus === 1">抢单</div>
          <span v-show="detailInfo.tstatus === 1">您的订单已被抢单，请尽快与承运商联系~ </span>

          <div v-show="detailInfo.tstatus === 3">取货</div>
          <span v-show="detailInfo.tstatus === 3">司机已取货，您的货物正在运输中~</span>

          <div v-show="detailInfo.tstatus === 4">签收</div>
          <span v-show="detailInfo.tstatus === 4">您的订单已经确认签收，请与收货人确认是否签收~</span>

          <div v-show="detailInfo.tstatus === 7">已接单</div>
          <span v-show="detailInfo.tstatus === 7">您的订单已被抢单，请尽快与承运商联系~ </span>

          <div v-show="detailInfo.tstatus === 8">交易已完成</div>
          <span v-show="detailInfo.tstatus === 8">您的订单已经确认签收，可以留下您的评价哟~</span>

          <div v-show="detailInfo.tstatus === 20">订单已关闭</div>
          <span v-show="detailInfo.tstatus === 20">您的订单已关闭~</span>
        </div>

        <div class="releaseAndCollect" v-show="type === 1">

          <div v-show="detailInfo.tstatus === 1">抢单</div>
          <span v-show="detailInfo.tstatus === 1">您已抢单，请尽快与承运商联系~ </span>

          <div v-show="detailInfo.tstatus === 3">取货</div>
          <span v-show="detailInfo.tstatus === 3">司机已取货，您的货物正在运输中~</span>

          <div v-show="detailInfo.tstatus === 4">签收</div>
          <span v-show="detailInfo.tstatus === 4">您的订单已经确认签收，请与收货人确认是否签收~</span>

          <div v-show="detailInfo.tstatus === 7">已接单</div>
          <span v-show="detailInfo.tstatus === 7">您的订单已被抢单，请尽快与承运商联系~ </span>

          <div v-show="detailInfo.tstatus === 8">交易已完成</div>
          <span v-show="detailInfo.tstatus === 8">您的订单已经确认签收，可以留下您的评价哟~</span>

          <div v-show="detailInfo.tstatus === 20">订单已关闭</div>
          <span v-show="detailInfo.tstatus === 20">您的订单已关闭~</span>
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
          <span class="logisticsName"></span>
        </div>
        <ul class="backFF">
          <li class="issueDetailsLiText">
            <span class="issueText">运单号</span><span>{{detailInfo.billno}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">目的地</span><span>{{replaceAddress(detailInfo.arriarcext)}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">出发地</span><span>{{replaceAddress(detailInfo.startcext)}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">货物信息</span><span
            class="textMargin-right10">{{detailInfo.wm}}{{detailInfo.wmdictcn}}</span><span class="textMargin-right10">{{detailInfo.num}}{{detailInfo.numdictcn}}</span><span
            class="textMargin-right10">{{detailInfo.ctdictcn}}</span><span class="textMargin-right10"></span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">车辆信息</span><span class="textMargin-right10">{{detailInfo.vnum}}台</span><span
            class="textMargin-right10">{{detailInfo.vldictcn}}</span><span class="textMargin-right10">{{detailInfo.vtdictcn}}</span><span
            class="textMargin-right10">{{detailInfo.tndictcn}}</span>
          </li>
          <li class="issueDetailsLiText">
            <span class="issueText">费用信息</span><span class="textMargin-right10">{{detailInfo.redictcn}}</span><span
            class="textMargin-right10"></span><span
            class="textMargin-right10">{{detailInfo.ptdictcn}}</span><span></span>

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
            <span class="marginright3">{{detailInfo.dmdictcn}}</span>
            <!--<span class="marginright3">送货-不上楼</span>-->
            <!--<span class="marginright3">原件返回</span>-->
          </li>
          <li class="issueDetailsLiTextLi" v-show = "isDisplayTime">
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

        <div class="operationA" v-show="type === 0">
          <!--刷新-->
          <a v-show="detailInfo.tstatus === 0" class="colorsixnine" @click.stop="refreshOrder()">刷新</a>
          <!--取消-->
          <a v-show="detailInfo.tstatus === 0" class="colorsixnine" @click.stop="cancelOrder()">取消发布</a>
          <!--接受-->
          <a v-show="detailInfo.tstatus === 1" class="colorBlue" @click.stop="receiveOrder()">接受</a>
          <!--拒绝-->
          <a v-show="detailInfo.tstatus === 1" class="colorsixnine" @click.stop="refuseOrder()">拒绝</a>
          <!--取货照片-->
          <a v-show="detailInfo.tstatus === 3" class="colorsixsix" @click.stop="toPickGoodsPic()">取货照片</a>
          <!--取货码-->
          <a v-show="detailInfo.tstatus === 7" class="colorBlue" @click.stop ="toPickGoodsCode()">取货码</a>
          <a v-show="detailInfo.tstatus === 7 || detailInfo.tstatus === 6 "  class="colorsixnine"  @click.stop="toCompInfo()">查看调度</a>
          <!--查看行程-->
          <a v-show="detailInfo.tstatus === 3 || detailInfo.tstatus === 4 || detailInfo.tstatus === 6 || detailInfo.tstatus === 8" class="colorsixsix"  @click.stop="toSchedulePlayBack()">行程回放</a>
          <!--签收照片-->
          <a v-show="detailInfo.tstatus === 4" class="colorsixsix" @click.stop="toPickGoodsPic()">签收照片</a>
          <!--确认签收-->
          <a v-show="detailInfo.tstatus === 4" class="colorBlue" @click.stop="conReceipt()">确认签收</a>
          <!--评价-->
          <a v-show="detailInfo.tstatus === 6" @click.stop="toEvaluatePage()"  class="colorBlue">待评价</a>
          <!--重新发布-->
          <a v-show="detailInfo.tstatus === 20" @click.stop="repubOrder()"  class="colorBlue">重新发布</a>
        </div>
        <!--'1':'已抢单',-->
        <!--'3':'已取货',-->
        <!--'4':'已签收',-->
        <!--'6':'待评价',-->
        <!--'7':'抢单成功',-->
        <!--'8':'已完成'-->
        <div class="operationA" v-show="type === 1">
          <!--接受-->
          <a v-show="detailInfo.tstatus === 1" class="colorBlue" @click.stop="cancelOrder()">取消抢单</a>
          <!--取货照片-->
          <a v-show="detailInfo.tstatus === 3" class="colorsixsix" @click.stop="toPickGoodsPic()">取货照片</a>
          <!--取货码-->
          <a v-show="detailInfo.tstatus === 7 || detailInfo.tstatus === 6 "  class="colorsixsix"  @click.stop="toCompInfo()">查看调度</a>
          <!--查看行程-->
          <a v-show="detailInfo.tstatus === 4 || detailInfo.tstatus === 6 || detailInfo.tstatus === 8" class="colorsixsix"  @click.stop="toSchedulePlayBack()">行程回放</a>
          <!--签收照片-->
          <a v-show="detailInfo.tstatus === 4" class="colorsixsix" @click.stop="toPickGoodsPic()">签收照片</a>
          <!--评价-->
          <!--<a v-show="detailInfo.tstatus === 6" @click.stop="toEvaluatePage()"  class="colorBlue">待评价</a>-->
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
            <img src="../../assets/images/small/zhifubao1.png" alt="">
            <span>支付宝支付</span>
          </div>
          <i class="icon iconfont icon-zhengque" v-show="true"></i>
        </li>
        <li class="weixin">
          <div>
            <img src="../../assets/images/small/weixin1.png" alt="">
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
  import {alertContent} from "../../utils/enum";

  export default {
    data() {
      return {
        isDisplayTime:false,
        type: 0, // 0 发布 1 接受
        show2: false,
        detailInfo: {},
        userId: this.$app_store.getters.userId,
        order: {}
        // 0：已发布，1：已抢单,2：已中转, 3:已取货, 4:已签收, 5：纠纷中, 6:待评价 ,7:抢单成功  8：已完成  20:取消发布
        // 0：已发布，1：已抢单,2：已中转, 3:已取货, 4:已签收, 5：纠纷中, 6:待评价 ,7:抢单成功 8：已完成 20:取消发布
      }
    },
    mounted() {
      this.order = this.$route.params;
      this.type = this.order.type;
      this.getOrderInfo();
    },
    methods: {
      // 跳转企业详情
      toCompInfo() {
        this.$router.push({
          path: '/userInfo',
          query: {
            isYourCompInfo: false,
            id: this.detailInfo.revierid,
            status: 6
          }
        })
      },
      // 获取订单详情
      getOrderInfo() {
        let self = this;
        self.$Ice_myOrderService.getOrderInfo(self.order.orderno, self.userId,self.type, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.detailInfo = result.obj.orderifo;
              if(self.detailInfo.eaedatetime == '' || self.detailInfo.easdatetime == ''){
                self.isDisplayTime == true
              }
              console.log(self.detailInfo)
            } else {
              self.$vux.toast.text(result.msg, 'top');
            }
          },
          function (error) {
            self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
          }
        ))
      },
      // 确认签收
      conReceipt(){
        let self = this;
        this.message.showAlert(this, alertContent.RECEIVING)
          .then(() => {
            self.$Ice_myOrderService.conReceipt(self.order.orderno, self.userId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text(result.msg, 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      // 重新发布订单
      repubOrder(){
        let self = this;
        this.message.showAlert(this, alertContent.CANCEL_ORDER)
          .then(() => {
            self.$Ice_myOrderService.repubOrder(self.order.orderno, self.userId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.detailInfo.tstatus = 0;
                  self.$vux.toast.text('订单重新发布成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })

      },
      // 刷新订单
      refreshOrder() {
        let self = this;
        this.message.showAlert(this, alertContent.REFRESH_ORDER)
          .then(() => {
            self.$Ice_myOrderService.flushOrder(self.userId, self.order.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.$vux.toast.text('订单刷新成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      // 接受订单
      receiveOrder() {
        let self = this;
        this.message.showAlert(this, alertContent.RECEIVE_ORDER)
          .then(() => {
            self.$Ice_myOrderService.receiveOrder(self.userId, self.order.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.detailInfo.tstatus = 7;
                  self.$vux.toast.text('订单接受成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      // 拒绝订单
      refuseOrder() {
        let self = this;
        this.message.showAlert(this, alertContent.REFUSE_ORDER)
          .then(() => {
            self.$Ice_myOrderService.refuseOrder(self.userId, self.order.orderno, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.detailInfo.tstatus = 0;
                  self.$vux.toast.text('订单拒绝成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      // 取货照片
      toPickGoodsPic() {
        if(self.detailInfo === '0') {
          this.$vux.toast.text('暂无取货照片', 'top');
          return
        }
        this.$router.push({
          name: 'pickGoodsPic',
          params: this.detailInfo
        })
      },
      // 待评价
      toEvaluatePage() {
        this.detailInfo.pubcompid = this.order.pubcompid;
        this.detailInfo.revicompid = this.order.revicompid;
        this.$router.push({
          name: 'evaluateOrder',
          params: this.detailInfo
        })
      },
      // 取消抢单
      cancelOrder() {
        let self = this;
        this.message.showAlert(this, alertContent.CANCEL_ORDER)
          .then(() => {
            self.$Ice_myOrderService.cancelOrder(this.detailInfo.orderno,self.userId, new IceCallback(
              function (result) {
                if (result.code === 0) {
                  self.detailInfo.tstatus = 20;
                  self.$vux.toast.text('订单取消成功 !', 'top');
                } else {
                  self.$vux.toast.text(result.msg, 'top');
                }
              },
              function (error) {
                self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
              }
            ))
          })
          .catch(() => {

          })
      },
      // 行程回放
      toSchedulePlayBack() {
        this.$router.push({
          name: 'schedulePlayBack',
          params: this.detailInfo
        })
      },
      // 取货码
      toPickGoodsCode() {
        this.$router.push({
          name: 'pickGoodsCode',
          query: {
            id: this.order.orderno
          }
        })
      },
      fallback() {
        this.$router.go(-1)
      },
      replaceAddress(str) {
        if(str === undefined) {
          return
        }
        let address = str.replace(/#/g,",");
       return address
      }
    }
  }
</script>

<style scoped>

</style>
