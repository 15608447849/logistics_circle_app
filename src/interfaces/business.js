


const userModule = require('./userModule');
const orderModule = require('./orderModule');
const enterpriseModule = require('./enterpriseModule');
const circleModule = require('./circleModule');
const compModule = require('./compModule');
const informationComp = require('./informationComp');

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

  Vue.prototype.$Ice_CircleService = circleModule;

  Vue.prototype.$Ice_CompService = compModule;

  Vue.prototype.$Ice_InfoService = informationComp;

};




