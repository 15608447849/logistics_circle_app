<template>
  <div>
    <div class="issueHeaderLog">
      <i class="icon iconfont icon-btngoback back" @click="fallback"></i>
      <span>通用</span>
      <div></div>
    </div>
      <ul class="settingList backgroundwhite margintop40">
        <li class="needBorder">字体大小</li>
        <li class="needBorder">自动下载更新</li>
        <li>清理缓存</li>
      </ul>
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
