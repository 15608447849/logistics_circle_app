<template>
  <div>
    <div class="pickGoodsCodeBox">
      <div class="issueHeaderNav">
        <i class="icon iconfont icon-btngoback back" @click="goBackPage"></i>
        <span>取货码</span>
        <i class="icon iconfont icon-sousuo white"></i>
      </div>
      <div class="pickGoodsCodePic">
        <img src="" alt="">
      </div>
      <qrcode :value="qrCode" :fg-color="fgColor"></qrcode>
      <!--<div class="Goodscode">取货码：1566</div>-->
    </div>
  </div>
</template>

<script>
  import { Qrcode } from 'vux'
    export default {
      components: {
        Qrcode
      },
      data() {
        return {
          qrCode: ''
        }
      },
      mounted() {
        this.qrCode = this.$route.query.qrCode || 'no1234567';
      },
      methods: {
        goBackPage() {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>

</style>
