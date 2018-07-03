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
// Generated from file `Version.ice'
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
        "../Ice/Struct",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers"
    ]).Ice;
    
    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */

    /**
     * A version structure for the protocol version.
     * 
     **/
    Ice.ProtocolVersion = Slice.defineStruct(
        function(major, minor)
        {
            this.major = major !== undefined ? major : 0;
            this.minor = minor !== undefined ? minor : 0;
        },
        true,
        function(__os)
        {
            __os.writeByte(this.major);
            __os.writeByte(this.minor);
        },
        function(__is)
        {
            this.major = __is.readByte();
            this.minor = __is.readByte();
        },
        2, 
        true);

    /**
     * A version structure for the encoding version.
     * 
     **/
    Ice.EncodingVersion = Slice.defineStruct(
        function(major, minor)
        {
            this.major = major !== undefined ? major : 0;
            this.minor = minor !== undefined ? minor : 0;
        },
        true,
        function(__os)
        {
            __os.writeByte(this.major);
            __os.writeByte(this.minor);
        },
        function(__is)
        {
            this.major = __is.readByte();
            this.minor = __is.readByte();
        },
        2, 
        true);
/* slice2js browser-bundle-skip */
    exports.Ice = Ice;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
/* slice2js browser-bundle-skip-end */
