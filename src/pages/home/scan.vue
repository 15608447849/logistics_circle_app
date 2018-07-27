<template>
  <div>
    <div class="backgroundgray opacity6">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span class="myTwoCode">扫一扫二维码</span>
      <div></div>
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
