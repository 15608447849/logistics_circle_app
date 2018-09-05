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
// Generated from file `mycircle.ice'
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

    var mycircle = __M.module("mycircle");

    /**
     * 线路
     **/
    mycircle.Route = Slice.defineStruct(
        function(origin, destination, channel, transfer)
        {
            this.origin = origin !== undefined ? origin : "";
            this.destination = destination !== undefined ? destination : "";
            this.channel = channel !== undefined ? channel : "";
            this.transfer = transfer !== undefined ? transfer : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.origin);
            __os.writeString(this.destination);
            __os.writeString(this.channel);
            __os.writeString(this.transfer);
        },
        function(__is)
        {
            this.origin = __is.readString();
            this.destination = __is.readString();
            this.channel = __is.readString();
            this.transfer = __is.readString();
        },
        4, 
        false);
    Slice.defineSequence(mycircle, "RouteSeqHelper", "mycircle.Route", false);

    /**
     * 我的圈子模型
     **/
    mycircle.Circle = Slice.defineStruct(
        function(compId, fname, contact, logoPath, sendNum, recvNum, creadit, addTime, verify, routes)
        {
            this.compId = compId !== undefined ? compId : 0;
            this.fname = fname !== undefined ? fname : "";
            this.contact = contact !== undefined ? contact : "";
            this.logoPath = logoPath !== undefined ? logoPath : "";
            this.sendNum = sendNum !== undefined ? sendNum : 0;
            this.recvNum = recvNum !== undefined ? recvNum : 0;
            this.creadit = creadit !== undefined ? creadit : 0;
            this.addTime = addTime !== undefined ? addTime : "";
            this.verify = verify !== undefined ? verify : 0;
            this.routes = routes !== undefined ? routes : null;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.compId);
            __os.writeString(this.fname);
            __os.writeString(this.contact);
            __os.writeString(this.logoPath);
            __os.writeInt(this.sendNum);
            __os.writeInt(this.recvNum);
            __os.writeInt(this.creadit);
            __os.writeString(this.addTime);
            __os.writeInt(this.verify);
            mycircle.RouteSeqHelper.write(__os, this.routes);
        },
        function(__is)
        {
            this.compId = __is.readInt();
            this.fname = __is.readString();
            this.contact = __is.readString();
            this.logoPath = __is.readString();
            this.sendNum = __is.readInt();
            this.recvNum = __is.readInt();
            this.creadit = __is.readInt();
            this.addTime = __is.readString();
            this.verify = __is.readInt();
            this.routes = mycircle.RouteSeqHelper.read(__is);
        },
        25, 
        false);
    Slice.defineSequence(mycircle, "CircleSeqHelper", "mycircle.Circle", false);

    /**
     * 圈子分页集合模型
     **/
    mycircle.CirclePage = Slice.defineStruct(
        function(pageSize, pageIndex, totalItems, totalPageCount, circleSeq)
        {
            this.pageSize = pageSize !== undefined ? pageSize : 0;
            this.pageIndex = pageIndex !== undefined ? pageIndex : 0;
            this.totalItems = totalItems !== undefined ? totalItems : 0;
            this.totalPageCount = totalPageCount !== undefined ? totalPageCount : 0;
            this.circleSeq = circleSeq !== undefined ? circleSeq : null;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.pageSize);
            __os.writeInt(this.pageIndex);
            __os.writeInt(this.totalItems);
            __os.writeInt(this.totalPageCount);
            mycircle.CircleSeqHelper.write(__os, this.circleSeq);
        },
        function(__is)
        {
            this.pageSize = __is.readInt();
            this.pageIndex = __is.readInt();
            this.totalItems = __is.readInt();
            this.totalPageCount = __is.readInt();
            this.circleSeq = mycircle.CircleSeqHelper.read(__is);
        },
        17, 
        false);

    /**
     * 圈子查询条件
     **/
    mycircle.CircleQueryParam = Slice.defineStruct(
        function(starPlace, endPlace, cname, phone, cType, uoid, compid, pageIndex, pageSize)
        {
            this.starPlace = starPlace !== undefined ? starPlace : 0;
            this.endPlace = endPlace !== undefined ? endPlace : 0;
            this.cname = cname !== undefined ? cname : "";
            this.phone = phone !== undefined ? phone : "";
            this.cType = cType !== undefined ? cType : 0;
            this.uoid = uoid !== undefined ? uoid : 0;
            this.compid = compid !== undefined ? compid : 0;
            this.pageIndex = pageIndex !== undefined ? pageIndex : 0;
            this.pageSize = pageSize !== undefined ? pageSize : 0;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.starPlace);
            __os.writeInt(this.endPlace);
            __os.writeString(this.cname);
            __os.writeString(this.phone);
            __os.writeInt(this.cType);
            __os.writeInt(this.uoid);
            __os.writeInt(this.compid);
            __os.writeInt(this.pageIndex);
            __os.writeInt(this.pageSize);
        },
        function(__is)
        {
            this.starPlace = __is.readInt();
            this.endPlace = __is.readInt();
            this.cname = __is.readString();
            this.phone = __is.readString();
            this.cType = __is.readInt();
            this.uoid = __is.readInt();
            this.compid = __is.readInt();
            this.pageIndex = __is.readInt();
            this.pageSize = __is.readInt();
        },
        30, 
        false);

    /**
     * 圈子接口
     **/
    mycircle.CircleService = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::mycircle::CircleService"
        ],
        -1, undefined, undefined, false);

    mycircle.CircleServicePrx = Slice.defineProxy(Ice.ObjectPrx, mycircle.CircleService.ice_staticId, undefined);

    Slice.defineOperations(mycircle.CircleService, mycircle.CircleServicePrx,
    {
        "queryMyCircleByUser": [, , , , , [7], [[cstruct.UserParam], [3], [3], [3]], , , , ],
        "queryCanAddMyCircle": [, , , , , [7], [[mycircle.CircleQueryParam]], , , , ],
        "queryMyCircleBlackList": [, , , , , [7], [[cstruct.UserParam], [3], [3]], , , , ],
        "sendAddMyCircleMsg": [, , , , , [7], [[cstruct.UserParam], [3], [3]], , , , ],
        "addBlackList": [, , , , , [7], [[cstruct.UserParam], [3]], , , , ],
        "removeCircle": [, , , , , [7], [[cstruct.UserParam], [3], [3]], , , , ],
        "getMyCircleUser": [, , , , , [7], [[cstruct.UserParam], [3]], , , , ],
        "getBlackBySet": [, , , , , [7], [[cstruct.UserParam]], , , , ],
        "agreeOrRefuse": [, , , , , [7], [[4], [3]], , , , ]
    });
    exports.mycircle = mycircle;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
