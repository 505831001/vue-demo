<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 -1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" v-on:click="subduction()">-</button>
    <!-- 购买的数量-插值表达式 {{ num }} -->
    <span class="number-box">{{ num }}</span>
    <!-- 加 +1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" v-on:click="addition()">+</button>
  </div>
</template>

<script>
  import bus from '@/components/EventBus.js';
  export default {
    props: {
      id: {
        required: true,
        type: Number
      },
      num: {
        default: 0,
        type: Number
      }
    },
    data() {
      return {
        // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
        // Instead, use a data or computed property based on the prop's value.
        // Prop being mutated: "num" found in ---> <Counter> at src/components/Counter/Counter.vue
        shareNum: 0
      }
    },
    methods: {
      addition() {
        this.shareNum = this.num + 1;
        // 生命周期之兄弟组件通信
        bus.$emit('share', { id: this.id, value: this.shareNum });
      },
      subduction() {
        if (this.num - 1 === 0) {
          return;
        }
        this.shareNum = this.num - 1;
        // 生命周期之兄弟组件通信
        bus.$emit('share', { id: this.id, value: this.shareNum });
      }
    }
  }
</script>

<style lang="less" scoped>
  .number-box {
    min-width: 30px;
    text-align: center;
    margin: 0 5px;
    font-size: 12px;
  }

  .btn-sm {
    width: 30px;
  }
</style>
