import {
  iceGridInstanceName,
  serverIp,
  serverPort
} from '../config'

import md5 from "md5"

(function () {init(iceGridInstanceName,serverIp,serverPort);}());


exports.install = function (Vue) {

  /**验证用户名是否重复*/
  Vue.prototype.checkUsernameRepetition=function(username,callback){
    queryIce(userApi.UserServicePrx,'UserService','verifyUserNamer',username,callback);
  };
  /** 检测手机号码是否重复*/
  Vue.prototype.checkPhoneRepetition = function(phone,callback){
    queryIce(userApi.UserServicePrx,'UserService','verifyPhone', str2long(phone),callback);
  };

  /**请求对手机号码发送短信 */
  Vue.prototype.requeryPhoneSms = function(phone,callback){
    queryIce(userApi.UserServicePrx,'UserService','sendSms', str2long(phone),callback);
  };

  /**通过手机号码,短信 修改密码*/
  Vue.prototype.updatePasswordByPhone = function(phone,smsCode,newPassword,callback){

    queryIce(userApi.UserServicePrx,'UserService','forgetUserPassword', str2long(phone),smsCode,newPassword,callback);
  };

  /**通过用户唯一标识,旧密码 修改密码*/
  Vue.prototype.updatePasswordByOld = function(userId,oldPassword,newPassword,callback){
    queryIce(userApi.UserServicePrx,'UserService','updateUserPassword', str2long(userId),oldPassword,newPassword,callback);
  };

  /**修改手机号码 用户唯一标识,旧密码,新手机号,短信验证码*/
  Vue.prototype.changePhone=function(userId,oldPassword,newPhone,smsCode,callback){
    queryIce(userApi.UserServicePrx,'UserService','updateUserPhone', str2long(userId),oldPassword,str2long(newPhone),smsCode,callback);
  };

  /** 注册: 用户名,手机号码,密码(MD5),邀请码(可选项) */
  Vue.prototype.userRegister = function (username, phone, password, invitationCode, callback) {

    //(uno, rno, uname, uphone, upw, upwstatus, uinvite, adddate, addtime, updatedate, updatetime, cstatus, msg)
    let newUser = new userApi.UserICE(0,0,username,str2long(phone),md5(password),0,invitationCode,"","","","",0,"");
    queryIce(userApi.UserServicePrx,'UserService','custRegister', newUser,callback)
  };

  /**登陆 密码(MD5) ,返回userApi.UserICE对象 */
  Vue.prototype.userVerify = function (account,password,callback) {
    queryIce(userApi.UserServicePrx,'UserService','login', account, md5(password), 1,callback);
  };



};




