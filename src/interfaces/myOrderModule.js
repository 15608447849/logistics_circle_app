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
	/*** 用户oid****/
	// token:()=>{
	// 	let oid = (localStorage.getItem("$userInformation") == null) ? '' : JSON.parse(localStorage.getItem("$userInformation")).oid;
	// 	return oid;
	// },
	/** 查询我的已发布订单 queryMyPublishOrder */
	queryMyPublishOrder:(token,queryParam,callback) => {
	  	queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'queryMyPublishOrder', token,queryParam,callback);
	},
	/** 查询我的已接受订单 queryMyRecvOrder */
	queryMyRecvOrder:(token,queryParam,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'queryMyRecvOrder', token,queryParam,callback);
	},
	/** 获取行程单轨迹 getOrderTrajectory */
	getOrderTrajectory:(token,orderId,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderTrajectory', token,orderId,callback);
	},
	/** 获取行程单轨迹 getOrderTraByOrderid (orderid:订单号 type:0-走货轨迹 1-地图轨迹)*/
	getOrderTraByOrderid:(orderId,type,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderTraByOrderid', orderId,type,callback);
	},
	/** 接收行程轨迹 acceptTravel (orderid:订单id, compid:公司id, driverphone:电话号码， traveljson：行程轨迹json)*/
	getOrderTraByOrderid:(orderid,compid,driverphone,traveljson,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'acceptTravel', num2jlong(orderid),compid,num2jlong(driverphone),traveljson,callback);
	},
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
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'refuseOrder', oid,orderno,callback);
	},
	/** 接收订单 receiveOrder*/
	receiveOrder:(oid,orderno,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'receiveOrder',oid,orderno,callback);
	},
	/** 根据市查询省下所有城市 getTransferPoint*/
	getTransferPoint:(place,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getTransferPoint', place,callback);
	},
	/** 根据发布企业、订单号获取取货码 getTransferPoint*/
	getPickCode:(uno,orderno,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getPickCode', uno,orderno,callback);
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
	conReceipt:( orderid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'conReceipt', orderid,module.exports.token(),callback);
	},
	/** 修改订单 updateMyPublishOrder  uoid:用户id*/
	updateMyPublishOrder:( order,uoid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'updateMyPublishOrder', order,uoid,callback);
	},
	/** 获取修改订单详情  getOrderDetail (orderid:订单号 uoid:用户id type:0:我发布的 1：我接收的)*/
	getOrderDetail:( orderid,uoid,type,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderDetail',orderid,uoid,type,callback);
	},
	/** 获取查看订单详情  getOrderInfo (orderid:订单号 uoid:用户id)*/
	getOrderInfo:( orderid,uoid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'getOrderInfo',orderid,uoid,callback);
	},
	/** 取消订单发布  cancelOrder (orderid:订单号 uoid:用户id)*/
	cancelOrder:(orderid,oid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'cancelOrder',orderid,oid,callback);
	},
	/** 刷新订单  flushOrder (orderid:订单号 uoid:用户id)*/
	flushOrder:(oid,orderid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'flushOrder',oid,orderid,callback);
	},
	/** 重新发布订单  repubOrder (orderid:订单号 uoid:用户id)*/
	repubOrder:(orderid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'repubOrder',orderid,module.exports.token(),callback);
	},
	/** 关闭订单  repubOrder (orderid:订单号 uoid:用户id)*/
	closeOrder:(orderid,callback)=>{
	    queryIce(myOrder.MyOrderServerPrx, 'MyOrderServer', 'closeOrder',orderid,module.exports.token(),callback);
	},
};
