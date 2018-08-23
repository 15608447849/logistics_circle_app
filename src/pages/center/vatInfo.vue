<template>
  <div class="invoiceBox">
    <div class="issueHeaderLog">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>发票信息</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright "></div>
      </div>
    </div>
    <ul class="invoiceList" v-show="!isEditor">
      <li class="needBorder">
        <span class="invoiceTitle">发票抬头</span>
        <span class="invoiceContent">{{compInfo.invtitle}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">发票类型</span>
        <span class="invoiceContent">{{compInfo.invtypes}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">发票税号</span>
        <span class="invoiceContent">{{compInfo.taxno}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">电话</span>
        <span class="invoiceContent">{{compInfo.phone}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">开户银行</span>
        <span class="invoiceContent">{{compInfo.openbank}}</span>
      </li>
      <li class="needBorder">
        <span class="invoiceTitle">开户账号</span>
        <span class="invoiceContent">{{compInfo.openaccount}}</span>
      </li>
      <li>
        <span class="invoiceTitle">发票地址</span>
        <span class="invoiceContent">{{compInfo.billareas}}{{compInfo.billaddr}}</span>
      </li>
    </ul>
    <van-cell-group v-show="isEditor">
      <van-field
        maxlength="100"
        v-model="compInfo.invtitle"
        label="发票抬头"
        placeholder="请输入发票抬头"
        :error-message="v1"
      />
      <van-field
        maxlength="36"
        v-model="compInfo.taxno"
        label="发票税号"
        placeholder="请输入发票税号"
        :error-message="v2"
      />
      <!--<van-field-->
        <!--v-model="compInfo.landline"-->
      <!--label="联系人电话"-->
      <!--placeholder="请填写电话"-->
      <!--:error-message="v3"-->
      <!--/>-->
      <div class="zuoji">
        <span class="zuojiNum">电话号码</span>
        <input type="tel" maxlength="4" v-model="phoneArea" placeholder="请填写区号" class="quhao"> <span class="fengefu">-</span><input type="tel" maxlength="36" v-model="landline" placeholder="请填写座机号码" class="haoma floatright">
      </div>

      <van-field
        maxlength="100"
        v-model="compInfo.openbank"
        label="开户银行"
        placeholder="请填写开户银行"
        :error-message="v4"
      />
      <van-field
        maxlength="36"
        v-model="compInfo.openaccount"
        label="开户账号"
        placeholder="请填写开户账号"
        :error-message="v5"
      />
      <van-field
        readonly="readonly"
        @click = 'showPicker'
        v-model="compInfo.invtypes"
        label="发票类型"
        placeholder="请选择发票类型"
        :error-message="v6"
      />
      <van-field
        readonly="readonly"
        @click="showCascadePicker"
        v-model="compInfo.billareas"
        label="地址"
        placeholder="请选择地址"
        :error-message="v7"
      />
      <!--billaddr-->
      <van-field
        maxlength="200"
        v-model="compInfo.billaddr"
        label="详细地址"
        placeholder="请输入详细地址"
        :error-message="v8"
        rows="1"
        autosize
      />
    </van-cell-group>

    <van-button :disabled=disabled @click="updateComp" size="large" v-show="isEditor"
      style="
      width:7.08rem;
      height:6vh;
      background:#3189f5;
      line-height:6vh;
      margin-left:.21rem;
      margin-top:10vh;
      margin-top:12vh;
      color:#ffffff;"
    >
      保存
    </van-button>
  </div>
</template>

<script>
  import {COMP_INFO} from "../../store/mutation-types";

  export default {
    data() {
      return {
        isEditor: false,
        compInfo: {},
        invtypeArr: {},
        cascadeData: {},
        disabled: true,
        phoneArea: '',
        landline: '',
        userId: this.$app_store.getters.userId,
        v1: '',
        v2: '',
        v3: '',
        v4: '',
        v5: '',
        v6: '',
        v7: '',
        v8: ''
      }
    },
    mounted() {
      this.compInfo = this.$route.params;
      let phone = (this.compInfo.phone != '') ? this.compInfo.phone.split('-') : ['',''];
      this.phoneArea = phone[0]==0 ? '' : phone[0];// 电话区号
      this.landline = phone[1]==0 ? '' : phone[1];// 座机号
      if (this.verifyUtil.stringIsBoolean(this.$route.query.isEditor)) {
        this.isEditor = true;
      } else {
        this.isEditor = false;
      }
      this.invtypeArr = this.dicData = JSON.parse(this.$app_store.getters.dict).fplx;
      // 初始化地区选择数据
      this.cascadeData = JSON.parse(this.$app_store.getters.area);
      // 初始化地区选择器
      this.cascadePicker = this.$createCascadePicker({
        title: '地区选择',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      });
    },
    methods: {
      showPicker() {
        this.setPicker(this.invtypeArr);
      },
      showCascadePicker() {
        this.cascadePicker.setData(this.cascadeData);
        this.cascadePicker.show();
      },
      setPicker(pickerList) {
        this.setDataPicker = this.$createPicker({
          title: '发票类型',
          data: [pickerList],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.compInfo.invtype = selectedVal[0];
            this.compInfo.invtypes = selectedText[0];
          },
          onCancel: () => {

          }
        });
        this.setDataPicker.show()
      },
      fallback() {
        this.$router.go(-1)
      },
      updateComp() {
        // 保存信息
        let self = this;
        let compJson = new comp.CompInfo();
        this.compInfo.phone = this.phoneArea + '-'+ this.landline;
        compJson.compid = this.compInfo.compid;
        compJson.uoid = this.userId;
        compJson.fname = this.compInfo.fname;
        compJson.sname = this.compInfo.sname;
        compJson.ctype = this.compInfo.ctype;
        compJson.csale = this.compInfo.csale;
        compJson.contact = num2jlong(Number(this.compInfo.contact));
        compJson.postcode = this.compInfo.postcode;
        compJson.pho = num2jlong(Number(this.compInfo.pho));
        compJson.pht = num2jlong(Number(this.compInfo.pht));
        compJson.area = this.compInfo.area;
        compJson.address = this.compInfo.address;
        compJson.invtitle = this.compInfo.invtitle;
        compJson.invtype = this.compInfo.invtype;
        compJson.taxno = this.compInfo.taxno;
        compJson.phone = this.compInfo.phone;
        compJson.openbank = this.compInfo.openbank;
        compJson.openaccount = this.compInfo.openaccount.toString();
        compJson.billarea = this.compInfo.billarea;
        compJson.billaddr = this.compInfo.billaddr;
        this.$Ice_InfoService.updateComp(compJson, new IceCallback(
          function (result) {
            self.$vux.toast.text(result.msg, 'top');
            if(result.code === 0){
              // 保存数据
              self.$app_store.commit(COMP_INFO, JSON.stringify(self.compInfo))
              self.$router.go(-1);
            }
          },
          function (error) {
            self.$vux.toast.text(error, 'top');
          }
        ))
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        let areas = '';
        for(let i=0;i<selectedText.length;i++) {
          if(areas === '') {
            areas = selectedText[i]
          } else {
            areas += ','+ selectedText[i]
          }
        }
        this.compInfo.billareas = areas;
        this.compInfo.billarea = selectedVal[selectedVal.length-1];
      },
      cancelHandle() {

      },
      validator() {
        // 发票抬头
        this.v1 = '';
        this.v2 = '';
        this.v3 = '';
        this.v4 = '';
        this.v5 = '';
        return true
      }
    },
    watch: {
      compInfo: {
        handler(newValue, oldValue) {
          let isBtnClick = true;
          // if (this.verifyUtil.isNull(newValue.invtitle)) {
          //   isBtnClick = false;
          //   this.v1 = '发票税号不能为空'
          // } else {
          //   this.v1 = ''
          // }
          // // 发票税号
          // if (this.verifyUtil.checkTax(newValue.taxno)) {
          //   isBtnClick = false;
          //   this.v2 = '发票税号不正确';
          // } else {
          //   this.v2 = ''
          // }
          // // // 联系电话
          // // if (this.verifyUtil.isNull(newValue.landline)) {
          // //   isBtnClick = false;
          // //   this.v3 = '联系电话不能为空';
          // // } else {
          // //   this.v3 = ''
          // // }
          // //  开户银行
          // if (this.verifyUtil.isNull(newValue.openbank)) {
          //   isBtnClick = false;
          //   this.v4 = '开户银行不能为空';
          // } else {
          //   this.v4 = ''
          // }
          // // 开户银行账号
          // if (this.verifyUtil.isBankNo(newValue.openaccount)) {
          //   isBtnClick = false;
          //   this.v5 = '开户银行账号输入有误';
          // } else {
          //   this.v5 = ''
          // }
          // // 详细地址
          // if(this.verifyUtil.isNull(newValue.billaddr)) {
          //   isBtnClick = false;
          //   this.v8 = '详细地址不能为空';
          // } else {
          //   this.v8 = ''
          // }
          this.disabled = !isBtnClick;
        },
        deep: true
      }

    }
  }
</script>

<style scoped>

</style>
