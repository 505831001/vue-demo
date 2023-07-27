<template>
  <div class="cart-container">
    <!-- 头部区域：Header.vue 模块 -->
    <Header v-bind:title="title"></Header>
    <!-- 商品区域： Goods.vue 模块 -->
    <Goods v-for="goods in list"
           v-bind:id="goods.id"
           v-bind:title="goods.title"
           v-bind:img="goods.goods_img"
           v-bind:price="goods.goods_price"
           v-bind:state="goods.goods_state"
           v-bind:count="goods.goods_count"
           v-on:checked-state="fromGoodsState($event)">
    </Goods>
    <!-- Footer 脚部区域： -->
    <!-- 脚部区域：Footer.vue 模块 -->
    <!-- 写法：countFullStateVar() -->
    <!-- 报错：[Vue warn]: Error in render: "TypeError: _vm.countFullStateVar is not a function" -->
    <!-- 解决：countFullStateVar 此处不能加括号！ -->
    <Footer v-bind:checkedState="checkedAllState"
            v-bind:checkedPrice="checkedAllPrice"
            v-bind:checkedCount="checkedAllCount"
            v-on:change-all-checked="changeAllChecked">
    </Footer>
  </div>
</template>

<script>
// 引入第三方模块组件
import axios from "axios";
// 引入自定义模块组件
import Header from "@/components/Header/Header.vue";
import Goods from "@/components/Goods/Goods.vue";
import Footer from "@/components/Footer/Footer.vue";
import bus from '@/components/EventBus.js';
export default {
  components: {
    Header,
    Goods,
    Footer
  },
  data() {
    return {
      title: '石斑鱼商城（购物车）',
      list: []
    }
  },
  computed: {
    // 计算属性之满状态统计
    checkedAllState() {
      // every()方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
      // every()方法使用指定函数检测数组中的所有元素：
      // 如果数组中检测到有一个元素不满足，则整个表达式返回false，且剩余的元素不会再进行检测。
      // 如果所有元素都满足条件，则返回true。
      // 注意：every()方法不会对空数组进行检测。
      // 注意：every()方法不会改变原始数组。
      // [ES5][Convert to arrow function]
      //const a = this.list.every(function (element) {
      //  return element.goods_state;
      //});
      // [ES6][Convert to anonymous function]
      //const b = this.list.every(element => {
      //  return element.goods_state;
      //});
      // [ES6][Add braces to arrow function]
      const c = this.list.every(element => element.goods_state);
      console.log(`check all state for all goods is ${c}`);
      return c;
    },
    // 计算属性之总价统计
    checkedAllPrice() {
      // filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
      // 注意：filter()方法不会对空数组进行检测。
      // 注意：filter()方法不会改变原始数组。
      // 【ES5】普通函数
      //const a = this.list.filter(function (element) {
      //  return element.goods_state;
      //});
      // 【ES6】箭头函数【param1 => {return code;}】或者【(param1) => {return code;}】
      //const b = this.list.filter(element => {
      //  return element.goods_state;
      //});
      // 【ES6】箭头函数【param1 => {return code;}】或者【(param1) => {return code;}】
      const c = this.list.filter(element => element.goods_state);
      console.log(`已选商品品类是：${c.length}`);
      // reduce()方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
      // reduce()方法可以作为一个高阶函数，用于函数的 compose。
      // 注意: reduce()方法对于空数组是不会执行回调函数的。
      // 【ES5】普通函数
      //const x = c.reduce(function (total, element) {
      //    return total += element.goods_price * element.goods_count;
      //}, 0);
      // 【ES6】箭头函数【(param1, param2) => (code)】或者【(param1, param2) => {return code;}】
      //const y = c.reduce((total, element) => {
      //  return total += element.goods_price * element.goods_count;
      //}, 0);
      // 【ES6】箭头函数【(param1, param2) => (code)】或者【(param1, param2) => {return code;}】
      const z = c.reduce((total, element) => total += element.goods_price * element.goods_count, 0);
      console.log(`已选商品金额是：${z}`);
      return z;
    },
    // 计算属性之商品数量统计
    checkedAllCount() {
      //const a = this.list.filter(function (element) {
      //  return element.goods_state;
      //});
      //const b = this.list.filter(element => {
      //  return element.goods_state;
      //});
      const c = this.list.filter(element => element.goods_state);
      //const x = c.reduce(function (total, element) {
      //  return total += element.goods_count;
      //}, 0);
      //const y = c.reduce((total, element) => {
      //  return total += element.goods_count;
      //});
      const z = c.reduce((total, element) => total += element.goods_count, 0);
      console.log(`已选商品数量是：${z}`);
      return z;
    }
  },
  created() {
    // 生命周期之兄弟组件通信
    this.initialCartList();
    // 生命周期之兄弟组件通信
    bus.$on('share', element => {
      this.list.some(goods => {
        if (goods.id === element.id) {
          goods.goods_count = element.value;
          return true;
        }
      });
    });
  },
  methods: {
    async initialCartList() {
      // JSON：{ "status": 200, "message": "Okay", "list": [{"id", "goods_name", "goods_img", "goods_price", "goods_state", "goods_count"}] }
      const { data: result } = await axios.get('http://127.0.0.1:3007/api/cart');
      if (result.status === 200) {
        result.list.forEach(element => {
          if (element.goods_state === 1) {
            element.goods_state = true;
          } else if (element.goods_state === 0) {
            element.goods_state = false;
          }
        });
        this.list = result.list;
      }
    },
    fromGoodsState(event) {
      // some()方法用于检测数组中的元素是否满足指定条件（函数提供）。
      // some()方法会依次执行数组的每个元素：
      // 如果有一个元素满足条件，则表达式返回true，剩余的元素不会再执行检测。
      // 如果没有满足条件的元素，则表达式返回false。
      // 注意：some()方法不会对空数组进行检测。
      // 注意：some()方法不会改变原始数组。
      this.list.some(element => {
        if (element.id === event.id) {
          console.log(`goods id is ${element.id}, and checked state is ${event.value}`);
          element.goods_state = event.value;
          return true;
        }
      });
    },
    changeAllChecked(val) {
      console.log(`点击全选状态是：${val}`);
      this.list.forEach(function (element) {
        element.goods_state = val;
      });
    }
  }
}
</script>

<style lang="less" scoped>

</style>
