<template>
  <div class="tab2-container">
    <h4>声明式渲染：</h4>
    <hr>
    <h4>条件与循环：</h4>
  </div>
</template>

<script>
export default {
  name: 'Cat2',
  data() {
    return {
      number: 100,
    };
  },
  methods: {
    switchShow() {
      // 如何在 vue 中进行切换显示和隐藏（Toggle）三种写法？
      // 1.v-if 指令
      // 2.v-show 指令
      // 3.v-bind:class 指令
      // this.show = this.show === true ? false : true;
      // this.show = this.show !== true;
      this.show = !this.show;
      this.other = !this.other;
    },
    reverseMessage() {
      this.message = this.message.split('').reverse().join();
    }
  }
}
</script>

<style lang="less" scoped>
.tab2-container {
  min-height: 150px;
  background-color: gainsboro;
}

.hide {
  display: none;
}
</style>
