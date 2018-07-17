/**
 * Created by lq on 2018/7/3.
 */

/** 长字符串截取 省略 */
export function subString (str, len) {
  if (str) {
    return str.length > len ? str.substr(0, len) + '...' : str
  }
  return str
}

//字符串验证不为空
export function stringIsNotNull(str) {
  if (str === null || str === undefined || str === "" ) {
    return false;
  }
  return true
}




// regex
