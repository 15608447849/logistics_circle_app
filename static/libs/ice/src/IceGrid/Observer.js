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
// Generated from file `Observer.ice'
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
    var Glacier2 = require("../Glacier2/Session").Glacier2;
    var Ice = __M.require(module,
    [
        "../Ice/Object",
        "../Ice/ObjectPrx",
        "../Ice/Operation",
        "../Ice/Struct",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers"
    ]).Ice;

    var IceGrid = __M.require(module,
    [
        "../IceGrid/Exception",
        "../IceGrid/Descriptor",
        "../IceGrid/Admin"
    ]).IceGrid;

    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */

    /**
     * Dynamic information about the state of a communication.
     *
     **/
    IceGrid.ServerDynamicInfo = Slice.defineStruct(
        function(id, state, pid, enabled)
        {
            this.id = id !== undefined ? id : "";
            this.state = state !== undefined ? state : IceGrid.ServerState.Inactive;
            this.pid = pid !== undefined ? pid : 0;
            this.enabled = enabled !== undefined ? enabled : false;
        },
        true,
        function(__os)
        {
            __os.writeString(this.id);
            IceGrid.ServerState.__write(__os, this.state);
            __os.writeInt(this.pid);
            __os.writeBool(this.enabled);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.state = IceGrid.ServerState.__read(__is);
            this.pid = __is.readInt();
            this.enabled = __is.readBool();
        },
        7,
        false);
    Slice.defineSequence(IceGrid, "ServerDynamicInfoSeqHelper", "IceGrid.ServerDynamicInfo", false);

    /**
     * Dynamic information about the state of an adapter.
     *
     **/
    IceGrid.AdapterDynamicInfo = Slice.defineStruct(
        function(id, proxy)
        {
            this.id = id !== undefined ? id : "";
            this.proxy = proxy !== undefined ? proxy : null;
        },
        false,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeProxy(this.proxy);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.proxy = __is.readProxy();
        },
        3,
        false);
    Slice.defineSequence(IceGrid, "AdapterDynamicInfoSeqHelper", "IceGrid.AdapterDynamicInfo", false);

    /**
     * Dynamic information about the state of a node.
     *
     **/
    IceGrid.NodeDynamicInfo = Slice.defineStruct(
        function(info, servers, adapters)
        {
            this.info = info !== undefined ? info : new IceGrid.NodeInfo();
            this.servers = servers !== undefined ? servers : null;
            this.adapters = adapters !== undefined ? adapters : null;
        },
        false,
        function(__os)
        {
            IceGrid.NodeInfo.write(__os, this.info);
            IceGrid.ServerDynamicInfoSeqHelper.write(__os, this.servers);
            IceGrid.AdapterDynamicInfoSeqHelper.write(__os, this.adapters);
        },
        function(__is)
        {
            this.info = IceGrid.NodeInfo.read(__is, this.info);
            this.servers = IceGrid.ServerDynamicInfoSeqHelper.read(__is);
            this.adapters = IceGrid.AdapterDynamicInfoSeqHelper.read(__is);
        },
        13,
        false);
    Slice.defineSequence(IceGrid, "NodeDynamicInfoSeqHelper", "IceGrid.NodeDynamicInfo", false);

    /**
     * The node observer interface. Observers should implement this
     * interface to receive information about the state of the IceGrid
     * nodes.
     *
     **/
    IceGrid.NodeObserver = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::NodeObserver"
        ],
        -1, undefined, undefined, false);

    IceGrid.NodeObserverPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.NodeObserver.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.NodeObserver, IceGrid.NodeObserverPrx,
    {
        "nodeInit": [, , , , , , [["IceGrid.NodeDynamicInfoSeqHelper"]], , , , ],
        "nodeUp": [, , , , , , [[IceGrid.NodeDynamicInfo]], , , , ],
        "nodeDown": [, , , , , , [[7]], , , , ],
        "updateServer": [, , , , , , [[7], [IceGrid.ServerDynamicInfo]], , , , ],
        "updateAdapter": [, , , , , , [[7], [IceGrid.AdapterDynamicInfo]], , , , ]
    });

    /**
     * The database observer interface. Observers should implement this
     * interface to receive information about the state of the IceGrid
     * registry database.
     *
     **/
    IceGrid.ApplicationObserver = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::ApplicationObserver"
        ],
        -1, undefined, undefined, false);

    IceGrid.ApplicationObserverPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.ApplicationObserver.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.ApplicationObserver, IceGrid.ApplicationObserverPrx,
    {
        "applicationInit": [, , , , , , [[3], ["IceGrid.ApplicationInfoSeqHelper"]], , , true, ],
        "applicationAdded": [, , , , , , [[3], [IceGrid.ApplicationInfo]], , , true, ],
        "applicationRemoved": [, , , , , , [[3], [7]], , , , ],
        "applicationUpdated": [, , , , , , [[3], [IceGrid.ApplicationUpdateInfo]], , , true, ]
    });

    /**
     * This interface allows applications to monitor the state of object
     * adapters that are registered with IceGrid.
     *
     **/
    IceGrid.AdapterObserver = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::AdapterObserver"
        ],
        -1, undefined, undefined, false);

    IceGrid.AdapterObserverPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.AdapterObserver.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.AdapterObserver, IceGrid.AdapterObserverPrx,
    {
        "adapterInit": [, , , , , , [["IceGrid.AdapterInfoSeqHelper"]], , , , ],
        "adapterAdded": [, , , , , , [[IceGrid.AdapterInfo]], , , , ],
        "adapterUpdated": [, , , , , , [[IceGrid.AdapterInfo]], , , , ],
        "adapterRemoved": [, , , , , , [[7]], , , , ]
    });

    /**
     * This interface allows applications to monitor IceGrid well-known objects.
     *
     **/
    IceGrid.ObjectObserver = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::ObjectObserver"
        ],
        -1, undefined, undefined, false);

    IceGrid.ObjectObserverPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.ObjectObserver.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.ObjectObserver, IceGrid.ObjectObserverPrx,
    {
        "objectInit": [, , , , , , [["IceGrid.ObjectInfoSeqHelper"]], , , , ],
        "objectAdded": [, , , , , , [[IceGrid.ObjectInfo]], , , , ],
        "objectUpdated": [, , , , , , [[IceGrid.ObjectInfo]], , , , ],
        "objectRemoved": [, , , , , , [[Ice.Identity]], , , , ]
    });

    /**
     * This interface allows applications to monitor changes the state
     * of the registry.
     *
     **/
    IceGrid.RegistryObserver = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::RegistryObserver"
        ],
        -1, undefined, undefined, false);

    IceGrid.RegistryObserverPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.RegistryObserver.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.RegistryObserver, IceGrid.RegistryObserverPrx,
    {
        "registryInit": [, , , , , , [["IceGrid.RegistryInfoSeqHelper"]], , , , ],
        "registryUp": [, , , , , , [[IceGrid.RegistryInfo]], , , , ],
        "registryDown": [, , , , , , [[7]], , , , ]
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
