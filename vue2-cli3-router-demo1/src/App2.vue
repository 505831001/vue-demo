<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <!-- 第07步：定义路由的【链接】router-link -->
    <router-link to="/home">公司首页</router-link>
    <!--
      注意1：在 hash 地址中，/ 后面的参数项，叫做【路径参数】。
      在路由【参数对象】中，需要使用 this.$route.params 来访问路径参数。
      注意2：在 hash 地址中，? 后面的参数项，叫做【查询参数】。
      在路由【参数对象】中，需要使用 this.$route.query 来访问查询参数。
      注意3：在 this.$route 中，path 只是路径部分；fullPath 是完整的地址。
    -->
    <router-link to="/movie/1">国内专区</router-link>
    <router-link to="/movie/2?name=rh&age=18">日韩专区</router-link>
    <router-link to="/movie/3">欧美专区</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/support">技术支持</router-link>
    <router-link to="/contain">布局容器</router-link>
    <hr/>
    <!-- 第07步：定义路由的【占位符】router-view -->
    <router-view></router-view>
    <hr/>
    <h2>App2 组件底部</h2>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less" scoped>
  .app-container {
    background-color: #efefef;
    overflow: hidden;
    margin: 10px;
    padding: 15px;

    > a {
      margin-right: 10px;
    }
  }
</style>
