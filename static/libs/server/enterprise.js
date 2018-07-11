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
// Generated from file `enterprise.ice'
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

    var enterprise = __M.module("enterprise");

    /**
     * 司机信息
     **/
    enterprise.DriverInfo = Slice.defineStruct(
        function(driverid, carryname, drivername, driverphone, createdate, createtime, cstatus)
        {
            this.driverid = driverid !== undefined ? driverid : 0;
            this.carryname = carryname !== undefined ? carryname : "";
            this.drivername = drivername !== undefined ? drivername : "";
            this.driverphone = driverphone !== undefined ? driverphone : "";
            this.createdate = createdate !== undefined ? createdate : "";
            this.createtime = createtime !== undefined ? createtime : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.driverid);
            __os.writeString(this.carryname);
            __os.writeString(this.drivername);
            __os.writeString(this.driverphone);
            __os.writeString(this.createdate);
            __os.writeString(this.createtime);
            __os.writeInt(this.cstatus);
        },
        function(__is)
        {
            this.driverid = __is.readInt();
            this.carryname = __is.readString();
            this.drivername = __is.readString();
            this.driverphone = __is.readString();
            this.createdate = __is.readString();
            this.createtime = __is.readString();
            this.cstatus = __is.readInt();
        },
        13, 
        false);
    Slice.defineSequence(enterprise, "DriverInfoSeqHelper", "enterprise.DriverInfo", false);

    /**
     * 途径点中转点
     **/
    enterprise.Routeviap = Slice.defineStruct(
        function(ptid, routeid, place, placetype, cstatus)
        {
            this.ptid = ptid !== undefined ? ptid : 0;
            this.routeid = routeid !== undefined ? routeid : 0;
            this.place = place !== undefined ? place : 0;
            this.placetype = placetype !== undefined ? placetype : 0;
            this.cstatus = cstatus !== undefined ? cstatus : 0;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.ptid);
            __os.writeInt(this.routeid);
            __os.writeInt(this.place);
            __os.writeInt(this.placetype);
            __os.writeInt(this.cstatus);
        },
        function(__is)
        {
            this.ptid = __is.readInt();
            this.routeid = __is.readInt();
            this.place = __is.readInt();
            this.placetype = __is.readInt();
            this.cstatus = __is.readInt();
        },
        20, 
        true);
    Slice.defineSequence(enterprise, "RouteviapSeqHelper", "enterprise.Routeviap", true);

    /**
     * 常用线路
     **/
    enterprise.RouteInfo = Slice.defineStruct(
        function(routeid, carryid, routename, origin, originname, destination, desname, cstatus, createdate, createtime, routevias)
        {
            this.routeid = routeid !== undefined ? routeid : 0;
            this.carryid = carryid !== undefined ? carryid : 0;
            this.routename = routename !== undefined ? routename : "";
            this.origin = origin !== undefined ? origin : 0;
            this.originname = originname !== undefined ? originname : "";
            this.destination = destination !== undefined ? destination : 0;
            this.desname = desname !== undefined ? desname : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
            this.createdate = createdate !== undefined ? createdate : "";
            this.createtime = createtime !== undefined ? createtime : "";
            this.routevias = routevias !== undefined ? routevias : null;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.routeid);
            __os.writeInt(this.carryid);
            __os.writeString(this.routename);
            __os.writeInt(this.origin);
            __os.writeString(this.originname);
            __os.writeInt(this.destination);
            __os.writeString(this.desname);
            __os.writeInt(this.cstatus);
            __os.writeString(this.createdate);
            __os.writeString(this.createtime);
            enterprise.RouteviapSeqHelper.write(__os, this.routevias);
        },
        function(__is)
        {
            this.routeid = __is.readInt();
            this.carryid = __is.readInt();
            this.routename = __is.readString();
            this.origin = __is.readInt();
            this.originname = __is.readString();
            this.destination = __is.readInt();
            this.desname = __is.readString();
            this.cstatus = __is.readInt();
            this.createdate = __is.readString();
            this.createtime = __is.readString();
            this.routevias = enterprise.RouteviapSeqHelper.read(__is);
        },
        26, 
        false);
    Slice.defineSequence(enterprise, "RouteInfoSeqHelper", "enterprise.RouteInfo", false);

    /**
     * 业务中心管理服务接口
     **/
    enterprise.EnterpriseServer = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::enterprise::EnterpriseServer"
        ],
        -1, undefined, undefined, false);

    enterprise.EnterpriseServerPrx = Slice.defineProxy(Ice.ObjectPrx, enterprise.EnterpriseServer.ice_staticId, undefined);

    Slice.defineOperations(enterprise.EnterpriseServer, enterprise.EnterpriseServerPrx,
    {
        "queryDriver": [, , , , , ["enterprise.DriverInfoSeqHelper"], [[7], ["cstruct.stringSeqHelper"]], , , , ],
        "saveDriver": [, , , , , [3], [[7], [enterprise.DriverInfo]], , , , ],
        "enable": [, , , , , [3], [[7], ["cstruct.intSeqHelper"]], , , , ],
        "disable": [, , , , , [3], [[7], ["cstruct.intSeqHelper"]], , , , ],
        "resetDriverPasswordByPhone": [, , , , , [3], [[7], [7]], , , , ],
        "deleteDrivers": [, , , , , [3], [[7], ["cstruct.intSeqHelper"]], , , , ],
        "queryRoutes": [, , , , , ["enterprise.RouteInfoSeqHelper"], [[7], ["cstruct.stringSeqHelper"]], , , , ],
        "saveRoute": [, , , , , [3], [[7], [enterprise.RouteInfo]], , , , ],
        "enableRoute": [, , , , , [3], [[7], ["cstruct.intSeqHelper"]], , , , ],
        "disableRoute": [, , , , , [3], [[7], ["cstruct.intSeqHelper"]], , , , ],
        "deleteRoute": [, , , , , [3], [[7], ["cstruct.intSeqHelper"]], , , , ]
    });
    exports.enterprise = enterprise;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
