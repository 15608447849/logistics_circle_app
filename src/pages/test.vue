<template>
  <button @click="test">接口测试</button>
</template>
<script>
  export default {
    methods: {
      test() {
        this.$Ice_UserService.userVerify(this.account, this.password, new IceCallback(
          function (result) {
            // 登录成功
            if(result.cstatus === 0) {

            } else {

            }
          },
          function (error) {
            self.message.Toast(self,'服务器连接失败, 请稍后重试',result.msg,false);
          }
        ))
      }
    }
  }
</script>
<style>

</style>
