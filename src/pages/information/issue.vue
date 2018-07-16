<template>
  <div class="issueOrder">
    <div class="issueHeaderNav">
      <img src="../../assets/images/small/logo_26.png" alt="" class="issueHeaderNavPic">
     <span>发布订单</span>
      <span @click="toissue">发布</span>
    </div>
    <ul class="liNumThreeArea">
      <li class="inputNumOne">
        <span class="waybillNum">运单号</span>
        <input v-model="OrderDetail.billno" type="text" placeholder="请填写运单号">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>目的地</span>
        <input type="text" v-model="OrderDetail.arriarc" placeholder="请填写目的地">
      </li>
      <li class="tworow">
        <span class="textRed">*</span>
        <span>出发地</span>
        <textarea rows="2" placeholder="请输入详细地址，精确到街道，社会区及门牌号，支持地图定位" class="textarea"></textarea>
        <i class="icon iconfont icon-dituzadian"></i>
      </li>
    </ul>
    <ul class="liNumThree">
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>货物大小</span>
        <input type="text" placeholder="重量/体积">
      </li>
      <li class="inputShort">
        <input type="text" placeholder="单位">
      </li>
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>货物数量</span>
        <input type="text" placeholder="单位数量">
      </li>
      <li class="inputShort">
        <input type="text" placeholder="单位">
      </li>
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>货物信息</span>
        <input type="text" placeholder="货物类别">
      </li>
      <li class="inputShort">
        <input type="text" placeholder="是否包装">
      </li>
    </ul>




    <ul class="liNumThreeCompany">
      <li class="inputLong">
        <span class="liNumThreeCompanySpan">车辆大小</span>
        <input type="text" placeholder="数量">
      </li>
      <span class="carNum">台</span>
      <li class="inputShort">
        <input type="text" placeholder="长度">
      </li>
      <span class="carNum">米</span>
      <li class="inputNumOneC">
        <span class="liNumThreeCompanySpan">车辆要求</span>
        <input type="text" placeholder="请选择车辆型号">
      </li>
      <li class="inputNumOneC">
        <span class="liNumThreeCompanySpan">运输要求</span>
        <input type="text" placeholder="请选择运输要求">
      </li>
    </ul>
    <ul class="liNumFour">
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>运输单价</span>
        <input type="text" placeholder="费用">
      </li>
      <li class="inputShort">
        <input type="text" placeholder="单">
      </li>
      <li class="inputShorter">
        <span class="textRed">*</span>
        <span class="size10">声明保价</span>
        <input type="text">
        <span>元</span>
        <span class="textRed size10f def">有保价不支持线上支付，不填默认为0</span>
      </li>

      <li class="inputShorter">
        <span class="textRed">*</span>
        <span class="size10">代收货款</span>
        <input type="text">
        <span>元</span>
        <span class="textRed size10 def">有代收不支持线上支付，不填默认为0</span>
      </li>

      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>付款方式</span>
        <input type="text" placeholder="请选择">
      </li>
    </ul>
    <ul class="liNumFour">
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span class="marginright13">收货人</span>
        <input type="text" placeholder="请输入联系人">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>联系方式</span>
        <input type="text" placeholder="请输入联系方式">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>取货方式</span>
        <input type="text" placeholder="请选择取货方式">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>回单要求</span>
        <input type="text" placeholder="请请选择回单要求">
      </li>
    </ul>
    <ul class="liNumTwo">
      <li class="inputNumOne">
        <span class="noStart">提货时间</span>
        <input type="text" placeholder="请选择提货时间">
      </li>
      <li class="inputNumOne">
        <span class="noStart">到货时间</span>
        <input type="text" placeholder="请选择到货时间">
      </li>
    </ul>
    <div>
      <div class="totalPrice">
        <span class="floatleft marginBottom60">订单总价</span><span class="floatright textRed size14 textBlod marginBottom60">￥2000元</span>
        <button class="releaseBtn">发 布</button>
      </div>
    </div>
  </div>
</template>
<script>
  import { stringIsNotNull } from '@/utils/stringUtil'
  export default {
    data() {
      return {
        OrderDetail: new order.OrderICE(),
        ctdictcList: [], // 货物类型
        padictcList: [],// 包装要求
        redictcList: [],// 回单要求
        ptdictcList: [],// 支付方式
        vldictcList: [],// 车长
        wmdictcList: [],// 货物重量/体积单位
        // 件数单位
        // 提货方式
        // 运输要求
        // 价格度量
        vtdictcList: []// 车型

      }
    },
    methods: {
      init(){
        // console.log(this.OrderDetail)
        console.log(localStorage.getItem('unit'));
      },
      // 获取字典信息

      getOrderDetailInfo() {
        const orderId = this.$route.query.id||'';
        this.$Ice_OrderService.releaseOrder(orderId,
          new IceCallback(
            function (result) {
              console.log(result)
            },
            function (error) {
              console.log(error)
            }
          )
        );
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style>
</style>
