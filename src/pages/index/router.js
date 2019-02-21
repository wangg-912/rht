import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
// 引入 Home 组件
/* const Home = () => import('@v/Home.vue'); */
import Home from '@@/Home.vue'
Vue.use(Router)
Vue.use(iView)
let router = new Router({
  mode: 'history',
  routes: [{
    path: '/index',
    name: 'index',
    component: Home,
    meta: {
      title: '首页'
    }
  }]
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  let title = to.meta && to.meta.title;
  if (title) {
    document.title = title; // 设置页面 title
  };
  !(to.name) ? next({
    name: 'index'
  }): next();
})
router.afterEach(route => {
  iView.LoadingBar.finish();
});
export default router