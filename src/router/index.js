import Vue from 'vue'
import Router from 'vue-router'

// 模块名大写
// 登陆模块
import LOGIN from '@/pages/login/login'
import GEOLOCATION from '@/pages/geoLocationTest'

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      component: LOGIN
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
