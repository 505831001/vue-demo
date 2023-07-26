<template>
  <div id="app">
    <!-- <nav> -->
    <!-- 第07步：定义路由的链接 -->
    <!-- <router-link to="/">Home</router-link> -->
    <!-- 第07步：定义路由的链接 -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <!-- 第07步：定义路由的占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'MyApp',
  }
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
