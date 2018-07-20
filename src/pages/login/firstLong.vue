<template>
  <div class="login">
    <img src="../../assets/images/small/login_logo.png" alt="" class="loginPic">
    <div class="login_input">
      <input type="text" v-model="account" placeholder="注册的手机号码" class="userNameBorderBottom">
      <div><input type="password" v-model="password" placeholder="密码" class="FuserPwd"><a class="getVerificationCode">获取验证码</a></div>
    </div>
    <button class="loginBut" @click="loginClick">登 录</button>
    <div class="FfastLogin" @click="toLogin()">
      账号密码登录
    </div>
    <div class="forgetPwd">
      <span @click="toPageRegister">新用户注册</span>
      <span @click="toupdatapwd">忘记密码？</span>
    </div>
  </div>
</template>

<script>
    export default {
       methods:{
         toLogin(){
           this.$router.push({
             path: '/login'
           })
         }
       }
    }
</script>

<style scoped>

</style>
