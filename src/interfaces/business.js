


const userModule = require('./userModule');
const orderModule = require('./orderModule');
const enterpriseModule = require('./enterpriseModule');
const circleModule = require('./circleModule');
const compModule = require('./compModule');
const informationComp = require('./informationComp');
const myOrderModule = require('./myOrderModule');
const MessageModule = require('./messageModule');
const redundancyModule = require('./redundancyModule');


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
    },
    getTransferPoint: (place,callback) => {
      queryIce(system.SystemServicePrx , 'SystemService', 'getTransferPoint',place, callback);
    },
    getProperties:(callback) => {
      queryIce(system.SystemServicePrx , 'SystemService', 'getProperties', callback);
    },
    getAreaH5Data:(callback) => {
      queryIce(system.SystemServicePrx , 'SystemService', 'getCityAreaAll4H5', callback);
    },
    getCityByName:(cityName,callback) => {
      queryIce(system.SystemServicePrx , 'SystemService', 'getCityByName',cityName, callback);
    }
  };

  Vue.prototype.$Ice_UserService = userModule;

  Vue.prototype.$Ice_OrderService = orderModule;

  Vue.prototype.$Ice_EnterpriseService = enterpriseModule;

  Vue.prototype.$Ice_CircleService = circleModule;

  Vue.prototype.$Ice_CompService = compModule;

  Vue.prototype.$Ice_InfoService = informationComp;

  Vue.prototype.$Ice_myOrderService = myOrderModule;

  Vue.prototype.$Ice_MessageService = MessageModule;

  Vue.prototype.$Ice_redundancyService = redundancyModule;

};




