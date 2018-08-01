<template>
   <div>
     <div class="issueHeaderLog">
       <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
       <span>绑定手机号</span>
       <div></div>
     </div>
     <div class="updataPhonePic">
       <img src="../../../assets/images/small/updataphone.png" alt="">
     </div>
     <div class="bindingPhone"><span>绑定的手机号：</span><span>18373270790</span></div>
     <button class="moveOutBlack">更换手机号</button>
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

<style>

</style>
