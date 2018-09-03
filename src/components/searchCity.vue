<template>
  <div class="backgroundwhite">
    <van-search
      v-model="cityNameSeach"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    <ul class="citySearchPageas">
      <li>长沙</li>
      <li>长沙县</li>
      <li>长沙县城</li>
    </ul>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          cityNameSeach:'',
        }
      },
      methods:{
        onSearch() {
          this.$toast(this.value);
        },
        onCancel() {
          this.$toast(this.$t('cancel'));
        }
      }
    }
</script>

<style scoped>

</style>
