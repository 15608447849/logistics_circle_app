<template>
  <div class="register">
    <yd-navbar title="新用户注册" bgcolor="#1E90FF" color="#FFFFFF" fontsize="18px">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon  color="#FFFFFF"></yd-navbar-back-icon>
      </router-link>

      <img slot="right" src="../../assets/images/small/logo_26.png"/>
    </yd-navbar>
    <yd-cell-group v-show="thirdStep">
      <yd-cell-item>
        <yd-icon class="span" slot="icon" name="phone3" size=".45rem"></yd-icon>
        <input type="text" slot="right" v-model="phone" placeholder="请输入手机号码">
        <yd-sendcode slot="right"
                     v-model="start1"
                     @click.native="sendCode"
                     type="warning"
        ></yd-sendcode>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group v-show="thirdStep">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">验证码：</span>
          <yd-input slot="right" v-model="verificationCode" placeholder="请输入短信验证码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
    </yd-cell-group>
    <yd-cell-group v-show="thirdStep">
      <yd-cell-item>
        <span slot="left" class="span">用户名：</span>
        <yd-input slot="right" v-model="account" :debug="true" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left" class="span">密码：</span>
        <yd-input slot="right" type="password" v-model="password" placeholder="请设置登录密码"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left" class="span">确认密码：</span>
        <yd-input slot="right" type="password" v-model="rPassword" placeholder="请确认登录密码"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left" class="span">邀请码：</span>
        <yd-input slot="right" v-model="invitationCode" placeholder="请输入您收到的邀请码，没有可不填"></yd-input>
      </yd-cell-item>
    </yd-cell-group>

    <yd-button size="large" type="primary" @click.native="firstStep()" v-show="firstStepBool"
               :disabled='isFirstStepDis'>下一步
    </yd-button>
    <yd-button size="large" type="primary" @click.native="secondStep()" v-show="secondStepBool"
               :disabled='isFirstStepDis'>下一步
    </yd-button>
    <yd-button size="large" type="primary" @click.native="thirdStep()" v-show="thirdStepBool"
               :disabled='isFirstStepDis'>注 册
    </yd-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        firstStepBool: true, // 第一步
        secondStepBool: false, // 第二步
        thirdStepBool: false, // 第三步
        isFirstStepDis: true,
        secondStepDis: true,
        thirdStepDis: true,
        start1: false, // 控制输入验证码
        account: '', // 用户名
        phone: '', // 手机号码
        password: '', // 账号密码
        rPassword: '', // 重复密码
        verificationCode: '', // 验证码
        invitationCode: '' // 邀请码
      }
    },
    methods: {
      registerValidator() {
        if (this.verifyUtil.isNull(this.account)) {
          this.notify('账号不能为空');
          return false
        }
        if (this.verifyUtil.isEffPwd(this.password)) {
          this.notify('密码为空或长度小于6位,请完善输入');
          return false
        }
        if (this.verifyUtil.isTwoPsd(this.password, this.rPassword)) {
          this.notify('密码两次输入不一致');
          return false
        }
        return true
      },
      notify(str) {
        this.$dialog.notify({
          mes: str,
          timeout: 1500
        });
      },
      sendCode() {
        if (this.verifyUtil.isPhoneNum(this.phone)) {
          this.notify('手机号格式错误, 请重新输入');
          return false
        }
        this.$dialog.loading.open('验证码发送中...');
        let self = this;
        console.log(this.phone)
        this.$Ice_UserService.requestPhoneSms(this.phone, false, new IceCallback(
          function (result) {
            console.log("完成" + result);
            if (result === 0) {
              self.start1 = true;
              self.$dialog.loading.close();
              self.isFirstStepDis = false;
              self.$dialog.toast({
                mes: '已发送',
                icon: 'success',
                timeout: 1500
              });
            } else {
              // 发送失败
              self.$dialog.loading.close();
              self.$dialog.toast({
                mes: '验证码发送失败, 请稍后重试',
                icon: 'error',
                timeout: 1500
              });
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.$dialog.toast({
              mes: '错误' + error,
              icon: 'error',
              timeout: 1500
            });
          }
        ));
      },
      firstStep() {
        this.firstStepBool = false;
        this.secondStepBool = true;
      },
      secondStep() {
        let self = this;
        // 校验验证码
        this.$Ice_UserService.verifySms(this.phone, this.verificationCode, new IceCallback(
          function (result) {
            if (result === 0) {
              self.secondStepBool = false;
              self.thirdStepBool = true;
            } else {
              self.$dialog.toast({
                mes: '验证码输入错误',
                icon: 'error',
                timeout: 1500
              });
            }
          },
          function (error) {
            self.$dialog.toast({
              mes: '错误' + error,
              icon: 'error',
              timeout: 1500
            });
          }
        ));
      },
      thirdStep() {
        let self = this;
        if (this.registerValidator()) {
          // 验证用户名是否存在
          this.$Ice_UserService.checkUsernameRepetition(this.account, new IceCallback(
            function (result) {
              if (result === 0) {
                // 用户名不存在, 注册用户
                self.$Ice_UserService.userRegister(self.account, self.phone, self.password, self.invitationCode, self.verificationCode, new IceCallback(
                  function (result) {
                    if (result === 0) {
                      console.log(result)
                      // store 保存登陆状态
                      // 跳转信息大厅
                    } else {
                      self.$dialog.toast({
                        mes: '注册失败',
                        icon: 'error',
                        timeout: 1500
                      });
                    }
                  },
                  function (error) {
                    self.$dialog.toast({
                      mes: '错误' + error,
                      icon: 'error',
                      timeout: 1500
                    });
                  }
                ))
              } else {
                self.$dialog.toast({
                  mes: '注册失败, 用户名已存在',
                  icon: 'error',
                  timeout: 1500
                });
              }
            },
            function (error) {
              self.$dialog.toast({
                mes: '错误' + error,
                icon: 'error',
                timeout: 1500
              });
            }
          ));


        }
      }
    }
  }
</script>

<style>

</style>
