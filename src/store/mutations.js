import {
  USER_INFO,
  USER_ID,
  COMP_INFO,
  WX_USER_INFO,
  SEARCH_STATE,
  SEARCH_CONTENT,
  UPDATE_LOADING_STATUS,
  DICT,
  AREA,
  CURRENT_CITY,
  GEOSTATE,
  ADDRESSCOM
} from './mutation-types'

export default {
  // 用户信息
  [USER_INFO] (state, v) {
    state.userInfo = v
  },
  // 用户token
  [USER_ID] (state, v) {
    state.userId = v
  },
  // 企业信息
  [COMP_INFO] (state, v) {
    state.compInfo = v
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
  },
  // 地区
  [AREA](state, v) {
    state.area = v;
  },
  // 当前城市
  [CURRENT_CITY](state, v) {
    state.currentCity = v;
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
