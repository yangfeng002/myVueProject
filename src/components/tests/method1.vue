<template>
   <div id="app">
     <router-link></router-link>
     <router-view></router-view>//默认渲染组件
     <router-view  name="Hello"></router-view> //将渲染Hello组件
     <router-view  name="text"></router-view>   //将渲染text组件
   </div>
</template>

<script>
</script>

<style>
</style>
