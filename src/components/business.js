

const businessBeans = require('./businessBeans.js');
const convert = require('./convert.js');

import {
  iceGridInstanceName,
  serverIp,
  serverPort
} from '../../static/libs/server/config'

import md5 from "md5"


(function () {
  init(iceGridInstanceName, serverIp, serverPort);
}());


exports.install = function (Vue) {

  Vue.prototype.$Ice_SystemService = {

    initDirc: (callback)=> {
      queryIce(system.SystemServicePrx , 'SystemService', 'getAllDict', callback);
    },
    initMapDirc: (callback)=> {
      queryIce(system.SystemServicePrx , 'SystemService', 'getChineseAllAreas', callback);
    }
  };

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
    requestPhoneSms: function (phone, flag, callback) {
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
      queryIce(userApi.UserServicePrx, 'UserService', 'forgetUserPassword', str2jlong(phone), smsCode, md5(newPassword), callback);
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

    /** 注册: 用户名,手机号码,密码(MD5),邀请码(可选项),短信验证码
     *  必须先发送一次短信
     *
     int custRegister(string uname,long uphone,string upw,string sms,string uinvite);
     * */
    userRegister: function (username, phone, password, invitationCode, smsCode,callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'custRegister', username,str2jlong(phone), md5(password),smsCode,invitationCode,callback);
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


    /**
     *全文查询当前的订单
     */
    queryAllByKey: (token,key,size,callback)=> {
      callback.setFilter(convert.queryAllByKeyFilter());
      queryIce(order.OrderServicePrx , 'OrderService', 'queryOrderByCurdate', token,[key,size],callback);
    },
    /**自动生成订单序列.
     * 返回 string */
    autoGenerationOrderSequence:(callback)=>{
      queryIce(order.OrderServicePrx , 'OrderService', 'generateOrderNo', callback);
    },

    releaseOrder:(token,json,callback)=>{
      queryIce(order.OrderServicePrx , 'OrderService', 'addOrder', token,[json],callback);
    },

    getTargetOrder:(orderNo,callback)=>{
      callback.setFilter(convert.getTargetOrderFilter());
      queryIce(order.OrderServicePrx , 'OrderService', 'getOrderDetail', [orderNo],callback);
    }

  };

  Vue.prototype.$Ice_Enterprise = {

    /**
     * 新增司机
     *
     // function(driverid, carryname, drivername, driverphone, createdate, createtime, cstatus)
     */
    newDriver:(token,name,phone,callback)=>{
      let drive = new enterprise.DriverInfo(-1,"",name,phone,'','',-1);
      console.log(drive);
      queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'saveDriver', token, drive,callback);
    },
    /**
     * 修改司机
     int saveDriver(string token,DriverInfo driver);
     */
    changeDriverInfo: function (token, driverBean,callback) {
      callback.setFilter(convert.saveDriverInfoFilter());
      queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'saveDriver', token, driverBean,callback);
    },
    /**
     * 查询司机列表
     * 没有传入空
     * params:查询参数数组[司机姓名，司机电话，司机状态]
     DriverInfoSeq queryDriver(string token, cstruct::stringSeq params);
     */
    queryDriverInfo: function (token, name,phone,state,callback) {
      callback.setFilter(convert.queryDriverInfoFilter());
      queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'DriverInfoSeq', token, [name,phone,state],callback);
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
    enableDriver:(token,pkCodeList,flag,callback)=>{
      if (flag){
        queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'enable', token, pkCodeList,callback);
      } else{
        queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'disable', token, pkCodeList,callback);
      }
    },
    deleteDriver:(token,pkCodeList,callback)=>{
      queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'deleteDrivers', token, pkCodeList,callback);
    },
    /**
     * 司机管理重置密码
     * uphone:司机电话
    int resetDriverPasswordByPhone(string token, string uphone);
     */
    resetDriverPassword(token,phone,callback){
      queryIce(enterprise.EnterpriseServerPrx, 'EnterpriseServer', 'resetDriverPasswordByPhone', token, phone,callback);
    }
  }




};




