import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
  userInfo: {}, // 用户信息
  compInfo: {}, // 企业信息
  userId: '2', // 用户ouid
  avatarUrl: 'http://192.168.1.240/wlq/compic/comp3/0.jpg',// 默认用户头像
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
  tabBarIndex: 0,
  isShowSidebar: false // 侧边栏
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
