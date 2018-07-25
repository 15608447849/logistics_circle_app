<template>
  <div>
    <div>
      <yd-navbar title="找回密码" bgcolor="#1E90FF" color="#FFFFFF" fontsize="18px">
        <router-link to="" @click.native="backBtnClick" slot="left">
          <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
        </router-link>
        <img slot="right" src="../../assets/images/small/logo_26.png"/>
      </yd-navbar>
    </div>
    <div class="phoneNum" v-show="firstStepBool">
      <span class="numText">手机号码</span>
      <span class="eightSix">+86</span>
      <div class="inputNumBox">
        <input v-model="userPhone" type="text" placeholder="请输入您的手机号" class="inputNum">
      </div>
    </div>
    <div class="verificationBox" v-show="secondStepBool">
      <span class="verificationCode">输入验证码</span>
      <!--<ul class="verificationList">-->
        <!--<li><input type="text"></li>-->
        <!--<li><input type="text"></li>-->
        <!--<li><input type="text"></li>-->
        <!--<li><input type="text"></li>-->
      <!--</ul>-->
      <div class="inputNumBox">
        <input v-model="smsCode" type="text" placeholder="请输入您的短信验证码" class="inputNum">
      </div>
    </div>
    <div class="updataPwdinputBox" v-show="thirdStepBool">
      <div class="inputPassword">
        <span class="textRed">*</span><span class="inputspan">密&nbsp&nbsp码</span><div class="inputBox"><input type="password" v-model="password" placeholder="请设置新密码"></div>
      </div>
      <div class="inputPassword">
        <span class="textRed">*</span><span class="inputspan">确认密码</span><div class="inputBox"><input type="password" v-model="rPassword" placeholder="请确认新密码"></div>
      </div>
    </div>
    <button class="nextStep" @click="firstStep()" v-show="firstStepBool">下一步</button>
    <button class="nextStep" @click="secondStep()" v-show="secondStepBool">下一步</button>
    <button class="nextStep" @click="thirdStep()" v-show="thirdStepBool">保存</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstStepBool: true, // 第一步
        secondStepBool: false, // 第二步
        thirdStepBool: false, // 第三步
        userPhone: '',
        smsCode: '',
        password: '', // 账号密码
        rPassword: '', // 重复密码
      }
    },
    methods:{
      firstStep() {
        let self = this;
        // 验证手机号码
        if (this.verifyUtil.isPhoneNum(this.userPhone)) {
          this.message.Toast(this,'warn','手机号格式错误, 请重新输入',false);
          return false
        }
        let param = ['forgetpw',this.userPhone,'0'];
        this.$Ice_UserService.requestPhoneSms(param, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.firstStepBool = false;
              self.secondStepBool = true;
            } else {
              self.message.Toast(self,'error',result.msg,false);
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.message.Toast(self,'error','错误' + error,'error',false);
          }
        ));
      },
      secondStep() {
        let self = this;
        // 验证短信号码
        this.$Ice_UserService.verifySms(this.userPhone,this.smsCode, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.secondStepBool = false;
              self.thirdStepBool = true;
            } else {
              self.message.Toast(self,'error',result.msg,false);
            }
          },
          function (error) {
            self.message.Toast(self,'error','错误' + error,'error',false);
          }
        ));
      },
      thirdStep() {
        let self = this;
        if(this.registerValidator()) {
          this.$Ice_UserService.updatePasswordByPhone(this.userPhone,this.smsCode,this.rPassword, new IceCallback(
            function (result) {
              if (result.code === 0) {
                self.message.Toast(self,'correct',result.msg,false);
                setTimeout(()=> {
                  self.$router.push({
                    path: '/login'
                  });
                },1000);
              } else {
                self.message.Toast(self,'error',result.msg,false);
              }
            },
            function (error) {
              self.message.Toast(self,'error','错误' + error,'error',false);
            }
          ));
        }
      },
      // 验证账号输入格式
      registerValidator() {
        if (this.verifyUtil.isEffPwd(this.password)) {
          this.message.Toast(this,'warn','密码为空或长度小于6位, 请完善输入',false);
          return false
        }
        if (this.verifyUtil.isTwoPsd(this.password, this.rPassword)) {
          this.message.Toast(this,'warn','密码两次输入不一致',false);
          return false
        }
        return true
      },
      backBtnClick() {
        // 第一步
        if(this.firstStepBool) {
          this.$router.push({
            path: '/login'
          });
          return
        }
        // 第二步
        if(this.secondStepBool) {
          this.firstStepBool = true;
          this.secondStepBool = false;
          return
        }
        // 第三步
        if(this.thirdStepBool) {
          this.secondStepBool = true;
          this.thirdStepBool = false;
          return
        }
      },
      toVerification(){
        this.$router.push({path: '/login/Verification'})
      },
    }
  }
</script>

<style scoped>
</style>
