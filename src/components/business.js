import {
  serverIp,
  serverPort
} from '../config'


(
  function () {
    init(serverIp,serverPort)
  }()

)


export function userVerify(account,password,callback) {
  queryIce(sysmanage.SysManageServicePrx,'SysManageService','loginCS', account, password, callback)
}


