<template>
  <div>
    <div class="issueHeaderNav">
      <div class="issueHeaderNavPic"><img src="../../assets/images/small/logo_26.png" alt=""></div>
      <div><span>发布订单</span></div>
      <div @click="toissue"><span>发布</span></div>
    </div>
    <ul class="liNumThree">
      <li class="inputNumOne">
        <span class="noStart">运单号</span>
        <input type="text" placeholder="请填写运单号">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>目的地</span>
        <input type="text" placeholder="请填写目的地">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>出发地</span>
        <input type="text" placeholder="请输入地址，可支持在地图上定位">
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
    <ul class="liNumThree">
      <li class="inputLong">
         <span class="noStart">车辆大小</span>
         <input type="text" placeholder="数量">
         <span>台</span>
      </li>
      <li class="inputShort">
        <input type="text" placeholder="长度">
        <span>米</span>
      </li>
      <li class="inputNumOne">
        <span class="noStart">车辆要求</span>
        <input type="text" placeholder="请选择车辆型号">
      </li>
      <li class="inputNumOne" >
        <span class="noStart">运输要求</span>
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
      </li>
      <span class="textRed size10">有保价不支持线上支付，不填默认为0</span>
      <li class="inputShorter">
        <span class="textRed">*</span>
        <span class="size10">代收货款</span>
        <input type="text">
        <span>元</span>
      </li>
      <span class="textRed size10">有代收不支持线上支付，不填默认为0</span>
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
        <span class="floatleft">订单总价</span><span class="floatright textRed size14 textBlod">￥2000元</span>
        <button class="releaseBtn">发 布</button>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
    }
</script>

<style>
</style>
