<template>
  <div id="app" style="height: 100%;">
    <div class="yd-dialog-white-mask" v-show="isLoading">
      <div class="yd-loading">
        <div class="yd-loading-icon"></div>
        <div class="yd-loading-txt" v-html="title"></div>
      </div>
    </div>
    <router-view v-show="!isLoading"/>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$app_store.state.isLoading
    }
  },
  data() {
    return {
      title: '提莫队长正在路上'
    }
  }
}
</script>

<style>
</style>
