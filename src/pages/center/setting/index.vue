<template>
  <div>
    <div class="issueHeaderNav">
      <i class="icon iconfont icon-btngoback back"></i>
      <span>基础设置</span>
      <div></div>
    </div>
    <ul class="settingList">
      <li @click="toaccountSecurity" class="needBorder">账号安全</li>
      <li @click="tocurrency" class="needBorder">通用</li>
      <li class="needBorder">关于我们</li>
      <li class="needBorder">帮助与反馈</li>
      <li class="needBorder">退出</li>
    </ul>
  </div>
</template>

<script>
    export default {
      data(){

      },
      methods:{
        tocurrency(){
          this.$router.push({
            path:'/center/setting/currency'
          })
        },
        toaccountSecurity(){
          this.$router.push({
            path:'/center/setting/accountSecurity'
          })
        }
      }
    }
</script>

<style>

</style>
