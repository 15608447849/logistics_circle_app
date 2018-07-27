<template>
  <div>
    <div class="backgroundgray">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span class="myTwoCode">我的二维码</span>
      <div></div>
    </div>
    <div class="myTwoCodeBox">
      <div class="nameAndCode">
        <div class="twoCodePicBox">
          <div class="twoCodePicBoxa">
            <img src="../../assets/images/small/bussiness-man.png" alt="" class="twoCodePic">
          </div>
          <span class="codeTitle">长沙大唐物流</span>
          <span class="locationCitySpan"><span class="location">湖南</span><span class="locationCity">长沙</span></span>
        </div>
        <img src="" alt="" class="BigCodepic">
        <p>扫一扫上面的二维码图案，加我为好友</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){

      },
      methods:{
        fallback() {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
