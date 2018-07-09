
const businessBeans = require('./businessBeans.js');

exports.queryAllByKeyFilter =  ()=> {

  return new IceCallback(
    function (result) {
      console.log(result);
      let orderList = [];
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          let temp = result[i];
          let orderBean = new businessBeans.OrderBean();
          orderBean.id=temp.id;
          orderBean.lineInfo=temp.startAddr + ' - ' + temp.destAddr;
          orderBean.goodsInfo=temp.goodsType + ',' + temp.wm;
          orderBean.vehicleRequire=temp.vlen + ',' + temp.vt;
          orderBean.fee=temp.cost;
          orderBean.time=temp.time;
          orderBean.state=temp.ostatus;

          orderList.push(orderBean)
        }
      }
      return orderList;
    }
  )
};
/**
 string orderno; // 订单号
 string billno;	// TMS运单号
 int startc; // 出发地地区码
 int startcp; // 出发地省编码
 int startcc; // 出发地城市编码
 int startca; // 出发地区编码
 string startaddr; // 出发地详细地址
 int arriarc; // 到达地地区码
 int arriarcp; // 出发地省编码
 int arriarcc; // 出发地城市编码
 int arriarca; // 出发地区编码
 string arriaddr; //到达地详细地址
 int puberid; // 发布人
 string pubername; // 发布人名字
 string consignee; // 收货人
 string consphone; // 收货联系方式
 string phone1; // 手机号码1
 string phone2; // 手机号码2
 double wm;  //货物重量/体积
 int wmdictc;  //货物重量/体积单位字典码id
 int num;  //件数
 int numdictc;  //件数单位字典码id
 int padictc;  //包装要求字典码id
 int ctdictc;  //货物类型字典码id
 int vnum;  //车数量
 int vldictc;  //车长字典码id
 int vtdictc;  //车型字典码id
 int tndictc;  //运输要求字典码id
 double price;  //价格(元)
 int pmdictc;  //价格度量单位字典码id
 double insureamt;  //声明保价金额(元)
 double codamt;  //代收货款金额(元)
 int ptdictc;  //付款方式字典码id
 int dmdictc;  //提货方式字典码id
 int redictc;  //回单要求字典码id
 string pubdatetime; // 发布时间  yyyy-MM-dd hh:mm:ss
 string revidatetime; // 抢单时间 yyyy-MM-dd hh:mm:ss
 string arridatetime; // 签收时间/到货时间  yyyy-MM-dd hh:mm:ss
 string pusdatetime;  //取货开始时间	格式化为yyyy-MM-dd hh:mm:ss
 string puedatetime;  //取货结束时间	格式化为yyyy-MM-dd hh:mm:ss
 string easdatetime;  //期望到货开始时间   格式化为yyyy-MM-dd hh:mm:ss
 string eaedatetime;  //期望到货结束时间  格式化为yyyy-MM-dd hh:mm:ss
 string retuimg; // 回单照片
 double carriage; // 运费(元)
 int ostatus; // 订单状态
 int lstatus; // 装卸状态
 */

