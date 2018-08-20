
import md5 from "md5"

module.exports =  {

  /**验证用户名是否重复
   * int verifyUserName(string uname);
   * int verifyUserName(string uname);
   * */
  checkUsernameRepetition: function (username, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'verifyUserName', username, callback);
  },
  //////////////////////////////////////////////////////////////
  /** 检测手机号码是否重复
   * int verifyPhone(long phone);
   */
  checkPhoneRepetition: function (phone, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'verifyPhone', str2jlong(phone), callback);
  },

  /** 检测手机号码是否重复(全覆盖版本)
   * int verifyPhone(long phone);
   */
  verifyPhone4App: function (phone, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'verifyPhone4App', str2jlong(phone), callback);
  },


  /** 发送手机验证码
   * list<String>
   * 第一个参数:register(注册), (登录),forgotpw(忘记密码),changephone(更换手机)...后续添加
   * 第二个参数手机号码
   * 第三个参数订单号码,如果没有就传"0"
   * */
  requestPhoneSms: function (paramList, callback) {

    // queryIce(user.UserServicePrx, 'UserService', 'sendSms', str2jlong(phone), callback);
    queryIce(user.UserServicePrx, 'UserService', 'sendSms', paramList, callback);
  },

  /**
   * 效验短信
   * int verifySms(long phone,string sms );
   */
  verifySms:function(phone,sms,callback){
    queryIce(user.UserServicePrx, 'UserService', 'verifyCode', str2jlong(phone),sms, callback);
  },
//////////////////////////////////////////////////////////////////////////////////////
  /**通过手机号码,短信 修改密码
   * int forgetUserPassword(long phone ,string sms ,string newPassword);
   * */
  updatePasswordByPhone: function (phone, smsCode, newPassword, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'forgetUserPassword', str2jlong(phone), smsCode, md5(newPassword), callback);
  },

  /**通过用户唯一标识,旧密码 修改密码
   * updateUserPassword
   * int updateUserPassword(string token,string oldPassword ,string newPassword);
   * */
  updatePasswordByOld: function (phone, oldPassword, newPassword, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'updateUserPassword', str2jlong(phone), md5(oldPassword), md5(newPassword), callback);
  },

  /**修改手机号码 用户唯一标识,新手机号,短信验证码
   *int updateUserPhone(string token,long oldPhone ,long newPhone,string sms);
   * */
  changePhone: function (phone, newPhone, smsCode, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'updateUserPhone', str2jlong(phone), str2jlong(newPhone), smsCode, callback);
  },

  /** 注册: 用户名,手机号码,密码(MD5),邀请码(可选项),短信验证码
   *  必须先发送一次短信
   *
   int custRegister(string uname,long uphone,string upw,string sms,string uinvite);
   * */
  userRegister: function (username, phone, password, invitationCode, smsCode,callback) {
    queryIce(user.UserServicePrx, 'UserService', 'custRegister', username,str2jlong(phone), md5(password),smsCode,invitationCode,callback);
  },

  /**登陆 密码(MD5) ,返回userApi.UserICE对象
   * UserICE login(string nameOrPhone , string password , int type);//0 管理后台 ;1 信息大厅 ;2司机APP*/
  login: function (account, password, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'login', account, md5(password), 1, callback);
  },

  /**
   * 根据短信登陆
   UserICE loginBySms(string uphone ,string sms);
   */
  userVerifyBySms: function (phone,smsCode, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'loginBySms', str2jlong(phone), smsCode,callback);
  },

  /**
   * 根据用户token登陆
   * UserICE loginByToken(string token);
   * */
  userVerifyByToken: function (token, callback) {
    queryIce(user.UserServicePrx, 'UserService', 'loginByToken', token, callback);
  }

};
