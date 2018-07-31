[["java:package:com.hsf.framework.api"]]

/**
 * 企业中心消息服务
 */
module message{

    /**
	 * 消息内容
	 */
     struct Msg{
     	int sender;//发送人
	 	int receiver;//接收人
	 	string sendName;//发送人名称
	 	int msgtype;//消息类型
	 	int isread;//是否可读
	 	string msgtext;//消息内容
	 	string sendDate;//发送日期
	 	string sendTime;//发送时间
	 	long msgid;//消息ID
     };
	 
	 sequence<Msg> MsgSeq;


	/**
	 * 消息接口
	 */
	 interface MessageService{

		  /**
		 	* 查询当前用户的消息列表
		 	*/
	 	string queryMsgListByUno(int uid);


	 	  /**
		 	* 新增消息
		 	*/
	 	string addMessage(Msg msg);

	 	  /**
		 	* 更新消息
		 	*/
	 	int updateMessage(Msg msg);

	 	  /**
		 	* 查询当前用户是否有未读信息
		 	*/
	 	int isUnreadMsg(int uno);

	 	  /**
		 	* 删除历史消息
		 	*/
	 	void delOldMsg();

	 	/**
         * 更新消息
         */
        string updateReadStatus(long msgId);
	 
	 };
};