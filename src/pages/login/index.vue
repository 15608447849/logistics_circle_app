<template>
  <div class="login">
     <h5>用户名密码登录</h5>
    <div class="input_div"><input type="text" class="input" placeholder="手机/用户名" v-model="account"></div>
    <div class="input_div"><input type="password" class="input" placeholder="密码" v-model="password"></div>
    <div class="input_div"><input class="remember" type="checkbox"><span>下次自动登录</span></div>
    <button class="login_btn" @click="loginBtnOnclick">登录</button>
    <div class="find_register"><span>忘记密码？</span><span class="note">短信快捷登录</span></div>
    <div class="find_register" ><span class="register">立即注册</span></div>
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

      this.$Ice_UserService.userVerify(this.account,this.password,new IceCallback(
        function (params) {
          console.log("准备访问",params);
        },
        function (result) {
          console.log("完成",result);

        },
        function (error) {
          console.log("错误",error);
        },

      ))


    }
  }
}
</script>
<style>
   h5{
     text-align: center;
     margin-bottom:20px;
   }
   .input_div{
     display:block;
     margin-bottom:20px;
   }
  .input{
    height:25px;
    width:80%;
    margin-left:10%;
  }
  .remember{
    margin-left:10%;
  }
  .login_btn{
    display:block;
    width:80%;
    height:30px;
    margin:0 auto;
    border:1px solid blue;
    border-radius: 5%;
    background:blue;
  }
  .find_register{
    display:block;
    width:80%;
    margin:0 auto;
    margin-top:20px;
    color:blue;
  }
  .note{
    float:right;
  }
  .register{
    float:right;
    font-size:18px;
    font-weight:bold;
    color:blue;
  }
</style>

