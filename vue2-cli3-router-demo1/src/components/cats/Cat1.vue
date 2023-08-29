<template>
  <div class="tab1-container">
    <h4>当前求和为：{{ this.$store.state.sum }}</h4>
    <h4>当前求和翻十倍：{{ this.$store.getters.dataProcessing }}</h4>
    <h4>当前总人数是：{{list.length}}</h4>
    选择基数加减：
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br>
    <!-- Vuex.$store.mapState()或者Vuex.$store.mapGetters() -->
    <!-- <button v-on:click="increment()">递增+1</button>&nbsp; -->
    <!-- <button v-on:click="decrement()">递减-1</button>&nbsp; -->
    <!-- <button v-on:click="incrementOdd()">当前求和为奇数再加</button>&nbsp; -->
    <!-- <button v-on:click="incrementWait()">等一等再加</button> -->

    <!-- Vuex.$store.mapMutations()或者Vuex.$store.mapActions() -->
    <button v-on:click="increment(n)">递增+1</button>&nbsp;
    <button v-on:click="decrement(n)">递减-1</button>&nbsp;
    <button v-on:click="incrementOdd(n)">当前求和为奇数再加</button>&nbsp;
    <button v-on:click="incrementWait(n)">等一等再加</button>
    <hr>
    <h4>这里，下一个章节内容。</h4>
    <iframe v-bind:src="url">

    </iframe>
    <h4>通过Vuex插件mapState()函数获取state中的数据：{{key1}}，{{key2}}，{{key3}}，{{key4.length}}</h4>
    <h4>通过Vuex插件mapState()函数获取state中的数据：{{sum}}，{{message}}，{{status}}，{{list.length}}</h4>
    <h4>通过Vuex插件mapState()函数获取modules中的数据：{{val1}}，{{val2}}，{{val3}}</h4>
    <h4>通过Vuex插件mapState()函数获取modules中的数据：{{countSum}}，{{countMessage}}，{{countStatus}}</h4>
    <h4>通过Vuex插件mapState()函数获取modules中的数据：{{personSum}}，{{personMessage}}，{{personStatus}}</h4>
    <h4>通过Vuex插件mapGetters()函数获取getters中的数据：{{bigSum}}</h4>
    <h4>通过Vuex插件mapGetters()函数获取getters中的数据：{{dataProcessing}}</h4>
  </div>
</template>

<script>
// 引入第三方模板状态管理vuex的什么mapState
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'Cat1',
  data() {
    return {
      n: 1,
      url: 'https://www.163.com/'
    };
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    ...mapState({key1: 'sum', key2: 'message', key3: 'status', key4: 'list'}),
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum', 'message', 'status', 'list']),

    // 借助mapState()函数生成计算属性，从模块命名空间中读取数据。（对象写法）
    ...mapState('countStore', {val1: 'countSum', val2: 'countMessage', val3: 'countStatus'}),
    // 借助mapState()函数生成计算属性，从模块命名空间中读取数据。（数组写法）
    ...mapState('countStore', ['countSum', 'countMessage', 'countStatus']),
    ...mapState('personStore', ['personSum', 'personMessage', 'personStatus']),

    // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    ...mapGetters({bigSum: 'dataProcessing'}),
    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(['dataProcessing']),
  },
  methods: {
    // increment() {
    //   // this.sum += this.n;
    //   this.$store.commit('ADD', this.n);
    // },
    // decrement() {
    //   // this.sum -= this.n;
    //   this.$store.commit('SUB', this.n);
    // },
    // incrementOdd() {
    //   // if (this.sum % 2) {
    //   //   this.sum += this.n;
    //   // }
    //   this.$store.dispatch('addOdd', this.n);
    // },
    // incrementWait() {
    //   // setTimeout(() => {
    //   //   this.sum += this.n;
    //   // }, 1000);
    //   this.$store.dispatch('addWait', this.n);
    // },

    // 靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'ADD', decrement:'SUB'}),
    // 靠mapMutations生成：ADD、SUB（对象形式）
    // ...mapMutations(['ADD', 'SUB']),

    // 靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}),
    // 靠mapActions生成：incrementOdd、incrementWait（数组形式）
    // ...mapActions(['addOdd', 'addWait']),
  },
  mounted() {
    // console.log('Count', this);
    const x = mapState({key1: 'sum', key2: 'message', key3: 'status'});
    console.log(x);
    const y = mapGetters({bigSum: 'dataProcessing'});
    console.log(y);
  }
};
</script>

<style lang="less" scoped>
.tab1-container {
  min-height: 150px;
  background-color: darkgray;
}
</style>
