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
    <div class="fastLogin displayNone" @click="tofirstLong()">
      快捷登录
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
    USER_ID, COMP_INFO
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
      tofirstLong() {
        this.$router.push({
          path: '/login/firstLong'
        })
      },
      toupdatapwd(){
          this.$router.push({path: '/retrievePwd'})
      },
      loginClick() {
        let self = this;
        if (this.validator()) {
          this.$Ice_UserService.login(this.account, this.password, new IceCallback(
            function (result) {
              result = JSON.parse(result);
              // 登录成功
              if(result.code === 0) {
                self.$app_store.commit(USER_INFO, result.obj);
                self.$app_store.commit(USER_ID, result.obj.oid);
                // 选择企业信息
                self.selectComp(result.obj);
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
      selectComp(userInfo) {
        // 根据选中企业id获取企业信息
        // 获取企业详情
        this.getCompInfo(userInfo.oid);
      },
      getCompInfo(oid) {
        let self = this;
        this.$Ice_CompService.querygetCompByUid(oid,
          new IceCallback(
            function (result) {
              result = JSON.parse(result);
              self.$app_store.commit(COMP_INFO,result.obj);
              let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
              self.$router.push({
                path: redirect
              })
            },
            function (error) {
              this.message.Toast(this,'warn','企业信息获取失败, 请尝试从新登录',false);
            }
          )
        );
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

