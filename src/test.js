import Vue from 'vue'
import VueRouter from 'vue-router'
import method1 from '@components/tests/method1'

Vue.use(VueRouter)

export default new Router({
 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/text/:id',
      component: param
    }
  ]
})
