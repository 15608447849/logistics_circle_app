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
// Generated from file `RemoteLogger.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

/* slice2js browser-bundle-skip */
(function(module, require, exports)
{
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
    var __M = require("../Ice/ModuleRegistry").Ice.__M;
    var Ice = __M.require(module, 
    [
        "../Ice/Object",
        "../Ice/ObjectPrx",
        "../Ice/Operation",
        "../Ice/Struct",
        "../Ice/Exception",
        "../Ice/EnumBase",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers",
        "../Ice/BuiltinSequences"
    ]).Ice;
    
    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */

    /**
     * An enumeration representing the different types of log messages.
     * 
     **/
    Ice.LogMessageType = Slice.defineEnum([
        ['PrintMessage', 0], ['TraceMessage', 1], ['WarningMessage', 2], ['ErrorMessage', 3]]);
    Slice.defineSequence(Ice, "LogMessageTypeSeqHelper", "Ice.LogMessageType.__helper", false);

    /**
     * A complete log message.
     * 
     **/
    Ice.LogMessage = Slice.defineStruct(
        function(type, timestamp, traceCategory, message)
        {
            this.type = type !== undefined ? type : Ice.LogMessageType.PrintMessage;
            this.timestamp = timestamp !== undefined ? timestamp : 0;
            this.traceCategory = traceCategory !== undefined ? traceCategory : "";
            this.message = message !== undefined ? message : "";
        },
        true,
        function(__os)
        {
            Ice.LogMessageType.__write(__os, this.type);
            __os.writeLong(this.timestamp);
            __os.writeString(this.traceCategory);
            __os.writeString(this.message);
        },
        function(__is)
        {
            this.type = Ice.LogMessageType.__read(__is);
            this.timestamp = __is.readLong();
            this.traceCategory = __is.readString();
            this.message = __is.readString();
        },
        11, 
        false);
    Slice.defineSequence(Ice, "LogMessageSeqHelper", "Ice.LogMessage", false);

    /**
     * The Ice remote logger interface. An application can implement a
     * RemoteLogger to receive the log messages sent to the local {@link Logger}
     * of another Ice application.
     * 
     **/
    Ice.RemoteLogger = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::Ice::RemoteLogger"
        ],
        -1, undefined, undefined, false);

    Ice.RemoteLoggerPrx = Slice.defineProxy(Ice.ObjectPrx, Ice.RemoteLogger.ice_staticId, undefined);

    Slice.defineOperations(Ice.RemoteLogger, Ice.RemoteLoggerPrx,
    {
        "init": [, , , , , , [[7], ["Ice.LogMessageSeqHelper"]], , , , ],
        "log": [, , , , , , [[Ice.LogMessage]], , , , ]
    });

    /**
     * An exception thrown by {@link LoggerAdmin#attachRemoteLogger} to report
     * that the provided {@link RemoteLogger} was previously attached to this
     * {@link LoggerAdmin}.
     * 
     **/
    Ice.RemoteLoggerAlreadyAttachedException = Slice.defineUserException(
        function(_cause)
        {
            Ice.UserException.call(this, _cause);
        },
        Ice.UserException,
        "Ice::RemoteLoggerAlreadyAttachedException",
        undefined, undefined,
        false,
        false);

    /**
     * The interface of the admin object that allows an Ice application the attach its
     * {@link RemoteLogger} to the {@link Logger} of this admin object's Ice communicator.
     * 
     **/
    Ice.LoggerAdmin = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Ice::LoggerAdmin",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Ice.LoggerAdminPrx = Slice.defineProxy(Ice.ObjectPrx, Ice.LoggerAdmin.ice_staticId, undefined);

    Slice.defineOperations(Ice.LoggerAdmin, Ice.LoggerAdminPrx,
    {
        "attachRemoteLogger": [, , , , , , [["Ice.RemoteLoggerPrx"], ["Ice.LogMessageTypeSeqHelper"], ["Ice.StringSeqHelper"], [3]], , 
        [
            Ice.RemoteLoggerAlreadyAttachedException
        ], , ],
        "detachRemoteLogger": [, , , , , [1], [["Ice.RemoteLoggerPrx"]], , , , ],
        "getLog": [, , , , , ["Ice.LogMessageSeqHelper"], [["Ice.LogMessageTypeSeqHelper"], ["Ice.StringSeqHelper"], [3]], [[7]], , , ]
    });
/* slice2js browser-bundle-skip */
    exports.Ice = Ice;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
/* slice2js browser-bundle-skip-end */
