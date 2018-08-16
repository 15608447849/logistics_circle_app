<template>
  <div>
    <div class="login">
      <img src="../../assets/images/small/login_logo.png" alt="" class="loginPic">
      <div class="login_input">
        <input type="text" v-model="account" placeholder="用户名/手机号码" class="userNameBorderBottom">
        <input type="password" v-model="password" placeholder="密码" class="userPwd">
      </div>
      <div class="Flogin_input displayNone">
        <input type="text" v-model="account" placeholder="注册的手机号" class="FuserNameBorderBottom">
        <div>
          <input type="password" v-model="password" placeholder="验证码" class="FuserPwd">
          <a class="getVerificationCode">获取验证码</a>
        </div>
      </div>
      <button class="loginBut" @click="loginClick">登 录</button>
      <div class="fastLogin displayNone" @click="tofirstLong()">
        快捷登录
      </div>
      <div class="forgetPwd">
        <span @click="toPageRegister">新用户注册</span>
        <span @click="toupdatapwd">忘记密码？</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    USER_INFO,
    USER_ID, COMP_INFO
  } from '../../store/mutation-types'

  export default {
    data() {
      return {
        account: "",
        password: "",
      }
    },
    methods: {
      toPageRegister() {
        this.$router.push({
          path: '/register'
        })
      },
      tofirstLong() {
        this.$router.push({
          path: '/login/firstLong'
        })
      },
      toupdatapwd() {
        this.$router.push({path: '/retrievePwd'})
      },
      loginClick() {
        let self = this;
        if (this.validator()) {
          let compList = [];
          this.$Ice_UserService.login(this.account, this.password, new IceCallback(
            function (result) {
              if (result.code === 0) {
                self.$app_store.commit(USER_ID, JSON.stringify(result.obj.oid));
                self.$app_store.commit(USER_INFO, JSON.stringify(result.obj));
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
                // self.getCompList(result.obj.oid);
              } else {
                self.$vux.toast.text(result.msg, 'top');
              }
            },
            function (error) {
              self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
            }
          ))
        }
      },
      getCompList(oid) {
        let self = this;

        this.$Ice_CompService.selectCompUserByUid(oid,
          new IceCallback(
            function (result) {
              // 登录时添加企业到缓存
              // 弹出选择列表

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
            this.$vux.toast.text('未选择企业, 请尝试重新登录', 'top');
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
      queryCompByCid(compId) {
        let self = this;
        debugger
        this.$Ice_CompService.querygetCompByCid(compId,
          new IceCallback(
            function (result) {
              if(result.code === 0) {
                self.$app_store.commit(COMP_INFO, JSON.stringify(result.obj));
                let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
                self.$router.push({
                  path: redirect
                })
              } else {
                self.$vux.toast.text(result.msg, 'top');
              }

            },
            function (error) {
              self.$vux.toast.text('企业信息获取失败!', 'top');
            }
          )
        );
      },
      // // 获取企业信息
      // getCompInfo(oid) {
      //   let self = this;
      //   this.$Ice_CompService.querygetCompByUid(oid+'',
      //     new IceCallback(
      //       function (result) {
      //         // 获取企业认证信息
      //         self.queryCompByBasicUid(oid,result.obj);
      //       },
      //       function (error) {
      //         self.message.Toast(this,'warn','企业信息获取失败, 请尝试重新登录',false);
      //       }
      //     )
      //   );
      // },
      // // 获取企业认证信息
      // queryCompByBasicUid(oid,compInfo) {
      //   let self = this;
      //   this.$Ice_CompService.queryCompByBasicUid(oid+'',
      //     new IceCallback(
      //       function (result) {
      //         self.$app_store.commit(COMP_INFO, JSON.stringify( Object.assign(compInfo,result.obj)));
      //         let redirect = decodeURIComponent(self.$route.query.redirect || '/information');
      //         self.$router.push({
      //           path: redirect
      //         })
      //       },
      //       function (error) {
      //         self.message.Toast(this,'warn','企业认证信息获取失败, 请尝试重新登录',false);
      //       }
      //     )
      //   );
      // },
      validator() {
        if (this.verifyUtil.isNull(this.account)) {
          self.$vux.toast.text('账号不能为空', 'top');
          return false
        }
        if (this.verifyUtil.isEffPwd(this.password)) {
          self.$vux.toast.text('密码为空或长度小于6位,请完善输入', 'top');
          return false
        }
        return true
      }
    }
  }
</script>
<style>

</style>

