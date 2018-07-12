import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
  userInfo: {}, // 用户信息
  userToken: '',
  openId: '',
  searchContent: '', // 搜索内容
  searchState: '', // 搜索类型
  isLoading: false, // 网络加载等待框
  dict: {}, // 字典
  area: {}, // 地区
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
