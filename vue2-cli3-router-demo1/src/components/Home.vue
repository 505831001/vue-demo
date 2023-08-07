<template>
  <div class="home-container">
    <h3 ref="myH3">Home 组件</h3>
    <!-- 在双大括号中通过【管道符】竖线调用 capitalize 过滤器，对 message 的值进行需求处理。 -->
    <p>{{ message | capitalize | other | addition(uuid.v4(), '2023') }}</p>
    账号：<input type="text" name="username" id="username" v-model="username" ref="iptUser">
    <br>
    <span ref="mySpan">侦听用户账号：{{ username }}</span>
    <br>
    <button type="button" v-on:click="show()">获取颜色值</button>
    <br>
    <button type="button" v-on:click="getRefsObj()">获取$Refs对象</button>
    <br>
    <button type="button" v-on:click="showIptVisible()">展示文本框</button>
    <br>
    <!-- 使用条件渲染指令v-if="iptVisible"，使用引用属性指令ref="wei" -->
    切换：<input type="text" name="visible" id="visible" v-if="iptVisible" ref="iptVsb">
    <br>
  </div>
</template>

<script>
import uuid from 'node-uuid';
export default {
  name: 'Home',
  data() {
    return {
      r: 0,
      g: 0,
      b: 0,
      username: '',
      message: uuid.v4(),
      uuid: uuid,
      // 控制文本框和按钮所需切换
      iptVisible: false
    };
  },
  computed: {
    rgb() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
  },
  filters: {
    capitalize(str) {
      return str.toString().replaceAll('-', '');
    },
    other(str) {
      return str.toUpperCase();
    },
    addition(str, arg1, arg2) {
      return str + arg1 + arg2;
    }
  },
  watch: {
    // 侦听 username 属性的值的变化
    username(newVal, oldVal) {
      console.log(`旧值：${newVal}，新值：${oldVal}`);
    }
  },
  methods: {
    show() {
      console.log(this.rgb);
    },
    getRefsObj() {
      console.log(this);
      this.$refs.myH3.style.color = 'yellow';
    },
    showIptVisible() {
      this.iptVisible = true;
      // this.$refs.iptUser.focus();
      this.$nextTick(() => {
        this.$refs.iptVsb.focus();
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    min-height: 200px;
    background-color: pink;
    padding: 15px;
  }
</style>
