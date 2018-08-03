<template>
  <div style="background:white;height:13.25rem;">
    <div>
      <yd-navbar title="新用户注册" bgcolor="#1E90FF" color="#FFFFFF" fontsize="16px" height=".8rem;">
        <router-link to="" @click.native="backBtnClick" slot="left">
          <yd-navbar-back-icon color="#FFFFFF"></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <!--<div class="issueHeaderLog">-->
        <!--<i @click="fallback" class="icon iconfont icon-btngoback back"></i>-->
        <!--<span>新用户注册</span>-->
      <!--</div>-->
      <yd-cell-group v-show="firstStepBool">
        <yd-cell-item>
          <yd-icon class="span" slot="icon" name="phone3" size=".45rem"></yd-icon>
          <input type="text" slot="right" v-model="phone" placeholder="请输入手机号码">
          <yd-sendcode slot="right"
                       v-model="start1"
                       @click.native="sendCode"
                       type="warning"
          ></yd-sendcode>
        </yd-cell-item>
        <van-button style="width:7.08rem;height:.64rem;margin-left:.21rem;line-height:.64rem;margin-top:.5rem;" size="large" type="primary" @click="firstStep()" v-show="firstStepBool" :disabled='isFirstStepDis'>下一步</van-button>

        <!--<cube-button v-show="firstStepBool" :light="true"  @click="firstStep()" :disabled='isFirstStepDis'>下一步</cube-button>-->

        <!--<yd-button size="large" type="primary" @click.native="secondStep()" v-show="secondStepBool"-->
        <!--:disabled='isFirstStepDis'>下一步-->
        <!--</yd-button>-->
        <!--<yd-button size="large" type="primary" @click.native="thirdStep()" v-show="thirdStepBool"-->
        <!--:disabled='isFirstStepDis'>注 册-->
        <!--</yd-button>-->
      </yd-cell-group>



      <yd-cell-group v-show="secondStepBool">
        <yd-cell-group>
          <yd-cell-item>
            <span slot="left">验证码：</span>
            <yd-input slot="right" v-model="verificationCode" placeholder="请输入短信验证码"></yd-input>
          </yd-cell-item>
          <van-button style="width:7.08rem;height:.64rem;margin-left:.21rem;line-height:.64rem;margin-top:.5rem;" size="large" type="primary" @click="secondStep()" v-show="secondStepBool" :disabled='isFirstStepDis'>下一步</van-button>
        </yd-cell-group>
      </yd-cell-group>
      <!--<yd-cell-group v-show="thirdStepBool">-->




      <yd-cell-group v-show="thirdStepBool">
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
          <yd-input slot="right" v-model="invitationCode" placeholder="请输入您收到的邀请码，没有可不填></yd-input>

          <!--<yd-button size="large" type="primary" @click.native="thirdStep()" v-show="thirdStepBool"-->
          <!--:disabled='isFirstStepDis'>注 册-->
          <!--</yd-button>-->
        </yd-cell-item>
        <van-button  style="width:7.08rem;height:.64rem;margin-left:.21rem;line-height:.64rem;margin-top:.5rem;" size="large" type="primary" @click="thirdStep()" v-show="thirdStepBool" :disabled='isFirstStepDis'>注 册</van-button>
      </yd-cell-group>

      <!--<yd-button size="large" type="primary" @click.native="firstStep()" v-show="firstStepBool"-->
      <!--:disabled='isFirstStepDis'>下一步-->
      <!--</yd-button>-->
      <!--<cube-button v-show="firstStepBool" :light="true"  @click="firstStep()" :disabled='isFirstStepDis'>下一步</cube-button>-->

      <!--<yd-button size="large" type="primary" @click.native="secondStep()" v-show="secondStepBool"-->
      <!--:disabled='isFirstStepDis'>下一步-->
      <!--</yd-button>-->
      <!--<yd-button size="large" type="primary" @click.native="thirdStep()" v-show="thirdStepBool"-->
      <!--:disabled='isFirstStepDis'>注 册-->
      <!--</yd-button>--></div>


  </div>
</template>
<script>
  import {
    USER_INFO,
    USER_TOKEN
  } from '../../store/mutation-types'
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
      // 验证账号输入格式
      registerValidator() {
        if (this.verifyUtil.isNull(this.account)) {
          this.message.Toast(this,'warn','账号不能为空',false);
          return false
        }
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
      sendCode() {
        if (this.verifyUtil.isPhoneNum(this.phone)) {
          this.message.Toast(this,'warn','手机号格式错误, 请重新输入',false);
          return false
        }
        this.$dialog.loading.open('验证码发送中...');
        let self = this;
        let param = ['register',this.phone,'0'];
        this.$Ice_UserService.requestPhoneSms(param, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.start1 = true;
              self.$dialog.loading.close();
              self.isFirstStepDis = false;
              self.message.Toast(self,'correct',result.msg,false);
            } else {
              // 发送失败
              self.$dialog.loading.close();
              self.message.Toast(self,'error',result.msg,false);
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.message.Toast(self,'error','错误' + error,'error',false);
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
      thirdStep() {
        let self = this;
        if (this.registerValidator()) {
          // 验证用户名是否存在
          this.$Ice_UserService.checkUsernameRepetition(this.account, new IceCallback(
            function (result) {
              if (result.code === 0) {
                // 用户名不存在, 注册用户
                self.$Ice_UserService.userRegister(self.account, self.phone, self.password, self.invitationCode, self.verificationCode, new IceCallback(
                  function (result) {
                    if (result.code === 0) {
                      self.$app_store.commit(USER_INFO, result.obj);
                      let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
                      // 跳转信息大厅
                      self.$router.push({
                        path: redirect
                      });
                    } else {
                      self.message.Toast(self,'error',result.msg ,false);
                    }
                  },
                  function (error) {
                    self.message.Toast(self,'error','注册失败' + error ,false);
                  }
                ))
              } else {
                self.message.Toast(self,'error',result.msg ,false);
              }
            },
            function (error) {
              self.message.Toast(self,'error','错误' + error  ,false);
            }
          ));
        }
      }
    }
  }
</script>

<style>

</style>
