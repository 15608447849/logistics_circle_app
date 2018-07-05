import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
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

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: INDEX,
//       meta: {
//         requireAuth: true
//       },
//       children: [
//         {
//           path: '',
//           component: HOME,
//         },
//         {
//           name: 'circle',
//           path: '/circle',
//           component: CIRCLE
//         },
//         {
//           name: 'information',
//           path: '/information',
//           component: INFO
//         },
//         {
//           name: 'order',
//           path: '/order',
//           component: ORDER
//         }
//       ]
//     },
//     {
//       path: '/login',
//       component: LOGIN
//     },
//     {
//       path: '/register',
//       component: REGISTER
//     },
//     {
//       path: '/login',
//       component: LOGIN
//     },
//     {
//       path: '/geo',
//       component: GEOLOCATION
//     },
//     {
//       path: '/search',
//       component: SEARCH
//
//     }
//   ]
// })

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

vueRouter.beforeEach(function (to, from, next) {
  /* 显示加载中动画 */
  store.commit(UPDATE_LOADING_STATUS, true);
  console.log('钩子执行了');
  next();
});

vueRouter.afterEach(route => {
  /* 隐藏加载中动画 */
  store.commit(UPDATE_LOADING_STATUS, false);
});

export default vueRouter
