<template>
  <div>
    <!-- 标题 -->
    <h4 class="text-center">用户管理</h4>

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
  name: 'MyUser',
  data() {
    return {
      // 用户列表数据
      userList: [
        {id: 1, name: '刘德华', age: 38, position: '深圳市'},
        {id: 2, name: '张学友', age: 35, position: '香港市'},
        {id: 3, name: '郭富城', age: 50, position: '广州市'},
        {id: 4, name: '黎明明', age: 48, position: '东莞市'}
      ]
    }
  },
  methods: {
    goToDetails(param) {
      console.log(param);
      this.$router.push('/home/userinfo/' + param);
    }
  }
}
</script>

<style lang="less" scoped></style>
