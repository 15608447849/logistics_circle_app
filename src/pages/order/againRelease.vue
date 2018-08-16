<template>
  <div class="issueOrder">
    <div class="issueHeaderNav">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>转发布</span>
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
      <li class="tworow needBorder noEdit" >
        <span class="textRed">*</span>
        <span>目的地</span>
        <textarea v-model="arriarc" rows="2" @click="toPageGeo(2)" placeholder="请输入详细地址，精确到街道，社会区及门牌号，支持地图定位" class="textarea" disabled="disabled" style="background:#f3f3f3;"></textarea>
        <i class="icon iconfont icon-dituzadian iblue"></i>
      </li>
      <li class="tworow" @click="toPageGeo(1)">
        <span class="textRed">*</span>
        <span>出发地</span>
        <textarea v-model="startc" rows="2" placeholder="请输入详细地址，精确到街道，社会区及门牌号，支持地图定位" class="textarea"></textarea>
        <i class="icon iconfont icon-dituzadian iblue"></i>
      </li>
    </ul>
    <ul class="liNumThree noEdit">
      <li class="inputLong needBorder noEdit">
        <span class="textRed">*</span>
        <span>货物大小</span>
        <input v-model="OrderDetail.wm" type="text" placeholder="重量/体积" disabled="disabled">
      </li>
      <li class="inputShort needBorder noEdit">
        <input v-model="displayDic.disWmLabel" @click="showPicker('wm')" type="text" disabled="disabled">
      </li>
      <li class="inputLong needBorder noEdit">
        <span class="textRed">*</span>
        <span>货物数量</span>
        <input v-model="OrderDetail.num" type="text" placeholder="货物数量" disabled="disabled">
      </li>
      <li class="inputShort needBorder noEdit">
        <input v-model="displayDic.disNumLabel" @click="showPicker('num')" type="text" placeholder="单位"
               disabled="disabled">
      </li>
      <li class="inputLong noEdit">
        <span class="textRed">*</span>
        <span>货物信息</span>
        <input type="text" v-model="displayDic.disCtLabel" @click="showPicker('ct')" placeholder="货物类别"
               disabled="disabled">
      </li>
      <li class="inputShort noEdit">
        <input type="text" v-model="displayDic.disPaLabel" @click="showPicker('pa')" placeholder="是否包装"
               disabled="disabled">
      </li>
    </ul>
    <ul class="liNumThreeCompany noEdit">
      <li class="inputLong needBorder noEdit">
        <span class="liNumThreeCompanySpan">车辆大小</span>
        <input v-model="OrderDetail.vnum" type="number" placeholder="数量" disabled="disabled">
      </li>
      <span class="carNum">台</span>
      <li class="inputShort needBorder noEdit">
        <input v-model="displayDic.disVlLabel" @click="showPicker('vl')" type="text" placeholder="长度"
               disabled="disabled">
      </li>
      <span class="carNum">米</span>
      <li class="inputNumOneC needBorder noEdit">
        <span class="liNumThreeCompanySpan">车辆要求</span>
        <input v-model="displayDic.disVtLabel" @click="showPicker('vt')" type="text" placeholder="请选择车辆型号"
               disabled="disabled">
      </li>
      <li class="inputNumOneC noEdit">
        <span class="liNumThreeCompanySpan">运输要求</span>
        <input v-model="displayDic.disTnLabel" @click="showPicker('tn')" type="text" placeholder="请选择运输要求"
               disabled="disabled">
      </li>
    </ul>
    <ul class="liNumFour">
      <li class="inputLong needBorder">
        <span class="textRed">*</span>
        <span>货物运费</span>
        <input v-model="OrderDetail.price" type="text" placeholder="费用"> /元
      </li>
      <li class="inputShort needBorder">
        <input v-model="displayDic.disPmLabel" @click="showPicker('pm')" type="text" placeholder="单">
      </li>
      <li class="inputNumOne">
        <span class="textRed">*</span>
        <span>付款方式</span>
        <input v-model="displayDic.disPtLabel" @click="showPicker('pt')" type="text" placeholder="请选择">
      </li>
      <li class="inputShorter needBorder noEdit">
        <span class="textRed">*</span>
        <span class="size10">声明保价</span>
        <input type="text" v-model="insureamt" disabled="disabled">
        <span>元</span>
        <span class="textRed size10f def">有保价不支持线上支付，不填默认为0</span>
      </li>
      <li class="inputShorter needBorder noEdit">
        <span class="textRed">*</span>
        <span class="size10">代收货款</span>
        <input v-model="codamt" type="text" disabled="disabled">
        <span>元</span>
        <span class="textRed size10 def">有代收不支持线上支付，不填默认为0</span>
      </li>
    </ul>
    <ul class="liNumSixA">
      <li class="inputNumOne needBorder noEdit">
        <span class="textRed">*</span>
        <span class="marginright13">收货人</span>
        <input type="text" v-model="OrderDetail.consignee" placeholder="请输入联系人" style="width:6.2rem;" disabled="disabled">
      </li>
      <li class="inputNumOne needBorder noEdit">
        <span class="textRed">*</span>
        <span>联系方式</span>
        <input v-model="OrderDetail.consphone" type="number" placeholder="请输入联系方式" disabled="disabled">
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
      <li class="inputNumOne needBorder noEdit">
        <span class="textRed">*</span>
        <span>取货方式</span>
        <input v-model="displayDic.disDmLabel" @click="showPicker('dm')" type="text" placeholder="请选择取货方式"
               disabled="disabled">
      </li>
      <li class="inputNumOne noEdit">
        <span class="textRed">*</span>
        <span>回单要求</span>
        <input v-model="displayDic.disReLabel" @click="showPicker('re')" type="text" placeholder="请请选择回单要求"
               disabled="disabled">
      </li>
    </ul>
    <ul class="liNumTwo">
      <li class="inputNumOne needBorder">
        <span class="noStart">提货时间</span>
        <input v-model="OrderDetail.pusdatetime" @click="showDatePicker('pusdatetime')" type="text"
               placeholder="预计提货时间起">
      </li>
      <li class="inputNumOneLong">
        <span class="noStart">提货结束时间</span>
        <input v-model="OrderDetail.puedatetime" @click="showDatePicker('puedatetime')" type="text"
               placeholder="预计提货时间止" class="goodsTime">
      </li>
    </ul>
    <ul class="liNumTwo noEdit">
      <li class="inputNumOne needBorder noEdit">
        <span class="noStart">到货时间</span>
        <input v-model="OrderDetail.easdatetime" @click="showDatePicker('easdatetime')" type="text"
               placeholder="预计到达时间起" disabled="disabled">
      </li>
      <li class="inputNumOneLong noEdit">
        <span class="noStart">预计到达时间</span>
        <input v-model="OrderDetail.eaedatetime" @click="showDatePicker('eaedatetime')" type="text"
               placeholder="预计到达时间止" class="goodsTime" disabled="disabled">
      </li>
    </ul>
    <div class="totalPrice marginBottom65">
      <span class="floatleft marginBottom60">订单总价</span><span
      class="floatright textRed size14 textBlod marginBottom60">￥{{sunPrice}}元</span>
    </div>
    <button class="releaseBtn" v-show="isReleaseOrder" @click="saveTransOrder">转发布</button>
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
        orderid: ''
      }
    },
    activated() {
      if(this.$route.meta.isUseCache){
        this.$route.meta.isUseCache = false;
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

      } else {
        this.OrderDetail = new order.OrderICE();
        this.generateOrderNo();
        this.initData();
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
        this.orderid = this.$route.query.orderId;
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
        this.dicData = JSON.parse(this.$app_store.getters.dict) || null;
        // 当前企业未认证无法抢单
        if(this.compInfo.verify === 0) {
          this.isReleaseOrder = false;
          this.$vux.toast.text('当前企业未认证，无法进行转发操作!', 'top');
        }else {
          this.isReleaseOrder = true;
        }
        this.getOrderDetail();
      },

      getOrderDetail(){
        let that = this;
        that.$Ice_myOrderService.getOrderDetail(this.orderid,that.userId,1,new IceCallback(
          function(data){
            let orderData = data.obj;
            that.OrderDetail.billno = orderData.billno; // 运单号
            that.OrderDetail.orderno = orderData.orderno; // 自动生成的订单号
            that.OrderDetail.arriarc = orderData.arriarc; // 目的地编码
            that.arriarc = orderData.arriarcext + orderData.arriaddr; // 目的地
            that.startc = orderData.startcext + orderData.startaddr;

            that.OrderDetail.startcext = orderData.startcext;
            that.OrderDetail.startaddr = orderData.startaddr;

            that.OrderDetail.arriarcext =  orderData.arriarcext;
            that.OrderDetail.arriaddr = orderData.arriaddr;

            that.OrderDetail.wm = orderData.wm; // 货物内容(重量/体积) 数量

            that.OrderDetail.wmdictc = parseInt(orderData.wmdictc); // 货物内容(重量/体积) 单位
            that.displayDic.disWmLabel = orderData.wmdictcn;
            that.setPmPickerData(that.displayDic.disWmLabel);
            // 货物内容 (单位数量)
            that.OrderDetail.num = parseInt(orderData.num);
            // 货物内容(单位
            that.OrderDetail.numdictc = parseInt(orderData.numdictc);
            that.displayDic.disNumLabel = orderData.numdictcn;
            // 包装要求
            that.OrderDetail.padictc = parseInt(orderData.padictc);
            that.displayDic.disPaLabel = orderData.padictcn;

            that.OrderDetail.ctdictc = parseInt(orderData.ctdictc); //货物类型
            that.displayDic.disCtLabel = orderData.ctdictcn;

            that.OrderDetail.vnum = orderData.vnum; // 车数量(台)

            that.OrderDetail.vldictc = parseInt(orderData.vldictc); //车长字典码
            that.displayDic.disVlLabel = orderData.vldictcn;

            that.OrderDetail.vtdictc = parseInt(orderData.vtdictc); //车型字典码
            that.displayDic.disVtLabel =  orderData.vtdictcn;

            that.OrderDetail.pmdictc = parseInt(orderData.pmdictc); //运费度量单位
            that.displayDic.disPmLabel = orderData.pmdictcn;

            that.OrderDetail.ptdictc = parseInt(orderData.ptdictc); //付款方式
            that.displayDic.disPtLabel = orderData.ptdictcn;

            that.OrderDetail.dmdictc = parseInt(orderData.dmdictc); //送货方式
            that.displayDic.disDmLabel = orderData.dmdictcn;

            that.OrderDetail.redictc = parseInt(orderData.redictc); //是否返单
            that.displayDic.disReLabel =  orderData.redictcn;

            that.OrderDetail.tndictc = orderData.tndictc; //运输要求字典码
            that.displayDic.disTnLabel = orderData.tndictcn;

            that.OrderDetail.price = parseFloat(orderData.price); //货物运费

            that.insureamt =  orderData.insureamt;
            that.codamt = orderData.codamt;

            that.OrderDetail.codamt = orderData.codamt; //代收货款金额
            that.OrderDetail.insureamt = orderData.insureamt; //声明保价

            that.OrderDetail.consignee = orderData.consignee; //收货人
            that.OrderDetail.consphone = orderData.consphone; //手机号码
            that.OrderDetail.pusdatetime = orderData.pusdatetime; //取货时间开始
            that.OrderDetail.puedatetime = orderData.puedatetime; //取货结束时间
            that.OrderDetail.easdatetime = orderData.easdatetime; //期望到货时间起始
            that.OrderDetail.eaedatetime = orderData.eaedatetime; //期望到货结束时间
            //orderData.phone1 == 0 ? that.formValidate.phone1 = '' : that.formValidate.phone1 = orderData.phone1; //发布人电话1
            //orderData.phone2 == 0 ? that.formValidate.phone2 = '' : that.formValidate.phone2 = orderData.phone2; //发布人电话2
            that.OrderDetail.phone1 = that.compInfo.pho===0 ? '' : that.compInfo.pho; //发布人电话1
            that.OrderDetail.phone2 = that.compInfo.pht===0 ? '' : that.compInfo.pht; //发布人电话2
//	                    that.formValidate.phone2 = orderData.phone2; //发布人电话2
            that.pubdatetime = orderData.pubdatetime; //发布时间
            that.changeNum();
          },
          function(error) {
            this.$vux.toast.text(error, 'top');
          }
        ))
      },
      changeNum(e){
        if (Number(this.OrderDetail.insureamt) > 0 || Number(this.OrderDetail.codamt) > 0){
          // this.fkDisabled = true;
          this.OrderDetail.ptdictc = 22;
        } else {
          // this.fkDisabled = false;
          this.OrderDetail.ptdictc = 21;
        }
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
                // 线上支付
                if(selectedVal[0] === 21) {
                  // 判断是否存在保价与代收金额
                  if(this.OrderDetail.codamt > 0 || this.OrderDetail.insureamt> 0) {
                    this.$vux.toast.text('存在声明保价与代收货款金额,无法选择线上支付', 'top');
                    return
                  }
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
      fallback() {
        this.$router.go(-1)
      },
      // 转发不
      saveTransOrder() {
        let self = this;
        if(this.validator()) {
          let jsonObj = new myOrder.OrderICE();
          jsonObj.puberid = this.userId;				//收货人
          jsonObj.phone1 = (self.OrderDetail.check ? self.OrderDetail.phone1.toString() : '0'); 			// 手机号码1
          jsonObj.phone2 = (self.OrderDetail.check ? self.OrderDetail.phone2.toString() : '0'); 			// 手机号码2
          jsonObj.billno = self.OrderDetail.billno;						// TMS运单号
          jsonObj.orderno = self.OrderDetail.orderno.toString();					// 订单号
          // var startcArr = self.OrderDetail.startcArr[self.OrderDetail.startcArr.length - 1],
          //   arriarcArr = self.OrderDetail.arriarcArr[self.OrderDetail.arriarcArr.length - 1];
          // jsonObj.startc = startcArr.toString();  					// 出发地地区码
          // jsonObj.arriarc = arriarcArr.toString();  			// 到达地地区码
          jsonObj.startcext = self.OrderDetail.startcext;
          jsonObj.startaddr =self.OrderDetail.startaddr;  			 // 出发地详细地址
          jsonObj.arriarcext =  self.OrderDetail.arriarcext;
          jsonObj.arriaddr =self.OrderDetail.arriaddr; 				 // 到达地详细地址
          jsonObj.wm = parseFloat(self.OrderDetail.wm); 	//货物重量/体积
          jsonObj.wmdictc = self.OrderDetail.wmdictc.toString(); 	//货物重量/体积单位字典码id
          jsonObj.num = Number(self.OrderDetail.num); //件数
          jsonObj.numdictc = self.OrderDetail.numdictc.toString();					//件数单位字典码id
          jsonObj.padictc = self.OrderDetail.padictc.toString();					//包装要求字典码id
          jsonObj.ctdictc =self.OrderDetail.ctdictc.toString();					//货物类型字典码id
          jsonObj.vnum = Number(self.OrderDetail.vnum);							//车数量
          jsonObj.vldictc = self.OrderDetail.vldictc.toString();					//车长字典码id
          jsonObj.vtdictc = self.OrderDetail.vtdictc.toString();					//车型字典码id
          if(self.OrderDetail.tndictc.length === 0){
            self.OrderDetail.tndictc.push(71)
          }
          jsonObj.tndictarr = [];					//运输要求字典码id
          jsonObj.tndictc = self.OrderDetail.tndictc.toString();
          jsonObj.price = parseFloat(self.OrderDetail.price);					//价格(元)
          jsonObj.codamt = parseFloat(self.OrderDetail.codamt);					//代收货款金额(元)
          jsonObj.insureamt = parseFloat(self.OrderDetail.insureamt);				//声明保价金额(元)
          jsonObj.ptdictc = self.OrderDetail.ptdictc.toString();				//付款方式字典码id
          jsonObj.consignee = self.OrderDetail.consignee; 					// 收货人
          jsonObj.consphone = self.OrderDetail.consphone; 	 			// 收货联系方式
          jsonObj.dmdictc = self.OrderDetail.dmdictc.toString(); 	 			//提货方式字典码id
          jsonObj.redictc = self.OrderDetail.redictc.toString(); 	 			//回单要求字典码id
          jsonObj.pusdatetime = self.OrderDetail.pusdatetime;	//取货时间开始 yyyy-MM-dd hh:mm:ss
          jsonObj.puedatetime = self.OrderDetail.puedatetime;			//取货结束时间 yyyy-MM-dd hh:mm:ss
          jsonObj.easdatetime = self.OrderDetail.easdatetime;			//期望到货时间起始 yyyy-MM-dd hh:mm:ss
          jsonObj.eaedatetime = self.OrderDetail.eaedatetime;			//期望到货时间起始 yyyy-MM-dd hh:mm:ss
          jsonObj.pmdictc = self.OrderDetail.pmdictc.toString();				//运费度量单位
          debugger
          self.$Ice_myOrderService.transOrder(self.userId,jsonObj,new IceCallback(
            function(data){
              self.$vux.toast.text(data.msg, 'top');
              if (data.code === 0) {
                self.$router.go(-1);
              }
            },
            function (error) {
              self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
            }
          ))
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
