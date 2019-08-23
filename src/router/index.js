import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* @   相当于src路径
   ./   相当于当前目录
   ../   父目录
*/

/* 使用路由下面的语句不可缺少  Vue.use(Router) */
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias:'hello'
    }
  ],
  mode:'history'/*设置当前属性：访问请求时不会加载# */
})
