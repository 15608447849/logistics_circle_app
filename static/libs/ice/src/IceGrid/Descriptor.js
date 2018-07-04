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
// Generated from file `Descriptor.ice'
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
        "../Ice/Struct",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers",
        "../Ice/Identity",
        "../Ice/BuiltinSequences"
    ]).Ice;

    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */

    var IceGrid = __M.module("IceGrid");
/* slice2js browser-bundle-skip-end */
    Slice.defineDictionary(IceGrid, "StringStringDict", "StringStringDictHelper", "Ice.StringHelper", "Ice.StringHelper", false, undefined, undefined);

    /**
     * Property descriptor.
     *
     **/
    IceGrid.PropertyDescriptor = Slice.defineStruct(
        function(name, value)
        {
            this.name = name !== undefined ? name : "";
            this.value = value !== undefined ? value : "";
        },
        true,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.value);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.value = __is.readString();
        },
        2,
        false);
    Slice.defineSequence(IceGrid, "PropertyDescriptorSeqHelper", "IceGrid.PropertyDescriptor", false);

    /**
     * A property set descriptor.
     *
     **/
    IceGrid.PropertySetDescriptor = Slice.defineStruct(
        function(references, properties)
        {
            this.references = references !== undefined ? references : null;
            this.properties = properties !== undefined ? properties : null;
        },
        true,
        function(__os)
        {
            Ice.StringSeqHelper.write(__os, this.references);
            IceGrid.PropertyDescriptorSeqHelper.write(__os, this.properties);
        },
        function(__is)
        {
            this.references = Ice.StringSeqHelper.read(__is);
            this.properties = IceGrid.PropertyDescriptorSeqHelper.read(__is);
        },
        2,
        false);
    Slice.defineDictionary(IceGrid, "PropertySetDescriptorDict", "PropertySetDescriptorDictHelper", "Ice.StringHelper", "IceGrid.PropertySetDescriptor", false, undefined, undefined, Ice.HashMap.compareEquals);

    /**
     * An Ice object descriptor.
     *
     **/
    IceGrid.ObjectDescriptor = Slice.defineStruct(
        function(id, type, proxyOptions)
        {
            this.id = id !== undefined ? id : new Ice.Identity();
            this.type = type !== undefined ? type : "";
            this.proxyOptions = proxyOptions !== undefined ? proxyOptions : "";
        },
        true,
        function(__os)
        {
            Ice.Identity.write(__os, this.id);
            __os.writeString(this.type);
            __os.writeString(this.proxyOptions);
        },
        function(__is)
        {
            this.id = Ice.Identity.read(__is, this.id);
            this.type = __is.readString();
            this.proxyOptions = __is.readString();
        },
        4,
        false);
    Slice.defineSequence(IceGrid, "ObjectDescriptorSeqHelper", "IceGrid.ObjectDescriptor", false);

    /**
     * An Ice object adapter descriptor.
     *
     **/
    IceGrid.AdapterDescriptor = Slice.defineStruct(
        function(name, description, id, replicaGroupId, priority, registerProcess, serverLifetime, objects, allocatables)
        {
            this.name = name !== undefined ? name : "";
            this.description = description !== undefined ? description : "";
            this.id = id !== undefined ? id : "";
            this.replicaGroupId = replicaGroupId !== undefined ? replicaGroupId : "";
            this.priority = priority !== undefined ? priority : "";
            this.registerProcess = registerProcess !== undefined ? registerProcess : false;
            this.serverLifetime = serverLifetime !== undefined ? serverLifetime : false;
            this.objects = objects !== undefined ? objects : null;
            this.allocatables = allocatables !== undefined ? allocatables : null;
        },
        true,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.description);
            __os.writeString(this.id);
            __os.writeString(this.replicaGroupId);
            __os.writeString(this.priority);
            __os.writeBool(this.registerProcess);
            __os.writeBool(this.serverLifetime);
            IceGrid.ObjectDescriptorSeqHelper.write(__os, this.objects);
            IceGrid.ObjectDescriptorSeqHelper.write(__os, this.allocatables);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.description = __is.readString();
            this.id = __is.readString();
            this.replicaGroupId = __is.readString();
            this.priority = __is.readString();
            this.registerProcess = __is.readBool();
            this.serverLifetime = __is.readBool();
            this.objects = IceGrid.ObjectDescriptorSeqHelper.read(__is);
            this.allocatables = IceGrid.ObjectDescriptorSeqHelper.read(__is);
        },
        9,
        false);
    Slice.defineSequence(IceGrid, "AdapterDescriptorSeqHelper", "IceGrid.AdapterDescriptor", false);

    /**
     * A Freeze database environment descriptor.
     *
     **/
    IceGrid.DbEnvDescriptor = Slice.defineStruct(
        function(name, description, dbHome, properties)
        {
            this.name = name !== undefined ? name : "";
            this.description = description !== undefined ? description : "";
            this.dbHome = dbHome !== undefined ? dbHome : "";
            this.properties = properties !== undefined ? properties : null;
        },
        true,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.description);
            __os.writeString(this.dbHome);
            IceGrid.PropertyDescriptorSeqHelper.write(__os, this.properties);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.description = __is.readString();
            this.dbHome = __is.readString();
            this.properties = IceGrid.PropertyDescriptorSeqHelper.read(__is);
        },
        4,
        false);
    Slice.defineSequence(IceGrid, "DbEnvDescriptorSeqHelper", "IceGrid.DbEnvDescriptor", false);

    /**
     * A communicator descriptor.
     *
     **/
    IceGrid.CommunicatorDescriptor = Slice.defineObject(
        function(adapters, propertySet, dbEnvs, logs, description)
        {
            Ice.Object.call(this);
            this.adapters = adapters !== undefined ? adapters : null;
            this.propertySet = propertySet !== undefined ? propertySet : new IceGrid.PropertySetDescriptor();
            this.dbEnvs = dbEnvs !== undefined ? dbEnvs : null;
            this.logs = logs !== undefined ? logs : null;
            this.description = description !== undefined ? description : "";
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::CommunicatorDescriptor"
        ],
        -1,
        function(__os)
        {
            IceGrid.AdapterDescriptorSeqHelper.write(__os, this.adapters);
            IceGrid.PropertySetDescriptor.write(__os, this.propertySet);
            IceGrid.DbEnvDescriptorSeqHelper.write(__os, this.dbEnvs);
            Ice.StringSeqHelper.write(__os, this.logs);
            __os.writeString(this.description);
        },
        function(__is)
        {
            this.adapters = IceGrid.AdapterDescriptorSeqHelper.read(__is);
            this.propertySet = IceGrid.PropertySetDescriptor.read(__is, this.propertySet);
            this.dbEnvs = IceGrid.DbEnvDescriptorSeqHelper.read(__is);
            this.logs = Ice.StringSeqHelper.read(__is);
            this.description = __is.readString();
        },
        false);

    IceGrid.CommunicatorDescriptorPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.CommunicatorDescriptor.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.CommunicatorDescriptor, IceGrid.CommunicatorDescriptorPrx);

    /**
     * A distribution descriptor defines an IcePatch2 communication and the
     * directories to retrieve from the patch communication.
     *
     **/
    IceGrid.DistributionDescriptor = Slice.defineStruct(
        function(icepatch, directories)
        {
            this.icepatch = icepatch !== undefined ? icepatch : "";
            this.directories = directories !== undefined ? directories : null;
        },
        true,
        function(__os)
        {
            __os.writeString(this.icepatch);
            Ice.StringSeqHelper.write(__os, this.directories);
        },
        function(__is)
        {
            this.icepatch = __is.readString();
            this.directories = Ice.StringSeqHelper.read(__is);
        },
        2,
        false);

    /**
     * An Ice communication descriptor.
     *
     **/
    IceGrid.ServerDescriptor = Slice.defineObject(
        function(adapters, propertySet, dbEnvs, logs, description, id, exe, iceVersion, pwd, options, envs, activation, activationTimeout, deactivationTimeout, applicationDistrib, distrib, allocatable, user)
        {
            IceGrid.CommunicatorDescriptor.call(this, adapters, propertySet, dbEnvs, logs, description);
            this.id = id !== undefined ? id : "";
            this.exe = exe !== undefined ? exe : "";
            this.iceVersion = iceVersion !== undefined ? iceVersion : "";
            this.pwd = pwd !== undefined ? pwd : "";
            this.options = options !== undefined ? options : null;
            this.envs = envs !== undefined ? envs : null;
            this.activation = activation !== undefined ? activation : "";
            this.activationTimeout = activationTimeout !== undefined ? activationTimeout : "";
            this.deactivationTimeout = deactivationTimeout !== undefined ? deactivationTimeout : "";
            this.applicationDistrib = applicationDistrib !== undefined ? applicationDistrib : false;
            this.distrib = distrib !== undefined ? distrib : new IceGrid.DistributionDescriptor();
            this.allocatable = allocatable !== undefined ? allocatable : false;
            this.user = user !== undefined ? user : "";
        },
        IceGrid.CommunicatorDescriptor, undefined, 2,
        [
            "::Ice::Object",
            "::IceGrid::CommunicatorDescriptor",
            "::IceGrid::ServerDescriptor"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeString(this.exe);
            __os.writeString(this.iceVersion);
            __os.writeString(this.pwd);
            Ice.StringSeqHelper.write(__os, this.options);
            Ice.StringSeqHelper.write(__os, this.envs);
            __os.writeString(this.activation);
            __os.writeString(this.activationTimeout);
            __os.writeString(this.deactivationTimeout);
            __os.writeBool(this.applicationDistrib);
            IceGrid.DistributionDescriptor.write(__os, this.distrib);
            __os.writeBool(this.allocatable);
            __os.writeString(this.user);
        },
        function(__is)
        {
            this.id = __is.readString();
            this.exe = __is.readString();
            this.iceVersion = __is.readString();
            this.pwd = __is.readString();
            this.options = Ice.StringSeqHelper.read(__is);
            this.envs = Ice.StringSeqHelper.read(__is);
            this.activation = __is.readString();
            this.activationTimeout = __is.readString();
            this.deactivationTimeout = __is.readString();
            this.applicationDistrib = __is.readBool();
            this.distrib = IceGrid.DistributionDescriptor.read(__is, this.distrib);
            this.allocatable = __is.readBool();
            this.user = __is.readString();
        },
        false);

    IceGrid.ServerDescriptorPrx = Slice.defineProxy(IceGrid.CommunicatorDescriptorPrx, IceGrid.ServerDescriptor.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.ServerDescriptor, IceGrid.ServerDescriptorPrx);
    Slice.defineSequence(IceGrid, "ServerDescriptorSeqHelper", "Ice.ObjectHelper", false, "IceGrid.ServerDescriptor");

    /**
     * An IceBox service descriptor.
     *
     **/
    IceGrid.ServiceDescriptor = Slice.defineObject(
        function(adapters, propertySet, dbEnvs, logs, description, name, entry)
        {
            IceGrid.CommunicatorDescriptor.call(this, adapters, propertySet, dbEnvs, logs, description);
            this.name = name !== undefined ? name : "";
            this.entry = entry !== undefined ? entry : "";
        },
        IceGrid.CommunicatorDescriptor, undefined, 2,
        [
            "::Ice::Object",
            "::IceGrid::CommunicatorDescriptor",
            "::IceGrid::ServiceDescriptor"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.entry);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.entry = __is.readString();
        },
        false);

    IceGrid.ServiceDescriptorPrx = Slice.defineProxy(IceGrid.CommunicatorDescriptorPrx, IceGrid.ServiceDescriptor.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.ServiceDescriptor, IceGrid.ServiceDescriptorPrx);
    Slice.defineSequence(IceGrid, "ServiceDescriptorSeqHelper", "Ice.ObjectHelper", false, "IceGrid.ServiceDescriptor");

    /**
     * A communication template instance descriptor.
     *
     **/
    IceGrid.ServerInstanceDescriptor = Slice.defineStruct(
        function(template, parameterValues, propertySet, servicePropertySets)
        {
            this.template = template !== undefined ? template : "";
            this.parameterValues = parameterValues !== undefined ? parameterValues : null;
            this.propertySet = propertySet !== undefined ? propertySet : new IceGrid.PropertySetDescriptor();
            this.servicePropertySets = servicePropertySets !== undefined ? servicePropertySets : null;
        },
        false,
        function(__os)
        {
            __os.writeString(this.template);
            IceGrid.StringStringDictHelper.write(__os, this.parameterValues);
            IceGrid.PropertySetDescriptor.write(__os, this.propertySet);
            IceGrid.PropertySetDescriptorDictHelper.write(__os, this.servicePropertySets);
        },
        function(__is)
        {
            this.template = __is.readString();
            this.parameterValues = IceGrid.StringStringDictHelper.read(__is);
            this.propertySet = IceGrid.PropertySetDescriptor.read(__is, this.propertySet);
            this.servicePropertySets = IceGrid.PropertySetDescriptorDictHelper.read(__is);
        },
        5,
        false);
    Slice.defineSequence(IceGrid, "ServerInstanceDescriptorSeqHelper", "IceGrid.ServerInstanceDescriptor", false);

    /**
     * A template descriptor for communication or service templates.
     *
     **/
    IceGrid.TemplateDescriptor = Slice.defineStruct(
        function(descriptor, parameters, parameterDefaults)
        {
            this.descriptor = descriptor !== undefined ? descriptor : null;
            this.parameters = parameters !== undefined ? parameters : null;
            this.parameterDefaults = parameterDefaults !== undefined ? parameterDefaults : null;
        },
        false,
        function(__os)
        {
            __os.writeObject(this.descriptor);
            Ice.StringSeqHelper.write(__os, this.parameters);
            IceGrid.StringStringDictHelper.write(__os, this.parameterDefaults);
        },
        function(__is)
        {
            var self = this;
            __is.readObject(function(__o){ self.descriptor = __o; }, IceGrid.CommunicatorDescriptor);
            this.parameters = Ice.StringSeqHelper.read(__is);
            this.parameterDefaults = IceGrid.StringStringDictHelper.read(__is);
        },
        3,
        false);
    Slice.defineDictionary(IceGrid, "TemplateDescriptorDict", "TemplateDescriptorDictHelper", "Ice.StringHelper", "IceGrid.TemplateDescriptor", false, undefined, undefined, Ice.HashMap.compareEquals);

    /**
     * A service template instance descriptor.
     *
     **/
    IceGrid.ServiceInstanceDescriptor = Slice.defineStruct(
        function(template, parameterValues, descriptor, propertySet)
        {
            this.template = template !== undefined ? template : "";
            this.parameterValues = parameterValues !== undefined ? parameterValues : null;
            this.descriptor = descriptor !== undefined ? descriptor : null;
            this.propertySet = propertySet !== undefined ? propertySet : new IceGrid.PropertySetDescriptor();
        },
        false,
        function(__os)
        {
            __os.writeString(this.template);
            IceGrid.StringStringDictHelper.write(__os, this.parameterValues);
            __os.writeObject(this.descriptor);
            IceGrid.PropertySetDescriptor.write(__os, this.propertySet);
        },
        function(__is)
        {
            var self = this;
            this.template = __is.readString();
            this.parameterValues = IceGrid.StringStringDictHelper.read(__is);
            __is.readObject(function(__o){ self.descriptor = __o; }, IceGrid.ServiceDescriptor);
            this.propertySet = IceGrid.PropertySetDescriptor.read(__is, this.propertySet);
        },
        5,
        false);
    Slice.defineSequence(IceGrid, "ServiceInstanceDescriptorSeqHelper", "IceGrid.ServiceInstanceDescriptor", false);

    /**
     * An IceBox communication descriptor.
     *
     **/
    IceGrid.IceBoxDescriptor = Slice.defineObject(
        function(adapters, propertySet, dbEnvs, logs, description, id, exe, iceVersion, pwd, options, envs, activation, activationTimeout, deactivationTimeout, applicationDistrib, distrib, allocatable, user, services)
        {
            IceGrid.ServerDescriptor.call(this, adapters, propertySet, dbEnvs, logs, description, id, exe, iceVersion, pwd, options, envs, activation, activationTimeout, deactivationTimeout, applicationDistrib, distrib, allocatable, user);
            this.services = services !== undefined ? services : null;
        },
        IceGrid.ServerDescriptor, undefined, 2,
        [
            "::Ice::Object",
            "::IceGrid::CommunicatorDescriptor",
            "::IceGrid::IceBoxDescriptor",
            "::IceGrid::ServerDescriptor"
        ],
        -1,
        function(__os)
        {
            IceGrid.ServiceInstanceDescriptorSeqHelper.write(__os, this.services);
        },
        function(__is)
        {
            this.services = IceGrid.ServiceInstanceDescriptorSeqHelper.read(__is);
        },
        false);

    IceGrid.IceBoxDescriptorPrx = Slice.defineProxy(IceGrid.ServerDescriptorPrx, IceGrid.IceBoxDescriptor.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.IceBoxDescriptor, IceGrid.IceBoxDescriptorPrx);

    /**
     * A node descriptor.
     *
     **/
    IceGrid.NodeDescriptor = Slice.defineStruct(
        function(variables, serverInstances, servers, loadFactor, description, propertySets)
        {
            this.variables = variables !== undefined ? variables : null;
            this.serverInstances = serverInstances !== undefined ? serverInstances : null;
            this.servers = servers !== undefined ? servers : null;
            this.loadFactor = loadFactor !== undefined ? loadFactor : "";
            this.description = description !== undefined ? description : "";
            this.propertySets = propertySets !== undefined ? propertySets : null;
        },
        false,
        function(__os)
        {
            IceGrid.StringStringDictHelper.write(__os, this.variables);
            IceGrid.ServerInstanceDescriptorSeqHelper.write(__os, this.serverInstances);
            IceGrid.ServerDescriptorSeqHelper.write(__os, this.servers);
            __os.writeString(this.loadFactor);
            __os.writeString(this.description);
            IceGrid.PropertySetDescriptorDictHelper.write(__os, this.propertySets);
        },
        function(__is)
        {
            this.variables = IceGrid.StringStringDictHelper.read(__is);
            this.serverInstances = IceGrid.ServerInstanceDescriptorSeqHelper.read(__is);
            this.servers = IceGrid.ServerDescriptorSeqHelper.read(__is);
            this.loadFactor = __is.readString();
            this.description = __is.readString();
            this.propertySets = IceGrid.PropertySetDescriptorDictHelper.read(__is);
        },
        6,
        false);
    Slice.defineDictionary(IceGrid, "NodeDescriptorDict", "NodeDescriptorDictHelper", "Ice.StringHelper", "IceGrid.NodeDescriptor", false, undefined, undefined, Ice.HashMap.compareEquals);

    /**
     * A base class for load balancing policies.
     *
     **/
    IceGrid.LoadBalancingPolicy = Slice.defineObject(
        function(nReplicas)
        {
            Ice.Object.call(this);
            this.nReplicas = nReplicas !== undefined ? nReplicas : "";
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::LoadBalancingPolicy"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.nReplicas);
        },
        function(__is)
        {
            this.nReplicas = __is.readString();
        },
        false);

    IceGrid.LoadBalancingPolicyPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.LoadBalancingPolicy.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.LoadBalancingPolicy, IceGrid.LoadBalancingPolicyPrx);

    /**
     * Random load balancing policy.
     *
     **/
    IceGrid.RandomLoadBalancingPolicy = Slice.defineObject(
        function(nReplicas)
        {
            IceGrid.LoadBalancingPolicy.call(this, nReplicas);
        },
        IceGrid.LoadBalancingPolicy, undefined, 2,
        [
            "::Ice::Object",
            "::IceGrid::LoadBalancingPolicy",
            "::IceGrid::RandomLoadBalancingPolicy"
        ],
        -1, undefined, undefined, false);

    IceGrid.RandomLoadBalancingPolicyPrx = Slice.defineProxy(IceGrid.LoadBalancingPolicyPrx, IceGrid.RandomLoadBalancingPolicy.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.RandomLoadBalancingPolicy, IceGrid.RandomLoadBalancingPolicyPrx);

    /**
     * Ordered load balancing policy.
     *
     **/
    IceGrid.OrderedLoadBalancingPolicy = Slice.defineObject(
        function(nReplicas)
        {
            IceGrid.LoadBalancingPolicy.call(this, nReplicas);
        },
        IceGrid.LoadBalancingPolicy, undefined, 2,
        [
            "::Ice::Object",
            "::IceGrid::LoadBalancingPolicy",
            "::IceGrid::OrderedLoadBalancingPolicy"
        ],
        -1, undefined, undefined, false);

    IceGrid.OrderedLoadBalancingPolicyPrx = Slice.defineProxy(IceGrid.LoadBalancingPolicyPrx, IceGrid.OrderedLoadBalancingPolicy.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.OrderedLoadBalancingPolicy, IceGrid.OrderedLoadBalancingPolicyPrx);

    /**
     * Round robin load balancing policy.
     *
     **/
    IceGrid.RoundRobinLoadBalancingPolicy = Slice.defineObject(
        function(nReplicas)
        {
            IceGrid.LoadBalancingPolicy.call(this, nReplicas);
        },
        IceGrid.LoadBalancingPolicy, undefined, 2,
        [
            "::Ice::Object",
            "::IceGrid::LoadBalancingPolicy",
            "::IceGrid::RoundRobinLoadBalancingPolicy"
        ],
        -1, undefined, undefined, false);

    IceGrid.RoundRobinLoadBalancingPolicyPrx = Slice.defineProxy(IceGrid.LoadBalancingPolicyPrx, IceGrid.RoundRobinLoadBalancingPolicy.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.RoundRobinLoadBalancingPolicy, IceGrid.RoundRobinLoadBalancingPolicyPrx);

    /**
     * Adaptive load balancing policy.
     *
     **/
    IceGrid.AdaptiveLoadBalancingPolicy = Slice.defineObject(
        function(nReplicas, loadSample)
        {
            IceGrid.LoadBalancingPolicy.call(this, nReplicas);
            this.loadSample = loadSample !== undefined ? loadSample : "";
        },
        IceGrid.LoadBalancingPolicy, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::AdaptiveLoadBalancingPolicy",
            "::IceGrid::LoadBalancingPolicy"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.loadSample);
        },
        function(__is)
        {
            this.loadSample = __is.readString();
        },
        false);

    IceGrid.AdaptiveLoadBalancingPolicyPrx = Slice.defineProxy(IceGrid.LoadBalancingPolicyPrx, IceGrid.AdaptiveLoadBalancingPolicy.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.AdaptiveLoadBalancingPolicy, IceGrid.AdaptiveLoadBalancingPolicyPrx);

    /**
     * A replica group descriptor.
     *
     **/
    IceGrid.ReplicaGroupDescriptor = Slice.defineStruct(
        function(id, loadBalancing, proxyOptions, objects, description, filter)
        {
            this.id = id !== undefined ? id : "";
            this.loadBalancing = loadBalancing !== undefined ? loadBalancing : null;
            this.proxyOptions = proxyOptions !== undefined ? proxyOptions : "";
            this.objects = objects !== undefined ? objects : null;
            this.description = description !== undefined ? description : "";
            this.filter = filter !== undefined ? filter : "";
        },
        false,
        function(__os)
        {
            __os.writeString(this.id);
            __os.writeObject(this.loadBalancing);
            __os.writeString(this.proxyOptions);
            IceGrid.ObjectDescriptorSeqHelper.write(__os, this.objects);
            __os.writeString(this.description);
            __os.writeString(this.filter);
        },
        function(__is)
        {
            var self = this;
            this.id = __is.readString();
            __is.readObject(function(__o){ self.loadBalancing = __o; }, IceGrid.LoadBalancingPolicy);
            this.proxyOptions = __is.readString();
            this.objects = IceGrid.ObjectDescriptorSeqHelper.read(__is);
            this.description = __is.readString();
            this.filter = __is.readString();
        },
        6,
        false);
    Slice.defineSequence(IceGrid, "ReplicaGroupDescriptorSeqHelper", "IceGrid.ReplicaGroupDescriptor", false);

    /**
     * An application descriptor.
     *
     **/
    IceGrid.ApplicationDescriptor = Slice.defineStruct(
        function(name, variables, replicaGroups, serverTemplates, serviceTemplates, nodes, distrib, description, propertySets)
        {
            this.name = name !== undefined ? name : "";
            this.variables = variables !== undefined ? variables : null;
            this.replicaGroups = replicaGroups !== undefined ? replicaGroups : null;
            this.serverTemplates = serverTemplates !== undefined ? serverTemplates : null;
            this.serviceTemplates = serviceTemplates !== undefined ? serviceTemplates : null;
            this.nodes = nodes !== undefined ? nodes : null;
            this.distrib = distrib !== undefined ? distrib : new IceGrid.DistributionDescriptor();
            this.description = description !== undefined ? description : "";
            this.propertySets = propertySets !== undefined ? propertySets : null;
        },
        false,
        function(__os)
        {
            __os.writeString(this.name);
            IceGrid.StringStringDictHelper.write(__os, this.variables);
            IceGrid.ReplicaGroupDescriptorSeqHelper.write(__os, this.replicaGroups);
            IceGrid.TemplateDescriptorDictHelper.write(__os, this.serverTemplates);
            IceGrid.TemplateDescriptorDictHelper.write(__os, this.serviceTemplates);
            IceGrid.NodeDescriptorDictHelper.write(__os, this.nodes);
            IceGrid.DistributionDescriptor.write(__os, this.distrib);
            __os.writeString(this.description);
            IceGrid.PropertySetDescriptorDictHelper.write(__os, this.propertySets);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.variables = IceGrid.StringStringDictHelper.read(__is);
            this.replicaGroups = IceGrid.ReplicaGroupDescriptorSeqHelper.read(__is);
            this.serverTemplates = IceGrid.TemplateDescriptorDictHelper.read(__is);
            this.serviceTemplates = IceGrid.TemplateDescriptorDictHelper.read(__is);
            this.nodes = IceGrid.NodeDescriptorDictHelper.read(__is);
            this.distrib = IceGrid.DistributionDescriptor.read(__is, this.distrib);
            this.description = __is.readString();
            this.propertySets = IceGrid.PropertySetDescriptorDictHelper.read(__is);
        },
        10,
        false);
    Slice.defineSequence(IceGrid, "ApplicationDescriptorSeqHelper", "IceGrid.ApplicationDescriptor", false);

    /**
     * A "boxed" string.
     *
     **/
    IceGrid.BoxedString = Slice.defineObject(
        function(value)
        {
            Ice.Object.call(this);
            this.value = value !== undefined ? value : "";
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::BoxedString"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.value);
        },
        function(__is)
        {
            this.value = __is.readString();
        },
        false);

    IceGrid.BoxedStringPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.BoxedString.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.BoxedString, IceGrid.BoxedStringPrx);

    /**
     * A node update descriptor to describe the updates to apply to a
     * node of a deployed application.
     *
     **/
    IceGrid.NodeUpdateDescriptor = Slice.defineStruct(
        function(name, description, variables, removeVariables, propertySets, removePropertySets, serverInstances, servers, removeServers, loadFactor)
        {
            this.name = name !== undefined ? name : "";
            this.description = description !== undefined ? description : null;
            this.variables = variables !== undefined ? variables : null;
            this.removeVariables = removeVariables !== undefined ? removeVariables : null;
            this.propertySets = propertySets !== undefined ? propertySets : null;
            this.removePropertySets = removePropertySets !== undefined ? removePropertySets : null;
            this.serverInstances = serverInstances !== undefined ? serverInstances : null;
            this.servers = servers !== undefined ? servers : null;
            this.removeServers = removeServers !== undefined ? removeServers : null;
            this.loadFactor = loadFactor !== undefined ? loadFactor : null;
        },
        false,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeObject(this.description);
            IceGrid.StringStringDictHelper.write(__os, this.variables);
            Ice.StringSeqHelper.write(__os, this.removeVariables);
            IceGrid.PropertySetDescriptorDictHelper.write(__os, this.propertySets);
            Ice.StringSeqHelper.write(__os, this.removePropertySets);
            IceGrid.ServerInstanceDescriptorSeqHelper.write(__os, this.serverInstances);
            IceGrid.ServerDescriptorSeqHelper.write(__os, this.servers);
            Ice.StringSeqHelper.write(__os, this.removeServers);
            __os.writeObject(this.loadFactor);
        },
        function(__is)
        {
            var self = this;
            this.name = __is.readString();
            __is.readObject(function(__o){ self.description = __o; }, IceGrid.BoxedString);
            this.variables = IceGrid.StringStringDictHelper.read(__is);
            this.removeVariables = Ice.StringSeqHelper.read(__is);
            this.propertySets = IceGrid.PropertySetDescriptorDictHelper.read(__is);
            this.removePropertySets = Ice.StringSeqHelper.read(__is);
            this.serverInstances = IceGrid.ServerInstanceDescriptorSeqHelper.read(__is);
            this.servers = IceGrid.ServerDescriptorSeqHelper.read(__is);
            this.removeServers = Ice.StringSeqHelper.read(__is);
            __is.readObject(function(__o){ self.loadFactor = __o; }, IceGrid.BoxedString);
        },
        10,
        false);
    Slice.defineSequence(IceGrid, "NodeUpdateDescriptorSeqHelper", "IceGrid.NodeUpdateDescriptor", false);

    /**
     * A "boxed" distribution descriptor.
     *
     **/
    IceGrid.BoxedDistributionDescriptor = Slice.defineObject(
        function(value)
        {
            Ice.Object.call(this);
            this.value = value !== undefined ? value : new IceGrid.DistributionDescriptor();
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::IceGrid::BoxedDistributionDescriptor"
        ],
        -1,
        function(__os)
        {
            IceGrid.DistributionDescriptor.write(__os, this.value);
        },
        function(__is)
        {
            this.value = IceGrid.DistributionDescriptor.read(__is, this.value);
        },
        false);

    IceGrid.BoxedDistributionDescriptorPrx = Slice.defineProxy(Ice.ObjectPrx, IceGrid.BoxedDistributionDescriptor.ice_staticId, undefined);

    Slice.defineOperations(IceGrid.BoxedDistributionDescriptor, IceGrid.BoxedDistributionDescriptorPrx);

    /**
     * An application update descriptor to describe the updates to apply
     * to a deployed application.
     *
     **/
    IceGrid.ApplicationUpdateDescriptor = Slice.defineStruct(
        function(name, description, distrib, variables, removeVariables, propertySets, removePropertySets, replicaGroups, removeReplicaGroups, serverTemplates, removeServerTemplates, serviceTemplates, removeServiceTemplates, nodes, removeNodes)
        {
            this.name = name !== undefined ? name : "";
            this.description = description !== undefined ? description : null;
            this.distrib = distrib !== undefined ? distrib : null;
            this.variables = variables !== undefined ? variables : null;
            this.removeVariables = removeVariables !== undefined ? removeVariables : null;
            this.propertySets = propertySets !== undefined ? propertySets : null;
            this.removePropertySets = removePropertySets !== undefined ? removePropertySets : null;
            this.replicaGroups = replicaGroups !== undefined ? replicaGroups : null;
            this.removeReplicaGroups = removeReplicaGroups !== undefined ? removeReplicaGroups : null;
            this.serverTemplates = serverTemplates !== undefined ? serverTemplates : null;
            this.removeServerTemplates = removeServerTemplates !== undefined ? removeServerTemplates : null;
            this.serviceTemplates = serviceTemplates !== undefined ? serviceTemplates : null;
            this.removeServiceTemplates = removeServiceTemplates !== undefined ? removeServiceTemplates : null;
            this.nodes = nodes !== undefined ? nodes : null;
            this.removeNodes = removeNodes !== undefined ? removeNodes : null;
        },
        false,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeObject(this.description);
            __os.writeObject(this.distrib);
            IceGrid.StringStringDictHelper.write(__os, this.variables);
            Ice.StringSeqHelper.write(__os, this.removeVariables);
            IceGrid.PropertySetDescriptorDictHelper.write(__os, this.propertySets);
            Ice.StringSeqHelper.write(__os, this.removePropertySets);
            IceGrid.ReplicaGroupDescriptorSeqHelper.write(__os, this.replicaGroups);
            Ice.StringSeqHelper.write(__os, this.removeReplicaGroups);
            IceGrid.TemplateDescriptorDictHelper.write(__os, this.serverTemplates);
            Ice.StringSeqHelper.write(__os, this.removeServerTemplates);
            IceGrid.TemplateDescriptorDictHelper.write(__os, this.serviceTemplates);
            Ice.StringSeqHelper.write(__os, this.removeServiceTemplates);
            IceGrid.NodeUpdateDescriptorSeqHelper.write(__os, this.nodes);
            Ice.StringSeqHelper.write(__os, this.removeNodes);
        },
        function(__is)
        {
            var self = this;
            this.name = __is.readString();
            __is.readObject(function(__o){ self.description = __o; }, IceGrid.BoxedString);
            __is.readObject(function(__o){ self.distrib = __o; }, IceGrid.BoxedDistributionDescriptor);
            this.variables = IceGrid.StringStringDictHelper.read(__is);
            this.removeVariables = Ice.StringSeqHelper.read(__is);
            this.propertySets = IceGrid.PropertySetDescriptorDictHelper.read(__is);
            this.removePropertySets = Ice.StringSeqHelper.read(__is);
            this.replicaGroups = IceGrid.ReplicaGroupDescriptorSeqHelper.read(__is);
            this.removeReplicaGroups = Ice.StringSeqHelper.read(__is);
            this.serverTemplates = IceGrid.TemplateDescriptorDictHelper.read(__is);
            this.removeServerTemplates = Ice.StringSeqHelper.read(__is);
            this.serviceTemplates = IceGrid.TemplateDescriptorDictHelper.read(__is);
            this.removeServiceTemplates = Ice.StringSeqHelper.read(__is);
            this.nodes = IceGrid.NodeUpdateDescriptorSeqHelper.read(__is);
            this.removeNodes = Ice.StringSeqHelper.read(__is);
        },
        15,
        false);
/* slice2js browser-bundle-skip */
    exports.IceGrid = IceGrid;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
/* slice2js browser-bundle-skip-end */
