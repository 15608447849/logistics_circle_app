


function init(host,port){
  var args = ['--Ice.Default.Locator=LBXTMS/Locator:ws -h '+host+' -p '+port, 'idleTimeOutSeconds=300', '--Ice.MessageSizeMax=4096']
  communication = Ice.initialize(args)
  console.log("init ice param ",args,communication)
}

function queryIce (moduleProxy,moduleName,methodName,args) {
    var len = arguments.length
    var params = new Array()
    for (var i = 3; i < len - 1; i++) {
      params.push(arguments[i])
    }
  callback = arguments[len -1]
    Ice.Promise.try(
         moduleProxy.checkedCast(communication.stringToProxy(moduleName).ice_twoway().ice_secure(false))
           .then(
          function(remoteProxy) {
            if (params.length>0) {
              remoteProxy[methodName].apply(remoteProxy,params).then(callback)
            }else{
              remoteProxy[methodName].apply(remoteProxy).then(callback)
            }
          }
        )
    ).exception(function (e) {
      console.log(e);
    })

}























