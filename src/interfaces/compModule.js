module.exports = {
  getUserParam:()=>{
    let userParam = new cstruct.UserParam();
    userParam.uid = localStorage.getItem('USER_ID') === null ? 0 : localStorage.getItem('USER_ID');
    userParam.compid = localStorage.getItem('COMP_ID')  === null ? 0 : localStorage.getItem('COMP_ID');
    return userParam;
  },

  /*** 企业logo框信息的展示 */
  queryCompByBasicUid: (oid, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'queryCompByBasicUid', module.exports.getUserParam(), callback);
  },
  /*** 企业logo框信息的展示 */
  selectPhoAndPht: (compId, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'selectPhoAndPht', compId, callback);
  },
  /** 根据用户码查询指定企业信息(不加路线) */
  querygetCompByUid: (oid, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'querygetCompByUid', module.exports.getUserParam(), callback);
  },
  /** 根据企业码查询指定企业信息(加路线) */
  querygetCompByCid: (compid, callback) => {
    // queryIce(comp.CompServicePrx, 'CompService', 'querygetCompByCid', compid,callback);
    queryIce(comp.CompServicePrx, 'CompService', 'querygetCompAll', compid, callback);
  },
  /*** 修改保存企业信息 */
  updateComp: (compJson, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'updateComp', module.exports.getUserParam(), compJson, callback);
  },
  /*** 根据用户ID查询企业码 */
  selectCompUserByUid: (oid, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'selectCompUserByUid', oid, callback);
  },
  /*** 登录时添加企业到缓存 */
  addLoginCompByRedis: (oid, compid, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'addLoginCompByRedis', oid, compid, callback);
  },
  /*** 查询司机、业务员信息(type 查询类型 1,司机;132,业务员;) */
  selectStaffInfo: (name, phone, status, type, cuid, page, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'selectStaffInfo', name, phone, status, type, cuid, page, callback);
  },
  /*** 新增司机、业务员信息(type 人员对象：1,添加司机;132,添加业务员; ) */
  addStaffInfo: (name, phone, cuid, type, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'addStaffInfo',module.exports.getUserParam(), name, phone, cuid, type, callback);
  },
  /*** 修改司机、业务员信息(type 人员对象：1,添加司机;132,添加业务员;cuid当前登录用户;uid当前修改的用户 ) */
  updateStaffInfo: (name, phone, cuid, uid, type, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'updateStaffInfo',module.exports.getUserParam(), name, phone, cuid, uid, type, callback);
  },
  /*** 修改司机业务员状态(type 人员对象：1,添加司机;132,添加业务员; cuid 当前登录用户 ,uid需要修改的用户,status 修改的状态 （0 启用 32 停用）) */
  updateStaffstatus: (cuid, uid, status, type, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'updateStaffstatus', module.exports.getUserParam(), uid, status, type, callback);
  },
  /** 获取司机列表 */
  searchDriver4App: (cuid, arg, pageNo, pageSize, callback) => {
    queryIce(comp.CompServicePrx, 'CompService', 'searchDriver4App', module.exports.getUserParam(), arg, pageNo, pageSize, callback);
  }
};
