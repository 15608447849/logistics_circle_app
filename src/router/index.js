import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {
  UPDATE_LOADING_STATUS
} from '@/store/mutation-types'

// 模块名大写
// 登陆模块
import REGISTER from '@/pages/register/index'

import LOGIN from '@/pages/login/index'
// 高德地图测试
import GEOLOCATION from '@/pages/geoLocationTest'
// 初始页
import INDEX from '@/pages/index'
// 首页模块
import HOME from '@/pages/home/index'
// 圈子订单模块
import CIRCLE from '@/pages/circle/index'
// 信息大厅模块
import INFO from '@/pages/information/index'
// 我的订单模块
import ORDER from '@/pages/order/index'
// 搜索页
import SEARCH from '@/components/SimpleSearchInput'

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
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          component: HOME,
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
          component: ORDER
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
      path: '/geo',
      component: GEOLOCATION
    },
    {
      path: '/search',
      component: SEARCH
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
  /* 显示加载中动画 */
  store.commit(UPDATE_LOADING_STATUS, true);
  /* 路由权限验证 */
  /* 登陆验证 */
  next();
});

// 全局后置钩子, 也就是说页面加载完毕后执行 ，该钩子中没有next() 无法改变路由本身
vueRouter.afterEach(route => {
  /* 隐藏加载中动画 */
  store.commit(UPDATE_LOADING_STATUS, false);
});

export default vueRouter
