import Vue from 'vue' //简写，实际加载的是node_modules/下的vue
import App from './App' //加载同目录下的公共组件
import router from './router'
import Vuex from 'vuex'
import store from  './store'


/*开发环境提示去掉*/
Vue.config.productionTip = false

Vue.use(Vuex);



/* eslint-disable */
new Vue({
  el: '#app',//挂载的element
  router,//路由，指向引入文件中的routes:[]
  store, //状态管理
  components: { App:App},  //注册的组件需要在顶部引入,这里是局部组件，只能在当前页面中使用
  template: '<App/>'  // render优先级 > template 优先级 >el优先级, template此处使用App.vue里面的模板，代替el绑定的dom元素
})
