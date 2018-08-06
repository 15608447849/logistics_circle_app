<template>
  <div>
    <div class="issueHeaderLog">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>修改密码</span>
      <div class="alignCenter"></div>
    </div>
    <ul class="settingList margin-bottom56">
      <li class="accountName "><span>用户名：</span><span>长沙大唐物流</span></li>
      <li class="needBorder1"><span class="accountUser floatleft margin-right93">原密码</span><div class="accpwd floatright"><input type="password" placeholder="请输入原密码"></div></li>
      <li class="needBorder1"><span class="accountPhone floatleft margin-right93">新密码</span><div class="accpwd floatright"><input type="password" placeholder="请输入新密码"></div></li>
      <li class="needBorder1"><span class="accountPhone floatleft margin-right70">确认密码</span><div class="accpwd floatright"><input type="password" placeholder="请确认新密码"></div></li>
    </ul>
    <button class="moveOutBlack">保存</button>
  </div>
</template>
<script>
    export default {
      data(){

      },
      methods:{
        fallback(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
