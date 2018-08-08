<template>
   <div>
     <div class="issueHeaderLog">
       <div class="width20">
         <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
       </div>
       <div class="width60">
         <span>账号与安全</span>
       </div>
       <div class="width20">
         <div class="alignCenter floatright"></div>
       </div>



     </div>
     <ul class="settingList backgroundwhite margintop40">
       <li class="needBorder"><span class="accountUser floatleft">用户名</span><span class="accountUserName floatright">{{userInfo.uname}}</span></li>
       <li @click="toupdataPhone">
         <span class="accountPhone floatleft">手机号码</span>
         <i class="icon iconfont icon-icon-test floatright marginLeft21 colorNine"></i>
         <span class="accountPhoneNum floatright">{{userInfo.uphone}}</span>

       </li>
     </ul>
     <div class="accountUpdataPwd" @click="toaccountUpdataPwd">修改密码
       <i class="icon iconfont icon-icon-test floatright marginLeft21 colorNine"></i>
     </div>
   </div>
</template>

<script>
    export default {
      data(){
        return{
          userInfo: {}
        }
      },
      mounted() {
        this.userInfo = JSON.parse(this.$app_store.state.userInfo) ;
      },
      methods:{
        fallback() {
          this.$router.go(-1)
        },
        toaccountUpdataPwd(){
          this.$router.push({
            path:'/center/setting/toaccountUpdataPwd'
          })
        },
        toupdataPhone(){
          this.$router.push({
            path:'/center/setting/updataPhone'
          })
        }
      }
    }
</script>

<style scoped>

</style>
