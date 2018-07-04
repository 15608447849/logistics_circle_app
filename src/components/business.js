import {
  serverIp,
  serverPort
} from '../config'


(
  function () {
    init(serverIp,serverPort)
  }()

)


exports.install = function (Vue) {
  //登陆
  Vue.prototype.userVerify = function (account,password,callback) {
    queryIce(sysmanage.SysManageServicePrx,'SysManageService','loginCS', account, password, callback)
  };

  Vue.prototype.regest = function (account,password,yz,callback) {
    queryIce(sysmanage.SysManageServicePrx,'SysManageService','loginCS', account, password, callback)
  };

};


