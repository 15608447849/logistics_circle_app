module.exports = {
  getUserParam:()=>{
    let userParam = new cstruct.UserParam();
    userParam.uid = localStorage.getItem('USER_ID') === null ? 0 : localStorage.getItem('USER_ID');
    userParam.compid = localStorage.getItem('COMP_ID')  === null ? 0 : localStorage.getItem('COMP_ID');
    return userParam;
  },
  /**
   * 查询当前用户是否有未读信息
   */
  isUnreadMsg:(oid,callback) => {
    queryIce(message.MessageServicePrx, 'MessageService', 'isUnreadMsg', module.exports.getUserParam(),callback);
  },
  /**
   * 查询当前用户的消息列表
   */
  queryMsgListByUno: (oid, callback) => {
    queryIce(message.MessageServicePrx, 'MessageService', 'queryMsgListByUno', module.exports.getUserParam(), callback);
  },
  /**
   * 查询当前用户的消息列表
   * uid 用户ID
   * isDeal 0 未处理 1 已处理
   */
  queryMsgListByUid: (oid, isDeal, callback) => {
    queryIce(message.MessageServicePrx, 'MessageService', 'queryMsgListByUid', module.exports.getUserParam() , isDeal, callback);
  },
  // /**
  //  企业logo 基本信息，无线路
  //  */
  // queryCompByBasicUid:(oid,callback) => {
  //   queryIce(comp.CompServicePrx, 'CompService', 'queryCompByBasicUid', oid , callback);
  // },
  // /**
  //  企业信息，无线路
  //  */
  // querygetCompByUid:(oid,callback) => {
  //   queryIce(comp.CompServicePrx, 'CompService', 'queryCompByBasicUid', oid , callback);
  // }
};

