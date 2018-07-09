/**信息大厅 订单对象 */
exports.OrderBean = function(){
    this.id = '订单id',
    this.lineInfo = '出发地-目的地',
    this.goodsInfo = "货物信息,单位",
    this.vehicleRequire = "运输需求",
    this.fee = 0.0,//运输费用
    this.time = '发布时间',
    this.state = -1 //状态
};

/**发布订单
 stringthis.orderno; // 订单号
 string billno;	// TMS运单号
 int startc; // 出发地地区码
 string startaddr; // 出发地详细地址
 int arriarc; // 到达地地区码
 string arriaddr; // 到达地详细地址
 int puberid; // 发布人
 string consignee; // 收货人
 stringthis.consphone; // 收货联系方式
 stringthis.phone1; // 手机号码1
 stringthis.phone2; // 手机号码2
 double wm;//货物重量/体积
 int wmdictc;//货物重量/体积单位字典码id
 int num;//件数
 int numdictc;//件数单位字典码id
 int padictc;//包装要求字典码id
 int ctdictc;//货物类型字典码id
 int vnum;//车数量
 int vldictc;//车长字典码id
 int vtdictc;//车型字典码id
 int tndictc;//运输要求字典码id
 double price;//价格(元)
 int pmdictc;//价格度量单位字典码id
 double insureamt;//声明保价金额(元)
 double codamt;//代收货款金额(元)
 int ptdictc;//付款方式字典码id
 int dmdictc;//提货方式字典码id
 int redictc;//回单要求字典码id
 string pusdate;//取货开始日期
 string pustime;//取货开始时间
 string puedate;//取货结束日期
 string puetime;//取货结束时间
 string easdate;//期望到货开始日期
 string eastime;//期望到货开始时间
 string eaedate;//期望到货结束日期
 string eaetime;//期望到货结束时间
 *大于0操作成功;等于0操作失败;
 * */
 exports.ReleaseOrderBean=function(){
this.orderno = '订单号',
this.billno = 'TMS运单号',
this.startc = -1, // 出发地地区码
this.startaddr = '出发地详细地址',
this.arriarc = -1, // 到达地地区码
this.arriaddr = '到达地详细地址',
this.puberid = '发布人',
this.consignee = '收货人',
this.consphone = '收货联系方式',
this.phone1 = '手机号码1',
this.phone2 = '手机号码2',
this.wm = 0.0, //货物重量/体积
this.wmdictc = -1,//货物重量/体积单位字典码id
this.num = 0, //件数
this.numdictc = -1,//件数单位字典码id
this.padictc = -1,//包装要求字典码id
this.ctdictc = -1, //货物类型字典码id
this.vnum = -1, //车数量
this.vldictc = -1,//车长字典码id
this.vtdictc = -1,//车型字典码id
this.tndictc = -1,//运输要求字典码id
this.price = 0.0,//价格(元)
this.pmdictc = -1,//价格度量单位字典码id
this.insureamt = 0.0,//声明保价金额(元)
this.codamt = 0.0,//代收货款金额(元)
this.ptdictc =-1,//付款方式字典码id
this.dmdictc = -1,//提货方式字典码id
this.redictc = -1,//回单要求字典码id
this.pusdate = '取货开始日期yyyy-MM-dd',
this.pustime ='取货开始时间hh:mm:ss',
this.puedate ='取货结束日期',
this.puetime ='取货结束时间',
this.easdate = '期望到货开始日期',
this.eastime = '期望到货开始时间',
this.eaedate = '期望到货结束日期',
this.eaetime = '期望到货结束时间'
};



