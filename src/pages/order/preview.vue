<template>
  <div>
    <div class="issueHeaderLog">
      <div class="width20">
        <i class="icon iconfont icon-btngoback back floatleft" @click="fallback"></i>
      </div>
      <div class="width60">
        <span>中转单</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>
    </div>
    <div class="pickGoodsCodePic" >
      <!--<qrcode :value="qrCode" :fg-color="fgColor"></qrcode>-->
      <img :src= url />
    </div>
  </div>
</template>

<script>
    export default {
      name: "preview.vue",
      data() {
        return {
          url: ''
        }
      },
      mounted() {
        this.url = this.$route.query.url
      },
      methods: {
        fallback() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
