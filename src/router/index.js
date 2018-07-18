import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {
  UPDATE_LOADING_STATUS
} from '@/store/mutation-types'

// 模块名大写
// 登陆模块
import REGISTER from '@/pages/login/register' // 用户注册
import LOGIN from '@/pages/login/index' // 用户登录
import SMSLOGIN from '@/pages/login/smsLogin' // 短信登录
import REPWD from '@/pages/login/retrievePwd'// 找回密码
import UPDATAPWD from '@/pages/login/updatapwd' // 修改密码
import VERIFICATION from '@/pages/login/verification' // 手机验证码验证
import CONFIRMPWD from '@/pages/login/confirmpwd' // 修改密码确认密码
import ISSUEDETAILS from '@/pages/information/issueDetails'// 信息大厅订单详情模块


// 初始页
import INDEX from '@/pages/index'
// 首页模块
import HOME from '@/pages/home/index'
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
import ISSUE from '@/pages/information/issue'



// 测试页面
import TEST from '@/interfaces/test'
// picker测试
import PICKER from '@/pages/pickerTest'
// 信息大厅测试
import infoTest from '@/pages/infoTest'
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
      path: '/test',
      component: TEST
    },
    {
      path: '/',
      component: INDEX,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          component: HOME,
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
          name: 'circle',
          path: '/circle',
          component: CIRCLE
        },
        {
          name: 'information',
          path: '/information',
          component: INFO
        },
        {
          name: 'order',
          path: '/order',
          component: ORDER,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      component: LOGIN
    },
    {
      path: '/register',
      component: REGISTER
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
      path: '/search',
      component: SEARCH
    },
    {
      path: '/information/issue',
      component: ISSUE
    },
    {
      name: 'picker',
      path: '/picker',
      component: PICKER
    },
    {
      path: '/information/issueDetails',
      component: ISSUEDETAILS
    },
    {
      path: '/infoTest',
      component: infoTest
    },
    {
      path: '/city',
      component: CITY
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
    if (store.state.userToken) {
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
