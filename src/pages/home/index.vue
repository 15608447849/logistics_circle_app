<template>
  <div>
    <yd-navbar title="首页"></yd-navbar>
    <button size="large" type="primary" @click="toLogin">登陆页面</button>
    <button size="large" type="primary" @click="toRegister">注册页面</button>
    <button size="large" type="primary" @click="toSearch">搜索页面</button>
    <yd-cell-group>
      <yd-cell-item  @click.native="toSearch">
        <span slot="left">搜索框测试：</span>
        <yd-input slot="right" v-model="searchContent" ref="searchContent"
                  placeholder="请输入内容"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>
<script>
  import {SEARCH_STATE} from "@/store/mutation-types"
  import {searchState} from '@/utils/config'

  export default {
    data() {
      return {
        searchContent: ''
      }
    },
    mounted() {
      if (this.$store.getters.searchState === searchState.TEST_STATE) {
        this.inputVal = this.$store.getters.searchContent;
        this.searchContent = this.inputVal;
      }
    },
    methods: {
      toLogin() {
        this.$router.push({path: '/login'})
      },
      toRegister() {
        this.$router.push({path: '/register'})
      },
      toSearch() {
        this.$store.commit(SEARCH_STATE, searchState.TEST_STATE);
        this.$router.push({path: '/search'})
      }
    }
  }
</script>
<style>
</style>
