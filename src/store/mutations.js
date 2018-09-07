import {
  USER_INFO,
  USER_ID,
  ROID,
  COMP_ID,
  CSTATUS,
  COMP_INFO,
  AVATAR_URL,
  RECEIPT_CITY,
  START_CITY,
  BOURN_CITY,
  SEARCH_STATE,
  SEARCH_CONTENT,
  UPDATE_LOADING_STATUS,
  DICT,
  CITYS,
  AREA,
  CURRENT_CITY_CODE,
  CURRENT_CITY,
  GEOSTATE,
  CITY_CODE,
  ADDRESSCOM, TABBAR_INDEX, IS_SHOW_SIDEBAR, START_CITY_CODE, BOURN_CITY_CODE
} from './mutation-types'

export default {
  // 用户信息
  [USER_INFO] (state, v) {
    state.userInfo = v;
    localStorage.setItem(USER_INFO, v);
  },
  // 用户id
  [USER_ID] (state, v) {
    state.userId = v;
    localStorage.setItem(USER_ID, v);
  },
  // 企业id
  [COMP_ID] (state, v) {
    state.compId = v;
    localStorage.setItem(COMP_ID, v);
  },
  // 角色id
  [ROID] (state, v) {
    state.roid = v;
    localStorage.setItem(ROID, v);
  },
  // 是否启用
  [CSTATUS] (state, v) {
    state.cstatus = v;
    localStorage.setItem(CSTATUS, v);
  },
  // 企业信息
  [COMP_INFO] (state, v) {
    state.compInfo = v;
    localStorage.setItem(COMP_INFO, v);
  },
  // 头像
  [AVATAR_URL] (state, v) {
    state.avatar = v;
    localStorage.setItem(AVATAR_URL, v);
  },
  // 侧边栏显示
  [IS_SHOW_SIDEBAR] (state, isShowSidebar) {
    state.isShowSidebar = isShowSidebar
  },
  // tabBarIndex
  [TABBAR_INDEX] (state, tabBarIndex) {
    state.tabBarIndex = tabBarIndex
  },
  // 搜索内容
  [SEARCH_CONTENT] (state, v) {
    state.searchContent = v
  },
  // 搜索状态
  [SEARCH_STATE] (state, v) {
    state.searchState = v
  },

  [UPDATE_LOADING_STATUS](state, isLoading) {
    state.isLoading = isLoading;
  },
  // 订单字典
  [DICT](state, v) {
    state.dict = v;
    localStorage.setItem(DICT, v);
  },
  // 地区
  [AREA](state, v) {
    state.area = v;
    localStorage.setItem(AREA, v);
  },
  // 城市编码
  [CITY_CODE] (state, v) {
    state.cityCode = v;
    localStorage.setItem(CITY_CODE, v);
  },
  // 城市列表
  [CITYS] (state, v) {
    state.citys = v;
    localStorage.setItem(CITYS, v);
  },
  // 所在地编码
  [CURRENT_CITY_CODE](state, v) {
    state.currentCityCode = v;
    localStorage.setItem(CURRENT_CITY_CODE, v);
  },
  // 当前城市
  [CURRENT_CITY](state, v) {
    state.currentCity = v;
  },
  // 当前城市
  [RECEIPT_CITY](state, v) {
    state.receiptCity = v;
  },
  // 路线出发地城市
  [START_CITY](state, v) {
    state.startCity = v;
  },
  // 出发地编码
  [START_CITY_CODE] (state, v) {
    state.startCityCode = v;
    localStorage.setItem(START_CITY_CODE, v);
  },
  // 路线目的地城市
  [BOURN_CITY](state, v) {
    state.bournCity = v;
  },
  // 目的地编码
  [BOURN_CITY_CODE] (state, v) {
    state.bournCityCode = v;
    localStorage.setItem(BOURN_CITY_CODE, v);
  },
  // 高德地图状态
  [GEOSTATE](state, v) {
    state.geoState = v;
  },
  // 地理编码信息列表
  [ADDRESSCOM](state, v) {
    state.addressCom = v;
  }

}
