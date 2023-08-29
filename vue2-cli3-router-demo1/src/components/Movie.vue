<template>
  <div class="movie-container">
    <h3>Movie 组件</h3>
    <!-- 声明式导航： -->
    <!-- this.$route  是路由的【参数对象】。 -->
    <!-- this.$router 是路由的【导航对象】。 -->
    <!-- 开启 props 传递参数对象，从而获取动态参数（/:mid）的值。 -->
    <span>影视专区组件：{{ $route.params.mid }}，或者：{{ mid }}</span>
    <!-- 编程式导航： -->
    <!--
      this.$router.push('hash Address');    函数跳转到指定 hash 地址，并增加一条历史记录。
      this.$router.replace('hash Address'); 函数跳转到指定的 hash 地址，并替换掉当前的历史记录。
      this.$router.go(Number n);            函数实现导航历史前进、后退。
      $router.back();                       函数在历史记录中，后退到上一个页面。
      $router.forward();                    函数在历史记录中，前进到下一个页面。
    -->
    <br>
    <button v-on:click="routerApiPushFunc()">编程式导航API跳转指定hash地址并且增加一条历史</button>
    <br>
    <button v-on:click="routerApiReplaceFunc()">编程式导航API跳转指定hash地址并且替换掉当前记录</button>
    <br>
    <button v-on:click="routerApiGoFunc()">编程式导航API实现历前进或者后退史记录hash地址跳转</button>
    <br>
    <button v-on:click="$router.back()">编程式导航API在历史记录中后退到上一个页面</button>
    <br>
    <button v-on:click="$router.forward()">编程式导航API在历史记录中前进到下一个页面</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: [
    'mid'
  ],
  data() {
    return {

    }
  },
  methods: {
    routerApiPushFunc() {
      this.$router.push('/about');
    },
    routerApiReplaceFunc() {
      this.$router.replace('/about');
    },
    routerApiGoFunc() {
      this.$router.go(-1);
    },
    dateFormatFunc(date) {
      console.log(date);
      console.log(date.getTime());
      let yy = date.getFullYear();
      let mm = date.getMonth();
      if (mm < 10) {
        mm = '0' + mm;
      }
      let dd = date.getDate();
      if (dd < 10) {
        dd = '0' + dd;
      }
      console.log(yy + '年' + mm + '月' + dd + '日');
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
