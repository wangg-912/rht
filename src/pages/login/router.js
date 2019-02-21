import Vue from 'vue'
import Router from 'vue-router'
// 引入 Home 组件
/* const Home = () => import('@v/Home.vue'); */
import Login from '@@/Login.vue'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: ''
    }
  }]
})
router.beforeEach((to, from, next) => {
  let title = to.meta && to.meta.title;
  if (title) {
    document.title = title; // 设置页面 title
  }
  (!to.name) ? next({
    name: 'login'
  }): next();
})
export default router