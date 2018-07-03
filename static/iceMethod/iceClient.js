
var initArgs = ['--Ice.Default.Locator=LBXTMS/Locator:ws -h 192.168.1.241 -p 40620', 'idleTimeOutSeconds=300', '--Ice.MessageSizeMax=4096']
var client = Ice.initialize(initArgs)
console.log("初始化ICE环境", initArgs)

function queryIce (moduleProxy,moduleName,methodName,methodArgs) {
    var len = arguments.length
  //   if (len < 3) throw Error('function args length < 3')
  //
    var params = new Array()
    for (var i = 3; i < len - 2; i++) {
      // params[i] = arguments[i]
      params.push(arguments[i])
    }
  success = arguments[arguments.length -2]
  fail = arguments[arguments.length -1]

    Ice.Promise.try(
      function(resolve,reject) {

         moduleProxy.checkedCast(client.stringToProxy(moduleName).ice_twoway().ice_secure(false))
           .then(
          function(remoteProxy) {
            if (params.length>0) {
              remoteProxy[methodName].apply(remoteProxy,params).then(success).catch(fail)
            }else{
              remoteProxy[methodName].apply(remoteProxy).then(success).catch(fail)
            }
          }
        )
      }
    ).exception(
      function (ex) {
        fail(ex)
          // console.log(ex);
          process.exit(1);
      }
    );


}




