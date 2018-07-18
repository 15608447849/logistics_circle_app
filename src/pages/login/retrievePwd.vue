<template>
  <div>
    <div>
      <yd-navbar title="找回密码" bgcolor="#1E90FF" color="#FFFFFF" fontsize="18px">
        <router-link to="/login" slot="left">
          <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
        </router-link>
        <img slot="right" src="../../assets/images/small/logo_26.png"/>
      </yd-navbar>
    </div>
    <div class="phoneNum">
      <span class="numText">手机号码</span>
      <span class="eightSix">+86</span>
      <div class="inputNumBox">
        <input v-model="userPhone" type="text" placeholder="请输入您的手机号" class="inputNum">
      </div>
      <button class="nextStep" @click="firstStep()">下一步</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userPhone: '',
      }
    },
    methods:{
      firstStep() {
        let self = this;
        // 验证手机号码
        if (this.verifyUtil.isPhoneNum(this.userPhone)) {
          this.message.Toast(this,'warn','手机号格式错误, 请重新输入',false);
          return false
        }
        // 发送短信验证码
        this.$Ice_UserService.requestPhoneSms(this.userPhone, false, new IceCallback(
          function (result) {
            result = JSON.parse(result);
            debugger
            if(result.code === 0) {
              // 短信验证码发送成功
            } else {
              self.message.Toast(self,'warn',result.msg,false);
            }
          },
          function (error) {
            self.message.Toast(self,'warn',error,false);
          }
        ))
      },
      toVerification(){
        this.$router.push({path: '/login/Verification'})
      },
    }
  }
</script>

<style scoped>
</style>
