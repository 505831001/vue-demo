<template>
  <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
    <!-- 左侧 logo 和 标题区域 -->
    <div class="layout-header-left d-flex align-items-center user-select-none">
      <!-- logo -->
      <img class="layout-header-left-img" src="@/assets/logo.png" alt="">
      <!-- 标题 -->
      <h4 class="layout-header-left-title ml-3">石斑鱼后台管理系统</h4>
    </div>
    <!-- 右侧按钮区域 -->
    <div class="layout-header-right">
      <button type="button" class="btn btn-light" v-color="color">自定义指令</button>
      <button type="button" class="btn btn-light"><slot name="three"></slot></button>
      <button type="button" class="btn btn-light" v-on:click="aboutInfo()"><slot name="one"></slot></button>
      <button type="button" class="btn btn-light" v-on:click="logout()"><slot name="two"></slot></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      color: 'red'
    }
  },
  methods: {
    aboutInfo() {
      this.$router.push('/about');
    },
    logout() {
      // 1.清空token
      localStorage.removeItem('token');
      // 2.跳转到登录页面
      this.$router.push('/login');
    }
  },
  directives: {
    color: {
      bind(el) {
        el.style.color = this.color;
      }
    },
    styleColor: {
      // 当指令第一次被绑定到DOM元素时被调用
      bind(el, binding) {
        el.style.color = binding.value;
      },
      // 每次DOM元素更新时被调用
      update(el, binding) {
        el.style.color = binding.value;
      }
    },
    finalColor(el, binding) {
      el.style.color = binding.value;
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header-container {
  height: 120px;
  border-bottom: 1px solid #eaeaea;
}

.layout-header-left-img {
  height: 50px;
}
</style>
