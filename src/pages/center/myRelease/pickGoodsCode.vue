<template>
  <div>
    <div class="pickGoodsCodeBox">
      <div class="issueHeaderNav">
        <i class="icon iconfont icon-btngoback back" @click="goBackPage"></i>
        <span>取货码</span>
        <i ></i>
      </div>
      <div class="pickGoodsCodePic">
        <img src="" alt="">
      </div>
      <!--<qrcode :value="qrCode" :fg-color="fgColor"></qrcode>-->
      <div class="Goodscode">取货码：1566</div>
      <img :src="qrCodeUrl"/>
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
          self.$Ice_myOrderService.getPickCode(this.userId,orderNo, new IceCallback(
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
              self.message.Toast(self, '服务器连接失败, 请稍后重试', false);
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
