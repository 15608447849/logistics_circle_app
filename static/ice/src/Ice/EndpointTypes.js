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
// Generated from file `EndpointTypes.ice'
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
        "../Ice/EnumBase",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers"
    ]).Ice;
    
    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */

    /**
     * Determines the order in which the Ice run time uses the endpoints
     * in a proxy when establishing a connection.
     * 
     **/
    Ice.EndpointSelectionType = Slice.defineEnum([
        ['Random', 0], ['Ordered', 1]]);
/* slice2js browser-bundle-skip */
    exports.Ice = Ice;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
/* slice2js browser-bundle-skip-end */
