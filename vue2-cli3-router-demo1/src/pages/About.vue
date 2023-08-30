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
}
</script>
