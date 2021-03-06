 /**
     * 查询信息

    struct QueryParam{
        string origin;               //起始地
        string destination;          //目的地
        string time;                 //时间
        int pageNo;                  //页编号
        int pageSize;                //页size
    };
*/

module.exports = {
  getUserParam:()=>{
    let userParam = new cstruct.UserParam();
    userParam.uid = localStorage.getItem('USER_ID') === null ? 0 : localStorage.getItem('USER_ID');
    userParam.compid = localStorage.getItem('COMP_ID')  === null ? 0 : localStorage.getItem('COMP_ID');
    return userParam;
  },
	/** 查询我的已发布订单 queryMyPublishOrder */
	queryMyPublishOrder:(token,queryParam,callback) => {
	  	queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'queryMyPublishOrder', module.exports.getUserParam(),queryParam,callback);
	},
	/** 查询我的已接受订单 queryMyRecvOrder */
	queryMyRecvOrder:(token,queryParam,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'queryMyRecvOrder', module.exports.getUserParam(),queryParam,callback);
	},
	/** 获取行程单轨迹 getOrderTrajectory */
	getOrderTrajectory:(token,revicompid,orderId,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderTrajectory', module.exports.getUserParam(),revicompid,orderId,callback);
	},
	/** 获取行程单轨迹 getOrderTraByOrderid (orderid:订单号 type:0-走货轨迹 1-地图轨迹)*/
	getOrderTraByOrderid:(orderId,type,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderTraByOrderid',module.exports.getUserParam(), orderId,type,callback);
	},
	// /** 接收行程轨迹 acceptTravel (orderid:订单id, compid:公司id, driverphone:电话号码， traveljson：行程轨迹json)*/
	// getOrderTraByOrderid:(orderid,compid,driverphone,traveljson,callback)=>{
	//     queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'acceptTravel', num2jlong(orderid),compid,num2jlong(driverphone),traveljson,callback);
	// },
	/** 接收行程纠偏轨迹 acceptTravelCorrect (orderid:订单id, compid:公司id, driverphone:电话号码， traveljson：行程轨迹json)*/
	acceptTravelCorrect:(orderid,compid,driverphone,traveljson,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'acceptTravelCorrect', num2jlong(orderid),compid,num2jlong(driverphone),traveljson,callback);
	},
	/** 录入行程 entryTravel (tracinfo：录入行程对象)*/
	entryTravel:(tracinfo,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'entryTravel', tracinfo,callback);
	},
	/** 拒绝订单 refuseOrder*/
	refuseOrder:(oid,orderno,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'refuseOrder', module.exports.getUserParam(),orderno,callback);
	},
	/** 接收订单 receiveOrder*/
	receiveOrder:(oid,orderno,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'receiveOrder',module.exports.getUserParam(),orderno,callback);
	},
	/** 根据市查询省下所有城市 getTransferPoint*/
	getTransferPoint:(place,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getTransferPoint', place,callback);
	},
	/** 根据发布企业、订单号获取取货码 getTransferPoint*/
	getPickCode:(uno,orderno,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getPickCode', module.exports.getUserParam(),orderno,callback);
	},
	/** 验证取货密码。 getTransferPoint*/
	checkPickPwd:(uno,orderno,pickPwd,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'checkPickPwd', uno,orderno,pickPwd,callback);
	},
	/** 评价。 insertOrderEvaluate*/
	insertOrderEvaluate:(orderEvaluate,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'insertOrderEvaluate', orderEvaluate,callback);
	},
	/** 确认签收——（状态变为待评价）。 conReceipt ( orderid:订单号 uoid:用户id)*/
	conReceipt:( orderid,oid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'conReceipt', orderid, module.exports.getUserParam(),callback);
	},
	/** 修改订单 updateMyPublishOrder  uoid:用户id*/
	updateMyPublishOrder:( order,uoid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'updateMyPublishOrder', order,module.exports.getUserParam(),callback);
	},
	/** 获取修改订单详情  getOrderDetail (orderid:订单号 uoid:用户id type:0:我发布的 1：我接收的)*/
	getOrderDetail:( orderid,uoid,type,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderDetail',orderid,module.exports.getUserParam(),type,callback);
	},
	/** 获取查看订单详情  getOrderInfo (orderid:订单号 uoid:用户id type:0:我发布的 1：我接收的)*/
	getOrderInfo:( orderid,uoid,type,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderInfo',orderid,module.exports.getUserParam(),type,callback);
	},
	/** 取消订单发布  cancelOrder (orderid:订单号 uoid:用户id)*/
	cancelOrder:(orderid,oid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'cancelOrder',orderid,module.exports.getUserParam(),callback);
	},
	/** 刷新订单  flushOrder (orderid:订单号 uoid:用户id)*/
	flushOrder:(oid,orderid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'flushOrder',module.exports.getUserParam(),orderid,callback);
	},
	/** 重新发布订单  repubOrder (orderid:订单号 uoid:用户id)*/
	repubOrder:(orderid,oid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'repubOrder',orderid, module.exports.getUserParam(),callback);
	},
	/** 关闭订单  repubOrder (orderid:订单号 uoid:用户id)*/
	closeOrder:(orderid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'closeOrder',orderid,module.exports.getUserParam(),callback);
	},
  /** 取消订单 */
  cancelRobbing:(orderid,oid,callback)=>{
      queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'cancelRobbing',orderid, module.exports.getUserParam(),callback);
 },
  /** 转发布 */
  transOrder:(oid,orderDetail,callback) => {
    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'transOrder',orderDetail,module.exports.getUserParam(),callback);
  },
  /** 打印转运单 (OrderICE order, int uoid)*/
  getTrancCode:(oid,order,status,callback)=>{
    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getTrancCode',module.exports.getUserParam(),order,status,callback);
  },
  /** 重新发布获取详情 (orderid 订单id，uoid 用户id，type:0:我发布的)*/
  getOrderDetailByRepub:(oid,orderid,callback)=>{
    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderDetailByRepub',orderid,module.exports.getUserParam(),0,callback);
  },
};
