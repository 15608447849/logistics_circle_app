<template>
  <div class="issueOrder">
    <div class="issueHeaderNav">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>重新发布订单</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>


    </div>
    <ul class="liNumThree margintop80">
      <li class="inputNumOne needBorder">
        <span class="waybillNum">运单号</span>
        <input v-model="OrderDetail.billno" type="text" placeholder="请填写运单号" style="width:6.25rem;">
      </li>
      <li class="tworow needBorder" @click="toPageGeo(2)" disabled="disabled">
        <span class="textRed">*</span>
        <span>目的地</span>
        <textarea v-model="arriarc" rows="2" placeholder="请输入详细地址，精确到街道，社会区及门牌号，支持地图定位" class="textarea"></textarea>
        <i class="icon iconfont icon-dituzadian iblue"></i>
      </li>
      <li class="tworow" @click="toPageGeo(1)">
        <span class="textRed">*</span>
        <span>出发地</span>
        <textarea v-model="startc" rows="2" placeholder="请输入详细地址，精确到街道，社会区及门牌号，支持地图定位" class="textarea"></textarea>
        <i class="icon iconfont icon-dituzadian iblue"></i>
      </li>
    </ul>
    <ul class="liNumThree" disabled="disabled">
      <li class="inputLong needBorder">
        <span class="textRed">*</span>
        <span>货物大小</span>
        <input v-model="OrderDetail.wm" type="text" placeholder="重量/体积">
      </li>
      <li class="inputShort needBorder">
        <input v-model="displayDic.disWmLabel" @click="showPicker('wm')" type="text">
      </li>
      <li class="inputLong needBorder">
        <span class="textRed">*</span>
        <span>货物数量</span>
        <input v-model="OrderDetail.num" type="text" placeholder="货物数量">
      </li>
      <li class="inputShort needBorder">
        <input v-model="displayDic.disNumLabel" @click="showPicker('num')" type="text" placeholder="单位"
               readonly="readonly">
      </li>
      <li class="inputLong">
        <span class="textRed">*</span>
        <span>货物信息</span>
        <input type="text" v-model="displayDic.disCtLabel" @click="showPicker('ct')" placeholder="货物类别"
               readonly="readonly">
      </li>
      <li class="inputShort">
        <input type="text" v-model="displayDic.disPaLabel" @click="showPicker('pa')" placeholder="是否包装"
               readonly="readonly">
      </li>
    </ul>
    <ul class="liNumThreeCompany" disabled="disabled">
      <li class="inputLong needBorder">
        <span class="liNumThreeCompanySpan">车辆大小</span>
        <input v-model="OrderDetail.vnum" type="number" placeholder="数量">
      </li>
      <span class="carNum">台</span>
      <li class="inputShort needBorder">
        <input v-model="displayDic.disVlLabel" @click="showPicker('vl')" type="text" placeholder="长度"
               readonly="readonly">
      </li>
      <span class="carNum">米</span>
      <li class="inputNumOneC needBorder">
        <span class="liNumThreeCompanySpan">车辆要求</span>
        <input v-model="displayDic.disVtLabel" @click="showPicker('vt')" type="text" placeholder="请选择车辆型号"
               readonly="readonly">
      </li>
      <li class="inputNumOneC">
        <span class="liNumThreeCompanySpan">运输要求</span>
        <input v-model="displayDic.disTnLabel" @click="showPicker('tn')" type="text" placeholder="请选择运输要求"
               readonly="readonly">
      </li>
    </ul>
    <ul class="liNumFour">
      <li class="inputLong needBorder">
        <span class="textRed">*</span>
        <span>货物运费</span>
        <input v-model="OrderDetail.price" type="text" placeholder="费用"> /元
      </li>
      <li class="inputShort needBorder">
        <input v-model="displayDic.disPmLabel" @click="showPicker('pm')" type="text" placeholder="单"
               readonly="readonly">
      </li>
      <li class="inputNumOne" disabled="disabled">
        <span class="textRed">*</span>
        <span>付款方式</span>
        <input v-model="displayDic.disPtLabel" @click="showPicker('pt')" type="text" placeholder="请选择"
               readonly="readonly">
      </li>
      <li class="inputShorter needBorder" disabled="disabled">
        <span class="textRed">*</span>
        <span class="size10">声明保价</span>
        <input type="text" v-model="insureamt">
        <span>元</span>
        <span class="textRed size10f def">有保价不支持线上支付，不填默认为0</span>
      </li>
      <li class="inputShorter needBorder" disabled="disabled">
        <span class="textRed">*</span>
        <span class="size10">代收货款</span>
        <input v-model="codamt" type="text">
        <span>元</span>
        <span class="textRed size10 def">有代收不支持线上支付，不填默认为0</span>
      </li>
    </ul>
    <ul class="liNumSix">
      <li class="inputNumOne needBorder" disabled="disabled">
        <span class="textRed">*</span>
        <span class="marginright13">收货人</span>
        <input type="text" v-model="OrderDetail.consignee" placeholder="请输入联系人" style="width:6.2rem;">
      </li>
      <li class="inputNumOne needBorder" disabled="disabled">
        <span class="textRed">*</span>
        <span>联系方式</span>
        <input v-model="OrderDetail.consphone" type="number" placeholder="请输入联系方式">
      </li>
      <!--<li class="inputNumOne needBorder">-->
      <!--<span class="textRed">*</span>-->
      <!--<span class="marginright13">发货人</span>-->
      <!--<input type="text" placeholder="请输入联系人" style="width:6.2rem;">-->
      <!--</li>-->
      <li class="inputNumOneSend needBorder">
        <span class="textRed">*</span>
        <span>发布人联系方式</span>
        <input type="number" v-model="OrderDetail.phone1" placeholder="请输入发布人联系方式" class="sendOrderPhone">
        <span>/</span>
        <input type="number" v-model="OrderDetail.phone2" placeholder="请输入发布人联系方式" class="sendOrderPhone">
      </li>
      <li class="inputNumOne needBorder" disabled="disabled">
        <span class="textRed">*</span>
        <span>取货方式</span>
        <input v-model="displayDic.disDmLabel" @click="showPicker('dm')" type="text" placeholder="请选择取货方式"
               readonly="readonly">
      </li>
      <li class="inputNumOne" disabled="disabled">
        <span class="textRed">*</span>
        <span>回单要求</span>
        <input v-model="displayDic.disReLabel" @click="showPicker('re')" type="text" placeholder="请请选择回单要求"
               readonly="readonly">
      </li>
    </ul>
    <ul class="liNumTwo">
      <li class="inputNumOne needBorder">
        <span class="noStart">提货时间</span>
        <input v-model="OrderDetail.pusdatetime" @click="showDatePicker('pusdatetime')" type="text"
               placeholder="预计提货时间起" readonly="readonly">
      </li>
      <li class="inputNumOneLong">
        <span class="noStart">提货结束时间</span>
        <input v-model="OrderDetail.puedatetime" @click="showDatePicker('puedatetime')" type="text"
               placeholder="预计提货时间止" readonly="readonly" class="goodsTime">
      </li>
    </ul>
    <ul class="liNumTwo">
      <li class="inputNumOne needBorder" disabled="disabled">
        <span class="noStart">到货时间</span>
        <input v-model="OrderDetail.easdatetime" @click="showDatePicker('easdatetime')" type="text"
               placeholder="预计到达时间起" readonly="readonly">
      </li>
      <li class="inputNumOneLong" disabled="disabled">
        <span class="noStart">预计到达时间</span>
        <input v-model="OrderDetail.eaedatetime" @click="showDatePicker('eaedatetime')" type="text"
               placeholder="预计到达时间止" readonly="readonly" class="goodsTime">
      </li>
    </ul>
    <div class="totalPrice marginBottom65">
      <span class="floatleft marginBottom60">订单总价</span><span
      class="floatright textRed size14 textBlod marginBottom60">￥{{sunPrice}}元</span>
    </div>
    <button class="releaseBtn" v-show="isReleaseOrder" @click="releaseOrder">发 布</button>
  </div>
</template>
<script>
  import {
    GEOSTATE
  } from '../../store/mutation-types'
  import {Toast} from 'vant';

  export default {
    data() {
      return {
        OrderDetail: new order.OrderICE(),
        compInfo: {},
        dicData: {},// 选择器字典数据, store中获取
        selectDataPicker: '',
        insureamt: 0, // 保价金额
        codamt: 0, // 代收金额
        isReleaseOrder: false,

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
          disDmLabel: '',// 提货方式
          disPmLabel: ''// 运费度量单位
        },
        startc: '', // 出发地
        arriarc: '', // 目的地
        pmList: [],
        disPmList: [],
        sunPrice: 0,
        userId: this.$app_store.getters.userId,
      }
    },
    activated() {
      let addressCom = this.$app_store.getters.addressCom || null;
      if (addressCom === null || addressCom.province === undefined || addressCom.province === null) {
        return
      }
      if (this.$app_store.getters.geoState === 1) {
        this.startc = addressCom.province + addressCom.city + addressCom.district + addressCom.township + addressCom.street + addressCom.streetNumber
        this.OrderDetail.startcext = addressCom.province + '#' + addressCom.city + '#' + addressCom.district;
        this.OrderDetail.startaddr = addressCom.township + addressCom.street + addressCom.streetNumber;
      } else if (this.$app_store.getters.geoState === 2) {
        this.arriarc = addressCom.province + addressCom.city + addressCom.district + addressCom.township + addressCom.street + addressCom.streetNumber
        this.OrderDetail.arriarcext = addressCom.province + '#' + addressCom.city + '#' + addressCom.district;
        this.OrderDetail.arriaddr = addressCom.township + addressCom.street + addressCom.streetNumber;
      }
    },
    mounted() {
      this.generateOrderNo();
      this.initData();
    },
    methods: {
      // 初始化页面数据
      initData() {
        this.compInfo = JSON.parse(this.$app_store.state.compInfo);
        // 当前企业未认证无法抢单
        if(this.compInfo.verify === 0) {
          this.isReleaseOrder = false;
          this.$vux.toast.text('当前企业未认证，无法进行发单操作!', 'top');
        }else {
          this.isReleaseOrder = true;
        }
        debugger
        // 添加发布人联系方式
        if (this.compInfo.pho !== 0 && this.compInfo.pht !== 0) {
          this.OrderDetail.phone1 = this.compInfo.pho;
          this.OrderDetail.phone2 = this.compInfo.pht;
        }else if(this.compInfo.pho !== 0 && this.compInfo.pht === 0) {
          this.OrderDetail.phone1 = this.compInfo.contact;
          this.OrderDetail.phone2 = this.compInfo.pho;
        } else if(this.compInfo.pho === 0 && this.compInfo.pht !== 0) {
          this.OrderDetail.phone1 = this.compInfo.contact;
          this.OrderDetail.phone2 = this.compInfo.pht;
        } else {
          this.OrderDetail.phone1 = this.compInfo.contact;
          this.OrderDetail.phone2 = '';
        }
        this.OrderDetail.priority = this.$route.query.status;
        this.OrderDetail.puberid = this.$app_store.getters.userId;
        this.OrderDetail.startc = 0;
        this.OrderDetail.arriarc = 0;
        this.dicData = JSON.parse(this.$app_store.getters.dict) || null;
        this.pmList = this.dicData.pm;
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

        let tndictarr = [];
        tndictarr.push(this.dicData.tn[0].value);
        this.OrderDetail.tndictarr = tndictarr;
        this.displayDic.disTnLabel = this.dicData.tn[0].label;

        this.OrderDetail.ptdictc = this.dicData.pt[0].value;
        this.displayDic.disPtLabel = this.dicData.pt[0].label;

        this.OrderDetail.redictc = this.dicData.re[0].value;
        this.displayDic.disReLabel = this.dicData.re[0].label;

        this.OrderDetail.dmdictc = this.dicData.dm[0].value;
        this.displayDic.disDmLabel = this.dicData.dm[0].label;

        this.OrderDetail.pmdictc = this.dicData.pm[0].value;
        this.displayDic.disPmLabel = this.dicData.pm[0].label;

        // 初始化Pm List 数据
        this.setPmPickerData(this.displayDic.disWmLabel);

        // 声明保价
        this.OrderDetail.insureamt = 0.0;
        // 代收货款
        this.OrderDetail.codamt = 0.0;
        // 车辆大小
        this.OrderDetail.vnum = null;
      },
      showPicker(category) {
        if (category === 'pm') {
          this.setPicker(this.disPmList);
        } else {
          this.setPicker(this.dicData[category]);
        }
        this.picker.show();
      },
      showDatePicker(category) {
        this.selectDataPicker = category;
        this.dateTimePicker = this.$createDatePicker({
          title: '货物日期选择',
          min: new Date(2008, 7, 8, 8, 0, 0),
          max: new Date(2025, 9, 20, 15, 0, 0),
          value: new Date(),
          columnCount: 6,
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
        this.dateTimePicker.show()
      },
      fallback() {
        this.$router.go(-1);
      },
      selectHandle(date, selectedVal, selectedText, type) {
        this.OrderDetail[this.selectDataPicker] = selectedVal[0] + '-' + selectedVal[1] + '-' + selectedVal[2] + ' ' + selectedVal[3] + ':' + selectedVal[4] + ':' + selectedVal[5]
      },
      cancelHandle() {

      },
      setPmPickerData(category) {
        let self = this;
        self.disPmList = [];
        let pmList = this.dicData['pm'];
        pmList.forEach((item, index, arr) => {
          if (item.label === '整单') {
            self.disPmList.push(item);
          }
          if (item.label === category) {
            this.OrderDetail.pmdictc = item.value;
            this.displayDic.disPmLabel = item.label;
            self.disPmList.push(item);
          }
        });
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
                this.setPmPickerData(selectedText[0]);
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
                this.OrderDetail.tndictarr = selectedVal;
                this.displayDic.disTnLabel = selectedText;
                break;
              case '支付方式':
                if(selectedVal[0] === 21) {
                  // 线上支付
                  this.codamt = 0;
                  this.insureamt = 0 ;
                }
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
              case '费用度量':
                this.OrderDetail.pmdictc = selectedVal;
                this.displayDic.disPmLabel = selectedText;
                this.sumPrice();
                break;
            }
          },
          onCancel: () => {

          }
        })
      },
      generateOrderNo() {
        let self = this;
        this.$Ice_OrderService.generateOrderNo(new IceCallback(
          function (result) {
            self.OrderDetail.orderno = result
          },
          function (error) {
            self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
            setTimeout(() => {
              self.$router.go(-1);
            }, 1500)
          }
        ));
      },
      releaseOrder() {
        let self = this;
        if (this.validator()) {
          Toast.loading({
            mask: true,
            message: '加载中...'
          });
          self.OrderDetail.codamt = self.codamt;
          self.OrderDetail.insureamt = self.insureamt ;
          self.$Ice_OrderService.releaseOrder(self.userId, self.OrderDetail, new IceCallback(
            function (result) {
              self.$vux.toast.text(result.msg, 'top');
              if (result.code === 0) {
                setTimeout(() => {
                  self.$router.go(-1);
                }, 1500);
              } else {
                // 发送失败
                self.$dialog.loading.close();
              }
            },
            function (error) {
              self.$dialog.loading.close();
              self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
            }
          ));
        }
      },
      validator() {
        // 目的地
        if (this.verifyUtil.isNull(this.arriarc)) {
          this.$vux.toast.text('请选择目的地', 'top');
          return false
        }
        // 出发地
        if (this.verifyUtil.isNull(this.startc)) {
          this.$vux.toast.text('请选择出发地', 'top');
          return false
        }
        // 货物数量
        if (this.verifyUtil.isNull(this.OrderDetail.num)) {
          this.$vux.toast.text('请填写货物重量', 'top');
          return false
        }
        // 货物运费
        if (this.verifyUtil.isNull(this.OrderDetail.price) || Number(this.OrderDetail.price) <= 0) {
          this.$vux.toast.text('请填写货物运费，并且金额不能为零', 'top');
          return false
        }

        // 收货人
        if (this.verifyUtil.isNull(this.OrderDetail.consignee)) {
          this.$vux.toast.text('请填写收货人信息', 'top');
          return false
        }
        // 联系方式
        if (this.verifyUtil.isNull(this.OrderDetail.consphone)) {
          this.$vux.toast.text('请填写联系方式', 'top');
          return false
        }
        return true
      },
      toPageGeo(state) {
        this.$app_store.commit(GEOSTATE, state);
        this.$router.push({
          path: '/geo'
        })
      },
      sumPrice() {
        if (this.displayDic.disPmLabel[0] === '整单') {
          this.sunPrice = this.OrderDetail.price
        } else {
          this.sunPrice = Number(this.OrderDetail.price) * Number(this.OrderDetail.wm)
        }
      }
    },

    computed: {
      wm() {
        return this.OrderDetail.wm
      },
      price() {
        return this.OrderDetail.price
      }
    },
    watch: {
      // 保价
      insureamt(newValue, oldValue) {
        if(newValue >0) {
          this.OrderDetail.ptdictc = 22;
          this.displayDic.disPtLabel = '线下支付';
        }
      },
      codamt(newValue, oldValue) {
        if(newValue >0) {
          this.OrderDetail.ptdictc = 22;
          this.displayDic.disPtLabel = '线下支付';
        }
      },
      //
      wm(newValue, oldValue) {
        // 计算总价
        this.sumPrice()
      },
      price(newValue, oldValue) {
        // 计算总价
        this.sumPrice()
      }
    }
  }
</script>
<style>

</style>
