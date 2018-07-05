<template>
  <div class="login">
     <h5>用户名密码登录</h5>
    <input type="text" placeholder="手机/用户名">
    <input type="text" placeholder="密码">
    <input type="checkbox"><span>下次自动登录</span>
    <button>登录</button>
    <span>忘记密码？</span><span>短信快捷登录</span>
    <>立即注册</>
  </div>
</template>
<script>



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
<style>
   h5{
     text-align: center;
     margin-bottom:20px;
   }
</style>

