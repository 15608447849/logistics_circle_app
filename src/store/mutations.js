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
    try {
      wx.setStorageSync(USER_INFO, v)
    } catch (e) {
      console.log(USER_INFO + '本地保存失败 原因:' + e)
    }
  },
  // 用户token
  [USER_TOKEN] (state, v) {
    state.userToken = v
    try {
      wx.setStorageSync(USER_TOKEN, v)
    } catch (e) {
      console.log(USER_TOKEN + '本地保存失败 原因:' + e)
    }
  },

  // 用户UNION_ID
  [UNION_ID] (state, v) {
    state.unionId = v
    try {
      wx.setStorageSync(UNION_ID, v)
    } catch (e) {
      console.log(UNION_ID + '本地保存失败 原因:' + e)
    }
  },

  // 用户小程序登录成功信息
  [WX_USER_INFO] (state, v) {
    state.wxUserInfo = v
    try {
      wx.setStorageSync(WX_USER_INFO, v)
    } catch (e) {
      console.log(WX_USER_INFO + '本地保存失败 原因:' + e)
    }
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
