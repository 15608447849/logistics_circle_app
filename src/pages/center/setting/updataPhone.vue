<template>
   <div>
       <div class="issueHeaderLog">
         <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
         <span>绑定手机号</span>
         <div class="alignCenter"></div>
       </div>
      <div v-show="firstStepBool">
        <div class="updataPhonePic">
          <img src="../../../assets/images/small/updataphone.png" alt="">
        </div>
        <div class="bindingPhone"><span>绑定的手机号：</span><input type="text" :value="userPhone"> </div>
        <button class="moveOutBlack" @click="toUpdataPhone">更换手机号</button>

      </div>

     <!--<van-button style="width:7.08rem;height:.64rem;margin-left:.21rem;line-height:.64rem;" size="large" type="primary" @click="firstStep()"-->
                 <!--class="updataPwdBtn">123</van-button>-->

     <div class="verificationBox" v-show="secondStepBool">
       <span class="verificationCode">输入验证码</span>
       <!-- 密码输入框 -->
       <van-password-input
         :value="smsCode"
         info="验证码为 6 位数字"
         @focus="showKeyboard = true"
       />
       <!-- 数字键盘 -->
       <van-number-keyboard
         :show="showKeyboard"
         @input="onInput"
         @delete="onDelete"
         @blur="showKeyboard = false"
       />
       <van-button style="width:7.08rem;height:.64rem;margin-left:.21rem;line-height:.64rem;margin-top:.5rem;" size="large" type="primary" @click="secondStep()" v-show="secondStepBool" class="updataPwdBtn">下一步</van-button>
     </div>

       <div class="newsPhoneBox" v-show="thirdStepBool">
         <div class="newsPhone">
           <span>手机号</span>
           <input type="text" placeholder="请输入更换后的手机号码">
         </div>
         <div class="newsPhoneCode">
           <input type="text" placeholder="请输入验证码">
           <yd-sendcode
             class="getVerificationCode"
             slot="right"
             v-model="start1"
             @click.native="sendCode"
             type="primary"
             init-str="获取验证码"
           ></yd-sendcode>
         </div>
       </div>

     <!--<div class="updataPwdinputBox" v-show="thirdStepBool">-->
       <!--<div class="inputPassword">-->
         <!--<span class="textRed">*</span><span class="inputspan">密&nbsp&nbsp码</span><div class="inputBox"><input type="password" v-model="password" placeholder="请设置新密码"></div>-->
       <!--</div>-->
       <!--<div class="inputPassword">-->
         <!--<span class="textRed">*</span><span class="inputspan">确认密码</span><div class="inputBox"><input type="password" v-model="rPassword" placeholder="请确认新密码"></div>-->
       <!--</div>-->
       <!--<van-button  style="width:7.08rem;height:.64rem;margin-left:.11rem;line-height:.64rem;margin-top:.5rem;" size="large" type="primary" @click="thirdStep()" v-show="thirdStepBool" class="updataPwdBtn">保存</van-button>-->
     <!--</div>-->



   </div>
</template>
<script>
    export default {
      data(){
        return{
          showKeyboard: true,
          firstStepBool: false, // 第一步
          secondStepBool: false, // 第二步
          thirdStepBool: true, // 第三步
          userPhone:0,
          smsCode: '',
        }
      },
      mounted() {
        this.userPhone = this.$route.query.userPhone;
      },
      methods:{
        fallback(){
          this.$router.go(-1)
        },
        toUpdataPhone(){
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
            },

          ));
        },
        secondStep() {
          let self = this;
          // 校验验证码
          this.$Ice_UserService.verifySms(this.userPhone, this.smsCode, new IceCallback(
            function (result) {
              if (result.code === 0) {
                self.secondStepBool = false;
                self.thirdStepBool = true;
              } else {
                self.message.Toast(self,'error',result.msg,false);
              }
            },
            function (error) {
              self.message.Toast(self,'error','错误' + error ,false);
            }
          ));
        },
        onInput(key) {
          this.smsCode = (this.smsCode + key).slice(0, 6);
          console.log(this.smsCode)
        },
        onDelete() {
          this.smsCode = this.smsCode.slice(0, this.smsCode.length - 1);
          console.log(this.value)
        }
      }
    }
</script>

<style>

</style>
