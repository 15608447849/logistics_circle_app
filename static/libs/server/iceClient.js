


const CALLBACK_ACTION={
  READY:1,
  COMPLETE:2,
  ERROR:3
};


function IceCallback(args){
  let len = arguments.length;
  if (len===1){
    this.completeCallback = arguments[0];
  }
  if (len===2){
    this.completeCallback = arguments[0];
    this.errorCallback = arguments[1];
  }
  if (len===3){
    this.readyCallback = arguments[0];
    this.completeCallback = arguments[1];
    this.errorCallback = arguments[2];
  }
}

IceCallback.prototype  = {
  constructor:IceCallback,
  onCallback:function (state,obj){
    if (state === CALLBACK_ACTION.READY){
      if (this.readyCallback){
        this.readyCallback(obj);
      }
    }
    else if (state === CALLBACK_ACTION.COMPLETE){
      if (this.completeCallback){
        this.completeCallback(obj);
      }
    }else if (state === CALLBACK_ACTION.ERROR){
      if (this.errorCallback){
        this.errorCallback(obj);
      }
    }

  },
};
/** 初始化ICE连接 */
function init(iceGridInstanceName,host,port){
  let args = ['--Ice.Default.Locator='+iceGridInstanceName+'/Locator:ws -h '+host+' -p '+port, 'idleTimeOutSeconds=300', '--Ice.MessageSizeMax=4096']
  communication = Ice.initialize(args)
  console.log("初始化ICE连接",host,port,communication)
}

function queryIce (moduleProxy,moduleName,methodName,args) {
    let len = arguments.length;
    let params = [];
    for (let i = 3; i < len - 1; i++) {
      params.push(arguments[i])
    }
  callback = arguments[len - 1];
  if (!callback || callback.constructor === IceCallback.constructor) {
      throw new Error("callback is not IceCallback!")
  }

  console.log("ICE : ",moduleName,methodName,params);
  console.log("ICE 1 : ",params);
  callback.onCallback(CALLBACK_ACTION.READY,params);
  console.log("ICE 2 : ",params);
  Ice.Promise.try(
      function () {
        let base = communication.stringToProxy(moduleName).ice_twoway().ice_secure(false);
        return moduleProxy.checkedCast(base).then(
          function(remoteProxy) {

            if (params.length>0) {
              temp = remoteProxy[methodName].apply(remoteProxy,params)
            }else{
              temp = remoteProxy[methodName].apply(remoteProxy)
            }
            temp.then(function (data) {
              callback.onCallback(CALLBACK_ACTION.COMPLETE,data);
            })
          }
        )

      }
    ).exception(function (e) {
    callback.onCallback(CALLBACK_ACTION.ERROR,e);
    })
}

//数字转long型
function num2long(num) {
  let MAX_INT = Math.pow(2, 53);
  if(num > MAX_INT || num < -MAX_INT) throw new Error("Can't convert number to long: out of bounds");
  let low = num >>> 0;
  let high = ((num - low) / 0x100000000) >>> 0;
  return new Ice.Long(high, low);
}

//long型转数字
function long2num (value, row, index) {
  let num = new Ice.Long(value.high, value.low);
  return num.toNumber()
}
//文本类型转long
function str2long(string){
  return num2long(Number(string))
}


















