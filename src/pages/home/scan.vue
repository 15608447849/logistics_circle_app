<template>
  <div>
    <div class="backgroundgray opacity6">
      <div class="width20">
        <i @click="fallback" class="icon iconfont icon-btngoback back floatleft"></i>
      </div>
      <div class="width60">
        <span class="myTwoCode">扫一扫二维码</span>
      </div>
      <div class="width20">
        <div class="alignCenter floatright"></div>
      </div>



    </div>
    <div class="saoyisaopage">
      <div class="scanBorder">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
       data(){

       },
      methods:{
        fallback(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
