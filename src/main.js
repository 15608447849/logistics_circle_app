// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import business  from './components/business'
import ping from './components/ping'
import VueAMap from 'vue-amap';
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.use(business);
Vue.use(Vuex);
Vue.use(VueAMap);
Vue.use(MintUI);

Vue.config.productionTip = false;
Vue.prototype.$login = ping;
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
