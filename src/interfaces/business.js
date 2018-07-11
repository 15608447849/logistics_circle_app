


const userModule = require('./userModule');
const orderModule = require('./orderModule');
const enterpriseModule = require('./enterpriseModule');
import {
  iceGridInstanceName,
  serverIp,
  serverPort
} from '../../static/libs/server/config'

(function () {
  init(iceGridInstanceName, serverIp, serverPort);

}());

exports.install = function (Vue) {

  Vue.prototype.$Ice_SystemService = {
    getBaseUnit: (callback)=> {
      queryIce(system.SystemServicePrx , 'SystemService', 'getAllDict', callback);
    },
    getAreaCode: (callback)=> {
      queryIce(system.SystemServicePrx , 'SystemService', 'getChineseAllAreas', callback);
    }
  };

  Vue.prototype.$Ice_UserService = userModule;

  Vue.prototype.$Ice_OrderService = orderModule;

  Vue.prototype.$Ice_EnterpriseService = enterpriseModule;

};




