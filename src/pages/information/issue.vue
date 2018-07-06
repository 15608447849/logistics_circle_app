<template>
  <div class="content">
    <!--头部-->
    <div class="header">
      <span class="goto"><</span>
      <span>发布订单</span>
      <span>发布</span>
    </div>
    <!--发布订单填写区-->
    <ul class="locationList">
      <li class="WaybillCode">
        <span class="start">*</span><span class="issueText">运单号：</span><input type="text" placeholder="点击输入" class="longInput">
      </li>
      <li class="departure">
        <span class="start">*</span><span class="issueText">目的地：</span><input type="text" placeholder="点击输入" class="longInput">
      </li>
      <li class="destination">
        <span class="start">*</span><span class="issueText">目的地：</span><input type="text" placeholder="点击输入" class="longInput">
      </li>
    </ul>
    <ul class="cargoList">
      <li>
        <span class="start">*</span><span class="issueText">货物重量：</span>
        <input type="text"  class="shortInput" placeholder="点击输入"><span>kg</span>
        <span class="start">*</span><span class="issueText">货物体积：</span>
        <input type="text" class="shortInput" placeholder="点击输入"><span>m³</span>
      </li>
      <li>
        <span class="start">*</span><span class="issueText">货物件数：</span><input type="text" class="shortInput" placeholder="点击输入">
        <span class="issueText">货物包装：</span><input type="text" class="shortInput" placeholder="点击输入">
      </li>
      <li>
        <span class="issueText">货物类型：</span><input type="text" class="shortInput" placeholder="点击输入">
      </li>
    </ul>
    <ul>
      <li>
         <span class="issueText">车型：</span><input type="text" placeholder="点击输入" class="shortInput">
         <span class="issueText">车长：</span><input type="text" placeholder="点击输入">
      </li>
      <li>
         <span class="issueText">车辆：</span> <input type="text" placeholder="点击输入" class="shortInput">
         <span class="issueText">说明：</span> <input type="text" placeholder="点击输入" class="shortInput">
      </li>
    </ul>
    <ul>
      <li>
      <span class="issueText">声明保价：</span><input type="text" class="shortInput"><span class="issueText">代收货款：</span> <input type="text" placeholder="点击输入" class="shortInput">
      </li>
      <li>
        <span class="start">*</span><span class="issueText">付款方式：</span><input type="text" placeholder="点击输入" class="shortInput"><span class="start">*</span><span class="issueText">订单费用：</span><input
        type="text" placeholder="点击输入" class="shortInput">
      </li>
    </ul>
    <ul>
      <li>
      <span class="start">*</span><span class="issueText">收货人：</span><input type="text" placeholder="点击输入" class="shortInput"><span class="start">*</span><span class="issueText">联系方式：</span><input type="text" placeholder="点击输入" class="shortInput">
      <span class="start">*</span><span class="issueText">取货方式：</span><input type="text" placeholder="点击输入" class="shortInput"><span class="start">*</span><span class="issueText">回单要求：</span><input type="text" placeholder="点击输入" class="shortInput">
      </li>
    </ul>
    <ul>
      <li>
        <span class="issueText">提货时间：</span> <input type="text" placeholder="点击输入" class="longInput">

      </li>
      <li>
        <span class="issueText">到货时间：</span> <input type="text" placeholder="点击输入" class="longInput">
      </li>
    </ul>
    <span>订单费用</span>  <span>3000元</span>
    <button>发布</button>
  </div>
</template>
<script>
    export default {
    }
</script>

<style>
  /*头部*/
   .content .header{
     display:flex;
     width:100%;
     justify-content:space-between;
     height:25px;
     border-bottom:2px solid gray;
     margin-bottom:8px;
     padding: 0px 5px 0px 5px;
   }
  .header .goto{
    font-size:18px;
  }
  <!--发布订单填写区-->
  ul{
    display:block;
    width:100%;
    height:100px;
    border-bottom:5px solid gray;
    list-style:none;
  }
  ul li .issueText{
    width:60px;
  }
</style>
