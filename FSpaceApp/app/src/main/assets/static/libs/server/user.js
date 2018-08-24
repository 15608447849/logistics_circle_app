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
// Generated from file `user.ice'
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

    var user = __M.module("user");

    /**
     * 企业码信息
     **/
    user.CompIdName = Slice.defineStruct(
        function(compid, fname, pho, pht, address, area, verify, logo, creadit, roid, cstatus)
        {
            this.compid = compid !== undefined ? compid : "";
            this.fname = fname !== undefined ? fname : "";
            this.pho = pho !== undefined ? pho : "";
            this.pht = pht !== undefined ? pht : "";
            this.address = address !== undefined ? address : "";
            this.area = area !== undefined ? area : "";
            this.verify = verify !== undefined ? verify : "";
            this.logo = logo !== undefined ? logo : "";
            this.creadit = creadit !== undefined ? creadit : 0;
            this.roid = roid !== undefined ? roid : 0;
            this.cstatus = cstatus !== undefined ? cstatus : 0;
        },
        true,
        function(__os)
        {
            __os.writeString(this.compid);
            __os.writeString(this.fname);
            __os.writeString(this.pho);
            __os.writeString(this.pht);
            __os.writeString(this.address);
            __os.writeString(this.area);
            __os.writeString(this.verify);
            __os.writeString(this.logo);
            __os.writeInt(this.creadit);
            __os.writeInt(this.roid);
            __os.writeInt(this.cstatus);
        },
        function(__is)
        {
            this.compid = __is.readString();
            this.fname = __is.readString();
            this.pho = __is.readString();
            this.pht = __is.readString();
            this.address = __is.readString();
            this.area = __is.readString();
            this.verify = __is.readString();
            this.logo = __is.readString();
            this.creadit = __is.readInt();
            this.roid = __is.readInt();
            this.cstatus = __is.readInt();
        },
        20, 
        false);
    Slice.defineSequence(user, "ompIdNameseqHelper", "user.CompIdName", false);

    /**
     * 用户基本信息数据模型
     **/
    user.UserIce = Slice.defineStruct(
        function(oid, uphone, uname, urealname, upw, roleid, ioid, adddate, addtime, cstatus, comps, msg)
        {
            this.oid = oid !== undefined ? oid : 0;
            this.uphone = uphone !== undefined ? uphone : 0;
            this.uname = uname !== undefined ? uname : "";
            this.urealname = urealname !== undefined ? urealname : "";
            this.upw = upw !== undefined ? upw : "";
            this.roleid = roleid !== undefined ? roleid : 0;
            this.ioid = ioid !== undefined ? ioid : 0;
            this.adddate = adddate !== undefined ? adddate : "";
            this.addtime = addtime !== undefined ? addtime : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
            this.comps = comps !== undefined ? comps : null;
            this.msg = msg !== undefined ? msg : "";
        },
        true,
        function(__os)
        {
            __os.writeInt(this.oid);
            __os.writeLong(this.uphone);
            __os.writeString(this.uname);
            __os.writeString(this.urealname);
            __os.writeString(this.upw);
            __os.writeInt(this.roleid);
            __os.writeInt(this.ioid);
            __os.writeString(this.adddate);
            __os.writeString(this.addtime);
            __os.writeShort(this.cstatus);
            user.ompIdNameseqHelper.write(__os, this.comps);
            __os.writeString(this.msg);
        },
        function(__is)
        {
            this.oid = __is.readInt();
            this.uphone = __is.readLong();
            this.uname = __is.readString();
            this.urealname = __is.readString();
            this.upw = __is.readString();
            this.roleid = __is.readInt();
            this.ioid = __is.readInt();
            this.adddate = __is.readString();
            this.addtime = __is.readString();
            this.cstatus = __is.readShort();
            this.comps = user.ompIdNameseqHelper.read(__is);
            this.msg = __is.readString();
        },
        29, 
        false);
    Slice.defineSequence(user, "stringListHelper", "Ice.StringHelper", false);
    Slice.defineSequence(user, "intListHelper", "Ice.IntHelper", true);
    Slice.defineSequence(user, "userListHelper", "user.UserIce", false);

    user.UserService = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::user::UserService"
        ],
        -1, undefined, undefined, false);

    user.UserServicePrx = Slice.defineProxy(Ice.ObjectPrx, user.UserService.ice_staticId, undefined);

    Slice.defineOperations(user.UserService, user.UserServicePrx,
    {
        "login": [, , , , , [7], [[7], [7], [3]], , , , ],
        "loginBySms": [, , , , , [7], [[4], [7]], , , , ],
        "getUserInfo": [, , , , , ["user.userListHelper"], [[3], ["user.intListHelper"], [3], [7], [7], [cstruct.Page]], [[cstruct.Page]], , , ],
        "addUser": [, , , , , [user.UserIce], [[3], [4], [7], [3]], , , , ],
        "updateUser": [, , , , , [user.UserIce], [[3], [3], [4], [7]], , , , ],
        "getUserByOid": [, , , , , [user.UserIce], [[3]], , , , ],
        "verifyUserName": [, , , , , [7], [[7]], , , , ],
        "verifyPhone": [, , , , , [7], [[4]], , , , ],
        "verifyPhone4App": [, , , , , [7], [[4]], , , , ],
        "verifyByPhone": [, , , , , [7], [[4]], , , , ],
        "sendSms": [, , , , , [7], [["user.stringListHelper"]], , , , ],
        "verifyCode": [, , , , , [7], [[4], [7]], , , , ],
        "custRegister": [, , , , , [7], [[7], [4], [7], [7], [7]], , , , ],
        "forgetUserPassword": [, , , , , [7], [[4], [7], [7]], , , , ],
        "updateUserPassword": [, , , , , [7], [[4], [7], [7]], , , , ],
        "updateUserPhone": [, , , , , [7], [[4], [4], [7]], , , , ],
        "checkIsDiscontinuation": [, , , , , [3], [[3], [3], [3]], , , , ]
    });
    exports.user = user;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
