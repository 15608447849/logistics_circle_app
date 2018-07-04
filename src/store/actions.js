import {
  USER_INFO,
  USER_TOKEN
} from './mutation-types'

export default {
  // 登录后保存用户信息等
  login (context, userInfo) {
    return new Promise((resolve, reject) => {
      // http.request(methods.GET, apis.login, userInfo)
      //   .then((response) => {
      //     if (response.status === 200 && response.data.status === 'SUCCESS') {
      //       context.commit(USER_INFO, response.data.result.user)
      //       context.commit(USER_TOKEN, response.data.result.userToken)
      //     }
      //     resolve(response)
      //   })
      //   /* eslint handle-callback-err: "warn" */
      //   .catch((error) => {
      //     reject(error);
      //   })
    })
  }
}
