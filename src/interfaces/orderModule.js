
/**
 * 订单详细信息(信息大厅,我的圈子)

struct OrderDetail{
  string time;//时间
  string ostatus;//订单状态
  string cost; // 运费
  string wm; // 货物体积/重量
  string vlen; // 车长
  string startAddr; // 起始地地址
  string destAddr; // 到达地地址
  string id; // 订单号
  string vt; // 货车类型
  string goodsType; // 货物类型
  string pubername; // 发布人
  string insureamt; // 声明保价金额(元)
  string codamt; // 声明保价金额(元)
  string payType; // 付款方式
  string pustime; // 取货开始时间
  string puetime; // 取货结束时间
  string puberid; // 发布人用户id
};
 */

/* 订单详细信息
struct OrderDetail{
  //发布人ID
  string puberid;
  //发布人承运商名
  string puberCarrier;
  //联系电话
  string puberPhone1;
  //联系电话
  string puberPhone2;
  //发布时间
  string puberTime; //yy-MM-dd hh:mm:ss
  //TMS运单号
  string waybill;
  //自动生成的订单号
  string orderId;

  //出发地 : 省#市#区#详情
  string sAddr;
  //目的地 : 省#市#区#详情
  string dAddr;

  //货物内容 (重量/体积) 数量
  int wm;
  //货物内容 (重量/体积) 单位 字符串
  string wmdictc;
  //单位数量
  string num;
  //单位数量 单位 字符串
  string numdictc;
  //包装要求 字符串
  string padictc;
  //货物类型 字符串
  string ctdictc;

  //车数量(台)
  int vnum ;
  //车长字典码 字符串
  string vldictc;
  //车型字典码 字符串
  string vtdictc;
  //运输要求字典码 字符串
  string tndictc;

  //货物运费
  string price;
  //代收货款金额
  string codamt;
  //声明保价
  string insureamt;
  //付款方式 字符串
  string ptdictc;

  //收货人
  string consignee;
  //手机号码
  string consphone;
  //送货方式 str
  string dmdictc;
  //是否返单 str
  string redictc;
  //取货时间开始 yyyy-MM-dd hh:mm:ss
  string pustime
  //取货结束时间
  string puetime;
  //期望到货时间起始
  string eastime;
  //期望到货结束时间
  string eadtime;

  //订单状态
  int state;
};
*/
module.exports = {
  /**
   *  全文查询当前的订单
   *  OrderSeq queryOrderByCurdate(string token,cstruct::stringSeq params);
   *  PC使用
   */
  queryOrderByPc: (token,key,size,callback)=> {
    queryIce(order.OrderServicePrx , 'OrderService', 'queryOrderByCurdate', token,[size,key],callback);
  },
  /**
   * 全文检索出当天的圈子订单
   *OrderSeq queryCircleOrderByCurdate(string token,cstruct::stringSeq params);
   * PC使用
   */
  queryCircleOrderByPc: (token,key,size,callback)=> {
    queryIce(order.OrderServicePrx , 'OrderService', 'queryCircleOrderByCurdate', token,[size,key],callback);
  },
  /**
   * 全文检索出当天的订单(App)
   OrderSeq queryAppOrderByCurdate(string token,cstruct::stringSeq params);
   参数数组定义:
   需要获取的订单条数 , (必填)
   当前地点名(如,长沙) , (必填)
   关键字 , (可选,可能为空)
   状态(获取最新 0, 获取历史1) (必填)
   --指定订单标识(时间或自增长的订单号)
   订单发布时间
   */
  queryOrderByApp: (token,key,size,addr,op,timeStr,callback)=> {
    queryIce(order.OrderServicePrx , 'OrderService', 'queryAppOrderByCurdate', token,[size,addr,key,op,timeStr],callback);
  },
  /**
   * 全文检索出当天的圈子订单(APP)
   OrderSeq queryAppCircleOrderByCurdate(string token,cstruct::stringSeq params);
   */
  queryCircleOrderByApp: (token,key,size,addr,op,timeStr,callback)=> {
    queryIce(order.OrderServicePrx , 'OrderService', 'queryAppCircleOrderByCurdate', token,[size,addr,key,op,timeStr],callback);
  },
  /**生成订单运单号 */
  generateOrderNo:(callback)=>{
    queryIce(order.OrderServicePrx , 'OrderService', 'generateOrderNo',callback);
  },
  /**发布订单 OrderICE */
  releaseOrder:(token,OrderICE,callback)=>{
    queryIce(order.OrderServicePrx , 'OrderService', 'addOrder', token,OrderICE,callback);
  },
  /** 传入订单号 获取订单详情 OrderDetail */
  getOrderDetail:(orderNo,callback)=>{
    queryIce(order.OrderServicePrx , 'OrderService', 'getOrderDetail', [orderNo],callback);
  },
  /**
   *抢单
  int robbingOrder(string token,cstruct::stringSeq params);
   */
  robbingOrder:(token,orderNo)=>{
    queryIce(order.OrderServicePrx , 'OrderService', 'robbingOrder', [orderNo],callback);
  }


};
