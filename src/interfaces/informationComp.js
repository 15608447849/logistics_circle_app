module.exports = {
  getUserParam:()=>{
    let userParam = new cstruct.UserParam();
    userParam.uid = localStorage.getItem('USER_ID') === null ? 0 : localStorage.getItem('USER_ID');
    userParam.compid = localStorage.getItem('COMP_ID')  === null ? 0 : localStorage.getItem('COMP_ID');
    return userParam;
  },

    /*** 企业logo框信息的展示 */
    queryCompByBasicUid:(compid,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'queryCompByBasicUid',module.exports.getUserParam(),callback);
    },
    /** 根据用户码查询指定企业信息(不加路线) */
    querygetCompByUid:(compid,callback)=>{
        queryIce(comp.CompServicePrx, 'CompService', 'querygetCompByUid', module.exports.getUserParam(),callback);
    },
    /** 根据企业码查询指定企业信息(加路线) */
    querygetCompByCid:(compid,callback)=>{
        queryIce(comp.CompServicePrx, 'CompService', 'querygetCompByCid', compid,callback);
    },
    /*** 修改保存企业信息 */
    updateComp:(compJson,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'updateComp', module.exports.getUserParam(),compJson,callback);
    },
    /*** 根据用户ID查询企业码 */
    selectCompUserByUid:(oid,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'selectCompUserByUid', oid,callback);
    },
    /*** 登录时添加企业到缓存 */
    addLoginCompByRedis:(compid,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'addLoginCompByRedis', token,compid,callback);
    },
    /*** 注册用户时，添加企业用户关联关系 */
    insertCompUser:(uoid,phone,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'insertCompUser', uoid,str2jlong(phone),callback);
    },
    /*** 查询司机、业务员信息(type 查询类型 1,司机;132,业务员;) */
    selectStaffInfo:(name,phone,status,type,cuid,page,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'selectStaffInfo',module.exports.getUserParam(), name,phone,status,type,cuid,page,callback);
    },
    /*** 新增司机、业务员信息(type 人员对象：1,添加司机;132,添加业务员; ) */
    addStaffInfo:(name,phone,cuid,type,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'addStaffInfo',module.exports.getUserParam(),name,phone,cuid,type,callback);
    },
    /*** 修改司机、业务员信息(type 人员对象：1,添加司机;132,添加业务员;coid当前登录用户;uid当前修改的用户 ) */
    updateStaffInfo:(name,phone,cuid,uid,type,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'updateStaffInfo',module.exports.getUserParam(),name,phone,cuid,uid,type,callback);
    },
    /*** 修改司机业务员状态(type 人员对象：1,添加司机;132,添加业务员; cuid 当前登录用户 ,uid需要修改的用户,status 修改的状态 （0 启用 32 停用）) */
    updateStaffstatus:(cuid,uid,status,type,callback) => {
        queryIce(comp.CompServicePrx, 'CompService', 'updateStaffstatus',module.exports.getUserParam(),uid,status,type,callback);
    },
    /*** 反馈上传证件图片的相对路径 */
    feedbackCredentRelpath:(oid,imgPath,callback) => {
      queryIce(comp.CompServicePrx, 'CompService', 'feedbackCredentRelpath',oid,imgPath,callback);
    }
};
