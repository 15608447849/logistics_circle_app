// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import business  from './components/business'
import VueAMap from 'vue-amap';
import YDUI from 'vue-ydui';
import VueResource from 'vue-resource'
import { Tabbar, TabItem } from 'mint-ui';
import {PullRefresh} from 'vue-ydui/dist/lib.rem/pullrefresh';
import verifyUtil from './utils/verifyUtil'

import 'mint-ui/lib/style.css'
import 'vue-ydui/dist/ydui.rem.css';
import 'lib-flexible/flexible'
import './assets/css/index.css'


// 局部引用组件
// 底部导航栏
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(PullRefresh.name, PullRefresh);

Vue.use(business);
Vue.use(Vuex);
Vue.use(VueAMap);
Vue.use(YDUI);
Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.prototype.verifyUtil = verifyUtil;
Vue.prototype.$app_store = store;
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
