module.exports =  {
	/**
 	* 查询当前用户是否有未读信息
 	*/
	isUnreadMsg:(oid,callback) => {
	    queryIce(message.MessageServicePrx, 'MessageService', 'isUnreadMsg',oid,callback);
	},
	/**
 	* 查询当前用户的消息列表
 	*/
	queryMsgListByUno:(oid,callback) => {
	    queryIce(message.MessageServicePrx, 'MessageService', 'queryMsgListByUno',oid,callback);
	}
};
