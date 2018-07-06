<template>
  <div class="login">
    <yd-navbar title="登录"></yd-navbar>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">用户名：</span>
        <yd-input slot="right" required v-model="account" ref="account" max="20" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密&nbsp&nbsp&nbsp&nbsp码：</span>
        <yd-input slot="right" type="password" v-model="password" ref="password" min="6" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <div class="input_div"><input class="remember" type="checkbox"><span>下次自动登录</span></div>
    <button class="login_btn" @click="loginClick">登录</button>
    <div class="find_register"><span>忘记密码？</span><span class="note">短信快捷登录</span></div>
    <div class="find_register"><span class="register">立即注册</span></div>
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
  h5 {
    text-align: center;
    margin-bottom: 20px;
  }

  .input_div {
    display: block;
    margin-bottom: 20px;
  }

  .input {
    height: 25px;
    width: 80%;
    margin-left: 10%;
  }

  .remember {
    margin-left: 10%;
  }

  .login_btn {
    display: block;
    width: 80%;
    height: 30px;
    margin: 0 auto;
    border: 1px solid blue;
    border-radius: 5%;
    background: blue;
  }

  .find_register {
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    color: blue;
  }

  .note {
    float: right;
  }

  .register {
    float: right;
    font-size: 18px;
    font-weight: bold;
    color: blue;
  }
</style>

