const convert = require('./convert.js');
const businessBeans = require('./businessBeans.js');

module.exports = {

  /**
   *全文查询当前的订单
   *  OrderSeq queryOrderByCurdate(string token,cstruct::stringSeq params);
   *  PC使用
   */
  queryOrderByPc: (token,key,size,callback)=> {
    callback.setFilter(convert.queryAllByKeyFilter());
    queryIce(order.OrderServicePrx , 'OrderService', 'queryOrderByCurdate', token,[size,key],callback);
  },
  /**
   * 全文检索出当天的圈子订单
   *OrderSeq queryCircleOrderByCurdate(string token,cstruct::stringSeq params);
   * PC使用
   */
  queryCircleOrderByPc: (token,key,size,callback)=> {
    callback.setFilter(convert.queryAllByKeyFilter());
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
    callback.setFilter(convert.queryAllByKeyFilter());
    queryIce(order.OrderServicePrx , 'OrderService', 'queryAppOrderByCurdate', token,[size,addr,key,op,timeStr],callback);
  },
  /**
   * 全文检索出当天的圈子订单(APP)
   OrderSeq queryAppCircleOrderByCurdate(string token,cstruct::stringSeq params);
   */
  queryCircleOrderByApp: (token,key,size,addr,op,timeStr,callback)=> {
    callback.setFilter(convert.queryAllByKeyFilter());
    queryIce(order.OrderServicePrx , 'OrderService', 'queryAppCircleOrderByCurdate', token,[size,addr,key,op,timeStr],callback);
  },
  /**生成订单运单号*/
  generateOrderNo:(callback)=>{
    queryIce(order.OrderServicePrx , 'OrderService', 'generateOrderNo',callback);
  },
  /**发布订单*/
  releaseOrder:(token,businessBeans_ReleaseOrderBean,callback)=>{
    queryIce(order.OrderServicePrx , 'OrderService', 'addOrder', token,[JSON.stringify(businessBeans_ReleaseOrderBean)],callback);
  },
  /**获取订单详情， 传入订单号 */
  getTargetOrder:(orderNo,callback)=>{
    callback.setFilter(convert.getTargetOrderFilter());
    queryIce(order.OrderServicePrx , 'OrderService', 'getOrderDetail', [orderNo],callback);
  }

};
