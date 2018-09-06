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
// Generated from file `route.ice'
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

    var route = __M.module("route");

    /**
     * 途径点中转点
     **/
    route.Routeviap = Slice.defineStruct(
        function(oid, routeid, compid, place, placename, cstatus)
        {
            this.oid = oid !== undefined ? oid : 0;
            this.routeid = routeid !== undefined ? routeid : 0;
            this.compid = compid !== undefined ? compid : 0;
            this.place = place !== undefined ? place : 0;
            this.placename = placename !== undefined ? placename : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.oid);
            __os.writeInt(this.routeid);
            __os.writeInt(this.compid);
            __os.writeInt(this.place);
            __os.writeString(this.placename);
            __os.writeInt(this.cstatus);
        },
        function(__is)
        {
            this.oid = __is.readInt();
            this.routeid = __is.readInt();
            this.compid = __is.readInt();
            this.place = __is.readInt();
            this.placename = __is.readString();
            this.cstatus = __is.readInt();
        },
        21, 
        false);
    Slice.defineSequence(route, "RouteviapSeqHelper", "route.Routeviap", false);

    /**
     * 常用线路
     **/
    route.RouteInfo = Slice.defineStruct(
        function(oid, routeid, compid, routename, startpc, startpn, endpc, endpn, cstatus, routevias)
        {
            this.oid = oid !== undefined ? oid : 0;
            this.routeid = routeid !== undefined ? routeid : 0;
            this.compid = compid !== undefined ? compid : 0;
            this.routename = routename !== undefined ? routename : "";
            this.startpc = startpc !== undefined ? startpc : 0;
            this.startpn = startpn !== undefined ? startpn : "";
            this.endpc = endpc !== undefined ? endpc : 0;
            this.endpn = endpn !== undefined ? endpn : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
            this.routevias = routevias !== undefined ? routevias : null;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.oid);
            __os.writeInt(this.routeid);
            __os.writeInt(this.compid);
            __os.writeString(this.routename);
            __os.writeInt(this.startpc);
            __os.writeString(this.startpn);
            __os.writeInt(this.endpc);
            __os.writeString(this.endpn);
            __os.writeInt(this.cstatus);
            route.RouteviapSeqHelper.write(__os, this.routevias);
        },
        function(__is)
        {
            this.oid = __is.readInt();
            this.routeid = __is.readInt();
            this.compid = __is.readInt();
            this.routename = __is.readString();
            this.startpc = __is.readInt();
            this.startpn = __is.readString();
            this.endpc = __is.readInt();
            this.endpn = __is.readString();
            this.cstatus = __is.readInt();
            this.routevias = route.RouteviapSeqHelper.read(__is);
        },
        28, 
        false);
    Slice.defineSequence(route, "RouteInfoSeqHelper", "route.RouteInfo", false);
    Slice.defineSequence(route, "stringSeqHelper", "Ice.StringHelper", false);

    /**
     * 线路接口
     **/
    route.EnterpriseServer = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::route::EnterpriseServer"
        ],
        -1, undefined, undefined, false);

    route.EnterpriseServerPrx = Slice.defineProxy(Ice.ObjectPrx, route.EnterpriseServer.ice_staticId, undefined);

    Slice.defineOperations(route.EnterpriseServer, route.EnterpriseServerPrx,
    {
        "queryRoutesCommon": [, , , , , ["route.RouteInfoSeqHelper"], [[3], ["route.stringSeqHelper"]], , , , ]
    });
    exports.route = route;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));