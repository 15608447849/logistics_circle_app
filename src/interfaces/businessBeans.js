
/**本地登录的用户对象*/
exports.CurrentUser = function(token){
  this.token = token;
};

/**信息大厅,我的圈子 查询出来的订单对象 */
exports.OrderBean = function () {
    this.id = '订单id';
    this.lineInfo = '出发地-目的地';
    this.goodsInfo = "货物信息,单位";
    this.vehicleRequire = "运输需求";
    this.fee = 0.0;//运输费用
    this.time = '发布时间';
    this.state = -1 ;//状态 : 0已发布 1已接受
    this.userId = -1;//承运商用户Id -> 通过Id查询 承运商信息
};
/** 信息大厅 订单详情 */


/** 发布订单 */
exports.ReleaseOrderBean = function () {
    this.orderno = '订单号';
    this.billno = 'TMS运单号';

    this.startc = -1; // 出发地地区码
    this.startaddr = '出发地详细地址';

    this.arriarc = -1; // 到达地地区码
    this.arriaddr = '到达地详细地址';

    //货物内容
    this.wm = 0.0; //货物重量/体积 数量
    this.wmdictc = -1;//货物重量/体积 单位字典码id
    this.num = 0; //单位数量 件数
    this.numdictc = -1;//单位数量 单位字典码id
    this.padictc = -1;//包装要求 字典码id
    this.ctdictc = -1; //货物类型 字典码id

    //车辆要求
    this.vnum = -1;//车数量(台)
    this.vldictc = -1;//车长字典码id
    this.vtdictc = -1;//车型字典码id
    this.tndictc = -1;//运输要求字典码id
     //货物运费
    this.price = 0.0;//价格(元)
    this.codamt = 0.0;//代收货款金额(元)
    this.insureamt = 0.0;//声明保价金额(元)
    this.ptdictc = -1;//付款方式字典码id
    //收/取货信息
    this.consignee = '收货人';
    this.consphone = '收货人联系方式';
    this.dmdictc = -1;//送货方式字典码id
    this.redictc = -1;//是否返单要求字典码id
    this.phone1 = '发布人手机号码1';
    this.phone2 = '发布人手机号码2';
    this.pustime = "取货开始日期yyyy-MM-dd hh:mm:ss";
    this.puedate = '取货结束日期yyyy-MM-dd hh:mm:ss';
    this.eadate = '期望到货日期yyyy-MM-dd hh:mm:ss';
};
/** 企业中心 司机管理对象*/
exports.DriverBean = function () {
    this.isCheck = false, //是否勾选
    this.serial = -1, //序号
    this.pkCode = "司机后台标识",
    this.name = '司机姓名',
    this.phone = '司机电话',
    this.enterprise = '所属企业',
    this.state = -1 , //状态
    this.createDate = '创建日期',
    this.createTime = '创建时间'
};
/** 企业中心 线路管理对象*/
exports.LineBean = function () {
    this.isCheck = false, //是否勾选
    this.serial = -1, //序号
    this.name = '线路名称',
    this.startPornt = '出发地',
    this.endPornt = '目的地',
    this.viaPoint = '途经点',
    this.state = -1,// 状态
    this.createDate = '创建日期',
    this.createTime = '创建时间'
};



