<template>
  <div class="login">
    <img src="../../assets/images/small/login_logo.png" alt="" class="loginPic">
    <div class="login_input">
        <input type="text" v-model="account" placeholder="用户名/手机号码" class="userNameBorderBottom">
        <input type="password" v-model="password" placeholder="密码" class="userPwd">
    </div>
    <div class="Flogin_input displayNone">
      <input type="text" v-model="account" placeholder="注册的手机号" class="FuserNameBorderBottom">
      <div>
        <input type="password" v-model="password" placeholder="验证码" class="FuserPwd">
        <a class="getVerificationCode">获取验证码</a>
      </div>
    </div>
    <button class="loginBut" @click="loginClick">登 录</button>
    <div class="fastLogin displayNone">
      快捷登录
    </div>
    <div class="FfastLogin displayNone">
      账号密码登录
    </div>
    <div class="forgetPwd">
      <span @click="toPageRegister">新用户注册</span>
      <span @click="toupdatapwd">忘记密码？</span>
    </div>
  </div>
</template>
<script>
  import {
    USER_INFO,
    USER_TOKEN
  } from '../../store/mutation-types'

  export default {
    data() {
      return {
        account: "",
        password: "",
      }
    },
    methods: {
      toPageRegister() {
        this.$router.push({
          path: '/register'
        })
      },
      toupdatapwd(){
          this.$router.push({path: '/retrievePwd'})
      },
      loginClick() {
        let self = this;
        if (this.validator()) {
          this.$Ice_UserService.userVerify(this.account, this.password, new IceCallback(
            function (result) {
              // 登录成功
              if(result.cstatus === 0) {
                self.$app_store.commit(USER_INFO, result);
                self.$app_store.commit(USER_TOKEN, result.upw);
                let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
                self.$router.push({
                  path: redirect
                })
              } else {
                self.message.Toast(self,'error',result.msg,false);
              }
            },
            function (error) {
              self.message.Toast(self,'服务器连接失败, 请稍后重试',result.msg,false);
            }
          ))
        }
      },
      validator() {
        if (this.verifyUtil.isNull(this.account)) {
          this.message.Toast(this,'warn','账号不能为空',false);
          return false
        }
        if (this.verifyUtil.isEffPwd(this.password)) {
          this.message.Toast(this,'warn','密码为空或长度小于6位,请完善输入',false);
          return false
        }
        return true
      }
    }
  }
</script>
<style>

</style>

