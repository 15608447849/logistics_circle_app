var initArgs = ['--Ice.Default.Locator=LBXTMS/Locator:ws -h 192.168.1.241 -p 4062', 'idleTimeOutSeconds=300', '--Ice.MessageSizeMax=4096']

// var Ice = require('ice').Ice
// var client = Ice.initialize(initArgs)
export function queryIce (serviceModuleInfoArray, args, callback) {
  try {
    var len = arguments.length
    if (len < 3) throw Error('function args length < 3')
    var params = []
    for (var i = 1; i < len - 1; i++) {
      params[i] = arguments[i]
    }
    console.log(initArgs, serviceModuleInfoArray, params, callback)
  } catch (e) {
    e.print()
  }
}

