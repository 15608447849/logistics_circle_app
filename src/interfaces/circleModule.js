module.exports = {
  getUserParam:()=>{
    let userParam = new cstruct.UserParam();
    userParam.uid = localStorage.getItem('USER_ID') === null ? 0 : localStorage.getItem('USER_ID');
    userParam.compid = localStorage.getItem('COMP_ID')  === null ? 0 : localStorage.getItem('COMP_ID');
    return userParam;
  },
    /*** 查询我的圈子成员
            * uoid 用户编码
		 	* cType 圈子类型
		 	* pageIndex 页码
		 	* pageSize 每页记录条数
    */
    queryMyCircleByUser:(oid,cType,pageIndex,pageSize,callback) => {
        queryIce(mycircle.CircleServicePrx, 'CircleService', 'queryMyCircleByUser',module.exports.getUserParam(),cType,pageIndex,pageSize,callback);
    },
    /*** 移除关系
    */
    removeCircle:(oid,targetid,ctype,callback) => {
        queryIce(mycircle.CircleServicePrx, 'CircleService', 'removeCircle',module.exports.getUserParam(),targetid,ctype,callback);
    },
    /**将成员添加到黑名单
		 	* uoid 当前登录用户
		 	* targetid 需要添加目标用户
    */
    addBlackList:(oid,targetid,callback) => {
        queryIce(mycircle.CircleServicePrx, 'CircleService', 'addBlackList',module.exports.getUserParam(),targetid,callback);
    },
    /**查询我可以添加的成员
    */
    queryCanAddMyCircle:(param,callback) => {
        queryIce(mycircle.CircleServicePrx, 'CircleService', 'queryCanAddMyCircle',param,callback);
    },
    /**查询我的圈子黑名单
    */
   queryMyCircleBlackList:(oid,pageIndex,pageSize,callback) => {
        queryIce(mycircle.CircleServicePrx, 'CircleService', 'queryMyCircleBlackList',module.exports.getUserParam(),pageIndex,pageSize,callback);
    },
    /**添加成员到圈子
    */
   sendAddMyCircleMsg:(oid,targetid,ctype,callback) => {
        queryIce(mycircle.CircleServicePrx, 'CircleService', 'sendAddMyCircleMsg',module.exports.getUserParam(),targetid,ctype,callback);
    },

  /**确认/拒绝添加
   */
  agreeOrRefuse:(msgid,targetid,callback) => {
    queryIce(mycircle.CircleServicePrx, 'CircleService', 'agreeOrRefuse' ,str2jlong(msgid),targetid,callback);
  },
  YesagreeOrRefuse:(msgid,targetid,callback) => {
  queryIce(mycircle.CircleServicePrx, 'CircleService', 'agreeOrRefuse' ,str2jlong(msgid),targetid,callback);
},
};
