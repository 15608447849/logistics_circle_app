import {
  USER_INFO,
  USER_TOKEN,
  WX_USER_INFO,
  SEARCH_STATE,
  SEARCH_CONTENT,
  UNION_ID
} from './mutation-types'

export default {
  // 用户信息
  [USER_INFO] (state, v) {
    state.userInfo = v
  },
  // 用户token
  [USER_TOKEN] (state, v) {
    state.userToken = v
  },

  // 搜索内容
  [SEARCH_CONTENT] (state, v) {
    state.searchContent = v
  },

  // 搜索状态
  [SEARCH_STATE] (state, v) {
    state.searchState = v
  }
}
