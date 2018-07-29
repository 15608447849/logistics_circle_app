<template>
  <div class="login">
    <img src="../../assets/images/small/login_logo.png" alt="" class="loginPic">
    <div class="login_input">
      <input type="text" v-model="phone" placeholder="注册的手机号码" class="userNameBorderBottom">
      <div><input type="password" v-model="smsCode" placeholder="请输入短信验证码" class="FuserPwd">
        <yd-sendcode
          class="getVerificationCode"
          slot="right"
          v-model="start1"
          @click.native="sendCode"
          type="primary"
          init-str="获取验证码"
        ></yd-sendcode>
      </div>
    </div>
    <button class="loginBut" @click="loginClick">登 录</button>
    <div class="FfastLogin" @click="toLogin()">
      账号密码登录
    </div>
  </div>
</template>

<script>
  import {
    USER_INFO
  } from '../../store/mutation-types'
  export default {
    data() {
      return {
        start1: false, // 控制输入验证码
        smsCode: '',
        phone: ''
      }
    },
    methods: {
      toLogin() {
        this.$router.push({
          path: '/login'
        })
      },
      sendCode() {
        if (this.verifyUtil.isPhoneNum(this.phone)) {
          this.message.Toast(this, 'warn', '手机号格式错误, 请重新输入', false);
          return false
        }
        this.$dialog.loading.open('验证码发送中...');
        let self = this;
        let param = ['login', this.phone, '0'];
        this.$Ice_UserService.requestPhoneSms(param, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.start1 = true;
              self.$dialog.loading.close();
              self.isFirstStepDis = false;
              self.message.Toast(self, 'correct', result.msg, false);
            } else {
              // 发送失败
              self.$dialog.loading.close();
              self.message.Toast(self, 'error', result.msg, false);
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.message.Toast(self, 'error', '错误' + error, 'error', false);
          }
        ));
      },
      loginClick() {
        let self = this;
        if (this.verifyUtil.isNull(this.smsCode)) {
          this.message.Toast(this, 'warn', '验证码不能为空, 请完善输入', false);
          return
        }
        this.$Ice_UserService.userVerifyBySms(this.phone,this.smsCode, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.$app_store.commit(USER_INFO, result.obj);
              let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
              // 跳转信息大厅
              self.$router.push({
                path: redirect
              });
            } else {
              self.message.Toast(self, 'error', result.msg, false);
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.message.Toast(self, 'error', '错误' + error, 'error', false);
          }
        ));
      }
    }
  }
</script>

<style scoped>

</style>
