<template>
  <div>
     <h3>{{message}}</h3>
     <p>{{count}}</p>
    <!--<p>{{title}}</p>-->

    <ul v-for="todo in doneTodos">
       <li v-if="!todo.done">{{todo}}</li>
    </ul>
    <p>{{doneTodosCount}}</p>
    <p>{{curTodo.text}}</p>
  </div>
</template>

<script>
  /**
   * 子组件如何接收父组件的值
   * mapState映射函数，传值可以用数组的形式、对象的形式、函数的形式
   */
  import Vuex from 'vuex'
  console.log(Vuex.mapState);
  export default {
    name: 'Counter',
    props:{
      //给定一个默认值,用于和父组件通信
      message:String,
      default:'hello',
      required: true
    },
    /*computed:Vuex.mapState({
       /!* count:function (state) {
            return state.count
        }*!/
       count:(state)=>{return state.count},
       doneTodos(state) {
         //遍历数组
         return state.todos;
       },
      doneTodosCount(){
        return this.$store.getters.doneTodosCount
      }
    })*/
    computed:{
        ...Vuex.mapGetters({
          doneTodos:'doneTodos',
          doneTodosCount:'doneTodosCount'
        }),
        ...Vuex.mapState({
          count:'count' //取得是根节点的状态
        }),
        curTodo(){
          return this.$store.getters.getTodoById(2)
        },

    }
  }

</script>

<style scoped>

</style>
