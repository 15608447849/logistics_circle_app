<template>
  <div>
    <yd-navbar title="我的订单"></yd-navbar>
    <mu-button @click="showToast"  color="primary">接口测试</mu-button>
  </div>
</template>
<script>
  export default{
    methods: {
      toPageTest() {
        this.$router.push({
          path: '/picker'
        })
      },
      showToast() {

      }
    }
  }
</script>
<style>
</style>
