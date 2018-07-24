<template>
  <div style="width: 100%;height: 100%">
    <!--<yd-navbar title="NavBar">-->
      <!--<router-link to="/" slot="left">-->
        <!--<yd-navbar-back-icon></yd-navbar-back-icon>-->
      <!--</router-link>-->
    <!--</yd-navbar>-->
    <div class="issueHeaderNav">
      <i @click="fallback" class="icon iconfont icon-btngoback back"></i>
      <span>搜索</span>
      <span></span>
    </div>
    <yd-search v-model="inputVal" :on-submit="submitInput" :on-cancel="returnToPage"></yd-search>
  </div>
</template>
<script>
  /**
   * 简单搜索输入框
   * 使用前需要设置当前搜索类型（searchState）,用以区分
   * Created by lq on 2018/7/5.
   **/
  import { SEARCH_CONTENT } from '@/store/mutation-types'
  export default {
    data() {
      return {
        // 输入框内容
        inputVal: '',
        // 搜索历史记录
        historyList: [],
        // 当前搜索状态 0: 默认 1: 列表
        searchState: 0,
        // 最大历史条数
        max: 8
      }
    },
    mounted() {
      this.searchState = this.$app_store.getters.searchState;
      this.clearInput();
      this.getSearchHistory(this.searchState)
    },
    methods: {
      fallback() {
        this.$router.go(-1)
      },
      // 获取历史记录
      getSearchHistory(state) {
        this.historyList = localStorage.getItem('search_history'+ state) === null ? [] : JSON.parse(localStorage.getItem('search_history'+ state));
        console.log(this.historyList)
      },
      // 保存历史记录
      setSearchHistory(newValue) {
        localStorage.setItem('search_history'+ this.searchState,JSON.stringify(newValue));
      },
      // 提交值
      submitInput() {
        let searchCont = '';
        if (this.inputVal !== '') {
          searchCont = this.inputVal;
          if (this.historyList.length >= this.max) {
            this.historyList.shift()
          }
          this.historyList.push(searchCont)
        }
        this.clearInput();
        this.$app_store.commit(SEARCH_CONTENT, searchCont);
        // 返回页面
        this.returnToPage()
      },
      returnToPage() {
        this.$router.go(-1)
      },
      itemClick(item) {
        this.returnToPage(item)
      },
      itemClickDelete(index) {
        this.historyList.splice(index, 1);
      },
      clearHistoryList() {
        this.historyList = []
      },
      clearInput() {
        this.inputVal = ''
      }
    },
    watch: {
      historyList(newValue, oldValue) {
        this.setSearchHistory(newValue)
      }
    }
  }
</script>
<style>

</style>
