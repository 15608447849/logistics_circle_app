<template>
  <div class="register">
    <div class="input_div"><span class="start">*</span><span class="text">用户名</span><input type="text" class="input" placeholder="请设置用户名"></div>
    <div class="input_div"><span class="start">*</span><span class="text">手机号</span><input type="text" class="input"  placeholder="可用于登录和找回密码"></div>
    <div class="input_div"><span class="start">*</span><span class="text">密码</span><input type="password" class="input" placeholder="请设置登录密码"></div>
    <div class="input_div"><span class="start">*</span><span class="text">确认密码</span><input type="password" class="input" placeholder="请确认登录密码"></div>
    <div class="input_div"><span class="start">*</span><span class="text">验证码</span><input type="text" class="input_verificationcode" placeholder="请输入验证码"><a class="verification">获取短信验证码</a></div>
    <div class="input_div"><span class="text_right">邀请码</span><input type="text" class="input" placeholder="请输入您收到的邀请码，没有可不填"></div>
    <div class="input_div"><input type="checkbox"><span>阅读并接收本平台</span><span class="text_blue">《**用户协议》</span><span>及</span><span class="text_blue">《**声明》</span></div>
    <button class="btn">注册</button>
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

<style>
  a{
    text-decoration : none
  }
  input{
    text-indent: 15px;
  }
  .input_div{
    display:block;
    margin-bottom:20px;
 }
 .start{
    color:red;
    }
 .verification{
    display:inline-block;
    width:120px;
    height:30px;
    color:blue;
    font-size:16px;
    line-height:30px;
    border:1px solid gray;
    border-radius: 5px;
    text-align: center;
    vertical-align: top;
    margin-left: 20px;
}
 .text{
   display:inline-block;
   width:64px;
   text-align: right;
 }
  .input{
    height:25px;
    width:252px;
    margin-left:20px;
  }
  .input_verificationcode{
    height:25px;
    width:110px;
    margin-left:20px;
  }
  .text_right{
    margin-left:24px;
  }
  .text_blue{
    color:blue;
  }
  .btn{
    display:block;
    width:252px;
    height:30px;
    background:blue;
    color:white;
    margin:0 auto;
  }
</style>
