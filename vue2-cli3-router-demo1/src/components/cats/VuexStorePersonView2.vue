<template>
  <div class="tab2-container">
    <h4 style="color: red">当前求和为：{{ this.$store.state.sum }}</h4>
    <h4 style="color: red">当前求和翻十倍：{{ this.$store.getters.dataProcessing }}</h4>
    <h4 style="color: red">当前总人数是：{{ this.$store.state.list.length }}</h4>
    搜索：<input type="text" placeholder="请输入模糊搜索关键字..." v-model="nickname">&nbsp
    <button v-on:click="addPerson()">新增</button>
    <br>
    列表：
    <ul>
      <li v-for="person in list" v-bind:key="person.id">{{ person.nickname }}</li>
    </ul>
    <h4>列表中第一个人的名字是：{{ firstName }}</h4>
    <input type="text" placeholder="请输入模糊搜索关键字..." v-model="nickname">&nbsp;
    <button v-on:click="add()">添加</button>
    <ul>
      <li v-for="person in personList" v-bind:key="person.id">工号：{{person.id}}，姓名：{{person.name}}，年龄：{{person.age}}</li>
    </ul>
    <hr>
    <h4>条件与循环：</h4>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: 'Cat2',
  data() {
    return {
      number: 100,
      nickname: ''
    };
  },
  // 通过计算属性（Computed）获取状态管理插件中的状态或数据（State）生成属性。
  computed: {
    list() {
      return this.$store.state.list;
    },
    sum() {
      return this.$store.state.sum;
    },
    personList() {
      return this.$store.state.personStore.personList;
    },
    firstName() {
      return this.$store.getters['personStore/firstName'];
    }
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
    },
    // 通过状态管理后厨：用于操作数据（State）的函数添加数据（State）
    addPerson() {
      const person = {id: nanoid(), nickname: this.nickname, status: 0, isDelete: false};
      this.$store.commit('ADD_LIST', person);
      this.nickname = '';
    },
    add() {
      const person = {id: nanoid(), name: this.nickname, age: 44, state: 0};
      this.$store.commit('personStore/ADD_PERSON', person);
      this.nickname = '';
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
