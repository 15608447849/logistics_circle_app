import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userInfo: {}, // 用户信息
  userToken: '',
  openId: '',
  wxUserInfo: {}, // 微信用户信息
  searchContent: '', // 搜索内容
  searchState: '' // 搜索类型
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
