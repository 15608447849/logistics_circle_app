import {
  iceGridInstanceName,
  serverIp,
  serverPort
} from '../config'

(
  function () {
    init(iceGridInstanceName,serverIp,serverPort);
  }()
)



exports.install = function (Vue) {
  /** 注册 用户名,手机号码,密码,验证码,邀请码 */
  Vue.prototype.userRegester = function (username,phone,password,verificationCode,invitationCode,callback) {
    //(uno, rno, uname, uphone, upw, upwstatus, uinvite, adddate, addtime, updatedate, updatetime, cstatus, msg)
    var newUser = new userApi.UserICE(0,0,username,phone,password,0,invitationCode,"","","","",0,"")
    console.log(newUser)
    queryIce(userApi.UserServicePrx,'UserService','custRegister', newUser,callback)
  };


  /**登陆 密码 MD5加密*/
  Vue.prototype.userVerify = function (account,password,callback) {
    queryIce(userApi.UserServicePrx,'UserService','login', account, password, 1,callback)
  };



};


