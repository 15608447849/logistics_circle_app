<template>
  <div class="login">
    <img src="../../assets/images/small/login_logo.png" alt="" class="loginPic">
    <div class="login_input">
        <input type="text" placeholder="用户名/手机号码" class="userNameBorderBottom">
        <input type="password" placeholder="密码" class="userName">
    </div>
    <button class="loginBut">登 录</button>
    <div class="fastLogin">
      快捷登录
    </div>
    <div class="forgetPwd">
      <span>新用户注册</span>
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
          this.$router.push({path: '/login/updatapwd'})
      },
      loginClick() {
        let self = this;
        if (this.validator()) {
          this.$Ice_UserService.userVerify(this.account, this.password, new IceCallback(
            function (result) {
              console.log(result);
              // 登录成功
              if(result.cstatus === 0) {
                self.$app_store.commit(USER_INFO, result);
                self.$app_store.commit(USER_TOKEN, result.upw);
                let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
                self.$router.push({
                  path: redirect
                })
              } else {
                self.$dialog.toast({
                  mes: '登录失败,' + result.msg,
                  icon: 'error',
                  timeout: 1500
                });
              }
            },
            function (error) {
              console.log("登录失败~", error);
            }
          ))
        }
      },
      validator() {
        if (this.verifyUtil.isNull(this.account)) {
          this.notify('账号不能为空');
          return false
        }
        if (this.verifyUtil.isEffPwd(this.password)) {
          this.notify('密码为空或长度小于6位,请完善输入');
          return false
        }
        return true
      },
      notify(str) {
        this.$dialog.notify({
          mes: str,
          timeout: 1500
        });
      }
    }
  }
</script>
<style>

</style>

