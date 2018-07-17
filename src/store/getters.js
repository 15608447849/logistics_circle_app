import {UNION_ID, USER_INFO} from "@/store/mutation-types";

export default {
  // 用户信息
  user: state => {
    return state.userInfo
  },
  userToken: state => {
    return state.userToken
  },
  searchContent: state => {
    return state.searchContent
  },
  searchState: state => {
    return state.searchState
  },
  // 订单字典
  dict: state => {
    return state.dict
  },
  // 地区
  area: state => {
    return state.area
  },
  // 当前城市
  currentCity: state => {
    return state.currentCity
  }
}
