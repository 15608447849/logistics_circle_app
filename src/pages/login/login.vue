<template>
  <div>
    用户名:<input v-model="account"/>
    密  码:<input v-model="password"/>
    <button @click="loginBtnOnclick"> 登陆 </button>

  </div>
</template>
<script>

import * as md5 from "md5"

export default {
  data () {
    return {
      account:"",
      password:"",

    }
  },
  methods: {
    loginBtnOnclick: function () {
      this.userVerify(this.account,md5(this.password),function (result) {
        console.log(result)
      })
    }
  }
}
</script>

<style/>
