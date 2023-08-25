<template>
  <div class="tab1-container">
    <h4>当前求和为：{{ this.$store.state.sum }}</h4>
    选择基数加减：
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br>
    <button v-on:click="increment()">递增+1</button>&nbsp;
    <button v-on:click="decrement()">递减-1</button>&nbsp;
    <button v-on:click="incrementOdd()">当前求和为奇数再加</button>&nbsp;
    <button v-on:click="incrementWait()">等一等再加</button>
    <hr>
    <h4>这里，下一个章节内容。</h4>
  </div>
</template>

<script>
export default {
  name: 'Cat1',
  data() {
    return {
      n: 1
    };
  },
  methods: {
    increment() {
      // this.sum += this.n;
      this.$store.commit('addition', this.n);
    },
    decrement() {
      // this.sum -= this.n;
      this.$store.commit('subtraction', this.n);
    },
    incrementOdd() {
      // if (this.sum % 2) {
      //   this.sum += this.n;
      // }
      this.$store.dispatch('additionOddNumber', this.n);
    },
    incrementWait() {
      // setTimeout(() => {
      //   this.sum += this.n;
      // }, 1000);
      this.$store.dispatch('additionWait', this.n);
    }
  },
  mounted() {
    console.log('Count', this);
  }
};
</script>

<style lang="less" scoped>
.tab1-container {
  min-height: 150px;
  background-color: darkgray;
}
</style>
