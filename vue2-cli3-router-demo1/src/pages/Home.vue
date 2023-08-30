<template>
  <div>
    <h2>Home 组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['News','Message']"> -->
      <!-- 缓存一个路由组件 -->
      <keep-alive>
        <!-- 第07步：定义路由的【占位符】router-view -->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  /* beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }, */
  /* mounted() {
    console.log('Home组件挂载完毕了',this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },  */
}
</script>
