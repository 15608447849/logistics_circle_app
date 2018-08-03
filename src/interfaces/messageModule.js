module.exports = {
  /**
   * 查询当前用户是否有未读信息
   */
  isUnreadMsg: (oid, callback) => {
    queryIce(message.MessageServicePrx, 'MessageService', 'isUnreadMsg', oid, callback);
  },
  /**
   * 查询当前用户的消息列表
   */
  queryMsgListByUno: (oid, callback) => {
    queryIce(message.MessageServicePrx, 'MessageService', 'queryMsgListByUno', oid, callback);
  },

  /**
   * 查询当前用户的消息列表
   * uid 用户ID
   * isDeal 0 未处理 1 已处理
   */
  queryMsgListByUid: (oid, isDeal, callback) => {
    queryIce(message.MessageServicePrx, 'MessageService', 'queryMsgListByUid', oid , isDeal, callback);
  },

};
