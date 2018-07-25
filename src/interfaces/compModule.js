module.exports = {
  /**
   * 根据用户码查询指定企业信息(不加路线)
   */
  querygetCompByUid: (id ,callback) => {
    queryIce(comp.CompServicePrx , 'CompService', 'querygetCompByUid',id ,callback);
  },
  /**
   * 根据企业码查询指定企业信息(加路线)
   */
  querygetCompByCid: (compid ,callback) => {
    queryIce(comp.CompServicePrx , 'CompService', 'querygetCompByCid',compid ,callback);
  },
  /**
   * 修改保存企业信息
   */
  updateComp: (compInfo ,callback) => {
    queryIce(comp.CompServicePrx , 'CompService', 'updateComp',compInfo ,callback);
  },
  /**
   * 企业logo框信息的展示
   */
  queryCompByBasicUid: (uoid ,callback) => {
    queryIce(comp.CompServicePrx , 'CompService', 'queryCompByBasicUid',uoid ,callback);
  },

  /**
   * 根据用户ID查询企业码 （公共）
   */
  selectCompUserByUid: (uoid, callback) => {
    queryIce(comp.CompServicePrx , 'CompService', 'selectCompUserByUid',uoid ,callback);
  },

  /**
   * 登录时添加企业到缓存（公共）
   */
  addLoginCompByRedis: (uoid, compid,callback) => {
    queryIce(comp.CompServicePrx , 'CompService', 'addLoginCompByRedis',uoid ,compid ,callback);
  }
};
