import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import Router from 'vue-router'
import App from '@/App.vue'
Vue.use(Router);

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(App, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text())
  })
})