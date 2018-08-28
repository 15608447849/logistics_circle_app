<template>
  <div style="background:white;height:13.25rem;">
    <div>
      <div class="issueHeaderLog">
        <div class="width20">
          <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
        </div>
        <div class="width60">
          <span>新用户注册</span>
        </div>
        <div class="width20">
          <div class="alignCenter floatright"></div>
        </div>
      </div>
      <!--<div class="issueHeaderLog">-->
      <!--<i @click="fallback" class="icon iconfont icon-btngoback back"></i>-->
      <!--<span>新用户注册</span>-->
      <!--</div>-->
      <yd-cell-group v-show="firstStepBool">
        <yd-cell-item>
          <!--<yd-icon class="span" slot="icon" name="phone3" size=".45rem"></yd-icon>-->
          <input maxlength="11" type="text" slot="right" v-model="phone" placeholder="请输入手机号码">
          <yd-sendcode slot="right"
                       v-model="start1"
                       @click.native="sendCode"
                       type="warning"
          ></yd-sendcode>
        </yd-cell-item>
        <van-button style="width:7.08rem;height:6vh;margin-left:.21rem;line-height:6vh;margin-top:.5rem;background-color:#3189f5;border:1px solid transparent;"
                    size="large" type="primary" @click="firstStep()" v-show="firstStepBool" :disabled='isFirstStepDis'>
          下一步
        </van-button>

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
          <van-button style="width:7.08rem;height:6vh;margin-left:.21rem;line-height:6vh;margin-top:.5rem;background-color:#3189f5;border:1px solid transparent;"
                      size="large" type="primary" @click="secondStep()" v-show="secondStepBool"
                      :disabled='isFirstStepDis'>下一步
          </van-button>
        </yd-cell-group>
      </yd-cell-group>
      <!--<yd-cell-group v-show="thirdStepBool">-->


      <yd-cell-group v-show="thirdStepBool">
        <yd-cell-item>
          <span slot="left" class="span">用户名：</span>
          <yd-input slot="right" max="30" v-model="account" :debug="true" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left" class="span">密码：</span>
          <yd-input slot="right" max="16" type="password" v-model="password" placeholder="请设置登录密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left" class="span">确认密码：</span>
          <yd-input slot="right" max="16" type="password" v-model="rPassword" placeholder="请确认登录密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left" class="span">邀请码：</span>
          <yd-input slot="right" max="12" type="number" v-model="invitationCode" placeholder="请输入您收到的邀请码，没有可不填"></yd-input>

          <!--<yd-button size=" large
          " type="primary" @click.native="thirdStep()" v-show="thirdStepBool"-->
          <!--:disabled='isFirstStepDis'>注 册-->
          <!--</yd-button>-->
        </yd-cell-item>
        <van-button style="width:7.08rem;height:6vh;margin-left:.21rem;line-height:6vh;margin-top:.5rem;background-color:#3189f5;border:1px solid transparent;"
                    size="large" type="primary" @click="thirdStep()" v-show="thirdStepBool" :disabled='isFirstStepDis'>注
          册
        </van-button>
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
      <!--</yd-button>-->

    </div>

    <van-checkbox v-model="checked">
      <span class="fontSize28">我已阅读并同意</span> <span class="fontSize28 colorBlueSan" @click.stop="toServiceStatement">服务声明</span>
      <img
        slot="passed"
        slot-scope="props"
        :src="props.checked ? icon.active : icon.normal"
      >
    </van-checkbox>
  </div>
</template>
<script>
  import {
    COMP_INFO, USER_ID,
    USER_INFO,
    USER_TOKEN
  } from '../../store/mutation-types'

  export default {
    data() {
      return {
        checked: true,
        icon: {
          normal: '//img.yzcdn.cn/icon-normal.png',
          active: '//img.yzcdn.cn/icon-active.png'
        },//用户注册声明及相关政策同意相关条款
        firstStepBool: true, // 第一步
        secondStepBool: true, // 第二步
        thirdStepBool: true, // 第三步
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
        if (this.firstStepBool) {
          this.$router.push({
            path: '/login'
          });
          return
        }
        // 第二步
        if (this.secondStepBool) {
          this.firstStepBool = true;
          this.secondStepBool = false;
          return
        }
        // 第三步
        if (this.thirdStepBool) {
          this.secondStepBool = true;
          this.thirdStepBool = false;
          return
        }
      },
      fallback(){
        this.$router.go(-1);
      },
      toServiceStatement(){
        this.$router.push({
          path:'/login/serviceStatement'
        })
      },
      // 验证账号输入格式
      registerValidator() {
        if (this.verifyUtil.isNull(this.account)) {
          this.$vux.toast.text('账号不能为空', 'top');
          return false
        }
        // 密码 字母+数字
        let pwdReg = /(?=^.*?\d)(?=^.*?[a-zA-Z])^[0-9a-zA-Z]{6,16}$/;
        if(!pwdReg.test(this.password)){
          this.$vux.toast.text('请输入字母或数字组成的密码', 'top');
          this.password = '';
          this.rPassword = '';
          return false
        }

        if (this.verifyUtil.isEffPwd(this.password)) {
          this.$vux.toast.text('密码为空或长度小于6位, 请完善输入', 'top');
          return false
        }
        if (this.verifyUtil.isTwoPsd(this.password, this.rPassword)) {
          this.$vux.toast.text('密码两次输入不一致', 'top');
          return false
        }
        return true
      },
      sendCode() {
        let self = this;
        if (this.verifyUtil.isPhoneNum(this.phone)) {
          this.$vux.toast.text('手机号格式错误, 请重新输入', 'top');
          return false
        }
        this.$Ice_UserService.verifyPhone4App(this.phone, new IceCallback(
          function (result) {
            self.$vux.toast.text(result.msg, 'top');
            if (result.code === 0) {
              self.sendSMSV();
            } else {
              self.$vux.toast.text(result.msg, 'top');
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.$vux.toast.text(error, 'top');
          }
        ))
      },
      firstStep() {
        this.firstStepBool = false;
        this.secondStepBool = true;
      },
      sendSMSV() {
        this.$dialog.loading.open('验证码发送中...');
        let self = this;
        let param = ['register', this.phone, '0'];
        this.$Ice_UserService.requestPhoneSms(param, new IceCallback(
          function (result) {
            self.$vux.toast.text(result.msg, 'top');
            if (result.code === 0) {
              self.start1 = true;
              self.$dialog.loading.close();
              self.isFirstStepDis = false;
            } else {
              // 发送失败
              self.$dialog.loading.close();
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.$vux.toast.text(error, 'top');
          }
        ));
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
              self.$vux.toast.text(result.msg, 'top');
            }
          },
          function (error) {
            self.$vux.toast.text('错误', 'top');
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
                      self.$app_store.commit(USER_ID, JSON.stringify(result.obj.oid));
                      self.$app_store.commit(USER_INFO, JSON.stringify(result.obj));
                      // self.getCompList(result.obj.oid);
                      self.setCompIdByRedis(result.obj.oid, result.obj.comps[0].compid);
                    } else {
                      self.$vux.toast.text(result.msg, 'top');
                    }
                  },
                  function (error) {
                    self.$vux.toast.text('注册失败', 'top');
                  }
                ))
              } else {
                self.$vux.toast.text(result.msg, 'top');
              }
            },
            function (error) {
              self.$vux.toast.text('错误', 'top');
            }
          ));
        }
      },
      showActive(oid, dataList) {
        this.$createActionSheet({
          title: '请选择要登录的企业',
          active: 0,
          data: dataList,
          onSelect: (item, index) => {
            this.setCompIdByRedis(oid, item.compid);
          },
          onCancel: () => {
            this.message.Toast(this, 'warn', '未选择企业, 请尝试重新登录', false);
          }
        }).show()
      },
      // 登录时添加企业到缓存
      setCompIdByRedis(oid, compId) {
        let self = this;
        this.$Ice_CompService.addLoginCompByRedis(oid, compId,
          new IceCallback(
            function (result) {
              // 获取企业信息
              self.queryCompByCid(compId);
            },
            function (error) {
              self.$vux.toast.text('企业信息添加失败, 请稍后重试', 'top');
            }
          )
        );
      },
      /**
       * 根据企业码查询指定企业信息(不加路线)
       * @param compId
       */
      queryCompByCid(compId) {
        let self = this;
        this.$Ice_CompService.querygetCompByCid(compId,
          new IceCallback(
            function (result) {
              self.$app_store.commit(COMP_INFO, JSON.stringify(result.obj));
              let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
              self.$router.push({
                path: redirect
              })
            },
            function (error) {
              self.$vux.toast.text('企业信息获取失败!', 'top');
            }
          )
        );
      }
    }
  }
</script>

<style>

</style>
