<template>
  <div>
    <yd-navbar title="我的订单"></yd-navbar>
    <yd-button size="large" type="primary" @click.native="toPageTest">接口测试</yd-button>
    <yd-button size="large" type="primary">primary</yd-button>
  </div>
</template>
<script>
  export default{
    methods: {
      toPageTest() {
        this.$router.push({
          path: '/picker'
        })
      }
    }
  }
</script>
<style>
</style>
