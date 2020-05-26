<!-- 1.模板 html结构 ，一般为公共组件 -->
<template>
  <!-- 注意：只能有1个根标签-->
  <div id="app">
    <img src="./assets/logo.png">
    <!--调用自定义组件-->
    <Counter :message="test.name"></Counter>
    <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
  //引入子组件
import Counter from './components/Counter'
export default {
  name: 'App',
  components:{
    'Counter':Counter
  },
  data:function () {
    return {
       message:'你好',
       test:{
         id:12,
         name:'test'
       }
    }
  }
}
</script>

<!-- 3.样式 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{
  list-style: none;
}
</style>
