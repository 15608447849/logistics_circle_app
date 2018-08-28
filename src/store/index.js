import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

import {
  USER_ID,
  COMP_ID,
  ROID,
  COMP_INFO,
  CSTATUS,
  DICT,
  AREA,
  CITYS,
  USER_INFO,
} from './mutation-types'

let getUserInfo =  function () {
  if (localStorage.getItem(USER_INFO)) {
    try {
      return localStorage.getItem(USER_INFO)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getCompInfo =  function () {
  if (localStorage.getItem(COMP_INFO)) {
    try {
      return localStorage.getItem(COMP_INFO)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getUserId =  function () {
  if (localStorage.getItem(USER_ID)) {
    try {
      return localStorage.getItem(USER_ID)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getCstatus =  function () {
  if (localStorage.getItem(CSTATUS)) {
    try {
      return localStorage.getItem(CSTATUS)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getRoid =  function () {
  if (localStorage.getItem(ROID)) {
    try {
      return localStorage.getItem(ROID)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getCompId =  function () {
  if (localStorage.getItem(COMP_ID)) {
    try {
      return localStorage.getItem(COMP_ID)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getDict =  function () {
  if (localStorage.getItem(DICT)) {
    try {
      return localStorage.getItem(DICT)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getArea =  function () {
  if (localStorage.getItem(AREA)) {
    try {
      return localStorage.getItem(AREA)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

let getCitys =  function () {
  if (localStorage.getItem(CITYS)) {
    try {
      return localStorage.getItem(CITYS)
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

const state = {
  userInfo: getUserInfo(), // 用户信息
  compInfo: getCompInfo(), // 企业信息
  compId: getCompId(),// 企业id
  avatar: '',
  roid: getRoid(),// 132：业务员 66：管理员
  // userId: getUserId(), // 用户ouid
  userId: getUserId(), // 用户ouid
  citys: getCitys(), // 城市列表
  cstatus: getCstatus(),// 启用停用
  cityCode: '', // 城市编号
  openId: '',
  searchContent: '', // 搜索内容
  searchState: '', // 搜索类型
  isLoading: false, // 网络加载等待框
  dict: getDict(), // 字典
  area: getArea(), // 城市地区json数据
  currentCity: '', // 当前定位地区
  receiptCity: '', // 发单地区
  startCity: '',// 路线出发地
  bournCity: '',// 路线目的地
  startCityCode: '',// 路线出发地编码
  bournCityCode: '',// 路线目的地编码
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
