import Vue from 'vue'
import Vuex from 'vuex'
import App from './Login.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@x/api'
import '../../styles/base.less'
Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(iView);
if (process.env.NODE_ENV !== 'production') {
  Vue.config.performance = true;
}
// 如果是非线上环境，加载 VConsole
if (process.env.NODE_ENV !== 'production') {
  let VConsole = require('vconsole/dist/vconsole.min.js');
  new VConsole();
}
/* Vue.config.errorHandler = function (err, vm, info) {
  let {
    message, // 异常信息
    name, // 异常名称
    stack // 异常堆栈信息
  } = err;
}; */

new Vue({
  router,
  render: h => h(App)
}).$mount('#login')