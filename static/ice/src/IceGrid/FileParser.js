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
// Generated from file `FileParser.ice'
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
        "../Ice/Exception",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers"
    ]).Ice;
    
    var IceGrid = require("../IceGrid/Admin").IceGrid;
    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */

    /**
     * This exception is raised if an error occurs during parsing.
     * 
     **/
    IceGrid.ParseException = Slice.defineUserException(
        function(reason, _cause)
        {
            Ice.UserException.call(this, _cause);
            this.reason = reason !== undefined ? reason : "";
        },
        Ice.UserException,
        "IceGrid::ParseException",
        function(__os)
        {
            __os.writeString(this.reason);
        },
        function(__is)
        {
            this.reason = __is.readString();
        },
        false,
        false);

    /**
     * <tt>icegridadmin</tt> provides a {@link FileParser}
     * object to transform XML files into {@link ApplicationDescriptor}
     * objects.
     * 
     **/
    IceGrid.FileParser = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::FileParser"
        ],
        -1, undefined, undefined, false);

    IceGrid.FileParserPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.FileParser.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.FileParser, IceGrid.FileParserPrx,
    {
        "parse": [, 2, 2, , , [IceGrid.ApplicationDescriptor], [[7], ["IceGrid.AdminPrx"]], , 
        [
            IceGrid.ParseException
        ], , true]
    });
/* slice2js browser-bundle-skip */
    exports.IceGrid = IceGrid;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
/* slice2js browser-bundle-skip-end */
