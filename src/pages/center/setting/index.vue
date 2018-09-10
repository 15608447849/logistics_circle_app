<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>基础设置</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <ul class="settingList">
      <li @click="toaccountSecurity" class="needBorder1">账号安全</li>
      <!--<li @click="tocurrency" class="needBorder1">通用</li>-->
      <!--<li class="needBorder1">关于我们</li>-->
      <!--<li class="needBorder1">帮助与反馈</li>-->
      <li class="needBorder1"><span>关于一块物流</span><span class="floatright">版本号：v1.1.9</span></li>
      <li class="needBorder1" @click="exitLogin">退出</li>
    </ul>
  </div>
</template>

<script>
    import {alertContent} from "../../../utils/enum";
    import {
      COMP_INFO,
      USER_INFO,
      USER_ID,
      AVATAR_URL,
      CSTATUS,
      COMP_ID,
      IS_SHOW_SIDEBAR
    } from "../../../store/mutation-types";

    export default {
      data(){
        return{
          userInfo:{},// 用户信息
          compInfo:{},// 企业信息
          userId: undefined,// 企业id
          compId: undefined,// 用户id
          cstatus: ''// 认证
        }
      },
      methods:{
        exitLogin() {
          let self = this;
          this.message.showAlert(this,alertContent.EXIT_LOGIN)
            .then(() => {
              // 清空用户信息
              self.$app_store.commit(USER_INFO, this.userInfo);
              // 清空企业信息
              self.$app_store.commit(COMP_INFO, this.compInfo);
              // 清空用户id
              self.$app_store.commit(USER_ID, this.userId);
              // 清空企业id
              self.$app_store.commit(COMP_ID, this.compId);
              self.$app_store.commit(CSTATUS, this.cstatus);
              // 清空头像
              self.$app_store.commit(AVATAR_URL,'');
              // 清空用户信息
              localStorage.removeItem(USER_INFO);
              // 清空企业信息
              localStorage.removeItem(COMP_INFO);
              // 清空用户id
              localStorage.removeItem(USER_ID);
              // 清空企业id
              localStorage.removeItem(COMP_ID);
              // 清空头像
              localStorage.removeItem(AVATAR_URL);
              localStorage.removeItem(CSTATUS);
              // 关闭个人中心侧滑栏
              this.$app_store.commit(IS_SHOW_SIDEBAR, false);
              // 跳转登陆页
              self.$router.push({
                path: '/login'
              })
            })
            .catch(() => {
              // 取消操作
            })
        },
        tocurrency(){
          this.$router.push({
            path:'/center/setting/currency'
          })
        },
        toaccountSecurity(){
          this.$router.push({
            path:'/center/setting/accountSecurity'
          })
        },
        fallback(){
          this.$router.go(-1)
        },
      }
    }
</script>

<style>

</style>
