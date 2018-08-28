import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import business  from './interfaces/business'
import YDUI from 'vue-ydui';
import Cube from 'cube-ui'
import verifyUtil from './utils/verifyUtil'
import message from './utils/message'
import VueAMap from 'vue-amap';
import { Dialog } from 'vant';
import { Popup } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Icon } from 'vant';

import  {
  ToastPlugin
} from 'vux'
import Vant from 'vant';
import { PasswordInput, NumberKeyboard } from 'vant';
// import 'lib-flexible'
import './assets/lib/ydui.flexible';
import 'vue-ydui/dist/ydui.rem.css';
import './assets/css/index.css';
import 'vant/lib/vant-css/index.css';


Vue.use(Vant);
Vue.use(business);
Vue.use(Vuex);
Vue.use(YDUI);
Vue.use(Cube);
Vue.use(VueAMap);
Vue.use(ToastPlugin);
Vue.use(PasswordInput).use(NumberKeyboard);
Vue.use(Dialog);
Vue.use(Popup);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Icon);

Vue.config.productionTip = false;
Vue.prototype.verifyUtil = verifyUtil;
Vue.prototype.message = message;

Vue.prototype.$app_store = store;

VueAMap.initAMapApiLoader({
  key: 'fd1c441c553b00833ccb5ccb9cdd8281',
  plugin: ['AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0.11'
});

document.addEventListener('deviceready', function() {
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  });
  window.navigator.splashscreen.hide()
}, false);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
