<template>
   <div>
     <div class="issueHeaderLog">
       <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
       <span>账号与安全</span>
       <div></div>
     </div>
     <ul class="settingList backgroundwhite margintop40">
       <li  class="needBorder"><span class="accountUser floatleft">用户名</span><span class="accountUserName floatright">长沙大唐物流有限公司</span></li>
       <li @click="toupdataPhone"><span class="accountPhone floatleft">手机号码</span><span class="accountPhoneNum floatright">13998765432</span></li>
     </ul>
     <div class="accountUpdataPwd" @click="toaccountUpdataPwd">修改密码</div>
   </div>
</template>

<script>
    export default {
      data(){
        return{

        }
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
