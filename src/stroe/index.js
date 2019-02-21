import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* 我们要把我们需要做状态管理的量放到这里来， 然后在后面的操作动它 */
  state: {
    headMenus: [{
        iconCls: "md-contact",
        title: "用户信息",
        name: "contact"
      },
      {
        iconCls: "ios-cog",
        title: "设置",
        name: "setting"
      },
      {
        iconCls: "md-closed-captioning",
        title: "版权信息",
        name: "copyright"
      },
      {
        iconCls: "md-power",
        title: "退出登录",
        name: "loginout"
      }
    ]
  },
  /* 更改状态管理器的 store 中的状态的唯一方法是提交 mutation */
  mutations: {
    setMenus(state) {
      state.headMenus.push(state);
    }

  },
  /* action 的作用跟mutation的作用是很相似的， 它提交mutation，不能直接改变状态，可以包含任意异步操作 */
  actions: {

  },
  /* 过滤状态数据并针对状态数据的操作*/
  getters: {
    getMenus(state) {
      return state.headMenus.filter(item => item.name != '') /* filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组 */
    }
  },
})