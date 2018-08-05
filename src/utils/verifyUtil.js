export default class verifyUtil {
  /**
   * 判断字符串是否为空
   * @param str
   * @returns {boolean}
   */
  static isNull(str) {
    return str == null || str.length === 0 || str === '';
  }

  /**
   * 判断数组是否为空
   * @param str
   * @returns {boolean}
   */
  static isNullArray(arr) {
    return arr == null || arr.length === 0 || arr === [];
  }

  /**
   * 判断注册登陆密码信息
   * @param str
   * @returns {boolean}
   */
  static isEffPwd(str) {
    return str === null || str === '' || str.length < 6
  }

  /**
   * 验证密码一致
   * @param strA
   * @param strB
   * @returns {boolean}
   */
  static isTwoPsd(strA, strB) {
    return strA !== strB
  }

  /**
   * @desc   判断是否为手机号
   * @param  {String|Number} str
   * @return {Boolean}
   */
  static isPhoneNum(str) {
    return ! /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
  }

  /**
   * @desc  判断是否为身份证号
   * @param  {String|Number} str
   * @return {Boolean}
   */
  static isIdCard(str) {
    return ! /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  }

  static stringIsBoolean(str){
    if(this.isString(str)) {
      return eval(str.toLowerCase())
    }
    return str
  }

  static isString(str){
    return (typeof str==='string')&&str.constructor===String;
  }

}
