module.exports = {
  getUserParam:()=>{
    let userParam = new cstruct.UserParam();
    userParam.uid = localStorage.getItem('USER_ID') === null ? 0 : localStorage.getItem('USER_ID');
    userParam.compid = localStorage.getItem('COMP_ID')  === null ? 0 : localStorage.getItem('COMP_ID');
    return userParam;
  },

  /** 查询我的已发布订单 queryMyPubOrder */
  queryMyPubOrder: (oid, queryParam, page, callback) => {
    queryIce(redundancy.RedundancyServerPrx, 'RedundancyServer', 'queryMyPubOrder', module.exports.getUserParam(), queryParam, page, callback);
  },
  /** 查询我的接收订单 queryMyRecvOrder */
  queryMyRecvOrder: (oid, queryParam, page, callback) => {
    queryIce(redundancy.RedundancyServerPrx, 'RedundancyServer', 'queryMyRecvOrder', module.exports.getUserParam(), queryParam, page, callback);
  }
};
