export default class message {
  /**
   * YDUI notify
   * @param context
   * @param str
   */
  static notify(context, str) {
    context.$dialog.notify({
      mes: str,
      timeout: 1500
    });
  }
  /**
   * YDUI toast
   * @param context
   * @param str
   * @param state success error
   */
  static toast(context, str) {
    context.$dialog.toast({
      mes: str,
      icon: state,
      timeout: 1500
    });
  }

  static toast(context, str, state) {
    context.$dialog.toast({
      mes: str,
      icon: state,
      timeout: 1500
    });
  }

  /**
   * 非模态信息提醒，无需用户交互。
   * @param context 上下文对象
   * @param String type 类型 loading/correct/error/warn
   * @param String txt 提示信息
   * @param Boolean mask 遮罩
   * Toast 单例模式 对应的视图层也只存在一份
   * @constructor
   */
  static Toast(context,type,txt,mask) {
    const toast = context.$createToast({
      time: 1500,
      txt: txt,
      mask: mask,
      type: type
    });
    toast.show()
  }

  /**
   *
   * @param context 上下文对象
   * @param content 内容
   * @returns {Promise<any>} resolve reject
   */
  static showAlert(context, content) {
    return new Promise((resolve, reject) => {
      context.$createDialog({
        type: 'confirm',
        title: '提示',
        content: content,
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          // 订单移除
          // 确认操作后 移除列表
          resolve()
        },
        onCancel: () => {
          reject()
        }
      }).show()
    });

  }
}

