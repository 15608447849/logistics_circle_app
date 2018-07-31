// **********************************************************************
//
// Copyright (c) 2003-2016 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.3
//
// <auto-generated>
//
// Generated from file `myOrder.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var cstruct = require("cstruct").cstruct;
    var Slice = Ice.Slice;

    var myOrder = __M.module("myOrder");

    /**
     * 查询信息
     **/
    myOrder.QueryParam = Slice.defineStruct(
        function(origin, destination, time, pageNo, pageSize)
        {
            this.origin = origin !== undefined ? origin : "";
            this.destination = destination !== undefined ? destination : "";
            this.time = time !== undefined ? time : "";
            this.pageNo = pageNo !== undefined ? pageNo : 0;
            this.pageSize = pageSize !== undefined ? pageSize : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.origin);
            __os.writeString(this.destination);
            __os.writeString(this.time);
            __os.writeInt(this.pageNo);
            __os.writeInt(this.pageSize);
        },
        function(__is)
        {
            this.origin = __is.readString();
            this.destination = __is.readString();
            this.time = __is.readString();
            this.pageNo = __is.readInt();
            this.pageSize = __is.readInt();
        },
        11, 
        false);

    /**
     * 一个订单数据
     **/
    myOrder.Order = Slice.defineStruct(
        function(orderno, startc, arriarc, vtdictc, vldictc, pubdate, pubtime, revidate, revitime, ostatus, shipperName, shipperPhone, ctdictc, wm, wmdictc, puimg, retuimg, puberid, revierid)
        {
            this.orderno = orderno !== undefined ? orderno : "";
            this.startc = startc !== undefined ? startc : "";
            this.arriarc = arriarc !== undefined ? arriarc : "";
            this.vtdictc = vtdictc !== undefined ? vtdictc : "";
            this.vldictc = vldictc !== undefined ? vldictc : "";
            this.pubdate = pubdate !== undefined ? pubdate : "";
            this.pubtime = pubtime !== undefined ? pubtime : "";
            this.revidate = revidate !== undefined ? revidate : "";
            this.revitime = revitime !== undefined ? revitime : "";
            this.ostatus = ostatus !== undefined ? ostatus : "";
            this.shipperName = shipperName !== undefined ? shipperName : "";
            this.shipperPhone = shipperPhone !== undefined ? shipperPhone : "";
            this.ctdictc = ctdictc !== undefined ? ctdictc : "";
            this.wm = wm !== undefined ? wm : 0;
            this.wmdictc = wmdictc !== undefined ? wmdictc : "";
            this.puimg = puimg !== undefined ? puimg : "";
            this.retuimg = retuimg !== undefined ? retuimg : "";
            this.puberid = puberid !== undefined ? puberid : 0;
            this.revierid = revierid !== undefined ? revierid : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.orderno);
            __os.writeString(this.startc);
            __os.writeString(this.arriarc);
            __os.writeString(this.vtdictc);
            __os.writeString(this.vldictc);
            __os.writeString(this.pubdate);
            __os.writeString(this.pubtime);
            __os.writeString(this.revidate);
            __os.writeString(this.revitime);
            __os.writeString(this.ostatus);
            __os.writeString(this.shipperName);
            __os.writeString(this.shipperPhone);
            __os.writeString(this.ctdictc);
            __os.writeInt(this.wm);
            __os.writeString(this.wmdictc);
            __os.writeString(this.puimg);
            __os.writeString(this.retuimg);
            __os.writeInt(this.puberid);
            __os.writeInt(this.revierid);
        },
        function(__is)
        {
            this.orderno = __is.readString();
            this.startc = __is.readString();
            this.arriarc = __is.readString();
            this.vtdictc = __is.readString();
            this.vldictc = __is.readString();
            this.pubdate = __is.readString();
            this.pubtime = __is.readString();
            this.revidate = __is.readString();
            this.revitime = __is.readString();
            this.ostatus = __is.readString();
            this.shipperName = __is.readString();
            this.shipperPhone = __is.readString();
            this.ctdictc = __is.readString();
            this.wm = __is.readInt();
            this.wmdictc = __is.readString();
            this.puimg = __is.readString();
            this.retuimg = __is.readString();
            this.puberid = __is.readInt();
            this.revierid = __is.readInt();
        },
        28, 
        false);
    Slice.defineSequence(myOrder, "OrderSeqHelper", "myOrder.Order", false);

    /**
     * 订单实体
     **/
    myOrder.OrderICE = Slice.defineStruct(
        function(puberid, puberCarrier, phone1, phone2, pubdatetime, billno, orderno, startc, startaddr, arriarc, arriaddr, startcext, arriarcext, wm, wmdictc, num, numdictc, padictc, ctdictc, vnum, vldictc, vtdictc, tndictc, tndictarr, price, pmdictc, codamt, insureamt, ptdictc, consignee, consphone, dmdictc, redictc, pusdatetime, puedatetime, easdatetime, eaedatetime, revidatetime, arridatetime, ostatus, priority, revierid, compname, phone, carriage, wmdictcn, numdictcn, padictcn, ctdictcn, vldictcn, vtdictcn, tndictcn, pmdictcn, ptdictcn, dmdictcn, redictcn)
        {
            this.puberid = puberid !== undefined ? puberid : "";
            this.puberCarrier = puberCarrier !== undefined ? puberCarrier : "";
            this.phone1 = phone1 !== undefined ? phone1 : "";
            this.phone2 = phone2 !== undefined ? phone2 : "";
            this.pubdatetime = pubdatetime !== undefined ? pubdatetime : "";
            this.billno = billno !== undefined ? billno : "";
            this.orderno = orderno !== undefined ? orderno : "";
            this.startc = startc !== undefined ? startc : "";
            this.startaddr = startaddr !== undefined ? startaddr : "";
            this.arriarc = arriarc !== undefined ? arriarc : "";
            this.arriaddr = arriaddr !== undefined ? arriaddr : "";
            this.startcext = startcext !== undefined ? startcext : "";
            this.arriarcext = arriarcext !== undefined ? arriarcext : "";
            this.wm = wm !== undefined ? wm : 0.0;
            this.wmdictc = wmdictc !== undefined ? wmdictc : "";
            this.num = num !== undefined ? num : 0;
            this.numdictc = numdictc !== undefined ? numdictc : "";
            this.padictc = padictc !== undefined ? padictc : "";
            this.ctdictc = ctdictc !== undefined ? ctdictc : "";
            this.vnum = vnum !== undefined ? vnum : 0;
            this.vldictc = vldictc !== undefined ? vldictc : "";
            this.vtdictc = vtdictc !== undefined ? vtdictc : "";
            this.tndictc = tndictc !== undefined ? tndictc : "";
            this.tndictarr = tndictarr !== undefined ? tndictarr : null;
            this.price = price !== undefined ? price : 0.0;
            this.pmdictc = pmdictc !== undefined ? pmdictc : "";
            this.codamt = codamt !== undefined ? codamt : 0.0;
            this.insureamt = insureamt !== undefined ? insureamt : 0.0;
            this.ptdictc = ptdictc !== undefined ? ptdictc : "";
            this.consignee = consignee !== undefined ? consignee : "";
            this.consphone = consphone !== undefined ? consphone : "";
            this.dmdictc = dmdictc !== undefined ? dmdictc : "";
            this.redictc = redictc !== undefined ? redictc : "";
            this.pusdatetime = pusdatetime !== undefined ? pusdatetime : "";
            this.puedatetime = puedatetime !== undefined ? puedatetime : "";
            this.easdatetime = easdatetime !== undefined ? easdatetime : "";
            this.eaedatetime = eaedatetime !== undefined ? eaedatetime : "";
            this.revidatetime = revidatetime !== undefined ? revidatetime : "";
            this.arridatetime = arridatetime !== undefined ? arridatetime : "";
            this.ostatus = ostatus !== undefined ? ostatus : 0;
            this.priority = priority !== undefined ? priority : 0;
            this.revierid = revierid !== undefined ? revierid : "";
            this.compname = compname !== undefined ? compname : "";
            this.phone = phone !== undefined ? phone : "";
            this.carriage = carriage !== undefined ? carriage : 0.0;
            this.wmdictcn = wmdictcn !== undefined ? wmdictcn : "";
            this.numdictcn = numdictcn !== undefined ? numdictcn : "";
            this.padictcn = padictcn !== undefined ? padictcn : "";
            this.ctdictcn = ctdictcn !== undefined ? ctdictcn : "";
            this.vldictcn = vldictcn !== undefined ? vldictcn : "";
            this.vtdictcn = vtdictcn !== undefined ? vtdictcn : "";
            this.tndictcn = tndictcn !== undefined ? tndictcn : "";
            this.pmdictcn = pmdictcn !== undefined ? pmdictcn : "";
            this.ptdictcn = ptdictcn !== undefined ? ptdictcn : "";
            this.dmdictcn = dmdictcn !== undefined ? dmdictcn : "";
            this.redictcn = redictcn !== undefined ? redictcn : "";
        },
        false,
        function(__os)
        {
            __os.writeString(this.puberid);
            __os.writeString(this.puberCarrier);
            __os.writeString(this.phone1);
            __os.writeString(this.phone2);
            __os.writeString(this.pubdatetime);
            __os.writeString(this.billno);
            __os.writeString(this.orderno);
            __os.writeString(this.startc);
            __os.writeString(this.startaddr);
            __os.writeString(this.arriarc);
            __os.writeString(this.arriaddr);
            __os.writeString(this.startcext);
            __os.writeString(this.arriarcext);
            __os.writeDouble(this.wm);
            __os.writeString(this.wmdictc);
            __os.writeInt(this.num);
            __os.writeString(this.numdictc);
            __os.writeString(this.padictc);
            __os.writeString(this.ctdictc);
            __os.writeInt(this.vnum);
            __os.writeString(this.vldictc);
            __os.writeString(this.vtdictc);
            __os.writeString(this.tndictc);
            cstruct.intSeqHelper.write(__os, this.tndictarr);
            __os.writeDouble(this.price);
            __os.writeString(this.pmdictc);
            __os.writeDouble(this.codamt);
            __os.writeDouble(this.insureamt);
            __os.writeString(this.ptdictc);
            __os.writeString(this.consignee);
            __os.writeString(this.consphone);
            __os.writeString(this.dmdictc);
            __os.writeString(this.redictc);
            __os.writeString(this.pusdatetime);
            __os.writeString(this.puedatetime);
            __os.writeString(this.easdatetime);
            __os.writeString(this.eaedatetime);
            __os.writeString(this.revidatetime);
            __os.writeString(this.arridatetime);
            __os.writeInt(this.ostatus);
            __os.writeInt(this.priority);
            __os.writeString(this.revierid);
            __os.writeString(this.compname);
            __os.writeString(this.phone);
            __os.writeDouble(this.carriage);
            __os.writeString(this.wmdictcn);
            __os.writeString(this.numdictcn);
            __os.writeString(this.padictcn);
            __os.writeString(this.ctdictcn);
            __os.writeString(this.vldictcn);
            __os.writeString(this.vtdictcn);
            __os.writeString(this.tndictcn);
            __os.writeString(this.pmdictcn);
            __os.writeString(this.ptdictcn);
            __os.writeString(this.dmdictcn);
            __os.writeString(this.redictcn);
        },
        function(__is)
        {
            this.puberid = __is.readString();
            this.puberCarrier = __is.readString();
            this.phone1 = __is.readString();
            this.phone2 = __is.readString();
            this.pubdatetime = __is.readString();
            this.billno = __is.readString();
            this.orderno = __is.readString();
            this.startc = __is.readString();
            this.startaddr = __is.readString();
            this.arriarc = __is.readString();
            this.arriaddr = __is.readString();
            this.startcext = __is.readString();
            this.arriarcext = __is.readString();
            this.wm = __is.readDouble();
            this.wmdictc = __is.readString();
            this.num = __is.readInt();
            this.numdictc = __is.readString();
            this.padictc = __is.readString();
            this.ctdictc = __is.readString();
            this.vnum = __is.readInt();
            this.vldictc = __is.readString();
            this.vtdictc = __is.readString();
            this.tndictc = __is.readString();
            this.tndictarr = cstruct.intSeqHelper.read(__is);
            this.price = __is.readDouble();
            this.pmdictc = __is.readString();
            this.codamt = __is.readDouble();
            this.insureamt = __is.readDouble();
            this.ptdictc = __is.readString();
            this.consignee = __is.readString();
            this.consphone = __is.readString();
            this.dmdictc = __is.readString();
            this.redictc = __is.readString();
            this.pusdatetime = __is.readString();
            this.puedatetime = __is.readString();
            this.easdatetime = __is.readString();
            this.eaedatetime = __is.readString();
            this.revidatetime = __is.readString();
            this.arridatetime = __is.readString();
            this.ostatus = __is.readInt();
            this.priority = __is.readInt();
            this.revierid = __is.readString();
            this.compname = __is.readString();
            this.phone = __is.readString();
            this.carriage = __is.readDouble();
            this.wmdictcn = __is.readString();
            this.numdictcn = __is.readString();
            this.padictcn = __is.readString();
            this.ctdictcn = __is.readString();
            this.vldictcn = __is.readString();
            this.vtdictcn = __is.readString();
            this.tndictcn = __is.readString();
            this.pmdictcn = __is.readString();
            this.ptdictcn = __is.readString();
            this.dmdictcn = __is.readString();
            this.redictcn = __is.readString();
        },
        103, 
        false);

    /**
     * 订单查询返回结构
     **/
    myOrder.OrderReturnData = Slice.defineStruct(
        function(code, msg, pageNo, total, pageSize, orderList)
        {
            this.code = code !== undefined ? code : 0;
            this.msg = msg !== undefined ? msg : "";
            this.pageNo = pageNo !== undefined ? pageNo : 0;
            this.total = total !== undefined ? total : "";
            this.pageSize = pageSize !== undefined ? pageSize : 0;
            this.orderList = orderList !== undefined ? orderList : null;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.code);
            __os.writeString(this.msg);
            __os.writeInt(this.pageNo);
            __os.writeString(this.total);
            __os.writeInt(this.pageSize);
            myOrder.OrderSeqHelper.write(__os, this.orderList);
        },
        function(__is)
        {
            this.code = __is.readInt();
            this.msg = __is.readString();
            this.pageNo = __is.readInt();
            this.total = __is.readString();
            this.pageSize = __is.readInt();
            this.orderList = myOrder.OrderSeqHelper.read(__is);
        },
        15, 
        false);

    /**
     * 地区结构
     **/
    myOrder.AreaData = Slice.defineStruct(
        function(areac, value, label, children)
        {
            this.areac = areac !== undefined ? areac : "";
            this.value = value !== undefined ? value : "";
            this.label = label !== undefined ? label : "";
            this.children = children !== undefined ? children : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.areac);
            __os.writeString(this.value);
            __os.writeString(this.label);
            __os.writeString(this.children);
        },
        function(__is)
        {
            this.areac = __is.readString();
            this.value = __is.readString();
            this.label = __is.readString();
            this.children = __is.readString();
        },
        4, 
        false);
    Slice.defineSequence(myOrder, "AreaDataSeqHelper", "myOrder.AreaData", false);

    /**
     * 行程单轨迹
     **/
    myOrder.OrderTrajectory = Slice.defineStruct(
        function(orderid, createdata, createtime, trajectoryrecord)
        {
            this.orderid = orderid !== undefined ? orderid : "";
            this.createdata = createdata !== undefined ? createdata : "";
            this.createtime = createtime !== undefined ? createtime : "";
            this.trajectoryrecord = trajectoryrecord !== undefined ? trajectoryrecord : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.orderid);
            __os.writeString(this.createdata);
            __os.writeString(this.createtime);
            __os.writeString(this.trajectoryrecord);
        },
        function(__is)
        {
            this.orderid = __is.readString();
            this.createdata = __is.readString();
            this.createtime = __is.readString();
            this.trajectoryrecord = __is.readString();
        },
        4, 
        false);

    /**
     * 走货痕迹
     **/
    myOrder.TracOfOrder = Slice.defineStruct(
        function(orderno, trancompid, driverid, content, cstatus)
        {
            this.orderno = orderno !== undefined ? orderno : "";
            this.trancompid = trancompid !== undefined ? trancompid : 0;
            this.driverid = driverid !== undefined ? driverid : 0;
            this.content = content !== undefined ? content : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.orderno);
            __os.writeInt(this.trancompid);
            __os.writeInt(this.driverid);
            __os.writeString(this.content);
            __os.writeInt(this.cstatus);
        },
        function(__is)
        {
            this.orderno = __is.readString();
            this.trancompid = __is.readInt();
            this.driverid = __is.readInt();
            this.content = __is.readString();
            this.cstatus = __is.readInt();
        },
        14, 
        false);

    /**
     * 订单接收返回对象。
     **/
    myOrder.ReceiveOrderReturnData = Slice.defineStruct(
        function(code, msg)
        {
            this.code = code !== undefined ? code : 0;
            this.msg = msg !== undefined ? msg : "";
        },
        true,
        function(__os)
        {
            __os.writeInt(this.code);
            __os.writeString(this.msg);
        },
        function(__is)
        {
            this.code = __is.readInt();
            this.msg = __is.readString();
        },
        5, 
        false);

    /**
     * 评价信息
     **/
    myOrder.OrderEvaluate = Slice.defineStruct(
        function(orderid, pubcompid, evaluator, revicompid, revierid, grade, service, timely, quality, remarks, cstatus, picurlarr)
        {
            this.orderid = orderid !== undefined ? orderid : "";
            this.pubcompid = pubcompid !== undefined ? pubcompid : 0;
            this.evaluator = evaluator !== undefined ? evaluator : 0;
            this.revicompid = revicompid !== undefined ? revicompid : 0;
            this.revierid = revierid !== undefined ? revierid : 0;
            this.grade = grade !== undefined ? grade : 0;
            this.service = service !== undefined ? service : 0;
            this.timely = timely !== undefined ? timely : 0;
            this.quality = quality !== undefined ? quality : 0;
            this.remarks = remarks !== undefined ? remarks : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
            this.picurlarr = picurlarr !== undefined ? picurlarr : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.orderid);
            __os.writeInt(this.pubcompid);
            __os.writeInt(this.evaluator);
            __os.writeInt(this.revicompid);
            __os.writeInt(this.revierid);
            __os.writeInt(this.grade);
            __os.writeInt(this.service);
            __os.writeInt(this.timely);
            __os.writeInt(this.quality);
            __os.writeString(this.remarks);
            __os.writeInt(this.cstatus);
            __os.writeString(this.picurlarr);
        },
        function(__is)
        {
            this.orderid = __is.readString();
            this.pubcompid = __is.readInt();
            this.evaluator = __is.readInt();
            this.revicompid = __is.readInt();
            this.revierid = __is.readInt();
            this.grade = __is.readInt();
            this.service = __is.readInt();
            this.timely = __is.readInt();
            this.quality = __is.readInt();
            this.remarks = __is.readString();
            this.cstatus = __is.readInt();
            this.picurlarr = __is.readString();
        },
        39, 
        false);
    Slice.defineSequence(myOrder, "OrderEvaluateSeqHelper", "myOrder.OrderEvaluate", false);

    /**
     * 订单详情数据格式
     **/
    myOrder.OrderInfoDetail = Slice.defineStruct(
        function(orderifo, ordereva)
        {
            this.orderifo = orderifo !== undefined ? orderifo : new myOrder.OrderICE();
            this.ordereva = ordereva !== undefined ? ordereva : new myOrder.OrderEvaluate();
        },
        false,
        function(__os)
        {
            myOrder.OrderICE.write(__os, this.orderifo);
            myOrder.OrderEvaluate.write(__os, this.ordereva);
        },
        function(__is)
        {
            this.orderifo = myOrder.OrderICE.read(__is, this.orderifo);
            this.ordereva = myOrder.OrderEvaluate.read(__is, this.ordereva);
        },
        142, 
        false);

    /**
     * 我的订单服务接口
     **/
    myOrder.MyOrderServer = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::myOrder::MyOrderServer"
        ],
        -1, undefined, undefined, false);

    myOrder.MyOrderServerPrx = Slice.defineProxy(Ice.ObjectPrx, myOrder.MyOrderServer.ice_staticId, undefined);

    Slice.defineOperations(myOrder.MyOrderServer, myOrder.MyOrderServerPrx,
    {
        "queryMyPublishOrder": [, , , , , [7], [[7], [myOrder.QueryParam]], , , , ],
        "queryMyRecvOrder": [, , , , , [7], [[7], [myOrder.QueryParam]], , , , ],
        "getOrderTrajectory": [, , , , , [7], [[7]], , , , ],
        "getOrderTraByOrderid": [, , , , , [7], [[7], [3]], , , , ],
        "getAreaData": [, , , , , [myOrder.AreaData], [[7]], , , , ],
        "acceptTravel": [, , , , , [3], [[4], [3], [4], [7]], , , , ],
        "acceptTravelCorrect": [, , , , , [3], [[4], [3], [4], [7]], , , , ],
        "entryTravel": [, , , , , [7], [[myOrder.TracOfOrder]], , , , ],
        "refuseOrder": [, , , , , [7], [[3], [7]], , , , ],
        "receiveOrder": [, , , , , [7], [[3], [7]], , , , ],
        "getTransferPoint": [, , , , , ["myOrder.AreaDataSeqHelper"], [[3]], , , , ],
        "getPickCode": [, , , , , [7], [[3], [7]], , , , ],
        "checkPickPwd": [, , , , , [7], [[3], [7], [7]], , , , ],
        "insertOrderEvaluate": [, , , , , [7], [[myOrder.OrderEvaluate]], , , , ],
        "conReceipt": [, , , , , [7], [[7], [3]], , , , ],
        "getOrderDetail": [, , , , , [7], [[7], [3], [3]], , , , ],
        "updateMyPublishOrder": [, , , , , [7], [[myOrder.OrderICE], [3]], , , , ],
        "transOrder": [, , , , , [7], [[myOrder.OrderICE], [3]], , , , ],
        "getOrderInfo": [, , , , , [7], [[7], [3]], , , , ],
        "flushOrder": [, , , , , [7], [[3], [7]], , , , ],
        "cancelOrder": [, , , , , [7], [[7], [3]], , , , ],
        "repubOrder": [, , , , , [7], [[7], [3]], , , , ],
        "closeOrder": [, , , , , [7], [[7], [3]], , , , ],
        "cancelRobbing": [, , , , , [7], [[7], [3]], , , , ],
        "getOrderEvaluate": [, , , , , ["myOrder.OrderEvaluateSeqHelper"], [[3]], , , , ]
    });
    exports.myOrder = myOrder;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
