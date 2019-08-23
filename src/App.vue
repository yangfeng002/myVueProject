<!-- 1.模板 html结构 ，一般为公共组件 -->
<template>
  <!-- 注意：只能有1个根标签-->
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
export default {
  name: 'App'
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
