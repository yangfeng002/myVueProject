/**
 *
 * 功能描述:
 * @author    fy
 * @version  [版本号, 2019/9/25 9:51]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
import Vue from 'vue'
import Vuex from 'vuex'
/*如果单独运行js文件，可以采用require方式引入*/
// const Vue = require('vue');
// const Vuex  = require('vuex')

Vue.use(Vuex);

//module处理vuex中store状态多的问题
const ModuleA = {
    state:{
      state:1
    },
    getters:{
      doubleCount (state) {
        return state.count * 2
      }
    },
    mutations:{
      increment (state) {
        // 这里的 `state` 对象是模块的局部状态
        state.count++
      }
    },
    actions:{
      incrementIfOddOnRootSum({ state, commit, rootState }) {
        if ((state.count + rootState.count) % 2 === 1) {
          commit('increment')
        }
      }
    }
}


const store = new Vuex.Store({
   state:{
      count:0,
      todos:[
        {id:1,text:'学习vuex',done:true},
        {id:2,text:'反馈问题',done:true},
        {id:3,text:'跑步1.5小时',done:false}
      ]
   },
  getters: {
    doneTodos: (state) => {
       return state.todos
    },
    doneTodosCount:(state,getters)=>{
      //getters可以作为参数使用
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
   mutations:{
    /* increment (state, payload) {
       state.count += payload.amount
     }*/
     increment (state) {
       state.count++
     }
   },
   actions:{
     //不是直接更改state,而是去调用mutations触发状态更新
      increment(context){
         context.commit('increment');
      },
     //异步操作，参数使用解构函数的形式
     incrementAsync({commit}){
         setTimeout(()=>{
             commit('increment')
         },1000)
     }
   },
   modules:{
      a:ModuleA
   }
})

// console.log(store.state.count)
// store.commit('increment') //更改state属性
// console.log(store.state.count)

//测试载荷
/*store.commit('increment', {
  amount: 10
})*/

//测试 action的触发动作
//store.dispatch('increment');

/*store.dispatch('incrementAsync',{
  amount:10
});*/

/*store.dispatch({
  type: 'incrementAsync',
  amount: 10
})*/

store.dispatch('incrementIfOddOnRootSum');
console.log(store.state.a);

export default store
