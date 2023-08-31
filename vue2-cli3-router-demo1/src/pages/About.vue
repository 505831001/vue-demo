<template>
  <h2>About 组件</h2>
</template>

<script>
export default {
  name: 'About',
  beforeDestroy() {
    console.log('About组件即将被销毁了呀！');
  },
  destroyed() {
    console.log('About组件即将被销毁了呀！！！');
  },
  mounted() {
    console.log('About组件挂载完毕了呀！！！', this);
    window.aboutRoute = this.$route;
    window.aboutRouter = this.$router;
  },
  // 组件内守卫：进入守卫，通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('组件内进入守卫', to, from);
    if (to.meta.token) {
      if (localStorage.getItem('token') === to.meta.token) {
        next();
      } else {
        alert(`认证失败！鉴权无效！返回登录页面！！！`);
        next('/login');
      }
    } else {
      next();
    }
  },
  // 组件内守卫：离开守卫，通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('组件内离开守卫', to, from);
    next();
  }
}
</script>
