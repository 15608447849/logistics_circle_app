import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

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

Vue.use(Router);

// const routes = [
//   {
//     path: '/',
//     component: INDEX,
//     meta: {
//       requireAuth: true
//     },
//     children: [
//       {
//         path: '',
//         component: HOME,
//       },
//       {
//         name: 'circle',
//         path: '/circle',
//         component: CIRCLE
//       },
//       {
//         name: 'information',
//         path: '/information',
//         component: INFO
//       },
//       {
//         name: 'order',
//         path: '/order',
//         component: ORDER
//       }
//     ]
//   },
//   {
//     path: '/login',
//     component: LOGIN
//   },
//   {
//     path: '/register',
//     component: REGISTER
//   },
//   {
//     path: '/login',
//     component: LOGIN
//   },
//   {
//     path: '/geo',
//     component: GEOLOCATION
//   }
// ]
//
// const router = new Router({
//   routes
// })
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (to.path === '/login') {
//       next()
//     } else {
//       // if (store.state.users.userToken) {
//       //   next()
//       // } else {
//       //   next({
//       //     path: '/login',
//       //     query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       //   })
//       // }
//     }
//   } else {
//     next()
//   }
// })
//
// export default router

export default new Router({
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
    }
  ]
})
