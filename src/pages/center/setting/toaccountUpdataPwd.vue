<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>修改密码</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>



    </div>
    <ul class="settingList margin-bottom56">
      <li class="accountName "><span>用户名：</span><span>{{fname}}</span></li>
      <li class="needBorder1">
        <span class="accountUser floatleft margin-right93">原密码</span>
        <div class="accpwd floatright">
          <input type="password" placeholder="请输入原密码" v-model="oldPassword">
        </div>
      </li>
      <li class="needBorder1">
        <span class="accountPhone floatleft margin-right93">新密码</span>
        <div class="accpwd floatright">
          <input type="password" placeholder="请确认新密码" v-model="newsPassword">
        </div>
      </li>
      <li class="needBorder1">
        <span class="accountPhone floatleft margin-right70">确认密码</span>
        <div class="accpwd floatright">
          <input type="password" placeholder="请确认新密码" v-model="repeatPassword">
        </div>
      </li>
    </ul>
    <button class="moveOutBlack" @click="updatePasswordByOld">保存</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userInfo: {},
        fname: '',//公司名称
        newsPassword: '',//用户的新密码
        repeatPassword: '',//用户重新输入的新密码
        oldPassword: '',//用户的旧密码
        uPhone: '',//用户的手机号
      }
    },
    mounted() {
      debugger
      this.userInfo = JSON.parse(this.$app_store.state.userInfo);//获取用户信息
      this.uPhone = this.userInfo.uphone;
      this.fname = this.userInfo.uname;
    },
    methods: {
      fallback() {
        this.$router.go(-1)
      },
      updatePasswordByOld() {
        let self = this;
        if (self.newsPassword !== self.repeatPassword) {
          self.$vux.toast.text('两次输入的密码不致，请重新输入', 'top');
          return
        }
        this.$Ice_UserService.updatePasswordByOld(this.uPhone, this.oldPassword, this.repeatPassword, new IceCallback(
          function (result) {
            if (result.code === 0) {
              self.$vux.toast.text(result.msg, 'top');
              // 退出这个页面
              setTimeout(() => {
                self.$router.go(-1);
              }, 1000);
            } else {
              // 发送失败
              self.$vux.toast.text(result.msg, 'top');
              self.$dialog.loading.close();
            }
          },
          function (error) {
            self.$dialog.loading.close();
            self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
          }
        ));
      }
    }
  }
</script>

<style scoped>

</style>
