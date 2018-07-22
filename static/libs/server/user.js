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
    var Slice = Ice.Slice;

    var user = __M.module("user");

    /**
     * 用户基本信息数据模型
     **/
    user.UserICE = Slice.defineStruct(
        function(oid, uphone, uname, upw, roleid, ioid, adddate, addtime, cstatus)
        {
            this.oid = oid !== undefined ? oid : 0;
            this.uphone = uphone !== undefined ? uphone : 0;
            this.uname = uname !== undefined ? uname : "";
            this.upw = upw !== undefined ? upw : "";
            this.roleid = roleid !== undefined ? roleid : 0;
            this.ioid = ioid !== undefined ? ioid : "";
            this.adddate = adddate !== undefined ? adddate : "";
            this.addtime = addtime !== undefined ? addtime : "";
            this.cstatus = cstatus !== undefined ? cstatus : 0;
        },
        true,
        function(__os)
        {
            __os.writeInt(this.oid);
            __os.writeLong(this.uphone);
            __os.writeString(this.uname);
            __os.writeString(this.upw);
            __os.writeInt(this.roleid);
            __os.writeString(this.ioid);
            __os.writeString(this.adddate);
            __os.writeString(this.addtime);
            __os.writeShort(this.cstatus);
        },
        function(__is)
        {
            this.oid = __is.readInt();
            this.uphone = __is.readLong();
            this.uname = __is.readString();
            this.upw = __is.readString();
            this.roleid = __is.readInt();
            this.ioid = __is.readString();
            this.adddate = __is.readString();
            this.addtime = __is.readString();
            this.cstatus = __is.readShort();
        },
        23, 
        false);
    Slice.defineSequence(user, "stringListHelper", "Ice.StringHelper", false);
    Slice.defineSequence(user, "userListHelper", "user.UserICE", false);

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
        "loginByToken": [, , , , , [7], [[7]], , , , ],
        "getUserInfo": [, , , , , [7], [["user.stringListHelper"], [3]], , , , ],
        "resetDriverPassword": [, , , , , [7], [[4]], , , , ],
        "addDriver": [, , , , , [7], [[4], [7]], , , , ],
        "verifyUserName": [, , , , , [7], [[7]], , , , ],
        "verifyPhone": [, , , , , [7], [[4]], , , , ],
        "sendSms": [, , , , , [7], [["user.stringListHelper"]], , , , ],
        "verifyCode": [, , , , , [7], [[4], [7]], , , , ],
        "custRegister": [, , , , , [7], [[7], [4], [7], [7], [7]], , , , ],
        "forgetUserPassword": [, , , , , [7], [[4], [7], [7]], , , , ],
        "updateUserPassword": [, , , , , [7], [[4], [7], [7]], , , , ],
        "updateUserPhone": [, , , , , [7], [[4], [4], [7]], , , , ],
        "smsTest": [, , , , , [7], [[4], [7]], , , , ],
        "driverLogin": [, , , , , [7], [[4], [7]], , , , ],
        "updateDriverPassword": [, , , , , [7], [[4], [7], [7]], , , , ]
    });
    exports.user = user;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
