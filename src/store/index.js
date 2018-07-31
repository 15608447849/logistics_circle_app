import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
  userInfo: {}, // 用户信息
  compInfo: {}, // 企业信息
  userId: '3', // 用户ouid
  openId: '',
  searchContent: '', // 搜索内容
  searchState: '', // 搜索类型
  isLoading: false, // 网络加载等待框
  dict: {}, // 字典
  area: {}, // 城市地区json数据
  currentCity: '', // 当前定位地区
  receiptCity: '', // 发单地区
  geoState: 0, // 0: 出发地 1: 目的地
  addressCom: {}, // 地理编码信息列表
  tabBarIndex: 0
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
