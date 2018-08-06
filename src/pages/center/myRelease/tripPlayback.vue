<template>
  <div>
    <div class="tripHeader">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>行程回放</span>
      <div class="alignCenter"></div>
    </div>
    <div class="tripMap">

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
