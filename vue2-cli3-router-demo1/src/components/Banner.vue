<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router 路由管理</h2>
      <button type="button" class="btn btn-primary" @click="back()">&nbsp;后退&nbsp;</button>&nbsp;
      <button type="button" class="btn btn-success" @click="forward()">&nbsp;前进&nbsp;</button>&nbsp;
      <button type="button" class="btn btn-danger" @click="goto()">&nbsp;goto(n)&nbsp;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    back() {
      console.log('路由规则Route地址fullPath：', this.$route.fullPath);
      this.$router.back();
    },
    forward() {
      console.log('路由规则Route地址fullPath：', this.$route.fullPath);
      this.$router.forward();
    },
    goto() {
      console.log('路由规则Route地址fullPath：', this.$route.fullPath);
      this.$router.go(2);
    }
  },
}
</script>
