<template>
  <div class="home-container">
    <!-- MyHeader.vue 头部区域： -->
    <MyHeader>
      <!-- slot 具名插槽的简写形式 -->
      <template #three>
        <span>设置中心</span>
      </template>
      <!-- slot 具名插槽 -->
      <template v-slot:one>
        <span>关于我们</span>
      </template>
      <!-- slot 具名插槽 -->
      <template v-slot:two>
        <span>退出登录</span>
      </template>
    </MyHeader>
    <div class="home-main-box">
      <!-- MyAside.vue 左侧边栏： -->
      <MyAside></MyAside>
      <!-- 右侧边栏： -->
      <div class="home-main-body">
        <!-- 第07步：定义路由的占位符 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 头部区域组件
import MyHeader from './subcomponents/MyHeader.vue';
// 左侧边栏组件
import MyAside from './subcomponents/MyAside.vue';

export default {
  name: 'MyHome',
  // 注册组件
  components: {
    MyHeader,
    MyAside,
  },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;

    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
