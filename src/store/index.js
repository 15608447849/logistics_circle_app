import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

import {
  USER_ID,
  COMP_ID,
  COMP_INFO, DICT, AREA,
} from './mutation-types'

let getCompInfo =  function () {
  if (localStorage.getItem(COMP_INFO)) {
    try {
      return JSON.parse(localStorage.getItem(COMP_INFO))
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getUserId =  function () {
  if (localStorage.getItem(USER_ID)) {
    try {
      return JSON.parse(localStorage.getItem(USER_ID))
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getCompId =  function () {
  if (localStorage.getItem(COMP_ID)) {
    try {
      return JSON.parse(localStorage.getItem(COMP_ID))
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getDict =  function () {
  if (localStorage.getItem(DICT)) {
    try {
      return JSON.parse(localStorage.getItem(DICT))
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getArea =  function () {
  if (localStorage.getItem(AREA)) {
    try {
      return JSON.parse(localStorage.getItem(AREA))
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

const state = {
  userInfo: {}, // 用户信息
  compInfo: getCompInfo(), // 企业信息
  compId: getCompId(),// 企业id
  userId: getUserId(), // 用户ouid
  openId: '',
  searchContent: '', // 搜索内容
  searchState: '', // 搜索类型
  isLoading: false, // 网络加载等待框
  dict: getDict(), // 字典
  area: getArea(), // 城市地区json数据
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
