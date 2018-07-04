// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import AMap from 'vue-amap';
import business  from './components/business'
Vue.use(business);
Vue.use(AMap);
Vue.use(Vuex);

Vue.config.productionTip = false;
// Vue.prototype.business = business

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'c942df1ef2ea97f1eb415f9743bf6cf2',
  // 插件集合
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
