<template>
  <div class="issueOrder">
    <div class="issueHeaderNav">
      <img src="../assets/images/small/logo_26.png" alt="" class="issueHeaderNavPic">
      <span>发布订单</span>
      <span></span>
    </div>
    <ul class="liNumThree">
      <li class="inputNumOne">
        <span class="waybillNum">运单号</span>
        <input v-model="OrderDetail.billno" type="text" placeholder="请填写运单号">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>目的地</span>
        <input type="text" v-model="OrderDetail.arriarc" placeholder="请填写目的地">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>出发地</span>
        <input type="text" placeholder="请输入地址，支持在地图上定位">
      </li>
    </ul>
    <ul class="liNumThree">
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>货物大小</span>
        <input type="text" placeholder="重量/体积">
      </li>
      <li class="inputShort">
        <input v-model="displayDic.disWmLabel" @click="showPicker('wm')" type="text">
      </li>
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>货物数量</span>
        <input type="text" placeholder="单位数量">
      </li>
      <li class="inputShort">
        <input v-model="displayDic.disNumLabel" @click="showPicker('num')" type="text" placeholder="单位">
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
        <span class="floatleft marginBottom60">订单总价</span><span
        class="floatright textRed size14 textBlod marginBottom60">￥2000元</span>
        <button class="releaseBtn">发 布</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        OrderDetail: new order.OrderICE(),
        dicData: {},// 选择器字典数据, store中获取
        displayDic: { // 用于展示用户
          disWmLabel: '',// 货物大小
          disCtLabel: '',// 货物类型
          disNumLabel: '',// 件数单位
        }
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      // 初始化页面数据
      initData() {
        // 数据从本地获取 方便测试
        this.dicData = JSON.parse(localStorage.getItem('unit'));
        console.log(this.dicData);
        // 设置默认类型字典选择, 默认取第一个
        this.OrderDetail.wmdictc = this.dicData.wm[0].value;
        this.displayDic.disWmLabel = this.dicData.wm[0].label;

        this.OrderDetail.ctdictc = this.dicData.ct[0].value;
        this.displayDic.disCtLabel = this.dicData.ct[0].label;

        this.OrderDetail.numdictc = this.dicData.num[0].value;
        this.displayDic.disNumLabel = this.dicData.num[0].label;


      },
      showPicker(category) {
        this.setPicker(this.dicData[category]);
        this.picker.show();
      },
      setPicker(pickerList) {
        this.picker = this.$createPicker({
          title: pickerList.remark,
          data: [pickerList],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            switch (pickerList[0].remark) {
              case '货物重量/体积单位':
                this.OrderDetail.wmdictc = selectedVal;
                this.displayDic.disWmLabel = selectedText;
                break;
              case '货物类型':
                this.OrderDetail.ctdictc = selectedVal;
                this.displayDic.disCtLabel = selectedText;
                break;
              case '件数单位':
                this.OrderDetail.numdictc = selectedVal;
                this.displayDic.disNumLabel = selectedText;
                break;
            }
          },
          onCancel: () => {

          }
        })
      },
    }
  }
</script>

<style>
</style>
