<template>
  <div>
    <mt-header fixed title="首页"></mt-header>
    <mt-button type="primary" style="margin-top: 50%" @click="toLogin">登陆页面</mt-button>
    <mt-button type="primary" @click="toRegister">注册页面</mt-button>
  </div>

</template>
<script>
  export default{
    methods: {
      toLogin() {
        this.$router.push({path: '/login'})
      },
      toRegister() {
        this.$router.push({path: '/register'})
      }
    }
  }
</script>
<style>
</style>
