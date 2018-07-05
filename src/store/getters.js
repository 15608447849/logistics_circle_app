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
  }
}
