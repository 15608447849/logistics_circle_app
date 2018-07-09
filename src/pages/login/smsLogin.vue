<template>
  <div>
    <yd-navbar title="短信快捷登录"></yd-navbar>
    <yd-cell-group v-show="firstStep">
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input slot="right" v-model="phoneNumber" ref="phoneNumber" required regex="mobile" placeholder="请输入手机号码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button-group>
      <yd-button size="large" @click.native="sendSMS" v-show="firstStep">下一步</yd-button>
    </yd-button-group>
    <yd-cell-group v-show="secondStep">
      <yd-cell-item>
        <span slot="left">验证码：</span>
        <yd-input slot="right" v-model="smsCode" placeholder="请输入短信验证码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button-group>
      <yd-button size="large" @click.native="smsLogin" v-show="secondStep">登录</yd-button>
    </yd-button-group>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        phoneNumber: '',
        smsCode: '',
        firstStep: true,
        secondStep: false
      }
    },
    methods: {
      sendSMS() {
        let self = this;
        if(this.verifyUtil.isPhoneNum(this.phoneNumber)) {
          self.message.toast(self, '手机号格式不正确, 请重新输入后重试', 'error');
          return
        }
        // 发送短信验证码
        this.$Ice_UserService.requestPhoneSms(this.phoneNumber, true, new IceCallback(
          function (result) {
            if(result === 0) {
              // 短信验证码发送成功
              self.firstStep = false;
              self.secondStep = true;
            } else {
              self.message.toast(self, '短信验证码发送失败', 'error');
            }
          },
          function (error) {
            console.log(error)
          }
        ))
      },
      smsLogin() {
        let self = this;
        // 短信登录
        this.$Ice_UserService.userVerifyBySms(this.phoneNumber,this.smsCode, new IceCallback(
          function (result) {
            if(result === 0) {
              // 跳转信息大厅页面
              // self.$app_store.commit(USER_INFO, result);
              // self.$app_store.commit(USER_TOKEN, result.upw);
              // self.$router.push({
              //   path: '/information'
              // })
              console.log(result)
            } else {
              self.message.toast(self,'登录失败','error');
            }
          },
          function (error) {
            self.message.toast(self,'登录失败' + error,'error');
          }
        ))
      }
    }
  }
</script>
<style>

</style>
