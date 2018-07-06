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

