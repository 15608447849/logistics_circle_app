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
// Generated from file `redundancy.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var Slice = Ice.Slice;

    var redundancy = __M.module("redundancy");

    redundancy.Page = Slice.defineStruct(
        function(pageSize, pageIndex, totalItems, totalPageCount)
        {
            this.pageSize = pageSize !== undefined ? pageSize : 0;
            this.pageIndex = pageIndex !== undefined ? pageIndex : 0;
            this.totalItems = totalItems !== undefined ? totalItems : 0;
            this.totalPageCount = totalPageCount !== undefined ? totalPageCount : 0;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.pageSize);
            __os.writeInt(this.pageIndex);
            __os.writeInt(this.totalItems);
            __os.writeInt(this.totalPageCount);
        },
        function(__is)
        {
            this.pageSize = __is.readInt();
            this.pageIndex = __is.readInt();
            this.totalItems = __is.readInt();
            this.totalPageCount = __is.readInt();
        },
        16, 
        true);

    /**
     * 接收订单。
     **/
    redundancy.RecOrder = Slice.defineStruct(
        function(oid, orderno, pubcompid, puberid, revicompid, revierid, pubdate, pubtime, revidate, revitime, tstatus, cstatus, ctdictc, wm, wmdictc, startc, startaddr, arriarc, arriaddr, vtdictc, vldictc, vldictn, vtdictn, arriarn, startn, wmdictn, ctdictn, carriage, pubcompname, pubphone, numdictc, numdictn, unum, num, codamt, insureamt, ptdictc, ptdictn, actdelidate, actdelitime, arridate, arritime, pusdate, pustime, puedate, puetime, easdate, eastime, eaedate, eaetime)
        {
            this.oid = oid !== undefined ? oid : 0;
            this.orderno = orderno !== undefined ? orderno : "";
            this.pubcompid = pubcompid !== undefined ? pubcompid : 0;
            this.puberid = puberid !== undefined ? puberid : 0;
            this.revicompid = revicompid !== undefined ? revicompid : 0;
            this.revierid = revierid !== undefined ? revierid : 0;
            this.pubdate = pubdate !== undefined ? pubdate : "";
            this.pubtime = pubtime !== undefined ? pubtime : "";
            this.revidate = revidate !== undefined ? revidate : "";
            this.revitime = revitime !== undefined ? revitime : "";
            this.tstatus = tstatus !== undefined ? tstatus : 0;
            this.cstatus = cstatus !== undefined ? cstatus : 0;
            this.ctdictc = ctdictc !== undefined ? ctdictc : 0;
            this.wm = wm !== undefined ? wm : 0.0;
            this.wmdictc = wmdictc !== undefined ? wmdictc : 0;
            this.startc = startc !== undefined ? startc : 0;
            this.startaddr = startaddr !== undefined ? startaddr : "";
            this.arriarc = arriarc !== undefined ? arriarc : 0;
            this.arriaddr = arriaddr !== undefined ? arriaddr : "";
            this.vtdictc = vtdictc !== undefined ? vtdictc : 0;
            this.vldictc = vldictc !== undefined ? vldictc : 0;
            this.vldictn = vldictn !== undefined ? vldictn : "";
            this.vtdictn = vtdictn !== undefined ? vtdictn : "";
            this.arriarn = arriarn !== undefined ? arriarn : "";
            this.startn = startn !== undefined ? startn : "";
            this.wmdictn = wmdictn !== undefined ? wmdictn : "";
            this.ctdictn = ctdictn !== undefined ? ctdictn : "";
            this.carriage = carriage !== undefined ? carriage : 0.0;
            this.pubcompname = pubcompname !== undefined ? pubcompname : "";
            this.pubphone = pubphone !== undefined ? pubphone : "";
            this.numdictc = numdictc !== undefined ? numdictc : 0;
            this.numdictn = numdictn !== undefined ? numdictn : "";
            this.unum = unum !== undefined ? unum : 0;
            this.num = num !== undefined ? num : 0;
            this.codamt = codamt !== undefined ? codamt : 0.0;
            this.insureamt = insureamt !== undefined ? insureamt : 0.0;
            this.ptdictc = ptdictc !== undefined ? ptdictc : 0;
            this.ptdictn = ptdictn !== undefined ? ptdictn : "";
            this.actdelidate = actdelidate !== undefined ? actdelidate : "";
            this.actdelitime = actdelitime !== undefined ? actdelitime : "";
            this.arridate = arridate !== undefined ? arridate : "";
            this.arritime = arritime !== undefined ? arritime : "";
            this.pusdate = pusdate !== undefined ? pusdate : "";
            this.pustime = pustime !== undefined ? pustime : "";
            this.puedate = puedate !== undefined ? puedate : "";
            this.puetime = puetime !== undefined ? puetime : "";
            this.easdate = easdate !== undefined ? easdate : "";
            this.eastime = eastime !== undefined ? eastime : "";
            this.eaedate = eaedate !== undefined ? eaedate : "";
            this.eaetime = eaetime !== undefined ? eaetime : "";
        },
        false,
        function(__os)
        {
            __os.writeInt(this.oid);
            __os.writeString(this.orderno);
            __os.writeInt(this.pubcompid);
            __os.writeInt(this.puberid);
            __os.writeInt(this.revicompid);
            __os.writeInt(this.revierid);
            __os.writeString(this.pubdate);
            __os.writeString(this.pubtime);
            __os.writeString(this.revidate);
            __os.writeString(this.revitime);
            __os.writeInt(this.tstatus);
            __os.writeInt(this.cstatus);
            __os.writeInt(this.ctdictc);
            __os.writeDouble(this.wm);
            __os.writeInt(this.wmdictc);
            __os.writeInt(this.startc);
            __os.writeString(this.startaddr);
            __os.writeInt(this.arriarc);
            __os.writeString(this.arriaddr);
            __os.writeInt(this.vtdictc);
            __os.writeInt(this.vldictc);
            __os.writeString(this.vldictn);
            __os.writeString(this.vtdictn);
            __os.writeString(this.arriarn);
            __os.writeString(this.startn);
            __os.writeString(this.wmdictn);
            __os.writeString(this.ctdictn);
            __os.writeDouble(this.carriage);
            __os.writeString(this.pubcompname);
            __os.writeString(this.pubphone);
            __os.writeInt(this.numdictc);
            __os.writeString(this.numdictn);
            __os.writeInt(this.unum);
            __os.writeInt(this.num);
            __os.writeDouble(this.codamt);
            __os.writeDouble(this.insureamt);
            __os.writeInt(this.ptdictc);
            __os.writeString(this.ptdictn);
            __os.writeString(this.actdelidate);
            __os.writeString(this.actdelitime);
            __os.writeString(this.arridate);
            __os.writeString(this.arritime);
            __os.writeString(this.pusdate);
            __os.writeString(this.pustime);
            __os.writeString(this.puedate);
            __os.writeString(this.puetime);
            __os.writeString(this.easdate);
            __os.writeString(this.eastime);
            __os.writeString(this.eaedate);
            __os.writeString(this.eaetime);
        },
        function(__is)
        {
            this.oid = __is.readInt();
            this.orderno = __is.readString();
            this.pubcompid = __is.readInt();
            this.puberid = __is.readInt();
            this.revicompid = __is.readInt();
            this.revierid = __is.readInt();
            this.pubdate = __is.readString();
            this.pubtime = __is.readString();
            this.revidate = __is.readString();
            this.revitime = __is.readString();
            this.tstatus = __is.readInt();
            this.cstatus = __is.readInt();
            this.ctdictc = __is.readInt();
            this.wm = __is.readDouble();
            this.wmdictc = __is.readInt();
            this.startc = __is.readInt();
            this.startaddr = __is.readString();
            this.arriarc = __is.readInt();
            this.arriaddr = __is.readString();
            this.vtdictc = __is.readInt();
            this.vldictc = __is.readInt();
            this.vldictn = __is.readString();
            this.vtdictn = __is.readString();
            this.arriarn = __is.readString();
            this.startn = __is.readString();
            this.wmdictn = __is.readString();
            this.ctdictn = __is.readString();
            this.carriage = __is.readDouble();
            this.pubcompname = __is.readString();
            this.pubphone = __is.readString();
            this.numdictc = __is.readInt();
            this.numdictn = __is.readString();
            this.unum = __is.readInt();
            this.num = __is.readInt();
            this.codamt = __is.readDouble();
            this.insureamt = __is.readDouble();
            this.ptdictc = __is.readInt();
            this.ptdictn = __is.readString();
            this.actdelidate = __is.readString();
            this.actdelitime = __is.readString();
            this.arridate = __is.readString();
            this.arritime = __is.readString();
            this.pusdate = __is.readString();
            this.pustime = __is.readString();
            this.puedate = __is.readString();
            this.puetime = __is.readString();
            this.easdate = __is.readString();
            this.eastime = __is.readString();
            this.eaedate = __is.readString();
            this.eaetime = __is.readString();
        },
        129, 
        false);

    /**
     * 发布订单。
     **/
    redundancy.PubOrder = Slice.defineStruct(
        function(oid, orderno, startc, startaddr, arriarc, arriaddr, vtdictc, vldictc, pubdate, pubtime, revidate, revitime, tstatus, pubcompid, revicompid, ctdictc, wm, wmdictc, puimg, retuimg, numdictc, unum, num, carriage, codamt, insureamt, ptdictc, actdelidate, actdelitime, arridate, arritime, pusdate, pustime, puedate, puetime, easdate, eastime, eaedate, eaetime, startn, arriarn, vtdictn, vldictn, ctdictn, wmdictn, numdictn, ptdictn)
        {
            this.oid = oid !== undefined ? oid : 0;
            this.orderno = orderno !== undefined ? orderno : "";
            this.startc = startc !== undefined ? startc : 0;
            this.startaddr = startaddr !== undefined ? startaddr : "";
            this.arriarc = arriarc !== undefined ? arriarc : 0;
            this.arriaddr = arriaddr !== undefined ? arriaddr : "";
            this.vtdictc = vtdictc !== undefined ? vtdictc : 0;
            this.vldictc = vldictc !== undefined ? vldictc : 0;
            this.pubdate = pubdate !== undefined ? pubdate : "";
            this.pubtime = pubtime !== undefined ? pubtime : "";
            this.revidate = revidate !== undefined ? revidate : "";
            this.revitime = revitime !== undefined ? revitime : "";
            this.tstatus = tstatus !== undefined ? tstatus : 0;
            this.pubcompid = pubcompid !== undefined ? pubcompid : 0;
            this.revicompid = revicompid !== undefined ? revicompid : 0;
            this.ctdictc = ctdictc !== undefined ? ctdictc : 0;
            this.wm = wm !== undefined ? wm : 0.0;
            this.wmdictc = wmdictc !== undefined ? wmdictc : 0;
            this.puimg = puimg !== undefined ? puimg : "";
            this.retuimg = retuimg !== undefined ? retuimg : "";
            this.numdictc = numdictc !== undefined ? numdictc : 0;
            this.unum = unum !== undefined ? unum : 0;
            this.num = num !== undefined ? num : 0;
            this.carriage = carriage !== undefined ? carriage : 0.0;
            this.codamt = codamt !== undefined ? codamt : 0.0;
            this.insureamt = insureamt !== undefined ? insureamt : 0.0;
            this.ptdictc = ptdictc !== undefined ? ptdictc : 0;
            this.actdelidate = actdelidate !== undefined ? actdelidate : "";
            this.actdelitime = actdelitime !== undefined ? actdelitime : "";
            this.arridate = arridate !== undefined ? arridate : "";
            this.arritime = arritime !== undefined ? arritime : "";
            this.pusdate = pusdate !== undefined ? pusdate : "";
            this.pustime = pustime !== undefined ? pustime : "";
            this.puedate = puedate !== undefined ? puedate : "";
            this.puetime = puetime !== undefined ? puetime : "";
            this.easdate = easdate !== undefined ? easdate : "";
            this.eastime = eastime !== undefined ? eastime : "";
            this.eaedate = eaedate !== undefined ? eaedate : "";
            this.eaetime = eaetime !== undefined ? eaetime : "";
            this.startn = startn !== undefined ? startn : "";
            this.arriarn = arriarn !== undefined ? arriarn : "";
            this.vtdictn = vtdictn !== undefined ? vtdictn : "";
            this.vldictn = vldictn !== undefined ? vldictn : "";
            this.ctdictn = ctdictn !== undefined ? ctdictn : "";
            this.wmdictn = wmdictn !== undefined ? wmdictn : "";
            this.numdictn = numdictn !== undefined ? numdictn : "";
            this.ptdictn = ptdictn !== undefined ? ptdictn : "";
        },
        false,
        function(__os)
        {
            __os.writeInt(this.oid);
            __os.writeString(this.orderno);
            __os.writeInt(this.startc);
            __os.writeString(this.startaddr);
            __os.writeInt(this.arriarc);
            __os.writeString(this.arriaddr);
            __os.writeInt(this.vtdictc);
            __os.writeInt(this.vldictc);
            __os.writeString(this.pubdate);
            __os.writeString(this.pubtime);
            __os.writeString(this.revidate);
            __os.writeString(this.revitime);
            __os.writeInt(this.tstatus);
            __os.writeInt(this.pubcompid);
            __os.writeInt(this.revicompid);
            __os.writeInt(this.ctdictc);
            __os.writeDouble(this.wm);
            __os.writeInt(this.wmdictc);
            __os.writeString(this.puimg);
            __os.writeString(this.retuimg);
            __os.writeInt(this.numdictc);
            __os.writeInt(this.unum);
            __os.writeInt(this.num);
            __os.writeDouble(this.carriage);
            __os.writeDouble(this.codamt);
            __os.writeDouble(this.insureamt);
            __os.writeInt(this.ptdictc);
            __os.writeString(this.actdelidate);
            __os.writeString(this.actdelitime);
            __os.writeString(this.arridate);
            __os.writeString(this.arritime);
            __os.writeString(this.pusdate);
            __os.writeString(this.pustime);
            __os.writeString(this.puedate);
            __os.writeString(this.puetime);
            __os.writeString(this.easdate);
            __os.writeString(this.eastime);
            __os.writeString(this.eaedate);
            __os.writeString(this.eaetime);
            __os.writeString(this.startn);
            __os.writeString(this.arriarn);
            __os.writeString(this.vtdictn);
            __os.writeString(this.vldictn);
            __os.writeString(this.ctdictn);
            __os.writeString(this.wmdictn);
            __os.writeString(this.numdictn);
            __os.writeString(this.ptdictn);
        },
        function(__is)
        {
            this.oid = __is.readInt();
            this.orderno = __is.readString();
            this.startc = __is.readInt();
            this.startaddr = __is.readString();
            this.arriarc = __is.readInt();
            this.arriaddr = __is.readString();
            this.vtdictc = __is.readInt();
            this.vldictc = __is.readInt();
            this.pubdate = __is.readString();
            this.pubtime = __is.readString();
            this.revidate = __is.readString();
            this.revitime = __is.readString();
            this.tstatus = __is.readInt();
            this.pubcompid = __is.readInt();
            this.revicompid = __is.readInt();
            this.ctdictc = __is.readInt();
            this.wm = __is.readDouble();
            this.wmdictc = __is.readInt();
            this.puimg = __is.readString();
            this.retuimg = __is.readString();
            this.numdictc = __is.readInt();
            this.unum = __is.readInt();
            this.num = __is.readInt();
            this.carriage = __is.readDouble();
            this.codamt = __is.readDouble();
            this.insureamt = __is.readDouble();
            this.ptdictc = __is.readInt();
            this.actdelidate = __is.readString();
            this.actdelitime = __is.readString();
            this.arridate = __is.readString();
            this.arritime = __is.readString();
            this.pusdate = __is.readString();
            this.pustime = __is.readString();
            this.puedate = __is.readString();
            this.puetime = __is.readString();
            this.easdate = __is.readString();
            this.eastime = __is.readString();
            this.eaedate = __is.readString();
            this.eaetime = __is.readString();
            this.startn = __is.readString();
            this.arriarn = __is.readString();
            this.vtdictn = __is.readString();
            this.vldictn = __is.readString();
            this.ctdictn = __is.readString();
            this.wmdictn = __is.readString();
            this.numdictn = __is.readString();
            this.ptdictn = __is.readString();
        },
        117, 
        false);

    /**
     * 查询信息
     **/
    redundancy.QueryParam = Slice.defineStruct(
        function(revicompid, origin, destination, time, tstatus, year)
        {
            this.revicompid = revicompid !== undefined ? revicompid : "";
            this.origin = origin !== undefined ? origin : "";
            this.destination = destination !== undefined ? destination : "";
            this.time = time !== undefined ? time : "";
            this.tstatus = tstatus !== undefined ? tstatus : "";
            this.year = year !== undefined ? year : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.revicompid);
            __os.writeString(this.origin);
            __os.writeString(this.destination);
            __os.writeString(this.time);
            __os.writeString(this.tstatus);
            __os.writeString(this.year);
        },
        function(__is)
        {
            this.revicompid = __is.readString();
            this.origin = __is.readString();
            this.destination = __is.readString();
            this.time = __is.readString();
            this.tstatus = __is.readString();
            this.year = __is.readString();
        },
        6, 
        false);
    Slice.defineSequence(redundancy, "stringSeqHelper", "Ice.StringHelper", false);

    redundancy.SynOrderException = Slice.defineUserException(
        function(message, _cause)
        {
            Ice.UserException.call(this, _cause);
            this.message = message !== undefined ? message : "";
        },
        Ice.UserException,
        "redundancy::SynOrderException",
        function(__os)
        {
            __os.writeString(this.message);
        },
        function(__is)
        {
            this.message = __is.readString();
        },
        false,
        false);

    /**
     * 订单冗余服务接口
     **/
    redundancy.RedundancyServer = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::redundancy::RedundancyServer"
        ],
        -1, undefined, undefined, false);

    redundancy.RedundancyServerPrx = Slice.defineProxy(Ice.ObjectPrx, redundancy.RedundancyServer.ice_staticId, undefined);

    Slice.defineOperations(redundancy.RedundancyServer, redundancy.RedundancyServerPrx,
    {
        "synOrder": [, , , , , , [[3], [7]], , 
        [
            redundancy.SynOrderException
        ], , ],
        "delRedundancyOrder": [, , , , , , [[3], [7]], , 
        [
            redundancy.SynOrderException
        ], , ],
        "queryMyRecvOrder": [, , , , , [7], [[3], [redundancy.QueryParam], [redundancy.Page]], [[redundancy.Page]], , , ],
        "queryMyPubOrder": [, , , , , [7], [[3], [redundancy.QueryParam], [redundancy.Page]], [[redundancy.Page]], , , ],
        "queryEnterpriseDynamics": [, , , , , [7], [[3], [redundancy.Page]], [[redundancy.Page]], , , ],
        "handleReceive": [, , , , , [3], [[3], [7], ["redundancy.stringSeqHelper"]], , , , ],
        "getPickCode": [, , , , , [7], [[3], [7]], , , , ],
        "checkPickPassword": [, , , , , [1], [[3], [7], [7]], , , , ],
        "flushOrder": [, , , , , [3], [[3], [7]], , , , ]
    });
    exports.redundancy = redundancy;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
