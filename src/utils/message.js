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
  static toast(context, str, state) {
    context.$dialog.toast({
      mes: str,
      icon: state,
      timeout: 1500
    });
  }
}

