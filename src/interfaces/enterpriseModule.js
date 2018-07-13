/*
 struct DriverInfo {
  int driverid; // 司机码 (PK)
  string carryname; // 所属企业名
  string drivername; // 司机姓名
  string driverphone; // 司机手机
  string createdate; // 创建日期
  string createtime; // 创建时间
  int cstatus; //状态 （0：启动，1:删除，2：停用）
};
*/
module.exports= {

  /**
   * 新增司机
   *
   // function(driverid, carryname, drivername, driverphone, createdate, createtime, cstatus)
   */
  newDriver: (token, name, phone, callback) => {
    let drive = new enterprise.DriverInfo(-1, "", name, phone, '', '', -1);
    queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'saveDriver', token, drive, callback);
  },
  /**
   * 修改司机
   int saveDriver(string token,DriverInfo driver);
   */
  changeDriverInfo: function (token, enterprise_DriverInfo, callback) {
    queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'saveDriver', token, enterprise_DriverInfo, callback);
  },
  /**
   * 查询司机列表
   *
   * params:查询参数数组[司机姓名，司机电话，司机状态] -> 没有传入空
   DriverInfoSeq queryDriver(string token, cstruct::stringSeq params);
   */
  queryDriverInfo: function (token, name, phone, state, callback) {
    queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'queryDriver', token, [name, phone, state], callback);
  },

  /**
   * 启用司机
   * driverid: 司机id
   *  int enable(string token,cstruct::intSeq driverids);
   *
   * 停用司机
   * driverid: 司机id
   *int disable(string token,cstruct::intSeq driverids);
   */
  enableDriver: (token, pkCodeList, flag, callback) => {
    if (flag) {
      queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'enable', token, pkCodeList, callback);
    } else {
      queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'disable', token, pkCodeList, callback);
    }
  },
  /**
   * 删除司机*/
  deleteDriver: (token, pkCodeList, callback) => {
    queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'deleteDrivers', token, pkCodeList, callback);
  },
  /**
   * 司机管理重置密码
   * uphone:司机电话
   int resetDriverPasswordByPhone(string token, string uphone);
   */
  resetDriverPassword(token, phone, callback) {
    queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'resetDriverPasswordByPhone', token, phone, callback);
  }
};
