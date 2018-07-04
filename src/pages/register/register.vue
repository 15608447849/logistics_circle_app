<template>
  <div>

    用户名:<input v-model="account"/><br/>
    手机号:<input v-model="phone"/><br/>
    密码:<input v-model="password"/><br/>
    验证码:<input v-model="verificationCode"/><br/>
    邀请码:<input v-model="invitationCode"/><br/>
    <button @click="regesterBtnOnclick"> 注册 </button>

  </div>
</template>
<script>

import * as md5 from "md5"


export default {
  data () {
    return {
      account:"",
      phone:"",
      password:"",
      verificationCode:"",
      invitationCode:""
    }
  },
  methods: {
    regesterBtnOnclick: function () {
      this.userRegester(
        this.account,
        num2long(Number(this.phone)),
        md5(this.password),
        this.verificationCode,
        this.invitationCode,
        function (result) {
        console.log(result)
      })
    }
  }
}
</script>

<style/>
