import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {
  UPDATE_LOADING_STATUS
} from '@/store/mutation-types'

// 模块名大写
// 登陆模块
import REGISTER from '@/pages/login/register' // 用户注册
import SERVICESTATEMENT from '@/pages/login/serviceStatement' //用户协议书
import LOGIN from '@/pages/login/index' // 用户账号密码登录
import FIRSTLONG from '@/pages/login/firstLong' // 用户快速登录
import SMSLOGIN from '@/pages/login/smsLogin' // 短信登录
import REPWD from '@/pages/login/retrievePwd'// 找回密码
import UPDATAPWD from '@/pages/login/updatapwd' // 修改密码
import VERIFICATION from '@/pages/login/verification' // 手机验证码验证
import CONFIRMPWD from '@/pages/login/confirmpwd' // 修改密码确认密码
import RELEASE_DETAILS from '@/pages/information/releaseDetails'// 信息大厅订单详情模块


// 初始页
import INDEX from '@/pages/index'
// 首页模块
import HOME from '@/pages/home/index'
//首面我的二维码页面
import DIMENSIONALCODE from '@/pages/home/dimensionalCode'
//首面扫一扫
import SCAN from '@/pages/home/scan'
// 首页模块个人信息中的基本信息模块
import BASICINFORMATION from '@/pages/home/basiInformation'
// 首页模块个人信息中的基本信息模块下的发票信息
import INVOICE from '@/pages/home/invoice'
// 首页模块个人信息中的基本信息模块下的企业信息
import ENTERPRISE from '@/pages/home/enterprise'
// 首页模块个人信息中的基本信息模块下的证件信息
import CERTIFICATES from '@/pages/home/certificates'
// 圈子订单模块
import CIRCLE from '@/pages/circle/index'
// 信息大厅模块
import INFO from '@/pages/information/index'
// 我的订单模块
import ORDER from '@/pages/order/index'

// 搜索页
import SEARCH from '@/components/searchInput'
// 信息大厅发布订单模块
import RELEASE_ORDERS from '@/pages/information/releaseOrders'

// 订单 发布/接受 详情
import ORDER_DETAIL from '@/pages/order/orderDetail.vue'

// 我的接收
import ACCEPT from '@/pages/order/acceptOrders'// 列表
import ACCEPT_DETAILS from '@/pages/order/acceptDetails'// 详情
import ENTRY_TRAVEL from '@/pages/order/entryTravel'// 录入行程
// 我的发布

import PICK_GOODS_CODE from '@/pages/order/pickGoodsCode'// 收货码
import PICK_GOODS_PIC from '@/pages/order/pickGoodsPic'// 收货照片
import SCHEDULE_PLAY_BACK from '@/pages/order/schedulePlayBack'// 行程回放
// 业务员管理
import SALES_LIST from '@/pages/salesManages/index.vue'
import SALES_INFO from '@/pages/salesManages/info.vue'
// 个人中心
import USER_INFO from '@/pages/center/userInfo'
import ENT_INFO from '@/pages/center/entInfo'
import VAT_INFO from '@/pages/center/vatInfo'
import CART_INFO from '@/pages/center/cardInfo'
import DRIVER_MGR from '@/pages/center/driverMgr/index'
import ADDDRIVER from '@/pages/center/driverMgr/info'
import MYCIRCLE from '@/pages/center/myCircle/index'
import ADDFRIEND from '@/pages/center/myCircle/addFriend'
import FRIENDDETAILS from '@/pages/center/myCircle/friendDetails'
import SEARCHFRIEND from '@/pages/center/myCircle/searchFriend'
import RELEASESEARCH from '@/pages/center/myRelease/releaseSearch'
import SEEDISPATCH from '@/pages/center/myRelease/seeDispatch'
import AGAINRELEASE from '@/pages/order/againRelease'
import PREVIEW  from '@/pages/order/preview'
import EVALUATE from '@/pages/order/evaluateOrder'
import COMMONLYROUTE from '@/pages/center/commonlyRoute/index'
import ADDROUTE from '@/pages/center/commonlyRoute/addRoute'
import ROUTEDETAILS from '@/pages/center/commonlyRoute/routeDetails'
import BLACKLIST from '@/pages/center/blacklist/index'
import BLACKDETAILS from '@/pages/center/blacklist/blackDetails'
import MYINFORMATION from '@/pages/center/myInformation/index'
import SEEINFORMATION from '@/pages/center/myInformation/seeinformation'
import SETTING from '@/pages/center/setting/index'
import CURRENCY from '@/pages/center/setting/currency'
import ACCOUNTSECURITY from '@/pages/center/setting/accountSecurity'
import TOACCOUNT from '@/pages/center/setting/toaccountUpdataPwd'
import UPDATAPHONE from '@/pages/center/setting/updataPhone'
import REPUBORDER from '@/pages/order/repubOrder'

// 城市选择
import CITY from '@/components/citySelector'
// 高德地图
import GEOLOCATION from '@/components/geoLocation'

Vue.use(Router);

/**
 * 嵌套的路由/视图表
 * 模块化的、基于组件的路由配置
 * 路由参数、查询、通配符
 * 基于 Vue.js 过渡系统的视图过渡效果
 * 细粒度的导航控制
 * 带有自动激活的 CSS class 的链接
 * HTML5 历史模式或 hash 模式，在 IE9 中自动降级
 * 自定义的滚动条行为
 * @type {VueRouter}
 */
const vueRouter = new Router({
  routes: [
    {
      path: '/',
      component: INDEX,
      children: [
        {
          path: '',
          component: HOME,
          meta: {
            keepAlive: true,
            requireAuth: false
          },
        },
        {
          path: '/circle',
          component: CIRCLE,
          meta: {
            keepAlive: true,
            requireAuth: true
          },
        },
        {
          name: 'information',
          path: '/information',
          component: INFO,
          meta: {
            keepAlive: true,
          },
        },
        {
          name: 'order',
          path: '/order',
          component: ORDER,
          meta: {
            requireAuth: true
          },
        }
      ]
    },
    {
      name: 'basiInformation',
      path: '/home/basiInformation',
      component: BASICINFORMATION
    },
    {
      name: 'basiInformation',
      path: '/home/invoice',
      component: INVOICE
    },
    {
      name: 'basiInformation',
      path: '/home/enterprise',
      component: ENTERPRISE
    },
    {
      name: 'basiInformation',
      path: '/home/certificates',
      component: CERTIFICATES
    },
    {
      path: '/login',
      component: LOGIN
    },
    {
      path: '/login/firstLong',
      component: FIRSTLONG
    },
    {
      path: '/register',
      component: REGISTER
    },
    {
      path: '/login/serviceStatement',
      component: SERVICESTATEMENT
    },
    {
      path: '/login',
      component: LOGIN
    },
    {
      path: '/retrievePwd',
      component: REPWD
    },
    {
      path: '/login/Verification',
      component: VERIFICATION
    },
    {
      path: '/login/confirmpwd',
      component: CONFIRMPWD
    },
    {
      path: '/login/index',
      component: LOGIN
    },
    {
      path: '/register',
      component: REGISTER
    },
    {
      path: '/smsLogin',
      component: SMSLOGIN
    },
    {
      path: '/geo',
      component: GEOLOCATION
    },
    {
      name: 'simpleSearch',
      path: '/search',
      component: SEARCH
    },
    {
      name: 'releaseOrders',
      path: '/information/releaseOrders',
      component: RELEASE_ORDERS,
      meta: {
        keepAlive: true,
        requireAuth: true,
        isUseCache: false,
      }
    },
    {
      path: '/information/releaseDetails',
      component: RELEASE_DETAILS,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/city',
      component: CITY,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/userInfo',
      component: USER_INFO,
      meta: {
        keepAlive: true,
      }
    },
    {
      name: 'entInfo',
      path: '/entInfo',
      component: ENT_INFO
    },
    {
      name: 'vatInfo',
      path: '/vatInfo',
      component: VAT_INFO
    },
    {
      name: 'cartInfo',
      path: '/cartInfo',
      component: CART_INFO
    },
    {
      path: '/center/driverMgr/index',
      component: DRIVER_MGR
    },
    {
      name: 'driverInfo',
      path: '/center/driverMgr/info',
      component: ADDDRIVER
    },
    {
      path: '/center/myCircle/index',
      component: MYCIRCLE
    },
    {
      path: '/center/myCircle/addFriend',
      component: ADDFRIEND
    },
    {
      path: '/center/myCircle/friendDetails',
      component: FRIENDDETAILS
    },
    {
      path: '/center/myCircle/searchFriend',
      component: SEARCHFRIEND
    },
    {
      path: '/center/myRelease/releaseSearch',
      component: RELEASESEARCH
    },
    {
      path: '/center/myRelease/seeDispatch',
      component: SEEDISPATCH
    },
    {
      name:  'pickGoodsPic',
      path: '/order/pickGoodsPic',
      component: PICK_GOODS_PIC
    },
    {
      name: 'pickGoodsCode',
      path: 'order/pickGoodsCode',
      component: PICK_GOODS_CODE
    },
    {
      name: 'evaluateOrder',
      path: '/order/evaluateOrder',
      component: EVALUATE
    },

    {
      name: 'againRelease',
      path: '/order/againRelease',
      component: AGAINRELEASE,
      meta: {
        keepAlive: true,
        isUseCache: false,
      }
    },
    {
      name: 'preview',
      path: '/order/preview',
      component: PREVIEW
    },

    {
      path: '/center/commonlyRoute/index',
      component: COMMONLYROUTE
    },
    {
      path: '/center/commonlyRoute/addRoute',
      component: ADDROUTE
    },
    {
      name: 'routeDetails',
      path: '/center/commonlyRoute/routeDetails',
      component: ROUTEDETAILS
    },
    {
      path: '/center/blacklist/index',
      component: BLACKLIST
    },
    {
      path: '/center/blacklist/blackDetails',
      component: BLACKDETAILS
    },
    {
      path: '/center/myInformation/index',
      component: MYINFORMATION
    },
    {
      path: '/center/myInformation/seeInformation',
      component: SEEINFORMATION
    },
    {
      path: '/center/setting/index',
      component: SETTING
    },
    {
      path: '/center/setting/currency',
      component: CURRENCY
    },
    {
      path: '/center/setting/accountSecurity',
      component: ACCOUNTSECURITY
    },
    {
      path: '/center/setting/toaccountUpdataPwd',
      component: TOACCOUNT
    },
    {
      path: '/center/setting/updataPhone',
      component: UPDATAPHONE
    },
    {
      path: '/home/dimensionalCode',
      component: DIMENSIONALCODE
    },
    {
      name: 'orderDetail',
      path: '/order/orderDetail',
      component: ORDER_DETAIL
    },
    {
      path: '/order/acceptOrders',
      component: ACCEPT,
    },
    {
      path: '/order/acceptDetails',
      component: ACCEPT_DETAILS
    },
    {
      path: '/home/scan',
      component: SCAN
    },
    {
      name: 'salesManages',
      path: '/salesManages/index',
      component: SALES_LIST
    },
    {
      name: 'salesInfo',
      path: '/salesManages/info',
      component: SALES_INFO
    },
    {
      name: 'schedulePlayBack',
      path: '/order/schedulePlayBack',
      component: SCHEDULE_PLAY_BACK
    },
    {
      name: 'entryTravel',
      path: '/order/entryTravel',
      component: ENTRY_TRAVEL
    },
    {
      name: 'repuborder',
      path: '/order/repuborder',
      component: REPUBORDER,
      meta: {
        keepAlive: true,
      }
    }
  ]
});

/**
 * 导航解析流程
 * 当前项目VUE版本2.5.2
 * 1。导航被触发。
 * 2。在失活的组件里调用离开守卫。
 * 3。调用全局的 beforeEach 守卫。
 * 4。在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
 * 5。在路由配置里调用 beforeEnter。
 * 6。解析异步路由组件。
 * 7。在被激活的组件里调用 beforeRouteEnter。
 * 8。调用全局的 beforeResolve 守卫 (2.5+)。
 * 9。导航被确认。
 * 10。调用全局的 afterEach 钩子。
 * 11。触发 DOM 更新。
 * 12。用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
 * */

// 全局前置守卫
vueRouter.beforeEach(function (to, from, next) {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 通过vuex state获取当前的token是否存在
    if (store.state.userId) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    /* 显示加载中动画 */
    store.commit(UPDATE_LOADING_STATUS, true);
    /* 路由权限验证 */
    /* 登陆验证 */
    next();
  }
});

// 全局后置钩子, 也就是说页面加载完毕后执行 ，该钩子中没有next() 无法改变路由本身
vueRouter.afterEach(route => {
  /* 隐藏加载中动画 */
  store.commit(UPDATE_LOADING_STATUS, false);
});

vueRouter.beforeRouteLeave

export default vueRouter
