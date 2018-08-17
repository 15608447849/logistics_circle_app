import {UNION_ID, USER_INFO} from "@/store/mutation-types";

export default {
  // 用户信息
  user: state => {
    return state.userInfo
  },
  userId: state => {
    return state.userId
  },
  roid: state => {
    return state.roid
  },
  // 企业信息
  compInfo: state => {
    return state.compInfo
  },
  // 企业id
  compId: state => {
    return state.compId
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
  },
  // 发单城市
  receiptCity: state => {
    return state.receiptCity
  },
  // 高德地图状态
  geoState: state => {
    return state.geoState
  },
  // 地理编码信息列表
  addressCom: state => {
    return state.addressCom
  }

}
