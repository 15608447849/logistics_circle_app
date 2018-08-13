<template>
  <div class="enterpriseBox">
    <div class="issueHeaderLog">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span>企业信息</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>

    <div>
      <ul class="enterpriseList" v-show="!isEditor">
        <li class="enterpriseLi needBorder" @click="show1 = true">
          <span class="invoiceTitle">企业名称</span>
          <span class="invoiceContent">
      {{compInfo.fname}}
      </span>
        </li>
        <li class="enterpriseLi needBorder">
          <span class="invoiceTitle">企业简称</span>
          <span class="invoiceContent">{{compInfo.sname}}</span>
        </li>
        <li class="enterpriseLi needBorder" @click="show2 = true">
          <span class="invoiceTitle">企业性质</span>
          <span class="invoiceContent">{{compInfo.ctypes}}</span>
        </li>
        <li class="enterpriseLi needBorder">
          <span class="invoiceTitle">企业规模</span>
          <span class="invoiceContent">{{compInfo.csales}}</span>
        </li>
        <li class="enterpriseLi needBorder">
          <span class="invoiceTitle">联系方式</span>
          <span class="invoiceContent">{{compInfo.contact}}</span>
        </li>
        <li class="enterpriseLi needBorder">
          <span class="invoiceTitle">企业地址</span>
          <span class="invoiceContent">{{compInfo.areas}}{{compInfo.address}}</span>
        </li>
        <li class="enterpriseLi needBorder">
          <span class="invoiceTitle">邮编</span>
          <span class="invoiceContent">{{compInfo.postcode}}</span>
        </li>
      </ul>


      <van-cell-group v-show="isEditor">
        <!--<van-cell @click="showPicker" title="发票类型" is-link :value="invoiceType"/>-->
        <van-field
          v-model="compInfo.fname"
          label="企业名称"
          placeholder="请输入企业名称"
          :error-message="v1"
        />
        <van-field
          v-model="compInfo.sname"
          label="企业简称"
          placeholder="请输入企业简称"
          :error-message="v2"
        />
        <van-field
          readonly="readonly"
          @click="showPicker('qyxz')"
          v-model="compInfo.ctypes"
          label="企业性质"
          placeholder="请选择企业性质"
          :error-message="v3"
        />
        <van-field
          @click="showPicker('qygm')"
          v-model="compInfo.csales"
          label="企业规模"
          placeholder="请选择企业规模"
          :error-message="v4"
        />
        <!--<van-field-->
          <!--v-model="compInfo.contact"-->
          <!--label="联系人电话"-->
          <!--placeholder="请填写联系人电话"-->
          <!--:error-message="v5"-->
        <!--/>-->
        <van-field
          v-model="compInfo.postcode"
          label="邮编"
          placeholder="请填写邮编"
          :error-message="v6"
        />
        <van-field
          v-model="compInfo.pho"
          label="业务员手机1"
          placeholder="请填写业务员手机1"
          :error-message="v7"
        />
        <van-field
          v-model="compInfo.pht"
          label="业务员手机2"
          placeholder="请填写业务员手机2"
          :error-message="v8"
        />
        <van-field
          @click="showCascadePicker"
          label="企业地址"
          placeholder="请选择企业地址"
          :error-message="v9"
        />
        <van-field
          v-model="compInfo.address"
          label="详细地址"
          type="textarea"
          placeholder="请输入详细地址"
          :error-message="v10"
          rows="1"
          autosize
        />
      </van-cell-group>

      <van-button :disabled=disabled @click="updateComp" size="large" v-show="isEditor" style="
      background: -webkit-linear-gradient(-45deg, #31bff5,#3190f5); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(-45deg, #31bff5,#3190f5); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(-45deg, #31bff5,#3190f5); /* Firefox 3.6 - 15 */
      background: linear-gradient(-45deg, #31bff5,#3190f5); /* 标准的语法 */
      width:7.5rem;
      margin-top:10vh;
      color:#ffffff;">
        保存
      </van-button>

    </div>
  </div>
</template>

<script>
  import {COMP_INFO} from "../../store/mutation-types";

  export default {
    data: function () {
      return {
        isEditor: false,
        compInfo: {},
        BasicInfo: {},
        show1: false,
        show2: false,
        disabled: false,
        userId: this.$app_store.getters.userId,
        v1: '',
        v2: '',
        v3: '',
        v4: '',
        v5: '',
        v6: '',
        v7: '',
        v8: '',
        v9: '',
        v10: ''
      }
    },
    mounted() {
      this.compInfo = this.$route.params;
      if (this.verifyUtil.stringIsBoolean(this.$route.query.isEditor)) {
        this.isEditor = true;
      } else {
        this.isEditor = false;
      }
      this.initData();
      this.getBasicInfo();
    },
    methods: {
      initData() {

        this.dicData = JSON.parse(this.$app_store.getters.dict)  || null;
        // 初始化地区选择数据
        this.cascadeData = JSON.parse(this.$app_store.getters.area);
        // 初始化地区选择器
        this.cascadePicker = this.$createCascadePicker({
          title: '地区选择',
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        });
      },
      showCascadePicker() {
        this.cascadePicker.setData(this.cascadeData);
        this.cascadePicker.show();
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
              case '企业性质':
                this.compInfo.ctype = selectedVal;
                this.compInfo.ctypes = selectedText;
                break;
              case '企业规模':
                this.compInfo.csale = selectedVal;
                this.compInfo.csales = selectedText;
                break;
            }
          },
          onCancel: () => {

          }
        })
      },
      updateComp() {
        // 保存信息
        let self = this;
        let compJson = new comp.CompInfo();
        debugger
        compJson.compid = this.compInfo.compid;
        compJson.uoid = this.userId;
        compJson.fname = this.compInfo.fname;
        compJson.sname = this.compInfo.sname;
        compJson.ctype = this.compInfo.ctype;
        compJson.csale = this.compInfo.csale;
        // compJson.contact = num2jlong(Number(this.compInfo.contact));
        compJson.postcode = this.compInfo.postcode;
        compJson.pho = num2jlong(Number(this.compInfo.pho));
        compJson.pht = num2jlong(Number(this.compInfo.pht));
        compJson.area = this.compInfo.area;
        compJson.address = this.compInfo.address;
        compJson.invtitle = this.compInfo.invtitle;
        compJson.invtype = this.compInfo.invtype;
        compJson.taxno = this.compInfo.taxno;
        compJson.phone = this.compInfo.pho + '-' + this.compInfo.pht;
        // compJson.landline = this.compInfo.landline;
        compJson.openbank = this.compInfo.openbank;
        compJson.openaccount = this.compInfo.openaccount.toString();
        compJson.billarea = this.compInfo.billarea;
        compJson.billaddr = this.compInfo.billaddr;
        this.$Ice_InfoService.updateComp(compJson, new IceCallback(
          function (result) {
            self.$vux.toast.text(result.msg, 'top');
            if (result.code === 0) {
              // 保存数据
              self.$app_store.commit(COMP_INFO, JSON.stringify(self.compInfo))
            }
          },
          function (error) {
            self.$vux.toast.text(error, 'top');
          }
        ))
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.compInfo.areas = selectedText[0] + ',' + selectedText[1] + ',' + selectedText[2];
        this.compInfo.area = selectedVal[2];
      },
      cancelHandle() {

      },
      fallback() {
        this.$router.go(-1)
      },
      // 获取企业logo的基本信息模型
      getBasicInfo() {

      }
    },
    watch: {
      compInfo: {
        handler(newValue, oldValue) {
          let isBtnClick = true;
          //  企业名称
          if (this.verifyUtil.isNull(newValue.fname)) {
            isBtnClick = false;
            this.v1 = '企业名称不能为空'
          } else {
            this.v1 = ''
          }
          // 企业简称
          if (this.verifyUtil.isNull(newValue.sname)) {
            isBtnClick = false;
            this.v2 = '企业简称不能为空';
          } else {
            this.v2 = ''
          }
          // 企业性质
          if (newValue.ctype === 0) {
            isBtnClick = false;
            this.v3 = '请选择企业性质';
          } else {
            this.v3 = ''
          }
          //  企业规模
          if (newValue.csale === 0) {
            isBtnClick = false;
            this.v4 = '请选择企业规模';
          } else {
            this.v4 = ''
          }
          // // 联系人电话
          // if (this.verifyUtil.isPhoneNum(newValue.contact)) {
          //   isBtnClick = false;
          //   this.v5 = '请输入联系人电话';
          // } else {
          //   this.v5 = ''
          // }
          // 邮编
          if (this.verifyUtil.isNull(newValue.postcode)) {
            isBtnClick = false;
            this.v6 = '请输入邮编';
          } else {
            this.v6 = ''
          }

          // 企业地址
          if (newValue.area === 0) {
            isBtnClick = false;
            this.v9 = '请选择企业地址';
          } else {
            this.v9 = ''
          }
          // 详细地址
          if (this.verifyUtil.isNull(newValue.billaddr)) {
            isBtnClick = false;
            this.v10 = '请输入详细地址';
          } else {
            this.v10 = ''
          }
          this.disabled = !isBtnClick;
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
