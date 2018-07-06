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
      /*
      this.$Ice_OrderService.queryAllByKey(this.account,new IceCallback(
        function (params) {
          console.log("准备访问",params);
        },
        function (result) {
          console.log("完成",result);
        },
        function (error) {
          console.log("错误",error);
        }

      ));*/
      let comm = this.$Ice_OrderService;

      // comm.autoGenerationOrderSequence(new IceCallback(
      //   function (params) {
      //     console.log("准备访问",params);
      //   },
      //   function (result) {
      //     console.log("完成",result);
      //   },
      //   function (error) {
      //     console.log("错误",error);
      //   }
      // ));


      let json = {
        consphone:'13587458521',
        orderno:'1807061206024610000',
        num:200,startaddr:'耒阳市第二中学',
        phone2:'13585458521',
        redictc:101,
        tndictc:71,
        numdictc:51,
        startc:10170310,
        arriaddr:'衡阳大道1号',
        phone1:'13586458521',
        insureamt:0,
        arriarc:10170305,
        wm:30.2,
        price:60,
        consignee:'章5555广',
        dmdictc:91,
        vnum:2,
        vldictc:1,
        codamt:0,
        vtdictc:11,
        padictc:61,
        wmdictc:41,
        puberid:1,
        ctdictc:31,
        ptdictc:21,
        pmdictc:81,
        billno:'E099393990021',
        pusdate:'',
        pustime:'',
        puedate:'',
        puetime:'',
        easdate:'',
        eastime:'',
        eaedate:'',
        eaetime:''
      };

      console.log(JSON.stringify(json));
      comm.releaseOrder("123456789",JSON.stringify(json) ,new IceCallback(
        function (params) {
          console.log("准备访问",params);
        },
        function (result) {
          console.log("完成",result);
        },
        function (error) {
          console.log("错误",error);
        }

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

