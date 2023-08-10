<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <!-- 原生锚点（#）方式为 a 链接添加对应的 hash 值。 -->
    <a href="#/home">公司首页</a>
    <a href="#/movie">电影界面</a>
    <a href="#/about">关于我们</a>
    <hr/>
    <!-- 通过 component 标签结合 componentName 动态渲染组件。 -->
    <component v-bind:is="componentName"></component>
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue';
import Movie from '@/components/Movie.vue';
import About from '@/components/About.vue';

export default {
  name: 'App',
  // 注册组件
  components: {
    Home,
    Movie,
    About
  },
  data() {
    return {
      componentName: 'Home'
    }
  },
  // 在生命周期函数 created() 中监听浏览器地址中 hash 地址的变化，动态切换要展示的组件的名称。
  created: function () {
    window.onhashchange = () => {
      console.log(`通过生命周期函数created()监听到了location对象的哈希属性hash地址的变化`, location.hash);
      switch (location.hash) {
        case '#/home':
          this.componentName = 'Home';
          break;
        case '#/movie':
          this.componentName = 'Movie';
          break;
        case '#/about':
          this.componentName = 'About';
          break;
        default:
          break;
      }
    }
  }
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
