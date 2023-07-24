<template>
  <div class="about-container">
    <h3>About 组件</h3>
    <!-- 第七步：定义路由的【链接】router-link -->
    <!-- 子级路由链接组件（非默认） -->
    <!-- <router-link to="/about/tab1">Table-1</router-link> -->
    <!-- 子级路由链接组件（默认，可以省略，对应{path: '', component: Tab1},） -->
    <router-link to="/about">Table-1</router-link>
    <router-link to="/about/tab2">Table-2</router-link>
    <hr>
    <!-- 第七步：定义路由的【占位符】router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="less" scoped>
  .about-container {
    min-height: 200px;
    background-color: skyblue;
    padding: 15px;
    > a {
      margin-right: 10px;
    }
  }
</style>
