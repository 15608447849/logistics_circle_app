module.exports = {
  /** 查询我的已发布订单 queryMyPubOrder */
  queryMyPubOrder: (oid, queryParam, page, callback) => {
    queryIce(redundancy.RedundancyServerPrx, 'RedundancyServer', 'queryMyPubOrder', oid, queryParam, page, callback);
  },
  /** 查询我的接收订单 queryMyRecvOrder */
  queryMyRecvOrder: (oid, queryParam, page, callback) => {
    queryIce(redundancy.RedundancyServerPrx, 'RedundancyServer', 'queryMyRecvOrder', oid, queryParam, page, callback);
  }
};
