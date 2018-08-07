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
        <div class="bindingPhone"><span>绑定的手机号：</span><input type="text" :value="oldUserPhone"> </div>
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
         <div class="newsPhone needBorder">
           <span>手机号:</span>
           <input type="text" placeholder="请输入新的手机号码" v-model="newsPhone">
           <div></div>
         </div>
         <div class="newsPhoneCode needBorder">
           <span>验证码:</span>
           <input type="number" placeholder="请输入新的验证码" v-model="newsPhoneCode">
           <yd-sendcode
             style="margin-top:.27rem;"
             class="getVerificationCode"
             slot="right"
             v-model="start1"
             @click.native="sendCode"
             type="primary"
             init-str="获取验证码"
           ></yd-sendcode>
         </div>
         <van-button style="width:7.08rem;height:.64rem;margin-left:.21rem;line-height:.64rem;margin-top:.5rem;" size="large" type="primary" @click="changePhone">确 定</van-button>
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
          userId: this.$app_store.state.userId,
          showKeyboard: true,
          firstStepBool: true, // 第一步
          secondStepBool: false, // 第二步
          thirdStepBool: false, // 第三步
          oldUserPhone: 18373270790,// 旧的手机号码
          smsCode: '',
          newsPhone:0, // 新的手机号码
          newsPhoneCode:0,
          start1:false // 控制输入验证码
        }
        // 第一步 从缓存内取出userInfo.uphone
        // 第二步 修改手机号码 若修改成功 替换本地保存的userInfo.uphone = 新手机号码
      },
      methods:{
        fallback(){
          this.$router.go(-1)
        },
        toUpdataPhone(){
          let self = this;
          if (this.verifyUtil.isPhoneNum(this.oldUserPhone)) {
            this.message.Toast(this,'warn','手机号格式错误, 请重新输入',false);
            return false
          }
          let param = ['forgetpw',this.oldUserPhone,'0'];
          debugger
          this.$Ice_UserService.requestPhoneSms(param, new IceCallback(
            function (result) {
              if (result.code === 0) {
                self.firstStepBool = false;
                self.secondStepBool = true;
              } else {
                self.$vux.toast.text(result.msg, 'top');
              }
            },
            function (error) {
              self.$dialog.loading.close();
              self.$vux.toast.text(error, 'top');
              // self.message.Toast(self,'error','错误' + error,'error',false);
            },

          ));
        },
        secondStep() {
          let self = this;
          // 校验验证码
          debugger
          this.$Ice_UserService.verifySms(this.oldUserPhone, this.smsCode, new IceCallback(
            function (result) {
              if (result.code === 0) {
                debugger
                self.secondStepBool = false;
                self.thirdStepBool = true;
              } else {
                self.message.Toast(self,'error',result.msg,false);
              }
            },
            function (error) {
              debugger
              self.message.Toast(self,'error','错误' + error ,false);
            }
          ));
        },
        sendCode() {
          if (this.verifyUtil.isPhoneNum(this.newsPhone)) {
            this.message.Toast(this, 'warn', '手机号格式错误, 请重新输入', false);
            return false
          }
          this.$dialog.loading.open('验证码发送中...');
          let self = this;
          let param = ['login', this.newsPhone, '0'];
          this.$Ice_UserService.requestPhoneSms(param, new IceCallback(
            function (result) {
              debugger
              if (result.code === 0) {
                self.start1 = true;
                self.$dialog.loading.close();
                self.isFirstStepDis = false;
                self.message.Toast(self, 'correct', result.msg, false);
              } else {
                // 发送失败
                self.$dialog.loading.close();
                self.message.Toast(self, 'error', result.msg, false);
              }
            },
            function (error) {
              self.$dialog.loading.close();
              self.message.Toast(self, 'error', '错误' + error, 'error', false);
            }
          ));
        },

        changePhone () {
          let self = this;
          debugger
          this.$Ice_UserService.changePhone(this.oldUserPhone,this.newsPhone,this.newsPhoneCode, new IceCallback(
            function (result) {
              if (result.code === 0) {
                self.start1 = true;
                self.$dialog.loading.close();
                self.isFirstStepDis = false;
                self.message.Toast(self, 'correct', result.msg, false);
              } else {
                // 发送失败
                self.$dialog.loading.close();
                self.message.Toast(self, 'error', result.msg, false);
              }
            },
            function (error) {
              self.$dialog.loading.close();
              self.message.Toast(self, 'error', '错误' + error, 'error', false);
            }
          ));
          // queryIce(user.UserServicePrx, 'UserService', 'updateUserPhone', token, str2jlong(newPhone), smsCode, callback);
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
