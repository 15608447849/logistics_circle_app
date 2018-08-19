<template>
  <div class="login">
    <img src="../../assets/images/small/login_logo.png" alt="" class="loginPic">
    <div class="login_input">
      <input type="text" v-model="phone" placeholder="注册的手机号码" class="userNameBorderBottom">
      <div><input type="password" v-model="smsCode" placeholder="请输入短信验证码" class="FuserPwd">
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
    <button class="loginBut" @click="loginClick">登 录</button>
    <div class="FfastLogin" @click="toLogin()">
      账号密码登录
    </div>
  </div>
</template>

<script>
  import {
    COMP_INFO,
    USER_ID,
    USER_INFO
  } from '../../store/mutation-types'
  export default {
    data() {
      return {
        start1: false, // 控制输入验证码
        smsCode: '',
        phone: ''
      }
    },
    methods: {
      toLogin() {
        this.$router.push({
          path: '/login'
        })
      },
      sendCode() {
        if (this.verifyUtil.isPhoneNum(this.phone)) {
          self.$vux.toast.text('手机号格式错误, 请重新输入', 'top');
          return false
        }
        this.$dialog.loading.open('验证码发送中...');
        let self = this;
        let param = ['login', this.phone, '0'];
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
      loginClick() {
        let self = this;
        if (this.verifyUtil.isNull(this.smsCode)) {
          this.$vux.toast.text('验证码不能为空, 请完善输入', 'top');
          return
        }
        let compList = [];
        this.$Ice_UserService.userVerifyBySms(this.phone,this.smsCode, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.$app_store.commit(USER_ID, JSON.stringify(result.obj.oid));
              self.$app_store.commit(USER_INFO, JSON.stringify(result.obj));
              // self.getCompList(result.obj.oid);
              if (result.obj.comps.length === 1) {
                self.setCompIdByRedis(result.obj.oid, result.obj.comps[0].compid);
                return
              }
              result.obj.comps.forEach((currentValue, index, arr) => {
                compList.push({
                  content: currentValue.fname,
                  compid: currentValue.compid
                });
              });
              self.showActive(result.obj.oid, compList);
              // let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
              // // 跳转信息大厅
              // self.$router.push({
              //   path: redirect
              // });
            } else {
              self.$vux.toast.text(result.msg, 'top');
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.$vux.toast.text(error, 'top');
          }
        ));
      },
      getCompList(oid) {
        let self = this;
        let compList = [];
        this.$Ice_CompService.selectCompUserByUid(oid,
          new IceCallback(
            function (result) {
              // 登录时添加企业到缓存
              if (result.obj.length === 1) {
                self.setCompIdByRedis(oid, result.obj[0].compid);
                return
              }
              // 弹出选择列表
              result.obj.forEach((currentValue, index, arr) => {
                compList.push({
                  content: currentValue.fname,
                  compid: currentValue.compid
                });
              });
              self.showActive(oid, compList);
            },
            function (error) {
              self.$vux.toast.text('企业信息获取失败, 请尝试重新登录', 'top');
            }
          )
        );
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
            self.$vux.toast.text('未选择企业, 请尝试重新登录', 'top');
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
              self.$vux.toast.text('企业信息获取失败, 请尝试重新登录', 'top');
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
              if(result.code === 0) {
                self.$app_store.commit(COMP_INFO, JSON.stringify(result.obj));
                let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
                self.$router.push({
                  path: redirect
                })
              }
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

<style scoped>

</style>
