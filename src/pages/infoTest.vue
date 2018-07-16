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
        <input type="text" v-model="OrderDetail.arriarc" placeholder="请填写目的地，支持在地图上定位">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>出发地</span>
        <input type="text" placeholder="请填写出发地，支持在地图上定位">
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
        <input type="text" v-model="displayDic.disCtLabel" @click="showPicker('ct')" placeholder="货物类别">
      </li>
      <li class="inputShort">
        <input type="text" v-model="displayDic.disPaLabel" @click="showPicker('pa')" placeholder="是否包装">
      </li>
    </ul>


    <ul class="liNumThreeCompany">
      <li class="inputLong">
        <span class="liNumThreeCompanySpan">车辆大小</span>
        <input v-model="this.OrderDetail.vnum" type="text" placeholder="数量">
      </li>
      <span class="carNum">台</span>
      <li class="inputShort">
        <input v-model="displayDic.disVlLabel"  @click="showPicker('vl')" type="text" placeholder="长度">
      </li>
      <span class="carNum">米</span>
      <li class="inputNumOneC">
        <span class="liNumThreeCompanySpan">车辆要求</span>
        <input v-model="displayDic.disVtLabel"  @click="showPicker('vt')" type="text" placeholder="请选择车辆型号">
      </li>
      <li class="inputNumOneC">
        <span class="liNumThreeCompanySpan">运输要求</span>
        <input v-model="displayDic.disTnLabel"  @click="showPicker('tn')" type="text" placeholder="请选择运输要求">
      </li>
    </ul>
    <ul class="liNumFour">
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>货物运费</span>
        <input type="text" placeholder="费用">
      </li>
      <li class="inputShort">
        <input v-model="displayDic.disWmLabel" type="text" placeholder="单">
      </li>
      <li class="inputShorter">
        <span class="textRed">*</span>
        <span class="size10">声明保价</span>
        <input type="text" v-model="OrderDetail.insureamt">
        <span>元</span>
        <span class="textRed size10f def">有保价不支持线上支付，不填默认为0</span>
      </li>

      <li class="inputShorter">
        <span class="textRed">*</span>
        <span class="size10">代收货款</span>
        <input v-model="OrderDetail.codamt" type="text">
        <span>元</span>
        <span class="textRed size10 def">有代收不支持线上支付，不填默认为0</span>
      </li>

      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>付款方式</span>
        <input v-model="displayDic.disPtLabel"  @click="showPicker('pt')" type="text" placeholder="请选择">
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
        <input v-model="displayDic.disDmLabel"  @click="showPicker('dm')" type="text" placeholder="请选择取货方式">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>回单要求</span>
        <input v-model="displayDic.disReLabel"  @click="showPicker('re')" type="text" placeholder="请请选择回单要求">
      </li>
    </ul>
    <ul class="liNumTwo">
      <li class="inputNumOne">
        <span class="noStart">提货时间</span>
        <input v-model="OrderDetail.pusdatetime" @click="showDatePicker('pusdatetime')" type="text" placeholder="预计提货时间起">
      </li>
      <li class="inputNumOne">
        <span class="noStart">提货结束时间</span>
        <input v-model="OrderDetail.puedatetime" @click="showDatePicker('puedatetime')" type="text" placeholder="预计提货时间止">
      </li>
    </ul>
    <ul class="liNumTwo">
      <li class="inputNumOne">
        <span class="noStart">到货时间</span>
        <input  v-model="OrderDetail.easdatetime" @click="showDatePicker('easdatetime')" type="text" placeholder="预计到达时间起">
      </li>
      <li class="inputNumOne">
        <span class="noStart">预计到达时间</span>
        <input v-model="OrderDetail.eaedatetime" @click="showDatePicker('eaedatetime')" type="text" placeholder="预计到达时间止">
      </li>
    </ul>
    <div>
      <div class="totalPrice">
        <span class="floatleft marginBottom60">订单总价</span><span
        class="floatright textRed size14 textBlod marginBottom60">￥2000元</span>
        <button class="releaseBtn" @click="releaseOrder">发 布</button>
      </div>
    </div>
  </div>
</template>
<script>
  /**
   * ct "货物类型"
   * dm "提货方式"
   * fplx "发票类型"
   * num "件数单位"
   * pa "包装要求"
   * pm "价格度量"
   * pt "支付方式"
   * qygm "企业规模"
   * qyxz "企业性质"
   * re "回单要求"
   * tn "运输要求"
   * vl "车长"
   * vt "车型"
   * wm 货物重量/体积单位
   */
  export default {
    data() {
      return {
        OrderDetail: new order.OrderICE(),
        dicData: {},// 选择器字典数据, store中获取
        selectDataPicker: '',
        displayDic: { // 用于展示用户
          disWmLabel: '',// 货物大小
          disCtLabel: '',// 货物类型
          disNumLabel: '',// 件数单位
          disPaLabel: '', // 是否包装
          disVlLabel: '',// 车长
          disVtLabel: '',// 车型
          disTnLabel: '',// 运输要求
          disPtLabel: '',// 支付方式
          disReLabel: '',// 回单要求
          disDmLabel: ''// 提货方式
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

        this.OrderDetail.padictc = this.dicData.pa[0].value;
        this.displayDic.disPaLabel = this.dicData.pa[0].label;

        this.OrderDetail.vldictc = this.dicData.vl[0].value;
        this.displayDic.disVlLabel = this.dicData.vl[0].label;

        this.OrderDetail.vtdictc = this.dicData.vt[0].value;
        this.displayDic.disVtLabel = this.dicData.vt[0].label;

        this.OrderDetail.tndictc = this.dicData.tn[0].value;
        this.displayDic.disTnLabel = this.dicData.tn[0].label;

        this.OrderDetail.ptdictc = this.dicData.pt[0].value;
        this.displayDic.disPtLabel = this.dicData.pt[0].label;

        this.OrderDetail.redictc = this.dicData.re[0].value;
        this.displayDic.disReLabel = this.dicData.re[0].label;

        this.OrderDetail.dmdictc = this.dicData.dm[0].value;
        this.displayDic.disDmLabel = this.dicData.dm[0].label;

        // 声明保价
        this.OrderDetail.insureamt = 0.0;
        // 代收货款
        this.OrderDetail.codamt = 0.0;
        // 车辆大小
        this.OrderDetail.vnum = null;
      },
      showPicker(category) {
        this.setPicker(this.dicData[category]);
        this.picker.show();
      },
      showDatePicker(category) {
        this.selectDataPicker = category;
        this.dateTimePicker = this.$createDatePicker({
          title: 'Date Time Picker',
          min: new Date(2008, 7, 8, 8, 0, 0),
          max: new Date(2025, 9, 20, 15, 0, 0),
          value: new Date(),
          columnCount: 6,
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
        this.dateTimePicker.show()
      },
      selectHandle(date, selectedVal, selectedText,type) {
        this.OrderDetail[this.selectDataPicker] = selectedVal[0]+'-'+selectedVal[1]+'-'+selectedVal[2]+' '+ selectedVal[3]+':'+ selectedVal[4]+':'+ selectedVal[5]
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
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
              case '包装要求':
                this.OrderDetail.padictc = selectedVal;
                this.displayDic.disPaLabel = selectedText;
                break;
              case '车长':
                this.OrderDetail.vldictc = selectedVal;
                this.displayDic.disVlLabel = selectedText;
                break;
              case '车型':
                this.OrderDetail.vtdictc = selectedVal;
                this.displayDic.disVtLabel = selectedText;
                break;
              case '运输要求':
                this.OrderDetail.tndictc = selectedVal;
                this.displayDic.disTnLabel = selectedText;
                break;
              case '支付方式':
                this.OrderDetail.ptdictc = selectedVal;
                this.displayDic.disPtLabel = selectedText;
                break;
              case '回单要求':
                this.OrderDetail.redictc = selectedVal;
                this.displayDic.disReLabel = selectedText;
                break;
              case '提货方式':
                this.OrderDetail.dmdictc = selectedVal;
                this.displayDic.disDmLabel = selectedText;
                break;
            }
          },
          onCancel: () => {

          }
        })
      },
      releaseOrder() {
        if(this.validator()) {
          this.$Ice_OrderService.releaseOrder('e140aa06136e4eb6937db4d31e5fe588', this.OrderDetail, new IceCallback(
            function (result) {
              if (result === 0) {
                // self.start1 = true;
                // self.$dialog.loading.close();
                // self.isFirstStepDis = false;
                self.notifyToast('已发送','success')
              } else {
                // 发送失败
                self.$dialog.loading.close();
                self.message.Toast(self,'error','订单发布失败',false);
              }
            },
            function (error) {
              self.$dialog.loading.close();
              self.message.Toast(self,'error','错误' + error,'error',false);
            }
          ));
        }
      },
      validator(){
        debugger
        // 运单号
        // if (this.verifyUtil.isNull(this.OrderDetail.billno)) {
        //   this.message.Toast(this,'warn','请填写运单号码',false);
        //   return false
        // }
        // 货物大小
        if (this.verifyUtil.isNull(this.OrderDetail.billno)) {
          this.message.Toast(this,'warn','请填写货物重量',false);
          return false
        }
        // 货物数量
        if (this.verifyUtil.isNull(this.OrderDetail.num)) {
          this.message.Toast(this,'warn','请填写货物重量',false);
          return false
        }
        // 车辆数量
        if (this.verifyUtil.isNull(this.OrderDetail.vnum)) {
          this.message.Toast(this,'warn','请填写车辆数量',false);
          return false
        }
        // 货物运费
        if (this.verifyUtil.isNull(this.OrderDetail.price)) {
          this.message.Toast(this,'warn','请填写货物运费',false);
          return false
        }
        // 收货人
        if (this.verifyUtil.isNull(this.OrderDetail.consignee)) {
          this.message.Toast(this,'warn','请填写收货人信息',false);
          return false
        }

        // 联系方式
        if (this.verifyUtil.isNull(this.OrderDetail.consphone)) {
          this.message.Toast(this,'warn','请填写联系方式',false);
          return false
        }


        // // 提货时间起
        // if (this.verifyUtil.isNull(this.OrderDetail.pusdatetime)) {
        //   this.message.Toast(this,'warn','请选择提货日期起',false);
        //   return false
        // }
        //
        // // 提货时间止
        // if (this.verifyUtil.isNull(this.OrderDetail.puedatetime)) {
        //   this.message.Toast(this,'warn','请选择提货日期止',false);
        //   return false
        // }
        // // 到货时间起
        // if (this.verifyUtil.isNull(this.OrderDetail.easdatetime)) {
        //   this.message.Toast(this,'warn','请选择到货日期止',false);
        //   return false
        // }
        // // 到货时间止
        // if (this.verifyUtil.isNull(this.OrderDetail.eaedatetime)) {
        //   this.message.Toast(this,'warn','请选择到货日期止',false);
        //   return false
        // }

      }
    }
  }
</script>

<style>
</style>
