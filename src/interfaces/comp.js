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
// Generated from file `comp.ice'
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

    var comp = __M.module("comp");

    /**
     * 路线模型
     **/
    comp.Route = Slice.defineStruct(
        function(startpn, endpn, channel, transfer)
        {
            this.startpn = startpn !== undefined ? startpn : "";
            this.endpn = endpn !== undefined ? endpn : "";
            this.channel = channel !== undefined ? channel : "";
            this.transfer = transfer !== undefined ? transfer : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.startpn);
            __os.writeString(this.endpn);
            __os.writeString(this.channel);
            __os.writeString(this.transfer);
        },
        function(__is)
        {
            this.startpn = __is.readString();
            this.endpn = __is.readString();
            this.channel = __is.readString();
            this.transfer = __is.readString();
        },
        4, 
        false);

    comp.Staff = Slice.defineStruct(
        function(name, uid, phone, comp, compid, status, type, createdate)
        {
            this.name = name !== undefined ? name : "";
            this.uid = uid !== undefined ? uid : 0;
            this.phone = phone !== undefined ? phone : "";
            this.comp = comp !== undefined ? comp : "";
            this.compid = compid !== undefined ? compid : 0;
            this.status = status !== undefined ? status : 0;
            this.type = type !== undefined ? type : 0;
            this.createdate = createdate !== undefined ? createdate : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeInt(this.uid);
            __os.writeString(this.phone);
            __os.writeString(this.comp);
            __os.writeInt(this.compid);
            __os.writeInt(this.status);
            __os.writeInt(this.type);
            __os.writeString(this.createdate);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.uid = __is.readInt();
            this.phone = __is.readString();
            this.comp = __is.readString();
            this.compid = __is.readInt();
            this.status = __is.readInt();
            this.type = __is.readInt();
            this.createdate = __is.readString();
        },
        20, 
        false);
    Slice.defineSequence(comp, "staffSeqHelper", "comp.Staff", false);
    Slice.defineSequence(comp, "RouteSeqHelper", "comp.Route", false);

    /**
     * 企业信息模型
     **/
    comp.CompInfo = Slice.defineStruct(
        function(compid, uoid, fname, sname, ctype, ctypes, csale, csales, contact, area, areas, address, postcode, pho, pht, invtitle, invtype, invtypes, taxno, phone, openbank, openaccount, billarea, billaddr, billareas, logoPath, verify, creadit)
        {
            this.compid = compid !== undefined ? compid : "";
            this.uoid = uoid !== undefined ? uoid : "";
            this.fname = fname !== undefined ? fname : "";
            this.sname = sname !== undefined ? sname : "";
            this.ctype = ctype !== undefined ? ctype : 0;
            this.ctypes = ctypes !== undefined ? ctypes : "";
            this.csale = csale !== undefined ? csale : 0;
            this.csales = csales !== undefined ? csales : "";
            this.contact = contact !== undefined ? contact : 0;
            this.area = area !== undefined ? area : 0;
            this.areas = areas !== undefined ? areas : "";
            this.address = address !== undefined ? address : "";
            this.postcode = postcode !== undefined ? postcode : "";
            this.pho = pho !== undefined ? pho : 0;
            this.pht = pht !== undefined ? pht : 0;
            this.invtitle = invtitle !== undefined ? invtitle : "";
            this.invtype = invtype !== undefined ? invtype : 0;
            this.invtypes = invtypes !== undefined ? invtypes : "";
            this.taxno = taxno !== undefined ? taxno : "";
            this.phone = phone !== undefined ? phone : "";
            this.openbank = openbank !== undefined ? openbank : "";
            this.openaccount = openaccount !== undefined ? openaccount : "";
            this.billarea = billarea !== undefined ? billarea : 0;
            this.billaddr = billaddr !== undefined ? billaddr : "";
            this.billareas = billareas !== undefined ? billareas : "";
            this.logoPath = logoPath !== undefined ? logoPath : "";
            this.verify = verify !== undefined ? verify : 0;
            this.creadit = creadit !== undefined ? creadit : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.compid);
            __os.writeString(this.uoid);
            __os.writeString(this.fname);
            __os.writeString(this.sname);
            __os.writeInt(this.ctype);
            __os.writeString(this.ctypes);
            __os.writeInt(this.csale);
            __os.writeString(this.csales);
            __os.writeLong(this.contact);
            __os.writeInt(this.area);
            __os.writeString(this.areas);
            __os.writeString(this.address);
            __os.writeString(this.postcode);
            __os.writeLong(this.pho);
            __os.writeLong(this.pht);
            __os.writeString(this.invtitle);
            __os.writeInt(this.invtype);
            __os.writeString(this.invtypes);
            __os.writeString(this.taxno);
            __os.writeString(this.phone);
            __os.writeString(this.openbank);
            __os.writeString(this.openaccount);
            __os.writeInt(this.billarea);
            __os.writeString(this.billaddr);
            __os.writeString(this.billareas);
            __os.writeString(this.logoPath);
            __os.writeInt(this.verify);
            __os.writeInt(this.creadit);
        },
        function(__is)
        {
            this.compid = __is.readString();
            this.uoid = __is.readString();
            this.fname = __is.readString();
            this.sname = __is.readString();
            this.ctype = __is.readInt();
            this.ctypes = __is.readString();
            this.csale = __is.readInt();
            this.csales = __is.readString();
            this.contact = __is.readLong();
            this.area = __is.readInt();
            this.areas = __is.readString();
            this.address = __is.readString();
            this.postcode = __is.readString();
            this.pho = __is.readLong();
            this.pht = __is.readLong();
            this.invtitle = __is.readString();
            this.invtype = __is.readInt();
            this.invtypes = __is.readString();
            this.taxno = __is.readString();
            this.phone = __is.readString();
            this.openbank = __is.readString();
            this.openaccount = __is.readString();
            this.billarea = __is.readInt();
            this.billaddr = __is.readString();
            this.billareas = __is.readString();
            this.logoPath = __is.readString();
            this.verify = __is.readInt();
            this.creadit = __is.readInt();
        },
        70, 
        false);

    /**
     * 企业与路线模型
     **/
    comp.CompsInfo = Slice.defineStruct(
        function(compid, uoid, fname, sname, ctype, ctypes, csale, csales, contact, area, areas, address, postcode, pho, pht, invtitle, invtype, invtypes, taxno, phone, openbank, openaccount, billarea, billareas, billaddr, busslic, idcard, trasportlic, insurcert, ntaxcert, ltaxcert, orgcert, logoPath, verify, creadit, routeList)
        {
            this.compid = compid !== undefined ? compid : "";
            this.uoid = uoid !== undefined ? uoid : "";
            this.fname = fname !== undefined ? fname : "";
            this.sname = sname !== undefined ? sname : "";
            this.ctype = ctype !== undefined ? ctype : 0;
            this.ctypes = ctypes !== undefined ? ctypes : "";
            this.csale = csale !== undefined ? csale : 0;
            this.csales = csales !== undefined ? csales : "";
            this.contact = contact !== undefined ? contact : 0;
            this.area = area !== undefined ? area : 0;
            this.areas = areas !== undefined ? areas : "";
            this.address = address !== undefined ? address : "";
            this.postcode = postcode !== undefined ? postcode : "";
            this.pho = pho !== undefined ? pho : 0;
            this.pht = pht !== undefined ? pht : 0;
            this.invtitle = invtitle !== undefined ? invtitle : "";
            this.invtype = invtype !== undefined ? invtype : 0;
            this.invtypes = invtypes !== undefined ? invtypes : "";
            this.taxno = taxno !== undefined ? taxno : "";
            this.phone = phone !== undefined ? phone : "";
            this.openbank = openbank !== undefined ? openbank : "";
            this.openaccount = openaccount !== undefined ? openaccount : "";
            this.billarea = billarea !== undefined ? billarea : 0;
            this.billareas = billareas !== undefined ? billareas : "";
            this.billaddr = billaddr !== undefined ? billaddr : "";
            this.busslic = busslic !== undefined ? busslic : "";
            this.idcard = idcard !== undefined ? idcard : "";
            this.trasportlic = trasportlic !== undefined ? trasportlic : "";
            this.insurcert = insurcert !== undefined ? insurcert : "";
            this.ntaxcert = ntaxcert !== undefined ? ntaxcert : "";
            this.ltaxcert = ltaxcert !== undefined ? ltaxcert : "";
            this.orgcert = orgcert !== undefined ? orgcert : "";
            this.logoPath = logoPath !== undefined ? logoPath : "";
            this.verify = verify !== undefined ? verify : 0;
            this.creadit = creadit !== undefined ? creadit : 0;
            this.routeList = routeList !== undefined ? routeList : null;
        },
        true,
        function(__os)
        {
            __os.writeString(this.compid);
            __os.writeString(this.uoid);
            __os.writeString(this.fname);
            __os.writeString(this.sname);
            __os.writeInt(this.ctype);
            __os.writeString(this.ctypes);
            __os.writeInt(this.csale);
            __os.writeString(this.csales);
            __os.writeLong(this.contact);
            __os.writeInt(this.area);
            __os.writeString(this.areas);
            __os.writeString(this.address);
            __os.writeString(this.postcode);
            __os.writeLong(this.pho);
            __os.writeLong(this.pht);
            __os.writeString(this.invtitle);
            __os.writeInt(this.invtype);
            __os.writeString(this.invtypes);
            __os.writeString(this.taxno);
            __os.writeString(this.phone);
            __os.writeString(this.openbank);
            __os.writeString(this.openaccount);
            __os.writeInt(this.billarea);
            __os.writeString(this.billareas);
            __os.writeString(this.billaddr);
            __os.writeString(this.busslic);
            __os.writeString(this.idcard);
            __os.writeString(this.trasportlic);
            __os.writeString(this.insurcert);
            __os.writeString(this.ntaxcert);
            __os.writeString(this.ltaxcert);
            __os.writeString(this.orgcert);
            __os.writeString(this.logoPath);
            __os.writeInt(this.verify);
            __os.writeInt(this.creadit);
            comp.RouteSeqHelper.write(__os, this.routeList);
        },
        function(__is)
        {
            this.compid = __is.readString();
            this.uoid = __is.readString();
            this.fname = __is.readString();
            this.sname = __is.readString();
            this.ctype = __is.readInt();
            this.ctypes = __is.readString();
            this.csale = __is.readInt();
            this.csales = __is.readString();
            this.contact = __is.readLong();
            this.area = __is.readInt();
            this.areas = __is.readString();
            this.address = __is.readString();
            this.postcode = __is.readString();
            this.pho = __is.readLong();
            this.pht = __is.readLong();
            this.invtitle = __is.readString();
            this.invtype = __is.readInt();
            this.invtypes = __is.readString();
            this.taxno = __is.readString();
            this.phone = __is.readString();
            this.openbank = __is.readString();
            this.openaccount = __is.readString();
            this.billarea = __is.readInt();
            this.billareas = __is.readString();
            this.billaddr = __is.readString();
            this.busslic = __is.readString();
            this.idcard = __is.readString();
            this.trasportlic = __is.readString();
            this.insurcert = __is.readString();
            this.ntaxcert = __is.readString();
            this.ltaxcert = __is.readString();
            this.orgcert = __is.readString();
            this.logoPath = __is.readString();
            this.verify = __is.readInt();
            this.creadit = __is.readInt();
            this.routeList = comp.RouteSeqHelper.read(__is);
        },
        78, 
        false);

    /**
     * 企业logo的基本信息模型
     **/
    comp.BasicInfo = Slice.defineStruct(
        function(compid, fname, verify, creadit, logoPath)
        {
            this.compid = compid !== undefined ? compid : "";
            this.fname = fname !== undefined ? fname : "";
            this.verify = verify !== undefined ? verify : 0;
            this.creadit = creadit !== undefined ? creadit : 0;
            this.logoPath = logoPath !== undefined ? logoPath : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.compid);
            __os.writeString(this.fname);
            __os.writeInt(this.verify);
            __os.writeInt(this.creadit);
            __os.writeString(this.logoPath);
        },
        function(__is)
        {
            this.compid = __is.readString();
            this.fname = __is.readString();
            this.verify = __is.readInt();
            this.creadit = __is.readInt();
            this.logoPath = __is.readString();
        },
        11, 
        false);

    comp.PhoneInfo = Slice.defineStruct(
        function(pho, pht)
        {
            this.pho = pho !== undefined ? pho : 0;
            this.pht = pht !== undefined ? pht : 0;
        },
        true,
        function(__os)
        {
            __os.writeLong(this.pho);
            __os.writeLong(this.pht);
        },
        function(__is)
        {
            this.pho = __is.readLong();
            this.pht = __is.readLong();
        },
        16, 
        true);

    /**
     * 基础数据服务接口
     **/
    comp.CompService = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::comp::CompService"
        ],
        -1, undefined, undefined, false);

    comp.CompServicePrx = Slice.defineProxy(Ice.ObjectPrx, comp.CompService.ice_staticId, undefined);

    Slice.defineOperations(comp.CompService, comp.CompServicePrx,
    {
        "querygetCompByUid": [, , , , , [7], [[7]], , , , ],
        "querygetCompByCid": [, , , , , [7], [[7]], , , , ],
        "updateComp": [, , , , , [7], [[comp.CompInfo]], , , , ],
        "queryCompByBasicUid": [, , , , , [7], [[7]], , , , ],
        "insertCompUser": [, , , , , [7], [[3], [4]], , , , ],
        "selectCompUserByUid": [, , , , , [7], [[3], ["cstruct.intSeqHelper"]], , , , ],
        "querygetCompAll": [, , , , , [7], [[7]], , , , ],
        "addLoginCompByRedis": [, , , , , [7], [[3], [3]], , , , ],
        "selectStaffInfo": [, , , , , [7], [[7], [7], [7], [3], [3], [cstruct.Page]], [[cstruct.Page]], , , ],
        "searchDriver4App": [, , , , , [7], [[3], [7], [3], [3]], , , , ],
        "searchStaff4App": [, , , , , [7], [[3], [7], [3], [3]], , , , ],
        "searchEnterprise4App": [, , , , , [7], [[7], [3], [3]], , , , ],
        "addStaffInfo": [, , , , , [7], [[7], [7], [3], [3]], , , , ],
        "updateStaffInfo": [, , , , , [7], [[7], [7], [3], [3], [3]], , , , ],
        "updateStaffstatus": [, , , , , [7], [[3], [3], [3], [3]], , , , ],
        "updateCompPhone": [, , , , , [3], [[4], [4]], , , , ],
        "selectPhoAndPht": [, , , , , [7], [[3]], , , , ],
        "feedbackCredentRelpath": [, , , , , [7], [[3], ["cstruct.stringSeqHelper"]], , , , ]
    });
    exports.comp = comp;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));