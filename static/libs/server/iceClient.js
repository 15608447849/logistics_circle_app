
function init(iceGridInstanceName,host,port){

  let args = ['--Ice.Default.Locator='+iceGridInstanceName+'/Locator:ws -h '+host+' -p '+port, 'idleTimeOutSeconds=300', '--Ice.MessageSizeMax=4096']
  communication = Ice.initialize(args)
  console.log("初始化ICE连接",host,port,communication)
}

function queryIce (moduleProxy,moduleName,methodName,args) {
    var len = arguments.length
    var params = new Array()
    for (var i = 3; i < len - 1; i++) {
      params.push(arguments[i])
    }
  callback = arguments[len -1]

  console.log("ICE : ",moduleName,methodName,params)

    Ice.Promise.try(
      function () {
        var base = communication.stringToProxy(moduleName).ice_twoway().ice_secure(false);
        return moduleProxy.checkedCast(base).then(
          function(remoteProxy) {
            if (params.length>0) {
              remoteProxy[methodName].apply(remoteProxy,params).then(callback)
            }else{
              remoteProxy[methodName].apply(remoteProxy).then(callback)
            }
          }
        )

      }
    ).exception(function (e) {
      console.log("ICE 错误: "+ e);
    })

}

//数字转long型
function num2long(num) {
  let MAX_INT = Math.pow(2, 53);
  if(num > MAX_INT || num < -MAX_INT)
    throw new Error("Can't convert number to long: out of bounds");
  var low = num >>> 0;
  var high = ((num - low) / 0x100000000) >>> 0;
  return new Ice.Long(high, low);
}

//long型转数字
function long2num (value, row, index) {
  var num = new Ice.Long(value.high, value.low);
  return num.toNumber()
}
//文本类型转long
function str2long(string){
  return num2long(Number(string))
}


















