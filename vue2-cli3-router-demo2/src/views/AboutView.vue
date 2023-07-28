<template>
  <div class="about-container">
    <!-- MyHeader.vue 头部区域： -->
    <MyHeader>
      <!-- slot 具名插槽的简写形式 -->
      <template #three>
        <span>设置中心</span>
      </template>
      <!-- slot 具名插槽 -->
      <template v-slot:one>
        <span>关于我们</span>
      </template>
      <!-- slot 具名插槽 -->
      <template v-slot:two>
        <span>退出登录</span>
      </template>
    </MyHeader>
    <div class="home-main-box">
      <!-- MyAside.vue 左侧边栏： -->
      <MyBody>

      </MyBody>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 头部区域组件
import MyHeader from '@/components/subcomponents/MyHeader.vue';
// 主体区域组件
import MyBody from '@/components/subcomponents/MyBody.vue';
export default {
  name: 'AboutView',
  components: {
    MyHeader,
    MyBody
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 号'
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
}
</script>

<style lang="less" scoped>
.about-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
  }
}
</style>



