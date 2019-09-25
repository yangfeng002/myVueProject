import Vue from 'vue' //简写，实际加载的是node_modules/下的vue
import App from './App' //加载同目录下的公共组件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',//挂载的element
  router:router,//路由，指向引入文件中的routes:[]
  components: { App:App },//注册的组件需要在顶部引入
  template: '<App/>'  // render优先级 > template >el,template此处使用App.vue里面的模板，代替el绑定的dom元素
})
