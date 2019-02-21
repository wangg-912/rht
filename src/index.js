import Vue from 'vue'

Vue.config.productionTip = false

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
let globalObj = {
  name: 'wg'
};

let test1 = new Vue({
  template: `<div>
            <span>{{name}}</span> 
        <div>`,
  data: globalObj
});

let test2 = new Vue({
  template: `<div>
            <span>{{name}}</span> 
        <div>`,
  data: globalObj
});
globalObj.name = 'hello,text1';
/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */