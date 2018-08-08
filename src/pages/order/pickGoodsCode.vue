<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="goBackPage"></i>
      </div>
      <div class="width60">
        <span>取货码</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>



    </div>
    <div class="pickGoodsCodePic" >
      <!--<qrcode :value="qrCode" :fg-color="fgColor"></qrcode>-->
      <img v-if="qrCodeUrl !== ''" :src="qrCodeUrl"/>
      <div class="Goodscode">取货码：{{qrCode}}</div>
    </div>
  </div>
</template>

<script>
  // import { Qrcode } from 'vux'
  export default {
    data() {
      return {
        orderNo: '',
        qrCode: '',
        qrCodeUrl: '',
        userId: this.$app_store.getters.userId,
      }
    },
    mounted() {
      this.orderNo = this.$route.query.id;
      this.getQrCode(this.orderNo);
    },
    methods: {
      getQrCode(orderNo) {
        let self = this;
        this.$Ice_myOrderService.getPickCode(this.userId,orderNo, new IceCallback(
          function (result) {
            if (result.code === 0) {
              let urlObj = JSON.parse(result.obj[0]);
              self.qrCode = JSON.parse(result.obj[1]);
              self.qrCodeUrl =  urlObj.data.nginx + urlObj.data.relativeAddr;
            } else {
              self.$vux.toast.text(result.msg, 'top');
            }
          },
          function (error) {
            self.$vux.toast.text('服务器连接失败, 请稍后重试', 'top');
          }
        ))
      },
      goBackPage() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

</style>
