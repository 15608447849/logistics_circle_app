import {
  iceGridInstanceName,
  serverIp,
  serverPort
} from '../config'

import md5 from "md5"

(function () {
  init(iceGridInstanceName, serverIp, serverPort);
}());


exports.install = function (Vue) {

  Vue.prototype.$Ice_UserService = {

    /**验证用户名是否重复
     * int verifyUserName(string uname);
     * */
    checkUsernameRepetition: function (username, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'verifyUserName', username, callback);
    },
    /** 检测手机号码是否重复
     * int verifyPhone(long phone);
     */
    checkPhoneRepetition: function (phone, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'verifyPhone', str2jlong(phone), callback);
    },

    /**请求对手机号码发送短信
     * int sendSms(long phone,string checkPhone);//checkPhone ="true",电话号码必须属于用户才能发短信,其他不校验
     * */
    requestPhoneSms: function (phone,flag, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'sendSms', str2jlong(phone),flag.toString(), callback);
    },

    /**
     * 效验短信
     * int verifySms(long phone,string sms );
     */
    verifySms:function(phone,sms,callback){
      queryIce(userApi.UserServicePrx, 'UserService', 'verifySms', str2jlong(phone),sms, callback);
    },

    /**通过手机号码,短信 修改密码
     * int forgetUserPassword(long phone ,string sms ,string newPassword);
     * */
    updatePasswordByPhone: function (phone, smsCode, newPassword, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'forgetUserPassword', str2jlong(phone), smsCode, newPassword, callback);
    },

    /**通过用户唯一标识,旧密码 修改密码
     * updateUserPassword
     * int updateUserPassword(string token,string oldPassword ,string newPassword);
     * */
    updatePasswordByOld: function (token, oldPassword, newPassword, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'updateUserPassword', token, md5(oldPassword), md5(newPassword), callback);
    },

    /**修改手机号码 用户唯一标识,新手机号,短信验证码
     *int updateUserPhone(string token,long oldPhone ,long newPhone,string sms);
     * */
    changePhone: function (token, newPhone, smsCode, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'updateUserPhone', token, str2jlong(newPhone), smsCode, callback);
    },

    /** 注册: 用户名,手机号码,密码(MD5),邀请码(可选项)
     *
     int custRegister(string uname,long uphone,string upw,string sms,string uinvite);
     * */
    userRegister: function (username, phone, password, invitationCode, smsCode,callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'custRegister', username,str2jlong(phone), password,smsCode,invitationCode,callback);
    },

    /**登陆 密码(MD5) ,返回userApi.UserICE对象
     * UserICE login(string nameOrPhone , string password , int type);//0 管理后台 ;1 信息大厅 ;2司机APP*/
    userVerify: function (account, password, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'login', account, md5(password), 1, callback);
    },

    /**
     * 根据短信登陆
     UserICE loginBySms(string uphone ,string sms);
     */
    userVerifyBySms: function (phone,smsCode, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'loginBySms', phone, smsCode,callback);
    },

    /**
     * 根据用户token登陆
     * UserICE loginByToken(string token);
     * */
    userVerifyByToken: function (token, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'loginByToken', token, callback);
    }

  };
  Vue.prototype.$Ice_OrderService = {

    initDictionnary:(callback)=>{
      queryIce(order.OrderServicePrx , 'OrderService', 'initOrderPage',callback);
    },

    /**
     *全文查询当前的订单
     */
    queryAllByKey: (key,callback)=> {
      callback.setFilter(new IceCallback(
        function (result) {


          let orderList = [];
          if (result.length>0){
            for (let i=0;i<result.length;i++)
            {
              let temp = result[i];

              orderList.push(
               {
               id:temp.id,
               lineInfo:temp.startAddr+' - '+temp.destAddr,
               goodsInfo:temp.goodsType+','+temp.wm,
               vehicleRequire:temp.vlen+','+temp.vt,
               fee:temp.cost,
               time:temp.time,
               state:temp.ostatus
               }
             )
            }
          }

          // console.log("过滤",result,orderList);
          return orderList;
        }
      ));
      queryIce(order.OrderServicePrx , 'OrderService', 'queryOrderByCurdate', [key],callback);
    },
    /**自动生成订单序列.
     * 返回 string */
    autoGenerationOrderSequence:(callback)=>{
      queryIce(order.OrderServicePrx , 'OrderService', 'generateOrderNo', callback);
    },

    /**发布订单
     * 2、Json对象
     string  orderno; // 订单号
     string billno;	// TMS运单号
     int startc; // 出发地地区码
     string startaddr; // 出发地详细地址
     int arriarc; // 到达地地区码
     string arriaddr; // 到达地详细地址
     int puberid; // 发布人
     string consignee; // 收货人
     string  consphone; // 收货联系方式
     string  phone1; // 手机号码1
     string  phone2; // 手机号码2
     double wm;  //货物重量/体积
     int wmdictc;  //货物重量/体积单位字典码id
     int num;  //件数
     int numdictc;  //件数单位字典码id
     int padictc;  //包装要求字典码id
     int ctdictc;  //货物类型字典码id
     int vnum;  //车数量
     int vldictc;  //车长字典码id
     int vtdictc;  //车型字典码id
     int tndictc;  //运输要求字典码id
     double price;  //价格(元)
     int pmdictc;  //价格度量单位字典码id
     double insureamt;  //声明保价金额(元)
     double codamt;  //代收货款金额(元)
     int ptdictc;  //付款方式字典码id
     int dmdictc;  //提货方式字典码id
     int redictc;  //回单要求字典码id
     string pusdate;  //取货开始日期
     string pustime;  //取货开始时间
     string puedate;  //取货结束日期
     string puetime;  //取货结束时间
     string easdate;  //期望到货开始日期
     string eastime;  //期望到货开始时间
     string eaedate;  //期望到货结束日期
     string eaetime;  //期望到货结束时间
     *大于0操作成功;等于0操作失败;
     * */
    releaseOrder:(token,json,callback)=>{
      queryIce(order.OrderServicePrx , 'OrderService', 'addOrder', token,[json],callback);
    }



  };


};




