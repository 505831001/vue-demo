<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center" v-bind:style="{opacity}">用户管理</h4>
    <br>
    <!-- 用户列表 -->
    <table class="table table-bordered table-striped table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>头衔</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in userList" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.position }}</td>
        <td>
          <a href="#" v-on:click.prevent="goToDetails(item.id)">详情</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // 01.组件名
  name: 'MyUser',
  // 02.子组件
  components: {

  },
  // 03.自定义指令
  directives: {

  },
  // 04.过滤器
  filters: {

  },
  // 05.混入
  mixins: {

  },
  // 06.定义v-model
  model: {

  },
  // 07.父组件传递prop
  props: {

  },
  // 08.本地状态
  data() {
    return {
      opacity: 1,
      // 用户列表数据
      userList: [
        {id: 1, name: '刘德华', age: 38, position: '深圳市'},
        {id: 2, name: '张学友', age: 35, position: '香港市'},
        {id: 3, name: '郭富城', age: 50, position: '广州市'},
        {id: 4, name: '黎明明', age: 48, position: '东莞市'}
      ]
    }
  },
  // 09.计算属性
  computed: {

  },
  // 10.监听器
  watch: {

  },
  // 11.创建之前的钩子（在此生命周期函数执行的时候，Data和Methods中的数据都还没有初始化。）
  beforeCreate() {
    console.log(`生命周期钩子之创建之前的钩子！`);
  },
  // 11.创建时候的钩子（在此生命周期函数中，Data和Methods中的数据都已经被初始化，如果调用Methods中的方法，或者操作Data中的数据，最早只能在created()函数中操作。）
  created() {
    console.log(`生命周期钩子之创建时候的钩子！UserView.vue 组件被创建了呀！`);
  },
  // 12.挂载之前的钩子（在此生命周期函数执行的时候，模板已经在内存中编译，但是尚未挂载到页面中，此时页面还是旧页面。）
  beforeMount() {
    console.log(`生命周期钩子之挂载之前的钩子！`);
  },
  // 12.挂载时候的钩子（此时页面和内存中都是新的数据，这个钩子函数是最早可以操作DOM节点的方法。）
  mounted() {
    console.log(`生命周期钩子之挂载时候的钩子！UserView.vue 组件被挂载了呀！`);
  },
  // 13.更新之前的钩子（此时页面中显示的数据还是旧数据，但是Data中的数据是最新的，并且页面并未和最新的数据同步。）
  beforeUpdate() {
    // console.log(`生命周期钩子之更新之前的钩子！`);
  },
  // 13.更新时候的钩子（此时页面显示数据和最新的Data数据同步。）
  updated() {
    // console.log(`生命周期钩子之更新时候的钩子！UserView.vue 组件被更新了呀！`);
  },
  // 14.激活时候的钩子（实例被激活的时候使用，用于重复激活一个组件实例的时候。）
  activated() {
    console.log(`生命周期钩子之重新激活组件实例的钩子！`);
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 15);
  },
  // 14.激活之前的钩子（组件实例没有被激活的时候。）
  deactivated() {
    console.log(`生命周期钩子之重新激活之前组件实例的钩子！UserView.vue 组件未被激活呀！`);
    clearInterval(this.timer);
  },
  // 15.销毁之前的钩子（当执行该生命周期函数的时候，实例本身所有Data，所有Methods，以及过滤器等等都处于可用状态，并没有真正执行销毁。）
  beforeDestroy() {
    console.log(`生命周期钩子之销毁之前的钩子！`);
  },
  // 15.销毁时候的钩子（此时组件以及被完全销毁，实例中所有的数据、方法、属性、过滤器等等都已经不可用。）
  destroyed() {
    console.log(`生命周期钩子之销毁时候的钩子！UserView.vue 组件被销毁了呀！`);
  },
  // 16.方法
  methods: {
    goToDetails(param) {
      console.log(param);
      this.$router.push('/home/userinfo/' + param);
    }
  },
  // 17.渲染函数
  render(createElement, context) {

  }
}
</script>

<style lang="less" scoped>
  h4 {
    color: brown;
  }
</style>
