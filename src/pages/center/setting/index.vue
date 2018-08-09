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
      <li class="needBorder1">关于我们</li>
      <li class="needBorder1">帮助与反馈</li>
      <li class="needBorder1" @click="exitLogin">退出</li>
    </ul>
  </div>
</template>

<script>
    import {alertContent} from "../../../utils/enum";
    import {COMP_INFO, USER_INFO, USER_ID} from "../../../store/mutation-types";

    export default {
      data(){
        return{
          userInfo:{},
          compInfo:{},
          userId:'',
        }
      },
      methods:{
        exitLogin() {
          let self = this;
          this.message.showAlert(this,alertContent.EXIT_LOGIN)
            .then(() => {
              // 确认操作
              self.$app_store.commit(USER_INFO, this.userInfo);
              self.$app_store.commit(COMP_INFO, this.compInfo);
              self.$app_store.commit(USER_ID, this.userId);
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
