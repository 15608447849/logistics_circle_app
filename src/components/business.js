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
    /**验证用户名是否重复*/
    checkUsernameRepetition: function (username, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'verifyUserNamer', username, callback);
    },
    /** 检测手机号码是否重复*/
    checkPhoneRepetition: function (phone, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'verifyPhone', str2jlong(phone), callback);
    },

    /**请求对手机号码发送短信 */
    requeryPhoneSms: function (phone, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'sendSms', str2jlong(phone), callback);
    },

    /**通过手机号码,短信 修改密码*/
    updatePasswordByPhone: function (phone, smsCode, newPassword, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'forgetUserPassword', str2jlong(phone), smsCode, newPassword, callback);
    },
    /**通过用户唯一标识,旧密码 修改密码*/
    updatePasswordByOld: function (userId, oldPassword, newPassword, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'updateUserPassword', str2jlong(userId), oldPassword, newPassword, callback);
    },
    /**修改手机号码 用户唯一标识,旧密码,新手机号,短信验证码*/
    changePhone: function (userId, oldPassword, newPhone, smsCode, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'updateUserPhone', str2jlong(userId), oldPassword, str2jlong(newPhone), smsCode, callback);
    },
    /** 注册: 用户名,手机号码,密码(MD5),邀请码(可选项) */
    userRegister: function (username, phone, password, invitationCode, callback) {

      //(uno, rno, uname, uphone, upw, upwstatus, uinvite, adddate, addtime, updatedate, updatetime, cstatus, msg)
      let newUser = new userApi.UserICE(0, 0, username, str2jlong(phone), md5(password), 0, invitationCode, "", "", "", "", 0, "");
      queryIce(userApi.UserServicePrx, 'UserService', 'custRegister', newUser, callback)
    },
    /**登陆 密码(MD5) ,返回userApi.UserICE对象 */
    userVerify: function (account, password, callback) {
      queryIce(userApi.UserServicePrx, 'UserService', 'login', account, md5(password), 1, callback);
    }

  };
  Vue.prototype.$Ice_OrderService = {
    /**
     *全文查询当前的订单
     */
    queryAllByKey: (key,callback)=> {
      callback.setFilter(new IceCallback(
        function (result) {
          console.log(result.length,result);

          let orderList = [];
          if (result.length>0){
            for (let i=0;i<result.length;i++)
            {
              let temp = result[i];
              let json = JSON.parse(temp.content);
              orderList.push(
               {
               id:temp.id,
               lineInfo:json.startAddr+' - '+json.destAddr,
               goodsInfo:json.goodsType+','+json.wm,
               vehicleRequire:json.vlen+','+json.vt,
                fee:json.cost,
               time:temp.time
               }
             )
            }
          }

          result = orderList;
        }
      ));
      queryIce(order.OrderServicePrx , 'OrderService', 'queryOrderByCurdate', [key],callback);
    },
    /**自动生成订单序列*/
    autoGenerationOrderSequence:()=>{

    }





  };


};




