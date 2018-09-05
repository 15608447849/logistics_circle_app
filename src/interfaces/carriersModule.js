
/**
 * 路线模型
  struct Route{
    string origin;//起始地
    string destination;//目的地
    string channel;//途径点
    string transfer;//中转点
  };
 */

/**
 * 承运商与路线模型
  struct CarrierInfo{
    long cid;//承运商id
    string uno;//用户id
    string fname;//企业名称
    string sname;//简称
    int ctype;//企业性质
    int csale;//企业规模
    string contact;//联系方式
    int area;//企业地址区域编码
    string address;//企业地址
    string postcode;//邮编
    string pho;//业务手机1
    string pht;//业务手机2
    string invtitle;//发票抬头
    int invtype;//发票类型
    string taxno;//税号
    string phone;//电话
    string openbank;//开户行
    string openaccount;//开户账号
    int billarea;//开票地址区域编码
    string billaddr;//开票地址
    string busslic;//营业执照（副本）
    string idcard;//法人证件（身份证）
    string trasportlic;//运输许可证（副本）
    string insurcert;//投保证明（原件）
    string ntaxcert;//国税登记证（副本）
    string ltaxcert;//地税登记证（副本）
    string orgcert;//机构代码证（副本）
    string logocarrier;//承运商logo
    int verify;//是否已认证（0 否，1 是）默认值为 0
    int creadit;//信用等级（数字越大信用等级越高）默认0
    int cstatus;//状态(0:启动，1:停用)
    RouteSeq routeList;//此承运商相关路线列表
  };
*/
module.exports = {

  getUserParam:()=>{
    let userParam = new cstruct.UserParam();
    userParam.uid = localStorage.getItem('USER_ID') === null ? 0 : localStorage.getItem('USER_ID');
    userParam.compid = localStorage.getItem('COMP_ID')  === null ? 0 : localStorage.getItem('COMP_ID');
    return userParam;
  },

  /**
   * 修改承运商信息
  int updateCarrier(CarrierInfo carrier);
  */
  updateCarrier:(CarrierInfo,callback)=>{
    queryIce(carriers.CarrierServicePrx, 'CarrierService', 'updateCarrier', CarrierInfo,callback);
  },
  /**
   * 根据token查询指定承运商信息
  CarrierInfo querygetCarrierByToken(string token);
  */
  querySelfCarrier:(token,callback)=>{
    queryIce(carriers.CarrierServicePrx, 'CarrierService', 'querygetCarrierByToken', module.exports.getUserParam(),callback);
  },
  /**
   * 根据用户ID查询指定承运商信息
   CarrierInfo querygetCarrierByUid(string uno);
   */
  updateCarrier:(uid,callback)=>{
    queryIce(carriers.CarrierServicePrx, 'CarrierService', 'querygetCarrierByUid', module.exports.getUserParam(),callback);
  },
  /**
   * 上传logoURL
  int updateLogocarrier(string token,string url);
   */
  updateCarrier:(token,url,callback)=>{
    queryIce(carriers.CarrierServicePrx, 'CarrierService', 'updateLogocarrier', module.exports.getUserParam(),url,callback);
  },
};
